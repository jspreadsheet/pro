const { expect } = require("chai");

describe("Filter", () => {
  it("Start spreadsheet with filters", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          filters: true,
        },
      ],
    });

    const columns = test[0].cols;

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(true);
    }
  });

  it("Start spreadsheet with filters (2)", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
          columns: [
            {
              filter: true,
              filters: ['grape', 'strawberry'],
            },
            {
              filter: true,
              filters: ['bed', 'house'],
            },
            {},
            {
              filter: true,
            }
          ]
        },
      ],
    });

    expect(test[0].results).to.eql([3]);

    const columns = test[0].cols;

    const columnsWithFilters = [0, 1, 3];

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(
        columnsWithFilters.includes(i)
      );
    }
  });

  it("Use showFilter and hideFilter method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
        },
      ],
    });

    test[0].showFilter();

    const columns = test[0].cols;

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(true);
    }

    test[0].hideFilter();

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(false);
    }
  });

  it("Use showFilter and hideFilter method (2)", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
        },
      ],
    });

    test[0].showFilter(1);

    const columns = test[0].cols;

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(
        i === 1
      );
    }

    test[0].hideFilter(1);

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i].element;

      expect(element.classList.contains('jss_filters_icon')).to.equal(false);
    }
  });

  it("Use showFilter and hideFilter method (3)", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
        },
      ],
    });

    test[0].showFilter('B2:C4');

    const cellsWithfilter = [
      [1, 1],
      [2, 1],
    ];

    for (let i = 0; i < cellsWithfilter.length; i++) {
      const cellCoords = cellsWithfilter[i];
      const element = test[0].getCell(cellCoords[0], cellCoords[1]);

      expect(element.querySelector(':scope > .jss_actions > .jss_filters_icon')).to.not.equal(null);
    }

    test[0].hideFilter('B2:C4');

    for (let i = 0; i < cellsWithfilter.length; i++) {
      const cellCoords = cellsWithfilter[i];
      const element = test[0].getCell(cellCoords[0], cellCoords[1]);

      expect(element.querySelector(':scope > .jss_actions > .jss_filters_icon')).to.equal(null);
    }
  });

  it("Test setFilter and resetFilters method", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
          columns: [
            {},
            {
              filter: true,
              filters: ['bed', 'house'],
            },
            {},
            {}
          ]
        },
      ],
    });

    test[0].setFilter(0, ['grape', 'strawberry']);

    expect(test[0].results).to.eql([3]);

    test[0].resetFilters(1);

    expect(test[0].results).to.eql([2, 3]);
  });

  it("Test setFilter and resetFilters method (2)", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
          columns: [
            {},
            {
              filter: true,
              filters: ['bed', 'house'],
            },
            {},
            {}
          ]
        },
      ],
    });

    test[0].setFilter(0, ['grape', 'strawberry']);

    test[0].resetFilters();

    expect(test[0].results).to.eql(null);
  });

  it("Test openFilter and resetFilters methods", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['apple', 'car', 1, 4],
            ['pineapple', 'house', 2, 3],
            ['grape', 'table', 3, 2],
            ['strawberry', 'bed', 4, 1],
          ],
          filters: true,
        },
      ],
    });

    test[0].openFilter(1);

    expect(test[0].parent.filter.style.display).to.eql('block');

    test[0].closeFilter();

    expect(test[0].parent.filter.style.display).to.eql('');
  });
});
