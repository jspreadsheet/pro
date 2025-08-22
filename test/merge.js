const { expect } = require("chai");

describe("Merges", () => {
  it("Testing merges", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          worksheetName: "Sheet1",
          minDimensions: [10,10],
          mergeCells: {
            A1: [2, 2],
            B6: [3, 1],
          },
        },
      ],
    });

    expect(test[0].getMerge("A1")).to.eql([2, 2]);

    test[0].setMerge("A2", 3, 3);

    expect(test[0].getMerge()).to.eql({
      A2: [3, 3],
      B6: [3, 1],
    });

    test[0].insertRow(1,3,1);

    test[0].removeMerge("B7");

    expect(test[0].getMerge()).to.eql({
      A2: [3, 4],
    });

    test[0].destroyMerge();

    expect(test[0].getMerge()).to.eql({});
  });

  describe('Column operations', () => {
    describe('Insert column', () => {
      it('Insert column to the left of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertColumn([{
          column: 2,
        }]);

        expect(test[0].getMerge()).to.eql({
          D3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          D3: [3, 3],
        });
      })

      it('Insert column inside merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertColumn([{
          column: 3,
        }]);

        expect(test[0].getMerge()).to.eql({
          C3: [4, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [4, 3],
        });
      })

      it('Insert column to the right of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertColumn([{
          column: 5,
        }]);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });
      })
    })

    describe('Delete column', () => {
      it('Delete column to the left of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(1);

        expect(test[0].getMerge()).to.eql({
          B3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          B3: [3, 3],
        });
      })

      it('Delete column from left corner of merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(2);

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });
      })

      it('Delete column inside merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(3);

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });
      })

      it('Delete column from right corner of merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(4);

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [2, 3],
        });
      })

      it('Delete column to the right of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(5);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });
      })

      xit('Delete the first two columns from the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(2, 2);

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });
      })

      it('Delete the last two columns from the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn(3, 2);

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });
      })

      it('Delete columns from the ends of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteColumn([2, 4]);

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [1, 3],
        });
      })
    })
  })

  describe('Row operations', () => {
    describe('Insert row', () => {
      it('Insert row above merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertRow([{
          row: 2,
        }]);

        expect(test[0].getMerge()).to.eql({
          C4: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C4: [3, 3],
        });
      })

      it('Insert row inside merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertRow([{
          row: 3,
        }]);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 4],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 4],
        });
      })

      it('Insert row below merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].insertRow([{
          row: 5,
        }]);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });
      })
    })

    describe('Delete row', () => {
      it('Delete row above merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(1);

        expect(test[0].getMerge()).to.eql({
          C2: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C2: [3, 3],
        });
      })

      it('Delete row from top corner of merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(2);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });
      })

      it('Delete row inside merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(3);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });
      })

      it('Delete row from bottom corner of merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(4);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 2],
        });
      })

      it('Delete row below merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(5);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });
      })

      xit('Delete the first two rows from the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(2, 2);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });
      })

      it('Delete the last two rows from the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow(3, 2);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });
      })

      it('Delete rows from the ends of the merge', () => {
        let test = jspreadsheet(root, {
          worksheets: [
            {
              worksheetName: "Sheet1",
              minDimensions: [10,10],
              mergeCells: {
                C3: [3, 3],
              },
            },
          ],
        });

        test[0].deleteRow([2, 4]);

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });

        jspreadsheet.history.undo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 3],
        });

        jspreadsheet.history.redo();

        expect(test[0].getMerge()).to.eql({
          C3: [3, 1],
        });
      })
    })
  })
});
