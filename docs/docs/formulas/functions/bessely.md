title: BESSELY Function – Compute the Bessel Function of the Second Kind in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet functions, BESSELY, Bessel Y function, engineering formulas, differential equations
description: How to use the BESSELY function in Jspreadsheet Formulas Pro to compute the Bessel function of the second kind, Y(x), for real-valued inputs. Ideal for use in engineering, physics, and wave propagation modeling, this function is a staple for solving differential equations involving cylindrical symmetry. Includes syntax, behavior, examples, and error-handling strategies.

# BESSELY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BESSELY` function in Jspreadsheet Formulas Pro calculates the Bessel function of the second kind, denoted as `Y(x)`. This function is widely used in engineering, physics, and signal processing, particularly in contexts involving cylindrical or spherical symmetry such as vibrations or acoustic wave equations.

It accepts a positive real number `x` and a function order `n`, returning the corresponding `Yₙ(x)` value.

## Documentation

Returns the Bessel function of the second kind, Y(x), for a given positive real number x.

### Category

Engineering

### Syntax

BESSELY(x, n)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The positive real number for which to calculate the Bessel function. |
| `n` | The order of the Bessel function. Must be a nonnegative integer or a real number greater than -1. |


### Behavior

The 'BESSELY' function in spreadsheets is used to calculate the Bessel function `Yₙ(x)`. This function requires two arguments: the order of the function 'n' and the value 'x' for which the function is computed. Here's how it handles various inputs:

- **Numeric Values:** Both the inputs 'n' and 'x' should be numbers for the function to work correctly.
- **Empty Cells:** If any of the inputs are empty cells, the function will return a '#NUM!' error.
- **Text Values:** If the inputs are text instead of numbers, the function will return a '#VALUE!' error.
- **Booleans Values:** If boolean values (TRUE or FALSE) are input, they will be coerced to numeric values, with TRUE being interpreted as 1 and FALSE as 0. 
- **Negative** x: Triggers a #NUM! error, as Y(x) is undefined for negative real x.
- **Decimal** n: Supported if greater than -1; may be truncated based on environment.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error occurs when the 'x' value is less than zero, or if any of the inputs are empty cells. |
| #VALUE! | This error is returned when any of the inputs are non-numeric, such as text. |

### Best practices

> - Always ensure that both arguments are numeric. The 'BESSELY' function does not work with text inputs.
> - Be cautious when using cell references or other functions as inputs. Make sure they will return numeric values to prevent errors.
> - The 'x' value should be greater than or equal to zero. Negative values will result in a '#NUM!' error.
> - Use error checking functions like 'IFERROR' to handle possible errors and make your spreadsheet more robust.

### Usage

A few examples using the BESSELY function.

```
BESSELY(5, 2)       // Returns ≈ 0.367662879  
BESSELY(1.5, 0)     // Returns ≈ 0.382448925  
BESSELY(3, 4.2)     // Returns ≈ -0.916682846  
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
        "BESSELY Result"
    ],
    [
        2.5,
        1,
        "=BESSELY(A2,B2)"
    ],
    [
        4.0,
        0,
        "=BESSELY(A3,B3)"
    ],
    [
        1.8,
        2,
        "=BESSELY(A4,B4)"
    ],
    [
        6.2,
        3,
        "=BESSELY(A5,B5)"
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
        "BESSELY Result"
    ],
    [
        2.5,
        1,
        "=BESSELY(A2,B2)"
    ],
    [
        4.0,
        0,
        "=BESSELY(A3,B3)"
    ],
    [
        1.8,
        2,
        "=BESSELY(A4,B4)"
    ],
    [
        6.2,
        3,
        "=BESSELY(A5,B5)"
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
        "BESSELY Result"
    ],
    [
        2.5,
        1,
        "=BESSELY(A2,B2)"
    ],
    [
        4.0,
        0,
        "=BESSELY(A3,B3)"
    ],
    [
        1.8,
        2,
        "=BESSELY(A4,B4)"
    ],
    [
        6.2,
        3,
        "=BESSELY(A5,B5)"
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
        "BESSELY Result"
    ],
    [
        2.5,
        1,
        "=BESSELY(A2,B2)"
    ],
    [
        4.0,
        0,
        "=BESSELY(A3,B3)"
    ],
    [
        1.8,
        2,
        "=BESSELY(A4,B4)"
    ],
    [
        6.2,
        3,
        "=BESSELY(A5,B5)"
    ]
]
            }]
        });
    }
}
```

