title: BETAINV Function – Compute the Inverse of the Beta Distribution in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet functions, BETAINV, inverse beta distribution, cumulative distribution, probability function
description: How to use the BETAINV function in Jspreadsheet Formulas Pro to compute the inverse of the cumulative beta distribution. This function returns the value of the variable x for which the cumulative beta distribution equals a given probability. It's a powerful tool for statistical modeling, Monte Carlo simulations, and decision analysis, helping to reverse-engineer probabilities into quantifiable outcomes.

# BETAINV function

`PRO`{.jtag}

The `BETAINV` function in Jspreadsheet Formulas Pro is a handy tool used to calculate the inverse of the cumulative beta probability density function. This means it takes a probability and gives you the beta distribution value that corresponds to that probability. It's particularly useful in statistical analysis, helping to determine the likelihood of different outcomes. Even without a deep understanding of statistics, you can use this function to handle complex statistical calculations in your spreadsheet.

## Documentation

Returns the inverse of the cumulative beta distribution based on a given probability and distribution parameters.

### Category

Compatibility

### Syntax

BETAINV(probability, alpha, beta, [A], [B])

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability at which to evaluate the function. Must be a number between 0 and 1 (inclusive). |
| `alpha` | The first parameter of the beta distribution. Must be greater than 0. |
| `beta` | The second parameter of the beta distribution. Must be greater than 0. |
| `[A]` | Optional. The lower bound of the interval of x. If omitted, A defaults to 0. |
| `[B]` | Optional. The upper bound of the interval of x. If omitted, B defaults to 1. |


### Behavior

The `BETAINV` function in a spreadsheet calculates the inverse of the cumulative beta probability density function for a supplied probability. This function takes three compulsory parameters: probability, alpha and beta. Optionally, it can also take an additional two parameters for the lower and upper bounds of the function.

- If any of the input cells are empty, the function treats them as zero.
- If the input is text or boolean values, the function returns a #VALUE! error.
- If the input is a non-numeric value, the function returns a #VALUE! error.
- If the probability is less than 0 or greater than 1, the function returns a #NUM! error.
- If either alpha or beta is non-numeric, the function returns a #VALUE! error.
- If either alpha or beta is less than or equal to 0, the function returns a #NUM! error.
- If the lower bound is non-numeric, the function returns a #VALUE! error.
- If the upper bound is less than the lower bound, the function returns a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the supplied arguments are non-numeric, boolean, or text. |
| #NUM! | This error occurs when either the probability is less than 0 or greater than 1, alpha or beta is less than or equal to 0, or if the upper bound is less than the lower bound. |

### Best practices

> - Always ensure that the probability, alpha, and beta parameters are positive numeric values. Alpha and beta should be greater than 0, and probability should be between 0 and 1.
> - If you are using optional parameters for lower and upper bounds, make sure the lower bound is less than the upper bound.
> - Avoid using non-numeric, boolean, or text values as arguments for this function to avoid #VALUE! errors.
> - Use error checking functions like ISERROR or IFERROR to handle possible errors when using this function.

### Usage

A few examples using the BETAINV function.

```
BETAINV(0.488, 2, 3)              // Returns ≈ 0.3788  
BETAINV(0.92, 4, 2, 0.5, 1)       // Returns ≈ 0.9505 (within [0.5, 1])  
BETAINV(0.625, 1, 1, 0, 0.8)      // Returns ≈ 0.5 (Uniform distribution over [0, 0.8])
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
        "BETAINV Result"
    ],
    [
        0.25,
        2,
        3,
        "=BETAINV(A2,B2,C2)"
    ],
    [
        0.75,
        1.5,
        2.5,
        "=BETAINV(A3,B3,C3)"
    ],
    [
        0.488,
        2,
        3,
        "=BETAINV(A4,B4,C4)"
    ],
    [
        0.625,
        1,
        1,
        "=BETAINV(A5,B5,C5)"
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
        "BETAINV Result"
    ],
    [
        0.25,
        2,
        3,
        "=BETAINV(A2,B2,C2)"
    ],
    [
        0.75,
        1.5,
        2.5,
        "=BETAINV(A3,B3,C3)"
    ],
    [
        0.488,
        2,
        3,
        "=BETAINV(A4,B4,C4)"
    ],
    [
        0.625,
        1,
        1,
        "=BETAINV(A5,B5,C5)"
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
        "BETAINV Result"
    ],
    [
        0.25,
        2,
        3,
        "=BETAINV(A2,B2,C2)"
    ],
    [
        0.75,
        1.5,
        2.5,
        "=BETAINV(A3,B3,C3)"
    ],
    [
        0.488,
        2,
        3,
        "=BETAINV(A4,B4,C4)"
    ],
    [
        0.625,
        1,
        1,
        "=BETAINV(A5,B5,C5)"
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
        "BETAINV Result"
    ],
    [
        0.25,
        2,
        3,
        "=BETAINV(A2,B2,C2)"
    ],
    [
        0.75,
        1.5,
        2.5,
        "=BETAINV(A3,B3,C3)"
    ],
    [
        0.488,
        2,
        3,
        "=BETAINV(A4,B4,C4)"
    ],
    [
        0.625,
        1,
        1,
        "=BETAINV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

