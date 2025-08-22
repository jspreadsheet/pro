title: INDEX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INDEX function in Jspreadsheet

# INDEX function

`PRO`{.jtag}

The `INDEX` function in Jspreadsheet Formulas Pro is a handy tool that allows you to pinpoint and get the value from a specific cell within a designated range. Think of it like a treasure map, where you are given the exact row and column to find your treasure, which in this case is the cell value. This function is especially useful when you need to access data from a large spreadsheet. For the `INDEX` function to work, you need to specify the range, the row number, and the column number.

## Documentation

Returns a value or reference of the cell at the intersection of a particular row and column, in a given range.

### Category

Lookup and reference

### Syntax

INDEX(array, row_num, [column_num])

| Parameter | Description |
| ----------- | ------------- |
| `array` | An array of cells from which you want to retrieve data. |
| `row_num` | The row number of the cell you want to retrieve. If row_num is omitted, column_num must also be omitted. |
| `column_num` | Optional. The column number of the cell you want to retrieve. If column_num is omitted, it defaults to the same value as row_num. |


### Behavior

The `INDEX` function in spreadsheets is used to return the value of a cell at an intersection of a particular row and column in a given range. It is often used in combination with the `MATCH` function to perform complex lookups.

- The `INDEX` function will return the content of the cell regardless of its data type. It can be a number, text, boolean, or an error.
- If the specified row or column number is less than 1, the `INDEX` function will return an `#VALUE!` error.
- If the specified row or column number is greater than the number of rows or columns in the selected array, the `INDEX` function will return an `#REF!` error.
- It will return `0` for empty cells.
- If the array parameter is omitted, the `INDEX` function will consider the row and column numbers within the whole worksheet, which might lead to unexpected results.
- If both row_num and column_num arguments are used, INDEX returns the value in the cell at the intersection of row_num and column_num.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when the specified row or column number is less than 1. |
| `#REF!` | This error occurs when the specified row or column number is greater than the number of rows or columns in the selected array. |
| `#N/A` | This error occurs when the `INDEX` function is combined with `MATCH` function and the `MATCH` function cannot find the lookup value. |

### Best practices

> - Always specify the array parameter in the `INDEX` function to avoid unexpected results.
> - Use `INDEX` in combination with `MATCH` function for complex lookups. The `MATCH` function can find the correct row or column number and the `INDEX` function can return the value at that position.
> - Be careful with the row and column numbers. If they are less than 1, the function will return an error.
> - Check for empty cells in your array as the `INDEX` function will return `0` for them. If you expect to have empty cells in your array, handle this in your formula.

### Usage

A few examples using the INDEX function.

```
INDEX(A1:B2, 1, 2) returns the value in cell B1  
INDEX(A1:B2, 2, 1) returns the value in cell A2  
INDEX(A1:B2, 2) returns the values in the second row of the array  
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
        999,
        25
    ],
    [
        "Mouse",
        29,
        150
    ],
    [
        "Keyboard",
        79,
        85
    ],
    [
        "=INDEX(A1:C4,2,1)",
        "=INDEX(A1:C4,3,2)",
        "=INDEX(A1:C4,4,3)"
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
        999,
        25
    ],
    [
        "Mouse",
        29,
        150
    ],
    [
        "Keyboard",
        79,
        85
    ],
    [
        "=INDEX(A1:C4,2,1)",
        "=INDEX(A1:C4,3,2)",
        "=INDEX(A1:C4,4,3)"
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
        999,
        25
    ],
    [
        "Mouse",
        29,
        150
    ],
    [
        "Keyboard",
        79,
        85
    ],
    [
        "=INDEX(A1:C4,2,1)",
        "=INDEX(A1:C4,3,2)",
        "=INDEX(A1:C4,4,3)"
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
        999,
        25
    ],
    [
        "Mouse",
        29,
        150
    ],
    [
        "Keyboard",
        79,
        85
    ],
    [
        "=INDEX(A1:C4,2,1)",
        "=INDEX(A1:C4,3,2)",
        "=INDEX(A1:C4,4,3)"
    ]
]
            }]
        });
    }
}
```

