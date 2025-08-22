title: DEGREES function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DEGREES function in Jspreadsheet

# DEGREES function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DEGREES` function in Jspreadsheet Formulas Pro is a tool that converts radians into degrees. This is especially useful when dealing with mathematical and trigonometric computations that involve angles. By inputting a value in radians into the `DEGREES` function, it will output the equivalent value in degrees. This function makes it easier and more efficient to switch between these two units of angle measurement.

## Documentation

Converts radians to degrees.

### Category

Math and trigonometry

### Syntax

DEGREES(angle)

| Parameter | Description |
| ----------- | ------------- |
| `angle` | The angle in radians you want to convert to degrees. |


### Behavior

The `DEGREES` spreadsheet function is used to convert radians into degrees. The function takes a single argument, which is the numeric value in radians that you want to convert. Here's how it handles different types of data:

- **Empty Cells**: If the cell referenced in the `DEGREES` function is empty, the function will return a value of 0. 
- **Text**: If the cell referenced contains text, the function will return an error, as it only accepts numeric values.
- **Booleans**: If a boolean value (TRUE or FALSE) is used in place of the number argument in the `DEGREES` function, it will be treated as 1 for TRUE and 0 for FALSE.
- **Errors**: If the argument to the `DEGREES` function is an error, the function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the supplied argument is non-numeric. |
| #DIV/0! | This error occurs if the provided argument is a division operation that results in division by zero. |
| #NAME? | This error occurs if the function name is misspelled or missing. |

### Best practices

> - Always ensure the value you are converting using the `DEGREES` function is a numeric value. Text or string values will result in an error.
> - Be careful when referencing other cells. Make sure the cell you are referencing contains a valid numeric value.
> - Use the companion function `RADIANS` when you need to convert degrees back to radians.
> - Remember that `DEGREES` function treats boolean values as numbers, with TRUE as 1 and FALSE as 0. Ensure your data does not contain unexpected boolean values.

### Usage

A few examples using the DEGREES function.

```
DEGREES(PI()) returns 180 (degrees in a half circle)  
DEGREES(0.5236) returns 30 (degrees in an acute angle)  
DEGREES(-1.0472) returns -60 (degrees in an obtuse angle)  
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
        "Radians",
        "Degrees"
    ],
    [
        3.14159,
        "=DEGREES(A2)"
    ],
    [
        1.5708,
        "=DEGREES(A3)"
    ],
    [
        0.7854,
        "=DEGREES(A4)"
    ],
    [
        -2.0944,
        "=DEGREES(A5)"
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
        "Radians",
        "Degrees"
    ],
    [
        3.14159,
        "=DEGREES(A2)"
    ],
    [
        1.5708,
        "=DEGREES(A3)"
    ],
    [
        0.7854,
        "=DEGREES(A4)"
    ],
    [
        -2.0944,
        "=DEGREES(A5)"
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
        "Radians",
        "Degrees"
    ],
    [
        3.14159,
        "=DEGREES(A2)"
    ],
    [
        1.5708,
        "=DEGREES(A3)"
    ],
    [
        0.7854,
        "=DEGREES(A4)"
    ],
    [
        -2.0944,
        "=DEGREES(A5)"
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
        "Radians",
        "Degrees"
    ],
    [
        3.14159,
        "=DEGREES(A2)"
    ],
    [
        1.5708,
        "=DEGREES(A3)"
    ],
    [
        0.7854,
        "=DEGREES(A4)"
    ],
    [
        -2.0944,
        "=DEGREES(A5)"
    ]
]
            }]
        });
    }
}
```

