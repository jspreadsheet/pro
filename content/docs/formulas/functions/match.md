title: MATCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MATCH function in Jspreadsheet

# MATCH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MATCH` function in Jspreadsheet Formulas Pro is a handy tool that allows you to locate a specific value within a selected group of cells. When you use this function, it scans through your chosen range and identifies where the value you're looking for is located. The output of this function is the relative position, or the 'address', of the sought-after value within the selected range. This is incredibly useful for pinpointing and tracking data within larger datasets.

## Documentation

Searches for a specified value in a range of cells, and returns the relative position of that value within the range.

### Category

Lookup and reference

### Syntax

MATCH(lookup_value, lookup_array, [match_type])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value that you want to match in the lookup_array. The lookup_value can be a number, text, logical value, or a reference to a cell containing any of these. |
| `lookup_array` | The range of cells that you want to search for the lookup_value. The lookup_array must be one row or one column. |
| `match_type` | Optional. A number that specifies how Excel matches the lookup_value with values in the lookup_array. 1 = finds the largest value that is less than or equal to lookup_value (default), 0 = finds the first value that is exactly equal to lookup_value, -1 = finds the smallest value that is greater than or equal to lookup_value. |


### Behavior

The `MATCH` function in a spreadsheet is used to search for a specified item in a range of cells and then return the relative position of that item in the range. 

- If the specified item is found more than once, the `MATCH` function will return the position of the first occurrence.
- Empty cells are considered as blanks or zero when performing a match. 
- Text is handled as a string and the function will return the position of the exact match of the string.
- Boolean values `TRUE` and `FALSE` are treated just like any other value, and the function will return their position if they are found in the range.
- If the function encounters an error value in a reference, it returns that error value.
- If the specified item is not found, the function will return `#N/A` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#N/A` | This error occurs when the `MATCH` function does not find the specified item in the given range. |
| `#VALUE!` | This error occurs when the wrong type of argument or operand is used. |
| `#REF!` | This error occurs when the given cell reference is not valid. |

### Best practices

> - Always ensure that the range provided in the `MATCH` function is correct and the specified item exists in the range to avoid the `#N/A` error.
> - Use absolute cell references in your `MATCH` function to keep your cell reference constant when copying it across multiple cells.
> - If you're using `MATCH` in a large range of cells, ensure the data is sorted to optimize the function's performance.
> - Be aware that `MATCH` is case-insensitive, meaning it does not differentiate between uppercase and lowercase text.

### Usage

A few examples using the MATCH function.

```
MATCH("apple", A1:A10, 0) searches for the exact text string "apple" in the range A1:A10 and returns the relative position of the first cell in which the text string was found  
MATCH(50, A1:A10) searches for the largest value in the range A1:A10 that is less than or equal to 50 and returns the relative position of the cell containing that value  
MATCH(TRUE, A1:A10) searches for the first logical value TRUE in the range A1:A10 and returns the relative position of the cell containing that value.  
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
        "Price",
        "Position"
    ],
    [
        "apple",
        2.5,
        "=MATCH(\"apple\",A2:A6,0)"
    ],
    [
        "banana",
        1.25
    ],
    [
        "orange",
        3.0
    ],
    [
        "grape",
        4.5
    ],
    [
        "apple",
        2.75
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
        "Price",
        "Position"
    ],
    [
        "apple",
        2.5,
        "=MATCH(\"apple\",A2:A6,0)"
    ],
    [
        "banana",
        1.25
    ],
    [
        "orange",
        3.0
    ],
    [
        "grape",
        4.5
    ],
    [
        "apple",
        2.75
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
        "Price",
        "Position"
    ],
    [
        "apple",
        2.5,
        "=MATCH(\"apple\",A2:A6,0)"
    ],
    [
        "banana",
        1.25
    ],
    [
        "orange",
        3.0
    ],
    [
        "grape",
        4.5
    ],
    [
        "apple",
        2.75
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
        "Price",
        "Position"
    ],
    [
        "apple",
        2.5,
        "=MATCH(\"apple\",A2:A6,0)"
    ],
    [
        "banana",
        1.25
    ],
    [
        "orange",
        3.0
    ],
    [
        "grape",
        4.5
    ],
    [
        "apple",
        2.75
    ]
]
            }]
        });
    }
}
```

