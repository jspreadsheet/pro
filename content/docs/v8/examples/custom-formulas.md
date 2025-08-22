title: Custom Spreadsheet-like Formulas
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, excel-like formulas, spreadsheet-like formulas
description: This example shows how to create custom Excel-like JavaScript formulas.



# Custom formulas

Create custom spreadsheet-like formulas in JavaScript and explore the power of this feature. The return from the method can be a string or a DOM element. 

## Special properties

When the spreadsheet invokes any method, the cell coordinates and the worksheet instance are available, and can be used for conditional operations, as shown below: 

 This feature is only available in [Formula Premium](/products/formulas) 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create a custom javascript method (capital case)
let SUMCOL = function() {
    let total = 0;
    // Sum all values in the column up to where the formula was called.
    for (let j = 0; j < this.y; j++) {
        total += parseInt(this.instance.options.data[j][this.x]);
    }
    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Apple', 931 ],
            [ 'Google', 431 ],
            [ 'Amazon', 534 ],
            [ 'Total', '=SUMCOL()' ],
        ],
        minDimensions: [8,4],
    }]
});
</script>
</html>
```

## DOM Elements

The cells accept a DOM element returned from a formula, as below: 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create a custom javascript method (capital case)
let COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300' },
            { type: 'text', width:'200' },
        ]
    }]
});
</script>
</html>
```
 
