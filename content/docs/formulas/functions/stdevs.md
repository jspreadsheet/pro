title: STDEV.S function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STDEV.S function in Jspreadsheet

# STDEV.S function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `STDEV.S` function in Jspreadsheet Formulas Pro is a useful tool that allows you to estimate the standard deviation of a population using a sample of numbers. It calculates the amount of variation or dispersion in the inputted sample data. You simply provide a range of numbers, and the `STDEV.S` function will return the standard deviation, helping you understand the spread of your data in Jspreadsheet.

## Documentation

Estimates the standard deviation of a population based on a sample of numbers.

### Category

Statistical

### Syntax

STDEV.S(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number in the sample. |
| `numberN` | Optional. Additional numbers in the sample. |


### Behavior

The `STDEV.S` function in spreadsheets calculates the standard deviation based on a sample of a population. The function excludes text values, logical values, and empty cells in the calculation, but it does include cells with the value zero. Here's how it handles different types of cell contents:

- **Empty cells**: These are ignored by the function.
- **Text**: Text cells are also ignored by the function.
- **Booleans**: Boolean values are not considered in the calculations.
- **Errors**: If any cell in the range contains an error, the `STDEV.S` function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs when the data range provided to the function contains less than two numeric values. |
| #VALUE! | This error is returned when the provided argument is non-numeric, or a non-array range. |
| #N/A | This error occurs when no data is provided to the function. |

### Best practices

> - Always ensure that your sample data range contains at least two numeric values to avoid a `#DIV/0!` error.
> - It is advisable to clean your data before using it in a `STDEV.S` function to avoid non-numeric values which may result in a `#VALUE!` error.
> - If you want to include logical values or text representations of numbers in your calculation, use the `STDEV.S` function in combination with the `N` function.
> - Remember that `STDEV.S` calculates standard deviation based on a sample. If your data represents an entire population, use `STDEV.P` instead.

### Usage

A few examples using the STDEV.S function.

```
STDEV.S(2, 4, 6, 8, 10)  
STDEV.S(A1:A5) returns the estimated standard deviation of the values in cells A1 through A5 as a sample  
STDEV.S(A1, A3, A5) returns the estimated standard deviation of the values in cells A1, A3, and A5 as a sample  
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
        "Test Score"
    ],
    [
        "Alice",
        85
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
        "Sample StDev",
        "=STDEV.S(B2:B5)"
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
        "Test Score"
    ],
    [
        "Alice",
        85
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
        "Sample StDev",
        "=STDEV.S(B2:B5)"
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
        "Test Score"
    ],
    [
        "Alice",
        85
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
        "Sample StDev",
        "=STDEV.S(B2:B5)"
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
        "Test Score"
    ],
    [
        "Alice",
        85
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
        "Sample StDev",
        "=STDEV.S(B2:B5)"
    ]
]
            }]
        });
    }
}
```

