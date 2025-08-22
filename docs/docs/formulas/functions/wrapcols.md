title: WRAPCOLS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WRAPCOLS function in Jspreadsheet

# WRAPCOLS function



The `WRAPCOLS` function in Jspreadsheet Formulas Pro is a handy tool that modifies the text formatting in a specific cell. Essentially, it allows you to dictate how many columns the text in a cell should span across. This means if you specify a certain number of columns, the cell text will automatically adjust to fit within those columns. This is especially useful when working with long strings of text or when you want to keep your spreadsheet looking organized and easy to read.

## Documentation

Wraps the text in a cell based on the number of columns specified.

### Category

Look and reference

### Syntax

WRAPCOLS(vector, wrap_count, [pad_with])

| Parameter | Description |
| ----------- | ------------- |
| `vector` | The vector to wrap. |
| `wrap_count` | The number of values per column. Must be greater than 0. |
| `[pad_with]` | Optional. A value to pad the last column when wrapping. If not specified, the last column remains unaltered. |


### Behavior

The `WRAPCOLS` function in spreadsheets wraps columns in a specified range. It's primary use is to make data more readable and organized in a spreadsheet. 

- Empty Cells: If the cells in the range are empty, `WRAPCOLS` will not have any visible effect.
- Text: `WRAPCOLS` wraps text columns, allowing them to appear in multiple lines within a cell, which can improve readability.
- Booleans: The function can wrap columns containing boolean values, but the effect isn't very noticeable unless the cell also contains text.
- Errors: If there are any errors in the range of cells, those cells will be ignored by the `WRAPCOLS` function and won't be wrapped.

### Common Errors

| Error | Description |
|-------|-------------|
| #REF! | This error occurs if the specified range is invalid or does not exist. |
| #VALUE! | This error occurs if the specified range contains non-numeric or non-string values. |
| #NAME? | This error occurs if the function name is misspelled or does not exist. |

### Best Practices

> - Always specify a valid range for the `WRAPCOLS` function. An invalid range will result in a #REF! error.
> - Use `WRAPCOLS` to improve readability of data, especially when dealing with long strings of text in a cell.
> - Be aware that `WRAPCOLS` will not wrap cells with errors. Fix any errors in your range before applying the function.
> - `WRAPCOLS` does not trim spaces. If you want to remove extra spaces before or after your text, use the `TRIM` function first.

### Usage

A few examples using the WRAPCOLS function.

```
WRAPCOLS([1, 2, 3, 4, 5, 6], 2) returns [[1, 2], [3, 4], [5, 6]]  
WRAPCOLS(['A', 'B', 'C', 'D'], 3, 'X') returns [['A', 'B', 'C'], ['D', 'X', 'X']]  
WRAPCOLS([4, 5, 6, 7, 8], 4) returns [[4, 5, 6, 7], [8]]  
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Items",
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig"
    ],
    [
        "Wrapped",
        "=WRAPCOLS(B2:G2,3)"
    ],
    [
        "Count",
        6
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Items",
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig"
    ],
    [
        "Wrapped",
        "=WRAPCOLS(B2:G2,3)"
    ],
    [
        "Count",
        6
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Items",
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig"
    ],
    [
        "Wrapped",
        "=WRAPCOLS(B2:G2,3)"
    ],
    [
        "Count",
        6
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
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    [
        "Items",
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig"
    ],
    [
        "Wrapped",
        "=WRAPCOLS(B2:G2,3)"
    ],
    [
        "Count",
        6
    ]
]
            }]
        });
    }
}
```

