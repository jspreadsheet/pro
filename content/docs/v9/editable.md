title: The Worksheet Editable State
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, editable state, readonly
description: How to change the editable state of worksheets or cells in your Jspreadsheet data grid.



# Worksheet Editable State

This section covers information about the editable state of worksheets and read-only cells. 

## Worksheets

You can change the editable status of a single worksheet or the whole spreadsheet using the property editable. 

### Settings

You can define the state of the property via initialization settings or programmatic after that.

| Method            | Description                                                                    |
| ------------------|--------------------------------------------------------------------------------|
| editable: boolean | The editable flag can be defined on the worksheet or in the spreadsheet scope. |

 

### Example

Change the editable state of the current worksheet or the whole spreadsheet. 

   

[See this example on Jsfiddle](https://jsfiddle.net/spreadsheet/v9s0eapc/)

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="Disable First Worksheet" id="disablefirst" />
<input type="button" value="Disable Spreadsheet" id="disablespreadsheet" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Method to handle the editable state of the first worksheet
const worksheet = function(e) {
    // Toggle the editable state
    grid[0].options.editable = ! grid[0].options.editable;
    // Change button label
    e.value = grid[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
}

// Method to handle the editable state of the whole spreadsheet
const spreadsheet = function(e) {
    // Toggle the editable state
    grid[0].parent.config.editable = ! grid[0].parent.config.editable;
    // Change button label
    e.value = grid[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
}

// Create a new spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
    }]
});

document.getElementById("disablefirst").onclick = () => worksheet(this)
document.getElementById("disablespreadsheet").onclick = () => spreadsheet(this)
</script>
<html>
```
  

## Cells

You can define an entire column or row or a specific cell as read-only during the initialization. 

### Methods

Set or get readonly state to individual cells after the data grid is ready.

| Method      | Description                                                      |
| ------------|------------------------------------------------------------------|
| isReadOnly  | `instance.isReadOnly(cellName: string) => void`                  |
| setReadOnly | `instance.setReadonly(cellName: string, state: boolean) => void` |

 

### Example

The example below defines a the first data grid column or a single cell as read-only. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Toggle B2" id="toggleb2"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Toogle readonly status of a cell
let toggle = function(b) {
    if (grid[0].isReadOnly('B2')) {
        grid[0].setReadOnly('B2', false);
        b.value = 'Disable B2';
    } else {
        grid[0].setReadOnly('B2', true);
        b.value = 'Enable B2';
    }
}

// Create a new spreadsheet
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ],
        columns: [
            { readonly: true, },
        ],
        cells: { B1: { type: 'number', readonly: true } }
    }],
});

document.getElementById("toggleb2").onclick = toggle
</script>
</html>
```
 
