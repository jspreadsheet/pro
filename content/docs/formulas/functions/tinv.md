title: T.INV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the T.INV function in Jspreadsheet

# T.INV function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `T.INV` function is used to calculate the inverse of the one-tailed probability of a Student's t-distribution. Essentially, this function is handy when you want to determine the t-value for a given significance level and degree of freedom. This is especially useful in statistical analysis, where t-values are commonly used to test hypotheses. In short, `T.INV` helps you to determine the value below which a specified percentage of the data falls.

## Documentation

Returns the inverse of the one-tailed probability of a Student's t-distribution.

### Category

Statistical

### Syntax

T.INV(probability, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability associated with the two-tailed t-distribution. |
| `degrees_freedom` | The number of degrees of freedom for the t-distribution. Must be a positive integer. |


### Behavior

The `T.INV` function in spreadsheets returns the left-tailed inverse of the Student's t-distribution. The function takes two arguments: the probability and the degrees of freedom. The function expects both arguments to be numerical values. 

- If the cell is empty, the function treats it as zero.
- Text values or boolean values in arguments return an error.
- The function also returns an error if the degrees of freedom is less than one or the probability is not between zero and one.
- In case of error values in either of the arguments, the function propagates the error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if either of the supplied arguments are non-numeric. |
| #NUM! | Occurs if the supplied probability is < 0 or > 1, or if the supplied degrees_freedom < 1. |
| #N/A | Occurs if the function is not supported in the spreadsheet software. |

### Best practices

> - Always ensure that the probability and degrees of freedom are numeric and meet the criteria (probability between 0 and 1, degrees of freedom >= 1) to avoid errors.
> - It is recommended to use cell references instead of direct numerical inputs for the function's arguments to maintain data accuracy and consistency.
> - Be aware of the fact that this function assumes a continuous distribution. It may not be accurate for very small or very large degrees of freedom.
> - Always validate your data before using it in the function to avoid unexpected errors.

### Usage

A few examples using the T.INV function.

```
T.INV(0.05, 10)  
T.INV(0.1, 5)  
T.INV(0.025, 20)  
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
        "T.INV Result"
    ],
    [
        0.05,
        10,
        "=T.INV(A2,B2)"
    ],
    [
        0.1,
        5,
        "=T.INV(A3,B3)"
    ],
    [
        0.025,
        20,
        "=T.INV(A4,B4)"
    ],
    [
        0.01,
        15,
        "=T.INV(A5,B5)"
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
        "T.INV Result"
    ],
    [
        0.05,
        10,
        "=T.INV(A2,B2)"
    ],
    [
        0.1,
        5,
        "=T.INV(A3,B3)"
    ],
    [
        0.025,
        20,
        "=T.INV(A4,B4)"
    ],
    [
        0.01,
        15,
        "=T.INV(A5,B5)"
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
        "T.INV Result"
    ],
    [
        0.05,
        10,
        "=T.INV(A2,B2)"
    ],
    [
        0.1,
        5,
        "=T.INV(A3,B3)"
    ],
    [
        0.025,
        20,
        "=T.INV(A4,B4)"
    ],
    [
        0.01,
        15,
        "=T.INV(A5,B5)"
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
        "T.INV Result"
    ],
    [
        0.05,
        10,
        "=T.INV(A2,B2)"
    ],
    [
        0.1,
        5,
        "=T.INV(A3,B3)"
    ],
    [
        0.025,
        20,
        "=T.INV(A4,B4)"
    ],
    [
        0.01,
        15,
        "=T.INV(A5,B5)"
    ]
]
            }]
        });
    }
}
```

