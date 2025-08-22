title: FIXED function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FIXED function in Jspreadsheet

# FIXED function

`PRO`{.jtag}

The `FIXED` function in Jspreadsheet Formulas Pro is a tool that lets you adjust a number to a certain number of digits. Not only does it round your given number, but it also formats the result to display a fixed number of decimal places. This means you can control the precision of the numerical data you're working with, making your calculations and results more accurate and consistent. It's a handy function when dealing with financial data or any data that requires a specific degree of precision.

## Documentation

Rounds a number to the specified number of digits and formats the result with a fixed number of decimal places.

### Category

Text

### Syntax

FIXED(number, [decimals], [no_commas])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be rounded and formatted. |
| `[decimals]` | Optional. The number of digits to the right of the decimal point. Default is 2. |
| `[no_commas]` | Optional. A logical value that specifies whether to use a comma as the thousands separator. Default is FALSE (comma is displayed). |


### Behavior

The `FIXED` function in spreadsheets is used to convert a numeric value into text with a fixed number of decimals. It also allows users to specify whether commas should be used to separate thousands.

- For empty cells, the `FIXED` function will return a #VALUE! error.
- If the cell contains text, the `FIXED` function will return a #VALUE! error.
- If the cell contains a boolean value (TRUE or FALSE), the `FIXED` function will convert it into 1 or 0 respectively.
- If the cell contains an error (like #DIV/0!, #N/A, etc.), the `FIXED` function will return that same error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the input cell is empty or contains non-numeric data. |
| #NUM! | This error occurs if the number of decimals specified is less than 0 or greater than 9. |

### Best practices

> - Always double-check the data type of your input values to avoid the #VALUE! error. The `FIXED` function works only with numeric values.
> - Specify the number of decimals according to your requirements. If not specified, the `FIXED` function uses 2 as the default value. 
> - Be careful when deciding whether to use the comma to separate thousands. If TRUE is used, no thousands separator is included. If FALSE or omitted, the function includes a thousands separator. This can significantly impact the readability of your results. 
> - Always handle the possible errors that might occur when using the `FIXED` function, especially when dealing with dynamic or user-input data.

### Usage

A few examples using the FIXED function.

```
FIXED(1234.5678) returns 1234.57  
FIXED(9876.54321, 3) returns 9876.543  
FIXED(12345.6789, 1, TRUE) returns 12,345.7  
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
        "Raw Number",
        "2 Decimals",
        "No Commas"
    ],
    [
        1234.5678,
        "=FIXED(A2,2)",
        "=FIXED(A2,2,TRUE)"
    ],
    [
        9876.54321,
        "=FIXED(A3,2)",
        "=FIXED(A3,2,TRUE)"
    ],
    [
        12345.6789,
        "=FIXED(A4,2)",
        "=FIXED(A4,2,TRUE)"
    ],
    [
        567.891234,
        "=FIXED(A5,2)",
        "=FIXED(A5,2,TRUE)"
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
        "Raw Number",
        "2 Decimals",
        "No Commas"
    ],
    [
        1234.5678,
        "=FIXED(A2,2)",
        "=FIXED(A2,2,TRUE)"
    ],
    [
        9876.54321,
        "=FIXED(A3,2)",
        "=FIXED(A3,2,TRUE)"
    ],
    [
        12345.6789,
        "=FIXED(A4,2)",
        "=FIXED(A4,2,TRUE)"
    ],
    [
        567.891234,
        "=FIXED(A5,2)",
        "=FIXED(A5,2,TRUE)"
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
        "Raw Number",
        "2 Decimals",
        "No Commas"
    ],
    [
        1234.5678,
        "=FIXED(A2,2)",
        "=FIXED(A2,2,TRUE)"
    ],
    [
        9876.54321,
        "=FIXED(A3,2)",
        "=FIXED(A3,2,TRUE)"
    ],
    [
        12345.6789,
        "=FIXED(A4,2)",
        "=FIXED(A4,2,TRUE)"
    ],
    [
        567.891234,
        "=FIXED(A5,2)",
        "=FIXED(A5,2,TRUE)"
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
        "Raw Number",
        "2 Decimals",
        "No Commas"
    ],
    [
        1234.5678,
        "=FIXED(A2,2)",
        "=FIXED(A2,2,TRUE)"
    ],
    [
        9876.54321,
        "=FIXED(A3,2)",
        "=FIXED(A3,2,TRUE)"
    ],
    [
        12345.6789,
        "=FIXED(A4,2)",
        "=FIXED(A4,2,TRUE)"
    ],
    [
        567.891234,
        "=FIXED(A5,2)",
        "=FIXED(A5,2,TRUE)"
    ]
]
            }]
        });
    }
}
```

