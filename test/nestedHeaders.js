const { expect } = require("chai");

describe("Nested Headers", () => {
  it("Testing nested headers", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
          ],
          nestedHeaders: [
            [
              {
                title: "Supermarket information",
                colspan: "6",
              },
            ],
            [
              {
                title: "Location",
                colspan: "1",
              },
              {
                title: "Other Information",
                colspan: "3",
              },
              {
                title: "Costs",
                colspan: "2",
              },
            ],
          ],
        },
      ],
    });

    test[0].setNestedCell(0, 0, {
      title: "New title",
      align: "right",
    });

    test[0].setNestedCell([
      {
        x: 0,
        y: 1,
        properties: {
          title: "New title 2",
        },
      },
      {
        x: 2,
        y: 1,
        properties: {
          title: "New title 3",
        },
      },
    ]);

    expect(test[0].getNestedHeaders()).to.eql([
      [
        {
          title: "New title",
          colspan: "6",
          align: "right",
        },
      ],
      [
        {
          title: "New title 2",
          colspan: "1",
          align: "center",
        },
        {
          title: "Other Information",
          colspan: "3",
          align: "center",
        },
        {
          title: "New title 3",
          colspan: "2",
          align: "center",
        },
      ],
    ]);

    test[0].setNestedHeaders([
      [
        {
          title: "Test",
          colspan: 2,
        },
        {
          title: "Another test",
          colspan: 1,
        },
      ],
    ]);

    expect(test[0].getNestedHeaders()).to.eql([
      [
        {
          title: "Test",
          colspan: 2,
          align: "center",
        },
        {
          title: "Another test",
          colspan: 1,
          align: "center",
        },
      ],
    ]);

    test[0].resetNestedHeaders();
    expect(test[0].getNestedHeaders()).to.eql(null);
  });
});
