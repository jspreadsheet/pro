title: VAR.S function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VAR.S function in Jspreadsheet

# VAR.S function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `VAR.S` function in Jspreadsheet Formulas Pro is used to calculate the variance from a sample of data. It gives a fair estimate of the population variance, which is a measure of how much individual data points in a group differ from the group's average. This function is particularly useful in statistical analysis to understand data dispersion and volatility. It can be easily used in Jspreadsheet Formulas Pro to analyze your data sets.

## Documentation

Calculates the variance based on a sample. Provides an unbiased estimate of the population variance.

### Category

Statistical

### Syntax

VAR.S(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers that you want to calculate the variance of. At least one number is required. |
| `numberN` | Additional numbers or ranges of numbers that you want to include in the calculation. You can include up to 255 numbers or ranges. |


### Behavior

The `VAR.S` function in spreadsheets calculates the variance based on a sample. Variance is a measure of dispersion, showing how far the numbers are spread out from their average. Here's how `VAR.S` handles different types of inputs:

- **Numbers**: `VAR.S` treats numeric values normally, using them in its variance calculation.
- **Text and Booleans**: If the references or direct inputs are text or boolean values, `VAR.S` ignores them in its calculation.
- **Empty Cells**: `VAR.S` ignores empty cells completely. They do not impact the calculation.
- **Errors**: If any cell reference or direct input has an error, the `VAR.S` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0! | This error occurs when there are less than two data points in the sample or all the data points are non-numeric (like text, booleans, or blank cells). |
| #VALUE! | This error is displayed when the function receives a value of a different type than expected. |
| #N/A | This error occurs when there's no available data to calculate variance. |

### Best practices

> - Always ensure you have at least two numeric data points in the range you're calculating the variance for, as variance requires comparison between at least two values.
> - Be aware that `VAR.S` ignores text and boolean values. If you need these to be considered as zero, convert them to numeric values before calculation.
> - To avoid errors, ensure that your sample data doesn't contain error values, as they would cause the `VAR.S` function to return an error as well.
> - It's a good practice to check your data for outliers as they can significantly affect the variance.

### Usage

A few examples using the VAR.S function.

```
VAR.S(1,2,3,4,5) returns 2.5 (because the variance of these numbers as a sample is 2.5)  
VAR.S(A1:A10) returns the variance of the values in cells A1 through A10 as a sample  
VAR.S(B1:B10, C1:C10) returns the variance of the combined sets of values in cells B1 through B10 and C1 through C10 as a sample.  
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
        "Student",
        "Test Score",
        "Sample Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.S(B2:B6)"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Eve",
        95
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
        "Student",
        "Test Score",
        "Sample Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.S(B2:B6)"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Eve",
        95
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
        "Student",
        "Test Score",
        "Sample Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.S(B2:B6)"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Eve",
        95
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
        "Student",
        "Test Score",
        "Sample Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.S(B2:B6)"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Eve",
        95
    ]
]
            }]
        });
    }
}
```

