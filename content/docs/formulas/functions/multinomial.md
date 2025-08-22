title: MULTINOMIAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MULTINOMIAL function in Jspreadsheet

# MULTINOMIAL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MULTINOMIAL` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the multivariate factorial, a result obtained by multiplying the factorials of a sequence of numbers together. To put it simply, if you have a series of numbers, this function will calculate the factorial for each number (which is the product of all positive integers up to that number), and then multiply those results together. This function is particularly useful in statistical calculations and probability theory scenarios where you need to calculate combinations or permutations.

## Documentation

Returns the multivariate factorial, which is the product of factorials of a series of numbers.

### Category

Math and trigonometry

### Syntax

MULTINOMIAL(number1, [number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number. |
| `numberN` | The nth number. |


### Behavior

The `MULTINOMIAL` function in a spreadsheet calculates the multinomial of a set of numbers. This function takes a set of positive integer values as input and returns their multinomial. 

- If any argument contains text, logical values, or empty cells, `MULTINOMIAL` will treat them as zero.
- The `MULTINOMIAL` function ignores cells that contain errors. 
- The function handles decimal numbers by truncating them to integers. 
- If the argument includes negative numbers, the `MULTINOMIAL` function returns a #NUM! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the provided argument is non-numeric. |
| #NUM! | This error is shown when the provided argument is a negative number. |
| #N/A | This error is displayed if there are no arguments provided to the function. |

### Best practices

> - Always ensure that the provided values are positive integers to avoid any errors.
> - If you are using cell references as the function's arguments, make sure that these cells contain numeric values.
> - Be aware that the function treats decimal numbers as integers by truncating the decimal part.
> - Use the `MULTINOMIAL` function to calculate the factorial of multiple numbers and their product. Avoid using it for negative numbers as it would result in an error.

### Usage

A few examples using the MULTINOMIAL function.

```
MULTINOMIAL(3,4,5)  
MULTINOMIAL(A2:A6)  
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
        "Lottery Balls",
        "Red",
        "Blue",
        "Green",
        "Multinomial"
    ],
    [
        "Draw 1",
        2,
        3,
        1,
        "=MULTINOMIAL(B2:D2)"
    ],
    [
        "Draw 2",
        4,
        2,
        3,
        "=MULTINOMIAL(B3:D3)"
    ],
    [
        "Draw 3",
        1,
        1,
        2,
        "=MULTINOMIAL(B4:D4)"
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
        "Lottery Balls",
        "Red",
        "Blue",
        "Green",
        "Multinomial"
    ],
    [
        "Draw 1",
        2,
        3,
        1,
        "=MULTINOMIAL(B2:D2)"
    ],
    [
        "Draw 2",
        4,
        2,
        3,
        "=MULTINOMIAL(B3:D3)"
    ],
    [
        "Draw 3",
        1,
        1,
        2,
        "=MULTINOMIAL(B4:D4)"
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
        "Lottery Balls",
        "Red",
        "Blue",
        "Green",
        "Multinomial"
    ],
    [
        "Draw 1",
        2,
        3,
        1,
        "=MULTINOMIAL(B2:D2)"
    ],
    [
        "Draw 2",
        4,
        2,
        3,
        "=MULTINOMIAL(B3:D3)"
    ],
    [
        "Draw 3",
        1,
        1,
        2,
        "=MULTINOMIAL(B4:D4)"
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
        "Lottery Balls",
        "Red",
        "Blue",
        "Green",
        "Multinomial"
    ],
    [
        "Draw 1",
        2,
        3,
        1,
        "=MULTINOMIAL(B2:D2)"
    ],
    [
        "Draw 2",
        4,
        2,
        3,
        "=MULTINOMIAL(B3:D3)"
    ],
    [
        "Draw 3",
        1,
        1,
        2,
        "=MULTINOMIAL(B4:D4)"
    ]
]
            }]
        });
    }
}
```

