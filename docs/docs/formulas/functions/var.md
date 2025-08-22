title: VAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VAR function in Jspreadsheet

# VAR function



The `VAR` function in Jspreadsheet Formulas Pro is a mathematical tool that helps you estimate the variance based on a sample of data. Variance is a statistical concept that measures how much individual numbers in a dataset vary or deviate from the average. In simpler terms, it tells you how spread out your data is. By inputting your data into the `VAR` function, you can easily calculate this value and gain deeper insights into your dataset.

## Documentation

Estimates the variance based on a sample.

### Category

Compatibility

### Syntax

VAR(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers that you want to calculate the variance of. At least one number is required. |
| `numberN` | Optional. Additional numbers or ranges of numbers that you want to include in the calculation. You can include up to 255 numbers or ranges. |


### Behavior

The `VAR` function in spreadsheets is used to calculate the variance of a sample dataset. Variance is a statistical measurement of the spread between numbers in a data set. 

- Empty cells: The `VAR` function ignores empty cells in the dataset.
- Text: If the dataset contains text, the `VAR` function will ignore these cells.
- Booleans: The `VAR` function will interpret `TRUE` as 1 and `FALSE` as 0.
- Errors: If the dataset contains cells with error values, the `VAR` function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the provided arguments are non-numeric. |
| #DIV/0! | This error is returned when there is only one number in the dataset. Variance requires at least two numbers to be calculated. |
| #N/A | This error occurs when the function cannot find the inputted data. |

### Best practices

> - Make sure all the cells you are including in the function contain numeric values. Non-numeric values can cause errors.
> - Be aware that `VAR` function treats `TRUE` as 1 and `FALSE` as 0. If you do not want this conversion, you may need to modify your data.
> - Use `VAR` function when your data represents a sample of a population. If your data represents the entire population, use `VARP` function instead.
> - Always check your dataset for error values before using the `VAR` function, as it will return an error if there are any.

### Usage

A few examples using the VAR function.

```
VAR(1,2,3,4,5)  
VAR(A1:A10) returns the variance of the values in cells A1 through A10  
VAR(B1:B10, C1:C10) returns the variance of the combined sets of values in cells B1 through B10 and C1 through C10.  
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
        "Sales Q1",
        "Sales Q2",
        "Variance"
    ],
    [
        12500,
        13200,
        "=VAR(A2:B2)"
    ],
    [
        11800,
        12900
    ],
    [
        13400,
        14100
    ],
    [
        12200,
        13500
    ],
    [
        "",
        "=VAR(A2:A5)",
        "=VAR(B2:B5)"
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
        "Sales Q1",
        "Sales Q2",
        "Variance"
    ],
    [
        12500,
        13200,
        "=VAR(A2:B2)"
    ],
    [
        11800,
        12900
    ],
    [
        13400,
        14100
    ],
    [
        12200,
        13500
    ],
    [
        "",
        "=VAR(A2:A5)",
        "=VAR(B2:B5)"
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
        "Sales Q1",
        "Sales Q2",
        "Variance"
    ],
    [
        12500,
        13200,
        "=VAR(A2:B2)"
    ],
    [
        11800,
        12900
    ],
    [
        13400,
        14100
    ],
    [
        12200,
        13500
    ],
    [
        "",
        "=VAR(A2:A5)",
        "=VAR(B2:B5)"
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
        "Sales Q1",
        "Sales Q2",
        "Variance"
    ],
    [
        12500,
        13200,
        "=VAR(A2:B2)"
    ],
    [
        11800,
        12900
    ],
    [
        13400,
        14100
    ],
    [
        12200,
        13500
    ],
    [
        "",
        "=VAR(A2:A5)",
        "=VAR(B2:B5)"
    ]
]
            }]
        });
    }
}
```

