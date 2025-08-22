const { expect } = require("chai");

describe("Column Group", () => {
  it("Test resetColumnGroup method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          columns: [
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

    const firstGroupElement = test[0].table.querySelector(':scope th.jss_header[data-x="2"]');

    let firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('remove');

    const secondGroupElement = test[0].table.querySelector(':scope th.jss_header[data-x="4"]');

    let secondGroupIcon = secondGroupElement.querySelector(':scope > i.material-icons');

    expect(secondGroupIcon).to.not.equal(null);
    expect(secondGroupIcon.innerHTML).to.equal('add');

    test[0].resetColumnGroup(4);

    firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('remove');

    secondGroupIcon = secondGroupElement.querySelector(':scope > i.material-icons');

    expect(secondGroupIcon).to.equal(null);
  });

  it("Test resetColumnGroup method", () => {
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

    test[0].setColumnGroup(1, 3);

    const firstGroupElement = test[0].table.querySelector(':scope th.jss_header[data-x="1"]');

    const firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);
    expect(firstGroupIcon.innerHTML).to.equal('add');
  });

  it("Test openColumnGroup and closeColumnGroup methods", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ['1', '2', '3', '4', '5']
          ],
          minDimensions: [10, 10],
          columns: [
            {
              group: 4,
              state: true,
            },
          ]
        }
      ]
    });

    const firstGroupElement = test[0].table.querySelector(':scope th.jss_header[data-x="0"]');

    const firstGroupIcon = firstGroupElement.querySelector(':scope > i.material-icons');

    expect(firstGroupIcon).to.not.equal(null);

    expect(firstGroupIcon.innerHTML).to.equal('remove');

    test[0].closeColumnGroup(0);

    expect(firstGroupIcon.innerHTML).to.equal('add');

    test[0].openColumnGroup(0);

    expect(firstGroupIcon.innerHTML).to.equal('remove');
  });
});