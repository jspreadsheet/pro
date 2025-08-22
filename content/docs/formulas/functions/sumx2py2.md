title: SUMX2PY2 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMX2PY2 function in Jspreadsheet

# SUMX2PY2 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `SUMX2PY2` function is a convenient tool that calculates the combined total of the squares of numbers in two distinct groups or ranges. This function works by first squaring each individual number in both ranges and then adding up those squared results. You would use it when you need to perform this specific mathematical operation on two datasets or ranges in your Jspreadsheet project. It's a quick and efficient way to perform this operation without manually squaring and summing each value.

## Documentation

Returns the sum of the sum of squares of corresponding values in two arrays or ranges.

### Category

Math and trigonometry

### Syntax

SUMX2PY2(array_x, array_y)

| Parameter | Description |
| ----------- | ------------- |
| `array` | An array or range that contains the first set of values. |
| `array` | An array or range that contains the second set of values. |


### Behavior

The `SUMX2PY2` function in spreadsheets calculates the sum of the squares of corresponding values in two arrays. The behavior of the function with different types of data is as follows:

- **Empty cells**: If any cell in either array is empty, the function treats it as 0.
- **Text**: If any cell in either array contains text, the function returns an error.
- **Booleans**: If any cell in either array contains a boolean value (`TRUE` or `FALSE`), the function treats `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If any cell in either array contains an error, the function itself will return an error.
- **Array length**: The arrays need to be of the same length. If they are not, the function will return an error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error is returned if the two array arguments provided to the function do not have the same length. |
| #N/A | This error is returned if any cell in either array is not available. |
| #NUM! | This error is returned if any cell in either array contains non-numeric data. |

### Best practices

> - Always ensure that the arrays you input into the `SUMX2PY2` function have the same length. If they don't, the function will return an error.
> - Avoid including non-numeric values in the arrays you input into the function. If a cell contains text or an error, the function will return an error.
> - Be mindful of boolean values when using this function. Remember that the function treats `TRUE` as 1 and `FALSE` as 0.
> - If you're dealing with large arrays, consider using the function with range references rather than typing out the array elements individually. This will make your formula easier to read and manage.

### Usage

A few examples using the SUMX2PY2 function.

```
SUMX2PY2([1, 2, 3], [4, 5, 6]) returns 91 (since the sum of 1^2 + 4^2, 2^2 + 5^2, and 3^2 + 6^2 is 17 + 29 + 45 = 91)  
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
        "Sum of Squares"
    ],
    [
        2,
        3,
        "=SUMX2PY2(A2:A4,B2:B4)"
    ],
    [
        4,
        1
    ],
    [
        6,
        5
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
        "Sum of Squares"
    ],
    [
        2,
        3,
        "=SUMX2PY2(A2:A4,B2:B4)"
    ],
    [
        4,
        1
    ],
    [
        6,
        5
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
        "Sum of Squares"
    ],
    [
        2,
        3,
        "=SUMX2PY2(A2:A4,B2:B4)"
    ],
    [
        4,
        1
    ],
    [
        6,
        5
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
        "Sum of Squares"
    ],
    [
        2,
        3,
        "=SUMX2PY2(A2:A4,B2:B4)"
    ],
    [
        4,
        1
    ],
    [
        6,
        5
    ]
]
            }]
        });
    }
}
```

