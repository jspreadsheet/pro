title: IMSEC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSEC function in Jspreadsheet

# IMSEC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `IMSEC` function is used to calculate the secant of a complex number. This function is quite useful when you're dealing with complex numbers, where traditional mathematical operations can be challenging. You simply input the complex number into the function, and it gives you the secant value of that number. It's a great tool for those working with complex number calculations in Jspreadsheet.

## Documentation

Returns the secant of a complex number.

### Category

Engineering

### Syntax

IMSEC(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the secant. |


### Behavior

The `IMSEC` function in spreadsheets is used to return the secant of a complex number. The complex number is given in the format `x+yi` or `x+yj`.

- If an empty cell is used as a reference, the function will treat it as zero.
- When given text or strings that cannot be interpreted as a complex number, the function will return a `#VALUE!` error.
- If a boolean value is used, it will be converted into numbers, with `TRUE` being 1 and `FALSE` being 0.
- If the function encounters an error, it will return an error that corresponds to the problem, such as `#VALUE!`, `#DIV/0!`, or `#NUM!`.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the given argument is non-numeric or cannot be interpreted as a complex number. |
| #NUM! | This error is returned when the function results in a number that's too large to be represented in the worksheet. |
| #DIV/0! | This error is returned when a division by zero occurs in the calculations. |

### Best practices

> - Always ensure that the complex number is in the correct format (x+yi or x+yj) for the `IMSEC` function to work correctly.
> - Use the `IMSEC` function with other complex number functions for more complex calculations.
> - Be aware of the limitations of the number size and the potential for `#NUM!` errors.
> - Handle possible errors such as `#VALUE!`, `#DIV/0!`, and `#NUM!` to make your spreadsheet more robust and reliable.

### Usage

A few examples using the IMSEC function.

```
IMSEC("1+i") returns "5i"  
IMSEC("2+2i") returns "i"  
IMSEC("5-3i") returns "864i"  
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
        "Complex Number",
        "Secant"
    ],
    [
        "1+i",
        "=IMSEC(A2)"
    ],
    [
        "2+2i",
        "=IMSEC(A3)"
    ],
    [
        "5-3i",
        "=IMSEC(A4)"
    ],
    [
        "-1+2i",
        "=IMSEC(A5)"
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
        "Complex Number",
        "Secant"
    ],
    [
        "1+i",
        "=IMSEC(A2)"
    ],
    [
        "2+2i",
        "=IMSEC(A3)"
    ],
    [
        "5-3i",
        "=IMSEC(A4)"
    ],
    [
        "-1+2i",
        "=IMSEC(A5)"
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
        "Complex Number",
        "Secant"
    ],
    [
        "1+i",
        "=IMSEC(A2)"
    ],
    [
        "2+2i",
        "=IMSEC(A3)"
    ],
    [
        "5-3i",
        "=IMSEC(A4)"
    ],
    [
        "-1+2i",
        "=IMSEC(A5)"
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
        "Complex Number",
        "Secant"
    ],
    [
        "1+i",
        "=IMSEC(A2)"
    ],
    [
        "2+2i",
        "=IMSEC(A3)"
    ],
    [
        "5-3i",
        "=IMSEC(A4)"
    ],
    [
        "-1+2i",
        "=IMSEC(A5)"
    ]
]
            }]
        });
    }
}
```

