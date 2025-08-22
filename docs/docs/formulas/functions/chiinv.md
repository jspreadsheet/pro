title: CHIINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHIINV function in Jspreadsheet

# CHIINV function

`PRO`{.jtag}

The `CHIINV` function in Jspreadsheet Formulas Pro is a statistical function that computes the inverse of the chi-squared distribution. This function is typically used in hypothesis testing or confidence interval estimation. Essentially, it gives you the chi-squared distribution value for a given one-tailed probability and degrees of freedom. This can be very useful in testing the statistical significance of an observation.

## Documentation

Returns the inverse of the one-tailed probability of the chi-squared distribution.

### Category

Compatibility

### Syntax

CHIINV(probability, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | A probability associated with the chi-squared distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |


### Behavior

The 'CHIINV' function in spreadsheets is used to return the one-tailed probability of the chi-squared distribution. Here's how it handles various input types: 

- Empty Cells: The 'CHIINV' function treats empty cells as zeros.
- Text: Any cell with text input will be considered an error.
- Booleans: Boolean values are treated as integers 1 (for TRUE) and 0 (for FALSE).
- Errors: If either of the arguments are error values, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when either of the arguments are non-numeric.|
| #NUM! | This error is returned if the supplied probability argument is less than 0 or greater than 1. It also occurs if the supplied degrees of freedom is less than 1 or non-integer. |
| #DIV/0! | This error is returned when the degrees of freedom is 0. |

### Best Practices

> - Always ensure that the supplied probability argument is between 0 and 1. Any value outside this range will result in an error.
> - The degrees of freedom should be a positive integer. Non-integer or negative values will cause the function to return an error.
> - Avoid using text or boolean values as input for the 'CHIINV' function to prevent any errors.
> - Always check your data to ensure there are no empty cells as 'CHIINV' treats them as zeros.

### Usage

A few examples using the CHIINV function.

```
CHIINV(0.05, 3)  
CHIINV(0.01, 6)  
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
        "=CHIINV(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHIINV(A3,B3)"
    ],
    [
        0.1,
        5,
        "=CHIINV(A4,B4)"
    ],
    [
        0.025,
        2,
        "=CHIINV(A5,B5)"
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
        "=CHIINV(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHIINV(A3,B3)"
    ],
    [
        0.1,
        5,
        "=CHIINV(A4,B4)"
    ],
    [
        0.025,
        2,
        "=CHIINV(A5,B5)"
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
        "=CHIINV(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHIINV(A3,B3)"
    ],
    [
        0.1,
        5,
        "=CHIINV(A4,B4)"
    ],
    [
        0.025,
        2,
        "=CHIINV(A5,B5)"
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
        "=CHIINV(A2,B2)"
    ],
    [
        0.01,
        3,
        "=CHIINV(A3,B3)"
    ],
    [
        0.1,
        5,
        "=CHIINV(A4,B4)"
    ],
    [
        0.025,
        2,
        "=CHIINV(A5,B5)"
    ]
]
            }]
        });
    }
}
```

