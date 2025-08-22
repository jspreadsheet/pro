title: COUNTBLANK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNTBLANK function in Jspreadsheet

# COUNTBLANK function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COUNTBLANK` function in Jspreadsheet Formulas Pro is a useful tool that helps you determine the number of empty cells within a given range. Simply put, it evaluates a selected area and returns the count of cells that contain no data. This can be particularly helpful when you need to know how many entries are missing in your dataset. It's an easy-to-use function that enhances your ability to manage and analyze your data effectively.

## Documentation

Counts the number of empty cells in a range.

### Category

Statistical

### Syntax

COUNTBLANK(range)

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of cells to count the empty cells. |


### Behavior

The `COUNTBLANK` function in spreadsheet is used to count the number of empty cells within a given range. This function is highly useful in data analysis where you need to identify the missing data. The different behaviors of `COUNTBLANK` function are:

- Empty Cells: `COUNTBLANK` will count all the empty cells in the specified range.
- Text: `COUNTBLANK` will not consider any cell containing text, even if the text is a blank space. It will treat such cells as non-empty.
- Numbers: Any cell with a number is considered non-empty by `COUNTBLANK`.
- Booleans: Cells containing Boolean values (`TRUE` or `FALSE`) are also treated as non-empty.
- Errors: Cells with error values (like `#REF!`, `#VALUE!`, etc.) are not considered as blank by `COUNTBLANK`.
- Formula: If a formula returns an empty string, `COUNTBLANK` will consider it as an empty cell.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs if the function is applied to a range that includes a cell with a non-numeric value. |
| `#REF!` | This error occurs if the cell reference is not valid. This usually happens when cells are deleted or moved. |
| `#NAME?` | This error occurs if the `COUNTBLANK` function is misspelled or omitted in the formula. |

### Best Practices

> - Always ensure that the range specified in the function does not include non-numeric values to avoid `#VALUE!` error.
> - Be careful while deleting or moving cells which are referred by the `COUNTBLANK` function, as it may result in a `#REF!` error.
> - It is recommended to check the range for any formulas that may return an empty string. Though `COUNTBLANK` considers these cells as empty, it might not be the intended behavior in certain cases.
> - Use `COUNTBLANK` to quickly find out the number of missing data points in your dataset. It can be a crucial step during data cleaning and pre-processing.

### Usage

A few examples using the COUNTBLANK function.

```
COUNTBLANK(A1:A10) returns the number of empty cells in A1 through A10  
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
        "Student",
        "Test Score",
        "Assignment"
    ],
    [
        "Alice",
        85,
        92
    ],
    [
        "Bob",
        "",
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        91,
        88
    ],
    [
        "",
        "=COUNTBLANK(B2:B5)",
        "=COUNTBLANK(C2:C5)"
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
        "Student",
        "Test Score",
        "Assignment"
    ],
    [
        "Alice",
        85,
        92
    ],
    [
        "Bob",
        "",
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        91,
        88
    ],
    [
        "",
        "=COUNTBLANK(B2:B5)",
        "=COUNTBLANK(C2:C5)"
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
        "Student",
        "Test Score",
        "Assignment"
    ],
    [
        "Alice",
        85,
        92
    ],
    [
        "Bob",
        "",
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        91,
        88
    ],
    [
        "",
        "=COUNTBLANK(B2:B5)",
        "=COUNTBLANK(C2:C5)"
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
        "Student",
        "Test Score",
        "Assignment"
    ],
    [
        "Alice",
        85,
        92
    ],
    [
        "Bob",
        "",
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        91,
        88
    ],
    [
        "",
        "=COUNTBLANK(B2:B5)",
        "=COUNTBLANK(C2:C5)"
    ]
]
            }]
        });
    }
}
```

