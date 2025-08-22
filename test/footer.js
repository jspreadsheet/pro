const { expect } = require("chai");

describe("Footer", () => {
  it("Testing footers", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ],
          minDimensions: [3,3],
          footers: [
            ["Cell 1", "Cell 2", "Cell 3"],
            ["Cell 4", "Cell 5", "Cell 6"],
          ],
        },
      ],
    });

    expect(test[0].getFooterValue(2, 1)).to.equal("Cell 6");

    test[0].setFooterValue(2, 1, "New Cell");

    expect(test[0].getFooterValue(2, 1)).to.equal("New Cell");

    test[0].setFooter([["new 1", "new 2", "new 3"]]);

    expect(test[0].getFooter()).to.eql([["new 1", "new 2", "new 3"]]);

    test[0].resetFooter();

    expect(test[0].getFooter()).to.equal(null);
  });
});
