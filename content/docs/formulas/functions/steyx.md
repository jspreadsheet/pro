title: STEYX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STEYX function in Jspreadsheet

# STEYX function

`PRO`{.jtag}

The `STEYX` function in Jspreadsheet Formulas Pro is used to calculate the standard error of the predicted y-value for each x in a regression. It helps us understand how accurate our predictions are likely to be in statistical analysis. This function is especially useful in data analysis where we use regression models to predict outcomes. It gives an estimate of the accuracy of the prediction, with a lower standard error indicating a more precise prediction.

## Documentation

Calculates the standard error of the predicted y-value for each x in a regression.

### Category

Statistical

### Syntax

STEYX(known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | An array or range of y-values that correspond to the x-values. |
| `known_x's` | An array or range of x-values that correspond to the y-values. |


### Behavior

The `STEYX` function in a spreadsheet calculates and returns the standard error of the predicted y-value for each x-value in the regression. This function helps to estimate the uncertainty in a prediction.

- `STEYX` ignores empty cells, text, and boolean values in the provided ranges.
- If the ranges of known x-values and known y-values do not have the same length, the function returns a `#N/A` error.
- If any cells in the ranges contain non-numeric values, the function returns a `#VALUE!` error.
- If the standard deviation of the known x-values or the known y-values equals zero (i.e., all the x-values or y-values are the same), the function returns a `#DIV/0!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A  | The function returns this error when the ranges of known x-values and known y-values do not have the same length. |
| #VALUE! | This error is returned when any cells in the ranges contain non-numeric values. |
| #DIV/0! | This error is returned if the standard deviation of the known x-values or the known y-values equals zero (i.e., all the x-values or y-values are the same). |

### Best practices

> - Always ensure the ranges of known x-values and known y-values have the same length to avoid the `#N/A` error.
> - Make sure the cells in the ranges only contain numeric values to prevent the `#VALUE!` error.
> - Ensure the standard deviation of the known x-values or the known y-values does not equal zero to avoid the `#DIV/0!` error.
> - Use the `STEYX` function to estimate the uncertainty in a prediction, especially when dealing with regression analysis.

### Usage

A few examples using the STEYX function.

```
STEYX(B2:B6, A2:A6) returns the standard error of the predicted y-value for each x in a linear regression of the values in cells A2 through A6 and B2 through B6  
STEYX(C2:C7, A2:A7) returns the standard error of the predicted y-value for each x in a linear regression of the values in cells A2 through A7 and C2 through C7  
STEYX(E2:E9, D2:D9) returns the standard error of the predicted y-value for each x in a linear regression of the values in cells D2 through D9 and E2 through E9  
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Standard Error:",
        "=STEYX(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Standard Error:",
        "=STEYX(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Standard Error:",
        "=STEYX(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Standard Error:",
        "=STEYX(B2:B5,A2:A5)"
    ]
]
            }]
        });
    }
}
```

