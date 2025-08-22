title: INDIRECT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INDIRECT function in Jspreadsheet

# INDIRECT function

`PRO`{.jtag}

The `INDIRECT` function in Jspreadsheet Formulas Pro is a useful tool that allows you to retrieve the value from a specific cell, defined by a text string. The text string essentially acts as a cell address, telling the function exactly where to look. For example, if you input `INDIRECT("A1")`, the function will return the value in cell A1. This powerful function provides flexibility in dynamically referencing various cells in your spreadsheet.

## Documentation

Returns the reference specified by a text string.

### Category

Lookup and reference

### Syntax

INDIRECT(ref_text, [a1])

| Parameter | Description |
| ----------- | ------------- |
| `ref_text` | A cell reference, defined as a string. |
| `a1` | Optional. A logical value that specifies what type of reference is contained in the cell ref_text. If omitted, it defaults to TRUE, meaning that A1-style references are used. |


### Behavior

The `INDIRECT` function in spreadsheets is used to convert a text string into a cell reference. The main behaviors of this function are as follows:

1. If the cell reference is a text string in a cell, `INDIRECT` will retrieve the value from the cell referenced by the text string. For example, if cell A1 contains the text string `B2`, `INDIRECT(A1)` will return the value in cell B2.

2. The `INDIRECT` function treats empty cells as zero values.

3. If the cell reference is a text string, `INDIRECT` will treat it as a cell reference. For example, `INDIRECT("A1")` will return the value in cell A1.

4. The function does not dynamically update if the cell reference changes. For example, if cell A1 contains the text string `B2`, and `B2`'s value changes, `INDIRECT(A1)` won't automatically update.

5. The `INDIRECT` function will return an error if the text string does not correspond to a valid cell reference.

6. Booleans and errors are handled as usual, meaning if the referenced cell contains a boolean or an error, the `INDIRECT` function will return that boolean or error.

### Common Errors

| Error | Description |
| --- | --- |
| #REF! | This error is displayed when the cell reference is not valid. This could be because the cell does not exist, or the text string does not correspond to a valid cell reference. |
| #VALUE! | This error is displayed when the formula includes cells that contain different data types. |

### Best practices

> 1. Be careful when using `INDIRECT` in large spreadsheets, as it can slow down the calculation speed. This is because `INDIRECT` is a volatile function, meaning it recalculates every time a change is made anywhere in the workbook.
> 2. Try to keep your cell references simple and clear to avoid confusion and potential errors.
> 3. Use `INDIRECT` when you want to change the reference to a cell within a formula without changing the formula itself.
> 4. Remember that `INDIRECT` does not work with references to cells in other workbooks that are closed. In such cases, use direct cell references or find another workaround.

### Usage

A few examples using the INDIRECT function.

```
INDIRECT("A1") returns 5, assuming cell A1 contains the value 5  
INDIRECT(C4) returns the value in cell A1, assuming cell C4 contains the value "A1"   
SUM(INDIRECT(A3)) returns the sum of the range B6, assuming cell A3 contains the value "B6"  
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
        "A1",
        "B1",
        5
    ],
    [
        "A2",
        "=INDIRECT(A1)",
        10
    ],
    [
        "B1:B3",
        "=SUM(INDIRECT(A3))",
        15
    ],
    [
        "Product Sales",
        125,
        "=INDIRECT(\"B2\")"
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
        "A1",
        "B1",
        5
    ],
    [
        "A2",
        "=INDIRECT(A1)",
        10
    ],
    [
        "B1:B3",
        "=SUM(INDIRECT(A3))",
        15
    ],
    [
        "Product Sales",
        125,
        "=INDIRECT(\"B2\")"
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
        "A1",
        "B1",
        5
    ],
    [
        "A2",
        "=INDIRECT(A1)",
        10
    ],
    [
        "B1:B3",
        "=SUM(INDIRECT(A3))",
        15
    ],
    [
        "Product Sales",
        125,
        "=INDIRECT(\"B2\")"
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
        "A1",
        "B1",
        5
    ],
    [
        "A2",
        "=INDIRECT(A1)",
        10
    ],
    [
        "B1:B3",
        "=SUM(INDIRECT(A3))",
        15
    ],
    [
        "Product Sales",
        125,
        "=INDIRECT(\"B2\")"
    ]
]
            }]
        });
    }
}
```

