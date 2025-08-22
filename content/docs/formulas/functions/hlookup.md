title: HLOOKUP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HLOOKUP function in Jspreadsheet

# HLOOKUP function

`PRO`{.jtag}

The `HLOOKUP` function in Jspreadsheet Formulas Pro is a powerful tool that lets you find specific data in your spreadsheet. It works by searching for a specific value in the top row of a table or an array of values. Once it locates this value, it then brings back another value from the same column, but from a different row that you have specified. This function is particularly useful when you're dealing with large data sets and need to quickly find and return related information.

## Documentation

Searches for a value in the top row of a table or an array of values, and then returns a value in the same column from a row you specify.

### Category

Lookup and reference

### Syntax

HLOOKUP(lookup_value,table_array,row_index_num,[range_lookup])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value to search for in the first row of the table. Lookup_value can be a value or a reference. |
| `table_array` | The table of information that HLOOKUP searches. Use a reference to a range or a range name. |
| `row_index_num` | The row number within table_array from which to return a value. Row_index_num must be a positive integer. |
| `range_lookup` | Optional. A logical value that specifies whether you want HLOOKUP to find an exact match or an approximate match. If range_lookup is TRUE or omitted, an approximate match is returned. In other words, if an exact match is not found, the next largest value that is less than lookup_value is returned. If range_lookup is FALSE, HLOOKUP will only find an exact match. If one is not found, the function returns #N/A. |


### Behavior

The `HLOOKUP` function in spreadsheet is designed to perform a horizontal lookup by searching for a key in the top row of a table, and then returning the value of the indicated cell in the same column. Here are how it handles certain scenarios:

- **Empty Cells**: If the `HLOOKUP` function is used on a range containing empty cells, the function will treat these as zero if a numeric value is expected, or as an empty string if a text value is expected.
- **Text**: The `HLOOKUP` function is case-insensitive, so it treats lowercase and uppercase text as the same.
- **Booleans**: The `HLOOKUP` function can handle Boolean values. If the lookup value is either TRUE or FALSE, `HLOOKUP` will match the Boolean in the table array.
- **Errors**: If `HLOOKUP` cannot find the lookup value, it will return the `#N/A` error. If the provided row index is less than 1, it will return the `#VALUE!` error. If the row index is greater than the number of rows in the table array, it will return the `#REF!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#N/A` | This error occurs when the `HLOOKUP` function cannot find the lookup value. |
| `#VALUE!` | This error is returned when the provided row index is less than 1. |
| `#REF!` | This error is returned when the row index provided is greater than the number of rows in the table array. |

### Best practices

> - Always make sure that your lookup value exists in the top row of your table array to avoid `#N/A` errors.
> - It's generally safer to use `HLOOKUP` with sorted data and an approximate match (`range_lookup` set to TRUE), as this can help to avoid unexpected results.
> - If you are using `HLOOKUP` with unsorted data, make sure to set `range_lookup` to FALSE to ensure an exact match.
> - Remember that `HLOOKUP` is case-insensitive. If case matters, consider using a different function or method.

### Usage

A few examples using the HLOOKUP function.

```
HLOOKUP("B",A1:D4,3)  
HLOOKUP("C",A1:D4,2,FALSE)  
HLOOKUP(45,A1:D4,4)  
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Revenue",
        25000,
        28000,
        32000,
        35000
    ],
    [
        "Expenses",
        18000,
        19500,
        21000,
        22500
    ],
    [
        "Profit",
        7000,
        8500,
        11000,
        12500
    ],
    [
        "Q2 Revenue:",
        "=HLOOKUP(\"Q2\",A1:E4,2,FALSE)"
    ],
    [
        "Q3 Profit:",
        "=HLOOKUP(\"Q3\",A1:E4,4,FALSE)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Revenue",
        25000,
        28000,
        32000,
        35000
    ],
    [
        "Expenses",
        18000,
        19500,
        21000,
        22500
    ],
    [
        "Profit",
        7000,
        8500,
        11000,
        12500
    ],
    [
        "Q2 Revenue:",
        "=HLOOKUP(\"Q2\",A1:E4,2,FALSE)"
    ],
    [
        "Q3 Profit:",
        "=HLOOKUP(\"Q3\",A1:E4,4,FALSE)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Revenue",
        25000,
        28000,
        32000,
        35000
    ],
    [
        "Expenses",
        18000,
        19500,
        21000,
        22500
    ],
    [
        "Profit",
        7000,
        8500,
        11000,
        12500
    ],
    [
        "Q2 Revenue:",
        "=HLOOKUP(\"Q2\",A1:E4,2,FALSE)"
    ],
    [
        "Q3 Profit:",
        "=HLOOKUP(\"Q3\",A1:E4,4,FALSE)"
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Revenue",
        25000,
        28000,
        32000,
        35000
    ],
    [
        "Expenses",
        18000,
        19500,
        21000,
        22500
    ],
    [
        "Profit",
        7000,
        8500,
        11000,
        12500
    ],
    [
        "Q2 Revenue:",
        "=HLOOKUP(\"Q2\",A1:E4,2,FALSE)"
    ],
    [
        "Q3 Profit:",
        "=HLOOKUP(\"Q3\",A1:E4,4,FALSE)"
    ]
]
            }]
        });
    }
}
```

