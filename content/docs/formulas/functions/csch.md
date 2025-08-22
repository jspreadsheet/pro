title: CSCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CSCH function in Jspreadsheet

# CSCH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CSCH` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the hyperbolic cosecant of an angle. This angle should be provided in radians, not degrees. The hyperbolic cosecant is the reciprocal of the hyperbolic sine of an angle. This function is useful for complex mathematical calculations involving trigonometry.

## Documentation

Calculates the hyperbolic cosecant of an angle given in radians.

### Category

Math and trigonometry

### Syntax

CSCH(angle)

| Parameter | Description |
| ----------- | ------------- |
| `angle` | The angle in radians for which to calculate the hyperbolic cosecant. |


### Behavior

The 'CSCH' function in spreadsheets calculates the hyperbolic cosecant of a given number. The general behavior of the 'CSCH' function in different scenarios is as follows:

- **Numbers**: The 'CSCH' function takes a numerical value as argument and returns the hyperbolic cosecant of that number. 
- **Empty cells**: If the 'CSCH' function is applied to an empty cell, it usually considers the cell to contain a zero, and will return an error because the hyperbolic cosecant of zero is undefined.
- **Text**: If the 'CSCH' function is applied to a cell containing text, it will typically return an error, as the hyperbolic cosecant function is not applicable to text strings.
- **Booleans**: Boolean values are generally treated as 1 for TRUE and 0 for FALSE. As the hyperbolic cosecant of 0 is undefined, this will return an error for FALSE. For TRUE, the function will return the hyperbolic cosecant of 1.
- **Errors**: If the cell reference or the argument in the 'CSCH' function contains an error, the function will propagate that error.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| #VALUE! | This error occurs when the input argument is non-numeric or a boolean FALSE (because CSCH(0) is undefined). |
| #NUM! | This error is returned when the computation results in a number too large to be represented in the spreadsheet. |

### Best practices

> - Always ensure that the input to the 'CSCH' function is a numerical value. The function does not work with text or Boolean values.
> - Be aware that the 'CSCH' function will propagate any errors from the referenced cells in its arguments.
> - Use absolute cell references in your 'CSCH' function if you want to copy it across multiple cells.
> - Always remember that the 'CSCH' function in spreadsheets returns the hyperbolic cosecant of a number, not the regular cosecant.

### Usage

A few examples using the CSCH function.

```
CSCH(0) returns #DIV/0!  
CSCH(1) returns 0.850918128239322  
CSCH(2) returns 0.275720565  
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
        "CSCH Value"
    ],
    [
        0.5,
        "=CSCH(A2)"
    ],
    [
        1,
        "=CSCH(A3)"
    ],
    [
        1.5,
        "=CSCH(A4)"
    ],
    [
        2,
        "=CSCH(A5)"
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
        "CSCH Value"
    ],
    [
        0.5,
        "=CSCH(A2)"
    ],
    [
        1,
        "=CSCH(A3)"
    ],
    [
        1.5,
        "=CSCH(A4)"
    ],
    [
        2,
        "=CSCH(A5)"
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
        "CSCH Value"
    ],
    [
        0.5,
        "=CSCH(A2)"
    ],
    [
        1,
        "=CSCH(A3)"
    ],
    [
        1.5,
        "=CSCH(A4)"
    ],
    [
        2,
        "=CSCH(A5)"
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
        "CSCH Value"
    ],
    [
        0.5,
        "=CSCH(A2)"
    ],
    [
        1,
        "=CSCH(A3)"
    ],
    [
        1.5,
        "=CSCH(A4)"
    ],
    [
        2,
        "=CSCH(A5)"
    ]
]
            }]
        });
    }
}
```

