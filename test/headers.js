const { expect } = require("chai");

describe("Headers", () => {
  it("Testing headers", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ["BR", "Cheese", true],
            ["CA", "Apples", false],
            ["US", "Carrots", true],
            ["GB", "Oranges", false],
          ],
          minDimensions: [3,4],
          columns: [
            {
              type: "text",
              title: "Country",
              tooltip: "Country of origin",
              width: "200px",
            },
            {
              type: "dropdown",
              title: "Food",
              tooltip: "Category of food",
              width: "100px",
              source: ["Apples", "Bananas", "Carrots", "Oranges", "Cheese"],
            },
            {
              type: "checkbox",
              title: "Stock",
              tooltip: "Quantity on stock",
              width: "100px",
            },
            {
              type: "number",
              title: "Price",
              tooltip: "Retail pricing",
              width: "100px",
            },
          ],
        },
      ],
    });

    expect(test[0].getHeaders()).to.equal("Country,Food,Stock,Price");

    test[0].setHeader(2, "New name");

    expect(test[0].getHeaders(true)).to.eql([
      "Country",
      "Food",
      "New name",
      "Price",
    ]);

    expect(test[0].getHeader(1)).to.equal("Food");

    test[0].hideHeaders();
    if (test[0].thead) {
      expect(test[0].thead.style.visibility).to.equal('collapse');
      test[0].showHeaders();
      expect(test[0].thead.style.visibility).to.equal('');
    }
  });
});
