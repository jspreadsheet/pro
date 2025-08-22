const { expect } = require('chai');

describe('Worksheets', () => {
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
});

