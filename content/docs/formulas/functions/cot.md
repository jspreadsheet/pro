title: COT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COT function in Jspreadsheet

# COT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COT` function in Jspreadsheet Formulas Pro is a mathematical function that gives you the cotangent of a specific angle. This angle should be given in radians, not in degrees. It's a helpful tool when you're working with trigonometric calculations within your spreadsheet. Remember, the cotangent is simply the reciprocal of the tangent of the angle.

## Documentation

Returns the cotangent of an angle provided in radians.

### Category

Math and trigonometry

### Syntax

COT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The angle for which you want to calculate the cotangent, in radians. |


### Behavior

The `COT` function in spreadsheets returns the cotangent of a given number. The cotangent of an angle is the ratio of the length of the adjacent side to the length of the opposite side in a right-angled triangle. 

- If the cell is empty, the `COT` function treats it as zero, returning an error since cotangent of zero is undefined. 
- If the cell contains text that cannot be converted into a number, the `COT` function returns a `#VALUE!` error.
- If the cell contains a boolean value, `TRUE` is interpreted as 1 and `FALSE` as 0. Since cotangent of 0 is undefined, `COT(FALSE)` returns an error. 
- If the input number results in a cotangent that is too large for the spreadsheet to handle, it returns a `#NUM!` error. 
- The `COT` function expects the input in radians. If your values are in degrees, you need to convert them to radians first.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when the input argument is non-numeric or is text that cannot be translated into a number. |
| `#NUM!` | This error is returned when the result of the cotangent operation is a number too large for the spreadsheet to handle, or when the input is a negative number. |
| `#DIV/0!` | This error is returned when the input is zero, as cotangent of zero is undefined. |

### Best practices

> - Always ensure that the input for the `COT` function is in radians. If your data is in degrees, convert it to radians first using the `RADIANS` function.
> - Beware of using zero as an input to the `COT` function, as it will result in a `#DIV/0!` error because cotangent of zero is undefined.
> - Use error handling functions like `IFERROR` to gracefully handle scenarios when errors might be returned.
> - Ensure your data doesn't contain non-numeric values to avoid the `#VALUE!` error.

### Usage

A few examples using the COT function.

```
COT(0) returns #DIV/0!  
COT(PI()/4) returns 1  
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
        "Cotangent"
    ],
    [
        "=PI()/6",
        "=COT(A2)"
    ],
    [
        "=PI()/4",
        "=COT(A3)"
    ],
    [
        "=PI()/3",
        "=COT(A4)"
    ],
    [
        "=PI()/2",
        "=COT(A5)"
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
        "Cotangent"
    ],
    [
        "=PI()/6",
        "=COT(A2)"
    ],
    [
        "=PI()/4",
        "=COT(A3)"
    ],
    [
        "=PI()/3",
        "=COT(A4)"
    ],
    [
        "=PI()/2",
        "=COT(A5)"
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
        "Cotangent"
    ],
    [
        "=PI()/6",
        "=COT(A2)"
    ],
    [
        "=PI()/4",
        "=COT(A3)"
    ],
    [
        "=PI()/3",
        "=COT(A4)"
    ],
    [
        "=PI()/2",
        "=COT(A5)"
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
        "Cotangent"
    ],
    [
        "=PI()/6",
        "=COT(A2)"
    ],
    [
        "=PI()/4",
        "=COT(A3)"
    ],
    [
        "=PI()/3",
        "=COT(A4)"
    ],
    [
        "=PI()/2",
        "=COT(A5)"
    ]
]
            }]
        });
    }
}
```

