title: Freeze Columns
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, freeze columns
description: Learn how to sticky an arbitrary number of columns on the left side of the spreadsheet.



# Freeze columns

The spreadsheet freeze columns property helps to sticky some columns floating left on the spreadsheet. The property can be defined programmatically as below: 

## Documentation

### Methods

Define or reset the number of freeze columns programmatically.

| Method                   | Description                                                           |
| -------------------------|-----------------------------------------------------------------------|
| setFreezeColumns(number) | Set the freeze columns.<br/>`setFreezeColumns(number: number) : void` |
| resetFreezeColumns()     | Reset the freeze columns.<br/>`resetFreezeColumns() : void`           |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property                             | Description                                            |
| -------------------------------------|--------------------------------------------------------|
| freezeColumns: number                | Define the number of freeze columns on initialization. |
| freezeColumnControl: boolean Premium | Enable freeze column manual control. Default: false    |

 

## Examples

### Basic freeze column usage.

It is possible to define the viewport when using the freeze columns, as follow: 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: '800px',
        freezeColumns: 2
    }]
});
</script>
</html>
```
  

### Enable manual freeze controls Premium

Enable the interface controls for manual adjustments. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: '800px',
        freezeRowControl: true,
        freezeColumnControl: true,
    }]
});
</script>
</html>
```
 
