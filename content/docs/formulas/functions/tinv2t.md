title: T.INV.2T function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the T.INV.2T function in Jspreadsheet

# T.INV.2T function

`PRO`{.jtag}

The `T.INV.2T` function in Jspreadsheet Formulas Pro is a statistical tool that calculates the inverse of a two-tailed probability in a Student's t-distribution. Essentially, it finds the value that corresponds to a specific probability in a t-distribution. This is especially useful in hypothesis testing or when you're dealing with small sample sizes. Just input your desired probability and degrees of freedom, and the function will provide the corresponding value.

## Documentation

Returns the inverse of the two-tailed probability of a Student's t-distribution.

### Category

Statistical

### Syntax

T.INV.2T(probability, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability associated with the two-tailed t-distribution. |
| `degrees_freedom` | The number of degrees of freedom for the t-distribution. Must be a positive integer. |


### Behavior

The 'T.INV.2T' function in spreadsheets returns the two-tailed inverse of the Student's t-distribution. This function requires two arguments: probability and degrees of freedom. The probability must be greater than 0 and less than 1, and the degrees of freedom must be greater than 1.

- If a cell is empty, the function will treat it as zero.
- Texts are not accepted in the function. It will result in a `#VALUE!` error.
- Booleans are also not accepted. It will result in a `#VALUE!` error.
- If the function encounters an error, it will return an error value like `#NUM!` or `#VALUE!`.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs if either the provided probability is ≤ 0 or ≥ 1, or if the degrees of freedom is ≤ 0. |
| #VALUE! | Occurs if any of the provided arguments are non-numeric or if the function is given text or boolean values. |
| #N/A | Occurs if the required arguments are not provided. |

### Best practices

> - Always ensure that the probability and degrees of freedom are valid numbers. Entering non-numeric values will lead to errors.
> - Be careful when linking cells as inputs to the function. If the linked cell has an error, the function will also return an error.
> - Use the 'T.INV.2T' function when you need to find the t-value of a Student's t-distribution given a probability and degrees of freedom. It is very useful in statistical analysis and hypothesis testing.
> - Always understand your data before applying the 'T.INV.2T' function. It's important to ensure your data is suitable for a t-distribution.

### Usage

A few examples using the T.INV.2T function.

```
T.INV.2T(0.05, 10) returns 2.228138852  
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
        "Confidence Level",
        "Degrees of Freedom",
        "Critical t-value"
    ],
    [
        0.05,
        9,
        "=T.INV.2T(A2,B2)"
    ],
    [
        0.01,
        15,
        "=T.INV.2T(A3,B3)"
    ],
    [
        0.1,
        20,
        "=T.INV.2T(A4,B4)"
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
        "Confidence Level",
        "Degrees of Freedom",
        "Critical t-value"
    ],
    [
        0.05,
        9,
        "=T.INV.2T(A2,B2)"
    ],
    [
        0.01,
        15,
        "=T.INV.2T(A3,B3)"
    ],
    [
        0.1,
        20,
        "=T.INV.2T(A4,B4)"
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
        "Confidence Level",
        "Degrees of Freedom",
        "Critical t-value"
    ],
    [
        0.05,
        9,
        "=T.INV.2T(A2,B2)"
    ],
    [
        0.01,
        15,
        "=T.INV.2T(A3,B3)"
    ],
    [
        0.1,
        20,
        "=T.INV.2T(A4,B4)"
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
        "Confidence Level",
        "Degrees of Freedom",
        "Critical t-value"
    ],
    [
        0.05,
        9,
        "=T.INV.2T(A2,B2)"
    ],
    [
        0.01,
        15,
        "=T.INV.2T(A3,B3)"
    ],
    [
        0.1,
        20,
        "=T.INV.2T(A4,B4)"
    ]
]
            }]
        });
    }
}
```

