title: CHISQ.DIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHISQ.DIST function in Jspreadsheet

# CHISQ.DIST function

`PRO`{.jtag}

The `CHISQ.DIST` function in Jspreadsheet Formulas Pro is used to calculate the one-tailed probability of the chi-squared distribution, which is a common probability distribution used in statistical analysis. Essentially, it helps you assess the likelihood of an observed distribution being due to chance. This is particularly useful when you're analyzing large data sets or conducting hypothesis testing. Remember, the lower the result, the less likely the observed distribution is due to randomness.

## Documentation

Returns the one-tailed probability of the chi-squared distribution.

### Category

Statistical

### Syntax

CHISQ.DIST(x, degrees_freedom, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which you want to evaluate the distribution. |
| `degrees_freedom` | The number of degrees of freedom of the distribution. Must be a positive integer. |
| `cumulative` | A logical value that determines the form of the function. If TRUE, returns the cumulative distribution function; if FALSE, returns the probability density function. |


### Behavior

The `CHISQ.DIST` function in spreadsheets calculates the left-tailed chi-squared probability distribution. Its behavior can be defined as follows:

- The function takes two arguments: x (the value at which we evaluate the distribution) and degrees_freedom (number of degrees of freedom).
- Both arguments are required and must be numerical. If any of these arguments is non-numerical, the function returns a `#VALUE!` error.
- The function handles empty cells by treating them as zeros.
- The function does not handle text or booleans. If any argument is text or a boolean value, the function returns a `#VALUE!` error.
- If the degrees_freedom argument is less than 1 or greater than 10^10, the function returns a `#NUM!` error.
- If the x argument is negative, the function returns a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs if either of the supplied arguments is non-numeric, or if any of the arguments are text or boolean values. |
| `#NUM!` | This error occurs if the x argument is negative or if the degrees_freedom argument is less than 1 or greater than 10^10. |

### Best practices

> - Ensure that both input arguments are numeric. Non-numeric values will result in errors.
> - Always check that the degrees of freedom argument is within the acceptable range (1 to 10^10) to avoid a `#NUM!` error.
> - Remember that the function treats empty cells as zeros. Make sure there are no unintentionally empty cells in your input range.
> - Understand that `CHISQ.DIST` calculates the left-tailed probability. If you need the right-tailed probability, consider using `CHISQ.DIST.RT`.

### Usage

A few examples using the CHISQ.DIST function.

```
CHISQ.DIST(2.5, 4, TRUE)  
CHISQ.DIST(6, 8, FALSE)  
CHISQ.DIST(1, 1, TRUE)  
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
        "Cumulative Probability",
        "Density"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST(A2,B2,TRUE)",
        "=CHISQ.DIST(A2,B2,FALSE)"
    ],
    [
        6.2,
        3,
        "=CHISQ.DIST(A3,B3,TRUE)",
        "=CHISQ.DIST(A3,B3,FALSE)"
    ],
    [
        1.8,
        2,
        "=CHISQ.DIST(A4,B4,TRUE)",
        "=CHISQ.DIST(A4,B4,FALSE)"
    ],
    [
        9.1,
        5,
        "=CHISQ.DIST(A5,B5,TRUE)",
        "=CHISQ.DIST(A5,B5,FALSE)"
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
        "Cumulative Probability",
        "Density"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST(A2,B2,TRUE)",
        "=CHISQ.DIST(A2,B2,FALSE)"
    ],
    [
        6.2,
        3,
        "=CHISQ.DIST(A3,B3,TRUE)",
        "=CHISQ.DIST(A3,B3,FALSE)"
    ],
    [
        1.8,
        2,
        "=CHISQ.DIST(A4,B4,TRUE)",
        "=CHISQ.DIST(A4,B4,FALSE)"
    ],
    [
        9.1,
        5,
        "=CHISQ.DIST(A5,B5,TRUE)",
        "=CHISQ.DIST(A5,B5,FALSE)"
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
        "Cumulative Probability",
        "Density"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST(A2,B2,TRUE)",
        "=CHISQ.DIST(A2,B2,FALSE)"
    ],
    [
        6.2,
        3,
        "=CHISQ.DIST(A3,B3,TRUE)",
        "=CHISQ.DIST(A3,B3,FALSE)"
    ],
    [
        1.8,
        2,
        "=CHISQ.DIST(A4,B4,TRUE)",
        "=CHISQ.DIST(A4,B4,FALSE)"
    ],
    [
        9.1,
        5,
        "=CHISQ.DIST(A5,B5,TRUE)",
        "=CHISQ.DIST(A5,B5,FALSE)"
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
        "Cumulative Probability",
        "Density"
    ],
    [
        2.5,
        4,
        "=CHISQ.DIST(A2,B2,TRUE)",
        "=CHISQ.DIST(A2,B2,FALSE)"
    ],
    [
        6.2,
        3,
        "=CHISQ.DIST(A3,B3,TRUE)",
        "=CHISQ.DIST(A3,B3,FALSE)"
    ],
    [
        1.8,
        2,
        "=CHISQ.DIST(A4,B4,TRUE)",
        "=CHISQ.DIST(A4,B4,FALSE)"
    ],
    [
        9.1,
        5,
        "=CHISQ.DIST(A5,B5,TRUE)",
        "=CHISQ.DIST(A5,B5,FALSE)"
    ]
]
            }]
        });
    }
}
```

