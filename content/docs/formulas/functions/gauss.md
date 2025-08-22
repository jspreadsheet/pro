title: GAUSS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAUSS function in Jspreadsheet

# GAUSS function

`PRO`{.jtag}

The `GAUSS` function in Jspreadsheet Formulas Pro is a tool that allows you to calculate the probability associated with a standard normal distribution. In simpler terms, it helps you find out the likelihood that a randomly picked value will fall within a certain range, based on a standard pattern where most values are around the average. This is particularly useful in statistical analysis, where understanding the behavior of random variables plays a crucial role.

## Documentation

Returns the probability that a random variable follows a standard normal distribution.

### Category

Statistical

### Syntax

GAUSS(z)

| Parameter | Description |
| ----------- | ------------- |
| `z` | The value for which you want to calculate the probability of the standard normal distribution. |


### Behavior

The `GAUSS` function in spreadsheets is a mathematical function that calculates the Gaussian integral of a given number. It is used to compute the probability under the standard normal curve.

- For empty cells, the function will treat them as zeros.
- When text or non-numeric values are provided as an argument, the function would return an error.
- Boolean values are also considered as errors if used as arguments.
- The function takes only one argument. If more than one argument is provided, it will return an error.
- If the argument provided is a valid numeric value, the function will compute the Gaussian integral and return a numeric result.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function returns this error when the argument is non-numeric, or the cell referenced contains non-numeric values. |
| #N/A | This error is returned when no argument is provided to the function. |
| #NUM! | This error is returned when the argument provided is outside the acceptable range for the function. |

### Best Practices

> - Always make sure to provide numeric values as arguments to the `GAUSS` function. Providing text or non-numeric values will result in a `#VALUE!` error.
> - Be cautious when referencing cells as arguments. Ensure the cell contains a numeric value and not empty, to avoid any possible errors.
> - Use the `GAUSS` function for statistical analysis and computations. It's not recommended to use it for basic arithmetic operations.
> - Ensure the argument provided to the function is within the acceptable range to avoid the `#NUM!` error.

### Usage

A few examples using the GAUSS function.

```
GAUSS(-1.5) returns approximately -0.43319  
GAUSS(2) returns approximately 0.477249868  
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        -1.5,
        "=GAUSS(A2)",
        "Below average performance"
    ],
    [
        0,
        "=GAUSS(A3)",
        "Average performance"
    ],
    [
        1.96,
        "=GAUSS(A4)",
        "95th percentile threshold"
    ],
    [
        2.5,
        "=GAUSS(A5)",
        "Exceptional performance"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        -1.5,
        "=GAUSS(A2)",
        "Below average performance"
    ],
    [
        0,
        "=GAUSS(A3)",
        "Average performance"
    ],
    [
        1.96,
        "=GAUSS(A4)",
        "95th percentile threshold"
    ],
    [
        2.5,
        "=GAUSS(A5)",
        "Exceptional performance"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        -1.5,
        "=GAUSS(A2)",
        "Below average performance"
    ],
    [
        0,
        "=GAUSS(A3)",
        "Average performance"
    ],
    [
        1.96,
        "=GAUSS(A4)",
        "95th percentile threshold"
    ],
    [
        2.5,
        "=GAUSS(A5)",
        "Exceptional performance"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        -1.5,
        "=GAUSS(A2)",
        "Below average performance"
    ],
    [
        0,
        "=GAUSS(A3)",
        "Average performance"
    ],
    [
        1.96,
        "=GAUSS(A4)",
        "95th percentile threshold"
    ],
    [
        2.5,
        "=GAUSS(A5)",
        "Exceptional performance"
    ]
]
            }]
        });
    }
}
```

