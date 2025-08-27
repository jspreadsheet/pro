const { expect } = require('chai');

describe ('Jspreadsheet Worksheets', () => {

    describe('onopenworksheet event', () => {
        it('should trigger onopenworksheet when opening a worksheet', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                onopenworksheet: (worksheet, worksheetNumber) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, worksheetNumber };
                },
            });

            test[0].openWorksheet(1);

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.worksheetNumber).to.equal(1);
        });

        it('should trigger onopenworksheet for multiple worksheet switches', () => {
            let eventCount = 0;
            let eventArgsList = [];

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
                onopenworksheet: (worksheet, worksheetNumber) => {
                    eventCount++;
                    eventArgsList.push({ worksheet, worksheetNumber });
                },
            });

            test[0].openWorksheet(0);
            test[0].openWorksheet(2);

            expect(eventCount).to.equal(3);
            expect(eventArgsList[0].worksheet.options.worksheetName).to.equal('Sheet1');
            expect(eventArgsList[0].worksheetNumber).to.equal(0);
            expect(eventArgsList[2].worksheet.options.worksheetName).to.equal('Sheet3');
            expect(eventArgsList[2].worksheetNumber).to.equal(2);
        });
    });

    describe('onbeforecreateworksheet event', () => {
        it('should trigger onbeforecreateworksheet and allow worksheet creation', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                onbeforecreateworksheet: (options, worksheetNumber) => {
                    eventTriggered = true;
                    eventArgs = { options, worksheetNumber };
                },
            });

            test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] });

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.worksheetNumber).to.equal(1);
            expect(test.length).to.equal(2);
        });

        it('should cancel worksheet creation when onbeforecreateworksheet returns false', () => {
            let eventTriggered = false;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                onbeforecreateworksheet: () => {
                    eventTriggered = true;
                    return false;
                },
            });

            test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] });

            expect(eventTriggered).to.equal(true);
            expect(test.length).to.equal(1);
        });
    });

    describe('oncreateworksheet event', () => {
        it('should trigger oncreateworksheet after creating a worksheet', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                oncreateworksheet: (worksheet, worksheetOptions, worksheetNumber) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, worksheetOptions, worksheetNumber };
                },
            });

            test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] });

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.worksheetOptions.worksheetName).to.equal('Sheet2');
            expect(eventArgs.worksheetNumber).to.equal(1);
        });

        it('should trigger oncreateworksheet for multiple worksheet creations', () => {
            let eventCount = 0;
            let eventArgsList = [];

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                oncreateworksheet: (worksheet, worksheetOptions, worksheetNumber) => {
                    eventCount++;
                    eventArgsList.push({ worksheet, worksheetOptions, worksheetNumber });
                },
            });

            test[0].createWorksheet({ worksheetName: 'Sheet2', minDimensions: [5, 5] });
            test[0].createWorksheet({ worksheetName: 'Sheet3', minDimensions: [5, 5] });

            expect(eventCount).to.equal(2);
            expect(eventArgsList[0].worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgsList[0].worksheetNumber).to.equal(1);
            expect(eventArgsList[1].worksheet.options.worksheetName).to.equal('Sheet3');
            expect(eventArgsList[1].worksheetNumber).to.equal(2);
        });
    });

    describe('onrenameworksheet event', () => {
        it('should trigger onrenameworksheet when renaming a worksheet', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                onrenameworksheet: (worksheet, worksheetIndex, value, oldValue) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, worksheetIndex, value, oldValue };
                },
            });

            test[0].renameWorksheet(0, 'RenamedSheet');

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('RenamedSheet');
            expect(eventArgs.worksheetIndex).to.equal(0);
            expect(eventArgs.value).to.equal('RenamedSheet');
            expect(eventArgs.oldValue).to.equal('Sheet1');
        });

        it('should trigger onrenameworksheet for multiple renames', () => {
            let eventCount = 0;
            let eventArgsList = [];

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                onrenameworksheet: (worksheet, worksheetIndex, value, oldValue) => {
                    eventCount++;
                    eventArgsList.push({ worksheet, worksheetIndex, value, oldValue });
                },
            });

            test[0].renameWorksheet(0, 'FirstSheet');
            test[0].renameWorksheet(1, 'SecondSheet');

            expect(eventCount).to.equal(2);
            expect(eventArgsList[0].worksheet.options.worksheetName).to.equal('FirstSheet');
            expect(eventArgsList[0].worksheetIndex).to.equal(0);
            expect(eventArgsList[0].value).to.equal('FirstSheet');
            expect(eventArgsList[0].oldValue).to.equal('Sheet1');
            expect(eventArgsList[1].worksheet.options.worksheetName).to.equal('SecondSheet');
            expect(eventArgsList[1].worksheetIndex).to.equal(1);
            expect(eventArgsList[1].value).to.equal('SecondSheet');
            expect(eventArgsList[1].oldValue).to.equal('Sheet2');
        });
    });

    describe('onbeforedeleteworksheet event', () => {
        it('should trigger onbeforedeleteworksheet and allow worksheet deletion', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                onbeforedeleteworksheet: (worksheet, worksheetNumber) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, worksheetNumber };
                },
            });

            test[0].deleteWorksheet(1);

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.worksheetNumber).to.equal(1);
            expect(test.length).to.equal(1);
        });

        it('should cancel worksheet deletion when onbeforedeleteworksheet returns false', () => {
            let eventTriggered = false;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                onbeforedeleteworksheet: () => {
                    eventTriggered = true;
                    return false;
                },
            });

            test[0].deleteWorksheet(1);

            expect(eventTriggered).to.equal(true);
            expect(test.length).to.equal(2);
        });
    });

    describe('ondeleteworksheet event', () => {
        it('should trigger ondeleteworksheet after deleting a worksheet', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                ondeleteworksheet: (worksheet, oldWorksheetNumber) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, oldWorksheetNumber };
                },
            });

            test[0].deleteWorksheet(1);

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.oldWorksheetNumber).to.equal(1);
        });

        it('should trigger ondeleteworksheet for multiple deletions', () => {
            let eventCount = 0;
            let eventArgsList = [];

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
                ondeleteworksheet: (worksheet, oldWorksheetNumber) => {
                    eventCount++;
                    eventArgsList.push({ worksheet, oldWorksheetNumber });
                },
            });

            test[0].deleteWorksheet(1);
            test[0].deleteWorksheet(1);

            expect(eventCount).to.equal(2);
            expect(eventArgsList[0].worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgsList[0].oldWorksheetNumber).to.equal(1);
            expect(eventArgsList[1].worksheet.options.worksheetName).to.equal('Sheet3');
            expect(eventArgsList[1].oldWorksheetNumber).to.equal(1);
        });
    });

    describe('onmoveworksheet event', () => {
        it('should trigger onmoveworksheet when moving a worksheet', () => {
            let eventTriggered = false;
            let eventArgs = null;

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                onmoveworksheet: (worksheet, newPosition, oldPosition) => {
                    eventTriggered = true;
                    eventArgs = { worksheet, newPosition, oldPosition };
                },
            });

            test[0].moveWorksheet(1, 0);

            expect(eventTriggered).to.equal(true);
            expect(eventArgs.worksheet.options.worksheetName).to.equal('Sheet2');
            expect(eventArgs.newPosition).to.equal(1);
            expect(eventArgs.oldPosition).to.equal(0);
        });

        it('should trigger onmoveworksheet for multiple moves', () => {
            let eventCount = 0;
            let eventArgsList = [];

            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
                onmoveworksheet: (worksheet, newPosition, oldPosition) => {
                    eventCount++;
                    eventArgsList.push({ worksheet, newPosition, oldPosition });
                },
            });

            test[0].moveWorksheet(2, 0);
            test[0].moveWorksheet(1, 2);

            expect(eventCount).to.equal(2);
            expect(eventArgsList[0].worksheet.options.worksheetName).to.equal('Sheet3');
            expect(eventArgsList[0].newPosition).to.equal(2);
            expect(eventArgsList[0].oldPosition).to.equal(0);
            expect(eventArgsList[1].worksheet.options.worksheetName).to.equal('Sheet1');
            expect(eventArgsList[1].newPosition).to.equal(1);
            expect(eventArgsList[1].oldPosition).to.equal(2);
        });
    });
});