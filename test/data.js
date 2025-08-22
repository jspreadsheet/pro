const { expect } = require("chai");

describe("Data", () => {
  it("Testing data", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ["Mazda", 2001, 2000, 1],
            ["Peugeot", 2010, 5000, "=B2+C2"],
            ["Honda Fit", 2009, 3000, "=B3+C3"],
            ["Honda CRV", 2010, 6000, "=B4+C4"],
          ],
          minDimensions: [4, 4]
        },
      ],
    });

    test[0].setValue("D1", "=B1+C1");

    expect(test[0].getValue("D1")).to.equal("=B1+C1");
    expect(test[0].getValue("D1", true)).to.equal("4001");

    test[0].setValueFromCoords(3, 1, "=B1+C1+B2+C2");

    expect(test[0].getValueFromCoords(3, 1)).to.equal("=B1+C1+B2+C2");
    expect(test[0].getValueFromCoords(3, 1, true)).to.equal("11011");

    test[0].setData([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]);

    expect(test[0].getData()).to.eql([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]);

    expect(test[0].getDataFromRange('A1:B2')).to.eql([[1,2],[5,6]]);

    test[0].setRowData(1, ["=A1", "=B1", "=C1", "=D1"]);

    expect(test[0].getRowData(1)).to.eql(["=A1", "=B1", "=C1", "=D1"]);
    expect(test[0].getRowData(1, true)).to.eql(["1", "2", "3", "4"]);

    test[0].setColumnData(3, ["=A1", "=A2", "=A3", "=A4"]);

    expect(test[0].getColumnData(3)).to.eql(["=A1", "=A2", "=A3", "=A4"]);
    expect(test[0].getColumnData(3, true)).to.eql(["1", "1", "9", "13"]);
  });

  it("Get data from range", () => {
    let test = jspreadsheet(root, {
      worksheets: [{
        // Data pass as a reference
        data: [
          {
            name: 'Jorge',
            address: {
              number: '201',
              city: 'New York'
            }
          },
          {
            name: 'Paul',
            address: {
              number: '1',
              city: 'New Jersey'
            }
          },
        ],
        filters: true,
        tableOverflow: true,
        tableWidth: 600,
        columns: [
          {
            // Path to the data property for this column
            name: 'name',
            title: 'Full name',
            type: 'text',
            width: '200px',
            filters: ['Jorge'],
          },
          {
            // Path to the data property for this column
            name: 'address.number',
            title: 'Number',
            type: 'text',
            width: '200px',
          },
          {
            // Path to the data property for this column
            name: 'address.city',
            title: 'City',
            type: 'text',
            width: '300px',
          }
        ]
      }]
    });

    expect(test[0].getData()).to.eql([
      {
        name: 'Jorge',
        address: {
          number: '201',
          city: 'New York'
        }
      },
      {
        name: 'Paul',
        address: {
          number: '1',
          city: 'New Jersey'
        }
      },
    ]);

    //expect(test[0].getDataFromRange('B1:B2')).to.eql([[201],[1]]);

  });

  describe('Column operations', () => {
    describe('Insert column', () => {
        it('Insert column to the left of the formula', () => {
            let test = jspreadsheet(root, {
                tabs: true,
                worksheets: [
                    {
                        minDimensions: [10,10],
                        data: [
                          [1]
                        ],
                    },
                    {
                      minDimensions: [10,10],
                      data: [
                        ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                      ],
                  },
                ],
            })

            test[0].insertColumn([{
                column: 1,
            }]);

            let formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!C2',
              '=SUM(SHEET1!C2:E4)',
              '=SUM(SHEET1!C:E)',
              '=SUM(SHEET1!2:4)',
            ]);

            jspreadsheet.history.undo();

            formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!B2',
              '=SUM(SHEET1!B2:D4)',
              '=SUM(SHEET1!B:D)',
              '=SUM(SHEET1!2:4)'
            ]);

            jspreadsheet.history.redo();

            formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!C2',
              '=SUM(SHEET1!C2:E4)',
              '=SUM(SHEET1!C:E)',
              '=SUM(SHEET1!2:4)',
            ]);
        })

        it('Insert column inside the formula', () => {
          let test = jspreadsheet(root, {
              tabs: true,
              worksheets: [
                  {
                      minDimensions: [10,10],
                      data: [
                        [1]
                      ],
                  },
                  {
                    minDimensions: [10,10],
                    data: [
                      ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                    ],
                },
              ],
          })

          test[0].insertColumn([{
              column: 2,
          }]);

          let formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:E4)',
            '=SUM(SHEET1!B:E)',
            '=SUM(SHEET1!2:4)',
          ]);

          jspreadsheet.history.undo();

          formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:D4)',
            '=SUM(SHEET1!B:D)',
            '=SUM(SHEET1!2:4)'
          ]);

          jspreadsheet.history.redo();

          formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:E4)',
            '=SUM(SHEET1!B:E)',
            '=SUM(SHEET1!2:4)',
          ]);
      })

      it('Insert column to the right of the formula', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].insertColumn([{
            column: 4,
        }]);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })
    })

    describe('Delete column', () => {
      it('Delete column A', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(0);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:C4)',
          '=SUM(SHEET1!A:C)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:C4)',
          '=SUM(SHEET1!A:C)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete column B', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(1);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete column C', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete column D', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:C4)',
          '=SUM(SHEET1!B:C)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete column E', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(4);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete columns B and C', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(1, 2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete columns C and D', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(2, 2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete columns B and D', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn([1, 3]);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:B4)',
          '=SUM(SHEET1!B:B)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete columns A, B and D', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteColumn(1, 3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!2:4)',
        ]);
      })
    })

    describe('Move column', () => {
      xit('Move column to the left of formula into it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveColumn(0, 1);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:D4)',
          '=SUM(SHEET1!A:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:D4)',
          '=SUM(SHEET1!A:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      xit('Move a column within the formula to its left', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveColumn(1, 0);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:D4)',
          '=SUM(SHEET1!A:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!A2',
          '=SUM(SHEET1!A2:D4)',
          '=SUM(SHEET1!A:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      xit('Move a column within the formula to its right', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveColumn(3, 4);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:E4)',
          '=SUM(SHEET1!B:E)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:E4)',
          '=SUM(SHEET1!B:E)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      xit('Move a column to the right of the formula into it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveColumn(4, 3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:E4)',
          '=SUM(SHEET1!B:E)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:E4)',
          '=SUM(SHEET1!B:E)',
          '=SUM(SHEET1!2:4)',
        ]);
      })
    })
  })

  describe('Row operations', () => {
    describe('Insert row', () => {
        it('Insert row above formula', () => {
            let test = jspreadsheet(root, {
                tabs: true,
                worksheets: [
                    {
                        minDimensions: [10,10],
                        data: [
                          [1]
                        ],
                    },
                    {
                      minDimensions: [10,10],
                      data: [
                        ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                      ],
                  },
                ],
            })

            test[0].insertRow([{
                row: 1,
            }]);

            let formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!B3',
              '=SUM(SHEET1!B3:D5)',
              '=SUM(SHEET1!B:D)',
              '=SUM(SHEET1!3:5)',
            ]);

            jspreadsheet.history.undo();

            formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!B2',
              '=SUM(SHEET1!B2:D4)',
              '=SUM(SHEET1!B:D)',
              '=SUM(SHEET1!2:4)'
            ]);

            jspreadsheet.history.redo();

            formulas = test[1].getValue('A1:D1');

            expect(formulas[0]).to.eql([
              '=SHEET1!B3',
              '=SUM(SHEET1!B3:D5)',
              '=SUM(SHEET1!B:D)',
              '=SUM(SHEET1!3:5)',
            ]);
        })

        it('Insert row inside the formula', () => {
          let test = jspreadsheet(root, {
              tabs: true,
              worksheets: [
                  {
                      minDimensions: [10,10],
                      data: [
                        [1]
                      ],
                  },
                  {
                    minDimensions: [10,10],
                    data: [
                      ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                    ],
                },
              ],
          })

          test[0].insertRow([{
              row: 2,
          }]);

          let formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:D5)',
            '=SUM(SHEET1!B:D)',
            '=SUM(SHEET1!2:5)',
          ]);

          jspreadsheet.history.undo();

          formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:D4)',
            '=SUM(SHEET1!B:D)',
            '=SUM(SHEET1!2:4)'
          ]);

          jspreadsheet.history.redo();

          formulas = test[1].getValue('A1:D1');

          expect(formulas[0]).to.eql([
            '=SHEET1!B2',
            '=SUM(SHEET1!B2:D5)',
            '=SUM(SHEET1!B:D)',
            '=SUM(SHEET1!2:5)',
          ]);
      })

      it('Insert row below formula', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].insertRow([{
            row: 4,
        }]);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })
    })

    describe('Delete row', () => {
      it('Delete row 1', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(0);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:3)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:3)',
        ]);
      })

      it('Delete row 2', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(1);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);
      })

      it('Delete row 3', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);
      })

      it('Delete row 4', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D3)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:3)',
        ]);
      })

      it('Delete row 5', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(4);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)',
        ]);
      })

      it('Delete rows 2 and 3', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(1, 2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);
      })

      it('Delete rows 3 and 4', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(2, 2);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);
      })

      it('Delete rows 2 and 4', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow([1, 3]);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!B2:D2)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:2)',
        ]);
      })

      it('Delete rows 1, 2 and 3', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].deleteRow(1, 3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!#REF!)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!#REF!',
          '=SUM(SHEET1!#REF!)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!#REF!)',
        ]);
      })
    })

    describe('Move row', () => {
      xit('Move row above the formula into it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveRow(0, 1);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:4)',
        ]);
      })

      xit('Move a row from inside the formula to above it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveRow(1, 0);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:4)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B1',
          '=SUM(SHEET1!B1:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!1:4)',
        ]);
      })

      xit('Move a row from inside the formula to below it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveRow(3, 4);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D5)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:5)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D5)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:5)',
        ]);
      })

      xit('Move a row below the formula into it', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    data: [
                      [1]
                    ],
                },
                {
                  minDimensions: [10,10],
                  data: [
                    ['=SHEET1!B2', '=SUM(SHEET1!B2:D4)', '=SUM(SHEET1!B:D)', '=SUM(SHEET1!2:4)'],
                  ],
              },
            ],
        })

        test[0].moveRow(4, 3);

        let formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D5)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:5)',
        ]);

        jspreadsheet.history.undo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D4)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:4)'
        ]);

        jspreadsheet.history.redo();

        formulas = test[1].getValue('A1:D1');

        expect(formulas[0]).to.eql([
          '=SHEET1!B2',
          '=SUM(SHEET1!B2:D5)',
          '=SUM(SHEET1!B:D)',
          '=SUM(SHEET1!2:5)',
        ]);
      })
    })
  })
});
