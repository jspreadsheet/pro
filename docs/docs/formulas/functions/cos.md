title: COS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COS function in Jspreadsheet

# COS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COS` function in Jspreadsheet Formulas Pro is a mathematical function that allows you to calculate the cosine of a specific angle. The angle should be provided in radians, not degrees. Simply enter the angle into the function and it will return the cosine value. This is particularly useful for various calculations in fields like physics, engineering, and computer graphics.

## Documentation

Returns the cosine of an angle provided in radians.

### Category

Math and trigonometry

### Syntax

COS(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The angle for which you want to calculate the cosine, in radians. |


### Behavior

The `COS` function in a spreadsheet calculates the cosine of the given angle. The angle should be provided in radians. Here are some common behaviors:

- **Empty cells**: If the `COS` function is applied to an empty cell, it will return an error, as it expects a numeric value as an input.
- **Text**: The `COS` function cannot process text. If a text string is provided as an input, the function will return an error.
- **Booleans**: If a Boolean value (TRUE or FALSE) is provided as input, the function will interpret TRUE as 1 and FALSE as 0, and it will compute the cosine of these values.
- **Errors**: If the cell to which the `COS` function is applied contains an error, the function will also return an error.
- **Non-numeric values**: The `COS` function expects a numeric value (in radians) as input. If a non-numeric value is provided, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the input to the `COS` function is non-numeric, such as a text string. |
| #DIV/0! | This error is displayed when the input to the `COS` function is a cell that contains the error DIV/0. |
| #REF! | This error is displayed when the input to the `COS` function is a cell that contains the error REF. |
| #NAME? | This error is displayed when the spreadsheet doesn't recognize the `COS` function, possibly due to a typo. |

### Best practices

> - Always ensure that the input to the `COS` function is a numeric value. Providing a non-numeric value will result in an error.
> - Remember that the `COS` function expects input in radians. If you have an angle in degrees, you will need to convert it to radians before using the `COS` function.
> - Use error handling mechanisms to handle potential errors that might arise when the `COS` function is applied to a cell that contains non-numeric values or errors.
> - Avoid using the `COS` function on large ranges of cells to prevent slow down in the spreadsheet's performance.

### Usage

A few examples using the COS function.

```
COS(0) returns 1  
COS(PI()) returns -1  
COS(PI()/4) returns 0.707  
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
        "Cosine Value"
    ],
    [
        0,
        "=COS(A2)"
    ],
    [
        "=PI()/6",
        "=COS(A3)"
    ],
    [
        "=PI()/4",
        "=COS(A4)"
    ],
    [
        "=PI()/2",
        "=COS(A5)"
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
        "Cosine Value"
    ],
    [
        0,
        "=COS(A2)"
    ],
    [
        "=PI()/6",
        "=COS(A3)"
    ],
    [
        "=PI()/4",
        "=COS(A4)"
    ],
    [
        "=PI()/2",
        "=COS(A5)"
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
        "Cosine Value"
    ],
    [
        0,
        "=COS(A2)"
    ],
    [
        "=PI()/6",
        "=COS(A3)"
    ],
    [
        "=PI()/4",
        "=COS(A4)"
    ],
    [
        "=PI()/2",
        "=COS(A5)"
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
        "Cosine Value"
    ],
    [
        0,
        "=COS(A2)"
    ],
    [
        "=PI()/6",
        "=COS(A3)"
    ],
    [
        "=PI()/4",
        "=COS(A4)"
    ],
    [
        "=PI()/2",
        "=COS(A5)"
    ]
]
            }]
        });
    }
}
```

