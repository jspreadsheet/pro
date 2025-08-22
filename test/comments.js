const { expect } = require("chai");

describe("Comments", () => {
  it("Testing comments", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ],
          comments: {
            B1: "Comment 1",
            A3: "Comment 2",
          },
        },
      ],
    });

    expect(test[0].getComments("A3")).to.equal("Comment 2");

    test[0].setComments("A3", "New comment");

    expect(test[0].getComments()).to.eql({
      B1: "Comment 1",
      A3: "New comment",
    });
  });
});
