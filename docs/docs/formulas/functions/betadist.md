title: BETA.DIST Function – Calculate the Beta Distribution in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet functions, BETA.DIST, beta distribution, probability functions, data modeling, risk analysis
description: How to use the BETA.DIST function in Jspreadsheet Formulas Pro to evaluate the beta probability distribution—either as a probability density function (PDF) or a cumulative distribution function (CDF). Commonly used in statistics, risk analysis, and project modeling, this function provides insight into how a variable is likely to behave over a bounded interval.

# BETA.DIST function

`PRO`{.jtag}

The `BETA.DIST` function in Jspreadsheet Formulas Pro calculates values from the beta probability distribution, which is commonly used in statistical modeling, Bayesian analysis, and project risk assessment. You can use this function to determine either the probability density at a point x or the cumulative probability up to x, depending on the logical cumulative argument.

## Documentation

Returns the beta distribution—either cumulative or density—based on the provided parameters.

### Category

Compatibility

### Syntax

BETA.DIST(x, alpha, beta, [cumulative], [A], [B])

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the function. |
| `alpha` | The first parameter of the beta distribution. Must be greater than 0. |
| `beta` | The second parameter of the beta distribution. Must be greater than 0. |
| `[cumulative]` | Optional. A logical value that specifies whether to return the cumulative distribution or the probability density function. If omitted, cumulative defaults to FALSE (cumulative distribution). |
| `[A]` | Optional. The lower bound of the interval of x. If omitted, A defaults to 0. |
| `[B]` | Optional. The upper bound of the interval of x. If omitted, B defaults to 1. |


### Behavior

The `BETA.DIST` function evaluates the beta distribution for the specified `x`, `alpha`, and `beta` parameters, and optionally over a custom interval `[A, B]`. It behaves as follows:

- If any cell referenced in the arguments is empty, the function will treat it as zero.
- If a cell referenced in the arguments contains text, the function will return a #VALUE! error.
- If a cell referenced in the arguments contains a boolean value, the function will interpret TRUE as 1 and FALSE as 0.
- If alpha, beta, A or B (if provided) are less than 0, the function will return a #NUM! error.
- If x is not between A and B inclusive, the function will return a #NUM! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when one of the arguments is non-numeric or if any of the input parameters are not in the expected range. |
| #NUM! | This error occurs when alpha, beta, A or B (if provided) are less than 0, or if x is not between A and B inclusive. |

### Best practices

> - Always ensure that the input parameters are in the correct range to avoid common errors.
> - Use cell references as arguments wherever possible for more dynamic calculations.
> - Remember that `BETA.DIST` function assumes that alpha and beta parameters are always positive. It will return an error if they are not.
> - Understand that the function will interpret TRUE as 1 and FALSE as 0, so be careful while feeding boolean values to this function.

### Usage

A few examples using the BETA.DIST function.

```
BETA.DIST(0.6, 3.5, 1.2, TRUE)    // Returns ≈ 0.2125 (cumulative)
BETA.DIST(0.6, 3.5, 1.2, FALSE)   // Returns ≈ 1.1740 (density)
BETA.DIST(0.6, 2, 5, TRUE, 0, 1) // Evaluates cumulative distribution over [0,1] 
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
        "Alpha",
        "Beta",
        "Cumulative",
        "A",
        "B",
        "BETA.DIST"
    ],
    [
        2.5,
        3,
        2,
        "TRUE",
        0,
        5,
        "=BETA.DIST(A2,B2,C2,D2,E2,F2)"
    ],
    [
        1.8,
        2.5,
        1.5,
        "FALSE",
        0,
        3,
        "=BETA.DIST(A3,B3,C3,D3,E3,F3)"
    ],
    [
        0.7,
        4,
        3,
        "TRUE",
        0,
        1,
        "=BETA.DIST(A4,B4,C4,D4,E4,F4)"
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
        "Alpha",
        "Beta",
        "Cumulative",
        "A",
        "B",
        "BETA.DIST"
    ],
    [
        2.5,
        3,
        2,
        "TRUE",
        0,
        5,
        "=BETA.DIST(A2,B2,C2,D2,E2,F2)"
    ],
    [
        1.8,
        2.5,
        1.5,
        "FALSE",
        0,
        3,
        "=BETA.DIST(A3,B3,C3,D3,E3,F3)"
    ],
    [
        0.7,
        4,
        3,
        "TRUE",
        0,
        1,
        "=BETA.DIST(A4,B4,C4,D4,E4,F4)"
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
        "Alpha",
        "Beta",
        "Cumulative",
        "A",
        "B",
        "BETA.DIST"
    ],
    [
        2.5,
        3,
        2,
        "TRUE",
        0,
        5,
        "=BETA.DIST(A2,B2,C2,D2,E2,F2)"
    ],
    [
        1.8,
        2.5,
        1.5,
        "FALSE",
        0,
        3,
        "=BETA.DIST(A3,B3,C3,D3,E3,F3)"
    ],
    [
        0.7,
        4,
        3,
        "TRUE",
        0,
        1,
        "=BETA.DIST(A4,B4,C4,D4,E4,F4)"
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
        "Alpha",
        "Beta",
        "Cumulative",
        "A",
        "B",
        "BETA.DIST"
    ],
    [
        2.5,
        3,
        2,
        "TRUE",
        0,
        5,
        "=BETA.DIST(A2,B2,C2,D2,E2,F2)"
    ],
    [
        1.8,
        2.5,
        1.5,
        "FALSE",
        0,
        3,
        "=BETA.DIST(A3,B3,C3,D3,E3,F3)"
    ],
    [
        0.7,
        4,
        3,
        "TRUE",
        0,
        1,
        "=BETA.DIST(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

