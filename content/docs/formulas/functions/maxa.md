title: MAXA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MAXA function in Jspreadsheet

# MAXA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MAXA` function in Jspreadsheet Formulas Pro is used to find the largest value within a specified range of cells or an array. This is particularly useful when dealing with a large set of numerical data and you want to quickly identify the highest number. The function scans through all the data in the selected range or array and returns the highest value it finds. Keep in mind, it also considers logical values and text representing numbers in its evaluation.

## Documentation

Returns the largest value in a range of cells or an array.

### Category

Statistical

### Syntax

MAXA(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number, cell reference, or range of numbers that you want to find the maximum value for. |
| `numberN` | Optional. Additional numbers, cell references, or ranges of numbers that you want to find the maximum value for. You can specify up to 255 arguments. |


### Behavior

The `MAXA` function in a spreadsheet is used to return the maximum numeric value in a dataset, where text representations of numbers are also counted. It behaves in the following ways:

- For numeric data, it returns the highest value.
- It interprets text representations of numbers as numbers. For example, it reads '10' as 10.
- It interprets boolean values `TRUE` and `FALSE` as 1 and 0 respectively.
- It ignores empty cells.
- For cells that contain non-numeric data, other than boolean values and text representations of numbers, `MAXA` treats them as zero.
- If the dataset contains only text and no numbers, boolean values or text representations of numbers, `MAXA` returns zero.
- If the dataset contains error values, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the dataset or range you've inputted in the `MAXA` function contains a cell with a text string, which is not a representation of a number, the function will return a `#VALUE!` error. |
| #NAME? | If the function name is misspelled or if the spreadsheet software does not support `MAXA` function, a `#NAME?` error is returned. |
| #REF! | If the cell references are not valid (for example, deleted cells), the function will return a `#REF!` error. |

### Best practices

> - Always ensure that your data range does not contain non-numeric text. Non-numeric text can result in a `#VALUE!` error.
> - Use the `MAXA` function when you want to consider logical values and text representations of numbers in your dataset. If you only have numeric data, use the `MAX` function instead.
> - Be careful while using `MAXA` in large datasets as it can slow down the calculation process due to its ability to interpret text representations of numbers.
> - Avoid using the `MAXA` function on a range that includes error values as it will return an error.

### Usage

A few examples using the MAXA function.

```
MAXA(A1:A10) returns the largest value in the range A1:A10  
MAXA(B1:C5) returns the largest value in the array B1:C5  
MAXA(10, 20, 30) returns the number 30, which is the largest value among the arguments.  
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
        "Quarter 1",
        "Quarter 2",
        "Quarter 3",
        "Highest Quarter"
    ],
    [
        25000,
        32000,
        28000,
        "=MAXA(A2:C2)"
    ],
    [
        18000,
        22000,
        35000,
        "=MAXA(A3:C3)"
    ],
    [
        30000,
        27000,
        31000,
        "=MAXA(A4:C4)"
    ],
    [
        "Overall Max",
        "",
        "",
        "=MAXA(A2:C4)"
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
        "Quarter 1",
        "Quarter 2",
        "Quarter 3",
        "Highest Quarter"
    ],
    [
        25000,
        32000,
        28000,
        "=MAXA(A2:C2)"
    ],
    [
        18000,
        22000,
        35000,
        "=MAXA(A3:C3)"
    ],
    [
        30000,
        27000,
        31000,
        "=MAXA(A4:C4)"
    ],
    [
        "Overall Max",
        "",
        "",
        "=MAXA(A2:C4)"
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
        "Quarter 1",
        "Quarter 2",
        "Quarter 3",
        "Highest Quarter"
    ],
    [
        25000,
        32000,
        28000,
        "=MAXA(A2:C2)"
    ],
    [
        18000,
        22000,
        35000,
        "=MAXA(A3:C3)"
    ],
    [
        30000,
        27000,
        31000,
        "=MAXA(A4:C4)"
    ],
    [
        "Overall Max",
        "",
        "",
        "=MAXA(A2:C4)"
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
        "Quarter 1",
        "Quarter 2",
        "Quarter 3",
        "Highest Quarter"
    ],
    [
        25000,
        32000,
        28000,
        "=MAXA(A2:C2)"
    ],
    [
        18000,
        22000,
        35000,
        "=MAXA(A3:C3)"
    ],
    [
        30000,
        27000,
        31000,
        "=MAXA(A4:C4)"
    ],
    [
        "Overall Max",
        "",
        "",
        "=MAXA(A2:C4)"
    ]
]
            }]
        });
    }
}
```

