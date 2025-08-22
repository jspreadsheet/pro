title: ISERROR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISERROR function in Jspreadsheet

# ISERROR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISERROR` function in Jspreadsheet Formulas Pro is a useful tool that can check if a certain value results in any kind of error. If the value you're examining does indeed cause an error, the function will return TRUE. Conversely, if the value does not cause an error, the function will return FALSE. This can be particularly helpful when you are working with large datasets and need to quickly identify potential issues.

## Documentation

Returns TRUE if a value is any error value, and FALSE otherwise.

### Category

Information

### Syntax

ISERROR(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value or reference to the cell that you want to test. |


### Behavior

The `ISERROR` function in spreadsheets tests whether a particular cell or a range of cells contain an error. If an error is detected, the function returns `TRUE`; otherwise, it returns `FALSE`. 

- **Empty Cells**: If the `ISERROR` function is targeted at an empty cell, it will return `FALSE` because an empty cell is not considered an error.
- **Text**: When the function is used on a cell containing text, it will return `FALSE` unless the text itself is causing an error in a formula or function.
- **Booleans**: The `ISERROR` function returns `FALSE` for cells containing boolean values (`TRUE` or `FALSE`), as they are not considered errors.
- **Errors**: If a cell contains any error (like `#N/A`, `#VALUE!`, `#REF!`, `#DIV/0!`, `#NUM!`, `#NAME?`, or `#NULL!`), the `ISERROR` function will return `TRUE`.
- **Numbers**: For cells containing numerical values, the `ISERROR` function returns `FALSE` as numbers are not considered errors.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error appears when a value is not available to a formula or function. |
| #VALUE! | It occurs when the wrong type of argument or operand is used. |
| #REF! | This error is displayed when a formula contains an invalid cell reference. |
| #DIV/0! | This error is shown when a number is divided by zero. |
| #NUM! | It appears when a problem with a number in a formula or function is detected. |
| #NAME? | This error is displayed when Excel does not recognize text in a formula. |
| #NULL! | It occurs when you specify an intersection of two areas that do not intersect. |

### Best practices

> - It is recommended to use `ISERROR` with `IF` to handle errors in a more sophisticated way. For example, you can return a custom message or a specific value when an error is found.
> - `ISERROR` can be used to troubleshoot complex formulas. By applying it to different parts of your formula, you can identify which part is causing the error.
> - Be cautious when using `ISERROR` to ignore all errors, as it might hide an unexpected error that needs to be addressed.
> - Use the `IFERROR` function instead of `ISERROR` if you just want to return a different value when an error is detected, as it simplifies the formula.

### Usage

A few examples using the ISERROR function.

```
ISERROR(A1) returns TRUE if cell A1 contains any error value, including #N/A  
ISERROR(B2) returns TRUE if cell B2 contains a #VALUE! error  
ISERROR(C3+D3) returns TRUE if the formula in C3+D3 evaluates to an error value.  
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
        "Discount",
        "Final Price",
        "Error Check"
    ],
    [
        "Laptop",
        1000,
        0.1,
        "=B2*(1-C2)",
        "=ISERROR(D2)"
    ],
    [
        "Phone",
        "invalid",
        0.2,
        "=B3*(1-C3)",
        "=ISERROR(D3)"
    ],
    [
        "Tablet",
        500,
        0.15,
        "=B4*(1-C4)",
        "=ISERROR(D4)"
    ],
    [
        "Monitor",
        300,
        "#N/A",
        "=B5*(1-C5)",
        "=ISERROR(D5)"
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
        "Discount",
        "Final Price",
        "Error Check"
    ],
    [
        "Laptop",
        1000,
        0.1,
        "=B2*(1-C2)",
        "=ISERROR(D2)"
    ],
    [
        "Phone",
        "invalid",
        0.2,
        "=B3*(1-C3)",
        "=ISERROR(D3)"
    ],
    [
        "Tablet",
        500,
        0.15,
        "=B4*(1-C4)",
        "=ISERROR(D4)"
    ],
    [
        "Monitor",
        300,
        "#N/A",
        "=B5*(1-C5)",
        "=ISERROR(D5)"
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
        "Discount",
        "Final Price",
        "Error Check"
    ],
    [
        "Laptop",
        1000,
        0.1,
        "=B2*(1-C2)",
        "=ISERROR(D2)"
    ],
    [
        "Phone",
        "invalid",
        0.2,
        "=B3*(1-C3)",
        "=ISERROR(D3)"
    ],
    [
        "Tablet",
        500,
        0.15,
        "=B4*(1-C4)",
        "=ISERROR(D4)"
    ],
    [
        "Monitor",
        300,
        "#N/A",
        "=B5*(1-C5)",
        "=ISERROR(D5)"
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
        "Discount",
        "Final Price",
        "Error Check"
    ],
    [
        "Laptop",
        1000,
        0.1,
        "=B2*(1-C2)",
        "=ISERROR(D2)"
    ],
    [
        "Phone",
        "invalid",
        0.2,
        "=B3*(1-C3)",
        "=ISERROR(D3)"
    ],
    [
        "Tablet",
        500,
        0.15,
        "=B4*(1-C4)",
        "=ISERROR(D4)"
    ],
    [
        "Monitor",
        300,
        "#N/A",
        "=B5*(1-C5)",
        "=ISERROR(D5)"
    ]
]
            }]
        });
    }
}
```

