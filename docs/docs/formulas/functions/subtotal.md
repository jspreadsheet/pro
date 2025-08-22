title: SUBTOTAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUBTOTAL function in Jspreadsheet

# SUBTOTAL function

`PRO`{.jtag}

The `SUBTOTAL` function in Jspreadsheet Formulas Pro is a handy tool that calculates the subtotal of a set of values in a specific range using a particular aggregation method. This could mean finding the sum, average, maximum, minimum, etc., of a group of numbers. You specify the aggregation function by entering a particular number that corresponds to the method you want. It's a versatile function that makes it easier to analyze large datasets quickly.

## Documentation

Returns a subtotal for a range using a specified aggregation function.

### Category

Math and trigonometry

### Syntax

SUBTOTAL(function_num, ref1, [ref2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `function_num` | The number that specifies the function to use for the subtotal. See documentation for a list of functions. |
| `ref1` | The first range or reference to include in the subtotal calculation. |
| `refN` | Optional. Additional ranges or references to include in the subtotal calculation. |


### Behavior

The `SUBTOTAL` function in spreadsheets is used to perform operations like count, sum, average, etc., on a specific range of cells that are either visible, hidden, or both. The behavior of this function varies depending on the operation you want to perform and the type of data in the cells. Here are some common behaviors:

- **Empty Cells**: The `SUBTOTAL` function typically ignores empty cells. For instance, if you're performing a sum operation, it will add up the non-empty cells and ignore the empty ones.
- **Text**: When the `SUBTOTAL` function encounters text in a cell, it usually ignores it. However, this can depend on the operation you're performing. For instance, if you're counting cells, it may count cells containing text.
- **Booleans**: The `SUBTOTAL` function treats boolean values (`TRUE` and `FALSE`) as integers (`1` and `0` respectively) when performing operations.
- **Errors**: If there are any cells with errors in the range you're working with, the `SUBTOTAL` function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the function_number argument is not between 1-11 and 101-111. |
| #REF! | This error occurs when the referenced cells are not valid. This can happen if the cells have been deleted or moved. |
| #NUM! | This error can occur if the operation requires a numeric argument and a cell in the range contains non-numeric data. |

### Best practices

> - Always check the function number you're using with `SUBTOTAL`. The number you use determines the operation that's performed and whether hidden rows are included.
> - Use `SUBTOTAL` instead of other functions like `SUM`, `AVERAGE`, etc., when you want to ignore hidden rows or other subtotal calculations.
> - Remember that `SUBTOTAL` will ignore cells with errors. If you want to include these in your operation, you might need to handle them separately.
> - Be mindful of the type of data in the cells you're working with. `SUBTOTAL` treats text and boolean values in certain ways that might not be expected.

### Usage

A few examples using the SUBTOTAL function.

```
SUBTOTAL(9, B2:B10) returns the sum of the values in cells B2 through B10, ignoring any other subtotals in the range  
SUBTOTAL(101, B2:B10, D2:D10) returns the count of numeric values in both ranges B2:B10 and D2:D10, ignoring any other subtotals in the range  
SUBTOTAL(4, B2:B10, D2:D10) returns the maximum value in the ranges B2:B10 and D2:D10, ignoring any other subtotals in the range  
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
        "Sales Q1",
        "Sales Q2",
        "Subtotal"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUBTOTAL(9,B2:C2)"
    ],
    [
        "Phones",
        12000,
        14500,
        "=SUBTOTAL(9,B3:C3)"
    ],
    [
        "Tablets",
        8000,
        9500,
        "=SUBTOTAL(9,B4:C4)"
    ],
    [
        "Total",
        "",
        "",
        "=SUBTOTAL(9,B2:C4)"
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
        "Sales Q1",
        "Sales Q2",
        "Subtotal"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUBTOTAL(9,B2:C2)"
    ],
    [
        "Phones",
        12000,
        14500,
        "=SUBTOTAL(9,B3:C3)"
    ],
    [
        "Tablets",
        8000,
        9500,
        "=SUBTOTAL(9,B4:C4)"
    ],
    [
        "Total",
        "",
        "",
        "=SUBTOTAL(9,B2:C4)"
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
        "Sales Q1",
        "Sales Q2",
        "Subtotal"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUBTOTAL(9,B2:C2)"
    ],
    [
        "Phones",
        12000,
        14500,
        "=SUBTOTAL(9,B3:C3)"
    ],
    [
        "Tablets",
        8000,
        9500,
        "=SUBTOTAL(9,B4:C4)"
    ],
    [
        "Total",
        "",
        "",
        "=SUBTOTAL(9,B2:C4)"
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
        "Sales Q1",
        "Sales Q2",
        "Subtotal"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUBTOTAL(9,B2:C2)"
    ],
    [
        "Phones",
        12000,
        14500,
        "=SUBTOTAL(9,B3:C3)"
    ],
    [
        "Tablets",
        8000,
        9500,
        "=SUBTOTAL(9,B4:C4)"
    ],
    [
        "Total",
        "",
        "",
        "=SUBTOTAL(9,B2:C4)"
    ]
]
            }]
        });
    }
}
```

