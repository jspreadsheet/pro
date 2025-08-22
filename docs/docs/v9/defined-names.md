title: Spreadsheet Defined Names
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, defined names
description: Defined names are variables can be used in formulas to define a cell or a range of cells. Learn more about how JSS handlers defined names.



{.enterprise}
# Defined Names

Define a name for a cell or a range of cells. Apply those to your formulas to create clear expressions. 

## Documentation

### Methods

Available methods

| Method          | Description                                                                                                                    |
| ----------------|--------------------------------------------------------------------------------------------------------------------------------|
| getDefinedNames | Get a defined name.<br/>`getDefinedNames(index: String) => Object`<br/>@Param string - defined names identification.           |
| setDefinedNames | Create a new defined name.<br/>`setDefinedNames(names: Array) => void` <br/>@param {array} - Array with the new defined names. |

 

### Settings

All available properties to define a validation

| Property            | Description               |
| --------------------|---------------------------|
| definedNames: array | An array of defined names |

 

## Example

Initiate the spreadsheet with defined names. 

 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let set = function() {
    // Create a new defined name
    spreadsheet[0].setDefinedNames([{
        index: 'Calculations',
        value: 'Sheet1!A1:A6',
    }]);
}

// Set the extension
jspreadsheet.setExtensions({ formula });

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [10, "=SUM(Summary)"],
            [20, ""],
            [30, ""],
            [40, ""],
            [50, ""]
        ],
        minDimensions: [6, 6],
    }],
    definedNames: {
        Summary: 'Sheet1!A1:A6',
    }
});
</script>
</html>
```
 
