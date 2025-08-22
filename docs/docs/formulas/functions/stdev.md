title: STDEV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STDEV function in Jspreadsheet

# STDEV function

`PRO`{.jtag}

The `STDEV` function in Jspreadsheet Formulas Pro is a tool that helps you estimate the standard deviation of a large group (population) using a smaller selection (sample) of numbers from that group. This is particularly useful when dealing with large datasets, as it provides a way to understand the variability or dispersion of the data without having to analyze every single number. By using `STDEV`, you can get a sense of how much your data deviates from the average.

## Documentation

Estimates the standard deviation of a population based on a sample of numbers.

### Category

Compatibility

### Syntax

STDEV(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number in the sample. |
| `numberN` | Optional. Additional numbers in the sample. |


### Behavior

The `STDEV` function in spreadsheets is used to calculate the standard deviation of a sample set of data. It gives a measure of how much the values in the data set are likely to differ from their mean. 

- Empty Cells: `STDEV` function ignores the empty cells in the range.
- Text: `STDEV` function ignores the cells containing text and considers them as zero.
- Booleans: If the data set contains Boolean values, `STDEV` function considers `TRUE` as 1 and `FALSE` as 0.
- Errors: If the data set contains cells with error values, the `STDEV` function returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs if the data set contains less than two data points. |
| #VALUE! | This error occurs if the data set contains non-numeric values that cannot be translated into numerical values. |
| #N/A  | This error occurs if the data set contains cells with `#N/A` error. |

### Best practices
> - Always check your data set for non-numeric values or errors before using `STDEV` function to avoid errors.
> - If your data set contains logical values that you want to include in the calculation, convert them to their numeric equivalents (`TRUE` to 1 and `FALSE` to 0) before applying `STDEV`.
> - If your data set includes the entire population, use `STDEVP` function instead of `STDEV` for a more accurate result.
> - Remember, `STDEV` function calculates the standard deviation of a sample. If you have a large data set, consider using a representative sample rather than the entire data set to improve performance.

### Usage

A few examples using the STDEV function.

```
STDEV(2, 4, 6, 8, 10)  
STDEV(A1:A5) returns the estimated standard deviation of the values in cells A1 through A5  
STDEV(A1, A3, A5) returns the estimated standard deviation of the values in cells A1, A3, and A5  
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
        "Sales Rep",
        "Monthly Sales",
        "Standard Deviation"
    ],
    [
        "Alice",
        15000,
        "=STDEV(B2:B6)"
    ],
    [
        "Bob",
        18500
    ],
    [
        "Carol",
        12300
    ],
    [
        "David",
        16800
    ],
    [
        "Eve",
        14200
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
        "Sales Rep",
        "Monthly Sales",
        "Standard Deviation"
    ],
    [
        "Alice",
        15000,
        "=STDEV(B2:B6)"
    ],
    [
        "Bob",
        18500
    ],
    [
        "Carol",
        12300
    ],
    [
        "David",
        16800
    ],
    [
        "Eve",
        14200
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
        "Sales Rep",
        "Monthly Sales",
        "Standard Deviation"
    ],
    [
        "Alice",
        15000,
        "=STDEV(B2:B6)"
    ],
    [
        "Bob",
        18500
    ],
    [
        "Carol",
        12300
    ],
    [
        "David",
        16800
    ],
    [
        "Eve",
        14200
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
        "Sales Rep",
        "Monthly Sales",
        "Standard Deviation"
    ],
    [
        "Alice",
        15000,
        "=STDEV(B2:B6)"
    ],
    [
        "Bob",
        18500
    ],
    [
        "Carol",
        12300
    ],
    [
        "David",
        16800
    ],
    [
        "Eve",
        14200
    ]
]
            }]
        });
    }
}
```

