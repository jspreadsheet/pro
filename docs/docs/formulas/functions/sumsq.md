title: SUMSQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMSQ function in Jspreadsheet

# SUMSQ function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SUMSQ` function in Jspreadsheet Formulas Pro is a handy tool that calculates the sum of the squares of a group of numbers or cells. For instance, if you have a list of numbers in your spreadsheet, this function will square each of these numbers individually and then add the results together. It's a useful function when you need to carry out statistical calculations or data analysis tasks.

## Documentation

Returns the sum of the squares of a range of numbers or cells.

### Category

Math and trigonometry

### Syntax

SUMSQ(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range to square and add. |
| `numberN` | Optional. Additional numbers or ranges to square and add. |


### Behavior

The `SUMSQ` function in spreadsheets is used to return the sum of the squares of a series of numbers and/or cells. Here is how it handles various types of inputs:

- **Numbers:** The `SUMSQ` function calculates the sum of the squares of the provided numbers.
- **Empty Cells:** If an empty cell is referenced in the function, it will be ignored and not included in the calculation.
- **Text:** If a cell containing text is referenced in the function, `SUMSQ` will return an error.
- **Booleans:** If a cell containing a boolean value (TRUE or FALSE) is referenced, `SUMSQ` will convert TRUE to 1 and FALSE to 0 before squaring and summing.
- **Errors:** If a cell containing an error is referenced in the function, `SUMSQ` will also return an error. 

### Common Errors

| Error | Description |
| ---   | ---         |
| #VALUE! | This error is displayed when one of the arguments or elements in the range contains non-numeric values |
| #REF! | This error is displayed if the specified cell reference is not valid. This usually happens when a cell is deleted or moved. |
| #NUM! | This error is displayed if the result of a calculation is too large or too small to be represented in the spreadsheet. |

### Best practices

> - Make sure all cells referenced in the `SUMSQ` function contain numeric values to avoid a `#VALUE!` error.
> - Be cautious when deleting or moving cells that are referenced in your `SUMSQ` function to avoid a `#REF!` error.
> - Try not to use extremely large numbers in your `SUMSQ` function to avoid a `#NUM!` error.
> - Use the `SUMSQ` function instead of manually squaring and summing numbers to save time and reduce the chance of calculation errors.

### Usage

A few examples using the SUMSQ function.

```
SUMSQ(3, 4) returns 25 (since 3^2 + 4^2 = 9 + 16 = 25)  
SUMSQ(A2:A6) returns the sum of the squares of the values in cells A2 through A6  
SUMSQ(B2:B6, D2:D6) returns the sum of the squares of the values in both ranges B2 through B6 and D2 through D6  
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
        "Test Scores",
        "Student A",
        "Student B"
    ],
    [
        "Math",
        85,
        92
    ],
    [
        "Science",
        78,
        88
    ],
    [
        "English",
        90,
        85
    ],
    [
        "Sum of Squares A",
        "=SUMSQ(B2:B4)",
        "=SUMSQ(C2:C4)"
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
        "Test Scores",
        "Student A",
        "Student B"
    ],
    [
        "Math",
        85,
        92
    ],
    [
        "Science",
        78,
        88
    ],
    [
        "English",
        90,
        85
    ],
    [
        "Sum of Squares A",
        "=SUMSQ(B2:B4)",
        "=SUMSQ(C2:C4)"
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
        "Test Scores",
        "Student A",
        "Student B"
    ],
    [
        "Math",
        85,
        92
    ],
    [
        "Science",
        78,
        88
    ],
    [
        "English",
        90,
        85
    ],
    [
        "Sum of Squares A",
        "=SUMSQ(B2:B4)",
        "=SUMSQ(C2:C4)"
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
        "Test Scores",
        "Student A",
        "Student B"
    ],
    [
        "Math",
        85,
        92
    ],
    [
        "Science",
        78,
        88
    ],
    [
        "English",
        90,
        85
    ],
    [
        "Sum of Squares A",
        "=SUMSQ(B2:B4)",
        "=SUMSQ(C2:C4)"
    ]
]
            }]
        });
    }
}
```

