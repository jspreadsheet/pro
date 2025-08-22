title: Spreadsheet Performance Overview
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, performance, spreadsheet benchmark
description: What are the important aspects that can cause an impact on the spreadsheet performance and how to get the best of the Jspreadsheet Pro.

# Spreadsheet performance

In this section, we will cover some important considerations about spreadsheet performance when dealing with large datasets. 

## What's new

There are significant changes with Engine 8, which is the base for the new Jspreadsheet Pro (Base or Premium edition). The lazy loading has been replaced by internal DOM management, that will create the DOM elements on-demand as the user navigates in the viewport. The viewport is now automatically enabled when the pagination, tableOverflow, or full screen properties are in use.  

### The spreadsheet viewport

The following properties will enable your viewport and activate the smart DOM management. 

#### tableOverflow: boolean

This works along with the tableWidth and tableHeight properties to define a fixed viewport width and height dimensions.  

#### fullscreen: boolean

This renders as many cells as will fit to fill the screen. 

#### pagination: number

This creates the pagination based on the number defined.  

### Formulas

The formula handler has been decoupled from Jspreadsheet and it has been moved to an extension. This allows us to optimize and improve how JSS parses the formulas. This results in amazing performance and more options for the developers.  

## Example

The following example will create a table from an array with 20 columns x 50000 rows (one million cells) 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>
<div id="console"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Data
let data = [];

// Create the data
for (let j = 0; j < 50000; j++) {
    data[j] = [];
    for (let i = 0; i < 20; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

// Initial time before creating the table
let s = Date.now();

// Create the table
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
    }],
    onload: function() {
        // Final time 
        let e = Date.now();
        // Update console
        document.getElementById('console').innerText = 'The table was created in: ' + (e - s) + 'ms';
    },
    parseFormulas: false,
})
</script>
</html>
```
 
