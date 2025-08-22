title: XLOOKUP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the XLOOKUP function in Jspreadsheet

# XLOOKUP function

`PRO`{.jtag}

The `XLOOKUP` function in Jspreadsheet Formulas Pro is a tool that helps you find specific values within a set range or an array. You provide it with a value to search for, and it will scan the specified range or array for that value. Then, `XLOOKUP` gives you the corresponding value from a different range or array that occupies the same position as the located value. This function is useful when you want to correlate data between different lists or tables.

## Documentation

Searches a range or an array for a specified value and returns a corresponding value in the same position from another range or array.

### Category

Lookup and reference

### Syntax

XLOOKUP(lookup_value, lookup_array, return_array, [match_mode], [search_mode])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value to search for. |
| `lookup_array` | The range or array to search. |
| `return_array` | The range or array to return a value from. |
| `match_mode` | Optional. Specifies how the function matches lookup_value with values in lookup_array. Can be either "0" (exact match) or "-1" (exact match or next smallest value). If omitted, it defaults to exact match. |
| `search_mode` | Optional. Specifies whether the function searches for an exact or approximate match. Can be either 0 (exact match) or 1 (approximate match). If omitted, it defaults to exact match. |


### Behavior

The `XLOOKUP` function in a spreadsheet is designed to return a value in a list or array, based on a matched value in a different list or array. Here are some of its behaviors:

- `XLOOKUP` can perform a lookup to the left or the right. This means it does not entirely depend on looking up data on the right of the lookup value.
- If the `lookup_value` is smaller than the smallest value in the `lookup_array`, `XLOOKUP` will return the `#N/A` error.
- If the `lookup_value` is larger than the largest value in the `lookup_array` and `match_mode` is set to 1, `XLOOKUP` will return the `#N/A` error.
- `XLOOKUP` is case-insensitive. It does not distinguish between lowercase and uppercase text.
- If an array is empty, `XLOOKUP` will return `#VALUE!` error.
- It treats both text and Boolean values as legitimate lookup values.
- If `lookup_value` is not found and `if_not_found` value is not specified, `XLOOKUP` will return `#N/A` error.
- `XLOOKUP` can return a single value or an array of values (horizontal or vertical).

### Common Errors

| Error | Description |
| --- | --- |
| `#N/A` | This error occurs when `XLOOKUP` cannot find the `lookup_value`. |
| `#VALUE!` | This error is returned when the `return_array` argument is shorter than the `lookup_array`. |
| `#NAME?` | This error occurs when the spreadsheet does not recognize the name of the function. This could be due to misspelling. |
| `#REF!` | This error is returned when the given cell reference is not valid. |

### Best practices

> - Always ensure that your `lookup_array` and `return_array` are of the same length to avoid `#VALUE!` errors.
> - Use absolute cell references when copying and pasting your `XLOOKUP` formula to other cells to keep the array references constant.
> - Specify the `if_not_found` parameter to handle instances where the `lookup_value` is not found in the `lookup_array`.
> - Use the `match_mode` argument to define how `XLOOKUP` matches the `lookup_value` with values in `lookup_array`. It determines whether an exact match is needed or a closest match is acceptable.

### Usage

A few examples using the XLOOKUP function.

```
XLOOKUP("apple", ["apple","banana","cherry"], [5, 10, 15]) returns 5  
XLOOKUP(2, [1,2,3], ["one","two","three"], -1) returns "two"  
XLOOKUP("green", ["red","yellow","green","blue"], ["roses","sunflowers","grass","ocean"], ,1) returns "grass"  
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
        "Product ID",
        "Product Name",
        "Price",
        "Lookup ID",
        "Found Product"
    ],
    [
        "P001",
        "Laptop",
        999,
        "P003",
        "=XLOOKUP(D2,A2:A4,B2:B4)"
    ],
    [
        "P002",
        "Mouse",
        25,
        "P001",
        "=XLOOKUP(D3,A2:A4,B2:B4)"
    ],
    [
        "P003",
        "Keyboard",
        75,
        "P002",
        "=XLOOKUP(D4,A2:A4,B2:B4)"
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
        "Product ID",
        "Product Name",
        "Price",
        "Lookup ID",
        "Found Product"
    ],
    [
        "P001",
        "Laptop",
        999,
        "P003",
        "=XLOOKUP(D2,A2:A4,B2:B4)"
    ],
    [
        "P002",
        "Mouse",
        25,
        "P001",
        "=XLOOKUP(D3,A2:A4,B2:B4)"
    ],
    [
        "P003",
        "Keyboard",
        75,
        "P002",
        "=XLOOKUP(D4,A2:A4,B2:B4)"
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
        "Product ID",
        "Product Name",
        "Price",
        "Lookup ID",
        "Found Product"
    ],
    [
        "P001",
        "Laptop",
        999,
        "P003",
        "=XLOOKUP(D2,A2:A4,B2:B4)"
    ],
    [
        "P002",
        "Mouse",
        25,
        "P001",
        "=XLOOKUP(D3,A2:A4,B2:B4)"
    ],
    [
        "P003",
        "Keyboard",
        75,
        "P002",
        "=XLOOKUP(D4,A2:A4,B2:B4)"
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
        "Product ID",
        "Product Name",
        "Price",
        "Lookup ID",
        "Found Product"
    ],
    [
        "P001",
        "Laptop",
        999,
        "P003",
        "=XLOOKUP(D2,A2:A4,B2:B4)"
    ],
    [
        "P002",
        "Mouse",
        25,
        "P001",
        "=XLOOKUP(D3,A2:A4,B2:B4)"
    ],
    [
        "P003",
        "Keyboard",
        75,
        "P002",
        "=XLOOKUP(D4,A2:A4,B2:B4)"
    ]
]
            }]
        });
    }
}
```

