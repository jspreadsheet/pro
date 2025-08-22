title: SINGLE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SINGLE function in Jspreadsheet

# SINGLE function

`PRO`{.jtag}

The `SINGLE` function in Jspreadsheet Formulas Pro is used to retrieve a value from a range that shares the same column or row with a specified reference cell. Essentially, it lets you pick out a single value from a larger grid or array. This could be handy when you're dealing with a larger dataset but only need specific information from it. It's a simple and efficient way to extract and work with individual data points in Jspreadsheet.

## Documentation

The SINGLE function in Excel returns the value from a range that shares the same column or row as the reference cell.

### Category

Lookup & Reference

### Syntax

SINGLE(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | The reference cell whose row or column you want to match to retrieve the corresponding value from the range. |


### Behavior

The `SINGLE` function in a spreadsheet is used to return the value of a cell when the cell reference is a range of cells. Here's how it handles various inputs:

- **Empty Cells**: If the cell range includes empty cells, the `SINGLE` function will return the value of the first non-empty cell in the range.

- **Text**: If the cell range includes cells with text, the `SINGLE` function will return the value of the first non-text cell in the range, unless the first cell in the range contains text, in which case it will return the text.

- **Booleans**: If the cell range includes cells with boolean values, the `SINGLE` function will return the value of the first non-boolean cell in the range, unless the first cell in the range contains a boolean value, in which case it will return the boolean.

- **Errors**: If the cell range includes cells with errors, the `SINGLE` function will return the error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | Occurs when the formula contains the wrong type of argument. |
| #REF! | Occurs when the cell reference is not valid. |
| #N/A | Occurs when the value is not available in the range. |

### Best practices

> - Always make sure that the cell range you're referring to with `SINGLE` includes the type of value you're expecting to return. For example, if you're expecting a number, make sure the first cell in the range contains a number.
> - Use the `SINGLE` function when you're working with a range that is expected to contain only a single value.
> - Handle potential errors with appropriate error handling functions to ensure your formula doesn't break your spreadsheet.
> - Validate the cell range before using it in the `SINGLE` function to avoid reference errors.

### Usage

A few examples using the SINGLE function.

```
SINGLE(A1:A10) returns the value from a cell within the range A1:A10 that shares the same row as the cell that the formula is executed on.  
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
        "Quantity"
    ],
    [
        "Apples",
        2.5,
        "=SINGLE(B1:B4)"
    ],
    [
        "Bananas",
        1.75,
        8
    ],
    [
        "Oranges",
        3.0,
        12
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
        "Quantity"
    ],
    [
        "Apples",
        2.5,
        "=SINGLE(B1:B4)"
    ],
    [
        "Bananas",
        1.75,
        8
    ],
    [
        "Oranges",
        3.0,
        12
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
        "Quantity"
    ],
    [
        "Apples",
        2.5,
        "=SINGLE(B1:B4)"
    ],
    [
        "Bananas",
        1.75,
        8
    ],
    [
        "Oranges",
        3.0,
        12
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
        "Quantity"
    ],
    [
        "Apples",
        2.5,
        "=SINGLE(B1:B4)"
    ],
    [
        "Bananas",
        1.75,
        8
    ],
    [
        "Oranges",
        3.0,
        12
    ]
]
            }]
        });
    }
}
```

