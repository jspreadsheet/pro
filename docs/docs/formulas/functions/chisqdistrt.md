title: CHISQ.DIST.RT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHISQ.DIST.RT function in Jspreadsheet

# CHISQ.DIST.RT function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the function `CHISQ.DIST.RT` is used to calculate the one-tailed probability of the chi-squared distribution. This is a statistical measurement often used in hypothesis testing. Essentially, this function calculates the probability that a chi-squared statistic will be more than a specified value. It is useful in various data analysis and statistical applications.

## Documentation

Returns the one-tailed probability of the chi-squared distribution.

### Category

Statistical

### Syntax

CHISQ.DIST.RT(x, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which you want to evaluate the distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |


### Behavior

The `CHISQ.DIST.RT` function in spreadsheets calculates the right-tailed probability of the chi-squared distribution. This function requires two arguments: `x` and `deg_freedom`. `x` is the value at which you want to evaluate the distribution and `deg_freedom` is the number of degrees of freedom. 

- If `x` is non-numeric, `CHISQ.DIST.RT` will return a `#VALUE!` error.
- If `x` is less than 0, `CHISQ.DIST.RT` will return a `#NUM!` error.
- If `deg_freedom` is not an integer, it is truncated.
- If `deg_freedom` is less than 1 or greater than 10^10, `CHISQ.DIST.RT` will return a `#NUM!` error.
- If `deg_freedom` is non-numeric, `CHISQ.DIST.RT` will return a `#VALUE!` error.
- Empty cells are treated as zeros.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | Occurs if either `x` or `deg_freedom` is non-numeric. |
| #NUM! | Occurs if `x` is less than 0, or `deg_freedom` is less than 1 or greater than 10^10. |

### Best practices

> - Always ensure that your `x` values are non-negative and `deg_freedom` is between 1 and 10^10, both inclusive.
> - Remember that non-integer `deg_freedom` values will be truncated.
> - Use error checking functions such as `ISERROR` or `IFERROR` to handle possible errors that may arise from non-numeric or out-of-range inputs.
> - Be cautious when using cell references or ranges as function arguments to avoid unintentional inclusion of non-numeric values or empty cells.

### Usage

A few examples using the CHISQ.DIST.RT function.

```
CHISQ.DIST.RT(2.5, 4)  
CHISQ.DIST.RT(6, 8)  
CHISQ.DIST.RT(1, 1)  
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
        "Chi-Square Value",
        "Degrees of Freedom",
        "Right-tail Probability"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST.RT(A2,B2)"
    ],
    [
        6.25,
        3,
        "=CHISQ.DIST.RT(A3,B3)"
    ],
    [
        1.5,
        2,
        "=CHISQ.DIST.RT(A4,B4)"
    ],
    [
        8.1,
        5,
        "=CHISQ.DIST.RT(A5,B5)"
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
        "Chi-Square Value",
        "Degrees of Freedom",
        "Right-tail Probability"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST.RT(A2,B2)"
    ],
    [
        6.25,
        3,
        "=CHISQ.DIST.RT(A3,B3)"
    ],
    [
        1.5,
        2,
        "=CHISQ.DIST.RT(A4,B4)"
    ],
    [
        8.1,
        5,
        "=CHISQ.DIST.RT(A5,B5)"
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
        "Chi-Square Value",
        "Degrees of Freedom",
        "Right-tail Probability"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST.RT(A2,B2)"
    ],
    [
        6.25,
        3,
        "=CHISQ.DIST.RT(A3,B3)"
    ],
    [
        1.5,
        2,
        "=CHISQ.DIST.RT(A4,B4)"
    ],
    [
        8.1,
        5,
        "=CHISQ.DIST.RT(A5,B5)"
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
        "Chi-Square Value",
        "Degrees of Freedom",
        "Right-tail Probability"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST.RT(A2,B2)"
    ],
    [
        6.25,
        3,
        "=CHISQ.DIST.RT(A3,B3)"
    ],
    [
        1.5,
        2,
        "=CHISQ.DIST.RT(A4,B4)"
    ],
    [
        8.1,
        5,
        "=CHISQ.DIST.RT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

