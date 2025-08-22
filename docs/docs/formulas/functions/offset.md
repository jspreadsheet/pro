title: OFFSET function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the OFFSET function in Jspreadsheet

# OFFSET function

`PRO`{.jtag}

The `OFFSET` function in Jspreadsheet Formulas Pro is a useful tool that allows you to reference a range of cells that is a certain distance away from a starting cell or range. This distance, or 'offset', is defined by you. For example, you might use `OFFSET` to reference the cell that's 3 rows down and 2 columns to the right of your starting cell. It's like giving directions from one cell to another.

## Documentation

Returns a reference to a range that is offset from a starting cell or range.

### Category

Lookup and reference

### Syntax

OFFSET(reference, rows, cols, [height], [width])

| Parameter | Description |
| ----------- | ------------- |
| `reference` | The starting point from which you want to base the offset. |
| `rows` | The number of rows, up (negative value) or down (positive value), by which the resulting range should be offset. |
| `cols` | The number of columns, to the left (negative value) or right (positive value), by which the resulting range should be offset. |
| `[height]` | Optional. Argument that specifies the height, in number of rows, that you want the resulting range to be. |
| `[width]` | Optional. Argument that specifies the width, in number of columns, that you want the resulting range to be. |


### Behavior

The `OFFSET` function in spreadsheets returns a cell or range of cells that is a specified number of rows and columns from a cell or range of cells. Here's how it handles various inputs:

- **Empty Cells**: If the `OFFSET` function references empty cells, it will return an empty cell. The return type of `OFFSET` will depend on the content of the cell it returns. If the cell is empty, `OFFSET` returns a zero for numeric cells and an empty string for string cells.

- **Text**: If the `OFFSET` function references a cell containing text, it returns that text.

- **Booleans**: If the `OFFSET` function references a cell containing a Boolean value, it returns that Boolean value.

- **Errors**: If the `OFFSET` function references a cell containing an error, it returns that error.

- **Non-existent cells**: If the `OFFSET` function is directed towards a cell that doesn't exist (like row 0 or column 0), it will return a `#REF!` error.

### Common Errors

| Error | Description |
| ---   | ---         |
| #REF! | This error is caused by using the `OFFSET` function to reference a non-existent cell (e.g., row 0). This error can also occur if the `OFFSET` function returns a cell outside the row limit (1,048,576) or column limit (16,384). |
| #VALUE! | This error is returned if the `OFFSET` function is given argument values that aren't valid. For example, if the row or column offset, or the height or width arguments, are non-numeric. |

### Best practices

> - Always ensure that the `OFFSET` function isn't referencing non-existent cells. This includes avoiding referencing cells in row 0, column 0, or beyond the maximum row and column limits.
> - Use the `OFFSET` function with caution in large spreadsheets, as it can significantly slow down the calculation time. This is because `OFFSET` is a volatile function, meaning it recalculates every time any cell in the spreadsheet changes.
> - If you are using the `OFFSET` function to create dynamic ranges, consider using the `INDEX` function instead to improve performance. `INDEX` is non-volatile and does not force unnecessary calculations.
> - Be careful when using the `OFFSET` function with other functions, as it can return arrays or single values depending on its usage, which may affect the behavior of the other functions.

### Usage

A few examples using the OFFSET function.

```
OFFSET(A1,2,2) returns a reference to the cell in the second row and second column relative to cell A1  
OFFSET(A1:B5,1,1,1,1) returns a reference to the cell in the second row and second column of the range A2:B3  
OFFSET(A1,0,0,3,3) returns a reference to a 3x3 range starting with cell A1  
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
        "Jan",
        "Feb",
        "Mar"
    ],
    [
        "Apples",
        100,
        150,
        200
    ],
    [
        "Bananas",
        80,
        120,
        160
    ],
    [
        "Oranges",
        90,
        110,
        180
    ],
    [
        "Q1 Total:",
        "=SUM(OFFSET(B1,1,0,3,1))",
        "=SUM(OFFSET(C1,1,0,3,1))",
        "=SUM(OFFSET(D1,1,0,3,1))"
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
        "Jan",
        "Feb",
        "Mar"
    ],
    [
        "Apples",
        100,
        150,
        200
    ],
    [
        "Bananas",
        80,
        120,
        160
    ],
    [
        "Oranges",
        90,
        110,
        180
    ],
    [
        "Q1 Total:",
        "=SUM(OFFSET(B1,1,0,3,1))",
        "=SUM(OFFSET(C1,1,0,3,1))",
        "=SUM(OFFSET(D1,1,0,3,1))"
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
        "Jan",
        "Feb",
        "Mar"
    ],
    [
        "Apples",
        100,
        150,
        200
    ],
    [
        "Bananas",
        80,
        120,
        160
    ],
    [
        "Oranges",
        90,
        110,
        180
    ],
    [
        "Q1 Total:",
        "=SUM(OFFSET(B1,1,0,3,1))",
        "=SUM(OFFSET(C1,1,0,3,1))",
        "=SUM(OFFSET(D1,1,0,3,1))"
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
        "Jan",
        "Feb",
        "Mar"
    ],
    [
        "Apples",
        100,
        150,
        200
    ],
    [
        "Bananas",
        80,
        120,
        160
    ],
    [
        "Oranges",
        90,
        110,
        180
    ],
    [
        "Q1 Total:",
        "=SUM(OFFSET(B1,1,0,3,1))",
        "=SUM(OFFSET(C1,1,0,3,1))",
        "=SUM(OFFSET(D1,1,0,3,1))"
    ]
]
            }]
        });
    }
}
```

