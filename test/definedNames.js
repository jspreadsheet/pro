const { expect } = require('chai');

describe('Defined Names', () => {
    it('Testing defined names', () => {
        // Testing initialization
        let test = jspreadsheet(root, {
            worksheets: [{
                worksheetName: 'Sheet1',
                data: [
                    ['Name', 'Age', 'Email'],
                ],
            }],
            definedNames: {
                NameList: 'Sheet1!$A$2:$A$4',
            }
        });

        // Secure formulas transform the key and value as uppercase
        expect(test[0].getDefinedNames('NAMELIST')).to.equal('SHEET1!$A$2:$A$4');

        // Set a new defined name
        test[0].setDefinedNames([
            {
                index: 'test',
                value: 'sheet1!A1:A2',
            }
        ]);

        // Retrieve new defined name
        expect(test[0].getDefinedNames('TEST')).to.equal('SHEET1!A1:A2');
    });

    it('Testing defined names international', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            toolbar: true,
            worksheets: [{
                minDimensions: [6,6],
                columns: [
                    {'title': '价格', 'width': '200px', 'type': 'numeric'},
                    {'title': '人民币价格', 'width': '150px', 'type': 'numeric'},
                ],
                data: [[100,200,'=@人民币价格*10'],['','=TEST*SUM(Summary)*价格人民币']],
            }],
            columnNamesInFormulas: true,
            debugFormulas: true,
            definedNames: {
                Summary: '$A$1:$A$3',
                Test: '1000',
                '价格人民币': '2000',
            }
        });

        // Retrieve new defined name
        expect(test[0].getValue('B2', true)).to.equal('200000000');
        expect(test[0].getValue('C1', true)).to.equal('2000');
    });

    it('Testing defined names nulls', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            toolbar: true,
            worksheets: [{
                data: [
                    [ 'Foo', '=FOO', '=B1' ],
                    [ 'Bar', '=BAR', '=B2' ],
                    [ 'Foo*Bar', '=FOO*BAR', '=C1*C2'],
                ],
            }],
            columnNamesInFormulas: true,
            debugFormulas: true,
            definedNames: {
                FOO: null,
                BAR: null
            }
        });

        expect(test[0].getValue('B1', true)).to.equal('');
        expect(test[0].getValue('B3', true)).to.equal('0');

        test[0].setDefinedNames([{ index: 'FOO', value: 10 },{ index: 'BAR', value: 10 }])

        expect(test[0].getValue('B1', true)).to.equal('10');
        expect(test[0].getValue('B3', true)).to.equal('100');
    });

    it('Testing transformation when insert rows', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    minDimensions: [10,10],
                    worksheetName: 'sheet1',
                },
                {
                    minDimensions: [10,10],
                    worksheetName: 'sheet2',
                },
            ],
            definedNames: {
                test1: 'sum(sheet1!a1)+sum(sheet2!a1)+a1',
                test2: 'sheet1!1:1'
            }
        })

        test[0].insertRow(1, 0, true)
        expect(test[1].parent.config.definedNames.TEST1).to.equal('SUM(SHEET1!A2)+SUM(SHEET2!A1)+A1');
        expect(test[1].parent.config.definedNames.TEST2).to.equal('SHEET1!2:2');
        test[1].insertRow(1, 0, true)
        expect(test[1].parent.config.definedNames.TEST1).to.equal('SUM(SHEET1!A2)+SUM(SHEET2!A1)+A1');
        expect(test[1].parent.config.definedNames.TEST2).to.equal('SHEET1!2:2');
    })
});