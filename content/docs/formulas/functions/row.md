title: ROW function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROW function in Jspreadsheet

# ROW function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ROW` function in Jspreadsheet Formulas Pro is a tool that provides you with the row number of a specific reference. When you input a cell reference into this function, it will output the number of the row in which that cell is located. For example, if you use `ROW(B4)`, the function will return 4, as the cell B4 is in the fourth row. It's a handy way to identify the location of data in your spreadsheet.

## Documentation

Returns the row number of a reference.

### Category

Lookup and reference

### Syntax

ROW(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | The cell or range of cells for which you want to return the row number. |


### Behavior

The `ROW` function in spreadsheets returns the row number of a cell reference. If no cell reference is provided, it returns the row number of the cell in which the function is written. Here is how it behaves with different inputs.

1. **Empty Cells**: If an empty cell reference is provided, the `ROW` function still returns the row number of that cell.
2. **Text**: If a cell containing text is referenced, `ROW` returns the row number of that cell.
3. **Booleans**: If a cell containing a Boolean value (TRUE or FALSE) is referenced, `ROW` returns the row number of that cell.
4. **Errors**: If a cell containing an error value is referenced, `ROW` still returns the row number of that cell.
5. **Range**: If a range of cells is provided, the `ROW` function will return the row number of the first cell in the range.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the cell reference provided is invalid or not correctly formatted. |
| #REF! | This error occurs if the cell reference provided points to a cell that does not exist, such as a row or column number exceeding the limit of the spreadsheet. |

### Best Practices

> 1. **Use `ROW` to create sequential numbers**: If you need to create a column of sequential numbers, you can use `ROW` function in the first cell, and then copy it down to other cells.
> 2. **Avoid hardcoding cell references**: When using the `ROW` function, try to avoid hardcoding cell references. This will make your spreadsheet more flexible and less prone to errors.
> 3. **Combine with other functions for more complex use cases**: The `ROW` function can be combined with other functions to perform more complex operations, such as identifying the row number of a specific value in a list.

### Usage

A few examples using the ROW function.

```
ROW(A1) returns 1  
ROW(B5:C10) returns 5  
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
        "Product",
        "Price",
        "Row Number"
    ],
    [
        "Laptop",
        999,
        "=ROW(A2)"
    ],
    [
        "Mouse",
        25,
        "=ROW(A3)"
    ],
    [
        "Keyboard",
        75,
        "=ROW(A4)"
    ],
    [
        "Monitor",
        299,
        "=ROW(A5)"
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
        "Product",
        "Price",
        "Row Number"
    ],
    [
        "Laptop",
        999,
        "=ROW(A2)"
    ],
    [
        "Mouse",
        25,
        "=ROW(A3)"
    ],
    [
        "Keyboard",
        75,
        "=ROW(A4)"
    ],
    [
        "Monitor",
        299,
        "=ROW(A5)"
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
        "Product",
        "Price",
        "Row Number"
    ],
    [
        "Laptop",
        999,
        "=ROW(A2)"
    ],
    [
        "Mouse",
        25,
        "=ROW(A3)"
    ],
    [
        "Keyboard",
        75,
        "=ROW(A4)"
    ],
    [
        "Monitor",
        299,
        "=ROW(A5)"
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
        "Product",
        "Price",
        "Row Number"
    ],
    [
        "Laptop",
        999,
        "=ROW(A2)"
    ],
    [
        "Mouse",
        25,
        "=ROW(A3)"
    ],
    [
        "Keyboard",
        75,
        "=ROW(A4)"
    ],
    [
        "Monitor",
        299,
        "=ROW(A5)"
    ]
]
            }]
        });
    }
}
```

