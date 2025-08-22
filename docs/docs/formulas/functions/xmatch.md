title: XMATCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the XMATCH function in Jspreadsheet

# XMATCH function

`PRO`{.jtag}

The `XMATCH` function in Jspreadsheet Formulas Pro is a tool that helps you find a specific item within a group of cells. It scans through your selected range, looks for the item you've asked it to find, and then tells you where that item is located within that group. The location is given as the item's relative position, meaning it counts the number of cells from the start of the range to where your item is found. This function is very useful when you need to locate a specific data point within a large dataset.

## Documentation

Searches for a specified item in a range of cells, and returns the relative position of that item within the range.

### Category

Lookup and reference

### Syntax

XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value to search for. |
| `lookup_array` | The range to search in. |
| `[match_mode]` | Optional. Specifies how the function matches lookup_value with values in lookup_array. Can be either "0" (exact match) or "-1" (exact match or next smallest value). If omitted, it defaults to exact match. |
| `[search_mode]` | Optional. Specifies the search mode. Can be either "1" (search from the beginning of the range) or "-1" (search from the end of the range). If omitted, it defaults to searching from the beginning. |


### Behavior

The `XMATCH` function in a spreadsheet is used to search for a specific value in an array or range of cells. It returns the relative position of the item in the range.

- For text: `XMATCH` is not case-sensitive and treats both upper-case and lower-case text as the same.
- For numbers: `XMATCH` will match the exact values unless a match mode that allows for approximation is used.
- For booleans: `XMATCH` will match the exact boolean values (TRUE or FALSE).
- For errors: If the lookup value or the lookup array contains an error, `XMATCH` will return that error.
- For empty cells: If the lookup array contains an empty cell, `XMATCH` will not consider it a match unless the lookup value is also blank.

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A | This error occurs when the function cannot find a match for the lookup value. |
| #VALUE! | This error occurs when the given match mode or search mode is not one of the allowed values. |
| #REF! | This error occurs when the given lookup array is not valid. |

### Best practices

> - Use `XMATCH` when you want to locate the position of a lookup value in a row, column, or table.
> - Always ensure that the match mode and search mode are valid. An invalid entry will result in a #VALUE! error.
> - If your data set is not sorted in ascending order, do not use the 'exact match or next smaller item' or 'exact match or next larger item' match modes as this may give incorrect results.
> - If your lookup array contains duplicate values and you want the position of the first occurrence, use the 'first to last' search mode.

### Usage

A few examples using the XMATCH function.

```
XMATCH("cherry", ["apple","banana","cherry"]) returns: 3  
XMATCH(2, [1,2,3]) returns: 2  
XMATCH("green", ["red","yellow","green","blue"], -1) returns: 3  
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
        "Inventory",
        "Search Item",
        "Position"
    ],
    [
        "Laptop",
        25,
        "Tablet",
        "=XMATCH(C1,A:A)"
    ],
    [
        "Mouse",
        150,
        "",
        ""
    ],
    [
        "Tablet",
        75,
        "",
        ""
    ],
    [
        "Keyboard",
        200,
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
        "Product",
        "Inventory",
        "Search Item",
        "Position"
    ],
    [
        "Laptop",
        25,
        "Tablet",
        "=XMATCH(C1,A:A)"
    ],
    [
        "Mouse",
        150,
        "",
        ""
    ],
    [
        "Tablet",
        75,
        "",
        ""
    ],
    [
        "Keyboard",
        200,
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
        "Product",
        "Inventory",
        "Search Item",
        "Position"
    ],
    [
        "Laptop",
        25,
        "Tablet",
        "=XMATCH(C1,A:A)"
    ],
    [
        "Mouse",
        150,
        "",
        ""
    ],
    [
        "Tablet",
        75,
        "",
        ""
    ],
    [
        "Keyboard",
        200,
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
        "Product",
        "Inventory",
        "Search Item",
        "Position"
    ],
    [
        "Laptop",
        25,
        "Tablet",
        "=XMATCH(C1,A:A)"
    ],
    [
        "Mouse",
        150,
        "",
        ""
    ],
    [
        "Tablet",
        75,
        "",
        ""
    ],
    [
        "Keyboard",
        200,
        "",
        ""
    ]
]
            }]
        });
    }
}
```

