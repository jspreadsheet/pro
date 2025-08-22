title: THISROWCELL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the THISROWCELL function in Jspreadsheet

# THISROWCELL function

`PRO`{.jtag}

The `THISROWCELL` function in Jspreadsheet Formulas Pro is a handy tool for accessing data within a particular cell on the same row. You simply need to provide the index of the column you're interested in. For example, if your function is in row 3 and you wish to access data in column 2 of the same row, `THISROWCELL` allows you to do that. This function makes it easy to reference and retrieve data from other cells within the same row.

## Documentation

The THISROWCELL function retrieves the value of a cell located in the same row as the calling cell, specified by the column index.

### Category

Jspreadsheet

### Syntax

THISROWCELL(column_index)

| Parameter | Description |
| ----------- | ------------- |
| `column_index` | The numeric index of the column (e.g., 1 for the first column, 2 for the second column) to identify the cell to retrieve the value from within the same row as the calling cell. |


### Behavior

The `THISROWCELL` function, if it exists, would typically be used to reference the cell in the current row of a specified column. However, the actual behavior may depend on the specific spreadsheet software being used. Here's some possible expected behavior:

- For empty cells: If the cell in the current row of the specified column is empty, the function would likely return an empty value.
- For text: The function should return the text present in the cell in the current row of the specified column.
- For booleans: The function should return the boolean value (TRUE or FALSE) present in the cell in the current row of the specified column.
- For errors: If the referenced cell contains an error, the function would likely return the same error.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #REF!      | This error occurs if the specified column does not exist. |
| #VALUE!    | This error occurs if the function is used in a context where it doesn't make sense, for example, outside of a table. |
| #NAME?     | This error occurs if the function is not recognized, possibly due to a typo or the function not being supported in the used spreadsheet software. |

### Best Practices

> - Always ensure that the specified column exists to avoid a #REF! error.
> - Use `THISROWCELL` function only within the context of a table or a similar data structure where the concept of "current row" makes sense.
> - Avoid using `THISROWCELL` function to reference cells that might contain errors. Instead, handle those errors at the source whenever possible.
> - Be aware that `THISROWCELL` function might not be supported in all spreadsheet software. Always check the documentation of the software you are using.

### Usage

A few examples using the THISROWCELL function.

```
THISROWCELL(2) retrieves the value from the cell in the second column on the same row as the calling cell.  
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
        "Tax Rate",
        "Tax Amount"
    ],
    [
        "Laptop",
        999.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Mouse",
        29.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Keyboard",
        79.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
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
        "Tax Rate",
        "Tax Amount"
    ],
    [
        "Laptop",
        999.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Mouse",
        29.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Keyboard",
        79.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
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
        "Tax Rate",
        "Tax Amount"
    ],
    [
        "Laptop",
        999.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Mouse",
        29.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Keyboard",
        79.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
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
        "Tax Rate",
        "Tax Amount"
    ],
    [
        "Laptop",
        999.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Mouse",
        29.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ],
    [
        "Keyboard",
        79.99,
        0.08,
        "=THISROWCELL(2)*THISROWCELL(3)"
    ]
]
            }]
        });
    }
}
```

