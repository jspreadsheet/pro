title: EXPAND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EXPAND function in Jspreadsheet

# EXPAND function

`PRO`{.jtag}

The `EXPAND` function in Jspreadsheet Formulas Pro is a useful tool for managing your spreadsheet data. It allows you to take a range of cells and break them down into individual cells. This can be highly beneficial when you want to work with specific data points within a larger dataset. Essentially, it provides a simpler way to manipulate and analyze data by focusing on each cell within a selected range.

## Documentation

Expands a range of cells into individual cells.

### Category

Lookup and reference

### Syntax

EXPAND(array, rows, [columns], [pad_with])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array to be expanded. |
| `number` | The number of rows for the expanded array. |
| `[columns]` | Optional. The number of columns for the expanded array. If not specified, the array is expanded into a single column. |
| `[pad_with]` | Optional. A value to pad the expanded array with when the dimensions are larger than the original array. If not specified, the additional cells remain empty. |


### Behavior

The `EXPAND` function in a spreadsheet is used to expand the range of cells referenced in a formula. It is beneficial when the data range is dynamic and can change over time. Here are some of the expected behaviors:

- **Empty Cells:** If the range defined by the `EXPAND` function includes empty cells, these cells are typically ignored.
- **Text:** If the range includes cells that contain text, the function may return an error or ignore these cells, depending on the context of the formula.
- **Booleans:** The `EXPAND` function should handle boolean values (TRUE/FALSE) as per the context of the formula.
- **Errors:** If the range includes cells that contain errors, the `EXPAND` function will typically propagate these errors to the resulting calculation.
- **Non-Contiguous Ranges:** The `EXPAND` function may not work correctly with non-contiguous ranges.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #REF! | Occurs when the expanded range goes beyond the limit of the spreadsheet. |
| #VALUE! | Occurs when the range includes cells that contain non-numeric values in a context where only numeric values are expected. |
| #N/A | Occurs when the range does not exist or cannot be expanded. |
| #NULL! | Occurs when the range defined is non-contiguous or disjointed. |

### Best practices

> - Always ensure that the range specified in the `EXPAND` function does not exceed the limit of the spreadsheet to avoid the #REF! error.
> - Be mindful of the data type in the range. If the formula requires numeric values, ensure that the range does not include text or boolean values to avoid the #VALUE! error.
> - Use the `EXPAND` function for ranges that are likely to change over time. This will make your formulas dynamically adapt to the changing range.
> - Avoid using non-contiguous ranges with the `EXPAND` function. This can lead to unexpected results or the #NULL! error.

### Usage

A few examples using the EXPAND function.

```
EXPAND(A1:A3, 4) returns [[A1], [A2], [A3], [#N/A]]  
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
        "Expanded List"
    ],
    [
        "Apple",
        1.5,
        "=EXPAND(A2:A4,6,1,\"Out of Stock\")"
    ],
    [
        "Banana",
        0.75
    ],
    [
        "Orange",
        2.25
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
        "Expanded List"
    ],
    [
        "Apple",
        1.5,
        "=EXPAND(A2:A4,6,1,\"Out of Stock\")"
    ],
    [
        "Banana",
        0.75
    ],
    [
        "Orange",
        2.25
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
        "Expanded List"
    ],
    [
        "Apple",
        1.5,
        "=EXPAND(A2:A4,6,1,\"Out of Stock\")"
    ],
    [
        "Banana",
        0.75
    ],
    [
        "Orange",
        2.25
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
        "Expanded List"
    ],
    [
        "Apple",
        1.5,
        "=EXPAND(A2:A4,6,1,\"Out of Stock\")"
    ],
    [
        "Banana",
        0.75
    ],
    [
        "Orange",
        2.25
    ]
]
            }]
        });
    }
}
```

