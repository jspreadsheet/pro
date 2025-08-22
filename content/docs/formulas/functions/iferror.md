title: IFERROR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IFERROR function in Jspreadsheet

# IFERROR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IFERROR` function in Jspreadsheet Formulas Pro helps manage the output of your formulas. Essentially, it returns a desired value if your initial formula results in an error. Conversely, if the formula doesn't result in an error, it will return a different value. This function allows you to manage and control how your spreadsheet behaves when dealing with potential errors.

## Documentation

The IFERROR function is used to return a value if a formula results in error, and another value if it does not.

### Category

Logical

### Syntax

IFERROR(value, value_if_error)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value or formula to evaluate. If this produces an error, the value_if_error is returned. |
| `value_if_error` | The value to return if the value argument produces an error. |


### Behavior

The `IFERROR` function in spreadsheets is used to trap and handle errors in calculations. Here's how it behaves with different types of inputs:

- **Empty cells**: If the value argument in `IFERROR` function is an empty cell, the function will return that empty cell. If the value_if_error argument is an empty cell, the function will return an empty cell when an error is encountered.

- **Text**: If the value argument is text, the function will return that text unless the text is part of a formula that results in an error, in which case the value_if_error argument will be returned.

- **Booleans**: If the value argument is a Boolean value (TRUE or FALSE), the function will return that Boolean value, unless the Boolean value is part of a formula that results in an error, in which case the value_if_error argument will be returned.

- **Errors**: If the value argument is an error or a formula that results in an error, the function will return the value specified in the value_if_error argument. If no value_if_error is provided, the function will return a zero value.

### Common Errors

|Error|Description|
|---|---|
|#N/A|Occurs when the value argument in `IFERROR` function is not found or does not exist.|
|#VALUE!|Occurs when the wrong type of argument or operand is used.|
|#REF!|Occurs when a cell reference is invalid.|
|#DIV/0!|Occurs when a number is divided by zero.|

### Best practices

> - Always specify the value_if_error argument in the `IFERROR` function to ensure that your spreadsheets don't display error messages when calculation errors occur.
> - Use the `IFERROR` function to suppress known errors that you don't need to fix, but avoid using it to ignore all errors because this can make it difficult to spot and fix errors in your formulas.
> - Consider using the `IFERROR` function with other functions like `VLOOKUP` to handle errors that can occur when a lookup value is not found in the first column of the lookup table.
> - For complex formulas where multiple errors can occur, consider using nested `IFERROR` functions to handle different errors in different ways.

### Usage

A few examples using the IFERROR function.

```
IFERROR(VLOOKUP(A1, B:C, 2, FALSE), "Not found") returns 'Not found' if the VLOOKUP function returns an error when searching for the value in cell A1 in column B.  
IFERROR(1/0, "Divide by zero error") returns the string 'Divide by zero error' since dividing by zero would produce an error.  
IFERROR(SUM(1,2,3), "Error") returns the sum of the values 1, 2, and 3 since the formula does not produce an error.  
```

### Interactive Spreadsheet Demo

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
  worksheets: [{
    data: [
    [
        "Product",
        "Price",
        "Discount %",
        "Final Price"
    ],
    [
        "Laptop",
        1000,
        10,
        "=IFERROR(B2*(1-C2/100), \"Invalid calculation\")"
    ],
    [
        "Mouse",
        25,
        0,
        "=IFERROR(B3*(1-C3/100), \"Invalid calculation\")"
    ],
    [
        "Keyboard",
        75,
        "N/A",
        "=IFERROR(B4*(1-C4/100), \"Invalid calculation\")"
    ],
    [
        "Monitor",
        300,
        15,
        "=IFERROR(B5*(1-C5/100), \"Invalid calculation\")"
    ]
]
  }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Worksheet data
    const data = [
    [
        "Product",
        "Price",
        "Discount %",
        "Final Price"
    ],
    [
        "Laptop",
        1000,
        10,
        "=IFERROR(B2*(1-C2/100), \"Invalid calculation\")"
    ],
    [
        "Mouse",
        25,
        0,
        "=IFERROR(B3*(1-C3/100), \"Invalid calculation\")"
    ],
    [
        "Keyboard",
        75,
        "N/A",
        "=IFERROR(B4*(1-C4/100), \"Invalid calculation\")"
    ],
    [
        "Monitor",
        300,
        15,
        "=IFERROR(B5*(1-C5/100), \"Invalid calculation\")"
    ]
];

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Worksheet data
        const data = [
    [
        "Product",
        "Price",
        "Discount %",
        "Final Price"
    ],
    [
        "Laptop",
        1000,
        10,
        "=IFERROR(B2*(1-C2/100), \"Invalid calculation\")"
    ],
    [
        "Mouse",
        25,
        0,
        "=IFERROR(B3*(1-C3/100), \"Invalid calculation\")"
    ],
    [
        "Keyboard",
        75,
        "N/A",
        "=IFERROR(B4*(1-C4/100), \"Invalid calculation\")"
    ],
    [
        "Monitor",
        300,
        15,
        "=IFERROR(B5*(1-C5/100), \"Invalid calculation\")"
    ]
]

        return {
            data
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];

    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
    [
        "Product",
        "Price",
        "Discount %",
        "Final Price"
    ],
    [
        "Laptop",
        1000,
        10,
        "=IFERROR(B2*(1-C2/100), \"Invalid calculation\")"
    ],
    [
        "Mouse",
        25,
        0,
        "=IFERROR(B3*(1-C3/100), \"Invalid calculation\")"
    ],
    [
        "Keyboard",
        75,
        "N/A",
        "=IFERROR(B4*(1-C4/100), \"Invalid calculation\")"
    ],
    [
        "Monitor",
        300,
        15,
        "=IFERROR(B5*(1-C5/100), \"Invalid calculation\")"
    ]
]
            }]
        });
    }
}
```

