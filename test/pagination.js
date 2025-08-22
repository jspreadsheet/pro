const { expect } = require("chai");

describe("Pagination", () => {
  it("Test the first page", () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push([i]);
    }

    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data,
          pagination: 4,
        },
      ],
    });

    expect(test[0].whichPage()).to.equal(0);

    const trElements = test[0].tbody.children;

    expect(trElements.length).to.equal(4);

    for (let i = 0; i < 4; i++) {
      expect(trElements[i].children[1].innerHTML).to.equal(i.toString());
    }
  });

  it("Test the first page", () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push([i]);
    }

    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data,
          pagination: 4,
        },
      ],
    });

    test[0].page(6);

    expect(test[0].whichPage()).to.equal(6);

    const trElements = test[0].tbody.children;

    expect(trElements.length).to.equal(1);

    expect(trElements[0].children[1].innerHTML).to.equal('24');
  });

  it("Identify which page a line is on", () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push([i]);
    }

    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data,
          pagination: 4,
        },
      ],
    });

    expect(test[0].whichPage(0)).to.equal(0);
    expect(test[0].whichPage(23)).to.equal(5);
    expect(test[0].whichPage(24)).to.equal(6);
  });
});
