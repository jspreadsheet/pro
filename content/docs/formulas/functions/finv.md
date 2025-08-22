title: F.INV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the F.INV function in Jspreadsheet

# F.INV function

`PRO`{.jtag}

The `F.INV` function in Jspreadsheet Formulas Pro is used to calculate the inverse of the F probability distribution. In simpler terms, it helps you find the F-distribution value for a given probability, degree of freedom for the numerator, and degree of freedom for the denominator. This is especially useful in statistical analysis where you might need to test the variances across different data sets.

## Documentation

Returns the inverse of the F probability distribution.

### Category

Statistical

### Syntax

F.INV(probability, degrees_freedom1, degrees_freedom2)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | A probability value between 0 and 1. |
| `degrees_freedom1` | The numerator degrees of freedom for the distribution. |
| `degrees_freedom2` | The denominator degrees of freedom for the distribution. |


### Behavior

The `F.INV` function in spreadsheets is used to return the inverse of the F probability distribution. If `p` = F.DIST(x,...), then `F.INV(p,...)` = x. The F distribution can be used in an F-test that compares the degree of variability in two data sets. 

1. For the parameters, the function uses three arguments: probability, degrees_freedom1, and degrees_freedom2. All of these arguments must be numeric values or else the function will return an error.

2. If any of the argument cells are empty, the function will return an error.

3. If the argument cells contain non-numeric text, the function will return an error.

4. The function doesn't handle boolean values. If the argument cells contain boolean values, the function will return an error.

5. The function will also return an error if the probability is less than 0 or greater than 1, and if the degrees of freedom are less than 1.

6. The function can handle array formulas and will return an array of results if the arguments are arrays.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if the supplied arguments are non-numeric. |
| #NUM! | Occurs if the supplied probability is less than 0 or greater than 1, or the degrees of freedom are less than 1. |
| #N/A | Occurs if the supplied arguments are not recognised as valid. |

### Best practices

> - Always ensure that the values you are feeding into the `F.INV` function are numeric. This function cannot handle non-numeric values and will return an error if it encounters one.
> - Pay attention to the range of acceptable values for each argument. The probability must be between 0 and 1, and the degrees of freedom must be greater than 1.
> - Use `F.INV` with other statistical functions to perform more complex statistical analyses.
> - Remember that `F.INV` is used to calculate the inverse of the F probability distribution. Make sure you understand the implications of this before using the function.

### Usage

A few examples using the F.INV function.

```
F.INV(0.05, 3, 5)  
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
        2,
        10,
        "=F.INV(A2,B2,C2)"
    ],
    [
        0.01,
        3,
        15,
        "=F.INV(A3,B3,C3)"
    ],
    [
        0.1,
        4,
        20,
        "=F.INV(A4,B4,C4)"
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
        2,
        10,
        "=F.INV(A2,B2,C2)"
    ],
    [
        0.01,
        3,
        15,
        "=F.INV(A3,B3,C3)"
    ],
    [
        0.1,
        4,
        20,
        "=F.INV(A4,B4,C4)"
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
        2,
        10,
        "=F.INV(A2,B2,C2)"
    ],
    [
        0.01,
        3,
        15,
        "=F.INV(A3,B3,C3)"
    ],
    [
        0.1,
        4,
        20,
        "=F.INV(A4,B4,C4)"
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
        2,
        10,
        "=F.INV(A2,B2,C2)"
    ],
    [
        0.01,
        3,
        15,
        "=F.INV(A3,B3,C3)"
    ],
    [
        0.1,
        4,
        20,
        "=F.INV(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

