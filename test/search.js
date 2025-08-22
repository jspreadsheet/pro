const { expect } = require("chai");

describe("Search", () => {
  it("Test showSearch and hideSearch methods", () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push([i]);
    }

    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data,
        },
      ],
    });

    test[0].showSearch();

    expect(test[0].searchContainer.style.display).to.equal('');

    test[0].hideSearch();

    expect(test[0].searchContainer.style.display).to.equal('none');
  });

  it("Test search and resetSearch methods", () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push([i]);
    }

    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data,
        },
      ],
    });

    test[0].search('1');

    expect(test[0].results).to.eql([1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21]);

    test[0].resetSearch();

    expect(test[0].results).to.equal(null);
  });
});
