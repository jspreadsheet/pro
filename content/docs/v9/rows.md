title: Spreadsheet Rows
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, insert, delete, update rows.
description: Learn how to insert, delete or move rows, all the methods, and events related to the rows management.



# Spreadsheet Rows

This section covers all information about row management. 

## Documentation

### Methods

The following methods interact with the rows programmatically.

| Method          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeight       | Get the row height.<br/>`getHeight(rowNumber?: Number) => number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| setHeight       | Set the row height.<br/>`setHeight(rowNumber: Number, height: Number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getRow          | Get the row settings by number.<br/>`getRow(rowNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| moveRow         | Change the position of a row.<br/>`moveRow(rowNumber: Number, newPositionNumber: Number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| insertRow       | Create one or multiple new rows.<br/>`insertRow(mixed: Mixed, rowNumber: Number, insertBefore: Boolean, data: Array) => void` <br/>@param {number\|array} - number of rows to be added \| array with the data to be added (it will create a new single row with this data) <br/>@param {number?} rowNumber - The new row reference position \| null refers to the last row in the spreadsheet <br/>@param {boolean} insertBefore - The new row(s) should be included before or after the rowNumber defined <br/>@param {array} data - Array with the new row data |
| deleteRow       | Delete one or more rows.<br/>`deleteRow(rowNumber: Number, numOfRows: Number) => void` <br/>@param {number} rowNumber - Which column should be excluded starting from zero <br/>@param {number} numOfRows - Number of rows to be excluded from the define row reference                                                                                                                                                                                                                                                                                              |
| showRow         | Show a row by number.<br/>`showRow(rowNumber: Number) => void` <br/>@param {number} rowNumber - Show the row by its number                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| hideRow         | Hide a row by number.<br/>`hideRow(rowNumber: Number) => void` <br/>@param {number} rowNumber - Hide the row by its number                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| getSelectedRows | Get the selected rows.<br/>`getSelectedRows(asIds: Boolean) => array\|string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

 

### Events

There are several events related to the row in your spreadsheet. There are a few <b>onbefore</b> events to intercept, validate or cancel a user action.

| Event                 | Description                                                                                                                                                                              |
| ----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreaterow           | `oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement)`<br/>After a new row is inserted.                                                                                    |
| onbeforeinsertrow     | `onbeforeinsertrow(worksheet: Object, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => Boolean`<br/>Before a new row is inserted. Return false to cancel the user action. |
| oninsertrow           | `oninsertrow(worksheet: Object, rowNumber: Number, numOfRows: Number, historyRecords: Array, insertBefore: Boolean)`<br/>After a new row is inserted.                                    |
| onbeforedeleterow     | `onbeforedeleterow(worksheet: Object, rowNumber: Number, numOfRows: Number)`<br/>Before a row is deleted. Return false to cancel the user action.                                        |
| ondeleterow           | `ondeleterow(worksheet: Object, rowRecords: DOMElements, rowData: Array, cellAttributes: Object)`<br/>After a row is deleted.                                                            |
| onmoverow             | `onmoverow(worksheet: Object, origin: Number, destination: Number)`<br/>After a row is moved to a new position.                                                                          |
| onresizerow           | `onresizerow(worksheet: Object, row: Mixed, height: Mixed, oldHeight: Mixed)`<br/>After the height changes for one or more rows.                                                         |
| onchangerowvisibility | `onchangerowvisibility(worksheet: Object, state: boolean: affected: []]) => void`<br/>When the visibility of rows changes.                                                               |

 

### Initial Settings

The following row-related properties are available through the spreadsheet initialization.

| Property                      | Description                                                                                              |
| ------------------------------|----------------------------------------------------------------------------------------------------------|
| allowInsertRow: boolean       | Enable the user to enter new rows. `Default: true`                                                       |
| allowManualInsertRow: boolean | A new row is automatically inserted when the user presses the enter key in the last row. `Default: true` |
| allowDeleteRow: boolean       | Allow the user to delete rows. `Default: true`                                                           |
| rowDrag: boolean              | Allow the user to change the position of one row by dragging and dropping. `Default: true`               |
| rowResize: boolean            | Allow the user to resize rows. `Default: true`                                                           |
| defaultRowHeight: number      | The default row height. `From version 8: this can have an impact on the scroll calculations.`            |
| minSpareRows: number          | The mandatory number of blank rows at the end of the spreadsheet. `Default: none.`                       |

 

### Available properties

It is possible to initialize the spreadsheet with a custom id, text and height using the following properties:

| Property       | Description                                                                                       |
| ---------------|---------------------------------------------------------------------------------------------------|
| id: number     | Defines the record id. That is helpful for synchronizing the spreadsheet content with a database. |
| height: number | Defines the row height in pixels.                                                                 |
| index: string  | The row index text. `Default: row number`                                                         |

 

## Examples

A basic spreadsheet with a few programmatic methods available. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<scrip src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<ol class='example' style='cursor:pointer;'>
    <li><a id="button1">Click to insert a new blank row at the end of the spreadsheet</a></li>
    <li><a id="button2">Click to insert two new blank rows at the beginning of the spreadsheet</a></li>
    <li><a id="button3">Click to insert a new row with pre-populated values at the end of the spreadsheet</a></li>
    <li><a id="button4">Click to delete the last row</a></li>
    <li><a id="button5">Click to move the first row to the third position</a></li>
    <li><a id="button6">Hide the first row</a></li>
    <li><a id="button7">Show the first row</a></li>
</ol>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ],
        worksheetName: 'Row management',
    }],
});

document.getElementById("button1").onclick = () => spreadsheet[0].insertRow()
document.getElementById("button2").onclick = () => spreadsheet[0].insertRow(2, 0, 1);
document.getElementById("button3").onclick = () => spreadsheet[0].insertRow([ '0.99', '1.22', '3.11', '2.21' ]);
document.getElementById("button4").onclick = () => spreadsheet[0].deleteRow();
document.getElementById("button5").onclick = () => spreadsheet[0].moveRow(0, 2);
document.getElementById("button6").onclick = () => spreadsheet[0].hideRow(0);
document.getElementById("button7").onclick = () => spreadsheet[0].showRow(0);
</script>
</html>
```
 
