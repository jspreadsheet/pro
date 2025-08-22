title: Spreadsheet Columns
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cells settings
description: Learn how to deal with the spreadsheet columns, their settings, methods, and related events.



# Spreadsheet Columns

The column settings define the behavior of all cells in that column. It is possible to specify the input data type and many other properties such as read-only, masks, render, and much more. There are several methods and events related to the columns.  

## Documentation

### Methods

The following methods interact with the columns programmatically.

| Method             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| autoWidth          | Resize the given column numbers based on their content.<br/>`autoWidth(columns: number[]) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| getWidth           | Get the column width or the width of all columns.<br/>`getWidth(colNumber?: Number) => number \| array`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| setWidth           | Set the column width.<br/>`setWidth(colNumber: Number, width: Number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| getColumnIdByName  | Get the column position number by name.<br/>`getColumnIdByName(cellName: String) => Number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| getColumn          | Get the column settings by number.<br/>`getColumn(colNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| getColumnIdByName  | Get the column position number by name.<br/>`getColumnIdByName(cellName: String) => Number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| getPrimaryKey      | Get a column in which the primaryKey property is defined as true. Return false if no column is defined as the primaryKey<br/>`getPrimaryKey() => mixed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| getSelectedColumns | Get the selected columns.<br/>`getSelectedColumns() => Array`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| moveColumn         | Change the position of one column.<br/>`moveColumn(columnNumber: Number, newPositionNumber: Number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| insertColumn       | Create one or more new columns.<br/>`insertColumn(mixed: Mixed, columnNumber: Number, insertBefore: Boolean, properties: Array, data: Array) => void` <br/>@param {number\|array} - number of columns to be added \| array with the data to be added (it will create a new single column with this data) <br/>@param {number?} columnNumber - The new column reference position \| null refers to the last column in the spreadsheet <br/>@param {boolean} insertBefore - The new column(s) should be included before or after the columnNumber defined <br/>@param {array} properties - Array with the new columns settings <br/>@param {array} data - Array with the new column data |
| deleteColumn       | Delete one or more columns.<br/>`deleteColumn(columnNumber: Number, numOfColumns: Number) => void` <br/>@param {number} columnNumber - Which column should be excluded starting on zero <br/>@param {number} numOfColumns - Number of columns to be excluded from the defined column reference                                                                                                                                                                                                                                                                                                                                                                                            |
| showColumn         | Show a column by number.<br/>`showColumn(columnNumber: Number) => void` <br/>@param {number} columnNumber - Show column by the number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| hideColumn         | Hide a column by number.<br/>`hideColumn(columnNumber: Number) => void` <br/>@param {number} columnNumber - Hide column by the number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| showIndex          | Show the index column for the spreadsheet.<br/>`showIndex() => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| hideIndex          | Hide the index column for the spreadsheet.<br/>`hideIndex(columnNumber: Number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| getProperties      | Get the column settings by number.<br/>`getProperties(colNumber: Number) => object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| setProperties      | Set the column settings by number.<br/>`setProperties(colNumber: Number, Properties: Object) => object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

 

### Events

There are several events related to the column in your spreadsheet. There are a few `onbefore` events you can use to intercept, validate or cancel a user action.

| Event                    | Description                                                                                                                                                                                          |
| -------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreatecolumn           | `oncreatecolumn(worksheet: Object, columnNumber: number, td: HTMLElement, options: Object)`<br/>When a new column is created.                                                                        |
| onbeforeinsertcolumn     | `onbeforeinsertcolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, insertBefore: Boolean) => Boolean`<br/>Before a new column is inserted. Return false to cancel the user action. |
| oninsertcolumn           | `oninsertcolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, historyRecords: Array, insertBefore: Boolean)`<br/>After a new column is inserted.                                    |
| onbeforedeletecolumn     | `onbeforedeletecolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number)`<br/>Before a column is excluded. Return false to cancel the user action.                                       |
| ondeletecolumn           | `ondeletecolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, affectedDOMElements: Array, historyProperties: Array, cellAttributes: Array)`<br/>After a column is excluded.         |
| onmovecolumn             | `onmovecolumn(worksheet: Object, origin: Number, destination: Number)`<br/>After a column is moved to a new position.                                                                                |
| onresizecolumn           | `onresizecolumn(worksheet: Object, column: Mixed, width: Mixed, oldWidth: Mixed)`<br/>After a column width change for one or more columns.                                                           |
| onchangecolumnvisibility | `onchangecolumnvisibility(worksheet: Object, state: boolean: affected: []]) => void`<br/>When the visibility of cols changes.                                                                        |

 

### Initial Settings

The following column-related properties are available through the initialization of the online spreadsheet.

| Property                         | Description                                                                                                            |
| ---------------------------------|------------------------------------------------------------------------------------------------------------------------|
| allowInsertColumn: boolean       | Enable the user to enter new columns. `Default: true`                                                                  |
| allowManualInsertColumn: boolean | A new column is automatically inserted when the user presses the tab key in the last column. `Default: true`           |
| allowDeleteColumn: boolean       | Allow the user to delete columns. `Default: true`                                                                      |
| allowRenameColumn: boolean       | Allow the user to rename columns. `Default: true`                                                                      |
| columnDrag: boolean              | Allow the user to change the position of one column by dragging and dropping. `Default: true`                          |
| columnSorting: boolean           | Allow the user to sort columns. `Default: true`                                                                        |
| columnResize: boolean            | Allow the user to resize columns. `Default: true`                                                                      |
| defaultColWidth: number          | The default column width. `Default: 100px (version 8+) or 50px (version7 and before).`                                 |
| ~~defaultColAlign: string~~      |  ~~The default column text alignment. Default: center.~~ Deprecated from v8.2.0+ (the default is based on a CSS class) |
| minSpareCols: number             | The mandatory number of blank columns at the end of the spreadsheet. `Default: none.`                                  |

 

### Available properties

Please bear in mind that each column type can hold specific properties. The following are the most commonly available.

| Property                       | Description                                                                                                                                                                                                                                                |
| -------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type: string\|function        | Defines the column type. Can be a string to define a native editor, or a method to define the custom editor plugin.                                                                                                                                        |
| title: string                  | Defines the column header title.                                                                                                                                                                                                                           |
| name: string                   | The name or a path of a property when the data is a JSON object.                                                                                                                                                                                           |
| tooltip: string                | Defines the onmouseover tooltip for the column header.                                                                                                                                                                                                     |
| width: string                  | Defines the width of a cell in pixels. `Default: 100px`                                                                                                                                                                                                    |
| visible: boolean               | Visibility of the column.                                                                                                                                                                                                                                  |
| align: string                  | Text alignment: left\|center\|right. `Default: center`                                                                                                                                                                                                   |
| filterOptions: function        | A method to overwrite the column definitions in real-time just before the cell edition.                                                                                                                                                                    |
| url: string                    | Load the items in the dropdown from a remote URL.                                                                                                                                                                                                          |
| source: array                  | Defines the items in the dropdown and autocomplete column type.                                                                                                                                                                                            |
| multiple: boolean              | Defines whether the dropdown or autocomplete accept multiple options.                                                                                                                                                                                      |
| delimiter: character           | Defines the dropdown delimiter. Default: ';'                                                                                                                                                                                                               |
| mask: string                   | Defines the input mask for the data cell.                                                                                                                                                                                                                  |
| decimal: string                | Decimal representation character.                                                                                                                                                                                                                          |
| truncate: number               | Truncate the string in the cell by any number of characters.                                                                                                                                                                                               |
| disabledMaskOnEdition: boolean | Disable the mask when editing.                                                                                                                                                                                                                             |
| render: string\|function      | Defines a renderer method or rule for the cell content.                                                                                                                                                                                                    |
| format: string                 | Defines the format of the date or numbers in the cell. `Default for the calendar: DD/MM/YYYY`<br/><br/>For more valid calendar formats, please visit the JavaScript calendar [quick reference](https://jsuites.net/docs/javascript-calendar/quick-reference) | primaryKey: boolean | Defines the column as primaryKey. |
| options: object                | Extended configuration for one column.                                                                                                                                                                                                                     |
| readOnly: boolean              | The column is read-only                                                                                                                                                                                                                                    |
| process: boolean               | Process the raw data when copied or downloaded. Default: true                                                                                                                                                                                              |
| autoCasting: boolean           | Try to extract numbers from a string. Default: true                                                                                                                                                                                                        |
| shiftFormula: boolean          | To update formulas on data cloning when the column is a custom editor. Default: true                                                                                                                                                                       |
| wrap: boolean                  | Wrap the text inside the column.                                                                                                                                                                                                                           |

 

## Examples

 

### Render method

Using the method render to transform the information visible to the user. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Adding an arbitrary number leading zeros.
let pad = function(cell, value, x, y, instance, options) {
    if (value !== '') {
        let size = options.digits||0;
        value = value.toString();
        while (value.length < size) {
            value = "0" + value;
        }
        cell.innerText = value;
    }
}

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        data: [[1]],
        minDimensions: [8,8],
        columns: [{ render: pad, digits: 6 }]
    }],
});
</script>
</html>
```
  

### Programmatic methods

A basic spreadsheet and a few programmatic methods available. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<ol class='example cursor'>
    <li><a id="button1">Insert a new blank column at the end</a></li>
    <li><a id="button2">Insert two new blank columns at the beginning</a></li>
    <li><a id="button3">Click to insert a new column with pre-populated values at the end of the table</a></li>
    <li><a id="button4">Click to delete the last column</a></li>
    <li><a id="button5">Click to move the first column to the third position</a></li>
    <li><a id="button6">Hide the first column</a></li>
    <li><a id="button7">Show the first column</a></li>
</ol>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ]
    }],
});

document.getElementById("button1").onclick = () => worksheets[0].insertColumn();
document.getElementById("button2").onclick = () => worksheets[0].insertColumn(2, 0, 1);
document.getElementById("button3").onclick = () => worksheets[0].insertColumn([ '0.99', '1.22', '3.11', '2.21' ]);
document.getElementById("button4").onclick = () => worksheets[0].deleteColumn();
document.getElementById("button5").onclick = () => worksheets[0].moveColumn(0, 2);
document.getElementById("button6").onclick = () => worksheets[0].hideColumn(0);
document.getElementById("button7").onclick = () => worksheets[0].showColumn(0);

</script>
</html>
```
 
