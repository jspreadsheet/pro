const { expect } = require('chai');

describe('Readonly', () => {
    it('Readonly methods', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['Name', 'Age', 'Email'],
                    ['John Doe', '30', 'johndoe'],
                    ['Jane Doe', '25', 'janedoe@example.com'],
                    ['Bob Smith', '40', 'bobsmith@example.com'],
                ],
                columns: [{ readonly: true, }],
                cells: {
                    A1: { readonly: false, }
                }
            }]
        })

        expect(test[0].isReadOnly('A1')).to.be.false;
        expect(test[0].isReadOnly('A2')).to.be.true;

        test[0].setReadOnly('B2', true);
        expect(test[0].isReadOnly('B2')).to.be.true;
        test[0].setReadOnly('A2', false);
        expect(test[0].isReadOnly('A2')).to.be.false;
    });
});