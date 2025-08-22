title: VSTACK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VSTACK function in Jspreadsheet

# VSTACK function



The `VSTACK` function in Jspreadsheet Formulas Pro is a useful tool that allows you to compile data from several different ranges and stack them vertically in one single column. This means you can gather various pieces of information and have them all neatly organized in one place. It's like stacking blocks on top of each other, but with data. This tool makes data management simpler and more organized, aiding in efficient analysis and comparison of information.

## Documentation

Stacks values from multiple ranges vertically into a single column.

### Category

Look and reference

### Syntax

VSTACK(range1, [rangeN], ...)

| Parameter | Description |
| ----------- | ------------- |
| `range1` | The first range of cells to stack. |
| `rangeN` | Optional. Additional ranges of cells to stack. |


### Behavior

The `VSTACK` function in spreadsheets is used to stack multiple ranges of cells vertically into a single column. Here's how it handles different types of inputs:

- **Empty Cells**: Empty cells are included in the output range as blank cells.
- **Text**: Text cells are stacked in the same order they appear in the input range.
- **Booleans**: Boolean values are treated as regular cells and stacked in the order they appear.
- **Errors**: If one of the input ranges contains a cell with an error, `VSTACK` will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NULL! | This error occurs when the ranges you are trying to stack have different number of columns. All ranges need to have the same number of columns for `VSTACK` to work correctly. |
| #VALUE! | This error typically occurs when one of the arguments or cells in the range of the `VSTACK` function is of a data type that is not supported. |
| #REF! | This error is returned when the formula refers to a cell that is not valid. This can happen if a cell has been deleted or moved. |

### Best practices

> - When using the `VSTACK` function, ensure that all the ranges or arrays you want to stack have the same number of columns. This is a common mistake that usually results in an error.
> - Avoid including cells with errors in the input ranges. If a cell with an error is included, the `VSTACK` function will return an error.
> - Be mindful of the order of the ranges you input into the `VSTACK` function. The ranges will be stacked in the order you input them.
> - If you want to ignore empty cells, consider using a filter function in combination with `VSTACK`.

### Usage

A few examples using the VSTACK function.

```
VSTACK(A1:A3,B1:B3) returns: A1  
A2  
A3  
B1  
B2  
B3  
VSTACK(A1:A3,'Text') returns: A1  
A2  
A3  
Text  
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
        "Quarter 1",
        "Quarter 2",
        "All Quarters"
    ],
    [
        100,
        150,
        "=VSTACK(A1:A4,B1:B4)"
    ],
    [
        120,
        180
    ],
    [
        110,
        160
    ],
    [
        130,
        170
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
        "Quarter 1",
        "Quarter 2",
        "All Quarters"
    ],
    [
        100,
        150,
        "=VSTACK(A1:A4,B1:B4)"
    ],
    [
        120,
        180
    ],
    [
        110,
        160
    ],
    [
        130,
        170
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
        "Quarter 1",
        "Quarter 2",
        "All Quarters"
    ],
    [
        100,
        150,
        "=VSTACK(A1:A4,B1:B4)"
    ],
    [
        120,
        180
    ],
    [
        110,
        160
    ],
    [
        130,
        170
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
        "Quarter 1",
        "Quarter 2",
        "All Quarters"
    ],
    [
        100,
        150,
        "=VSTACK(A1:A4,B1:B4)"
    ],
    [
        120,
        180
    ],
    [
        110,
        160
    ],
    [
        130,
        170
    ]
]
            }]
        });
    }
}
```

