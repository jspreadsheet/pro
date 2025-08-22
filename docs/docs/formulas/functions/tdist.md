title: TDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TDIST function in Jspreadsheet

# TDIST function

`PRO`{.jtag}

The `TDIST` function in Jspreadsheet Formulas Pro is used to calculate the probability of a Student's t-distribution, which is a statistical method often used in hypothesis testing. You provide an input value, and the function will return the corresponding probability. It's particularly useful when dealing with small sample sizes or when the population standard deviation is unknown. This function helps in making inferences about the population based on the sample data.

## Documentation

Calculates the probability of a Student's t-distribution with a given input value.

### Category

Statistical

### Syntax

TDIST(x, degrees_freedom, tails)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The input value for which to calculate the distribution. |
| `degrees_freedom` | The number of degrees of freedom in the distribution. |
| `tails` | The number of distribution tails to use. Can be either 1 for a one-tailed distribution or 2 for a two-tailed distribution. |


### Behavior

The `TDIST` function in spreadsheet software calculates the right-tailed Student's T-distribution. The T-distribution is a probability distribution that is used to estimate population parameters when the sample size is small and/or when the population variance is unknown. 

- `TDIST` function takes three arguments. The first argument is the numeric value at which to evaluate the distribution. The second argument is the degrees of freedom. The third argument is a logical value that determines the form of the function. If it's set to TRUE, it returns the cumulative distribution function; if it's FALSE, it returns the probability density function.

- If the first or second argument is non-numeric, `TDIST` function will return a #VALUE! error.

- If the second argument is less than 1, `TDIST` function will return a #NUM! error.

- If the third argument is any number other than 0 or 1, `TDIST` function will return a #NUM! error.

- If the first or second argument is an empty cell, `TDIST` function will return a #VALUE! error.

- If the third argument is an empty cell, `TDIST` function will treat it as TRUE and returns the cumulative distribution function.

- In general, it doesn't handle text or boolean values, it should always be given numbers as input.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the first or second argument is non-numeric or an empty cell, `TDIST` function will return a #VALUE! error. |
| #NUM! | If the second argument is less than 1, or if the third argument is any number other than 0 or 1, `TDIST` function will return a #NUM! error. |

### Best practices

> - Always ensure that the input values are numerical. Non-numerical values will result in errors.
> - Be aware that the degrees of freedom should be greater than 0. Else, the function will return an error.
> - The third argument should always be either 0 or 1. Other numerical values will result in a #NUM! error.
> - Bear in mind that `TDIST` function treats empty cells in the third argument as TRUE and returns the cumulative distribution function.

### Usage

A few examples using the TDIST function.

```
TDIST(1.5, 10, 1) returns approximately 0.082253  
TDIST(2, 8, 2) returns approximately 0.08051  
  
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
        "t-value",
        "df",
        "p-value (one-tail)",
        "p-value (two-tail)"
    ],
    [
        1.5,
        10,
        "=TDIST(A2,B2,1)",
        "=TDIST(A2,B2,2)"
    ],
    [
        2.0,
        8,
        "=TDIST(A3,B3,1)",
        "=TDIST(A3,B3,2)"
    ],
    [
        2.5,
        15,
        "=TDIST(A4,B4,1)",
        "=TDIST(A4,B4,2)"
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
        "t-value",
        "df",
        "p-value (one-tail)",
        "p-value (two-tail)"
    ],
    [
        1.5,
        10,
        "=TDIST(A2,B2,1)",
        "=TDIST(A2,B2,2)"
    ],
    [
        2.0,
        8,
        "=TDIST(A3,B3,1)",
        "=TDIST(A3,B3,2)"
    ],
    [
        2.5,
        15,
        "=TDIST(A4,B4,1)",
        "=TDIST(A4,B4,2)"
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
        "t-value",
        "df",
        "p-value (one-tail)",
        "p-value (two-tail)"
    ],
    [
        1.5,
        10,
        "=TDIST(A2,B2,1)",
        "=TDIST(A2,B2,2)"
    ],
    [
        2.0,
        8,
        "=TDIST(A3,B3,1)",
        "=TDIST(A3,B3,2)"
    ],
    [
        2.5,
        15,
        "=TDIST(A4,B4,1)",
        "=TDIST(A4,B4,2)"
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
        "t-value",
        "df",
        "p-value (one-tail)",
        "p-value (two-tail)"
    ],
    [
        1.5,
        10,
        "=TDIST(A2,B2,1)",
        "=TDIST(A2,B2,2)"
    ],
    [
        2.0,
        8,
        "=TDIST(A3,B3,1)",
        "=TDIST(A3,B3,2)"
    ],
    [
        2.5,
        15,
        "=TDIST(A4,B4,1)",
        "=TDIST(A4,B4,2)"
    ]
]
            }]
        });
    }
}
```

