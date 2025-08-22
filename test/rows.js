const { expect } = require("chai");

describe("Rows", () => {
  it("Testing rows", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ["US", "Cheese", 1000],
            ["CA", "Apples", 1200],
            ["CA", "Carrots", 2000],
            ["BR", "Oranges", 3800],
          ],
          minDimensions: [4,4],
          defaultRowHeight: 150,
        },
      ],
    });

    expect(test[0].getHeight()).to.eql([150, 150, 150, 150]);

    test[0].setHeight(3, 100);

    expect(test[0].getHeight(3)).to.equal(100);

    test[0].moveRow(3, 1);

    expect(test[0].getHeight()).to.eql([150, 100, 150, 150]);

    test[0].setHeight([0, 1, 2, 3], [50, 60, 70, 80]);

    expect(test[0].getHeight()).to.eql([50, 60, 70, 80]);

    test[0].insertRow(1, 1, false);

    expect(test[0].getHeight()).to.eql([50, 60, 150, 70, 80]);

    test[0].deleteRow(2, 2);

    expect(test[0].getHeight()).to.eql([50, 60, 80]);

    expect(test[0].getRow(0)).to.satisfy((row) => {
      return row.y === 0 && (row.visible === true || row.visible === undefined);
    });

    test[0].hideRow(0);

    expect(test[0].getRow(0)).to.include({
      y: 0,
      visible: false,
    });

    test[0].showRow(0);

    expect(test[0].getRow(0)).to.satisfy((row) => {
      return row.y === 0 && (row.visible === true || row.visible === undefined);
    });
  });
});
