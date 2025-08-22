title: ODD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ODD function in Jspreadsheet

# ODD function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `ODD` function is used to round a given number up to the nearest odd integer. If the number is already odd, it will remain the same. But if it's even, the function will increase it by one to make it odd. This function can be very useful in various calculations where the result needs to be an odd number.

## Documentation

Rounds a number up to the nearest odd integer.

### Category

Math and trigonometry

### Syntax

ODD(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number you want to round up to the nearest odd integer. |


### Behavior

The 'ODD' function in spreadsheets rounds a number up to the nearest odd integer. It takes one argument, which is the numeric value you want to round up. Here's how it handles different types of input:

- **Numbers**: The 'ODD' function works as expected with numeric inputs, rounding up to the nearest odd integer. If the input is already an odd integer, it remains the same.

- **Empty cells**: If the 'ODD' function is applied to an empty cell, it will return an error because it expects a numeric input.

- **Text**: 'ODD' treats cells containing text as an error because it expects a numeric input.

- **Booleans**: If the 'ODD' function is applied to a cell containing a boolean (TRUE or FALSE), the boolean is implicitly converted to a numeric value (1 for TRUE, 0 for FALSE) before the function is applied.

- **Errors**: If the input to the 'ODD' function is an error, the function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the 'ODD' function is applied to a cell containing non-numeric data, such as text or an error. |
| #NUM! | This error is displayed when the 'ODD' function is applied to a cell containing a numeric value that is too large or too small to be represented as a spreadsheet number. |

### Best practices

> - Always ensure that the input to the 'ODD' function is a number or a reference to a cell containing a number.
> - Be aware that the 'ODD' function will round up to the next odd integer, even if the input number is negative.
> - Use error handling functions like 'IFERROR' or 'ISNUMBER' to handle potential errors in the 'ODD' function.
> - Remember that booleans are implicitly converted to numbers before the 'ODD' function is applied. To avoid confusion, it is recommended to explicitly convert booleans to numbers before using them as input for the 'ODD' function.

### Usage

A few examples using the ODD function.

```
ODD(1.5) returns 3  
ODD(-2.5) returns -3  
ODD(4) returns 5  
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
        "Value",
        "Rounded to Odd"
    ],
    [
        1.2,
        "=ODD(A2)"
    ],
    [
        4.7,
        "=ODD(A3)"
    ],
    [
        -2.3,
        "=ODD(A4)"
    ],
    [
        8,
        "=ODD(A5)"
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
        "Value",
        "Rounded to Odd"
    ],
    [
        1.2,
        "=ODD(A2)"
    ],
    [
        4.7,
        "=ODD(A3)"
    ],
    [
        -2.3,
        "=ODD(A4)"
    ],
    [
        8,
        "=ODD(A5)"
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
        "Value",
        "Rounded to Odd"
    ],
    [
        1.2,
        "=ODD(A2)"
    ],
    [
        4.7,
        "=ODD(A3)"
    ],
    [
        -2.3,
        "=ODD(A4)"
    ],
    [
        8,
        "=ODD(A5)"
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
        "Value",
        "Rounded to Odd"
    ],
    [
        1.2,
        "=ODD(A2)"
    ],
    [
        4.7,
        "=ODD(A3)"
    ],
    [
        -2.3,
        "=ODD(A4)"
    ],
    [
        8,
        "=ODD(A5)"
    ]
]
            }]
        });
    }
}
```

