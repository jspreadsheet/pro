title: COVARIANCE.P function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COVARIANCE.P function in Jspreadsheet

# COVARIANCE.P function

`PRO`{.jtag}

The `COVARIANCE.P` function in Jspreadsheet Formulas Pro is used to calculate the population covariance. This is a statistic that indicates the degree to which two variables fluctuate together. In simpler terms, it tells us how much two sets of data change in tandem. To use this function, you provide two data sets, and the function will return a numerical value that represents their covariance.

## Documentation

Calculates the population covariance, which is a measure of how much two random variables change together, between two specified sets of data.

### Category

Statistical

### Syntax

COVARIANCE.P(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range of data. |
| `arrayN` | The second array or range of data. Must be equal in length to array1. |


### Behavior

The 'COVARIANCE.P' function in spreadsheets calculates the covariance, the average of the products of deviations for each data point pair in two data sets. Here's how it handles various types of data:

- Empty cells: The function ignores empty cells in the range of data.
- Text: The function ignores cells containing non-numerical values.
- Booleans: Boolean values are treated as 1 (for TRUE) and 0 (for FALSE).
- Errors: If any cell in the given range contains an error, the function itself will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs if the provided data arrays are empty or only have one data point. |
| #N/A | This error occurs when the arrays provided do not have the same length. |
| #VALUE! | This error is returned when the function encounters a non-numeric value in the given arrays. |

### Best practices

> - Always ensure that the two data sets or arrays provided as arguments have the same length. The function will return an error if they don't.
> - Use numerical values for accurate results. Non-numerical values are ignored by the function, which can lead to inaccurate results.
> - Be mindful of the presence of errors in your data set. An error in any cell within the array will cause the function to return an error.
> - Remember that 'COVARIANCE.P' calculates the population covariance. If you have a sample of data and want to find the sample covariance, use 'COVARIANCE.S' instead.

### Usage

A few examples using the COVARIANCE.P function.

```
COVARIANCE.P([1,2,3,4],[5,6,7,8]) returns 1.25  
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
        75
    ],
    [
        4,
        85
    ],
    [
        6,
        90
    ],
    [
        8,
        95
    ],
    [
        "Covariance:",
        "=COVARIANCE.P(A2:A5,B2:B5)"
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
        75
    ],
    [
        4,
        85
    ],
    [
        6,
        90
    ],
    [
        8,
        95
    ],
    [
        "Covariance:",
        "=COVARIANCE.P(A2:A5,B2:B5)"
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
        75
    ],
    [
        4,
        85
    ],
    [
        6,
        90
    ],
    [
        8,
        95
    ],
    [
        "Covariance:",
        "=COVARIANCE.P(A2:A5,B2:B5)"
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
        75
    ],
    [
        4,
        85
    ],
    [
        6,
        90
    ],
    [
        8,
        95
    ],
    [
        "Covariance:",
        "=COVARIANCE.P(A2:A5,B2:B5)"
    ]
]
            }]
        });
    }
}
```

