title: TOROW function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TOROW function in Jspreadsheet

# TOROW function



The `TOROW` function in Jspreadsheet Formulas Pro is a useful tool that helps you find the row number associated with a specific cell reference. If you provide the address of a cell, this function will give you the row in which that cell is located. It's a handy way to track cell locations, especially in large spreadsheets where manually counting rows can be tedious and prone to errors.

## Documentation

Returns the number of the row that corresponds to a specified cell reference.

### Category

Lookup and reference

### Syntax

TOROW(array, [ignore], [scan_by_column])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array you want to transform into a single row. |
| `[ignore]` | A logical value that, when set to TRUE, ignores empty cells in the array. |
| `[scan_by_column]` | A logical value that, when set to TRUE, scans the array by column; otherwise, it scans by row. |


### Behavior

The `TOROW` function in a spreadsheet is not a standard function and may not be available in all spreadsheet software. However, if it exists in your software, it would typically convert a specified array or range of cells into a single row. Below are the expected behaviors:

1. **Empty Cells**: Generally, the function will include empty cells in the output, representing them as null or blank in the row.
2. **Text**: Text values within the range or array will be included in the row. 
3. **Booleans**: Boolean values (TRUE / FALSE) will also be included in the output row.
4. **Errors**: If there are any cells with errors in the range or array, those errors will likely be carried over into the output row.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE!    | This error occurs when the function encounters an incompatible data type in the range or array. |
| #REF!      | This error is displayed when the function encounters an invalid reference. This can happen if the range or array includes cells that have been deleted or moved. |
| #N/A       | This error occurs when the function cannot find the range or array specified. |

### Best practices

> - Always ensure that your range or array does not contain any error values, as these will be carried into the output row.
> - Use absolute cell references in your function to prevent errors if rows or columns are added or deleted.
> - Always double-check your range or array to ensure it contains the cells you want to convert into a row.
> - Keep in mind that your function will return all values in the range or array, including empty cells, so clean up your data if necessary before using the function.

### Usage

A few examples using the TOROW function.

```
TOROW("B12")  
TOROW("Z45")  
TOROW("AA99")  
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
        "Cell Reference",
        "Row Number"
    ],
    [
        "Apples",
        "B2",
        "=TOROW(B2)"
    ],
    [
        "Bananas",
        "B3",
        "=TOROW(B3)"
    ],
    [
        "Oranges",
        "B4",
        "=TOROW(B4)"
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
        "Cell Reference",
        "Row Number"
    ],
    [
        "Apples",
        "B2",
        "=TOROW(B2)"
    ],
    [
        "Bananas",
        "B3",
        "=TOROW(B3)"
    ],
    [
        "Oranges",
        "B4",
        "=TOROW(B4)"
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
        "Cell Reference",
        "Row Number"
    ],
    [
        "Apples",
        "B2",
        "=TOROW(B2)"
    ],
    [
        "Bananas",
        "B3",
        "=TOROW(B3)"
    ],
    [
        "Oranges",
        "B4",
        "=TOROW(B4)"
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
        "Cell Reference",
        "Row Number"
    ],
    [
        "Apples",
        "B2",
        "=TOROW(B2)"
    ],
    [
        "Bananas",
        "B3",
        "=TOROW(B3)"
    ],
    [
        "Oranges",
        "B4",
        "=TOROW(B4)"
    ]
]
            }]
        });
    }
}
```

