title: COUNT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNT function in Jspreadsheet

# COUNT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COUNT` function in Jspreadsheet Formulas Pro is a useful tool that helps you determine the number of cells within a specified range that contain numerical values. This function scans through your selected range and only counts cells that have numbers, ignoring those with text, blank cells, or cells with non-numerical data. This can be especially useful in large datasets where manual counting would be time-consuming and prone to errors. By using the `COUNT` function, you can easily and accurately keep track of numerical data in your spreadsheets.

## Documentation

Counts the number of cells in a range that contain numbers.

### Category

Statistical

### Syntax

COUNT(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value or range of cells to count. |
| `valueN` | Optional. Additional values or ranges of cells to count. You can enter up to 255 arguments. |


### Behavior

The `COUNT` function in spreadsheet software is used to count the number of numerical data entries within a specified range. Here is how it behaves with different data types:

- **Empty Cells**: `COUNT` ignores empty cells and does not include them in the count.
- **Text**: `COUNT` does not count cells that contain text. This includes cells with numbers in quotes, which are considered text.
- **Booleans**: In most spreadsheet software, `COUNT` ignores Boolean values (TRUE/FALSE). However, in some versions, TRUE is counted as 1 and FALSE is not counted.
- **Errors**: If an error occurs in a cell within the range, `COUNT` will typically ignore it and not include it in the count.
- **Dates**: `COUNT` will count cells containing dates, as they are stored as numbers in spreadsheets.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the function is given the wrong type of argument, such as a string of text. |
| #REF! | This error is displayed when the function refers to an invalid cell reference. |
| #NAME? | This error occurs when the function name is misspelled or when the function is not supported in the spreadsheet software. |

### Best Practices

> - Always ensure that the range of cells you are counting primarily contains numeric data, as `COUNT` is designed to handle numbers. If you need to count cells with text, consider using `COUNTA`.
> - Check that your referenced cells or ranges are valid to avoid #REF! errors.
> - Be aware that `COUNT` includes cells with zero and negative numbers in the count.
> - If you need to count logical or error values, use `COUNTA` or `COUNTIF` as an alternative.

### Usage

A few examples using the COUNT function.

```
COUNT(A1:A10) returns the number of cells in A1 through A10 that contain numbers  
COUNT(A1, B1, C1, D1) returns the number of cells with numbers in cells A1, B1, C1, and D1  
COUNT(1, "text", TRUE, "", 5) returns 3  
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
        "Product A",
        25,
        30
    ],
    [
        "Product B",
        "N/A",
        45
    ],
    [
        "Product C",
        20,
        ""
    ],
    [
        "Total Numbers",
        "=COUNT(B1:C3)",
        "=COUNT(B1:B3)"
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
        "Product A",
        25,
        30
    ],
    [
        "Product B",
        "N/A",
        45
    ],
    [
        "Product C",
        20,
        ""
    ],
    [
        "Total Numbers",
        "=COUNT(B1:C3)",
        "=COUNT(B1:B3)"
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
        "Product A",
        25,
        30
    ],
    [
        "Product B",
        "N/A",
        45
    ],
    [
        "Product C",
        20,
        ""
    ],
    [
        "Total Numbers",
        "=COUNT(B1:C3)",
        "=COUNT(B1:B3)"
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
        "Product A",
        25,
        30
    ],
    [
        "Product B",
        "N/A",
        45
    ],
    [
        "Product C",
        20,
        ""
    ],
    [
        "Total Numbers",
        "=COUNT(B1:C3)",
        "=COUNT(B1:B3)"
    ]
]
            }]
        });
    }
}
```

