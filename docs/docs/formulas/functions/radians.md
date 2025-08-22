title: RADIANS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RADIANS function in Jspreadsheet

# RADIANS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RADIANS` function in Jspreadsheet Formulas Pro is used to convert angles measured in degrees into radians. To understand what a radian is, imagine a circle with a certain radius. If you draw an arc with the same length as the radius, the angle that this arc creates at the center of the circle is equal to one radian. So, by using the `RADIANS` function, you can easily change an angle from the more commonly used degree measurement to its equivalent in radians.

## Documentation

Converts degrees into radians. One radian is equal to the angle made at the center of a circle by an arc whose length is equal to the radius of the circle.

### Category

Math and trigonometry

### Syntax

RADIANS(angle)

| Parameter | Description |
| ----------- | ------------- |
| `angle` | The angle to convert from degrees to radians. |


### Behavior

The 'RADIANS' spreadsheet function is used to convert an angle measured in degrees to an equivalent measure in radians. It accepts a single argument, which should be a numerical value representing an angle in degrees. The function then returns the equivalent angle in radians.

- If the cell is empty or contains text, the 'RADIANS' function will return a `#VALUE!` error.
- The function treats boolean values as integers before conversion, where TRUE is equivalent to 1 and FALSE is equivalent to 0.
- If the argument is non-numeric or if the function encounters any error during calculation, it will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the input cell is empty, contains text, or any non-numeric value. |
| #NUM! | This error is displayed when the function encounters an error during the calculation. For example, if the input is a number, but not an angle in degrees, the function may return this error. |

### Best practices

> - Always ensure that the input to the 'RADIANS' function represents an angle in degrees. Providing any other numerical value may lead to incorrect results or errors.
> - Avoid using boolean values as inputs as they are treated as integers, which can lead to unexpected results.
> - Handle errors properly by using error handling functions such as 'IFERROR' or 'ISERROR' to avoid disruption in the calculation process. This is especially useful when using the 'RADIANS' function in larger formulas or calculations.
> - Always check the data type of the input to avoid `#VALUE!` error. It can be avoided by ensuring that the input cell contains a numeric value.

### Usage

A few examples using the RADIANS function.

```
RADIANS(45) returns approximately 0.7854, which is the equivalent angle in radians of 45 degrees  
RADIANS(90) returns approximately 1.5708, which is the equivalent angle in radians of 90 degrees  
RADIANS(A1) returns the equivalent angle in radians of the value in cell A1, which is assumed to be in degrees  
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
        "Degrees",
        "Radians"
    ],
    [
        0,
        "=RADIANS(A2)"
    ],
    [
        30,
        "=RADIANS(A3)"
    ],
    [
        45,
        "=RADIANS(A4)"
    ],
    [
        90,
        "=RADIANS(A5)"
    ],
    [
        180,
        "=RADIANS(A6)"
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
        "Degrees",
        "Radians"
    ],
    [
        0,
        "=RADIANS(A2)"
    ],
    [
        30,
        "=RADIANS(A3)"
    ],
    [
        45,
        "=RADIANS(A4)"
    ],
    [
        90,
        "=RADIANS(A5)"
    ],
    [
        180,
        "=RADIANS(A6)"
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
        "Degrees",
        "Radians"
    ],
    [
        0,
        "=RADIANS(A2)"
    ],
    [
        30,
        "=RADIANS(A3)"
    ],
    [
        45,
        "=RADIANS(A4)"
    ],
    [
        90,
        "=RADIANS(A5)"
    ],
    [
        180,
        "=RADIANS(A6)"
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
        "Degrees",
        "Radians"
    ],
    [
        0,
        "=RADIANS(A2)"
    ],
    [
        30,
        "=RADIANS(A3)"
    ],
    [
        45,
        "=RADIANS(A4)"
    ],
    [
        90,
        "=RADIANS(A5)"
    ],
    [
        180,
        "=RADIANS(A6)"
    ]
]
            }]
        });
    }
}
```

