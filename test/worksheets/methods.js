const { expect } = require('chai');

describe ('Jspreadsheet Worksheets', () => {

    describe('getWorksheet method', () => {
        it('should return 0 for the first worksheet', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    {
                        worksheetId: "sheet1",
                        minDimensions: [10, 10],
                    },
                ],
            });

            const worksheet = test[0].getWorksheet("sheet1");

            expect(worksheet).to.equal(0);
        });

        it('should return correct positions for multiple worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetId: "sheet1", minDimensions: [10, 10] },
                    { worksheetId: "sheet2", minDimensions: [10, 10] },
                    { worksheetId: "sheet3", minDimensions: [10, 10] },
                ],
            });

            expect(test[0].getWorksheet("sheet1")).to.equal(0);
            expect(test[0].getWorksheet("sheet2")).to.equal(1);
            expect(test[0].getWorksheet("sheet3")).to.equal(2);
        });
    });

    describe('getWorksheetName method', () => {
        it('should get worksheet name using getWorksheetName', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    worksheetName: 'Sheet1'
                }]
            });

            const name = test[0].getWorksheetName(0);
            expect(name).to.equal('SHEET1');
        });

        it('should get worksheet name using getWorksheetName for multiple worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    {worksheetName: 'SHEET1'},
                    {worksheetName: 'SHEET2'},
                    {worksheetName: 'SHEET3'},
                ]
            });

            const sheet1 = test[0].getWorksheetName(0);
            expect(sheet1).to.equal('SHEET1');
            const sheet2 = test[0].getWorksheetName(1);
            expect(sheet2).to.equal('SHEET2');
            const sheet3 = test[0].getWorksheetName(2);
            expect(sheet3).to.equal('SHEET3');
        });
    });

    describe('openWorksheet method', () => {
        it('should open the worksheet by index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            test[0].openWorksheet(1);
            expect(test[0].getWorksheetActive()).to.equal(1);
        });

        it('should open different worksheets in a sequence', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            test[0].openWorksheet(0);
            expect(test[0].getWorksheetActive()).to.equal(0);
            test[0].openWorksheet(2);
            expect(test[0].getWorksheetActive()).to.equal(2);
        });
    });

    describe('createWorksheet method', () => {
        it('should create a new worksheet with given configuration', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test.length).to.equal(1);

            const newWorksheet = test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] });
            expect(test.length).to.equal(2);
            expect(newWorksheet.options.worksheetName).to.equal('Sheet2');
            expect(newWorksheet.options.minDimensions).to.deep.equal([5, 5]);
        });

        it('should create a worksheet at a specific position', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] }, 1);
            expect(test.length).to.equal(3);
            expect(test[1].options.worksheetName).to.equal('Sheet2');
            expect(test[0].options.worksheetName).to.equal('Sheet1');
            expect(test[2].options.worksheetName).to.equal('Sheet3');
        });
    });

    describe('deleteWorksheet method', () => {
        it('should delete a worksheet by index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            expect(test.length).to.equal(2);

            test[0].deleteWorksheet(1);
            expect(test.length).to.equal(1);
            expect(test[0].options.worksheetName).to.equal('Sheet1');
        });

        it('should delete multiple worksheets correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            test[0].deleteWorksheet(1);
            test[0].deleteWorksheet(1);

            expect(test.length).to.equal(1);
            expect(test[0].options.worksheetName).to.equal('Sheet1');
        });
    });

    describe('renameWorksheet method', () => {
        it('should rename a worksheet by index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            test[0].renameWorksheet(0, 'RenamedSheet');
            expect(test[0].options.worksheetName).to.equal('RenamedSheet');
        });

        it('should rename multiple worksheets correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            test[0].renameWorksheet(0, 'FirstSheet');
            test[0].renameWorksheet(2, 'ThirdSheet');
            expect(test[0].options.worksheetName).to.equal('FirstSheet');
            expect(test[1].options.worksheetName).to.equal('Sheet2');
            expect(test[2].options.worksheetName).to.equal('ThirdSheet');
        });
    });

    describe('moveWorksheet method', () => {
        it('should move a worksheet to a new position', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            test[0].moveWorksheet(1, 0);
            expect(test[0].options.worksheetName).to.equal('Sheet2');
            expect(test[1].options.worksheetName).to.equal('Sheet1');
        });

        it('should move worksheets in a larger set correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet4', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet5', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet6', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet7', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet8', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet9', minDimensions: [10, 10] },
                ],
            });

            test[0].moveWorksheet(2, 0);
            expect(test[0].options.worksheetName).to.equal('Sheet3');
            expect(test[1].options.worksheetName).to.equal('Sheet1');
            expect(test[2].options.worksheetName).to.equal('Sheet2');
        });
    });

    describe('getWorksheetActive method', () => {
        it('should get the active worksheet index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].getWorksheetActive()).to.equal(0);
            test[0].openWorksheet(1);
            expect(test[0].getWorksheetActive()).to.equal(1);
        });

        it('should maintain active worksheet after multiple operations', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            test[0].openWorksheet(2);
            expect(test[0].getWorksheetActive()).to.equal(2);
            test[0].openWorksheet(0);
            expect(test[0].getWorksheetActive()).to.equal(0);
        });
    });

    // Removed: instance.getWorksheetInstance: (position: number). Use: instance.parent.worksheets[position]
    describe('getWorksheetInstance method', () => {
        xit('should get worksheet instance by index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            const instance = test[0].getWorksheetInstance(0);
            expect(instance.options.worksheetName).to.equal('Sheet1');
        });

        xit('should get correct instances for multiple worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].getWorksheetInstance(0).options.worksheetName).to.equal('Sheet1');
            expect(test[0].getWorksheetInstance(1).options.worksheetName).to.equal('Sheet2');
            expect(test[0].getWorksheetInstance(2).options.worksheetName).to.equal('Sheet3');
        });
    });

    describe('getWorksheetInstanceByName method', () => {
        it('should get worksheet instance by name', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            const instance = test[0].getWorksheetInstanceByName('Sheet1');
            expect(instance.options.worksheetName).to.equal('Sheet1');
        });

        it('should get correct instances by name for multiple worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].getWorksheetInstanceByName('Sheet1').options.worksheetName).to.equal('Sheet1');
            expect(test[0].getWorksheetInstanceByName('Sheet2').options.worksheetName).to.equal('Sheet2');
            expect(test[0].getWorksheetInstanceByName('Sheet3').options.worksheetName).to.equal('Sheet3');
        });
    });

    describe('setWorksheetState method', () => {
        it('should hide a worksheet by index', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            test[0].setWorksheetState(1, false);
            expect(test[1].parent.el.style.display).to.equal('');
        });

        it('should show and hide worksheets correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            test[0].setWorksheetState(0, false);
            expect(test[0].parent.el.style.display).to.equal('');
            test[0].setWorksheetState(0, true);
            expect(test[0].parent.el.style.display).to.not.equal('none');
        });
    });
});