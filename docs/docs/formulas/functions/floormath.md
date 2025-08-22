title: FLOOR.MATH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FLOOR.MATH function in Jspreadsheet

# FLOOR.MATH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FLOOR.MATH` function in Jspreadsheet Formulas Pro is a handy tool that allows you to round a number downwards to the closest whole number or to the closest multiple of a specified number. For instance, if you have a number like 7.8, the function can help you round it down to 7. If a specified factor is given, like 5, the function will round the number down to the nearest multiple of 5. This is particularly useful for calculations where you need to maintain a certain level of precision or consistency.

## Documentation

Rounds a number down to the nearest integer or to the nearest multiple of a specified factor.

### Category

Math and trigonometry

### Syntax

FLOOR.MATH(number, [significance], [mode])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number that you want to round down. |
| `[significance]` | Optional. The multiple to which you want to round. Default is 1. |
| `[mode]` | Optional. A value that determines how to round the number. Default is 0 (round towards negative infinity). 1 = Round towards positive infinity. 2 = Round towards zero. 3 = Round away from zero. |


### Behavior

The 'FLOOR.MATH' function in spreadsheets rounds a given number down towards zero, to the nearest multiple of a given significance. This function handles inputs in the following ways:

- **Numbers:** If both arguments are numbers, the function works perfectly, rounding the first argument down to the nearest multiple of the second argument.

- **Empty cells:** If a cell referenced in the formula is empty, it is treated as a zero.

- **Text:** If a text value is provided as an argument, the function returns a #VALUE! error.

- **Booleans:** Boolean values are treated as numbers, with TRUE being 1 and FALSE being 0.

- **Errors:** If any of the arguments are error values, the function propagates the error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when one or both of the arguments are non-numeric. |
| #DIV/0! | This error occurs when you try to divide by zero, i.e., if the significance argument is zero. |
| #NUM! | This error occurs when the number argument is less than zero, but the significance argument is greater than zero, or vice versa. |

### Best practices

> - When using 'FLOOR.MATH' always ensure that your data types are correct to avoid errors.
> - Be cautious when using cell references as arguments, as changes in the referenced cell could lead to unexpected results or errors.
> - Avoid using zero as the significance argument to prevent the #DIV/0! error.
> - Use 'FLOOR.MATH' instead of 'FLOOR' if you want to round negative numbers down away from zero.

### Usage

A few examples using the FLOOR.MATH function.

```
FLOOR.MATH(24.3) = 24  
FLOOR.MATH(6.8, 2) = 6  
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
        "Price",
        "Discount Factor",
        "Floored Price"
    ],
    [
        24.75,
        1,
        "=FLOOR.MATH(A2,B2)"
    ],
    [
        18.95,
        5,
        "=FLOOR.MATH(A3,B3)"
    ],
    [
        32.38,
        2,
        "=FLOOR.MATH(A4,B4)"
    ],
    [
        47.89,
        10,
        "=FLOOR.MATH(A5,B5)"
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
        "Price",
        "Discount Factor",
        "Floored Price"
    ],
    [
        24.75,
        1,
        "=FLOOR.MATH(A2,B2)"
    ],
    [
        18.95,
        5,
        "=FLOOR.MATH(A3,B3)"
    ],
    [
        32.38,
        2,
        "=FLOOR.MATH(A4,B4)"
    ],
    [
        47.89,
        10,
        "=FLOOR.MATH(A5,B5)"
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
        "Price",
        "Discount Factor",
        "Floored Price"
    ],
    [
        24.75,
        1,
        "=FLOOR.MATH(A2,B2)"
    ],
    [
        18.95,
        5,
        "=FLOOR.MATH(A3,B3)"
    ],
    [
        32.38,
        2,
        "=FLOOR.MATH(A4,B4)"
    ],
    [
        47.89,
        10,
        "=FLOOR.MATH(A5,B5)"
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
        "Price",
        "Discount Factor",
        "Floored Price"
    ],
    [
        24.75,
        1,
        "=FLOOR.MATH(A2,B2)"
    ],
    [
        18.95,
        5,
        "=FLOOR.MATH(A3,B3)"
    ],
    [
        32.38,
        2,
        "=FLOOR.MATH(A4,B4)"
    ],
    [
        47.89,
        10,
        "=FLOOR.MATH(A5,B5)"
    ]
]
            }]
        });
    }
}
```

