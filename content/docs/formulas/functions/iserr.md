title: ISERR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISERR function in Jspreadsheet

# ISERR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISERR` function in Jspreadsheet Formulas Pro is a tool used to identify if a particular value has an error, with the exception of the #N/A error. If the value does contain an error, it will return the result as TRUE. However, if there is no error or if the error is #N/A, it will return FALSE. This function is very useful for quickly identifying errors in your data or calculations.

## Documentation

Returns TRUE if a value is any error value except #N/A, and FALSE otherwise.

### Category

Information

### Syntax

ISERR(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value or reference to the cell that you want to test. |


### Behavior

The `ISERR` function in a spreadsheet is used to check if a certain cell has an error that is neither `#N/A` error. Therefore, it returns `TRUE` when the cell contains an error such as `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, `#NUM!`, or `#NULL!`. However, it returns `FALSE` for `#N/A` errors. Here is how it behaves with different data types:

- Empty Cells: For empty cells, the `ISERR` function returns `FALSE` because these are not considered as errors.
- Text: If a cell contains text, `ISERR` function returns `FALSE` unless the text forms an error value.
- Booleans: For cells containing Boolean values (`TRUE` or `FALSE`), `ISERR` function returns `FALSE` because these are not errors.
- Errors: The `ISERR` function returns `TRUE` for any error types except `#N/A` error. For `#N/A` error, it returns `FALSE`.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the value is not appropriate or compatible with the function. |
| #REF! | This error is produced when a cell reference is not valid. |
| #DIV/0! | This error occurs when a number is divided by zero. |
| #NAME? | This error is returned when the spreadsheet does not recognize text in the formula. |
| #NUM! | This error occurs when a formula or function contains numeric values that aren't valid. |
| #NULL! | This error is returned when you specify an intersection of two areas that do not intersect. |

### Best practices

> - Ensure that you have sufficient error handling in your formulae. Use `ISERR` to check if a cell contains an error that is not `#N/A`.
> - Don't use `ISERR` to trap `#N/A` errors, use `ISNA` function instead.
> - Be aware of the kind of errors your formula might return to use the `ISERR` function effectively.
> - Remember that `ISERR` function doesn't consider text, boolean values, or empty cells as errors. So, use it in scenarios where you expect possible formula errors.

### Usage

A few examples using the ISERR function.

```
ISERR(A1) returns TRUE if cell A1 contains any error value except #N/A  
ISERR(B2) returns TRUE if cell B2 contains a #DIV/0! error  
ISERR(C3+D3) returns FALSE if the formula in C3+D3 evaluates to an error value other than #N/A.  
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
        "Quantity",
        "Total",
        "Check ISERR"
    ],
    [
        "Widget A",
        10,
        5,
        "=B2*C2",
        "=ISERR(D2)"
    ],
    [
        "Widget B",
        15,
        0,
        "=B3/C3",
        "=ISERR(D3)"
    ],
    [
        "Widget C",
        "#VALUE!",
        3,
        "=B4*C4",
        "=ISERR(D4)"
    ],
    [
        "Widget D",
        20,
        "#N/A",
        "=B5*C5",
        "=ISERR(D5)"
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
        "Quantity",
        "Total",
        "Check ISERR"
    ],
    [
        "Widget A",
        10,
        5,
        "=B2*C2",
        "=ISERR(D2)"
    ],
    [
        "Widget B",
        15,
        0,
        "=B3/C3",
        "=ISERR(D3)"
    ],
    [
        "Widget C",
        "#VALUE!",
        3,
        "=B4*C4",
        "=ISERR(D4)"
    ],
    [
        "Widget D",
        20,
        "#N/A",
        "=B5*C5",
        "=ISERR(D5)"
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
        "Quantity",
        "Total",
        "Check ISERR"
    ],
    [
        "Widget A",
        10,
        5,
        "=B2*C2",
        "=ISERR(D2)"
    ],
    [
        "Widget B",
        15,
        0,
        "=B3/C3",
        "=ISERR(D3)"
    ],
    [
        "Widget C",
        "#VALUE!",
        3,
        "=B4*C4",
        "=ISERR(D4)"
    ],
    [
        "Widget D",
        20,
        "#N/A",
        "=B5*C5",
        "=ISERR(D5)"
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
        "Quantity",
        "Total",
        "Check ISERR"
    ],
    [
        "Widget A",
        10,
        5,
        "=B2*C2",
        "=ISERR(D2)"
    ],
    [
        "Widget B",
        15,
        0,
        "=B3/C3",
        "=ISERR(D3)"
    ],
    [
        "Widget C",
        "#VALUE!",
        3,
        "=B4*C4",
        "=ISERR(D4)"
    ],
    [
        "Widget D",
        20,
        "#N/A",
        "=B5*C5",
        "=ISERR(D5)"
    ]
]
            }]
        });
    }
}
```

