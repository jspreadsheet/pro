const { expect } = require("chai");

describe("Frozen Columns", () => {
  it("Test resetFreezeColumns method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          freezeColumns: [1, 2, 3],
          tableOverflow: true,
          tableWidth: '800px',
          tableHeight: '500px',
        }
      ]
    });

    expect(test[0].options.freezeColumns).to.eql([1, 2, 3]);

    test[0].resetFreezeColumns();

    expect(test[0].options.freezeColumns).to.equal(null);
  });

  it("Test setFreezeColumns method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          tableOverflow: true,
          tableWidth: '800px',
          tableHeight: '500px',
        }
      ]
    });

    test[0].setFreezeColumns(1);

    expect(test[0].options.freezeColumns).to.eql([0]);
  });
});