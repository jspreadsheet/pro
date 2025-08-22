title: F.INV.RT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the F.INV.RT function in Jspreadsheet

# F.INV.RT function

`PRO`{.jtag}

The `F.INV.RT` function in Jspreadsheet Formulas Pro is a statistical tool that gives you the inverse of the right-tailed F probability distribution. Essentially, in statistics, the F-distribution is often used to compare variances of two data sets and the right-tail of this distribution is the section of data on the right side of the graph's peak. This function utilizes this concept to help you determine the F-value that corresponds to a given level of probability. In other words, it helps you find the value when you know the probability in your data analysis.

## Documentation

Returns the inverse of the right-tailed F probability distribution.

### Category

Statistical

### Syntax

F.INV.RT(probability, degrees_freedom1, degrees_freedom2)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | A probability value between 0 and 1. |
| `degrees_freedom1` | The numerator degrees of freedom for the distribution. |
| `degrees_freedom2` | The denominator degrees of freedom for the distribution. |


### Behavior

The `F.INV.RT` function in spreadsheet returns the inverse of the F probability distribution. It is a statistical function that calculates and returns the inverse of the F probability distribution. If p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x. The F-distribution can often be used in analysis of variance.

The function takes three arguments: 

1. Probability - The probability associated with the F cumulative distribution.
2. Deg_freedom1 - The numerator degrees of freedom.
3. Deg_freedom2 - The denominator degrees of freedom.

Here's how it handles certain situations:

- Empty cells: If any of the arguments are empty cells, the function will return a `#VALUE!` error.
- Text: If any of the arguments are text, the function will return a `#VALUE!` error.
- Booleans: If any of the arguments are boolean values, they will be coerced to numbers (TRUE to 1 and FALSE to 0).
- Errors: If any of the arguments are error values, the function will propagate that error.
- Negative values: If the Probability, Deg_freedom1 or Deg_freedom2 is less than 0, the function will return `#NUM!` error.
- Non-integer degrees of freedom: If the degrees of freedom are not integers, they will be truncated.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#VALUE!` | This error occurs if any of the arguments are non-numeric, or are empty cells. |
| `#NUM!` | This error occurs if the probability is less than 0 or greater than 1, or if the degrees of freedom are less than 1. |

### Best practices

> - Always ensure that the input values are numeric and within the valid range to avoid errors.
> - Be aware that the degrees of freedom are truncated if they're not integers.
> - Avoid using boolean values as inputs, as they might give unexpected results (TRUE is coerced to 1 and FALSE to 0).
> - Use error handling functions like `IFERROR` or `ISERROR` to catch and handle errors produced by `F.INV.RT`.

### Usage

A few examples using the F.INV.RT function.

```
F.INV.RT(0.05, 3, 5) returns approximately 5.409  
F.INV.RT(0.01, 10, 20) returns approximately 3.368  
F.INV.RT(0.025, 4, 6) returns approximately 6.227  
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
        "DF1",
        "DF2",
        "F Critical Value"
    ],
    [
        0.05,
        3,
        5,
        "=F.INV.RT(A2,B2,C2)"
    ],
    [
        0.01,
        10,
        20,
        "=F.INV.RT(A3,B3,C3)"
    ],
    [
        0.025,
        4,
        6,
        "=F.INV.RT(A4,B4,C4)"
    ],
    [
        0.1,
        2,
        8,
        "=F.INV.RT(A5,B5,C5)"
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
        "DF1",
        "DF2",
        "F Critical Value"
    ],
    [
        0.05,
        3,
        5,
        "=F.INV.RT(A2,B2,C2)"
    ],
    [
        0.01,
        10,
        20,
        "=F.INV.RT(A3,B3,C3)"
    ],
    [
        0.025,
        4,
        6,
        "=F.INV.RT(A4,B4,C4)"
    ],
    [
        0.1,
        2,
        8,
        "=F.INV.RT(A5,B5,C5)"
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
        "DF1",
        "DF2",
        "F Critical Value"
    ],
    [
        0.05,
        3,
        5,
        "=F.INV.RT(A2,B2,C2)"
    ],
    [
        0.01,
        10,
        20,
        "=F.INV.RT(A3,B3,C3)"
    ],
    [
        0.025,
        4,
        6,
        "=F.INV.RT(A4,B4,C4)"
    ],
    [
        0.1,
        2,
        8,
        "=F.INV.RT(A5,B5,C5)"
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
        "DF1",
        "DF2",
        "F Critical Value"
    ],
    [
        0.05,
        3,
        5,
        "=F.INV.RT(A2,B2,C2)"
    ],
    [
        0.01,
        10,
        20,
        "=F.INV.RT(A3,B3,C3)"
    ],
    [
        0.025,
        4,
        6,
        "=F.INV.RT(A4,B4,C4)"
    ],
    [
        0.1,
        2,
        8,
        "=F.INV.RT(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

