title: ERF.PRECISE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ERF.PRECISE function in Jspreadsheet

# ERF.PRECISE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The ERF.PRECISE function in Jspreadsheet Formulas Pro is a tool that calculates the error function of a specific number, providing a high level of accuracy up to about 15 digits. This function is particularly useful in areas such as statistical analysis and probability calculations. Essentially, it is employed to understand variations or errors in data. With Jspreadsheet Formulas Pro, implementing the ERF.PRECISE function is simple and efficient, making it a handy tool even for beginners.

## Documentation

The ERF.PRECISE function returns the error function of a number, accurate to approximately 15 digits.

### Category

Engineering

### Syntax

ERF.PRECISE(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the error function. |


### Behavior

The `ERF.PRECISE` function in a spreadsheet calculates the error function integrated between 0 and a specified limit. The function takes one argument which should be a numerical value. 

- When an empty cell is referenced, `ERF.PRECISE` treats it as a 0.
- If the cell contains text, `ERF.PRECISE` returns a `#VALUE!` error.
- Booleans are coerced to integers, with TRUE being interpreted as 1 and FALSE as 0.
- If the referenced cell contains an error, `ERF.PRECISE` propagates the error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The input argument is non-numeric, such as text, or a cell reference to a text cell. |
| #NUM! | The input argument is less than -1 or greater than 1. |

### Best practices

> - Always ensure that the input to the `ERF.PRECISE` function is a numeric value between -1 and 1, otherwise it will return an error.
> - When using cell references as the function's argument, make sure that the referenced cell contains a valid numerical input to avoid `#VALUE!` or `#NUM!` errors.
> - Use `ERF.PRECISE` when you need to calculate the error function for a specific value in statistical or scientific computations, but be aware that it's not commonly used in general data analysis.
> - Remember that `ERF.PRECISE` treats empty cells and FALSE as 0, and TRUE as 1. Be cautious about this automatic coercion when the function is used with logical or empty values.

### Usage

A few examples using the ERF.PRECISE function.

```
ERF.PRECISE(0) returns 0  
ERF.PRECISE(1.5) returns 0.96610514647531  
ERF.PRECISE(A2) returns the error function of the value in cell A2.  
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERF.PRECISE(A3)"
    ],
    [
        1,
        "=ERF.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERF.PRECISE(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERF.PRECISE(A3)"
    ],
    [
        1,
        "=ERF.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERF.PRECISE(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERF.PRECISE(A3)"
    ],
    [
        1,
        "=ERF.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERF.PRECISE(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERF.PRECISE(A3)"
    ],
    [
        1,
        "=ERF.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERF.PRECISE(A5)"
    ]
]
            }]
        });
    }
}
```

