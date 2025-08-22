title: Freeze Rows
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, freeze rows
description: Learn how to sticky an arbitrary number of rows on the top of the spreadsheet.



# Freeze rows

The spreadsheet freeze rows property helps to sticky some rows floating top on the spreadsheet. The property can be defined programmatically as below: 

## Documentation

### Methods

Define or reset the number of freeze rows programmatically.

| Method                | Description                                                     |
| ----------------------|-----------------------------------------------------------------|
| setFreezeRows(number) | Set the freeze rows.<br/>`setFreezeRows(number: number) : void` |
| resetFreezeRows()     | Reset the freeze rows.<br/>`resetFreezeRows() : void`           |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property                          | Description                                         |
| ----------------------------------|-----------------------------------------------------|
| freezeRows: number                | Define the number of freeze rows on initialization. |
| freezeRowControl: boolean Premium | Enable freeze row manual control. Default: false    |

 

## Examples

### Basic freeze rows usage.

It is possible to define the viewport when using the freeze rows, as follow: 

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
        freezeRows: 4,
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
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
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
 
