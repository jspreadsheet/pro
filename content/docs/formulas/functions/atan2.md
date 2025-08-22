title: ATAN2 Function - Calculate Two-Argument Arctangent in Jspreadsheet
keywords: ATAN2 function, two-argument arctangent, coordinate angle calculation, vector direction, Excel-compatible functions, JavaScript spreadsheet functions, mathematical operations, engineering calculations, scientific computing, polar coordinates, angle measurement, vector analysis
description: Calculate angles from coordinates using the ATAN2 function in Jspreadsheet. Perfect for vector analysis, coordinate geometry, and engineering applications requiring precise angle calculations from x and y coordinates.

# ATAN2 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ATAN2` function in Jspreadsheet Formulas Pro is a mathematical tool that provides the arctangent of the given x and y coordinates. To put it simply, it calculates the angle in radians between the positive x-axis and the point given by the coordinates (x, y) on a plane. This function is useful in various areas such as physics and engineering for understanding the direction of vectors or the orientation of an object in space. Keep in mind that the result is always between -π and +π.

## Documentation

Returns the arctangent of the specified x- and y-coordinates, in radians.

### Category

Math and trigonometry

### Syntax

ATAN2(x_num, y_num)

| Parameter | Description |
| ----------- | ------------- |
| `x_num` | The x-coordinate for which to calculate the arctangent. |
| `y_num` | The y-coordinate for which to calculate the arctangent. |


### Behavior

The `ATAN2` function in spreadsheet performs the following behaviors:

1. **Numbers**: The function takes two arguments, both of which should be numerical. The first argument is the Y-coordinate and the second argument is the X-coordinate. It returns the arctangent of the two numbers.

2. **Empty Cells**: If either or both arguments are empty cells, the function treats them as zero.

3. **Text**: If either argument is a text string, the function returns an error.

4. **Boolean values**: If either argument is a boolean value, the function converts TRUE to 1 and FALSE to 0 before calculating the arctangent.

5. **Errors**: If either argument is an error, the function propagates that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when either of the arguments is non-numeric (like a text string). |
| #DIV/0! | This error is returned if both arguments are 0, as the function attempts to divide by zero. |

### Best practices
> - Always ensure that both arguments are numeric. If there's a chance that they might not be, use error-checking functions like `ISNUMBER` to validate the inputs.
> - Be aware that the function treats empty cells as zero. If this isn't the desired behavior, you should handle empty cells explicitly.
> - Remember that the `ATAN2` function takes Y-coordinate as the first argument and X-coordinate as the second, which is opposite to the convention in some programming languages.
> - Use `ATAN2` to calculate the angle in radians between the positive X-axis and the point given by the coordinates, the result is between -π and π.

### Usage

A few examples using the ATAN2 function.

```
ATAN2(0,1) returns 1.570796327  
ATAN2(-1,-1) returns -2.35619449  
ATAN2(3,4) returns 0.927295218  
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
        "X Coordinate",
        "Y Coordinate",
        "Angle (radians)"
    ],
    [
        3,
        4,
        "=ATAN2(A2,B2)"
    ],
    [
        -1,
        -1,
        "=ATAN2(A3,B3)"
    ],
    [
        0,
        1,
        "=ATAN2(A4,B4)"
    ],
    [
        2,
        -3,
        "=ATAN2(A5,B5)"
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
        "X Coordinate",
        "Y Coordinate",
        "Angle (radians)"
    ],
    [
        3,
        4,
        "=ATAN2(A2,B2)"
    ],
    [
        -1,
        -1,
        "=ATAN2(A3,B3)"
    ],
    [
        0,
        1,
        "=ATAN2(A4,B4)"
    ],
    [
        2,
        -3,
        "=ATAN2(A5,B5)"
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
        "X Coordinate",
        "Y Coordinate",
        "Angle (radians)"
    ],
    [
        3,
        4,
        "=ATAN2(A2,B2)"
    ],
    [
        -1,
        -1,
        "=ATAN2(A3,B3)"
    ],
    [
        0,
        1,
        "=ATAN2(A4,B4)"
    ],
    [
        2,
        -3,
        "=ATAN2(A5,B5)"
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
        "X Coordinate",
        "Y Coordinate",
        "Angle (radians)"
    ],
    [
        3,
        4,
        "=ATAN2(A2,B2)"
    ],
    [
        -1,
        -1,
        "=ATAN2(A3,B3)"
    ],
    [
        0,
        1,
        "=ATAN2(A4,B4)"
    ],
    [
        2,
        -3,
        "=ATAN2(A5,B5)"
    ]
]
            }]
        });
    }
}
```

