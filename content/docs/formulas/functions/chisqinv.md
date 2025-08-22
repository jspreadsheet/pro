title: CHISQ.INV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHISQ.INV function in Jspreadsheet

# CHISQ.INV function

`PRO`{.jtag}

The `CHISQ.INV` function in Jspreadsheet Formulas Pro is a tool that gives you the chi-square distribution value for a specified probability. In simpler terms, it provides the value at which the one-tailed probability of the chi-square distribution is equal to the probability you've defined. This is particularly useful for statistical analysis, allowing you to understand and interpret data distributions with more accuracy.

## Documentation

Returns the inverse of the one-tailed probability of the chi-squared distribution.

### Category

Statistical

### Syntax

CHISQ.INV(probability, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | A probability associated with the chi-squared distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |


### Behavior

The `CHISQ.INV` function in spreadsheets is used to return the inverse of the left-tailed probability of the chi-squared distribution. It expects two arguments: the probability associated with the chi-square distribution, and the degrees of freedom. 

1. If a cell referenced in the function is empty, the function will treat it as a zero.
2. If the function encounters text where it expects a number, it will return a `#VALUE!` error.
3. The function will handle Boolean values as integers, with TRUE as 1 and FALSE as 0.
4. If the function encounters an error, it will propagate that error. For example, if a cell reference in the function results in a `#DIV/0!` error, the `CHISQ.INV` function will also return a `#DIV/0!` error.
5. The function will return a `#NUM!` error if the input probability is less than 0 or greater than 1, or if the degrees of freedom is less than 1.

### Common Errors

| Error | Description |
|------|-------------|
| `#VALUE!` | The function encounters text where it expects a number. |
| `#NUM!` | The input probability is less than 0 or greater than 1, or the degrees of freedom is less than 1. |
| `#DIV/0!` | A cell reference in the function results in a division by zero error. |

### Best practices

> 1. Always ensure the input probability is a number between 0 and 1. Any value outside this range will result in a `#NUM!` error.
> 2. Be sure that the degrees of freedom is a positive number. Negative or zero degrees of freedom will also result in a `#NUM!` error.
> 3. Handle text and errors carefully in cells referenced by the function to avoid unexpected `#VALUE!` and `#DIV/0!` errors.
> 4. It's good practice to confirm the validity of your data before inputting it into the `CHISQ.INV` function. This will help avoid potential errors and incorrect results.

### Usage

A few examples using the CHISQ.INV function.

```
CHISQ.INV(0.05, 3) returns 0.351846318  
CHISQ.INV(0.01, 6) returns 0.87209033  
CHISQ.INV(0.001, 10) returns 1.478743464  
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
        "Probability",
        "Degrees of Freedom",
        "Chi-Square Critical Value"
    ],
    [
        0.05,
        1,
        "=CHISQ.INV(A2,B2)"
    ],
    [
        0.01,
        5,
        "=CHISQ.INV(A3,B3)"
    ],
    [
        0.001,
        8,
        "=CHISQ.INV(A4,B4)"
    ],
    [
        0.025,
        3,
        "=CHISQ.INV(A5,B5)"
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
        "Probability",
        "Degrees of Freedom",
        "Chi-Square Critical Value"
    ],
    [
        0.05,
        1,
        "=CHISQ.INV(A2,B2)"
    ],
    [
        0.01,
        5,
        "=CHISQ.INV(A3,B3)"
    ],
    [
        0.001,
        8,
        "=CHISQ.INV(A4,B4)"
    ],
    [
        0.025,
        3,
        "=CHISQ.INV(A5,B5)"
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
        "Probability",
        "Degrees of Freedom",
        "Chi-Square Critical Value"
    ],
    [
        0.05,
        1,
        "=CHISQ.INV(A2,B2)"
    ],
    [
        0.01,
        5,
        "=CHISQ.INV(A3,B3)"
    ],
    [
        0.001,
        8,
        "=CHISQ.INV(A4,B4)"
    ],
    [
        0.025,
        3,
        "=CHISQ.INV(A5,B5)"
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
        "Probability",
        "Degrees of Freedom",
        "Chi-Square Critical Value"
    ],
    [
        0.05,
        1,
        "=CHISQ.INV(A2,B2)"
    ],
    [
        0.01,
        5,
        "=CHISQ.INV(A3,B3)"
    ],
    [
        0.001,
        8,
        "=CHISQ.INV(A4,B4)"
    ],
    [
        0.025,
        3,
        "=CHISQ.INV(A5,B5)"
    ]
]
            }]
        });
    }
}
```

