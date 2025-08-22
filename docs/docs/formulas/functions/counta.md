title: COUNTA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNTA function in Jspreadsheet

# COUNTA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COUNTA` function in Jspreadsheet Formulas Pro is a handy tool that allows you to tally the total number of cells in a specified range that are not empty. In other words, it helps you identify cells that contain any type of information, be it text, numbers, or other data types. This can be particularly useful when you need to quickly determine how many cells in a range or column have been filled out. It's a simple way to keep track of entered data without having to manually count each cell.

## Documentation

Counts the number of cells in a range that are not empty.

### Category

Statistical

### Syntax

COUNTA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The first value or range of cells to count. |
| `valueN` | Optional. Additional values or ranges of cells to count. You can enter up to 255 arguments. |


### Behavior

The `COUNTA` function in spreadsheets is used to count the number of cells that are not empty in a range. This includes cells containing numbers, text, logical values, errors, and other types of data. Here are some specific behaviors:

- Empty cells: `COUNTA` does not consider empty cells in its count.
- Text: `COUNTA` includes cells containing text in its count.
- Numbers: `COUNTA` includes cells containing numbers in its count.
- Booleans: `COUNTA` includes cells containing Boolean values (TRUE or FALSE) in its count.
- Errors: `COUNTA` includes cells containing error values (like #DIV/0!, #N/A, etc.) in its count.

### Common Errors

| Error  | Description |
|---|---|
| #VALUE!  | Occurs if the function is supplied with an argument that is not a valid range.  |
| #REF!  | Occurs if the specified range is invalid. For example, if a cell reference within the range was deleted.  |
| #NAME?  | Occurs if the function is misspelled or not recognized by the spreadsheet software.  |

### Best practices

> - Use `COUNTA` when you need to count cells containing any type of information, including error values and logical values.
> - Be aware that `COUNTA` will count cells with zero (0) or with spaces (" ") as they are not technically empty.
> - If you want to count only cells with numbers and ignore text, errors, and other non-numeric data, consider using `COUNT` instead of `COUNTA`.
> - Always check your range selection before applying the `COUNTA` function to avoid inaccurate results.

### Usage

A few examples using the COUNTA function.

```
COUNTA(A1:A10) returns the number of non-empty cells in A1 through A10  
COUNTA(A1, B1, C1, D1) returns the number of non-empty cells in cells A1, B1, C1, and D1  
COUNTA(1, "text", TRUE, "", 5) returns 4  
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
        "Status",
        "Count"
    ],
    [
        "Laptop",
        "In Stock",
        "=COUNTA(A2:A6)"
    ],
    [
        "Mouse",
        "",
        "=COUNTA(B2:B6)"
    ],
    [
        "Keyboard",
        "Out of Stock",
        ""
    ],
    [
        "Monitor",
        "In Stock",
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
        "Product",
        "Status",
        "Count"
    ],
    [
        "Laptop",
        "In Stock",
        "=COUNTA(A2:A6)"
    ],
    [
        "Mouse",
        "",
        "=COUNTA(B2:B6)"
    ],
    [
        "Keyboard",
        "Out of Stock",
        ""
    ],
    [
        "Monitor",
        "In Stock",
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
        "Product",
        "Status",
        "Count"
    ],
    [
        "Laptop",
        "In Stock",
        "=COUNTA(A2:A6)"
    ],
    [
        "Mouse",
        "",
        "=COUNTA(B2:B6)"
    ],
    [
        "Keyboard",
        "Out of Stock",
        ""
    ],
    [
        "Monitor",
        "In Stock",
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
        "Product",
        "Status",
        "Count"
    ],
    [
        "Laptop",
        "In Stock",
        "=COUNTA(A2:A6)"
    ],
    [
        "Mouse",
        "",
        "=COUNTA(B2:B6)"
    ],
    [
        "Keyboard",
        "Out of Stock",
        ""
    ],
    [
        "Monitor",
        "In Stock",
        ""
    ]
]
            }]
        });
    }
}
```

