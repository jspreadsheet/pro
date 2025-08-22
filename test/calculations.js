const { expect } = require('chai');

describe('Calculations', () => {
    it('Testing formula chain', () => {

        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
            }]
        })

        test[0].setValue('B5', '=B3+A1');
        test[0].setValue('B3', '=A1+1');
        test[0].setValue('A1', '2');


        expect(test[0].getValue('B5', true)).to.equal('5');
    })

    it('Testing play/pause calculations', () => {

        jspreadsheet.calculations(false);

        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['=a1+sheet2!a1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                worksheetName: 'sheet1',
            }],
            debugFormulas: true,
        })

        let test2 = jspreadsheet(root2, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                worksheetName: 'sheet2',
            }],
            debugFormulas: true,

        })

        jspreadsheet.calculations(true);

        expect(test[0].getValue('A2', true)).to.equal('2');
    })
});

describe('Test updating formulas when adding new rows', () => {
    it('1', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(A2:C2)'],
                    ['4', '5', '6', '=SUM(A2:C2)'],
                    ['7', '8', '9', '=SUM(A2:C2)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 1, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(A3:C3)');
        expect(test[0].getValue('D2')).to.equal(undefined);
        expect(test[0].getValue('D3')).to.equal('=SUM(A3:C3)');
        expect(test[0].getValue('D4')).to.equal('=SUM(A3:C3)');
    })

    it('2', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(2:2)'],
                    ['4', '5', '6', ''],
                    ['7', '8', '9', '=SUM(2:2)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 1, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(3:3)');
        expect(test[0].getValue('D2')).to.equal(undefined);
        expect(test[0].getValue('D3')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('=SUM(3:3)');
    })

    it('3', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!A2:C2)', '', '', ''],
                        ['=SUM(SHEET1!A2:C2)', '', '', ''],
                        ['=SUM(SHEET1!A2:C2)', '', '', ''],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!A3:C3)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!A3:C3)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!A3:C3)');
    })

    it('4', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!2:2)', '', '', ''],
                        ['=SUM(SHEET1!2:2)', '', '', ''],
                        ['=SUM(SHEET1!2:2)', '', '', ''],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!3:3)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!3:3)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!3:3)');
    })

    it('5', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '=SUM(A2:C3)'],
                        ['4', '5', '6', '=SUM(A2:C3)'],
                        ['7', '8', '9', '=SUM(A2:C3)'],
                        ['10', '11', '12', '=SUM(A2:C3)'],
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertRow(1, 1, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(A3:C4)');
        expect(test[0].getValue('D2')).to.equal(undefined);
        expect(test[0].getValue('D3')).to.equal('=SUM(A3:C4)');
        expect(test[0].getValue('D4')).to.equal('=SUM(A3:C4)');
        expect(test[0].getValue('D5')).to.equal('=SUM(A3:C4)');
    })

    it('6', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '=SUM(A2:C3)'],
                        ['4', '5', '6', '=SUM(A2:C3)'],
                        ['7', '8', '9', '=SUM(A2:C3)'],
                        ['10', '11', '12', '=SUM(A2:C3)'],
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertRow(1, 1, false)

        expect(test[0].getValue('D1')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D2')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D3')).to.equal(undefined);
        expect(test[0].getValue('D4')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D5')).to.equal('=SUM(A2:C4)');
    })

    it('7', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '=SUM(A2:C3)'],
                        ['4', '5', '6', '=SUM(A2:C3)'],
                        ['7', '8', '9', '=SUM(A2:C3)'],
                        ['10', '11', '12', '=SUM(A2:C3)'],
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertRow(1, 2, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D2')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D3')).to.equal(undefined);
        expect(test[0].getValue('D4')).to.equal('=SUM(A2:C4)');
        expect(test[0].getValue('D5')).to.equal('=SUM(A2:C4)');
    })

    it('8', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '=SUM(A2:C3)'],
                        ['4', '5', '6', '=SUM(A2:C3)'],
                        ['7', '8', '9', '=SUM(A2:C3)'],
                        ['10', '11', '12', '=SUM(A2:C3)'],
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertRow(1, 2, false)

        expect(test[0].getValue('D1')).to.equal('=SUM(A2:C3)');
        expect(test[0].getValue('D2')).to.equal('=SUM(A2:C3)');
        expect(test[0].getValue('D3')).to.equal('=SUM(A2:C3)');
        expect(test[0].getValue('D4')).to.equal(undefined);
        expect(test[0].getValue('D5')).to.equal('=SUM(A2:C3)');
    })

    it('9', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!A3:C4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!A3:C4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!A3:C4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!A3:C4)');
    })

    it('10', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!A2:C4)');
    })

    it('11', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 2, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!A2:C4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!A2:C4)');
    })

    it('12', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                        ['=SUM(SHEET1!A2:C3)',],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 2, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!A2:C3)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!A2:C3)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!A2:C3)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!A2:C3)');
    })

    it('13', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(2:3)'],
                    ['4', '5', '6', ''],
                    ['7', '8', '9', ''],
                    ['10', '11', '12', '=SUM(2:3)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 1, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(3:4)');
        expect(test[0].getValue('D2')).to.equal(undefined);
        expect(test[0].getValue('D3')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('D5')).to.equal('=SUM(3:4)');
    })

    it('14', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(2:3)'],
                    ['4', '5', '6', ''],
                    ['7', '8', '9', ''],
                    ['10', '11', '12', '=SUM(2:3)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 1, false)

        expect(test[0].getValue('D1')).to.equal('=SUM(2:4)');
        expect(test[0].getValue('D2')).to.equal('');
        expect(test[0].getValue('D3')).to.equal(undefined);
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('D5')).to.equal('=SUM(2:4)');
    })

    it('15', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(2:3)'],
                    ['4', '5', '6', ''],
                    ['7', '8', '9', ''],
                    ['10', '11', '12', '=SUM(2:3)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 2, true)

        expect(test[0].getValue('D1')).to.equal('=SUM(2:4)');
        expect(test[0].getValue('D2')).to.equal('');
        expect(test[0].getValue('D3')).to.equal(undefined);
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('D5')).to.equal('=SUM(2:4)');
    })

    it('16', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3', '=SUM(2:3)'],
                    ['4', '5', '6', ''],
                    ['7', '8', '9', ''],
                    ['10', '11', '12', '=SUM(2:3)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertRow(1, 2, false)

        expect(test[0].getValue('D1')).to.equal('=SUM(2:3)');
        expect(test[0].getValue('D2')).to.equal('');
        expect(test[0].getValue('D3')).to.equal('');
        expect(test[0].getValue('D4')).to.equal(undefined);
        expect(test[0].getValue('D5')).to.equal('=SUM(2:3)');
    })

    it('17', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!3:4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!3:4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!3:4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!3:4)');
    })

    it('18', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 1, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!2:4)');
    })

    it('19', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 2, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!2:4)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!2:4)');
    })

    it('20', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                        ['=SUM(SHEET1!2:3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertRow(1, 2, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!2:3)');
        expect(test[1].getValue('A2')).to.equal('=SUM(SHEET1!2:3)');
        expect(test[1].getValue('A3')).to.equal('=SUM(SHEET1!2:3)');
        expect(test[1].getValue('A4')).to.equal('=SUM(SHEET1!2:3)');
    })

    it('21', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', ''],
                        ['4', '5', '6', ''],
                        ['7', '8', '9', ''],
                        ['10', '11', '12', ''],
                    ],
                    minDimensions: [10,10],
                    worksheetName: 'Products Import',
                },
                {
                    data: [
                        ["=SUM('Products Import'!1:1)+2:2"],
                    ],
                    minDimensions: [10,10],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[1].insertRow(1, 0, true);
        expect(test[1].getValue('A2')).to.equal("=SUM('Products Import'!1:1)+3:3");
        test[0].insertRow(1, 0, true);
        expect(test[1].getValue('A2')).to.equal("=SUM('Products Import'!2:2)+3:3");
    })

    it('22', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [['=1:1+A1']]
                },
                {
                    minDimensions: [10,10],
                    data: [['=1:1+sheet1!A1']]
                }
            ],
            definedNames: { TEST: 'Sheet1!A1+Sheet2!A1+A1)' },
        })

        test[0].insertRow(1, 0, true);
        expect(test[0].getValue('A2')).to.equal("=2:2+A2");
        expect(test[1].getValue('A1')).to.equal("=1:1+SHEET1!A2");
        expect(test[1].parent.config.definedNames.TEST).to.equal("SHEET1!A2+SHEET2!A1+A1)");
    })
})

