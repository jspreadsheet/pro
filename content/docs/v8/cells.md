title: Spreadsheet Cells Settings
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cells settings
description: Find out more about the events, methods, and settings related to the spreadsheet cells property. Learn how to overwrite column settings at the cell level.



# Cells Settings

The `cells property` helps overwrite the column settings for one individual cell. It defines the input data type editor and many other properties, such as read-only, masks, render, and much more. 

## Documentation

### Methods

The following methods interact with the data grid cells programmatically.

| Method            | Description                                                                                                                                                                                                                                                                                      |
| ------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getCell           | Get the spreadsheet cell object from the cell name. The cell name is the spreadsheet standard such as A1, B3<br/>`getCell(cellName: String) => Object`                                                                                                                                           |
| getCellFromCoords | Get the spreadsheet cell object from its coordinates. The coordinates starts on zero-zero for the first cell A1.<br/>`getCellFromCoords(x: Number, y: Number) => Object`                                                                                                                         |
| getSelected       | Get the worksheet selected cells.<br/>`getSelected(columnNameOnly: Boolean, ignoreHidden: Boolean) => Array`<br/>@param columnNameOnly: To get only the cell names as string (true). Get the cell objects (false).<br/>@param ignoreHidden: Exclude hidden cells (true). Bring all cells (false) |
| updateCell        | This is a internal method and it does not perform persistence or history. You should avoid using this method, please use setValue instead.<br/>`updateCell(x: Number, y: Number, value: String, force: Boolean) => Array`                                                                        |
| getCells          | Get the attribute settings from a cell by cell name.<br/>`getCells(cellName: String) => Object`                                                                                                                                                                                                  |
| setCells          | Set the attribute settings for a cell by cell name.<br/>`setCells(cellName: String, attributes: Object) => void`                                                                                                                                                                                 |
| isAttached        | Verify if a cell element is attached to the DOM.<br/>`isAttached(x: Number, y: Number) => void`                                                                                                                                                                                                  |

 

### Data Grid Events

JS events related to the JavaScript data grid cells.

| Property     | Description                                                                                                                                                          |
| -------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreatecell | `oncreatecell(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Value) => void`<br/>JSS creates the cells progressively when the viewport is in use. |

 

### Cells Settings Pro

The following property is available through the initialization of the spreadsheet.

| Property     | Description                             |
| -------------|-----------------------------------------|
| cells: array | Array with the initial cell attributes. |


## Examples

The following example shows how to initialize the spreadsheet with custom attributes at the cell level. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h3>Vehicle Payment Calculator</h3>', ''],
            ['Purchase price', '19700'],
            ['Down payment', '1000'],
            ['Trade-in value', '500'],
            ['Interest rate', '0.0305'],
            ['Length of loan (in months)', '60'],
            ['', ''],
            ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
            ['Total cost', '=-(B8*B6)+(B3+B4)'],
        ],
        columns: [
            { width:'300px' },
            { width:'200px' },
        ],
        mergeCells: {
            A1: [2, 1]
        },
        rows: {
            0: { height:'200px' }
        },
        cells: {
            A1: { type:'html' },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        },
    }]
});
</script>
</html>
```
 
