title: ISNUMBER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISNUMBER function in Jspreadsheet

# ISNUMBER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISNUMBER` function in Jspreadsheet Formulas Pro is a tool that allows you to verify whether a certain value is a number. If the value you're checking is indeed a number, this function will give you a result of TRUE. However, if the value is not a number, it will return FALSE. This is a useful function when you need to ensure that specific data in your spreadsheet is numerical.

## Documentation

Checks if a given value is a number and returns TRUE if the value is a number, and FALSE otherwise.

### Category

Information

### Syntax

ISNUMBER(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior

The `ISNUMBER` function in spreadsheets checks if a cell contains a number, and returns `TRUE` if it does, and `FALSE` if it doesn't. Here's how it handles different data types:

1. **Empty cells**: If the cell is empty, `ISNUMBER` returns `FALSE`.
2. **Text**: If the cell contains text, `ISNUMBER` returns `FALSE`.
3. **Booleans**: If the cell contains a boolean value (`TRUE` or `FALSE`), `ISNUMBER` returns `FALSE`.
4. **Errors**: If the cell contains an error, `ISNUMBER` returns `FALSE`.
5. **Numbers**: If the cell contains a number, `ISNUMBER` returns `TRUE`.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | If the function argument is a text value that cannot be interpreted as a number, `ISNUMBER` returns `#VALUE!` error. |
| `#NUM!` | If the argument to `ISNUMBER` is outside of the numeric range that Google Sheets can handle, it returns `#NUM!` error. |
| `#REF!` | If the cell reference provided is not valid, `ISNUMBER` returns a `#REF!` error. |

### Best practices

> - Use `ISNUMBER` to validate data and ensure that the data entered is numeric.
> - `ISNUMBER` can be combined with `IF` to provide outputs based on whether a cell contains a number or not.
> - Avoid referring to cells that might contain text, as it may result in `#VALUE!` errors.
> - Remember that `ISNUMBER` treats boolean values and errors as non-numeric.

### Usage

A few examples using the ISNUMBER function.

```
ISNUMBER(123) returns TRUE because 123 is a number  
ISNUMBER("banana") returns FALSE because "banana" is not a number  
ISNUMBER(A1) returns TRUE if cell A1 contains a numerical value, and FALSE otherwise.  
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
        "Price",
        "Is Number?"
    ],
    [
        12345,
        29.99,
        "=ISNUMBER(B2)"
    ],
    [
        "ABC123",
        45.5,
        "=ISNUMBER(B3)"
    ],
    [
        67890,
        "N/A",
        "=ISNUMBER(B4)"
    ],
    [
        "XYZ789",
        "Free",
        "=ISNUMBER(B5)"
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
        "Price",
        "Is Number?"
    ],
    [
        12345,
        29.99,
        "=ISNUMBER(B2)"
    ],
    [
        "ABC123",
        45.5,
        "=ISNUMBER(B3)"
    ],
    [
        67890,
        "N/A",
        "=ISNUMBER(B4)"
    ],
    [
        "XYZ789",
        "Free",
        "=ISNUMBER(B5)"
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
        "Price",
        "Is Number?"
    ],
    [
        12345,
        29.99,
        "=ISNUMBER(B2)"
    ],
    [
        "ABC123",
        45.5,
        "=ISNUMBER(B3)"
    ],
    [
        67890,
        "N/A",
        "=ISNUMBER(B4)"
    ],
    [
        "XYZ789",
        "Free",
        "=ISNUMBER(B5)"
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
        "Price",
        "Is Number?"
    ],
    [
        12345,
        29.99,
        "=ISNUMBER(B2)"
    ],
    [
        "ABC123",
        45.5,
        "=ISNUMBER(B3)"
    ],
    [
        67890,
        "N/A",
        "=ISNUMBER(B4)"
    ],
    [
        "XYZ789",
        "Free",
        "=ISNUMBER(B5)"
    ]
]
            }]
        });
    }
}
```

