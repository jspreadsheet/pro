const { expect } = require("chai");

describe("Select", () => {
    it("Testing select", () => {
        let test = jspreadsheet(root, {
            worksheets: [
                {
                    minDimensions: [10, 10],
                    worksheetName: 'Sheet1'
                },
            ],
        });

        test[0].selectAll();
        expect(test[0].getSelection()).to.eql([0, 0, 9, 9]);

        test[0].updateSelectionFromCoords(0, 1, 4, 4);
        expect(test[0].getRange()).to.equal("SHEET1!A2:E5");

        test[0].resetSelection();
        expect(test[0].getHighlighted()).to.eql([]);

        test[0].updateSelectionFromCoords(0, 1, 1, 3);
        expect(test[0].getSelectedColumns()).to.eql([0, 1]);
        expect(test[0].getSelectedRows()).to.eql([1, 2, 3]);
        expect(test[0].isSelected(0, 1)).to.be.true;
        expect(test[0].isSelected(0, 0)).to.be.false;
    });

});

