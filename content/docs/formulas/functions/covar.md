title: COVAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COVAR function in Jspreadsheet

# COVAR function

`PRO`{.jtag}

The `COVAR` function in Jspreadsheet Formulas Pro is a tool used to compute the covariance between two sets of data. Covariance is essentially a statistical concept that helps us understand how two different variables shift or change together. This function in Jspreadsheet allows you to measure this relationship, giving you insights into the correlation between your two data groups. This can be particularly useful in data analysis or forecasting tasks.

## Documentation

Calculates the covariance, which is a measure of how much two random variables change together, between two specified sets of data.

### Category

Compatibility

### Syntax

COVAR(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range of data. |
| `array2` | The second array or range of data. Must be equal in length to array1. |


### Behavior

The 'COVAR' function in spreadsheets is used to calculate the covariance, which is a measure of how much two random variables vary together, between two sets of data. Here are some expected behaviors:

- The function expects two arrays or ranges of numerical data as arguments. The two arrays or ranges should be of equal length, else it will return an error.
- The function ignores text, logical values, and empty cells in the given arrays or ranges. 
- If the function encounters an error value in the cell, it returns an error.
- If one or both of the arrays or ranges do not contain any numerical data, the function returns a div/0 error.
- The function will return an error if you provide less than two data points in either or both of the arrays or ranges.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the two supplied data arrays are of different lengths. |
| #DIV/0! | This error occurs when one or both of the supplied data arrays do not contain any numerical data, or contains less than two data points. |
| #N/A | This error occurs when the function encounters an error value in one of the cells in the given arrays or ranges. |

### Best practices

> - Always ensure that the two data arrays or ranges provided as arguments to the 'COVAR' function are of equal length. Mismatch in lengths can lead to incorrect results or errors.
> - Use the 'COVAR' function only when you have numerical data. The function does not work with text or logical values.
> - Ensure the data arrays or ranges contain at least two data points. If less than two data points are provided, the function will return an error.
> - Handle the cells with error values in the given arrays or ranges properly to avoid getting errors when executing the 'COVAR' function.

### Usage

A few examples using the COVAR function.

```
COVAR([1,2,3,4],[5,6,7,8]) returns 1.25  
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        80,
        150
    ],
    [
        85,
        180
    ],
    [
        90,
        210
    ],
    [
        "",
        "",
        "=COVAR(A2:A5,B2:B5)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        80,
        150
    ],
    [
        85,
        180
    ],
    [
        90,
        210
    ],
    [
        "",
        "",
        "=COVAR(A2:A5,B2:B5)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        80,
        150
    ],
    [
        85,
        180
    ],
    [
        90,
        210
    ],
    [
        "",
        "",
        "=COVAR(A2:A5,B2:B5)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        80,
        150
    ],
    [
        85,
        180
    ],
    [
        90,
        210
    ],
    [
        "",
        "",
        "=COVAR(A2:A5,B2:B5)"
    ]
]
            }]
        });
    }
}
```

