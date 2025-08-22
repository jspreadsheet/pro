title: EXPON.DIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EXPON.DIST function in Jspreadsheet

# EXPON.DIST function

`PRO`{.jtag}

The `EXPON.DIST` function in Jspreadsheet Formulas Pro is a tool that provides the exponential distribution based on certain parameters you input. Essentially, it gives you a probability associated with an event occurring over a specified time frame, assuming that the event occurrences are independent. This function is particularly useful in statistical analyses and predictions, like estimating failure rates or arrival times. You just need to provide the parameters, and `EXPON.DIST` takes care of the complex calculations, giving you an easily interpreted result.

## Documentation

Returns the exponential distribution for a specified set of parameters.

### Category

Statistical

### Syntax

EXPON.DIST(x, lambda, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the function. |
| `lambda` | The parameter that determines the shape of the distribution. |
| `cumulative` | A logical value that indicates whether to return the cumulative distribution function or the probability density function. |


### Behavior

The `EXPON.DIST` function in spreadsheets calculates the exponential distribution, often used in reliability analysis and in the study of waiting times. Here's how it handles different types of inputs:

- Numeric values: The function expects two numeric arguments, `x` (the value at which to evaluate the function) and `lambda` (the parameter of the distribution, a positive number).
- Empty cells: If either of the cells used as arguments is empty, the function will treat it as a zero, which results in an error because zero is not a valid parameter for the exponential distribution.
- Text: Text input will cause the function to return an error, as it only works with numeric values.
- Booleans: Boolean values are treated as numbers (TRUE as 1 and FALSE as 0). However, using booleans may cause errors because 0 is not a valid parameter for the exponential distribution.
- Errors: If any of the arguments are error values, or if an error occurs during the calculation, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if any of the supplied arguments are non-numeric. |
| #NUM! | This error is returned if the supplied `lambda` argument is less than or equal to 0, or if the `x` argument is less than 0. |
| #DIV/0! | This error is returned if the `lambda` argument is equal to 0, because division by zero is undefined. |

### Best practices

> - Always ensure that the `lambda` and `x` arguments are positive numbers, as negative values will result in errors.
> - Be mindful when referencing cells for the function's arguments. Make sure the cells contain numeric values to avoid #VALUE! errors.
> - The `EXPON.DIST` function is used to model situations where events occur continuously and independently at a constant average rate. It's best to use this function when your data align with these assumptions.
> - Use the third parameter `cumulative` wisely. If TRUE, it returns the cumulative distribution function; if FALSE, it returns the probability density function. By default, it's FALSE.

### Usage

A few examples using the EXPON.DIST function.

```
EXPON.DIST(2,3,FALSE)  
EXPON.DIST(2,3,TRUE)  
EXPON.DIST(3,3,FALSE)  
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
        "Time (x)",
        "Rate (\u03bb)",
        "PDF",
        "CDF"
    ],
    [
        0.5,
        2,
        "=EXPON.DIST(A2,B2,FALSE)",
        "=EXPON.DIST(A2,B2,TRUE)"
    ],
    [
        1.0,
        2,
        "=EXPON.DIST(A3,B3,FALSE)",
        "=EXPON.DIST(A3,B3,TRUE)"
    ],
    [
        1.5,
        2,
        "=EXPON.DIST(A4,B4,FALSE)",
        "=EXPON.DIST(A4,B4,TRUE)"
    ],
    [
        2.0,
        2,
        "=EXPON.DIST(A5,B5,FALSE)",
        "=EXPON.DIST(A5,B5,TRUE)"
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
        "Time (x)",
        "Rate (\u03bb)",
        "PDF",
        "CDF"
    ],
    [
        0.5,
        2,
        "=EXPON.DIST(A2,B2,FALSE)",
        "=EXPON.DIST(A2,B2,TRUE)"
    ],
    [
        1.0,
        2,
        "=EXPON.DIST(A3,B3,FALSE)",
        "=EXPON.DIST(A3,B3,TRUE)"
    ],
    [
        1.5,
        2,
        "=EXPON.DIST(A4,B4,FALSE)",
        "=EXPON.DIST(A4,B4,TRUE)"
    ],
    [
        2.0,
        2,
        "=EXPON.DIST(A5,B5,FALSE)",
        "=EXPON.DIST(A5,B5,TRUE)"
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
        "Time (x)",
        "Rate (\u03bb)",
        "PDF",
        "CDF"
    ],
    [
        0.5,
        2,
        "=EXPON.DIST(A2,B2,FALSE)",
        "=EXPON.DIST(A2,B2,TRUE)"
    ],
    [
        1.0,
        2,
        "=EXPON.DIST(A3,B3,FALSE)",
        "=EXPON.DIST(A3,B3,TRUE)"
    ],
    [
        1.5,
        2,
        "=EXPON.DIST(A4,B4,FALSE)",
        "=EXPON.DIST(A4,B4,TRUE)"
    ],
    [
        2.0,
        2,
        "=EXPON.DIST(A5,B5,FALSE)",
        "=EXPON.DIST(A5,B5,TRUE)"
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
        "Time (x)",
        "Rate (\u03bb)",
        "PDF",
        "CDF"
    ],
    [
        0.5,
        2,
        "=EXPON.DIST(A2,B2,FALSE)",
        "=EXPON.DIST(A2,B2,TRUE)"
    ],
    [
        1.0,
        2,
        "=EXPON.DIST(A3,B3,FALSE)",
        "=EXPON.DIST(A3,B3,TRUE)"
    ],
    [
        1.5,
        2,
        "=EXPON.DIST(A4,B4,FALSE)",
        "=EXPON.DIST(A4,B4,TRUE)"
    ],
    [
        2.0,
        2,
        "=EXPON.DIST(A5,B5,FALSE)",
        "=EXPON.DIST(A5,B5,TRUE)"
    ]
]
            }]
        });
    }
}
```

