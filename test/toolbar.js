const { expect } = require("chai");

describe("Toolbar", () => {
  it("Test showToolbar and hideToolbar methods", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          minDimensions: [10, 10]
        },
      ],
    });

    test[0].showToolbar();

    expect(test[0].parent.toolbar.style.display).to.equal('');

    test[0].hideToolbar();

    expect(test[0].parent.toolbar.style.display).to.equal('none');
  });

  it("Test setToolbar method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          minDimensions: [10, 10]
        },
      ],
    });

    test[0].setToolbar([
      {
          type: 'label',
          content: 'test'
      }
    ])

    const toolbarItemsElements = test[0].parent.toolbar.firstChild.children;

    expect(toolbarItemsElements.length).to.equal(1);

    expect(toolbarItemsElements[0].innerHTML).to.equal('test');
  });
});
