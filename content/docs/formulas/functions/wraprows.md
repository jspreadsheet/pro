title: WRAPROWS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WRAPROWS function in Jspreadsheet

# WRAPROWS function



The `WRAPROWS` function in Jspreadsheet Formulas Pro is a useful tool for managing the presentation of your data. It allows you to control how the text within a cell is displayed by defining a specific number of rows for the text to occupy. Essentially, if you have a long piece of text, rather than it overflowing or hiding, `WRAPROWS` will neatly 'wrap' or break it up across several rows. This is particularly helpful in keeping your spreadsheet organized and easy to read.

## Documentation

Wraps the text in a cell based on the number of rows specified.

### Category

Look and reference

### Syntax

WRAPROWS(vector, wrap_count, [pad_with])

| Parameter | Description |
| ----------- | ------------- |
| `vector` | The row or column vector to wrap. |
| `wrap_count` | The number of values to wrap the vector after. Must be greater than 0. |
| `[pad_with]` | Optional. A value to pad the vector with when wrapping. If not specified, the vector is wrapped without padding. |


### Behavior

The 'WRAPROWS' function in a spreadsheet is not a standard function in spreadsheet programs like Excel or Google Sheets. In case you're referring to a custom function, it would typically treat different types of data as follows:

- **Empty cells:** The function may ignore these cells or treat them as zeros, depending on the specific function design.
- **Text:** Depending on the function's design, it might ignore cells containing text, treat them as zeros, or throw an error.
- **Booleans:** These are usually treated as 1 (for TRUE) and 0 (for FALSE).
- **Errors:** If the 'WRAPROWS' function encounters a cell with an error, it will likely propagate the error to its own result.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input cell reference is not valid or when the function encounters data of a type it doesn't know how to handle (like text in a function expecting numbers). |
| #REF! | This error is shown when the cell reference is not valid, i.e., if the cell doesn't exist. |
| #NAME? | This error occurs when the function name is misspelled or does not exist. |

### Best practices

> - Always check to ensure that the data types in the target cells are compatible with the 'WRAPROWS' function to avoid errors.
> - Make sure the cell references are correct and valid to avoid #REF! errors.
> - Avoid directly hardcoding data into the function. Instead, use cell references so that the function updates automatically when data changes.
> - Always confirm that the 'WRAPROWS' function exists in your spreadsheet program, as it's not a standard function in Excel or Google Sheets.

### Usage

A few examples using the WRAPROWS function.

```
WRAPROWS([1, 2, 3, 4, 5, 6], 3) returns [[1, 2, 3], [4, 5, 6]]  
WRAPROWS(['A', 'B', 'C', 'D'], 2, 'X') returns [['A', 'B'], ['C', 'D'], ['X', 'X']]  
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Sales",
        120,
        85,
        200,
        150,
        90,
        110
    ],
    [
        "Wrapped (3 cols)",
        "=WRAPROWS(B2:G2,3)"
    ],
    [
        "Wrapped (2 cols)",
        "=WRAPROWS(B2:G2,2)"
    ],
    [
        "With Padding",
        "=WRAPROWS(B2:E2,3,0)"
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Sales",
        120,
        85,
        200,
        150,
        90,
        110
    ],
    [
        "Wrapped (3 cols)",
        "=WRAPROWS(B2:G2,3)"
    ],
    [
        "Wrapped (2 cols)",
        "=WRAPROWS(B2:G2,2)"
    ],
    [
        "With Padding",
        "=WRAPROWS(B2:E2,3,0)"
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Sales",
        120,
        85,
        200,
        150,
        90,
        110
    ],
    [
        "Wrapped (3 cols)",
        "=WRAPROWS(B2:G2,3)"
    ],
    [
        "Wrapped (2 cols)",
        "=WRAPROWS(B2:G2,2)"
    ],
    [
        "With Padding",
        "=WRAPROWS(B2:E2,3,0)"
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Sales",
        120,
        85,
        200,
        150,
        90,
        110
    ],
    [
        "Wrapped (3 cols)",
        "=WRAPROWS(B2:G2,3)"
    ],
    [
        "Wrapped (2 cols)",
        "=WRAPROWS(B2:G2,2)"
    ],
    [
        "With Padding",
        "=WRAPROWS(B2:E2,3,0)"
    ]
]
            }]
        });
    }
}
```

