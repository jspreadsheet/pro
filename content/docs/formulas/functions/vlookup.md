title: VLOOKUP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VLOOKUP function in Jspreadsheet

# VLOOKUP function

`PRO`{.jtag}

The `VLOOKUP` function in Jspreadsheet Formulas Pro is a highly useful tool for finding specific information in a table or a range of cells. It works by searching for a particular value in the first column of your selected range. Once it locates the value, it then fetches an associated piece of data from another column in the same row, which you can specify. Therefore, it enables you to quickly retrieve and use data from large datasets, making your data analysis tasks more efficient.

## Documentation

Searches for a value in the first column of a table or range of cells, and then returns a value in the same row from a column you specify.

### Category

Lookup and reference

### Syntax

VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value that you want to search for. The lookup_value argument can be a value (number, text, or logical value), or a cell reference to a number, text, or logical value. |
| `table_array` | The table of information in which data is looked up. Use a reference to a range or a range name. |
| `col_index_num` | The column number (starting with 1 for the left-most column of table_array) that contains the return value. In other words, the column number that VLOOKUP uses to find the return value. If Col_index_num is less than 1, a #VALUE! error is returned. If Col_index_num is greater than the number of columns in table_array, a #REF! error is returned. |
| `[range_lookup]` | Optional. A logical argument that specifies whether you want VLOOKUP to find an exact or approximate match. If range_lookup is either TRUE or is omitted, an approximate match is returned. If an exact match is not found, the next largest value that is less than lookup_value is returned. If range_lookup is FALSE, VLOOKUP will only find an exact match. If there are two or more values in the first column of table_array that match the lookup_value, the first value found is used. If an exact match is not found, the error value #N/A is returned. |


### Behavior

The `VLOOKUP` function in spreadsheets searches for a value in the left-most column of a table array and returns a value in the same row from a column you specify. Here's how it handles different data types:

- **Empty cells**: If the lookup value or table array contains an empty cell, `VLOOKUP` will continue to search until it finds a match. If no match is found, it returns a `#N/A` error.
- **Text**: `VLOOKUP` treats uppercase and lowercase text as the same. However, spaces before, after or within the text are significant.
- **Booleans**: `VLOOKUP` does not handle boolean values well. It is recommended to convert them to text or numerical values before using `VLOOKUP`.
- **Errors**: If the lookup value or the table array includes error values (like `#N/A`, `#VALUE!`, etc.), `VLOOKUP` will return that error.
- **Non-existing values**: If the function doesn't find the lookup value, it will return the `#N/A` error.
- **Sort Order**: For range_lookup value TRUE (approximate match), the first column in the table array must be sorted in ascending order, otherwise it may return incorrect values.

### Common Errors

| Error | Description |
| --- | --- |
| `#N/A` | The `VLOOKUP` function returns this error when it cannot find the lookup value in the first column of the table array. |
| `#REF!` | This error occurs when the col_index_num is less than 1, or greater than the number of columns in the table array. |
| `#VALUE!` | This error is returned if the first argument (the value to look up) is missing. |
| `#NAME?` | This error appears when the spreadsheet does not recognize text in the formula. For example, if you misspell `VLOOKUP` or omit necessary punctuation, you'll see this error. |

### Best practices

> - When using the `VLOOKUP` function, always use absolute references for the table array.
> - Avoid using the `VLOOKUP` function with very large datasets as it can slow down your spreadsheet's performance.
> - If the first column of the table array is not in ascending order, make sure you use FALSE for the range_lookup value to ensure correct results.
> - Always double-check the col_index_num you have specified to ensure it's the correct column you want data from.

### Usage

A few examples using the VLOOKUP function.

```
VLOOKUP("apples", A1:B10, 2, FALSE)  
VLOOKUP(5, A1:B10, 2, TRUE)  
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
        "Lookup Product",
        "Found Price"
    ],
    [
        "Apples",
        2.5,
        "Bananas",
        "=VLOOKUP(C2,A:B,2,FALSE)"
    ],
    [
        "Bananas",
        1.75
    ],
    [
        "Oranges",
        3.25
    ],
    [
        "Grapes",
        4.0
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
            "Lookup Product",
            "Found Price"
        ],
        [
            "Apples",
            2.5,
            "Bananas",
            "=VLOOKUP(C2,A:B,2,FALSE)"
        ],
        [
            "Bananas",
            1.75
        ],
        [
            "Oranges",
            3.25
        ],
        [
            "Grapes",
            4.0
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
                "Lookup Product",
                "Found Price"
            ],
            [
                "Apples",
                2.5,
                "Bananas",
                "=VLOOKUP(C2,A:B,2,FALSE)"
            ],
            [
                "Bananas",
                1.75
            ],
            [
                "Oranges",
                3.25
            ],
            [
                "Grapes",
                4.0
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
                        "Lookup Product",
                        "Found Price"
                    ],
                    [
                        "Apples",
                        2.5,
                        "Bananas",
                        "=VLOOKUP(C2,A:B,2,FALSE)"
                    ],
                    [
                        "Bananas",
                        1.75
                    ],
                    [
                        "Oranges",
                        3.25
                    ],
                    [
                        "Grapes",
                        4.0
                    ]
                ]
            }]
        });
    }
}
```

