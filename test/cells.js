const { expect } = require("chai");

describe("Cells", () => {
  it("Testing cells", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          data: [
            ["Purchase price", "19700"],
            ["Down payment", "1000"],
            ["Trade-in value", "500"],
            ["Interest rate", "0.0305"],
            ["Length of loan (in months)", "60"],
            ["", ""],
            ["Monthly payment", "=PMT(B5/12,B6,B2-(B3+B4))"],
            ["Total cost", "=-(B8*B6)+(B3+B4)"],
          ],
          cells: {
            B1: { type: "number", mask: "#.##0,00" },
            B2: { type: "number", mask: "#.##0,00" },
            B3: { type: "number", mask: "#.##0,00" },
            B4: { type: "number", mask: "0.00%" },
            B5: { type: "dropdown", source: [12, 24, 36, 48, 60] },
            B7: { type: "number", mask: "#.##0,00" },
            B8: { type: "number", mask: "#.##0,00" },
          },
        },
      ],
    });

    expect(test[0].getCell("B3")).to.equal(test[0].getCellFromCoords(1, 2));

    expect(test[0].getProperty(1, 3)).to.eql({ type: "number", mask: "0.00%" });

    test[0].setProperty(1, 4, { type: "text" });

    expect(test[0].getProperty(1, 4)).to.eql({ type: "text" });
  });


  it("dynamicDropdown", () => {
    let test = jspreadsheet(root, {
      worksheets: [
        {
          minDimensions: [60,60],
          tableOverflow: true,
          tableWidth: 600,
          data: [
            ['Desconhecido','1','Masculino'],
            ['','2','Feminino'],
            ['','3','Desconhecido'],
          ],
          columns: [{ type: 'dropdown', dynamicSource: 'List_Property_Type' }],
        }
      ],
      definedNames: {
        'List_Property_Type': "C:C",
      }
    });

    expect(test[0].getValue("A1", true)).to.equal('Desconhecido');
  });

  it("autoCasting off with mask", () => {
    let test = jspreadsheet(root, {
      worksheets: [{
        minDimensions: [4,4],
        columns: [{ mask: '@' },{}],
        data: [['882202504500070005','=A1']]
      }]
    });

    expect(test[0].getValue("A1", true)).to.equal('882202504500070005');
  });
});
