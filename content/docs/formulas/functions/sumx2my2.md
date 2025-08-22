title: SUMX2MY2 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMX2MY2 function in Jspreadsheet

# SUMX2MY2 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `SUMX2MY2` function is utilized to calculate the sum of the differences of squares between corresponding values in two different arrays or ranges. Essentially, it squares each value in the first range, squares each value in the second range, subtracts each corresponding pair, and then adds all those differences together. This particular function is useful when you need to perform in-depth statistical analysis or complex mathematical calculations.

## Documentation

Returns the sum of the difference of squares of corresponding values in two arrays or ranges.

### Category

Math and trigonometry

### Syntax

SUMX2MY2(array_x, array_y)

| Parameter | Description |
| ----------- | ------------- |
| `array_x` | An array or range that contains the first set of values. |
| `array_y` | An array or range that contains the second set of values. |


### Behavior

The 'SUMX2MY2' function in spreadsheets calculates the sum of the differences of squares of corresponding values in two arrays. The function will only process numerical values. Here's how it handles different types of input:

- **Empty cells**: These are ignored by the 'SUMX2MY2' function. It will only consider cells with numerical values.
- **Text**: If the function encounters a cell containing text, it will treat it as a zero.
- **Booleans**: Boolean values are also processed by 'SUMX2MY2'. True is considered as 1 and False as 0.
- **Errors**: If any cell in the array contains an error, the 'SUMX2MY2' function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the two arrays provided to 'SUMX2MY2' function have a different number of data points. Both arrays must have the same number of elements. |
| #N/A | This error is returned if the 'SUMX2MY2' function does not find any row or column in the specified range. |

### Best practices
> - Always ensure that the two arrays provided to the 'SUMX2MY2' function have the same number of elements. Mismatch in the number of elements can lead to the '#VALUE!' error.
> - Clean your data before using it in the 'SUMX2MY2' function. Remove any non-numeric values to get accurate results.
> - Use absolute cell references if you plan to copy your 'SUMX2MY2' formula to other cells.
> - Handle errors appropriately. You can use the 'IFERROR' function to return a custom message or perform a different calculation if 'SUMX2MY2' returns an error.

### Usage

A few examples using the SUMX2MY2 function.

```
SUMX2MY2(A2:A6, B2:B6) returns the sum of the difference of squares of each pair of values in cells A2 through A6 and B2 through B6  
SUMX2MY2(C2:C6, D2:D6) returns the sum of the difference of squares of each pair of values in cells C2 through C6 and D2 through D6  
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
        "X Values",
        "Y Values",
        "SUMX2MY2"
    ],
    [
        3,
        2,
        "=SUMX2MY2(A2:A5,B2:B5)"
    ],
    [
        5,
        4,
        ""
    ],
    [
        7,
        6,
        ""
    ],
    [
        9,
        8,
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
        "X Values",
        "Y Values",
        "SUMX2MY2"
    ],
    [
        3,
        2,
        "=SUMX2MY2(A2:A5,B2:B5)"
    ],
    [
        5,
        4,
        ""
    ],
    [
        7,
        6,
        ""
    ],
    [
        9,
        8,
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
        "X Values",
        "Y Values",
        "SUMX2MY2"
    ],
    [
        3,
        2,
        "=SUMX2MY2(A2:A5,B2:B5)"
    ],
    [
        5,
        4,
        ""
    ],
    [
        7,
        6,
        ""
    ],
    [
        9,
        8,
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
        "X Values",
        "Y Values",
        "SUMX2MY2"
    ],
    [
        3,
        2,
        "=SUMX2MY2(A2:A5,B2:B5)"
    ],
    [
        5,
        4,
        ""
    ],
    [
        7,
        6,
        ""
    ],
    [
        9,
        8,
        ""
    ]
]
            }]
        });
    }
}
```

