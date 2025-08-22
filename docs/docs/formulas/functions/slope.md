title: SLOPE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SLOPE function in Jspreadsheet

# SLOPE function

`PRO`{.jtag}

The `SLOPE` function in Jspreadsheet Formulas Pro is a statistical tool that helps you find the steepness of a line that best fits your data set. Think of it as drawing the most accurate straight line through your data points and finding the angle of that line. The higher the slope, the steeper the line. This function can be useful in understanding and predicting trends within your data.

## Documentation

Returns the slope of a linear regression line that best fits a data set.

### Category

Statistical

### Syntax

SLOPE(known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | An array or range of y-values that represent the dependent data. |
| `known_x's` | An array or range of x-values that represent the independent data. Must be the same size as known_y's. |


### Behavior

The `SLOPE` function in spreadsheets calculates the slope of the linear regression line through the dataset provided. The data points are interpreted as if they are values of the x and y coordinates for a set of observations. The function requires two arrays or ranges of equal length. Here's how it handles different situations:

- Empty Cells: These cells are ignored in the calculation.
- Text: If the arrays or ranges contain text, the function will treat it as an error.
- Booleans: Boolean values are treated as 1 (for TRUE) and 0 (for FALSE).
- Errors: If any cell in the range contains an error, the `SLOPE` function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs when the two arrays or ranges provided have different lengths. |
| #DIV/0! | Occurs when the standard deviation of the x-values equals zero, as the slope of the linear regression line cannot be calculated. |
| #VALUE! | Occurs when the arrays or ranges contain non-numeric values. |

### Best Practices

> - Always ensure that the two arrays or ranges provided have the same length to avoid the #N/A error.
> - Check your data ranges for any non-numeric values before using the `SLOPE` function to prevent the #VALUE! error.
> - Use the `SLOPE` function with caution when your data includes boolean values, as these are treated as 1 for TRUE and 0 for FALSE.
> - Always handle the case where the standard deviation of the x-values equals zero, as this will result in a #DIV/0! error.

### Usage

A few examples using the SLOPE function.

```
SLOPE(A2:A10, B2:B10) returns the slope of the linear regression line that best fits the data points in the ranges A2:A10 and B2:B10  
SLOPE([1,2,3,4],[5,6,7,8]) returns 1  
SLOPE([10,20,30,40],[-5,-10,-15,-20]) returns -5  
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
        "Slope:",
        "=SLOPE(B2:B5,A2:A5)"
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
        "Slope:",
        "=SLOPE(B2:B5,A2:A5)"
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
        "Slope:",
        "=SLOPE(B2:B5,A2:A5)"
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
        "Slope:",
        "=SLOPE(B2:B5,A2:A5)"
    ]
]
            }]
        });
    }
}
```

