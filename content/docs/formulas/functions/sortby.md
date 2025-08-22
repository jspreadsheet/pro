title: SORTBY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SORTBY function in Jspreadsheet

# SORTBY function

`PRO`{.jtag}

The `SORTBY` function in Jspreadsheet Formulas Pro is a handy tool that allows you to arrange a range or array of data according to the values in a different range or array. This function works by comparing the values in the selected range or array to those in another, then rearranges the original data based on the order of the comparison data. This is particularly useful when you need to organize complex data sets, making it easier for you to analyze and understand the information.

## Documentation

Sorts a range or array based on the values in another range or array.

### Category

Lookup and reference

### Syntax

SORTBY(array, by_array1, [sort_order1], [by_array2, sort_order2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range or array of values to sort. |
| `by_array1` | The range or array of values by which to sort. |
| `sort_order1` | Optional. The order in which to sort the values in by_array1. 1 for ascending order, -1 for descending order. Default is 1. |
| `[by_arrayN, sort_orderN]` | Optional. Additional ranges or arrays of values by which to sort, followed by their corresponding sort orders. |


### Behavior

The `SORTBY` function in spreadsheets allows you to sort a range or array based on the values in a corresponding range or array. Here's how it handles different types of values:

- **Empty Cells:** Empty cells are usually sorted at the end of the range.
- **Text:** Text is sorted in alphabetical order.
- **Booleans:** Booleans are sorted with `FALSE` first, followed by `TRUE`.
- **Numbers:** Numbers are sorted in ascending or descending order based on the parameters provided.
- **Errors:** If an error occurs in one of the cells in the range, the `SORTBY` function will return an error. 

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A  | Occurs if the provided arrays don't have the same length.|
| #VALUE! | Occurs if the sort order argument isn't 1 (for ascending order) or -1 (for descending order). |
| #REF! | Occurs if the array contains a cell reference that's not valid.|

### Best Practices

> - Ensure that the arrays you're sorting by have the same length to avoid errors.
> - Be aware that `SORTBY` uses "natural" language sorting, so numbers may not sort as expected if they're stored as text.
> - Avoid using cell references that may become invalid (for example, references to cells in a column that might be deleted).
> - Remember that `SORTBY` only sorts the range or array you specify. If you want to maintain the association between values in different columns when sorting, include all relevant columns in the range or array you're sorting.

### Usage

A few examples using the SORTBY function.

```
SORTBY(A2:B6, B2:B6) sorts the range A2:B6 based on the values in column B, in ascending order  
SORTBY(D2:F7, E2:E7, -1, F2:F7, 1) sorts the range D2:F7 first by the values in column E in descending order, and then by the values in column F in ascending order  
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
        "Name",
        "Score",
        "Grade"
    ],
    [
        "Alice",
        85,
        "B"
    ],
    [
        "Bob",
        92,
        "A"
    ],
    [
        "Charlie",
        78,
        "C"
    ],
    [
        "Diana",
        88,
        "B"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score:",
        "",
        ""
    ],
    [
        "=SORTBY(A2:C5,B2:B5,-1)",
        "",
        ""
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
        "Name",
        "Score",
        "Grade"
    ],
    [
        "Alice",
        85,
        "B"
    ],
    [
        "Bob",
        92,
        "A"
    ],
    [
        "Charlie",
        78,
        "C"
    ],
    [
        "Diana",
        88,
        "B"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score:",
        "",
        ""
    ],
    [
        "=SORTBY(A2:C5,B2:B5,-1)",
        "",
        ""
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
        "Name",
        "Score",
        "Grade"
    ],
    [
        "Alice",
        85,
        "B"
    ],
    [
        "Bob",
        92,
        "A"
    ],
    [
        "Charlie",
        78,
        "C"
    ],
    [
        "Diana",
        88,
        "B"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score:",
        "",
        ""
    ],
    [
        "=SORTBY(A2:C5,B2:B5,-1)",
        "",
        ""
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
        "Name",
        "Score",
        "Grade"
    ],
    [
        "Alice",
        85,
        "B"
    ],
    [
        "Bob",
        92,
        "A"
    ],
    [
        "Charlie",
        78,
        "C"
    ],
    [
        "Diana",
        88,
        "B"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score:",
        "",
        ""
    ],
    [
        "=SORTBY(A2:C5,B2:B5,-1)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

