const { expect } = require("chai");

describe("Frozen Rows", () => {
  it("Test resetFreezeRows method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          freezeRows: [2],
          tableOverflow: true,
          tableWidth: '800px',
          tableHeight: '500px',
        }
      ]
    });

    expect(test[0].options.freezeRows).to.eql([2]);

    test[0].resetFreezeRows();

    expect(test[0].options.freezeRows).to.equal(null);
  });

  it("Test setFreezeRows method", () => {
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

    test[0].setFreezeRows(2);

    expect(test[0].options.freezeRows).to.eql([0, 1]);
  });
});