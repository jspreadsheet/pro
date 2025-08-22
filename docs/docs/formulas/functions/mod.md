title: MOD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MOD function in Jspreadsheet

# MOD function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MOD` function in Jspreadsheet Formulas Pro is a handy tool that gives you the leftover amount after a number has been divided by another number, also known as a divisor. Imagine you're sharing candies equally among friends, the `MOD` function tells you how many candies are left over. It's like a mathematical way of figuring out what can't be evenly split. It's simple to use, just input your number and divisor into the function like this: `MOD(number, divisor)`.

## Documentation

Returns the remainder after a number is divided by a divisor.

### Category

Math and trigonometry

### Syntax

MOD(num, divisor)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number for which you want to find the remainder after division. |
| `divisor` | The number by which to divide the number argument. |


### Behavior

The `MOD` function in spreadsheets is a mathematical formula that returns the remainder of a division operation. It takes two arguments: the dividend (number) and the divisor. This function is particularly useful when you need to determine the remainder of a division operation in a spreadsheet.

1. **Empty Cells**: If either the dividend or the divisor is an empty cell, the `MOD` function will return an error.
2. **Text**: If either the dividend or the divisor is a text string, the `MOD` function will return an error.
3. **Booleans**: If either the dividend or divisor is a Boolean value, the `MOD` function will convert TRUE to 1 and FALSE to 0 before performing the calculation.
4. **Errors**: If either the dividend or divisor contains an error, the `MOD` function itself will return that error.
5. **Decimal Numbers**: If the dividend or divisor is a decimal number, the `MOD` function will perform the operation and return the remainder as a decimal.
6. **Zero Divisor**: If the divisor is zero, the `MOD` function will return a `#DIV/0!` error, as division by zero is undefined.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #DIV/0! | This error occurs when the divisor in the `MOD` function is zero, as division by zero is undefined. |
| #VALUE! | This error is returned when the dividend or divisor is a text string or an empty cell. |
| #NAME? | This error is returned when the spreadsheet does not recognize the `MOD` function, which could be due to a typo or an unsupported spreadsheet version. |

### Best practices

> - Always ensure that your divisor is not zero to avoid the `#DIV/0!` error.
> - Be mindful of the data types that you are passing as arguments to the `MOD` function. It does not accept text strings or empty cells.
> - Use absolute cell references if you want to copy the `MOD` function across multiple cells to keep the divisor constant.
> - Remember that `MOD` function can handle decimal numbers as well, not just integers.

### Usage

A few examples using the MOD function.

```
MOD(10,3) returns 1  
MOD(A1,B1) where cell A1 contains the number 15 and B1 contains the number 4 returns 3  
MOD(-10,-3) returns -1  
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
        "Divisor",
        "Remainder"
    ],
    [
        23,
        5,
        "=MOD(A2,B2)"
    ],
    [
        17,
        4,
        "=MOD(A3,B3)"
    ],
    [
        100,
        7,
        "=MOD(A4,B4)"
    ],
    [
        -15,
        4,
        "=MOD(A5,B5)"
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
        "Divisor",
        "Remainder"
    ],
    [
        23,
        5,
        "=MOD(A2,B2)"
    ],
    [
        17,
        4,
        "=MOD(A3,B3)"
    ],
    [
        100,
        7,
        "=MOD(A4,B4)"
    ],
    [
        -15,
        4,
        "=MOD(A5,B5)"
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
        "Divisor",
        "Remainder"
    ],
    [
        23,
        5,
        "=MOD(A2,B2)"
    ],
    [
        17,
        4,
        "=MOD(A3,B3)"
    ],
    [
        100,
        7,
        "=MOD(A4,B4)"
    ],
    [
        -15,
        4,
        "=MOD(A5,B5)"
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
        "Divisor",
        "Remainder"
    ],
    [
        23,
        5,
        "=MOD(A2,B2)"
    ],
    [
        17,
        4,
        "=MOD(A3,B3)"
    ],
    [
        100,
        7,
        "=MOD(A4,B4)"
    ],
    [
        -15,
        4,
        "=MOD(A5,B5)"
    ]
]
            }]
        });
    }
}
```

