title: SERIESSUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SERIESSUM function in Jspreadsheet

# SERIESSUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SERIESSUM` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the sum of a power series based on a specific formula. Essentially, it allows you to add together the results of a series of calculations. You provide the parameters such as power, the initial value, the step, and the array of coefficients, and the function calculates the total sum. It is particularly useful for complex calculations and projections in a variety of fields, including finance and engineering.

## Documentation

Returns the sum of a power series based on the formula

### Category

Math and trigonometry

### Syntax

SERIESSUM(x, n, m, coefficients)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the power series. |
| `n` | The number of terms in the power series. |
| `m` | An array or reference to a range of cells with the coefficients of the power series. |
| `coefficients` | An array or reference to a range of cells with the exponents of the power series. The number of exponents should match the number of terms (n). |


### Behavior

The `SERIESSUM` function in spreadsheets calculates the sum of a power series. It requires four parameters: the base, the start number, the stop number, and the coefficients. Here's how it handles different types of inputs:

- **Empty Cells**: If any of the required parameters are left empty, `SERIESSUM` returns a `#NUM!` error.
- **Text**: If text is entered where a number is expected, `SERIESSUM` returns a `#VALUE!` error.
- **Booleans**: If a boolean value (`TRUE` or `FALSE`) is entered where a number is expected, `SERIESSUM` will convert `TRUE` to 1 and `FALSE` to 0 before performing the calculations.
- **Errors**: If any of the arguments provided to `SERIESSUM` contain an error, the function will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#NUM!` | This error occurs if any of the required parameters are missing, if start_num or stop_num is non-numeric or if it is less than zero. |
| `#VALUE!` | This error is returned when a cell containing text, or a cell reference to text, is provided to `SERIESSUM` where a number is expected. |
| `#N/A` | This error is returned if the array of coefficients provided is empty. |

### Best practices

> - Always ensure that all the required arguments are provided to avoid `#NUM!` errors.
> - Be cautious with cell references to ensure they do not point to cells containing text, as this will result in a `#VALUE!` error.
> - If using boolean values, be aware that `SERIESSUM` will convert `TRUE` to 1 and `FALSE` to 0.
> - While providing the coefficients, make sure the array is not empty to avoid `#N/A` error.

### Usage

A few examples using the SERIESSUM function.

```
SERIESSUM(2, 3, 3, [1, 2, 3])  
SERIESSUM(0.5, 4, 4, [1, 2, 3, 4], [0, 2, 4, 6])  
SERIESSUM(3, 2, 2, [10, -2], [0, 1])  
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
        "x",
        "n",
        "m",
        "coefficients",
        "SERIESSUM Result"
    ],
    [
        2,
        3,
        3,
        "1,2,3",
        "=SERIESSUM(A2,B2,C2,{1;2;3})"
    ],
    [
        0.5,
        4,
        4,
        "1,2,3,4",
        "=SERIESSUM(A3,B3,C3,{1;2;3;4})"
    ],
    [
        3,
        2,
        2,
        "10,-2",
        "=SERIESSUM(A4,B4,C4,{10;-2})"
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
        "x",
        "n",
        "m",
        "coefficients",
        "SERIESSUM Result"
    ],
    [
        2,
        3,
        3,
        "1,2,3",
        "=SERIESSUM(A2,B2,C2,{1;2;3})"
    ],
    [
        0.5,
        4,
        4,
        "1,2,3,4",
        "=SERIESSUM(A3,B3,C3,{1;2;3;4})"
    ],
    [
        3,
        2,
        2,
        "10,-2",
        "=SERIESSUM(A4,B4,C4,{10;-2})"
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
        "x",
        "n",
        "m",
        "coefficients",
        "SERIESSUM Result"
    ],
    [
        2,
        3,
        3,
        "1,2,3",
        "=SERIESSUM(A2,B2,C2,{1;2;3})"
    ],
    [
        0.5,
        4,
        4,
        "1,2,3,4",
        "=SERIESSUM(A3,B3,C3,{1;2;3;4})"
    ],
    [
        3,
        2,
        2,
        "10,-2",
        "=SERIESSUM(A4,B4,C4,{10;-2})"
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
        "x",
        "n",
        "m",
        "coefficients",
        "SERIESSUM Result"
    ],
    [
        2,
        3,
        3,
        "1,2,3",
        "=SERIESSUM(A2,B2,C2,{1;2;3})"
    ],
    [
        0.5,
        4,
        4,
        "1,2,3,4",
        "=SERIESSUM(A3,B3,C3,{1;2;3;4})"
    ],
    [
        3,
        2,
        2,
        "10,-2",
        "=SERIESSUM(A4,B4,C4,{10;-2})"
    ]
]
            }]
        });
    }
}
```

