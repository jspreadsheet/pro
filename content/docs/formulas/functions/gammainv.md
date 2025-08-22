title: GAMMAINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAMMAINV function in Jspreadsheet

# GAMMAINV function

`PRO`{.jtag}

The `GAMMAINV` function in Jspreadsheet Formulas Pro is a powerful tool often used in statistical analysis. It provides the inverse of the gamma cumulative distribution function using a defined probability and parameter values. Essentially, it helps determine the value at which the gamma distribution function reaches a certain probability. This is particularly useful in predicting outcomes and trends based on specific data sets.

## Documentation

Calculates the inverse of the gamma cumulative distribution function for a specified probability and parameter values.

### Category

Statistical

### Syntax

GAMMAINV(probability, alpha, beta)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability that corresponds to the gamma distribution. |
| `alpha` | A parameter that specifies the shape of the distribution. Alpha must be greater than 0. |
| `beta` | A parameter that specifies the scale of the distribution. Beta must be greater than 0. |


### Behavior

The `GAMMAINV` function in spreadsheets calculates the inverse of the cumulative gamma distribution function for a specified probability, alpha, and beta. 

- If any of the arguments are non-numeric, `GAMMAINV` returns a `#VALUE!` error.
- If any of the arguments are less than or equal to zero, `GAMMAINV` returns a `#NUM!` error.
- If probability < 0 or if probability > 1, `GAMMAINV` returns a `#NUM!` error.
- Empty cells within the range are treated as zeros.
- Text representations of numbers that you type directly into the list of arguments are counted.
- Boolean values are also considered as numeric values: TRUE as 1 and FALSE as 0.

### Common Errors

| Error | Description |
| -------- | -------- |
| #VALUE! | If any of the arguments are non-numeric, `GAMMAINV` returns a `#VALUE!` error. |
| #NUM! | If alpha, beta, or probability is less than or equal to zero or if probability is greater than 1, `GAMMAINV` returns a `#NUM!` error.|

### Best practices

> - Always ensure the input values are numeric, and alpha and beta are greater than zero.
> - Ensure the probability is in the range of 0-1 (inclusive).
> - Use error checking functions like `ISNUMBER` and `IFERROR` to handle possible errors.
> - Avoid using boolean values or non-numeric values as they could lead to errors or unexpected results.

### Usage

A few examples using the GAMMAINV function.

```
GAMMAINV(0.3,3,2)  
GAMMAINV(0.7,5,1.5)  
GAMMAINV(0.9,7,4)  
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
        "Alpha",
        "Beta",
        "Gamma Inverse"
    ],
    [
        0.25,
        2,
        1.5,
        "=GAMMAINV(A2,B2,C2)"
    ],
    [
        0.5,
        3,
        2,
        "=GAMMAINV(A3,B3,C3)"
    ],
    [
        0.75,
        4,
        1,
        "=GAMMAINV(A4,B4,C4)"
    ],
    [
        0.9,
        5,
        2.5,
        "=GAMMAINV(A5,B5,C5)"
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
        "Alpha",
        "Beta",
        "Gamma Inverse"
    ],
    [
        0.25,
        2,
        1.5,
        "=GAMMAINV(A2,B2,C2)"
    ],
    [
        0.5,
        3,
        2,
        "=GAMMAINV(A3,B3,C3)"
    ],
    [
        0.75,
        4,
        1,
        "=GAMMAINV(A4,B4,C4)"
    ],
    [
        0.9,
        5,
        2.5,
        "=GAMMAINV(A5,B5,C5)"
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
        "Alpha",
        "Beta",
        "Gamma Inverse"
    ],
    [
        0.25,
        2,
        1.5,
        "=GAMMAINV(A2,B2,C2)"
    ],
    [
        0.5,
        3,
        2,
        "=GAMMAINV(A3,B3,C3)"
    ],
    [
        0.75,
        4,
        1,
        "=GAMMAINV(A4,B4,C4)"
    ],
    [
        0.9,
        5,
        2.5,
        "=GAMMAINV(A5,B5,C5)"
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
        "Alpha",
        "Beta",
        "Gamma Inverse"
    ],
    [
        0.25,
        2,
        1.5,
        "=GAMMAINV(A2,B2,C2)"
    ],
    [
        0.5,
        3,
        2,
        "=GAMMAINV(A3,B3,C3)"
    ],
    [
        0.75,
        4,
        1,
        "=GAMMAINV(A4,B4,C4)"
    ],
    [
        0.9,
        5,
        2.5,
        "=GAMMAINV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

