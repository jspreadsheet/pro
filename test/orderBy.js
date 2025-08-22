const { expect } = require("chai");

describe("Order by", () => {
  it("Testing order by", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ["Mazda", 2001, 2000, "2006-01-01", "453.00", "2", "=E1*F1"],
            ["Peugeot", 2010, 5000, "2005-01-01", "23.00", "5", "=E2*F2"],
            ["Honda Fit", 2009, 3000, "2004-01-01", "214.00", "3", "=E3*F3"],
            ["Honda CRV", 2010, 6000, "2003-01-01", "56.11", "2", "=E4*F4"],
          ],
          columns: [
            { type: "text", width: 300 },
            { type: "text", width: 80 },
            { type: "text", width: 100 },
            { type: "calendar", width: 100 },
            { type: "number", width: 100 },
            { type: "number", width: 100 },
            { type: "number", width: 100 },
          ],
          minDimensions: [3,3],
        },
      ],
    });

    test[0].orderBy(0);

    expect(test[0].getData()).to.eql([
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E1*F1"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E2*F2"],
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E3*F3"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E4*F4"],
    ]);

    /*test[0].orderBy(1);

    expect(test[0].getData()).to.eql([
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E1*F1"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E2*F2"],
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E3*F3"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E4*F4"],
    ]);

    test[0].orderBy(2);

    expect(test[0].getData()).to.eql([
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E1*F1"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E2*F2"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E3*F3"],
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E4*F4"],
    ]);

    test[0].orderBy(3);

    expect(test[0].getData()).to.eql([
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E1*F1"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E2*F2"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E3*F3"],
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E4*F4"],
    ]);

    test[0].orderBy(4);

    expect(test[0].getData()).to.eql([
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E1*F1"],
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E2*F2"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E3*F3"],
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E4*F4"],
    ]);

    test[0].orderBy(5);

    expect(test[0].getData()).to.eql([
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E1*F1"],
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E2*F2"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E3*F3"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E4*F4"],
    ]);

    test[0].orderBy(6);

    expect(test[0].getData()).to.eql([
      ["Honda CRV", 2010, 6000, "2003-01-01", 56.11, 2, "=E1*F1"],
      ["Peugeot", 2010, 5000, "2005-01-01", 23, 5, "=E2*F2"],
      ["Honda Fit", 2009, 3000, "2004-01-01", 214, 3, "=E3*F3"],
      ["Mazda", 2001, 2000, "2006-01-01", 453, 2, "=E4*F4"],
    ]);*/
  });

  it("Sort rows with the default sort function", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['', '', 2],
            ['', '', 5],
            ['', '', 1],
            ['', '', 3],
            ['', '', 4],
            ['', '', 6],
          ],
        },
      ],
    });

    test[0].orderBy(2);

    const trElements = test[0].tbody.children;

    for (let i = 0; i < 6; i++) {
      expect(trElements[i].children[3].innerHTML).to.equal((i + 1).toString());
    }
  });

  it("Sort rows with a custom sort function", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          data: [
            ['', 1],
            ['', 2],
            ['', 3],
            ['', 4],
            ['', 5],
            ['', 6],
          ],
        },
      ],
      sorting: function(direction) {
        const modifier = direction ? -1 : 1;

        return function(a, b) {
            let valueA = parseInt(a[1]);
            let valueB = parseInt(b[1]);

            if (Number.isNaN(valueA)) {
                if (Number.isNaN(valueB)) {
                    return 0;
                }

                return 1;
            }

            if (Number.isNaN(valueB)) {
                return -1;
            }

            if (valueA % 2 !== 0) {
                if (valueB % 2 !== 0) {
                    return (valueA - valueB) * modifier;
                }

                return -1 * modifier;
            }

            if (valueB % 2 !== 0) {
                return 1 * modifier;
            }

            return (valueA - valueB) * modifier;
        }
    }
    });

    test[0].orderBy(1, false);

    const trElements = test[0].tbody.children;

    const results1 = ['1', '3', '5', '2', '4', '6'];

    for (let i = 0; i < 6; i++) {
      expect(trElements[i].children[2].innerHTML).to.equal(results1[i]);
    }

    test[0].orderBy(1, true);

    const results2 = ['6', '4', '2', '5', '3', '1'];

    for (let i = 0; i < 6; i++) {
      expect(trElements[i].children[2].innerHTML).to.equal(results2[i]);
    }
  });
});
