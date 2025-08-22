title: INTERCEPT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INTERCEPT function in Jspreadsheet

# INTERCEPT function

`PRO`{.jtag}

The `INTERCEPT` function in Jspreadsheet Formulas Pro is a handy tool that helps you find the point where a line crosses the y-axis, based on a series of x- and y-values. By using this function, you're essentially defining the line's equation, which is crucial in data analysis and forecasting. In other words, `INTERCEPT` allows you to predict the y-value when x equals zero, based on existing data points. This function is commonly used in statistical analysis and trend projections.

## Documentation

Returns the y-axis intercept of a line defined by a set of x- and y-values.

### Category

Statistical

### Syntax

INTERCEPT(known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | The array or range of y-values that define the line. |
| `known_x's` | The array or range of corresponding x-values to known_y's. If omitted, Excel assumes a set of 1, 2, 3, ..., n. |


### Behavior

The `INTERCEPT` function in a spreadsheet calculates the point where a line will intersect the y-axis by using existing x-values and y-values. Here's how it handles various cell types:

- **Empty cells**: The `INTERCEPT` function ignores empty cells.
- **Text**: This function does not accept text values. If any cell in the range contains text, the function returns a `#VALUE!` error.
- **Booleans**: Boolean values are treated as numbers in the `INTERCEPT` function; TRUE as 1 and FALSE as 0.
- **Errors**: If any cell in the range contains an error, the `INTERCEPT` function will return that same error.
- **Non-Numeric values**: Non-numeric values in a cell will cause a `#VALUE!` error.

### Common Errors

| Error        | Description           |
| ------------- |:-------------:|
| `#DIV/0!`     | This error occurs if the standard deviation of the given x-values equals zero. |
| `#N/A`      | This error is returned when the array or range of x-values and y-values are of different lengths.      |
| `#VALUE!` | This error is returned when non-numeric values are included in the x-values or y-values or if text is present in the cells.      |

### Best practices

> - Always ensure that the arrays or ranges of x-values and y-values are of the same length to avoid a `#N/A` error.
> - Make sure that your dataset does not contain text or non-numeric values as they will result in a `#VALUE!` error.
> - Be aware that `INTERCEPT` function does not check whether your data fits a linear model, it only computes according to the method of least squares. Therefore, ensure your data is suitable for a linear regression model before using this function.
> - Use error checking functions like `ISNUMBER` or `IFERROR` to handle possible errors before they occur.

### Usage

A few examples using the INTERCEPT function.

```
INTERCEPT(B2:B7, A2:A7) returns the y-intercept of the linear regression line for the data in the range A2:B7  
INTERCEPT(C2:C6, D2:D6) returns the y-intercept of the linear regression line for the data in the range C2:D6  
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        95
    ],
    [
        "Y-Intercept:",
        "=INTERCEPT(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        95
    ],
    [
        "Y-Intercept:",
        "=INTERCEPT(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        95
    ],
    [
        "Y-Intercept:",
        "=INTERCEPT(B2:B5,A2:A5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        95
    ],
    [
        "Y-Intercept:",
        "=INTERCEPT(B2:B5,A2:A5)"
    ]
]
            }]
        });
    }
}
```

