title: TRUNC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TRUNC function in Jspreadsheet

# TRUNC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TRUNC` function in Jspreadsheet Formulas Pro is a tool that allows you to shorten a number to a specific number of decimal places. It does this by eliminating the fractional part of the number. For example, if you have the number 3.14159 and use the `TRUNC` function to specify one decimal place, the result will be 3.1. It is a handy tool for managing the precision of numbers in your calculations.

## Documentation

Truncates a number to a specified number of decimal places by removing the fractional part of the number.

### Category

Math and trigonometry

### Syntax

TRUNC(number, [num_digits])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number you want to truncate. |
| `[num_digits]` | Optional. The number of digits to which you want to round. If omitted, the function returns the integer portion of the number. |


### Behavior

The `TRUNC` function in spreadsheets removes all fractional parts of a number. It does so without rounding. Here's how it behaves with different types of inputs:

- **Numbers**: `TRUNC` works best with numeric inputs. It simply removes the decimal part of the number, without rounding it.
- **Empty cells**: If an empty cell is given as input, `TRUNC` will return a `#NUM!` error, indicating that the input is not a number. 
- **Text**: If a text string is passed as an argument, `TRUNC` will return a `#VALUE!` error, as it expects a numeric input.
- **Booleans**: `TRUNC` will treat boolean values as numbers, where TRUE is 1 and FALSE is 0. Thus, `TRUNC` applied to a boolean will always return 1 or 0.
- **Errors**: If the input cell has an error, `TRUNC` will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error occurs when the input to `TRUNC` is an empty cell or a cell with a non-numeric value. |
| #VALUE! | This error occurs when the input to `TRUNC` is a text string. It's because `TRUNC` expects a numeric input. |

### Best practices

> - Use `TRUNC` when you want to remove the decimal part of a number without rounding. 
> - Be aware of the data type of your input. `TRUNC` works best with numeric inputs and will return errors with non-numeric inputs.
> - If you want to truncate to a certain number of decimal places, you can provide a second argument to the `TRUNC` function.
> - Remember that `TRUNC` treats boolean values as numbers, so applying `TRUNC` to a boolean will always return 1 or 0.

### Usage

A few examples using the TRUNC function.

```
TRUNC(10.12345) returns 10  
TRUNC(10.12345, 2) returns 10.12  
TRUNC(-10.12345, 3) returns -10.123  
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
        "Original Number",
        "Decimal Places",
        "Truncated Result"
    ],
    [
        3.14159,
        2,
        "=TRUNC(A2,B2)"
    ],
    [
        15.789456,
        0,
        "=TRUNC(A3,B3)"
    ],
    [
        -7.654321,
        3,
        "=TRUNC(A4,B4)"
    ],
    [
        100.999,
        1,
        "=TRUNC(A5,B5)"
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
        "Original Number",
        "Decimal Places",
        "Truncated Result"
    ],
    [
        3.14159,
        2,
        "=TRUNC(A2,B2)"
    ],
    [
        15.789456,
        0,
        "=TRUNC(A3,B3)"
    ],
    [
        -7.654321,
        3,
        "=TRUNC(A4,B4)"
    ],
    [
        100.999,
        1,
        "=TRUNC(A5,B5)"
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
        "Original Number",
        "Decimal Places",
        "Truncated Result"
    ],
    [
        3.14159,
        2,
        "=TRUNC(A2,B2)"
    ],
    [
        15.789456,
        0,
        "=TRUNC(A3,B3)"
    ],
    [
        -7.654321,
        3,
        "=TRUNC(A4,B4)"
    ],
    [
        100.999,
        1,
        "=TRUNC(A5,B5)"
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
        "Original Number",
        "Decimal Places",
        "Truncated Result"
    ],
    [
        3.14159,
        2,
        "=TRUNC(A2,B2)"
    ],
    [
        15.789456,
        0,
        "=TRUNC(A3,B3)"
    ],
    [
        -7.654321,
        3,
        "=TRUNC(A4,B4)"
    ],
    [
        100.999,
        1,
        "=TRUNC(A5,B5)"
    ]
]
            }]
        });
    }
}
```

