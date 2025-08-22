title: SKEW function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SKEW function in Jspreadsheet

# SKEW function

`PRO`{.jtag}

The `SKEW` function in Jspreadsheet Formulas Pro is a way to determine the asymmetry of a distribution in your data. This function calculates and returns the skewness value, giving you an understanding of the balance or imbalance in your data set. A positive skewness value indicates that data is skewed to the right, while a negative value shows it's skewed to the left. Using `SKEW` can help you analyze and understand your data better.

## Documentation

Returns the skewness of a distribution, which is a measure of asymmetry.

### Category

Statistical

### Syntax

SKEW(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the skewness. |
| `number2` | Optional. Additional numbers or ranges of numbers for which to calculate the skewness. Up to 255 arguments can be provided. |


### Behavior

The `SKEW` function is used in spreadsheets to measure the skewness of a dataset. The skewness is a measure of the asymmetry of the probability distribution of a real-valued random variable about its mean. 

Here's how the `SKEW` function handles different types of data:

- **Empty cells**: The `SKEW` function ignores empty cells in the range or array of numbers provided.
- **Text**: If the range or array contains text, the `SKEW` function will return a `#VALUE!` error.
- **Booleans**: The Boolean values TRUE and FALSE are treated as 1 and 0, respectively.
- **Errors**: If any cell in the range or array provided contains an error, the `SKEW` function will also return an error.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| `#VALUE!` | This error occurs when the range or array provided to the `SKEW` function contains non-numeric data like text. |
| `#DIV/0!` | This error occurs when the `SKEW` function is given less than three data points. |
| `#N/A` | This error occurs when the `SKEW` function is provided with an array or range that contains an error. |

### Best practices

> - Always ensure that the range or array provided to the `SKEW` function contains numeric data only. Non-numeric data will result in a `#VALUE!` error.
- The `SKEW` function requires at least three data points to calculate skewness. Providing less than three data points will result in a `#DIV/0!` error.
- It's a good practice to check your data for errors before using the `SKEW` function. Any error in the data will cause the function to return an error.
- The `SKEW` function includes logical values and numbers that are typed directly into the list of arguments. If you do not want to include logical values or typed numbers, use the `SKEW` function on a range or array of cells.

### Usage

A few examples using the SKEW function.

```
SKEW(A1:A100) returns the skewness of the values in cells A1 through A100  
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
        "Test Scores",
        "Sales Data",
        "Analysis"
    ],
    [
        85,
        12000,
        "=SKEW(A2:A6)"
    ],
    [
        92,
        15000,
        "=SKEW(B2:B6)"
    ],
    [
        78,
        8000
    ],
    [
        95,
        22000
    ],
    [
        88,
        14000
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
        "Test Scores",
        "Sales Data",
        "Analysis"
    ],
    [
        85,
        12000,
        "=SKEW(A2:A6)"
    ],
    [
        92,
        15000,
        "=SKEW(B2:B6)"
    ],
    [
        78,
        8000
    ],
    [
        95,
        22000
    ],
    [
        88,
        14000
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
        "Test Scores",
        "Sales Data",
        "Analysis"
    ],
    [
        85,
        12000,
        "=SKEW(A2:A6)"
    ],
    [
        92,
        15000,
        "=SKEW(B2:B6)"
    ],
    [
        78,
        8000
    ],
    [
        95,
        22000
    ],
    [
        88,
        14000
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
        "Test Scores",
        "Sales Data",
        "Analysis"
    ],
    [
        85,
        12000,
        "=SKEW(A2:A6)"
    ],
    [
        92,
        15000,
        "=SKEW(B2:B6)"
    ],
    [
        78,
        8000
    ],
    [
        95,
        22000
    ],
    [
        88,
        14000
    ]
]
            }]
        });
    }
}
```

