title: BESSELI Function – Calculate the Modified Bessel Function of the First Kind in Jspreadsheet
keywords: Jspreadsheet, BESSELI, modified Bessel function, engineering functions, spreadsheet formulas, custom functions, JavaScript formulas, advanced math, scientific calculations, spreadsheet plugin, Excel-like functions, Bessel differential equation
description: How to use the BESSELI function in Jspreadsheet to compute the modified Bessel function of the first kind, Iₙ(x). Ideal for engineering, physics, and advanced mathematical computations.

# BESSELI function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The BESSELI function in Jspreadsheet Formulas Pro computes the modified Bessel function of the first kind, denoted as Iₙ(x). This function is widely used in engineering, physics, and applied mathematics—especially in solving problems involving cylindrical symmetry, such as heat conduction and wave propagation.

You simply input a numeric value x and an integer n (the order), and the function returns the corresponding Bessel function value. This allows you to perform advanced calculations easily within Jspreadsheet.

## Documentation

Returns the modified Bessel function of the first kind, Iₙ(x), for a given numeric input.

### Category

Engineering

### Syntax

BESSELI(x, n)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the modified Bessel function. |
| `n` | The order of the Bessel function. Must be a nonnegative integer. |


### Behavior

The `BESSELI` function in spreadsheet returns the modified Bessel function Iₙ(x), which is an solutions of Bessel’s differential equation. The function takes two arguments: x, the value at which to evaluate the function, and n, the order of the Bessel function. 

- Numbers: Evaluates normally.
- Empty cells: Treated as 0.
- Booleans: TRUE is interpreted as 1, and FALSE as 0.
- Non-numeric inputs: Result in a #VALUE! error.
- Invalid combinations: For example, x < 0 with non-integer n will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If either of the input is non-numeric, the function will return #VALUE! error. |
| #NUM! | If the x is less than 0 and n is not an integer, the function will return #NUM! error. |
| #N/A | If the input is not available or the function is not applicable, it returns #N/A error. |

### Best practices

> - Always ensure the input values are numeric to avoid #VALUE! error.
> - Make sure the order n is an integer to avoid #NUM! error.
> - Use error handling functions like IFERROR to handle possible errors and keep your spreadsheet clean.
> - Keep in mind that the function treats empty cells as 0, which may affect your calculation results.

### Usage

A few examples using the BESSELI function.

```
BESSELI(1.5, 1)    // returns 0.981666428
BESSELI(0, 0)      // returns 1
BESSELI(TRUE, 2)   // treated as BESSELI(1, 2)
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
        "x",
        "n",
        "BESSELI Result"
    ],
    [
        1.5,
        1,
        "=BESSELI(A2,B2)"
    ],
    [
        2.0,
        0,
        "=BESSELI(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELI(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELI(A5,B5)"
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
        "x",
        "n",
        "BESSELI Result"
    ],
    [
        1.5,
        1,
        "=BESSELI(A2,B2)"
    ],
    [
        2.0,
        0,
        "=BESSELI(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELI(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELI(A5,B5)"
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
        "x",
        "n",
        "BESSELI Result"
    ],
    [
        1.5,
        1,
        "=BESSELI(A2,B2)"
    ],
    [
        2.0,
        0,
        "=BESSELI(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELI(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELI(A5,B5)"
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
        "x",
        "n",
        "BESSELI Result"
    ],
    [
        1.5,
        1,
        "=BESSELI(A2,B2)"
    ],
    [
        2.0,
        0,
        "=BESSELI(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELI(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELI(A5,B5)"
    ]
]
            }]
        });
    }
}
```

