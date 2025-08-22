title: LOGEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOGEST function in Jspreadsheet

# LOGEST function

`PRO`{.jtag}

The `LOGEST` function in Jspreadsheet Formulas Pro is used to calculate an exponential curve that best fits a set of data. This function then provides an array of values that outline this curve. In simpler terms, it's a tool that helps to predict the trajectory or pattern of your data by providing the best exponential fit. This can be extremely helpful in various fields, from finance to science, for forecasting future data points.

## Documentation

Calculates an exponential curve that fits a set of data and returns an array of values that describes the curve.

### Category

Statistical

### Syntax

LOGEST(known_y's, [known_x's], [const], [stats])

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | The array or range containing the dependent variable values. |
| `[known_x's]` | Optional. The array or range containing the independent variable values. If omitted, Excel uses [1,2,3,...] as the default independent variable array. |
| `[const]` | Optional. A logical value that specifies whether to force the exponential curve to pass through the origin (0,0). If TRUE, the y-intercept is set to 0 and the curve is forced to pass through the origin. If FALSE or omitted, the y-intercept is calculated normally. |
| `[stats]` | Optional. A logical value that specifies whether to return additional regression statistics. If TRUE, LOGEST returns an array of additional statistics, including the standard error and R-squared value. If FALSE or omitted, LOGEST returns only the coefficients of the exponential curve. |


### Behavior

The 'LOGEST' function in spreadsheets is used to perform a logarithmic regression that fits the equation y = b*m^x to data. It returns an array of y-values that correspond to the x-values in the dataset. Here are some common behaviors:

- Empty cells: If an empty cell is found, the 'LOGEST' function will ignore it and calculate the results based on the cells containing numerical values.

- Text: If a cell contains text, that cell is ignored by the 'LOGEST' function.

- Booleans: Boolean values are treated as 1 (for TRUE) and 0 (for FALSE) by the 'LOGEST' function.

- Errors: If an error is encountered in a cell, the 'LOGEST' function will propagate the error. For example, if a cell contains a division by zero error, the 'LOGEST' function will return a #DIV/0! error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | The 'LOGEST' function returns this error if there are fewer than two data points, or if the variance of the independent variable (x-values) equals zero. |
| #VALUE! | This error is returned if any of the arguments are non-numeric or if they contain text. |
| #DIV/0! | The 'LOGEST' function returns this error if there is a division by zero in the dataset. |

### Best practices

> - Ensure that your data doesn't contain text or error values, as these can affect the outcome of the 'LOGEST' function.
> - Always check your data for accuracy before using the 'LOGEST' function as it is sensitive to outliers.
> - Use the 'LOGEST' function for datasets where the rate of change increases or decreases quickly and then levels out.
> - Remember that 'LOGEST' function returns an array of values, so it must be entered as an array formula in a range that matches the size of the array.

### Usage

A few examples using the LOGEST function.

```
LOGEST(A1:A10, B1:B10) returns an array of coefficients for the exponential curve that best fits the points (A1,B1), (A2,B2), ... , (A10,B10)  
LOGEST(A1:A10, B1:B10, TRUE) returns an array of coefficients for the exponential curve that passes through the origin and best fits the same points  
LOGEST(A1:A10, B1:B10, FALSE, TRUE) returns an array of regression statistics alongside the coefficients for the exponential curve that best fits the same points.  
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
        "Month",
        "Sales",
        "Exponential Fit"
    ],
    [
        1,
        100,
        "=LOGEST(B2:B6,A2:A6)"
    ],
    [
        2,
        150
    ],
    [
        3,
        225
    ],
    [
        4,
        338
    ],
    [
        5,
        507
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
        "Month",
        "Sales",
        "Exponential Fit"
    ],
    [
        1,
        100,
        "=LOGEST(B2:B6,A2:A6)"
    ],
    [
        2,
        150
    ],
    [
        3,
        225
    ],
    [
        4,
        338
    ],
    [
        5,
        507
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
        "Month",
        "Sales",
        "Exponential Fit"
    ],
    [
        1,
        100,
        "=LOGEST(B2:B6,A2:A6)"
    ],
    [
        2,
        150
    ],
    [
        3,
        225
    ],
    [
        4,
        338
    ],
    [
        5,
        507
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
        "Month",
        "Sales",
        "Exponential Fit"
    ],
    [
        1,
        100,
        "=LOGEST(B2:B6,A2:A6)"
    ],
    [
        2,
        150
    ],
    [
        3,
        225
    ],
    [
        4,
        338
    ],
    [
        5,
        507
    ]
]
            }]
        });
    }
}
```

