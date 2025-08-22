title: Spreadsheet Collapsable Rows
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, row group
description: How to group create a collapsable row group in your JSS data grid.



# Collapsable Rows

You can create a group of rows on your data grid during the initialization or after that, as below. 

> **Changes from 9.5+**  The group of rows now expect to receive a number of rows in the group and no longer an array of numbers. 

## Documentation

### Methods

All methods related to row grouping.

| Method                          | Description                                                                                             |
| --------------------------------|---------------------------------------------------------------------------------------------------------|
| setRowGroup(number, numOfItems) | Create a new collapsable group of rows.<br/>`setRowGroup(rowNumber: number, numOfItems: number) : void` |
| resetRowGroup(number)           | Reset the row group.<br/>`resetRowGroup(rowNumber: number) : void`                                      |
| openRowGroup(number)            | Open a group of rows.<br/>`openRowGroup(rowNumber: number) : void`                                      |
| closeRowGroup(number)           | Close a group of rows.<br/>`closeRowGroup(rowNumber: number) : void`                                    |

 

### Events Settings

The following events related to row grouping.

| Property         | Description                                                                                                                 |
| -----------------|-----------------------------------------------------------------------------------------------------------------------------|
| oncreaterowgroup | When the user creates a group of rows<br/>`oncreaterowgroup?: (worksheet: object, row: number, numOfItems: number) => void` |
| onresetrowgroup  | When the user destroys a group of rows<br/>`onresetrowgroup?: (worksheet: object, row: number) => void`                     |
| onopenrowgroup   | When the user opens a group of rows<br/>`onopenrowgroup?: (worksheet: object, row: number) => void`                         |
| oncloserowgroup  | When the user closes a group of rows<br/>`oncloserowgroup?: (worksheet: object, row: number) => void`                       |

 

### Initial Settings

It is possible to initiate the data grid with one or more groups of rows available for the user. There are two related properties to be used to this purpose.

| Property        | Description                                          |
| ----------------|------------------------------------------------------|
| group?: number  | The number of rows in this group.                    |
| state?: boolean | Initial state of this group. Default: false (closed) |

 

## Examples

### Basic collapsable row group.

How to create a data grid collapse rows on Jspreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="setRowGroup(0,3)" id="setgroup"/>
<input type="button" value="resetRowGroup(0)" id="resetgroup"/>

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
        rows: { 6: { group: 5 }},
    }]
});

document.getElementById("setgroup").onclick = () => spreadsheet[0].setRowGroup(0,3);
document.getElementById("resetgroup").onclick = () => spreadsheet[0].resetRowGroup(0);
</script>
</html>
```
 
