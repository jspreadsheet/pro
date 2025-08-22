title: EVEN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EVEN function in Jspreadsheet

# EVEN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `EVEN` function in Jspreadsheet Formulas Pro is a useful tool that helps you round a number up to the nearest even integer. This means if the number is odd, the function will increase it by one to make it even. For instance, if you input 7, the function will output 8. This can be extremely helpful in various data analysis tasks where you need to work with even numbers.

## Documentation

The EVEN function rounds a number up to the nearest even integer.

### Category

Math and trigonometry

### Syntax

EVEN(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number to be rounded up to the nearest even integer. |


### Behavior

The 'EVEN' function in spreadsheet rounds a number up to the nearest even integer. The function takes a single argument, which is the number you want to round up. If the number is already even, the function returns the same number. If the number is odd, the function adds one to make it even.

- If the cell is empty, the 'EVEN' function treats it as 0.
- If the cell contains a boolean value, the function converts TRUE to 1 and FALSE to 0.
- If the cell contains a non-numeric text, the 'EVEN' function returns an error.
- If the argument is a numeric text, the function converts it into a number and then performs the operation.
- If the cell contains an error, the 'EVEN' function also returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given argument is non-numeric text. |
| #REF! | This error occurs when the given cell reference is not valid. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name 'EVEN'. |

### Best practices

> - Always ensure that the input value given to the 'EVEN' function is a numeric value to avoid the #VALUE! error.
> - Use valid cell references as arguments to avoid the #REF! error.
> - Check the spelling and syntax of the function name to avoid the #NAME? error.
> - Keep in mind that the 'EVEN' function always rounds up, so negative numbers are rounded away from zero to the next even number.

### Usage

A few examples using the EVEN function.

```
EVEN(3.2) returns 4  
EVEN(5) returns 6  
EVEN(A2) rounds the value in cell A2 up to the nearest even integer.  
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
        "Number",
        "Rounded to Even"
    ],
    [
        3.2,
        "=EVEN(A2)"
    ],
    [
        5.7,
        "=EVEN(A3)"
    ],
    [
        -2.1,
        "=EVEN(A4)"
    ],
    [
        8,
        "=EVEN(A5)"
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
        "Number",
        "Rounded to Even"
    ],
    [
        3.2,
        "=EVEN(A2)"
    ],
    [
        5.7,
        "=EVEN(A3)"
    ],
    [
        -2.1,
        "=EVEN(A4)"
    ],
    [
        8,
        "=EVEN(A5)"
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
        "Number",
        "Rounded to Even"
    ],
    [
        3.2,
        "=EVEN(A2)"
    ],
    [
        5.7,
        "=EVEN(A3)"
    ],
    [
        -2.1,
        "=EVEN(A4)"
    ],
    [
        8,
        "=EVEN(A5)"
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
        "Number",
        "Rounded to Even"
    ],
    [
        3.2,
        "=EVEN(A2)"
    ],
    [
        5.7,
        "=EVEN(A3)"
    ],
    [
        -2.1,
        "=EVEN(A4)"
    ],
    [
        8,
        "=EVEN(A5)"
    ]
]
            }]
        });
    }
}
```

