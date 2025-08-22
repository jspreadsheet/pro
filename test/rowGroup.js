const { expect } = require("chai");

describe("Row Group", () => {
  it("Test resetRowGroup method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          rows: [
            {},
            {},
            {
              group: 4,
              state: true,
            },
            {},
            {
              group: 2,
            }
          ]
        }
      ]
    });

    const firstGroupElement = test[0].table.querySelector(':scope td.jss_row[data-y="2"]');

    let firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('remove');

    const secondGroupElement = test[0].table.querySelector(':scope td.jss_row[data-y="4"]');

    let secondGroupIcon = secondGroupElement.querySelector(':scope > i.material-icons');

    expect(secondGroupIcon).to.not.equal(null);
    expect(secondGroupIcon.innerHTML).to.equal('add');

    test[0].resetRowGroup(4);

    firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('remove');

    secondGroupIcon = secondGroupElement.querySelector(':scope > i.material-icons');

    expect(secondGroupIcon).to.equal(null);
  });

  it("Test resetRowGroup method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
        }
      ]
    });

    test[0].setRowGroup(1, 3);

    const firstGroupElement = test[0].table.querySelector(':scope td.jss_row[data-y="1"]');

    const firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('add');
  });

  it("Test openRowGroup and closeRowGroup methods", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          rows: [
            {
              group: 4,
              state: true,
            },
          ]
        }
      ]
    });

    const firstGroupElement = test[0].table.querySelector(':scope td.jss_row[data-y="0"]');

    const firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);

    expect(firstGroupIcon.innerHTML).to.equal('remove');

    test[0].closeRowGroup(0);

    expect(firstGroupIcon.innerHTML).to.equal('add');

    test[0].openRowGroup(0);

    expect(firstGroupIcon.innerHTML).to.equal('remove');
  });
});