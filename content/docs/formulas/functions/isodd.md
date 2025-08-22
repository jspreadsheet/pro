title: ISODD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISODD function in Jspreadsheet

# ISODD function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISODD` function in Jspreadsheet Formulas Pro is a handy tool that helps you determine if a number is odd. When you input a number into this function, it will evaluate it and return TRUE if the number is odd. However, if the number is even, the function will return FALSE. This can be particularly useful for sorting or filtering data based on whether values are odd or even.

## Documentation

Checks if a given number is odd and returns TRUE if the number is odd, and FALSE otherwise.

### Category

Information

### Syntax

ISODD(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number that you want to test. |


### Behavior

The `ISODD` function in a spreadsheet checks whether a given number is odd or not. It returns `TRUE` if the number is odd and `FALSE` if it is even.

- If the cell is empty, `ISODD` will return `#VALUE!` error.
- If the cell contains text, `ISODD` will return `#VALUE!` error.
- If the cell contains a boolean (TRUE or FALSE), `ISODD` will treat TRUE as 1 and FALSE as 0, thus returning `TRUE` for TRUE and `FALSE` for FALSE.
- If the cell contains a non-integer numerical value, `ISODD` will truncate the decimal portion and consider only the integer portion.
- If the cell contains an error, `ISODD` will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed if the input cell is empty or contains text. |
| #NUM! | This error is displayed if the input cell contains a number that is not numeric. |
| #REF! | This error is displayed if the cell reference is not valid. |
| #NAME? | This error is displayed if the `ISODD` function is not spelled correctly. |

### Best practices

> - Always ensure that the cell you are referencing with the `ISODD` function contains a numeric value to avoid `#VALUE!` or `#NUM!` errors.
> - Handle possible errors by using error checking functions like `IFERROR` in conjunction with `ISODD`.
> - Keep in mind that `ISODD` function will only consider the integer portion of a number. So, `ISODD(2.7)` will return `FALSE` as it considers only '2'.
> - Be careful with boolean values. `ISODD` treats TRUE as 1 and FALSE as 0 which might give you unintended results if not considered.

### Usage

A few examples using the ISODD function.

```
ISODD(3) returns TRUE because 3 is an odd number  
ISODD(-5) returns TRUE because -5 is an odd number  
ISODD(B3) returns TRUE if cell B3 contains an odd number.  
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
        "Is Odd?"
    ],
    [
        7,
        "=ISODD(A2)"
    ],
    [
        -3,
        "=ISODD(A3)"
    ],
    [
        8,
        "=ISODD(A4)"
    ],
    [
        15,
        "=ISODD(A5)"
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
        "Is Odd?"
    ],
    [
        7,
        "=ISODD(A2)"
    ],
    [
        -3,
        "=ISODD(A3)"
    ],
    [
        8,
        "=ISODD(A4)"
    ],
    [
        15,
        "=ISODD(A5)"
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
        "Is Odd?"
    ],
    [
        7,
        "=ISODD(A2)"
    ],
    [
        -3,
        "=ISODD(A3)"
    ],
    [
        8,
        "=ISODD(A4)"
    ],
    [
        15,
        "=ISODD(A5)"
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
        "Is Odd?"
    ],
    [
        7,
        "=ISODD(A2)"
    ],
    [
        -3,
        "=ISODD(A3)"
    ],
    [
        8,
        "=ISODD(A4)"
    ],
    [
        15,
        "=ISODD(A5)"
    ]
]
            }]
        });
    }
}
```

