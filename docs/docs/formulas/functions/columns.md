title: COLUMNS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COLUMNS function in Jspreadsheet

# COLUMNS function

`PRO`{.jtag}

The `COLUMNS` function in Jspreadsheet Formulas Pro is a tool that provides the total number of columns within a selected range or array. For example, if you have a table of data and you want to know how many columns it contains, you would use this function. It's as simple as inputting the range of cells into the function, and it will return the count of columns. This is particularly useful in data analysis when you need to work with large datasets.

## Documentation

Returns the number of columns in a range or array.

### Category

Lookup and reference

### Syntax

COLUMNS(array)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range or array of cells for which you want to count the number of columns. |


### Behavior

The `COLUMNS` function in a spreadsheet is used to return the number of columns in a given cell range. It takes a range as an argument and outputs an integer representing the total number of columns within that range. Here's how it handles various scenarios:

- Empty Cells: If the range includes empty cells, these cells are still counted as columns by the `COLUMNS` function. It doesn't matter if the cell contains data or not, it will still be counted.

- Text: If the range includes cells with text, the `COLUMNS` function will still count these cells as columns. The type of data in the cells does not affect the function's output.

- Booleans: Like text and numbers, Boolean values (TRUE/FALSE) are also counted as columns by the `COLUMNS` function.

- Errors: If the range includes cells with errors, these cells are also counted as columns by the `COLUMNS` function. However, if the specified range is invalid or non-existent, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the argument provided to the `COLUMNS` function is not a valid range. |
| #REF! | This error happens when the range specified in the function refers to a location that is not valid. This could be a cell that doesn't exist, or a range that has been deleted or moved. |
| #NAME? | This error is encountered when the spreadsheet does not recognize the text in the formula. This could be due to a misspelling of the function name, like “COLUMS” instead of “COLUMNS”. |

### Best practices

> - Always ensure that the range you specify in the `COLUMNS` function is valid and exists in your spreadsheet. This will help you avoid errors.
> - The `COLUMNS` function only counts the number of columns, not the number of cells with data. So, if you need to count cells with data, consider using a different function.
> - When using `COLUMNS` function in a formula, remember that it returns the total number of columns in a range, not the column index. If you need the column index, you might need to adjust your formula.
> - Be aware that the `COLUMNS` function will count all columns in the range, including those with errors, text, or Boolean values. Make sure this is what you want before using the function.

### Usage

A few examples using the COLUMNS function.

```
COLUMNS(A1:D5) returns 4  
COLUMNS(A1:C1) returns 3  
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
        "Q1 Sales",
        "Q2 Sales",
        "Q3 Sales",
        "Q4 Sales"
    ],
    [
        1250,
        1380,
        1420,
        1680
    ],
    [
        980,
        1100,
        1250,
        1400
    ],
    [
        "Number of quarters:",
        "=COLUMNS(B1:E1)"
    ],
    [
        "Data range width:",
        "=COLUMNS(A1:E3)"
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
        "Q1 Sales",
        "Q2 Sales",
        "Q3 Sales",
        "Q4 Sales"
    ],
    [
        1250,
        1380,
        1420,
        1680
    ],
    [
        980,
        1100,
        1250,
        1400
    ],
    [
        "Number of quarters:",
        "=COLUMNS(B1:E1)"
    ],
    [
        "Data range width:",
        "=COLUMNS(A1:E3)"
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
        "Q1 Sales",
        "Q2 Sales",
        "Q3 Sales",
        "Q4 Sales"
    ],
    [
        1250,
        1380,
        1420,
        1680
    ],
    [
        980,
        1100,
        1250,
        1400
    ],
    [
        "Number of quarters:",
        "=COLUMNS(B1:E1)"
    ],
    [
        "Data range width:",
        "=COLUMNS(A1:E3)"
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
        "Q1 Sales",
        "Q2 Sales",
        "Q3 Sales",
        "Q4 Sales"
    ],
    [
        1250,
        1380,
        1420,
        1680
    ],
    [
        980,
        1100,
        1250,
        1400
    ],
    [
        "Number of quarters:",
        "=COLUMNS(B1:E1)"
    ],
    [
        "Data range width:",
        "=COLUMNS(A1:E3)"
    ]
]
            }]
        });
    }
}
```

