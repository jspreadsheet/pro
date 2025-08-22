title: ISEVEN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISEVEN function in Jspreadsheet

# ISEVEN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISEVEN` function in Jspreadsheet Formulas Pro is a simple tool that allows you to determine if a number is even. When you input a number into this function, it will analyze it and return a value of TRUE if the number is even. Conversely, if the number is odd, the function will return a FALSE value. This can be useful when sorting data or performing calculations that require knowledge of whether a number is even or odd.

## Documentation

Checks if a given number is even and returns TRUE if the number is even, and FALSE otherwise.

### Category

Information

### Syntax

ISEVEN(num)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number that you want to test. |


### Behavior

The 'ISEVEN' function in spreadsheets checks if a given number is even or not. It returns 'TRUE' if the number is even, and 'FALSE' if it is odd. Here's how it behaves with different inputs:

- **Numbers**: The function works as expected with numeric inputs. For example, `ISEVEN(2)` would return `TRUE`, while `ISEVEN(3)` would return `FALSE`.
- **Empty cells**: If the reference cell is empty, the function will return `#VALUE!` error.
- **Text**: If the input is a text, the function will return `#VALUE!` error.
- **Booleans**: If the input is a Boolean value, it'll be interpreted as `1` for `TRUE` and `0` for `FALSE` and then checked for evenness.
- **Errors**: If the reference cell has an error, the 'ISEVEN' function will also return that same error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input or the reference cell is not a number or is empty. |
| #REF! | This error is returned when the input is a reference that doesn't point to a cell or an array. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name or there are typographical errors in the function name. |

### Best practices

> - Always ensure that the input or the reference cell contains a numeric value to avoid `#VALUE!` errors.
> - Be aware that 'ISEVEN' interprets Boolean values as `1` for `TRUE` and `0` for `FALSE`. If you want to check the evenness of the actual Boolean value, convert them to numbers first.
> - While using cell references as an argument for 'ISEVEN', ensure that the referenced cell is not prone to errors or empty, as 'ISEVEN' will propagate the same error.
> - 'ISEVEN' function only considers the integer part of the number to determine its evenness. So, numbers like 2.1 or 2.9 are still considered even.

### Usage

A few examples using the ISEVEN function.

```
ISEVEN(2) returns TRUE because 2 is even  
ISEVEN(-4) returns TRUE because -4 is even  
ISEVEN(B3) returns TRUE if cell B3 contains an even number.  
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
        "Number",
        "Is Even?"
    ],
    [
        7,
        "=ISEVEN(A2)"
    ],
    [
        12,
        "=ISEVEN(A3)"
    ],
    [
        -3,
        "=ISEVEN(A4)"
    ],
    [
        20,
        "=ISEVEN(A5)"
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
        "Number",
        "Is Even?"
    ],
    [
        7,
        "=ISEVEN(A2)"
    ],
    [
        12,
        "=ISEVEN(A3)"
    ],
    [
        -3,
        "=ISEVEN(A4)"
    ],
    [
        20,
        "=ISEVEN(A5)"
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
        "Number",
        "Is Even?"
    ],
    [
        7,
        "=ISEVEN(A2)"
    ],
    [
        12,
        "=ISEVEN(A3)"
    ],
    [
        -3,
        "=ISEVEN(A4)"
    ],
    [
        20,
        "=ISEVEN(A5)"
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
        "Number",
        "Is Even?"
    ],
    [
        7,
        "=ISEVEN(A2)"
    ],
    [
        12,
        "=ISEVEN(A3)"
    ],
    [
        -3,
        "=ISEVEN(A4)"
    ],
    [
        20,
        "=ISEVEN(A5)"
    ]
]
            }]
        });
    }
}
```

