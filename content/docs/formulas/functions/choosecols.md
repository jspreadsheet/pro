title: CHOOSECOLS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHOOSECOLS function in Jspreadsheet

# CHOOSECOLS function

`PRO`{.jtag}

The `CHOOSECOLS` function in Jspreadsheet Formulas Pro is a handy tool that allows you to select specific columns from a table based on their position. For instance, if you have a table with multiple columns and you only want to work with the 1st, 3rd, and 5th columns, you can use `CHOOSECOLS` to easily select them. This function is particularly useful when dealing with large data sets, as it simplifies the process of selecting and working with specific columns.

## Documentation

Returns a range of columns selected from a table based on their position in the table.

### Category

Lookup and reference

### Syntax

CHOOSECOLS(table, column_index1, [column_index2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `table` | A range of cells that represents the table. |
| `column_index1` | The index number of the first column you want to select. Must be a positive integer. |
| `[column_indexN]` | Optional. Additional index numbers of columns you want to select. |


### Behavior

The `CHOOSECOLS` function in a spreadsheet is used to select specific columns from a range or a table of data. The function is dependent on the specific spreadsheet software being used and may not be universally available. Here's how it generally handles different data types:

- **Empty Cells**: `CHOOSECOLS` skips over empty cells in the selected columns. However, if the entire column is empty, it may return an error.
- **Text**: This function works well with text values and returns them as they are in the selected columns.
- **Booleans**: Boolean values (TRUE/FALSE) are treated as regular values and returned as they are.
- **Errors**: If there is an error in a cell within the chosen columns, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the columns selected do not exist in the specified range or when the function cannot find the specified columns. |
| #REF! | This error is returned when the columns selected are outside the bounds of the current spreadsheet, or if the chosen columns have been deleted. |
| #NAME? | This error occurs if the `CHOOSECOLS` function is not recognized by the spreadsheet software, indicating that it may not be supported. |
| #NUM! | This error happens when the column index given is non-numeric. |

### Best practices

> - Always ensure the columns you want to select with `CHOOSECOLS` exist within the specified range to avoid the #VALUE! error.
> - Use the `CHOOSECOLS` function with other functions to manipulate or analyze data from the selected columns for better efficiency.
> - Be cautious when deleting columns from your spreadsheet if those columns are referenced in a `CHOOSECOLS` function, as this can result in a #REF! error.
> - Make sure your spreadsheet software supports the `CHOOSECOLS` function to avoid the #NAME? error.

### Usage

A few examples using the CHOOSECOLS function.

```
CHOOSECOLS(A1:D5, 1, 3) returns a range with columns A and C  
CHOOSECOLS(A1:D5, 2, 4) returns a range with columns B and D  
CHOOSECOLS(A1:E10, 1, 3, 5) returns a range with columns A, C, and E  
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
        "Stock",
        "Category",
        "Supplier"
    ],
    [
        "Laptop",
        899,
        25,
        "Electronics",
        "TechCorp"
    ],
    [
        "Mouse",
        29,
        150,
        "Electronics",
        "AccessCo"
    ],
    [
        "Desk",
        249,
        8,
        "Furniture",
        "OfficePlus"
    ],
    [
        "Chair",
        179,
        12,
        "Furniture",
        "OfficePlus"
    ],
    [],
    [
        "=CHOOSECOLS(A1:E5,1,3,4)"
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
        "Stock",
        "Category",
        "Supplier"
    ],
    [
        "Laptop",
        899,
        25,
        "Electronics",
        "TechCorp"
    ],
    [
        "Mouse",
        29,
        150,
        "Electronics",
        "AccessCo"
    ],
    [
        "Desk",
        249,
        8,
        "Furniture",
        "OfficePlus"
    ],
    [
        "Chair",
        179,
        12,
        "Furniture",
        "OfficePlus"
    ],
    [],
    [
        "=CHOOSECOLS(A1:E5,1,3,4)"
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
        "Stock",
        "Category",
        "Supplier"
    ],
    [
        "Laptop",
        899,
        25,
        "Electronics",
        "TechCorp"
    ],
    [
        "Mouse",
        29,
        150,
        "Electronics",
        "AccessCo"
    ],
    [
        "Desk",
        249,
        8,
        "Furniture",
        "OfficePlus"
    ],
    [
        "Chair",
        179,
        12,
        "Furniture",
        "OfficePlus"
    ],
    [],
    [
        "=CHOOSECOLS(A1:E5,1,3,4)"
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
        "Stock",
        "Category",
        "Supplier"
    ],
    [
        "Laptop",
        899,
        25,
        "Electronics",
        "TechCorp"
    ],
    [
        "Mouse",
        29,
        150,
        "Electronics",
        "AccessCo"
    ],
    [
        "Desk",
        249,
        8,
        "Furniture",
        "OfficePlus"
    ],
    [
        "Chair",
        179,
        12,
        "Furniture",
        "OfficePlus"
    ],
    [],
    [
        "=CHOOSECOLS(A1:E5,1,3,4)"
    ]
]
            }]
        });
    }
}
```

