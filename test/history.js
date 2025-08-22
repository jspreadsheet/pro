const { expect } = require("chai");

describe("History", () => {
  it("Test history methods", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          minDimensions: [10, 10],
        }
      ]
    });

    test[0].setValue('F5', 'something');

    test[0].setValue('F5', 'test');

    const cellElement = test[0].table.querySelector(':scope td[data-x="5"][data-y="4"]');

    expect(cellElement.innerHTML).to.equal('test');

    jspreadsheet.history.undo();

    expect(cellElement.innerHTML).to.equal('something');

    jspreadsheet.history.redo();

    expect(cellElement.innerHTML).to.equal('test');

    jspreadsheet.history.reset();
    jspreadsheet.history.undo();

    expect(cellElement.innerHTML).to.equal('test');
  });
});