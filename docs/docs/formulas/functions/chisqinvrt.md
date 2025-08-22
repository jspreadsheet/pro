title: CHISQ.INV.RT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHISQ.INV.RT function in Jspreadsheet

# CHISQ.INV.RT function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `CHISQ.INV.RT` function is used to compute the inverse of the one-tailed probability of the chi-squared distribution. It's used when you have the probability, and you want to find the corresponding chi-squared value. This is particularly useful in statistical analysis, for tasks like hypothesis testing. You simply need to provide the degrees of freedom and the probability as arguments to this function.

## Documentation

Returns the inverse of the one-tailed probability of the chi-squared distribution.

### Category

Statistical

### Syntax

CHISQ.INV.RT(probability, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | A probability associated with the chi-squared distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |


### Behavior

The `CHISQ.INV.RT` function in spreadsheets calculates the inverse of the right-tailed probability of the chi-squared distribution. This function is commonly used in statistical analysis and research. 

- The function takes two arguments: `probability`, the right-tailed probability, and `degrees_freedom`, the number of degrees of freedom. Both arguments must be numerical.
- If the cells referenced in the arguments are empty or contain text, the function will return a `#VALUE!` error.
- Boolean values are interpreted as 0 (for FALSE) and 1 (for TRUE).
- If `probability` is less than 0 or greater than 1, the function will return a `#NUM!` error.
- If `degrees_freedom` is not an integer greater than 0, the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The input argument is non-numeric, an empty cell, or text. |
| #NUM! | The `probability` is less than 0 or greater than 1, or `degrees_freedom` is not an integer greater than 0. |

### Best Practices

> - Always ensure that the `probability` argument is a numerical value between 0 and 1. Any value outside of this range will result in a `#NUM!` error.
> - The `degrees_freedom` argument should be a positive integer. Non-integer or negative values will return a `#NUM!` error.
> - Use cell references instead of directly inputting numbers into the function for easier modifications and understanding.
> - Handle possible errors using error-checking functions like `IFERROR` to keep your spreadsheet clean and professional.

### Usage

A few examples using the CHISQ.INV.RT function.

```
CHISQ.INV.RT(0.05, 3)  
CHISQ.INV.RT(0.01, 6)  
CHISQ.INV.RT(0.001, 10)  
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
        "=CHISQ.INV.RT(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHISQ.INV.RT(A3,B3)"
    ],
    [
        0.001,
        5,
        "=CHISQ.INV.RT(A4,B4)"
    ],
    [
        0.1,
        2,
        "=CHISQ.INV.RT(A5,B5)"
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
        "=CHISQ.INV.RT(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHISQ.INV.RT(A3,B3)"
    ],
    [
        0.001,
        5,
        "=CHISQ.INV.RT(A4,B4)"
    ],
    [
        0.1,
        2,
        "=CHISQ.INV.RT(A5,B5)"
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
        "=CHISQ.INV.RT(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHISQ.INV.RT(A3,B3)"
    ],
    [
        0.001,
        5,
        "=CHISQ.INV.RT(A4,B4)"
    ],
    [
        0.1,
        2,
        "=CHISQ.INV.RT(A5,B5)"
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
        "=CHISQ.INV.RT(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHISQ.INV.RT(A3,B3)"
    ],
    [
        0.001,
        5,
        "=CHISQ.INV.RT(A4,B4)"
    ],
    [
        0.1,
        2,
        "=CHISQ.INV.RT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

