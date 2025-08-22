title: FACT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FACT function in Jspreadsheet

# FACT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FACT` function in Jspreadsheet Formulas Pro is a mathematical function that calculates the factorial of a number. Essentially, it multiplies the given number by every integer less than it down to 1. For example, the factorial of 5 (expressed as 5!) would be 5*4*3*2*1, which equals 120. This function is used when you want to perform such calculations within your Jspreadsheet.

## Documentation

Returns the factorial of a number.

### Category

Math and trigonometry

### Syntax

FACT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The non-negative integer for which to calculate the factorial. |


### Behavior

The `FACT` function in spreadsheets calculates the factorial of a given number. A factorial of a number is the product of all positive integers less than or equal to that number. Here's how the `FACT` function handles different inputs:

- **Numbers**: The function computes the factorial of the given number. For example, `FACT(5)` returns `120` because `5*4*3*2*1` equals `120`.
- **Empty cells**: If the `FACT` function is applied to an empty cell, it treats the cell as `0` and returns `1` because the factorial of `0` is `1`.
- **Text**: If the function is applied to a cell that contains text, it returns a `#VALUE!` error because the function requires a numerical argument.
- **Booleans**: If the function is applied to a cell that contains a boolean value (`TRUE` or `FALSE`), it treats `TRUE` as `1` and `FALSE` as `0` and calculates the factorial accordingly.
- **Errors**: If the function is applied to a cell that contains an error, it returns the same error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when the function is applied to a cell that contains non-numeric data. |
| `#NUM!` | This error is returned when the function is applied to a negative number or a number larger than `170` because the factorial function is only defined for non-negative integers and the result of factorial calculations for numbers larger than `170` exceeds the maximum limit for numbers in spreadsheets. |

### Best practices

> - Always ensure that the argument to the `FACT` function is a non-negative integer. The function returns an error for negative numbers and non-integer values.
> - Be cautious when using the `FACT` function with large numbers. Factorial calculations grow rapidly and can exceed the maximum limit for numbers in spreadsheets for numbers larger than `170`.
> - Avoid using the `FACT` function on cells that may contain non-numeric data to prevent `#VALUE!` errors.
> - Use error handling functions like `ISNUMBER` or `IFERROR` to handle potential errors when using the `FACT` function in complex formulas.

### Usage

A few examples using the FACT function.

```
FACT(5) returns 120  
FACT(0) returns 1  
FACT(10) returns 3628800  
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
        "Number",
        "Factorial"
    ],
    [
        0,
        "=FACT(A2)"
    ],
    [
        3,
        "=FACT(A3)"
    ],
    [
        5,
        "=FACT(A4)"
    ],
    [
        7,
        "=FACT(A5)"
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
        "Number",
        "Factorial"
    ],
    [
        0,
        "=FACT(A2)"
    ],
    [
        3,
        "=FACT(A3)"
    ],
    [
        5,
        "=FACT(A4)"
    ],
    [
        7,
        "=FACT(A5)"
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
        "Number",
        "Factorial"
    ],
    [
        0,
        "=FACT(A2)"
    ],
    [
        3,
        "=FACT(A3)"
    ],
    [
        5,
        "=FACT(A4)"
    ],
    [
        7,
        "=FACT(A5)"
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
        "Number",
        "Factorial"
    ],
    [
        0,
        "=FACT(A2)"
    ],
    [
        3,
        "=FACT(A3)"
    ],
    [
        5,
        "=FACT(A4)"
    ],
    [
        7,
        "=FACT(A5)"
    ]
]
            }]
        });
    }
}
```

