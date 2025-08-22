title: TAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TAN function in Jspreadsheet

# TAN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TAN` function in Jspreadsheet Formulas Pro is used when you need to calculate the tangent of a specific angle. This angle should be inputted in radians. For example, if you use `TAN` with an argument of 1, it will return the tangent of 1 radian. This function can be very useful in trigonometry, geometry, and various fields of engineering and physics.

## Documentation

Returns the tangent of an angle specified in radians.

### Category

Math and trigonometry

### Syntax

TAN(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The angle in radians for which you want the tangent. The angle can be expressed in radians or degrees. Excel treats angles in radians as if they were measured in radians; angles in degrees are converted to radians (pi/180) before being evaluated. |


### Behavior

The `TAN` function in a spreadsheet calculates the tangent of a given angle. The angle should be provided in radians. Here's how it handles various types of inputs:

- Numbers: The `TAN` function takes numerical values as input, which represent angles in radians. It returns the tangent of the given angle.
- Text: If a text value is given as input, the function will return an error since it expects a numerical value.
- Booleans: Boolean values are treated as numerical values where TRUE is equal to 1 and FALSE is equal to 0.
- Empty cells: If an empty cell is given as input, the function will treat it as 0.
- Errors: If the input cell contains an error, the `TAN` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the given input is non-numeric or the function is unable to find the tangent of the given angle. |
| #DIV/0! | This error is returned when the function tries to divide a number by zero. In context of the `TAN` function, it will generally occur if you are trying to find the tangent of an angle where the cosine is 0 (e.g., π/2 or 3π/2). |
| #NAME? | This error is returned when the function name is misspelled or not recognized by the spreadsheet. |

### Best practices

> - Always ensure that the angle provided is in radians. If your angle is in degrees, you can convert it to radians using the `RADIANS` function.
> - Beware of angles that have cosine equal to zero as these will return a #DIV/0! error because tangent is not defined at these points.
> - Be aware that the `TAN` function expects numerical values. If non-numeric values are used, the function will return a #VALUE! error.
> - Always check for spelling errors in the function name to avoid the #NAME? error.

### Usage

A few examples using the TAN function.

```
TAN(0.7854)  
TAN(1.0472)  
TAN(-1.5708)  
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
        "Tangent"
    ],
    [
        0,
        "=TAN(A2)"
    ],
    [
        0.7854,
        "=TAN(A3)"
    ],
    [
        1.0472,
        "=TAN(A4)"
    ],
    [
        -1.5708,
        "=TAN(A5)"
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
        "Tangent"
    ],
    [
        0,
        "=TAN(A2)"
    ],
    [
        0.7854,
        "=TAN(A3)"
    ],
    [
        1.0472,
        "=TAN(A4)"
    ],
    [
        -1.5708,
        "=TAN(A5)"
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
        "Tangent"
    ],
    [
        0,
        "=TAN(A2)"
    ],
    [
        0.7854,
        "=TAN(A3)"
    ],
    [
        1.0472,
        "=TAN(A4)"
    ],
    [
        -1.5708,
        "=TAN(A5)"
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
        "Tangent"
    ],
    [
        0,
        "=TAN(A2)"
    ],
    [
        0.7854,
        "=TAN(A3)"
    ],
    [
        1.0472,
        "=TAN(A4)"
    ],
    [
        -1.5708,
        "=TAN(A5)"
    ]
]
            }]
        });
    }
}
```

