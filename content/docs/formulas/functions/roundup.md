title: ROUNDUP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROUNDUP function in Jspreadsheet

# ROUNDUP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ROUNDUP` function in Jspreadsheet Formulas Pro is a handy tool that allows you to round a number upwards to a certain amount of digits. This function is particularly useful when you want to avoid decimal points in your calculations or when you need to round up to a certain precision level. You only need to input the number you want to round and specify the number of digits you want. The result will be your input number, rounded up as per your specification.

## Documentation

Rounds a number up to a specified number of digits.

### Category

Math and trigonometry

### Syntax

ROUNDUP(number, num_digits)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number you want to round up. |
| `num_digits` | The number of digits to which you want to round up the number. |


### Behavior

The `ROUNDUP` function in spreadsheets rounds a number up, away from zero, to a specified number of digits. This function takes two arguments: the number to round up and the number of digits to which to round. Here's how it handles different types of input:

- **Numbers**: The function works as expected, rounding up the number to the specified number of digits.
- **Empty cells**: If a cell referred to by the function is empty, it is treated as zero.
- **Text**: If the function refers to a cell containing text, it will return an error.
- **Booleans**: If the function refers to a cell containing a boolean value (TRUE or FALSE), it will return an error.
- **Errors**: If the function refers to a cell that contains an error, it will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the function refers to a cell containing non-numeric values like text or boolean values. |
| #DIV/0! | This error might occur if you're trying to round to a number of digits that isn't valid, like a negative number or a fraction. |
| #NUM! | This error occurs if the number to be rounded is non-numeric or the digits argument is less than zero. |

### Best practices

> - Always ensure that the cells referred to in the `ROUNDUP` function contain numeric values to avoid errors.
> - Be cautious when using `ROUNDUP` with other functions as it always rounds up. This can sometimes give different results compared to other rounding functions like `ROUND` or `ROUNDDOWN`.
> - Use the `ROUNDUP` function when you want to always round up a number, regardless of the value of the fractional part.
> - Remember that the `ROUNDUP` function can also round to the left of the decimal point. For example, if you want to round up to the nearest ten, you can use the `ROUNDUP` function with -1 as the number of digits.

### Usage

A few examples using the ROUNDUP function.

```
ROUNDUP(3.14159, 2) returns 3.15  
ROUNDUP(99.45, 0) returns 100  
ROUNDUP(1234.56789, -2) returns 1300  
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
        "Original Value",
        "Rounded Up (2 digits)",
        "Rounded Up (0 digits)"
    ],
    [
        3.14159,
        "=ROUNDUP(A2,2)",
        "=ROUNDUP(A2,0)"
    ],
    [
        99.456,
        "=ROUNDUP(A3,2)",
        "=ROUNDUP(A3,0)"
    ],
    [
        123.789,
        "=ROUNDUP(A4,2)",
        "=ROUNDUP(A4,0)"
    ],
    [
        45.123,
        "=ROUNDUP(A5,2)",
        "=ROUNDUP(A5,0)"
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
        "Original Value",
        "Rounded Up (2 digits)",
        "Rounded Up (0 digits)"
    ],
    [
        3.14159,
        "=ROUNDUP(A2,2)",
        "=ROUNDUP(A2,0)"
    ],
    [
        99.456,
        "=ROUNDUP(A3,2)",
        "=ROUNDUP(A3,0)"
    ],
    [
        123.789,
        "=ROUNDUP(A4,2)",
        "=ROUNDUP(A4,0)"
    ],
    [
        45.123,
        "=ROUNDUP(A5,2)",
        "=ROUNDUP(A5,0)"
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
        "Original Value",
        "Rounded Up (2 digits)",
        "Rounded Up (0 digits)"
    ],
    [
        3.14159,
        "=ROUNDUP(A2,2)",
        "=ROUNDUP(A2,0)"
    ],
    [
        99.456,
        "=ROUNDUP(A3,2)",
        "=ROUNDUP(A3,0)"
    ],
    [
        123.789,
        "=ROUNDUP(A4,2)",
        "=ROUNDUP(A4,0)"
    ],
    [
        45.123,
        "=ROUNDUP(A5,2)",
        "=ROUNDUP(A5,0)"
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
        "Original Value",
        "Rounded Up (2 digits)",
        "Rounded Up (0 digits)"
    ],
    [
        3.14159,
        "=ROUNDUP(A2,2)",
        "=ROUNDUP(A2,0)"
    ],
    [
        99.456,
        "=ROUNDUP(A3,2)",
        "=ROUNDUP(A3,0)"
    ],
    [
        123.789,
        "=ROUNDUP(A4,2)",
        "=ROUNDUP(A4,0)"
    ],
    [
        45.123,
        "=ROUNDUP(A5,2)",
        "=ROUNDUP(A5,0)"
    ]
]
            }]
        });
    }
}
```

