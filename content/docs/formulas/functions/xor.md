title: XOR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the XOR function in Jspreadsheet

# XOR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `XOR` function in Jspreadsheet Formulas Pro is used to carry out a logical exclusive OR operation on all its arguments. It checks two or more conditions and returns TRUE if exactly one condition is true, and FALSE otherwise. This means if both conditions are true or both conditions are false, it will return FALSE. This function is especially useful in situations where you need to verify that only one specific condition is met in your data set.

## Documentation

Returns a logical exclusive OR of all arguments.

### Category

Logical

### Syntax

XOR(logical1, [logical2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `logical` | A logical value or expression that can be evaluated as TRUE or FALSE. |
| `logicalN` | Optional. Additional logical values or expressions to evaluate. |


### Behavior

The `XOR` function in spreadsheets is a logical function used to return a TRUE value if the number of TRUE inputs is odd, and a FALSE value if the number of TRUE inputs is even. Here's how it handles different kinds of inputs:

- **Empty Cells**: Empty cells in the arguments are ignored by the `XOR` function.
- **Text**: If a text value is used as an argument, it is considered as a FALSE value.
- **Booleans**: `XOR` function expects logical values (TRUE or FALSE) as arguments. If Boolean values are provided, they are processed as intended.
- **Numbers**: Any numeric value other than zero is treated as TRUE. Zero is treated as FALSE.
- **Errors**: If any of the arguments are error values, the `XOR` function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the provided arguments are non-logical values. While `XOR` can handle numbers and text, other non-logical values will cause a #VALUE! error. |
| #N/A | This error is returned when no logical values are found in the given range. |

### Best practices

> - Use the `XOR` function when you need to check if an odd number of conditions are TRUE.
> - Always ensure that the arguments provided are either logical values (TRUE or FALSE), numbers (where 0 is FALSE and any other number is TRUE), or text (which is treated as FALSE). Providing other non-logical values will result in an error.
> - Be aware that `XOR` ignores empty cells. If you want empty cells to be treated as FALSE, you'll need to handle this in your formula.
> - When using ranges, ensure they contain logical values. If no logical values are found, the function will return an error.

### Usage

A few examples using the XOR function.

```
XOR(TRUE, FALSE) returns TRUE  
XOR(FALSE, FALSE, FALSE, TRUE) returns TRUE  
XOR(1>2, "a"="a", 3<4) returns FALSE  
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
        "Task 1",
        "Task 2",
        "Task 3",
        "Only One Complete?"
    ],
    [
        true,
        false,
        false,
        "=XOR(A2,B2,C2)"
    ],
    [
        false,
        true,
        false,
        "=XOR(A3,B3,C3)"
    ],
    [
        true,
        true,
        false,
        "=XOR(A4,B4,C4)"
    ],
    [
        false,
        false,
        false,
        "=XOR(A5,B5,C5)"
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
        "Task 1",
        "Task 2",
        "Task 3",
        "Only One Complete?"
    ],
    [
        true,
        false,
        false,
        "=XOR(A2,B2,C2)"
    ],
    [
        false,
        true,
        false,
        "=XOR(A3,B3,C3)"
    ],
    [
        true,
        true,
        false,
        "=XOR(A4,B4,C4)"
    ],
    [
        false,
        false,
        false,
        "=XOR(A5,B5,C5)"
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
        "Task 1",
        "Task 2",
        "Task 3",
        "Only One Complete?"
    ],
    [
        true,
        false,
        false,
        "=XOR(A2,B2,C2)"
    ],
    [
        false,
        true,
        false,
        "=XOR(A3,B3,C3)"
    ],
    [
        true,
        true,
        false,
        "=XOR(A4,B4,C4)"
    ],
    [
        false,
        false,
        false,
        "=XOR(A5,B5,C5)"
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
        "Task 1",
        "Task 2",
        "Task 3",
        "Only One Complete?"
    ],
    [
        true,
        false,
        false,
        "=XOR(A2,B2,C2)"
    ],
    [
        false,
        true,
        false,
        "=XOR(A3,B3,C3)"
    ],
    [
        true,
        true,
        false,
        "=XOR(A4,B4,C4)"
    ],
    [
        false,
        false,
        false,
        "=XOR(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

