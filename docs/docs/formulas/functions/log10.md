title: LOG10 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOG10 function in Jspreadsheet

# LOG10 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LOG10` function in Jspreadsheet Formulas Pro is a mathematical tool used to calculate the base-10 logarithm of a specific number. Essentially, it helps you determine what power you need to raise 10 to, in order to get your number. For instance, if you use `LOG10` on the number 1000, the result will be 3, because 10 to the power of 3 equals 1000. This function is particularly useful in various mathematical calculations and data analysis tasks.

## Documentation

Returns the base-10 logarithm of a number.

### Category

Math and trigonometry

### Syntax

LOG10(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The positive real number for which you want to find the base-10 logarithm. |


### Behavior

The `LOG10` function in spreadsheets is used to calculate the base 10 logarithm of a number. Here's how it handles various scenarios:

- **Numbers**: `LOG10` function can be used with positive numbers. Negative numbers and zero will not work with this function and will return a `#NUM!` error.
- **Empty Cells**: If the `LOG10` function is used on an empty cell, it will return a `#NUM!` error.
- **Text**: If a text value is used as an argument for the `LOG10` function, it will return a `#VALUE!` error.
- **Booleans**: If a boolean value (TRUE/FALSE) is used as an argument, it will be interpreted as 1 for TRUE and 0 for FALSE. `LOG10` of FALSE will return a `#NUM!` error as logarithm of zero is undefined.
- **Errors**: If the cell referenced in the `LOG10` function has an error, the function will return the same error.

### Common Errors

| Error | Description |
| ------| ----------- |
| #NUM! | This error occurs when the input to the `LOG10` function is less than or equal to zero. Logarithm of negative numbers and zero is undefined. |
| #VALUE! | This error occurs when the input to the `LOG10` function is not a number i.e., it's a text value. |
| #REF! | This error occurs when the cell reference is invalid. |

### Best practices

> - Always ensure that the input to the `LOG10` function is a positive number. Negative numbers and zero will return an error as their logarithm in base 10 is undefined.
> - Avoid using text or boolean values as the input to the `LOG10` function. If it's necessary, convert them to numbers first.
> - Be cautious of invalid cell references to prevent `#REF!` error.
> - For better readability and maintenance of your spreadsheet, consider using cell reference rather than hard-coded numbers as inputs to the `LOG10` function.

### Usage

A few examples using the LOG10 function.

```
LOG10(1) returns 0 because log base 10 of 1 is 0  
LOG10(100) returns 2 because log base 10 of 100 is 2  
LOG10(A1) returns the base-10 logarithm of the value contained in cell A1.  
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
        "LOG10 Result"
    ],
    [
        1,
        "=LOG10(A2)"
    ],
    [
        10,
        "=LOG10(A3)"
    ],
    [
        100,
        "=LOG10(A4)"
    ],
    [
        1000,
        "=LOG10(A5)"
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
        "LOG10 Result"
    ],
    [
        1,
        "=LOG10(A2)"
    ],
    [
        10,
        "=LOG10(A3)"
    ],
    [
        100,
        "=LOG10(A4)"
    ],
    [
        1000,
        "=LOG10(A5)"
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
        "LOG10 Result"
    ],
    [
        1,
        "=LOG10(A2)"
    ],
    [
        10,
        "=LOG10(A3)"
    ],
    [
        100,
        "=LOG10(A4)"
    ],
    [
        1000,
        "=LOG10(A5)"
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
        "LOG10 Result"
    ],
    [
        1,
        "=LOG10(A2)"
    ],
    [
        10,
        "=LOG10(A3)"
    ],
    [
        100,
        "=LOG10(A4)"
    ],
    [
        1000,
        "=LOG10(A5)"
    ]
]
            }]
        });
    }
}
```

