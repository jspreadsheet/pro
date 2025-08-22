title: Freeze Columns
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, formulas, freeze columns
description: Learn how to sticky an arbitrary number of floating columns on the left side of the spreadsheet.



# Freeze columns

The spreadsheet `freezeColumns` property helps to sticky an arbitrary number of columns always floating left on the spreadsheet. The property can be defined programatically. 

## Documentation

### Methods

Define or reset the number of freeze columns programmatically.

| Method                   | Description                                                           |
| -------------------------|-----------------------------------------------------------------------|
| setFreezeColumns(number) | Set the freeze columns.<br/>`setFreezeColumns(number: number) : void` |
| resetFreezeColumns()     | Reset the freeze columns.<br/>`resetFreezeColumns() : void`           |

 

### Initial Settings

Define or reset the number of freeze columns programmatically.

| Property              | Description                                            |
| ----------------------|--------------------------------------------------------|
| freezeColumns: number | Define the number of freeze columns on initialization. |

 

## Examples

### Basic freeze column usage.

It is possible to define the viewport when using the freeze columns, as follow: 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,10],
        tableOverflow: true,
        tableWidth: '800px',
        freezeColumns: 2
    }]
});
</script>
</html>
```
 
