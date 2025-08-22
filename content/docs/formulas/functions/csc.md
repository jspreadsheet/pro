title: CSC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CSC function in Jspreadsheet

# CSC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CSC` function in Jspreadsheet Formulas Pro is used to calculate the cosecant of an angle. This angle should be provided in radians, not degrees. Simply put, the cosecant is the ratio of the length of the hypotenuse to the length of the opposite side in a right-angled triangle. This function is particularly useful in trigonometry calculations within your Jspreadsheet.

## Documentation

Calculates the cosecant of an angle given in radians.

### Category

Math and trigonometry

### Syntax

CSC(angle)

| Parameter | Description |
| ----------- | ------------- |
| `angle` | The angle in radians for which to calculate the cosecant. |


### Behavior

The 'CSC' function in a spreadsheet is used to calculate the cosecant of a given angle in radians. The cosecant of an angle is the reciprocal of the sine of that angle. Here's how 'CSC' handles various inputs:

- **Numbers:** The CSC function calculates the cosecant of the given number, treating it as an angle in radians.
- **Empty cells:** If the cell referenced by the CSC function is empty, the function will return an error.
- **Text:** If the cell referenced by the CSC function contains text, the function will return an error.
- **Booleans:** If the cell referenced by the CSC function contains a Boolean value (`TRUE` or `FALSE`), the function will return an error.
- **Errors:** If the cell referenced by the CSC function contains an error, the function will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the input to the CSC function cannot be interpreted as a numeric value in radians. This includes text, Boolean values, and empty cells. |
| #DIV/0! | This error is displayed when the CSC function attempts to calculate the cosecant of a number where the sine is zero, as the cosecant is the reciprocal of the sine. |

### Best practices
> - Always ensure that the input to the CSC function is a numeric value representing an angle in radians. If you have an angle in degrees, use the RADIANS function to convert it to radians first.
> - Be aware of the domain of the cosecant function. It is undefined for any angle where the sine is zero, so avoid inputting these values to prevent a #DIV/0! error.
> - Remember that the CSC function in spreadsheets may have limited precision. For very precise calculations, consider using a more specialized mathematical tool.
> - Use error handling functions like IFERROR to catch and handle errors in the CSC function. This can make your spreadsheet more robust and easier to use.

### Usage

A few examples using the CSC function.

```
CSC(0) returns #DIV/0!  
CSC(1) returns 1.18839510577812  
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
        "Cosecant"
    ],
    [
        0.5,
        "=CSC(A2)"
    ],
    [
        1,
        "=CSC(A3)"
    ],
    [
        1.5708,
        "=CSC(A4)"
    ],
    [
        3.14159,
        "=CSC(A5)"
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
        "Cosecant"
    ],
    [
        0.5,
        "=CSC(A2)"
    ],
    [
        1,
        "=CSC(A3)"
    ],
    [
        1.5708,
        "=CSC(A4)"
    ],
    [
        3.14159,
        "=CSC(A5)"
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
        "Cosecant"
    ],
    [
        0.5,
        "=CSC(A2)"
    ],
    [
        1,
        "=CSC(A3)"
    ],
    [
        1.5708,
        "=CSC(A4)"
    ],
    [
        3.14159,
        "=CSC(A5)"
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
        "Cosecant"
    ],
    [
        0.5,
        "=CSC(A2)"
    ],
    [
        1,
        "=CSC(A3)"
    ],
    [
        1.5708,
        "=CSC(A4)"
    ],
    [
        3.14159,
        "=CSC(A5)"
    ]
]
            }]
        });
    }
}
```

