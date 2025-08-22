title: PEARSON function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PEARSON function in Jspreadsheet

# PEARSON function

`PRO`{.jtag}

The `PEARSON` function in Jspreadsheet Formulas Pro is a tool that calculates the relationship between two groups of data. It gives you the Pearson product-moment correlation coefficient, a value that can range between -1 and 1. This number will tell you how closely the two sets of data are related. If the value is close to 1, the data sets have a strong positive correlation; if it's close to -1, they have a strong negative correlation; if it's close to 0, there's no correlation.

## Documentation

Returns the Pearson product moment correlation coefficient between two data sets.

### Category

Statistical

### Syntax

PEARSON(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range of values. |
| `array2` | The second array or range of values. |


### Behavior

The `PEARSON` function in spreadsheets calculates the Pearson product-moment correlation coefficient for two sets of values. This coefficient indicates the degree of linear relationship between the two sets of data.

1. **Empty Cells**: The `PEARSON` function ignores empty cells.
2. **Text**: The `PEARSON` function cannot handle text. If any cell in the range contains text, the function will return an error.
3. **Booleans**: Boolean values are treated as integers. `TRUE` is treated as 1 and `FALSE` is treated as 0.
4. **Errors**: If any cell in the range contains an error, the `PEARSON` function will return an error.
5. **Non-Numeric Values**: If the arrays contain non-numeric values, the function will return an error.
6. **Array sizes**: The two arrays must be of the same size, else the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs if the two arrays provided are of different lengths. |
| #DIV/0! | Occurs if there is only one pair of data point, as the standard deviation of the data points cannot be calculated. |
| #VALUE! | Occurs if the provided arguments are non-numeric or if any of the cells in the range contain text. |
| #REF! | Occurs if the cell reference is not valid. |

### Best practices

> - Always ensure that the two arrays provided to the `PEARSON` function are of the same size.
> - Be sure to handle non-numeric values before using the `PEARSON` function to avoid errors.
> - Use the `PEARSON` function to compare the linear relationship between two sets of data, not to establish a cause-effect relationship.
> - Verify that your data does not contain any error values to prevent the `PEARSON` function from returning an error.

### Usage

A few examples using the PEARSON function.

```
PEARSON(A1:A10,B1:B10) returns the correlation coefficient between the values in cells A1 through A10 and B1 through B10  
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
        90
    ],
    [
        10,
        95
    ],
    [
        "Correlation:",
        "=PEARSON(A2:A6,B2:B6)"
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
        90
    ],
    [
        10,
        95
    ],
    [
        "Correlation:",
        "=PEARSON(A2:A6,B2:B6)"
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
        90
    ],
    [
        10,
        95
    ],
    [
        "Correlation:",
        "=PEARSON(A2:A6,B2:B6)"
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
        90
    ],
    [
        10,
        95
    ],
    [
        "Correlation:",
        "=PEARSON(A2:A6,B2:B6)"
    ]
]
            }]
        });
    }
}
```

