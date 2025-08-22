title: CHIDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHIDIST function in Jspreadsheet

# CHIDIST function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `CHIDIST` function is used to calculate the one-tailed probability of the chi-squared distribution. In simpler terms, it helps you determine how likely an observed distribution is due to chance, based on a chi-squared statistic. This function can be beneficial in statistical analysis, particularly in testing hypotheses. You need to provide two arguments to use this function: the value of chi-square statistic and the degrees of freedom.

## Documentation

Returns the one-tailed probability of the chi-squared distribution.

### Category

Compatibility

### Syntax

CHIDIST(x, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which you want to evaluate the distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |


### Behavior

The `CHIDIST` function in spreadsheet calculates the right-tailed probability of the chi-squared distribution. The function takes two arguments: x (the value at which you want to evaluate the distribution) and deg_freedom (the number of degrees of freedom).

- If either of the arguments is non-numeric, `CHIDIST` returns a `#VALUE!` error.
- If the deg_freedom is less than 1 or greater than 10^10, `CHIDIST` returns a `#NUM!` error.
- If x is negative, `CHIDIST` returns a `#NUM!` error.
- Empty cells are treated as zeros.
- Texts and boolean values are not valid inputs and would result in a `#VALUE!` error.
- The function propagates any error from cells referenced in the arguments.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | If either of the provided arguments is non-numeric, a `#VALUE!` error is returned. |
| #NUM! | If the deg_freedom is less than 1 or greater than 10^10, `CHIDIST` returns a `#NUM!` error. Also, if x is negative, `CHIDIST` returns a `#NUM!` error. |

### Best practices

> - Ensure that both x and deg_freedom are non-negative values to avoid `#NUM!` error.
> - deg_freedom should be an integer, even though the function does not explicitly require it. Providing a non-integer may give a result, but it may not be meaningful in the context of a chi-squared distribution.
> - Be aware that `CHIDIST` calculates the right-tailed probability. If you need the left-tailed probability, consider using other functions like `CHIINV`.
> - Always check the data types of the arguments you are passing to avoid unexpected `#VALUE!` errors.

### Usage

A few examples using the CHIDIST function.

```
CHIDIST(2.5, 4)  
CHIDIST(6, 8)  
CHIDIST(1, 1)  
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
        "P-Value"
    ],
    [
        2.5,
        4,
        "=CHIDIST(A2,B2)"
    ],
    [
        6.2,
        3,
        "=CHIDIST(A3,B3)"
    ],
    [
        8.1,
        5,
        "=CHIDIST(A4,B4)"
    ],
    [
        1.5,
        2,
        "=CHIDIST(A5,B5)"
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
        "P-Value"
    ],
    [
        2.5,
        4,
        "=CHIDIST(A2,B2)"
    ],
    [
        6.2,
        3,
        "=CHIDIST(A3,B3)"
    ],
    [
        8.1,
        5,
        "=CHIDIST(A4,B4)"
    ],
    [
        1.5,
        2,
        "=CHIDIST(A5,B5)"
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
        "P-Value"
    ],
    [
        2.5,
        4,
        "=CHIDIST(A2,B2)"
    ],
    [
        6.2,
        3,
        "=CHIDIST(A3,B3)"
    ],
    [
        8.1,
        5,
        "=CHIDIST(A4,B4)"
    ],
    [
        1.5,
        2,
        "=CHIDIST(A5,B5)"
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
        "P-Value"
    ],
    [
        2.5,
        4,
        "=CHIDIST(A2,B2)"
    ],
    [
        6.2,
        3,
        "=CHIDIST(A3,B3)"
    ],
    [
        8.1,
        5,
        "=CHIDIST(A4,B4)"
    ],
    [
        1.5,
        2,
        "=CHIDIST(A5,B5)"
    ]
]
            }]
        });
    }
}
```

