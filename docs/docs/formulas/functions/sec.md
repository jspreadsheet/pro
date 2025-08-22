title: SEC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SEC function in Jspreadsheet

# SEC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SEC` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the secant of a given angle. The angle should be provided in radians, which is a type of angular measurement. You simply input the radian value into the `SEC` function, and it will calculate the secant for you. This can be particularly useful in trigonometry calculations and data analysis within your Jspreadsheet.

## Documentation

Returns the secant of an angle specified in radians.

### Category

Math and trigonometry

### Syntax

SEC(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The angle in radians for which to calculate the secant. |


### Behavior

The `SEC` function in a spreadsheet is used to calculate the secant of a given angle. The angle should be provided in radians. Here's how it typically handles different values:

- **Numbers**: The function works as expected with numerical values. It takes the numerical input as an angle in radians and returns the secant of the angle.

- **Empty cells**: If the `SEC` function is applied to an empty cell, it will typically return an error, as it expects a numerical input.

- **Text**: The `SEC` function does not work with text input and will return an error if applied to a cell containing text.

- **Booleans**: While the behavior can depend on the implementation of the spreadsheet software, typically, boolean values are treated as numbers `0` (for `FALSE`) and `1` (for `TRUE`) in numerical functions.

- **Errors**: If the input cell contains an error, the `SEC` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the input to the `SEC` function is non-numeric, such as text or an empty cell. |
| #NUM! | This error is returned when the result of the secant function is a complex number, which occurs when the cosine of the angle is zero. |
| #DIV/0! | This error might occur when the `SEC` function attempts to divide by zero, which can occur when the cosine of the angle is zero. |

### Best practices

> - Always ensure the input to the `SEC` function is a numerical value representing an angle in radians.
> - Be aware that the `SEC` function can return very large values for certain angles (when the cosine of the angle is close to zero). Ensure your spreadsheet or subsequent calculations can handle these large values.
> - Remember that spreadsheet trigonometric functions typically work in radians, not degrees. If your input is in degrees, convert it to radians first using the `RADIANS` function.
> - Handle errors appropriately to maintain the integrity of your spreadsheet. Use error handling functions to catch and manage errors that may arise from non-numeric input or angles that result in division by zero.

### Usage

A few examples using the SEC function.

```
SEC(0.5) returns 1.13949392732455  
SEC(1) returns 1.85081571768093  
SEC(2) returns -1.03278929966568  
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
        "Secant Value"
    ],
    [
        0,
        "=SEC(A2)"
    ],
    [
        0.5,
        "=SEC(A3)"
    ],
    [
        1,
        "=SEC(A4)"
    ],
    [
        1.57,
        "=SEC(A5)"
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
        "Secant Value"
    ],
    [
        0,
        "=SEC(A2)"
    ],
    [
        0.5,
        "=SEC(A3)"
    ],
    [
        1,
        "=SEC(A4)"
    ],
    [
        1.57,
        "=SEC(A5)"
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
        "Secant Value"
    ],
    [
        0,
        "=SEC(A2)"
    ],
    [
        0.5,
        "=SEC(A3)"
    ],
    [
        1,
        "=SEC(A4)"
    ],
    [
        1.57,
        "=SEC(A5)"
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
        "Secant Value"
    ],
    [
        0,
        "=SEC(A2)"
    ],
    [
        0.5,
        "=SEC(A3)"
    ],
    [
        1,
        "=SEC(A4)"
    ],
    [
        1.57,
        "=SEC(A5)"
    ]
]
            }]
        });
    }
}
```

