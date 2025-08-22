const { expect } = require("chai");

describe("Meta", () => {
  it("Testing meta", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
          ],
          meta: {
            A1: {
              myMeta: "this is just a test",
              otherMetaInformation: "other test",
            },
            A2: { info: "test" },
          },
        },
      ],
    });

    expect(test[0].getMeta("A1")).to.eql({
      myMeta: "this is just a test",
      otherMetaInformation: "other test",
    });

    test[0].setMeta({
      A2: {
        test: "random text",
      },
    });

    expect(test[0].getMeta("A2")).to.eql({
      info: "test",
      test: "random text",
    });

    test[0].setMeta("B5", "something", "table");

    expect(test[0].getMeta()).to.eql({
      A1: {
        myMeta: "this is just a test",
        otherMetaInformation: "other test",
      },
      A2: {
        info: "test",
        test: "random text",
      },
      B5: {
        something: "table",
      },
    });

    test[0].resetMeta('A2');

    expect(test[0].getMeta()).to.eql({
      A1: {
        myMeta: "this is just a test",
        otherMetaInformation: "other test",
      },
      B5: {
        something: "table",
      },
    });

    test[0].resetMeta();

    expect(test[0].getMeta()).to.eql({});
  });
});
