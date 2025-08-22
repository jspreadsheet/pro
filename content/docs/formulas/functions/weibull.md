title: WEIBULL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WEIBULL function in Jspreadsheet

# WEIBULL function



The `WEIBULL` function in Jspreadsheet Formulas Pro is primarily used in the field of reliability analysis. This function provides the Weibull distribution, a statistical model that can predict the likelihood of failure in a system over time. It takes three arguments: the shape of the distribution, the scale of the distribution, and the point at which to evaluate the function. By utilizing this function, you can create complex analyses of system reliability and lifespan.

## Documentation

Returns the Weibull distribution, which is often used in reliability analysis.

### Category

Compatibility

### Syntax

WEIBULL(x, alpha, beta, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the distribution. |
| `alpha` | A parameter to set the location of the distribution. |
| `beta` | A parameter to set the scale of the distribution. |
| `cumulative` | Optional. A logical value that indicates which form of the Weibull distribution to use:
TRUE or omitted: The cumulative distribution function
FALSE: The probability density function |


### Behavior

The `WEIBULL` function in a spreadsheet is used to return the Weibull distribution. It is often used in reliability engineering and failure analysis. It calculates the probability of a given event happening at a specific time, given a specific shape and scale. The function handles the following:

- **Empty Cells**: If any of the input cells are empty, the `WEIBULL` function will return `#NUM!` error. All three parameters (x, alpha, and beta) are required for the function to work properly.

- **Text**: The `WEIBULL` function does not handle text in any of its arguments. If one or more arguments are text, the function will return a `#VALUE!` error.

- **Booleans**: If the arguments are boolean values, they will be coerced to numbers, with TRUE as 1 and FALSE as 0.

- **Errors**: If any of the arguments are error values, the `WEIBULL` function will propagate the error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error occurs when the given x, alpha, or beta values are less than or equal to zero. All three parameters must be greater than zero. |
| #VALUE! | This error occurs when one or more of the arguments are not recognized as numeric values.|

### Best practices

> - Always ensure that the parameters x, alpha, and beta are greater than zero, otherwise a `#NUM!` error is returned.
> - The `WEIBULL` function does not handle text input, so ensure all parameters are numeric.
> - Use the `WEIBULL` function for reliability engineering and failure time analysis, it is not intended for general statistical use.
> - Be aware that the cumulative parameter is a logical value that determines the form of the function. If TRUE, it returns the cumulative distribution function; if FALSE, it returns the probability density function.

### Usage

A few examples using the WEIBULL function.

```
WEIBULL(60, 50, 10, TRUE)  
WEIBULL(100, 50, 10, FALSE)  
WEIBULL(A2, B2, C2, TRUE) returns: The cumulative distribution function of the Weibull distribution with parameters in cells B2 and C2 at the value in cell A2.  
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
        "Time to Failure",
        "Alpha",
        "Beta",
        "Cumulative Probability",
        "Probability Density"
    ],
    [
        60,
        2,
        100,
        "=WEIBULL(A2,B2,C2,TRUE)",
        "=WEIBULL(A2,B2,C2,FALSE)"
    ],
    [
        80,
        2,
        100,
        "=WEIBULL(A3,B3,C3,TRUE)",
        "=WEIBULL(A3,B3,C3,FALSE)"
    ],
    [
        120,
        2,
        100,
        "=WEIBULL(A4,B4,C4,TRUE)",
        "=WEIBULL(A4,B4,C4,FALSE)"
    ],
    [
        150,
        2,
        100,
        "=WEIBULL(A5,B5,C5,TRUE)",
        "=WEIBULL(A5,B5,C5,FALSE)"
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
        "Time to Failure",
        "Alpha",
        "Beta",
        "Cumulative Probability",
        "Probability Density"
    ],
    [
        60,
        2,
        100,
        "=WEIBULL(A2,B2,C2,TRUE)",
        "=WEIBULL(A2,B2,C2,FALSE)"
    ],
    [
        80,
        2,
        100,
        "=WEIBULL(A3,B3,C3,TRUE)",
        "=WEIBULL(A3,B3,C3,FALSE)"
    ],
    [
        120,
        2,
        100,
        "=WEIBULL(A4,B4,C4,TRUE)",
        "=WEIBULL(A4,B4,C4,FALSE)"
    ],
    [
        150,
        2,
        100,
        "=WEIBULL(A5,B5,C5,TRUE)",
        "=WEIBULL(A5,B5,C5,FALSE)"
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
        "Time to Failure",
        "Alpha",
        "Beta",
        "Cumulative Probability",
        "Probability Density"
    ],
    [
        60,
        2,
        100,
        "=WEIBULL(A2,B2,C2,TRUE)",
        "=WEIBULL(A2,B2,C2,FALSE)"
    ],
    [
        80,
        2,
        100,
        "=WEIBULL(A3,B3,C3,TRUE)",
        "=WEIBULL(A3,B3,C3,FALSE)"
    ],
    [
        120,
        2,
        100,
        "=WEIBULL(A4,B4,C4,TRUE)",
        "=WEIBULL(A4,B4,C4,FALSE)"
    ],
    [
        150,
        2,
        100,
        "=WEIBULL(A5,B5,C5,TRUE)",
        "=WEIBULL(A5,B5,C5,FALSE)"
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
        "Time to Failure",
        "Alpha",
        "Beta",
        "Cumulative Probability",
        "Probability Density"
    ],
    [
        60,
        2,
        100,
        "=WEIBULL(A2,B2,C2,TRUE)",
        "=WEIBULL(A2,B2,C2,FALSE)"
    ],
    [
        80,
        2,
        100,
        "=WEIBULL(A3,B3,C3,TRUE)",
        "=WEIBULL(A3,B3,C3,FALSE)"
    ],
    [
        120,
        2,
        100,
        "=WEIBULL(A4,B4,C4,TRUE)",
        "=WEIBULL(A4,B4,C4,FALSE)"
    ],
    [
        150,
        2,
        100,
        "=WEIBULL(A5,B5,C5,TRUE)",
        "=WEIBULL(A5,B5,C5,FALSE)"
    ]
]
            }]
        });
    }
}
```

