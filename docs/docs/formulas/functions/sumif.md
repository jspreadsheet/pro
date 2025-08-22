title: SUMIF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMIF function in Jspreadsheet

# SUMIF function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SUMIF` function in Jspreadsheet Formulas Pro is a great tool for adding together certain numbers in a range of cells based on a given condition. For example, you can use it to add only the cells that contain numbers above a certain value or only those that contain a specific text. It's like a regular sum function, but with an added filter or condition that the cells must meet for them to be included in the sum.

## Documentation

Returns the sum of a range of cells that meet a specified criteria.

### Category

Math and trigonometry

### Syntax

SUMIF(range, criteria, [sum_range])

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of cells to evaluate. |
| `criteria` | The criteria used to determine which cells to add. |
| `sum_range` | Optional. The range of cells to add together. If omitted, the cells in 'range' are used. |


### Behavior

The `SUMIF` function in spreadsheets is used to add up cells that meet a particular condition. It has three arguments: range, criteria, and sum_range. The 'range' is the group of cells to apply the criteria to, 'criteria' is the condition that must be met, and 'sum_range' is the cells to sum.

Here is how `SUMIF` handles various types of data:

- Empty cells: `SUMIF` ignores empty cells in the sum_range.
- Text: If the criteria is a text string, `SUMIF` matches cells that contain the exact text string.
- Booleans: `SUMIF` can use boolean criteria to match cells. For example, `=SUMIF(A1:A10, TRUE, B1:B10)` would sum the cells in B1:B10 where the corresponding cell in A1:A10 is `TRUE`.
- Errors: If any cell in the sum_range contains an error, `SUMIF` returns an error. If any cell in the range that is being evaluated has an error, that cell is ignored.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the given criteria is a text string but is not enclosed in quotation marks. |
| #N/A | This error is displayed when the criteria is a cell reference and that cell is empty. |
| #DIV/0! | This error is displayed when the sum_range is a division operation and the divisor is zero or a blank cell. |
| #NAME? | This error is displayed when the spreadsheet does not recognize the text in the formula. For example, if you misspell `SUMIF` as `SUMFI`. |

### Best practices

> - Always make sure to enclose text string criteria in quotation marks to avoid the #VALUE! error.
> - Be careful with your cell references in the range and sum_range arguments to avoid summing the wrong cells.
> - If you're using a cell reference for your criteria, ensure that the cell is not empty to avoid the #N/A error.
> - If you have a large dataset, consider using the `SUMIFS` function instead, as it can handle multiple criteria and can improve performance.

### Usage

A few examples using the SUMIF function.

```
SUMIF(A2:A6, ">10") returns the sum of all values in cells A2 through A6 that are greater than 10  
SUMIF(A2:A6, "apples", B2:B6) returns the sum of all values in cells B2 through B6 where the corresponding cell in A2 through A6 contains the text "apples"  
SUMIF(D2:D6, "=green", E2:E6) returns the sum of all values in cells E2 through E6 where the corresponding cell in D2 through D6 contains the text "green"  
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
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        10,
        2.5
    ],
    [
        "Bananas",
        15,
        1.2
    ],
    [
        "Apples",
        8,
        2.5
    ],
    [
        "Oranges",
        12,
        3.0
    ],
    [
        "Total Apples Quantity:",
        "=SUMIF(A2:A5,\"Apples\",B2:B5)"
    ],
    [
        "Revenue from Apples:",
        "=SUMIF(A2:A5,\"Apples\",C2:C5)*SUMIF(A2:A5,\"Apples\",B2:B5)"
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
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        10,
        2.5
    ],
    [
        "Bananas",
        15,
        1.2
    ],
    [
        "Apples",
        8,
        2.5
    ],
    [
        "Oranges",
        12,
        3.0
    ],
    [
        "Total Apples Quantity:",
        "=SUMIF(A2:A5,\"Apples\",B2:B5)"
    ],
    [
        "Revenue from Apples:",
        "=SUMIF(A2:A5,\"Apples\",C2:C5)*SUMIF(A2:A5,\"Apples\",B2:B5)"
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
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        10,
        2.5
    ],
    [
        "Bananas",
        15,
        1.2
    ],
    [
        "Apples",
        8,
        2.5
    ],
    [
        "Oranges",
        12,
        3.0
    ],
    [
        "Total Apples Quantity:",
        "=SUMIF(A2:A5,\"Apples\",B2:B5)"
    ],
    [
        "Revenue from Apples:",
        "=SUMIF(A2:A5,\"Apples\",C2:C5)*SUMIF(A2:A5,\"Apples\",B2:B5)"
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
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        10,
        2.5
    ],
    [
        "Bananas",
        15,
        1.2
    ],
    [
        "Apples",
        8,
        2.5
    ],
    [
        "Oranges",
        12,
        3.0
    ],
    [
        "Total Apples Quantity:",
        "=SUMIF(A2:A5,\"Apples\",B2:B5)"
    ],
    [
        "Revenue from Apples:",
        "=SUMIF(A2:A5,\"Apples\",C2:C5)*SUMIF(A2:A5,\"Apples\",B2:B5)"
    ]
]
            }]
        });
    }
}
```

