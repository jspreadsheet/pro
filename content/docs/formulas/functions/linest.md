title: LINEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LINEST function in Jspreadsheet

# LINEST function

`PRO`{.jtag}

The `LINEST` function in Jspreadsheet Formulas Pro is a powerful tool that helps you analyze a set of known data points. It calculates the statistical values for a straight line that best fits your data, using a method called 'least squares'. Essentially, it tries to find a line that minimizes the sum of the squares of the differences between observed and calculated values. This function is particularly useful when you want to understand the relationship between two variables in your dataset.

## Documentation

Calculates the statistics for a line by fitting a straight line to a set of known data points using the least squares method.

### Category

Statistical

### Syntax

LINEST(known_y's, [known_x's], [const], [stats])

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | The array or range containing the dependent variable values. |
| `known_x's` | Optional. The array or range containing the independent variable values. If omitted, Excel uses [1,2,3,...] as the default independent variable array. |
| `const` | Optional. A logical value that specifies whether to force the y-intercept to be 0. If TRUE, the y-intercept is set to 0 and the slope is calculated using only the x variable data. If FALSE or omitted, the y-intercept is calculated normally. |
| `stats` | Optional. A logical value that specifies whether to return additional regression statistics. If TRUE, LINEST returns an array of additional statistics, including the standard error and R-squared value. If FALSE or omitted, LINEST returns only the slope and y-intercept values. |


### Behavior

The `LINEST` function in spreadsheets is used to calculate the statistics for a line by using the "least squares" method to calculate a straight line that best fits your data, and then returns an array that describes the line. Here's how it handles various types of data:

- **Empty Cells**: `LINEST` treats empty cells as zeros.
- **Text**: If a text value is in the array of known_y's or known_x's, `LINEST` returns a `#VALUE!` error.
- **Booleans**: Boolean values are treated as numbers 1 (for TRUE) and 0 (for FALSE) in the calculations. 
- **Errors**: If any cell in the range contains an error, the function will return an error.
- **Non-Numerical Values**: Non-numerical values in known_y's or known_x's cause `LINEST` to return a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If any cell in the array contains non-numeric values, a `#VALUE!` error is returned. |
| #REF! | This error occurs when the function is unable to reference the specified area. |
| #N/A | This error is returned when there are insufficient data points to calculate the line equation. |

### Best practices

> - Always check your data ranges for non-numeric values to avoid `#VALUE!` errors. 
> - Be cautious about empty cells as `LINEST` will treat them as zeros which might distort the result. 
> - Ensure you have a sufficient amount of data points to get a reliable result.
> - Keep in mind that `LINEST` assumes that the x-axis is the category axis. Use the data in the correct sequence.

### Usage

A few examples using the LINEST function.

```
LINEST(A1:A10, B1:B10) returns the slope and y-intercept of the best fit line through the points (A1,B1), (A2,B2), ... , (A10,B10)  
LINEST(A1:A10, B1:B10, TRUE) returns the slope of the best fit line with y-intercept set to zero and going through the points (A1,B1), (A2,B2), ... , (A10,B10)  
LINEST(A1:A10, B1:B10, FALSE, TRUE) returns an array of regression statistics alongside the slope and y-intercept values.  
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
        "Temperature",
        "Ice Cream Sales"
    ],
    [
        1,
        32,
        150
    ],
    [
        2,
        45,
        220
    ],
    [
        3,
        58,
        310
    ],
    [
        4,
        72,
        450
    ],
    [
        5,
        85,
        580
    ],
    [
        "",
        "=LINEST(C2:C6,B2:B6)",
        ""
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
        "Temperature",
        "Ice Cream Sales"
    ],
    [
        1,
        32,
        150
    ],
    [
        2,
        45,
        220
    ],
    [
        3,
        58,
        310
    ],
    [
        4,
        72,
        450
    ],
    [
        5,
        85,
        580
    ],
    [
        "",
        "=LINEST(C2:C6,B2:B6)",
        ""
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
        "Temperature",
        "Ice Cream Sales"
    ],
    [
        1,
        32,
        150
    ],
    [
        2,
        45,
        220
    ],
    [
        3,
        58,
        310
    ],
    [
        4,
        72,
        450
    ],
    [
        5,
        85,
        580
    ],
    [
        "",
        "=LINEST(C2:C6,B2:B6)",
        ""
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
        "Temperature",
        "Ice Cream Sales"
    ],
    [
        1,
        32,
        150
    ],
    [
        2,
        45,
        220
    ],
    [
        3,
        58,
        310
    ],
    [
        4,
        72,
        450
    ],
    [
        5,
        85,
        580
    ],
    [
        "",
        "=LINEST(C2:C6,B2:B6)",
        ""
    ]
]
            }]
        });
    }
}
```

