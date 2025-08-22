title: Using external values on the spreadsheet calculations
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, excel-like formulas, spreadsheet-like formulas, external values
description: How to use external values in the spreadsheet calculations.



# External values

How to use external values on the spreadsheet calculations. 

This feature is only available in [Formula Premium](/products/formulas) 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the formula pro extension
jspreadsheet.setExtensions({ formula });

// Send custom formula to the correct scope
formula.define({ qty: 10, max: 20 })

// Send custom formula to the correct scope
formula.define({ hello: '"Dealing with strings"' })

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Test', '=qty*max', '=hello' ],
        ],
    }]
});
</script>
</html>
```
 
