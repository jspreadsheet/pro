title: CHOOSEROWS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHOOSEROWS function in Jspreadsheet

# CHOOSEROWS function

`PRO`{.jtag}

The `CHOOSEROWS` function in Jspreadsheet Formulas Pro is a tool that lets you select specific rows from a table based on their position. For instance, if you have a table with 100 rows and you only need information from the 10th to 20th row, you can use `CHOOSEROWS` to obtain this data. This makes it simple to handle and analyze specific sections of large datasets without needing to manually sort through all the information.

## Documentation

Returns a range of rows selected from a table based on their position in the table.

### Category

Lookup and reference

### Syntax

CHOOSEROWS(table, row_index1, [row_index2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `table` | A range of cells that represents the table. |
| `row_index1` | The index number of the first row you want to select. Must be a positive integer. |
| `[row_indexN]` | Optional. Additional index numbers of rows you want to select. |


### Behavior

The `CHOOSEROWS` function in a spreadsheet is used to select specific rows based on certain criteria. The function evaluates each row in the data range and returns those that meet the specified condition. 

- If any cells within the range are empty, these are typically ignored by the function unless the criteria specifically include empty cells.
- Text cells are also included in the evaluation. The function will return rows where the text cell matches the criteria.
- The function handles booleans as well. If the criteria is a boolean condition, it will return rows where the condition is true.
- If there's an error in the data range, the function will return an error. The function will not run until the error is resolved.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error typically occurs if the criteria argument in the function is not a valid condition. |
| #N/A | This error is shown when the function does not find any rows that match the condition. |
| #REF! | This error is displayed if the given range is invalid. |

### Best practices

> - Always ensure that the criteria you provide in the `CHOOSEROWS` function is valid and matches the type of data in the range.
> - To prevent potential errors, it's a good idea to check the data range for errors before running the function.
> - Where possible, try to use specific and unique criteria to get the most accurate results.
> - Remember that the function can return multiple rows. If you only need one result, consider using other functions that return single values.

### Usage

A few examples using the CHOOSEROWS function.

```
CHOOSEROWS(A1:D5, 1, 3) returns a range with rows 1 and 3  
CHOOSEROWS(A1:D5, 2, 4) returns a range with rows 2 and 4  
CHOOSEROWS(A1:E10, 1, 3, 5) returns a range with rows 1, 3, and 5  
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
        "Laptop",
        899,
        15
    ],
    [
        "Mouse",
        25,
        50
    ],
    [
        "Keyboard",
        75,
        30
    ],
    [
        "Monitor",
        299,
        8
    ],
    [
        "Selected Items:",
        "",
        ""
    ],
    [
        "=CHOOSEROWS(A1:C5, 1, 3, 5)",
        "",
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
        "Price",
        "Stock"
    ],
    [
        "Laptop",
        899,
        15
    ],
    [
        "Mouse",
        25,
        50
    ],
    [
        "Keyboard",
        75,
        30
    ],
    [
        "Monitor",
        299,
        8
    ],
    [
        "Selected Items:",
        "",
        ""
    ],
    [
        "=CHOOSEROWS(A1:C5, 1, 3, 5)",
        "",
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
        "Price",
        "Stock"
    ],
    [
        "Laptop",
        899,
        15
    ],
    [
        "Mouse",
        25,
        50
    ],
    [
        "Keyboard",
        75,
        30
    ],
    [
        "Monitor",
        299,
        8
    ],
    [
        "Selected Items:",
        "",
        ""
    ],
    [
        "=CHOOSEROWS(A1:C5, 1, 3, 5)",
        "",
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
        "Price",
        "Stock"
    ],
    [
        "Laptop",
        899,
        15
    ],
    [
        "Mouse",
        25,
        50
    ],
    [
        "Keyboard",
        75,
        30
    ],
    [
        "Monitor",
        299,
        8
    ],
    [
        "Selected Items:",
        "",
        ""
    ],
    [
        "=CHOOSEROWS(A1:C5, 1, 3, 5)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

