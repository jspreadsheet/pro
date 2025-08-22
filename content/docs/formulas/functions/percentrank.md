title: PERCENTRANK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTRANK function in Jspreadsheet

# PERCENTRANK function



The `PERCENTRANK` function in Jspreadsheet Formulas Pro is used to determine the rank of a certain value within a data set, presenting it as a percentage between 0 and 1. Essentially, it shows where the value falls within the data set on a proportional scale. However, if the data set you're working with has a small sample size, it's recommended to use the `PERCENTRANK.INC` function instead.

## Documentation

Returns the rank of a value in a data set as a percentage (0..1, inclusive) of the data set. If the data set has a small sample size, use PERCENTRANK.INC instead.

### Category

Compatibility

### Syntax

PERCENTRANK(array, x, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `x` | The value for which you want to know the rank. |
| `[significance]` | Optional. The number of significant digits for the returned percentage value. Defaults to 3. |


### Behavior

The `PERCENTRANK` function in a spreadsheet calculates the relative standing of a specified value within a set of values. If the value is not in the set, the function interpolates to find the percentage rank. 

- Empty cells: If an empty cell is encountered in the data array, it is simply ignored and not included in the calculation.
- Text: If a cell containing text data is encountered in the data array, the `PERCENTRANK` function will return an error.
- Booleans: Boolean values are treated as 1 (for TRUE) and 0 (for FALSE).
- Errors: If an error is found in the cell range, the `PERCENTRANK` function will return an error.
- Non-Numeric Values: Non-numeric values in the array or as the x argument cause errors.
- Array Size: The function requires the array to have at least two data points.
- Significance Parameter: The optional significance argument must be between 1 and 15, inclusive. If not provided, it defaults to 3.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs when the given array is empty, or the x value is non-numeric. |
| #NUM! | This error occurs when the x value is not found in the array, or if the significance parameter is not between 1 and 15. |
| #DIV/0! | This error occurs when all the numbers in the array are the same, making it impossible to calculate a percentile rank. |

### Best practices

> - Always ensure that the data set or array used with `PERCENTRANK` contains at least two data points.
> - Avoid non-numeric values in your array or as the x argument to prevent errors.
> - Use the optional significance parameter to specify the number of significant digits in the returned percentile rank. If not specified, the function will use 3 as a default.
> - Be aware that `PERCENTRANK` function may interpolate the value if it is not found within the data set.

### Usage

A few examples using the PERCENTRANK function.

```
PERCENTRANK(A1:A10,B1) returns the rank of the value in B1 as a percentage of the values in A1 through A10  
PERCENTRANK(C1:C5,20,2) returns the rank of the value 20 in the range C1 through C5 as a percentage with 2 significant digits  
PERCENTRANK(D1:D100,50) returns the rank of the value 50 in the range D1 through D100 as a percentage  
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
        "Percentile Rank"
    ],
    [
        "Alice",
        85,
        "=PERCENTRANK(B:B,B2)"
    ],
    [
        "Bob",
        92,
        "=PERCENTRANK(B:B,B3)"
    ],
    [
        "Carol",
        78,
        "=PERCENTRANK(B:B,B4)"
    ],
    [
        "David",
        88,
        "=PERCENTRANK(B:B,B5)"
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
        "Percentile Rank"
    ],
    [
        "Alice",
        85,
        "=PERCENTRANK(B:B,B2)"
    ],
    [
        "Bob",
        92,
        "=PERCENTRANK(B:B,B3)"
    ],
    [
        "Carol",
        78,
        "=PERCENTRANK(B:B,B4)"
    ],
    [
        "David",
        88,
        "=PERCENTRANK(B:B,B5)"
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
        "Percentile Rank"
    ],
    [
        "Alice",
        85,
        "=PERCENTRANK(B:B,B2)"
    ],
    [
        "Bob",
        92,
        "=PERCENTRANK(B:B,B3)"
    ],
    [
        "Carol",
        78,
        "=PERCENTRANK(B:B,B4)"
    ],
    [
        "David",
        88,
        "=PERCENTRANK(B:B,B5)"
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
        "Percentile Rank"
    ],
    [
        "Alice",
        85,
        "=PERCENTRANK(B:B,B2)"
    ],
    [
        "Bob",
        92,
        "=PERCENTRANK(B:B,B3)"
    ],
    [
        "Carol",
        78,
        "=PERCENTRANK(B:B,B4)"
    ],
    [
        "David",
        88,
        "=PERCENTRANK(B:B,B5)"
    ]
]
            }]
        });
    }
}
```

