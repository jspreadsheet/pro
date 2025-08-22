title: FLOOR.PRECISE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FLOOR.PRECISE function in Jspreadsheet

# FLOOR.PRECISE function

`PRO`{.jtag}

The `FLOOR.PRECISE` function in Jspreadsheet Formulas Pro is a handy tool that lets you round a number downward. You can choose to round it to the closest whole number or to a specific multiple you define. Simply put, it helps to simplify numbers by reducing them to their nearest significant value, either as whole numbers or specific multiples. This is particularly useful when you want to maintain numerical consistency or simplicity in your data.

## Documentation

Rounds a number down to the nearest integer or to the nearest multiple of a specified factor, based on a specified significance.

### Category

Math and trigonometry

### Syntax

FLOOR.PRECISE(number, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number that you want to round down. |
| `[significance]` | Optional. The significance of the rounding. Default is 1. |


### Behavior

The `FLOOR.PRECISE` function in spreadsheets rounds a number down, towards zero, to the nearest multiple of a given significance. Here's how it handles various inputs:

- **Numbers**: The function works smoothly with numerical inputs.
- **Empty Cells**: If a cell reference in the formula is empty, the function treats it as zero.
- **Text**: If the function encounters text where it expects a number, it will return a `#VALUE!` error.
- **Booleans**: Boolean values are treated as `1` for TRUE and `0` for FALSE.
- **Errors**: If any cell reference in the formula contains an error, the `FLOOR.PRECISE` function will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the function encounters non-numeric data where it expects a number. |
| #NUM! | This error is displayed when the function encounters invalid numeric data, such as a negative number for significance. |
| #DIV/0! | This error is displayed when the function attempts to divide by zero. |

### Best practices

> - Always ensure that the data you're working with in the `FLOOR.PRECISE` function is numerical, to avoid `#VALUE!` errors.
> - Be careful with cell references to avoid accidental references to cells with error values, as this will cause the function to propagate the error.
> - Use absolute cell references where necessary to maintain the correct cell references when copying the formula across cells.
> - While using `FLOOR.PRECISE`, remember that it always rounds down towards zero, regardless of the number's sign. For rounding down away from zero, use `FLOOR` function.

### Usage

A few examples using the FLOOR.PRECISE function.

```
FLOOR.PRECISE(24.3)  
FLOOR.PRECISE(6.8, 2)  
FLOOR.PRECISE(-8.1, 0.1)  
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
        "Original Value",
        "Significance",
        "FLOOR.PRECISE Result"
    ],
    [
        24.3,
        1,
        "=FLOOR.PRECISE(A2,B2)"
    ],
    [
        6.8,
        2,
        "=FLOOR.PRECISE(A3,B3)"
    ],
    [
        -8.1,
        0.1,
        "=FLOOR.PRECISE(A4,B4)"
    ],
    [
        15.7,
        "",
        "=FLOOR.PRECISE(A5)"
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
        "Original Value",
        "Significance",
        "FLOOR.PRECISE Result"
    ],
    [
        24.3,
        1,
        "=FLOOR.PRECISE(A2,B2)"
    ],
    [
        6.8,
        2,
        "=FLOOR.PRECISE(A3,B3)"
    ],
    [
        -8.1,
        0.1,
        "=FLOOR.PRECISE(A4,B4)"
    ],
    [
        15.7,
        "",
        "=FLOOR.PRECISE(A5)"
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
        "Original Value",
        "Significance",
        "FLOOR.PRECISE Result"
    ],
    [
        24.3,
        1,
        "=FLOOR.PRECISE(A2,B2)"
    ],
    [
        6.8,
        2,
        "=FLOOR.PRECISE(A3,B3)"
    ],
    [
        -8.1,
        0.1,
        "=FLOOR.PRECISE(A4,B4)"
    ],
    [
        15.7,
        "",
        "=FLOOR.PRECISE(A5)"
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
        "Original Value",
        "Significance",
        "FLOOR.PRECISE Result"
    ],
    [
        24.3,
        1,
        "=FLOOR.PRECISE(A2,B2)"
    ],
    [
        6.8,
        2,
        "=FLOOR.PRECISE(A3,B3)"
    ],
    [
        -8.1,
        0.1,
        "=FLOOR.PRECISE(A4,B4)"
    ],
    [
        15.7,
        "",
        "=FLOOR.PRECISE(A5)"
    ]
]
            }]
        });
    }
}
```

