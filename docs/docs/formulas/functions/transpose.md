title: TRANSPOSE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TRANSPOSE function in Jspreadsheet

# TRANSPOSE function

`PRO`{.jtag}

The `TRANSPOSE` function in Jspreadsheet Formulas Pro is a very useful tool that allows you to change the orientation of a range of cells. In simpler terms, it flips the data from rows to columns, or from columns to rows. This is particularly helpful when you need to rearrange your data for better visualization or analysis. Just remember, it doesn't alter the original data, but rather provides a new, transposed view of it.

## Documentation

Returns a transposed range of cells.

### Category

Lookup and reference

### Syntax

TRANSPOSE(array)

| Parameter | Description |
| ----------- | ------------- |
| `array` | A range of cells to transpose |


### Behavior

The `TRANSPOSE` function in spreadsheets is used to switch or flip the orientation of a given range or array of cells. Here's how it handles different types of data:

- **Empty cells**: The `TRANSPOSE` function will preserve empty cells during the transformation, meaning if a cell in the original range is empty, the corresponding cell in the transposed range will also be empty.

- **Text**: Text is treated the same way as any other data type. The `TRANSPOSE` function will flip the orientation of text cells in the same way it would numbers or booleans.

- **Booleans**: Boolean values (True/False) are transposed just like any other type of data. Their positions will be switched based on the orientation flip.

- **Errors**: If there is an error in one of the cells in the original range, the error will be preserved in the corresponding cell in the transposed range. 

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the function is used with inappropriate arguments. For example, using range references that do not exist. |
| #REF! | This error occurs when the resulting array of the `TRANSPOSE` function is too large to be displayed. |
| #N/A | This error occurs when the source range is invalid or non-existent. |

### Best practices

> - Always ensure that the area you are transposing into is clear of any data. Any existing data will be overwritten by the `TRANSPOSE` function.
> - Be aware that the `TRANSPOSE` function creates an array formula, which means you can't delete parts of the output without breaking the whole array. You need to delete the entire array if you want to remove it.
> - Check the dimensions of your data before using the `TRANSPOSE` function. If you are transposing a large range of cells, make sure there is sufficient space in the destination area.
> - If your data set updates frequently, consider using the `TRANSPOSE` function rather than manually transposing the data. This will ensure the transposed data updates dynamically with the source data.

### Usage

A few examples using the TRANSPOSE function.

```
TRANSPOSE(A1:C3) returns a transposed range of cells from A1 to C3  
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Sales",
        15000,
        18000,
        22000,
        16000
    ],
    [
        "Marketing",
        8000,
        9500,
        11000,
        8500
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TRANSPOSE(A1:E3)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Sales",
        15000,
        18000,
        22000,
        16000
    ],
    [
        "Marketing",
        8000,
        9500,
        11000,
        8500
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TRANSPOSE(A1:E3)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Sales",
        15000,
        18000,
        22000,
        16000
    ],
    [
        "Marketing",
        8000,
        9500,
        11000,
        8500
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TRANSPOSE(A1:E3)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Sales",
        15000,
        18000,
        22000,
        16000
    ],
    [
        "Marketing",
        8000,
        9500,
        11000,
        8500
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TRANSPOSE(A1:E3)"
    ]
]
            }]
        });
    }
}
```

