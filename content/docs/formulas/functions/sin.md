title: SIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SIN function in Jspreadsheet

# SIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SIN` function in Jspreadsheet Formulas Pro is used to calculate the sine of a given angle, which is provided in radians. This is a trigonometric function that is commonly used in mathematical calculations. You simply input the angle in radians into the function, and it will output the sine of that angle. It's a handy tool for tasks that require geometric or scientific calculations.

## Documentation

Returns the sine of an angle in radians.

### Category

Math and trigonometry

### Syntax

SIN(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The angle in radians for which to calculate the sine. |


### Behavior

The `SIN` function in spreadsheets calculates the sine of an angle (provided in radians). Here is how it handles various inputs:

- Numbers: The `SIN` function works with number inputs. It expects the input to be in radians.
- Empty cells: If the `SIN` function is applied to an empty cell, it returns a `#VALUE!` error.
- Text: When this function is applied to text, it returns a `#VALUE!` error.
- Booleans: When the `SIN` function is applied to boolean values, `TRUE` is considered as 1 and `FALSE` is considered as 0. Therefore, `SIN(TRUE)` returns the sine of 1 radian, and `SIN(FALSE)` returns 0.
- Errors: If the cell referenced by the `SIN` function contains an error, the function itself will also return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the input to the `SIN` function is non-numeric, such as text or an empty cell. |
| #DIV/0! | This error is returned if the function is trying to divide by zero, which is not a scenario that should occur with the `SIN` function. If you encounter this error while using the `SIN` function, it's likely due to some other part of your formula or function. |

### Best practices

> - Always ensure that the input to the `SIN` function is in radians. If you have an angle in degrees, you can convert it to radians using the `RADIANS` function.
> - Be mindful of the fact that the `SIN` function treats boolean values as numbers, with `TRUE` being 1 and `FALSE` being 0.
> - To avoid errors, ensure that the cell referenced by the `SIN` function contains a numeric value.
> - Remember that the `SIN` function returns the ratio of the length of the side that is opposite to the angle to the length of the longest side of the triangle (hypotenuse). So, the return value is always between -1 and 1 inclusive.

### Usage

A few examples using the SIN function.

```
SIN(0) returns 0  
SIN(PI()/6) returns 0.5  
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
        "Angle (radians)",
        "Sine Value"
    ],
    [
        0,
        "=SIN(A2)"
    ],
    [
        "=PI()/6",
        "=SIN(A3)"
    ],
    [
        "=PI()/2",
        "=SIN(A4)"
    ],
    [
        "=PI()",
        "=SIN(A5)"
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
        "Angle (radians)",
        "Sine Value"
    ],
    [
        0,
        "=SIN(A2)"
    ],
    [
        "=PI()/6",
        "=SIN(A3)"
    ],
    [
        "=PI()/2",
        "=SIN(A4)"
    ],
    [
        "=PI()",
        "=SIN(A5)"
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
        "Angle (radians)",
        "Sine Value"
    ],
    [
        0,
        "=SIN(A2)"
    ],
    [
        "=PI()/6",
        "=SIN(A3)"
    ],
    [
        "=PI()/2",
        "=SIN(A4)"
    ],
    [
        "=PI()",
        "=SIN(A5)"
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
        "Angle (radians)",
        "Sine Value"
    ],
    [
        0,
        "=SIN(A2)"
    ],
    [
        "=PI()/6",
        "=SIN(A3)"
    ],
    [
        "=PI()/2",
        "=SIN(A4)"
    ],
    [
        "=PI()",
        "=SIN(A5)"
    ]
]
            }]
        });
    }
}
```

