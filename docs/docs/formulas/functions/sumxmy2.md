title: SUMXMY2 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMXMY2 function in Jspreadsheet

# SUMXMY2 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SUMXMY2` function in Jspreadsheet Formulas Pro is a tool that calculates the sum of the squares of differences between matching values in two different lists or ranges. This means that it subtracts each pair of corresponding numbers in your two lists, squares the result of each subtraction, and then adds all of those squared results together. This function can be very useful in statistical calculations or when comparing two sets of data for variability.

## Documentation

Returns the sum of the squares of differences of corresponding values in two arrays or ranges.

### Category

Math and trigonometry

### Syntax

SUMXMY2(array_x, array_y)

| Parameter | Description |
| ----------- | ------------- |
| `array_x` | An array or range that contains the first set of values. |
| `array_y` | An array or range that contains the second set of values. |


### Behavior

The 'SUMXMY2' function in spreadsheet calculates the sum of the squares of differences between corresponding values in two arrays. The function's behavior with different data types is as follows:

- Empty cells: If one of the cells in the arrays is empty, the function treats it as a zero.
- Text: If a cell in an array contains text, the function interprets it as zero.
- Booleans: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE being equivalent to 0.
- Errors: If any cell in the arrays contains an error, the function will return that error. Also, if the two arrays don't have the same length, the function will return a #VALUE! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the two arrays provided to the function have different lengths. |
| #N/A | This error is returned when a cell in one or both of the arrays contains the #N/A error. |
| #REF! | This error is returned when a cell in one or both of the arrays contains the #REF! error, indicating an invalid cell reference. |
| #DIV/0! | This error is returned when a cell in one or both of the arrays contains the #DIV/0! error, indicating division by zero. |

### Best practices

> - Ensure that both arrays have the same number of elements to avoid a #VALUE! error.
> - Avoid using text in the arrays as the function will interpret it as zero, which may not be your intended outcome.
> - Be mindful of how the function handles booleans: TRUE is treated as 1 and FALSE as 0.
> - Handle errors in your data before using the 'SUMXMY2' function to avoid propagating these errors.

### Usage

A few examples using the SUMXMY2 function.

```
SUMXMY2([1, 2, 3], [4, 5, 6]) returns 27 (since the sum of (1-4)^2, (2-5)^2, and (3-6)^2 is 9 + 9 + 9 = 27)  
SUMXMY2(A2:A6, B2:B6) returns the sum of the squares of the differences of each pair of values in cells A2 through A6 and B2 through B6  
SUMXMY2(C2:C6, D2:D6) returns the sum of the squares of the differences of each pair of values in cells C2 through C6 and D2 through D6  
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
        "Product A Sales",
        "Product B Sales",
        "Sum of Squared Differences"
    ],
    [
        120,
        150,
        "=SUMXMY2(A2:A5,B2:B5)"
    ],
    [
        95,
        110,
        ""
    ],
    [
        180,
        165,
        ""
    ],
    [
        200,
        175,
        ""
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
        "Product A Sales",
        "Product B Sales",
        "Sum of Squared Differences"
    ],
    [
        120,
        150,
        "=SUMXMY2(A2:A5,B2:B5)"
    ],
    [
        95,
        110,
        ""
    ],
    [
        180,
        165,
        ""
    ],
    [
        200,
        175,
        ""
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
        "Product A Sales",
        "Product B Sales",
        "Sum of Squared Differences"
    ],
    [
        120,
        150,
        "=SUMXMY2(A2:A5,B2:B5)"
    ],
    [
        95,
        110,
        ""
    ],
    [
        180,
        165,
        ""
    ],
    [
        200,
        175,
        ""
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
        "Product A Sales",
        "Product B Sales",
        "Sum of Squared Differences"
    ],
    [
        120,
        150,
        "=SUMXMY2(A2:A5,B2:B5)"
    ],
    [
        95,
        110,
        ""
    ],
    [
        180,
        165,
        ""
    ],
    [
        200,
        175,
        ""
    ]
]
            }]
        });
    }
}
```

