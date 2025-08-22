title: LCM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LCM function in Jspreadsheet

# LCM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LCM` function in Jspreadsheet Formulas Pro is a tool that calculates the smallest positive number that is a multiple of all the numbers you input. It's especially useful when you need to find a common denominator between different numbers. You simply input the values you are interested in, and the function will return the least common multiple. This function is a convenient way of performing complex math without needing to do it manually.

## Documentation

Returns the least common multiple of one or more integers. The least common multiple is the smallest positive integer that is a multiple of each integer in a given set.

### Category

Math and trigonometry

### Syntax

LCM(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The first number for which you want to find the least common multiple. |
| `numberN` | Optional. Additional numbers for which you want to find the least common multiple. |


### Behavior

The `LCM` function in spreadsheets is used to find the least common multiple of two or more numbers. It ignores empty cells, non-numeric cells, and logical values. Its behavior is as follows:

- If any arguments are non-numeric or logical values, `LCM` ignores them.
- If no arguments are supplied, `LCM` returns zero.
- It handles any number of arguments greater than zero.
- If any of the arguments are decimal, `LCM` rounds down to the nearest integer before calculating.
- If any argument is less than zero, `LCM` returns an error.
- If the result exceeds the largest representable number, `LCM` returns an error.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| #VALUE! | This error is displayed when the provided argument is non-numeric. |
| #NUM! | This error occurs if any of the argument is less than zero or if the result exceeds the largest representable number. |
| #DIV/0! | This error is displayed when no arguments are supplied. |

### Best practices

> - Always ensure that the arguments provided are positive integers. If they are not, convert them before using them in the `LCM` function.
> - Avoid using non-numeric and logical values as they are ignored by the `LCM` function.
> - Use the `LCM` function with a range of cells for dynamic calculations.
> - Be aware that the `LCM` function can only handle a maximum of 255 arguments. If you need to include more, you should break down the calculation.

### Usage

A few examples using the LCM function.

```
LCM(12, 18) returns 36 because 36 is the smallest number that is a multiple of both 12 and 18  
LCM(8, 12, 14) returns 168 because 168 is the smallest number that is a multiple of 8, 12, and 14  
LCM(A1:A10) returns the least common multiple of the values in cells A1 through A10.  
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
        "Package A Cycle (days)",
        "Package B Cycle (days)",
        "Reorder Together Every (days)"
    ],
    [
        12,
        18,
        "=LCM(A2,B2)"
    ],
    [
        8,
        14,
        "=LCM(A3,B3)"
    ],
    [
        15,
        25,
        "=LCM(A4,B4)"
    ],
    [
        "Combined LCM:",
        "",
        "=LCM(A2:B4)"
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
        "Package A Cycle (days)",
        "Package B Cycle (days)",
        "Reorder Together Every (days)"
    ],
    [
        12,
        18,
        "=LCM(A2,B2)"
    ],
    [
        8,
        14,
        "=LCM(A3,B3)"
    ],
    [
        15,
        25,
        "=LCM(A4,B4)"
    ],
    [
        "Combined LCM:",
        "",
        "=LCM(A2:B4)"
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
        "Package A Cycle (days)",
        "Package B Cycle (days)",
        "Reorder Together Every (days)"
    ],
    [
        12,
        18,
        "=LCM(A2,B2)"
    ],
    [
        8,
        14,
        "=LCM(A3,B3)"
    ],
    [
        15,
        25,
        "=LCM(A4,B4)"
    ],
    [
        "Combined LCM:",
        "",
        "=LCM(A2:B4)"
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
        "Package A Cycle (days)",
        "Package B Cycle (days)",
        "Reorder Together Every (days)"
    ],
    [
        12,
        18,
        "=LCM(A2,B2)"
    ],
    [
        8,
        14,
        "=LCM(A3,B3)"
    ],
    [
        15,
        25,
        "=LCM(A4,B4)"
    ],
    [
        "Combined LCM:",
        "",
        "=LCM(A2:B4)"
    ]
]
            }]
        });
    }
}
```

