title: COUNTUNIQUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNTUNIQUE function in Jspreadsheet

# COUNTUNIQUE function

`PRO`{.jtag}

The `COUNTUNIQUE` function in Jspreadsheet Formulas Pro is a useful tool that helps you determine the number of unique entries within a specific range of cells. This means it will only count each distinct value once, regardless of how many times it appears in the selected cells. For instance, if you have a list of names with some duplicates, `COUNTUNIQUE` will provide you with the total number of different names. It's an efficient way to identify the diversity of data in your spreadsheet.

## Documentation

Returns the number of unique values in a range of cells.

### Category

Math and statistics

### Syntax

COUNTUNIQUE(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The first value or range to count unique values from. |
| `value` | Optional. Additional values or ranges to count unique values from. |


### Behavior

The `COUNTUNIQUE` function in spreadsheets is used to count the number of unique values in a list or range of cells. 

- Empty cells: `COUNTUNIQUE` ignores empty cells in the range or list of values. 

- Text: The function treats each unique text string as a unique value. 

- Booleans: `COUNTUNIQUE` counts `TRUE` and `FALSE` as unique values. 

- Errors: If any cell in the range or list of values contains an error, `COUNTUNIQUE` will return an error.

- Numbers: Each unique number is counted as a unique value.

- Date and Time: `COUNTUNIQUE` treats each unique date or time as a unique value.

### Common Errors

| Error | Description |
|---|---|
| #N/A | This error occurs if the range or list of values contains an error. |
| #VALUE! | This error occurs if the function is not properly formatted. |
| #REF! | This error occurs if the range or list of values refers to a cell that is not valid. |

### Best practices

> - When using the `COUNTUNIQUE` function, ensure that the range or list of values does not contain any errors to avoid the `#N/A` error.
> - The function does not count empty cells. If you want to include empty cells in your count, you will have to handle this separately.
> - Be aware that `COUNTUNIQUE` treats each unique text string, number, date, time, and boolean value as a unique value. If you have a range with the values `1, 1.0, and "1"`, `COUNTUNIQUE` will count them as three unique values.
> - To avoid getting the `#REF!` error, always ensure that your range refers to valid cells.

### Usage

A few examples using the COUNTUNIQUE function.

```
COUNTUNIQUE(1, 2, 3, 4, 5) returns 5  
COUNTUNIQUE(A2:A6) returns the number of unique values in cells A2 through A6  
COUNTUNIQUE(B2:B6, D2:D6) returns the number of unique values in both ranges B2 through B6 and D2 through D6  
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
        "Sales Rep",
        "Region"
    ],
    [
        "Laptop",
        "John",
        "North"
    ],
    [
        "Phone",
        "Sarah",
        "South"
    ],
    [
        "Laptop",
        "Mike",
        "North"
    ],
    [
        "Tablet",
        "John",
        "West"
    ],
    [
        "Phone",
        "Sarah",
        "North"
    ],
    [
        "=COUNTUNIQUE(A2:A6)",
        "=COUNTUNIQUE(B2:B6)",
        "=COUNTUNIQUE(C2:C6)"
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
        "Sales Rep",
        "Region"
    ],
    [
        "Laptop",
        "John",
        "North"
    ],
    [
        "Phone",
        "Sarah",
        "South"
    ],
    [
        "Laptop",
        "Mike",
        "North"
    ],
    [
        "Tablet",
        "John",
        "West"
    ],
    [
        "Phone",
        "Sarah",
        "North"
    ],
    [
        "=COUNTUNIQUE(A2:A6)",
        "=COUNTUNIQUE(B2:B6)",
        "=COUNTUNIQUE(C2:C6)"
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
        "Sales Rep",
        "Region"
    ],
    [
        "Laptop",
        "John",
        "North"
    ],
    [
        "Phone",
        "Sarah",
        "South"
    ],
    [
        "Laptop",
        "Mike",
        "North"
    ],
    [
        "Tablet",
        "John",
        "West"
    ],
    [
        "Phone",
        "Sarah",
        "North"
    ],
    [
        "=COUNTUNIQUE(A2:A6)",
        "=COUNTUNIQUE(B2:B6)",
        "=COUNTUNIQUE(C2:C6)"
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
        "Sales Rep",
        "Region"
    ],
    [
        "Laptop",
        "John",
        "North"
    ],
    [
        "Phone",
        "Sarah",
        "South"
    ],
    [
        "Laptop",
        "Mike",
        "North"
    ],
    [
        "Tablet",
        "John",
        "West"
    ],
    [
        "Phone",
        "Sarah",
        "North"
    ],
    [
        "=COUNTUNIQUE(A2:A6)",
        "=COUNTUNIQUE(B2:B6)",
        "=COUNTUNIQUE(C2:C6)"
    ]
]
            }]
        });
    }
}
```

