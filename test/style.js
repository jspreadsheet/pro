const { expect } = require('chai');

describe('Style', () => {
    it('Initialization legacy', () => {

        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                style: {
                    A1: 'background-color: red'
                }
            }]
        })

        let style = window.getComputedStyle(test[0].records[0][0].element);
        let color = style.getPropertyValue('background-color');

        expect(color).to.equal('red');
    });

    it('Initialization with Ids', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                style: {
                    A1: 0
                }
            }],
            style: ['background-color: red']
        });

        expect(test[0].getStyle('A1', true)).to.equal(0);
    });

    it('Initialization cell style', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                cells: {
                    A1: { s: 0 },
                }
            }],
            style: ['color: red']
        });
        expect(test[0].getStyle('A1')).to.equal('color: red');
    });

    it('Programmatic updates cell style', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['1',''],
                    ['',''],
                    ['',''],
                    ['',''],
                    ['',''],
                ],
                cells: {
                    A1: { s: 0 },
                }
            }],
            style: ['color:red']
        });

        test[0].setStyle('B1', 'color', 'orange');
        test[0].setStyle({ C1: 1 });

        expect(test[0].getStyle('A1')).to.equal('color:red');
        expect(test[0].getStyle('B1')).to.equal('color:orange');
        expect(test[0].getStyle('C1')).to.equal('color:orange');

        test[0].resetStyle(['A1']);
        expect(test[0].getStyle('A1')).to.equal(undefined);
    });

    it('Range style 1', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [5,5],
                style: {
                    'A1:E1': 0
                }
            }],
            style: ['color:red']
        });

        expect(test[0].getStyle('A1')).to.equal('color:red');
        expect(test[0].getStyle('A2')).to.equal(undefined);
    });

    it('Range style 2', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [5,5],
                style: {
                    '1:1': 0
                }
            }],
            style: ['color:red']
        });

        expect(test[0].getStyle('A1')).to.equal('color:red');
        expect(test[0].getStyle('B1')).to.equal('color:red');
        expect(test[0].getStyle('A2')).to.equal(undefined);
    });


    it('Programmatic Range', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [5,5],
            }]
        });

        test[0].setStyle({ "1:1": "background-color:pink" });
        test[0].setStyle({ "A:A": "background-color:blue" });
        test[0].setStyle({ "A3": "background-color:red" });

        expect(test[0].getStyle('A1')).to.equal('background-color:blue');
        expect(test[0].getStyle('B1')).to.equal('background-color:pink');
        expect(test[0].getStyle('A3')).to.equal('background-color:red');
    });
});
