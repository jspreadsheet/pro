title: Spreadsheet Collapsable Columns
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, column group
description: How to create a collapsable column group in your JSS data grid.



# Collapsable Columns

You can use this feature to create a collapsable group of columns. 

## Documentation

### Methods

All methods related to row grouping.

| Method                         | Description                                                                                                      |
| -------------------------------|------------------------------------------------------------------------------------------------------------------|
| setColumnGroup(number, number) | Create a new collapsable group of columns.<br/>`setColumnGroup(columnNumber: number, numOfItems: number) : void` |
| resetColumnGroup(number)       | Reset the column group.<br/>`resetColumnGroup(columnNumber: number) : void`                                      |
| openColumnGroup(number)        | Open a group of columns.<br/>`openColumnGroup(columnNumber: number) : void`                                      |
| closeColumnGroup(number)       | Close a group of columns.<br/>`closeColumnGroup(columnNumber: number) : void`                                    |

 

### Events Settings

The following events related to row grouping.

| Property            | Description                                                                                                                          |
| --------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| oncreatecolumngroup | When the user creates a group of columns<br/>`oncreatecolumngroup?: (worksheet: object, column: number, numOfItems: number) => void` |
| onresetcolumngroup  | When the user destroys a group of columns<br/>`onresetcolumngroup?: (worksheet: object, column: number) => void`                     |
| onopencolumngroup   | When the user opens a group of columns<br/>`onopencolumngroup?: (worksheet: object, column: number) => void`                         |
| onclosecolumnroup   | When the user closes a group of columns<br/>`onclosecolumnroup?: (worksheet: object, column: number) => void`                        |

 

### Initial Settings

It is possible to initiate the data grid with one or more groups of columns available for the user. There are two related properties to be used to this purpose.

| Property        | Description                                          |
| ----------------|------------------------------------------------------|
| group?: number  | The number of columns in the group                   |
| state?: boolean | Initial state of this group. Default: false (closed) |

 

## Examples

 

### Basic collapsable column group.

How to create a data grid collapse columns on Jspreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="setColumnGroup(0,3)" id="setgroup" />
<input type="button" value="resetColumnGroup(0)" id="resetgroup" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the data
// Data
let data = [];

for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

// Create a new spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '400px',
        columns: [{},{},{},{},{},{ group: 5, state: false }], // group 5 columns, collapsed
    }]
});

document.getElementById("setgroup").onclick = () => spreadsheet[0].setColumnGroup(0,3)
document.getElementById("resetgroup").onclick = () => spreadsheet[0].resetColumnGroup(0)
</script>
</html>
```
 
