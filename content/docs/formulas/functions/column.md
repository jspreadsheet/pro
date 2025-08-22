title: COLUMN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COLUMN function in Jspreadsheet

# COLUMN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COLUMN` function in Jspreadsheet Formulas Pro is a handy tool that gives you the column number of a specific reference. For instance, if you want to know the column number of a particular cell, you would use this function. You simply input the cell reference into the function, and it will return the corresponding column number. This is particularly useful when managing large datasets and you need to quickly identify the location of specific information.

## Documentation

Returns the column number of a reference.

### Category

Lookup and reference

### Syntax

COLUMN([reference])

| Parameter | Description |
| ----------- | ------------- |
| `[reference]` | Optional. The cell or range of cells for which you want to return the column number. If omitted, returns the column number of the cell in which the formula appears. |


### Behavior

The `COLUMN` function in a spreadsheet returns the column number of a specified cell. If no cell is specified, the function returns the column number of the cell in which the formula is placed.

- Empty cells: If the reference is an empty cell, `COLUMN` will still return the column number of that cell.
- Text: `COLUMN` does not directly interact with text. If the referenced cell contains text, `COLUMN` will still return the column number of that cell.
- Booleans: `COLUMN` does not directly interact with boolean values. If the referenced cell contains a boolean value, `COLUMN` will still return the column number of that cell.
- Errors: If the cell reference is invalid or results in an error, `COLUMN` will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #REF! | This error occurs when the referenced cell is invalid. It means that the cell does not exist, such as referencing a column that goes beyond the limit of the spreadsheet software. |
| #VALUE! | This error occurs when the function `COLUMN` is used with an invalid argument. For example, using text instead of a cell reference. |

### Best practices

> - Always ensure that the cell reference used with `COLUMN` function is valid to avoid errors.
> - Use `COLUMN` function in combination with other functions to create dynamic formulas that adjust based on the column number.
> - Be aware that `COLUMN` function provides the column number relative to the range. If you provide a range starting from B1, the column number for B1 will be 1, not 2.
> - Avoid using hard-coded column numbers in your formulas, instead use `COLUMN` function to make your formulas more flexible and easier to maintain.

### Usage

A few examples using the COLUMN function.

```
COLUMN(A1) returns 1  
COLUMN(B4:C7) returns [[2, 3]]  
COLUMN() returns the column number of the cell containing this formula  
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
        "Stock"
    ],
    [
        "Widget A",
        25.99,
        100
    ],
    [
        "Widget B",
        34.5,
        75
    ],
    [
        "=COLUMN(A1)",
        "=COLUMN(B2)",
        "=COLUMN(C1:C3)"
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
        "Stock"
    ],
    [
        "Widget A",
        25.99,
        100
    ],
    [
        "Widget B",
        34.5,
        75
    ],
    [
        "=COLUMN(A1)",
        "=COLUMN(B2)",
        "=COLUMN(C1:C3)"
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
        "Stock"
    ],
    [
        "Widget A",
        25.99,
        100
    ],
    [
        "Widget B",
        34.5,
        75
    ],
    [
        "=COLUMN(A1)",
        "=COLUMN(B2)",
        "=COLUMN(C1:C3)"
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
        "Stock"
    ],
    [
        "Widget A",
        25.99,
        100
    ],
    [
        "Widget B",
        34.5,
        75
    ],
    [
        "=COLUMN(A1)",
        "=COLUMN(B2)",
        "=COLUMN(C1:C3)"
    ]
]
            }]
        });
    }
}
```

