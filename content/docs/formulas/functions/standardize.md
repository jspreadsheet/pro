title: STANDARDIZE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STANDARDIZE function in Jspreadsheet

# STANDARDIZE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `STANDARDIZE` function in Jspreadsheet Formulas Pro is used to find a normalized value, also known as a z-score. You'll need to provide three pieces of information: a specific value, the average value of the entire group (population mean), and the standard deviation, which measures the amount of variation or dispersion in the group. This function then calculates the z-score, which tells you how many standard deviations away your specific value is from the mean. It's a useful tool in statistics to identify outliers and compare data points across different scales.

## Documentation

Returns a normalized value (z-score) given a value, a population mean, and a standard deviation.

### Category

Statistical

### Syntax

STANDARDIZE(x, mean, standard_dev)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value to normalize. |
| `mean` | The population mean to use as the basis of normalization. |
| `standard_dev` | The standard deviation of the population to use as the basis of normalization. Must be positive. |


### Behavior

The `STANDARDIZE` function in spreadsheets is used to normalize a dataset. It requires three arguments: the x (value to be standardized), mean (arithmetic mean of the distribution), and standard_deviation (standard deviation of the distribution). This function will return a standardized value based on the provided mean and standard deviation.

Here's how `STANDARDIZE` handles different scenarios:

- If the input is an empty cell, the function will return an error since all the arguments are required.
- If the input is text instead of a number for any of the three arguments (x, mean, standard_deviation), the function will return a `#VALUE!` error.
- If the standard deviation is zero or a negative number, the function will return a `#NUM!` error, as the standard deviation should always be a positive value.
- If the arguments are logical values (TRUE or FALSE), they will be converted to their numeric equivalents, i.e., TRUE as 1 and FALSE as 0, and the function will proceed with these values.
- If the x is a non-numeric value, the function will return a `#VALUE!` error.
- If the mean or standard deviation is missing, the function will return a `#N/A` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when one or more of the function's arguments are not numeric. |
| `#NUM!` | This error occurs when the standard deviation is less than or equal to zero. |
| `#N/A` | This error occurs when the mean or standard deviation is missing or not provided. |

### Best practices

> - Always ensure that all the arguments are numeric. Non-numeric inputs will result in a `#VALUE!` error.
> - Be cautious when using the function with logical values. Remember, TRUE will be treated as 1 and FALSE as 0.
> - Never allow the standard deviation to be zero or a negative number, as it will result in a `#NUM!` error.
> - Always provide all the required arguments to avoid the `#N/A` error.

### Usage

A few examples using the STANDARDIZE function.

```
STANDARDIZE(80, 75, 5) returns 1  
STANDARDIZE(70, 75, 5) returns -1  
STANDARDIZE(A2, A3, A4) returns the z-score of the value in cell A2, based on the population mean in cell A3 and the population standard deviation in cell A4.  
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
        "Z-Score"
    ],
    [
        "Alice",
        85,
        "=STANDARDIZE(B2,$B$5,$B$6)"
    ],
    [
        "Bob",
        92,
        "=STANDARDIZE(B3,$B$5,$B$6)"
    ],
    [
        "Carol",
        78,
        "=STANDARDIZE(B4,$B$5,$B$6)"
    ],
    [
        "Mean:",
        85
    ],
    [
        "Std Dev:",
        7
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
        "Z-Score"
    ],
    [
        "Alice",
        85,
        "=STANDARDIZE(B2,$B$5,$B$6)"
    ],
    [
        "Bob",
        92,
        "=STANDARDIZE(B3,$B$5,$B$6)"
    ],
    [
        "Carol",
        78,
        "=STANDARDIZE(B4,$B$5,$B$6)"
    ],
    [
        "Mean:",
        85
    ],
    [
        "Std Dev:",
        7
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
        "Z-Score"
    ],
    [
        "Alice",
        85,
        "=STANDARDIZE(B2,$B$5,$B$6)"
    ],
    [
        "Bob",
        92,
        "=STANDARDIZE(B3,$B$5,$B$6)"
    ],
    [
        "Carol",
        78,
        "=STANDARDIZE(B4,$B$5,$B$6)"
    ],
    [
        "Mean:",
        85
    ],
    [
        "Std Dev:",
        7
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
        "Z-Score"
    ],
    [
        "Alice",
        85,
        "=STANDARDIZE(B2,$B$5,$B$6)"
    ],
    [
        "Bob",
        92,
        "=STANDARDIZE(B3,$B$5,$B$6)"
    ],
    [
        "Carol",
        78,
        "=STANDARDIZE(B4,$B$5,$B$6)"
    ],
    [
        "Mean:",
        85
    ],
    [
        "Std Dev:",
        7
    ]
]
            }]
        });
    }
}
```