describe('Test updating formulas when adding new columns', () => {
    it('1', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3'],
                    ['4', '5', '6'],
                    ['7', '8', '9'],
                    ['=SUM(B1:B3)', '=SUM(B1:B3)', '=SUM(B1:B3)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(C1:C3)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('=SUM(C1:C3)');
        expect(test[0].getValue('D4')).to.equal('=SUM(C1:C3)');
    })

    it('2', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1', '2', '3'],
                    ['4', '5', '6'],
                    ['7', '8', '9'],
                    ['=SUM(B:B)', '', '=SUM(B:B)'],
                ],
                worksheetName: 'sheet1',
            }],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(C:C)');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('=SUM(C:C)');
    })

    it('3', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3'],
                        ['4', '5', '6'],
                        ['7', '8', '9'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B1:B3)', '=SUM(SHEET1!B1:B3)', '=SUM(SHEET1!B1:B3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!C1:C3)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!C1:C3)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!C1:C3)');
    })

    it('4', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3'],
                        ['4', '5', '6'],
                        ['7', '8', '9'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B:B)', '=SUM(SHEET1!B:B)', '=SUM(SHEET1!B:B)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!C:C)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!C:C)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!C:C)');
    })

    it('5', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(C1:D3)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('=SUM(C1:D3)');
        expect(test[0].getValue('D4')).to.equal('=SUM(C1:D3)');
        expect(test[0].getValue('E4')).to.equal('=SUM(C1:D3)');
    })

    it('6', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 1, false)

        expect(test[0].getValue('A4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('B4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('E4')).to.equal('=SUM(B1:D3)');
    })

    it('7', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 2, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('B4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('=SUM(B1:D3)');
        expect(test[0].getValue('E4')).to.equal('=SUM(B1:D3)');
    })

    it('8', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)', '=SUM(B1:C3)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 2, false)

        expect(test[0].getValue('A4')).to.equal('=SUM(B1:C3)');
        expect(test[0].getValue('B4')).to.equal('=SUM(B1:C3)');
        expect(test[0].getValue('C4')).to.equal('=SUM(B1:C3)');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('E4')).to.equal('=SUM(B1:C3)');
    })

    it('9', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B:C)', '', '', '=SUM(B:C)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(C:D)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('E4')).to.equal('=SUM(C:D)');
    })

    it('10', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B:C)', '', '', '=SUM(B:C)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 1, false)

        expect(test[0].getValue('A4')).to.equal('=SUM(B:D)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('E4')).to.equal('=SUM(B:D)');
    })

    it('11', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B:C)', '', '', '=SUM(B:C)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 2, true)

        expect(test[0].getValue('A4')).to.equal('=SUM(B:D)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('E4')).to.equal('=SUM(B:D)');
    })

    it('12', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                        ['=SUM(B:C)', '', '', '=SUM(B:C)']
                    ],
                    worksheetName: 'sheet1',
                },
            ],
        })

        test[0].insertColumn(1, 2, false)

        expect(test[0].getValue('A4')).to.equal('=SUM(B:C)');
        expect(test[0].getValue('B4')).to.equal('');
        expect(test[0].getValue('C4')).to.equal('');
        expect(test[0].getValue('D4')).to.equal('');
        expect(test[0].getValue('E4')).to.equal('=SUM(B:C)');
    })

    it('13', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!C1:D3)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!C1:D3)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!C1:D3)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!C1:D3)');
    })

    it('14', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B1:D3)');
    })

    it('15', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 2, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B1:D3)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B1:D3)');
    })

    it('16', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)', '=SUM(SHEET1!B1:C3)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 2, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B1:C3)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B1:C3)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B1:C3)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B1:C3)');
    })

    it('17', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!C:D)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!C:D)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!C:D)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!C:D)');
    })

    it('18', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 1, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B:D)');
    })

    it('19', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 2, true)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B:D)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B:D)');
    })

    it('20', () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        ['1', '2', '3', '4'],
                        ['5', '6', '7', '8'],
                        ['9', '10', '11', '12'],
                    ],
                    worksheetName: 'sheet1',
                },
                {
                    data: [
                        ['=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)', '=SUM(SHEET1!B:C)'],
                    ],
                    worksheetName: 'sheet2',
                },
            ],
        })

        test[0].insertColumn(1, 2, false)

        expect(test[1].getValue('A1')).to.equal('=SUM(SHEET1!B:C)');
        expect(test[1].getValue('B1')).to.equal('=SUM(SHEET1!B:C)');
        expect(test[1].getValue('C1')).to.equal('=SUM(SHEET1!B:C)');
        expect(test[1].getValue('D1')).to.equal('=SUM(SHEET1!B:C)');
    })

    it("21", () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        [1,2,3],

                    ],
                    minDimensions: [5,5]
                },
                {
                    data: [
                        ['=Sheet1!$A$1:$B$1','','=Sheet1!$A$1'],
                    ],
                    minDimensions: [5,5]
                },
            ],
            validations: [{
                range: 'Sheet2!$B$1:$B$3',
                action: "warning",
                criteria: "between",
                type: "number",
                allowBlank: false,
                value: [1, 3],
            }],
            definedNames: {
                TEST: 'Sheet2!$B$1:$B$3',
            }
        });

        test[0].insertRow(1, 0, 1);
        test[1].insertRow(1, 0, 1);

        expect(test[1].getValue('A2')).to.equal('=SHEET1!$A$2:$B$2');
        expect(test[1].getValue('C2')).to.equal('=SHEET1!$A$2');
        expect(test[1].parent.config.definedNames.TEST).to.equal('SHEET2!$B$2:$B$4');
        expect(test[1].parent.config.validations[0].range).to.equal('SHEET2!$B$2:$B$4');
    });

    it("22", () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    data: [
                        [1,2,3],
                        [1,2,3],
                        [1,2,3],
                        [1,2,3],
                        [1,2,3],
                        ['=SUM(A1:A4)']
                    ],
                    minDimensions: [5,5]
                }
            ]
        });

        test[0].deleteRow(1);

        expect(test[0].getValue('A5')).to.equal('=SUM(A1:A3)');
    });
})


