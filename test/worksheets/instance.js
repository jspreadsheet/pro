const { expect } = require('chai');

describe('Jspreadsheet Worksheets', () => {

    describe('worksheetId setting', () => {
        it('should set worksheetId correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetId: 'customSheet1', worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetId).to.equal('customSheet1');
        });

        it('should use random worksheetId for multiple worksheets when not specified', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetId).to.be.a('string').and.not.equal('');
            expect(test[1].options.worksheetId).to.be.a('string').and.not.equal('');
            expect(test[0].options.worksheetId).to.not.equal(test[1].options.worksheetId);
        });
    });

    describe('worksheetName setting', () => {
        it('should set worksheetName correctly', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetName).to.equal('Sheet1');
        });

        it('should set worksheetName for multiple worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet3', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetName).to.equal('Sheet1');
            expect(test[1].options.worksheetName).to.equal('Sheet2');
            expect(test[2].options.worksheetName).to.equal('Sheet3');
        });
    });

    describe('worksheetState setting', () => {
        it('should set worksheetState to visible', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', worksheetState: 'visible', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetState).to.equal('visible');
            expect(test[0].parent.el.style.display).to.not.equal('none');
        });

        it('should set worksheetState to hidden for specific worksheets', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', worksheetState: 'visible', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', worksheetState: 'hidden', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].options.worksheetState).to.equal('visible');
            expect(test[0].parent.el.style.display).to.not.equal('none');
            expect(test[1].options.worksheetState).to.equal('hidden');
            expect(test[1].parent.el.style.display).to.equal('');
        });
    });

    describe('tabs property', () => {
        it('should enable tabs when set to true', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: true,
            });

            expect(test[0].parent.config.tabs).to.equal(true);
            expect(root.querySelector('.jtabs-add')).to.exist;
        });

        it('should apply tabs configuration when set as object', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                tabs: {
                    allowCreate: true,
                    position: 'bottom',
                },
            });

            expect(test[0].parent.config.tabs).to.include({ allowCreate: true, position: 'bottom' });
            expect(root.querySelector('.jtabs-add')).to.exist;
        });
    });

    describe('allowDeleteWorksheet property', () => {
        it('should enable delete worksheet option by default', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].parent.config.allowDeleteWorksheet).to.be.undefined;
        });

        it('should disable delete worksheet option when set to false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                allowDeleteWorksheet: false,
            });

            expect(test[0].parent.config.allowDeleteWorksheet).to.equal(false);
        });
    });

    describe('allowRenameWorksheet property', () => {
        it('should enable rename worksheet option by default', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].parent.config.allowRenameWorksheet).to.be.undefined;
        });

        it('should disable rename worksheet option when set to false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                allowRenameWorksheet: false,
            });

            expect(test[0].parent.config.allowRenameWorksheet).to.equal(false);
        });
    });

    describe('allowMoveWorksheet property', () => {
        it('should enable move worksheet option by default', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
            });

            expect(test[0].parent.config.allowMoveWorksheet).to.be.undefined;
        });

        it('should disable move worksheet option when set to false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                allowMoveWorksheet: false,
            });

            expect(test[0].parent.config.allowMoveWorksheet).to.equal(false);
        });
    });

    describe('tabs allowCreate customization', () => {
        it('should show create new tab button when allowCreate is true', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    allowCreate: true,
                },
            });

            expect(test[0].parent.config.tabs.allowCreate).to.equal(true);
            expect(root.querySelector('.jtabs-add')).to.exist;
        });

        it('should not show create new tab button when allowCreate is false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    allowCreate: false,
                },
            });

            expect(test[0].parent.config.tabs.allowCreate).to.equal(false);
            expect(root.querySelector('.jtabs-add')).to.not.exist;
        });
    });

    describe('tabs allowChangePosition customization', () => {
        it('should allow drag and drop when allowChangePosition is true', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                tabs: {
                    allowChangePosition: true,
                },
            });

            expect(test[0].parent.config.tabs.allowChangePosition).to.equal(true);
        });

        it('should disable drag and drop when allowChangePosition is false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                tabs: {
                    allowChangePosition: false,
                },
            });

            expect(test[0].parent.config.tabs.allowChangePosition).to.equal(false);
        });
    });

    describe('tabs animation customization', () => {
        it('should enable animation when animation is true', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    animation: true,
                },
            });

            expect(test[0].parent.config.tabs.animation).to.equal(true);
        });

        it('should disable animation when animation is false', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    animation: false,
                },
            });

            expect(test[0].parent.config.tabs.animation).to.equal(false);
        });
    });

    describe('tabs hideHeaders customization', () => {
        it('should hide headers when hideHeaders is true and only one worksheet exists', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    hideHeaders: true,
                },
            });

            expect(test[0].parent.config.tabs.hideHeaders).to.equal(true);
        });

        it('should show headers when hideHeaders is true but multiple worksheets exist', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                    { worksheetName: 'Sheet2', minDimensions: [10, 10] },
                ],
                tabs: {
                    hideHeaders: true,
                },
            });

            expect(test[0].parent.config.tabs.hideHeaders).to.equal(true);
        });
    });

    describe('tabs padding customization', () => {
        it('should apply padding when specified', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    padding: 20,
                },
            });

            expect(test[0].parent.config.tabs.padding).to.equal(20);
        });

        it('should apply default padding when not specified', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {},
            });

            expect(test[0].parent.config.tabs.padding).to.equal(undefined);
        });
    });

    describe('tabs position customization', () => {
        it('should set tabs position to top by default', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {},
            });

            expect(test[0].parent.config.tabs.position).to.equal(undefined);
        });

        it('should set tabs position to bottom when specified', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    { worksheetName: 'Sheet1', minDimensions: [10, 10] },
                ],
                tabs: {
                    position: 'bottom',
                },
            });

            expect(test[0].parent.config.tabs.position).to.equal('bottom');
        });
    });

    describe('Jspreadsheet Worksheets Instance', () => {

        it('Rename a worksheet', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    data: [
                        ['',''],
                    ],
                    worksheetName: 'Calculations',
                }]
            });

            expect(test[0].options.worksheetName).to.equal('Calculations');

            test[0].renameWorksheet(0, 'Test');

            expect(test[0].options.worksheetName).to.equal('Test');
        });

        it('Open/Create/Delete a Worksheet', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    {
                        minDimensions: [4,4],
                        data: [[1]]
                    },
                    {
                        minDimensions: [4,4],
                        data: [[2]]
                    },
                    {
                        minDimensions: [4,4],
                        data: [[3]]
                    },
                ]
            });

            test[0].openWorksheet(1);

            expect(test[0].getWorksheetActive()).to.equal(1);

            test[0].createWorksheet({ data: [[4]] });

            let index = test[0].getWorksheetActive();

            expect(test[index].getValue('A1')).to.equal(4);

            test[0].deleteWorksheet(0);

            index = test[0].getWorksheetActive();

            expect(test[index].getValue('A1')).to.equal(4);

            test[0].undo();

            expect(test[0].getValue('A1')).to.equal(1);
        });

        it('Move a Worksheet', () => {
            let test = jspreadsheet(root, {
                worksheets: [
                    {
                        minDimensions: [4,4],
                        data: [[1]]
                    },
                    {
                        minDimensions: [4,4],
                        data: [[2]]
                    },
                    {
                        minDimensions: [4,4],
                        data: [[3]]
                    },
                ]
            });

            test[0].moveWorksheet(2,0);

            expect(test[0].getValue('A1')).to.equal(3);

            test[0].undo();

            expect(test[0].getValue('A1')).to.equal(1);
        });

        it('Rename a Worksheet', () => {
            let options = {
                worksheets: [{
                    minDimensions: [10,10],
                    filters: true,
                    data: [
                        [1,2,3]
                    ]
                },{
                    minDimensions: [10,10],
                    data: [['=Sheet1!A1*10']]
                }]
            }

            let test = jspreadsheet(root, options);

            test[0].renameWorksheet(0,'Test1');

            expect(test[1].getValue('A1')).to.equal('=TEST1!A1*10');

            test[0].renameWorksheet(0,'Hello World');

            expect(test[1].getValue('A1')).to.equal('=\'Hello World\'!A1*10');
        });
    })
});

