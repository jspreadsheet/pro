title: TRIMMEAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TRIMMEAN function in Jspreadsheet

# TRIMMEAN function

`PRO`{.jtag}

The `TRIMMEAN` function in Jspreadsheet Formulas Pro is used to calculate the average of a selected data set, excluding a specified percentage of data from the high and low ends. You need to input the range of data and the percentage to trim off from both ends. This function is useful when you want to avoid extreme values or outliers skewing the average. It helps to provide a more accurate representation of your data's central tendency.

## Documentation

Returns the mean of the interior of a data set, based on a percentage you specify.

### Category

Statistical

### Syntax

TRIMMEAN(array, percent)

| Parameter | Description |
| ----------- | ------------- |
| `array` | An array or range of numeric data. |
| `percent` | The fractional number of data points to exclude from the calculation. Must be between 0 and 1. |


### Behavior

The `TRIMMEAN` function in spreadsheets is used to calculate the mean of a dataset excluding a certain percentage of data from the high and low ends. It can be helpful to limit the effect of outlier values. Here's how it behaves in different scenarios:

- The function receives two arguments: the array or range of cells to calculate the mean from, and the percentage of data to trim from the dataset (a decimal value between 0 and 1).
- If the second argument is missing, the function will return an error.
- If the second argument is not between 0 and 1, the function will return an error.
- The function ignores text, boolean values, and empty cells in the array or range of cells.
- If there are errors in the array or range of cells, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is returned when the second argument is less than 0 or greater than 1. |
| #VALUE! | This error is returned when the second argument is missing or not a numeric value. |
| #N/A | This error is returned when the array or range of cells is empty. |
| #DIV/0! | This error is returned when all the values in the array or range of cells are text, boolean values, or empty cells. |

### Best practices

> - Always ensure that the second argument is a decimal value between 0 and 1 to avoid the #NUM! error.
> - Avoid including text, boolean values, or empty cells in the array or range of cells to calculate the mean from.
> - Use the `TRIMMEAN` function when you have a dataset with outliers that you want to exclude from the mean calculation.
> - Remember that the `TRIMMEAN` function trims the same percentage of data from both the high end and the low end of the dataset.

### Usage

A few examples using the TRIMMEAN function.

```
TRIMMEAN([10, 20, 30, 40, 50], 0.2) returns 35 (based on excluding the lowest and highest 20% of values)  
TRIMMEAN(A1:A100, 0.1) returns the mean of the middle 80% of values in cells A1 through A100  
TRIMMEAN([1, 2, 3, 4, 5, 6], 0.5) returns 3.5  
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
        "Trimmed Mean (20%)"
    ],
    [
        "John",
        45000,
        "=TRIMMEAN(B2:B8,0.2)"
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        29000
    ],
    [
        "Amy",
        55000
    ],
    [
        "David",
        48000
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
        "Trimmed Mean (20%)"
    ],
    [
        "John",
        45000,
        "=TRIMMEAN(B2:B8,0.2)"
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        29000
    ],
    [
        "Amy",
        55000
    ],
    [
        "David",
        48000
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
        "Trimmed Mean (20%)"
    ],
    [
        "John",
        45000,
        "=TRIMMEAN(B2:B8,0.2)"
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        29000
    ],
    [
        "Amy",
        55000
    ],
    [
        "David",
        48000
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
        "Trimmed Mean (20%)"
    ],
    [
        "John",
        45000,
        "=TRIMMEAN(B2:B8,0.2)"
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        29000
    ],
    [
        "Amy",
        55000
    ],
    [
        "David",
        48000
    ]
]
            }]
        });
    }
}
```

