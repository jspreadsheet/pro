title: PERCENTRANK.EXC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTRANK.EXC function in Jspreadsheet

# PERCENTRANK.EXC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERCENTRANK.EXC` function in Jspreadsheet Formulas Pro is a handy tool that gives you the percentage rank of a specific value within a set of data. This percentage is expressed as a number between 0 and 1, excluding these two values. In simpler terms, it tells you where a particular value sits in relation to all other values in your data set, as a percentage. This is especially useful when you want to understand the relative standing of a specific value within a larger group of data.

## Documentation

Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set.

### Category

Statistical

### Syntax

PERCENTRANK.EXC(array, x, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `x` | The value for which you want to know the rank. |
| `[significance]` | Optional. The number of significant digits for the returned percentage value. Defaults to 3. |


### Behavior

The `PERCENTRANK.EXC` function in spreadsheets calculates the rank of a specified value in a dataset as a percentage between 0 and 1, exclusive. Here are some expected behaviors:

1. **Empty Cells**: The function ignores empty cells in the dataset.

2. **Text and Booleans**: If the dataset contains text or boolean values, the function treats them as errors.

3. **Errors**: If the dataset contains cells with error values, the function will return an error.

4. **Single Value**: If the array or dataset contains only one number, the function will return an error.

5. **Non-existent Value**: If the `x` (value for which you want to find the rank) does not exist in the dataset, the function interpolates to calculate the percentage rank.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | Occurs when the `x` (value for which you want to find the rank) is smaller than the smallest value or larger than the largest value in the dataset. |
| #VALUE! | Occurs if given non-numeric value in the dataset or as the `x` value. |
| #NUM! | Occurs if the array or dataset contains less than two data points. |

### Best practices

> - Always ensure that the dataset provided to `PERCENTRANK.EXC` contains at least two numerical values. The function does not work with single values or non-numerical datasets.
> - Handle outliers carefully in your dataset as `PERCENTRANK.EXC` is sensitive to extreme values. These can significantly affect the percentage rank.
> - Be aware that `PERCENTRANK.EXC` excludes 0 and 1 in its output. If you want to include 0 and 1, consider using `PERCENTRANK.INC` instead.
> - Use `PERCENTRANK.EXC` to understand the relative standing of a particular value within a dataset. However, be mindful that it does not provide information about the distribution of data points within the dataset.

### Usage

A few examples using the PERCENTRANK.EXC function.

```
PERCENTRANK.EXC(A1:A10,B1) returns the rank of the value in B1 as a percentage of the values in A1 through A10  
PERCENTRANK.EXC(C1:C5,20,2) returns the rank of the value 20 in the range C1 through C5 as a percentage with 2 significant digits  
PERCENTRANK.EXC(D1:D100,50) returns the rank of the value 50 in the range D1 through D100 as a percentage  
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
        "Student Scores",
        "Target Score",
        "Percentile Rank"
    ],
    [
        78,
        85,
        "=PERCENTRANK.EXC(A2:A6,B2)"
    ],
    [
        92,
        78,
        "=PERCENTRANK.EXC(A2:A6,B3)"
    ],
    [
        65,
        92,
        "=PERCENTRANK.EXC(A2:A6,B4)"
    ],
    [
        88,
        65,
        "=PERCENTRANK.EXC(A2:A6,B5)"
    ],
    [
        73
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
        "Student Scores",
        "Target Score",
        "Percentile Rank"
    ],
    [
        78,
        85,
        "=PERCENTRANK.EXC(A2:A6,B2)"
    ],
    [
        92,
        78,
        "=PERCENTRANK.EXC(A2:A6,B3)"
    ],
    [
        65,
        92,
        "=PERCENTRANK.EXC(A2:A6,B4)"
    ],
    [
        88,
        65,
        "=PERCENTRANK.EXC(A2:A6,B5)"
    ],
    [
        73
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
        "Student Scores",
        "Target Score",
        "Percentile Rank"
    ],
    [
        78,
        85,
        "=PERCENTRANK.EXC(A2:A6,B2)"
    ],
    [
        92,
        78,
        "=PERCENTRANK.EXC(A2:A6,B3)"
    ],
    [
        65,
        92,
        "=PERCENTRANK.EXC(A2:A6,B4)"
    ],
    [
        88,
        65,
        "=PERCENTRANK.EXC(A2:A6,B5)"
    ],
    [
        73
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
        "Student Scores",
        "Target Score",
        "Percentile Rank"
    ],
    [
        78,
        85,
        "=PERCENTRANK.EXC(A2:A6,B2)"
    ],
    [
        92,
        78,
        "=PERCENTRANK.EXC(A2:A6,B3)"
    ],
    [
        65,
        92,
        "=PERCENTRANK.EXC(A2:A6,B4)"
    ],
    [
        88,
        65,
        "=PERCENTRANK.EXC(A2:A6,B5)"
    ],
    [
        73
    ]
]
            }]
        });
    }
}
```

