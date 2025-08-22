title: UPLUS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UPLUS function in Jspreadsheet

# UPLUS function

`PRO`{.jtag}

The `UPLUS` function in Jspreadsheet Formulas Pro is a straightforward tool that simply returns the number you specified, without any changes. This means if you input a positive number, it will output the same positive number, and likewise with a negative number. This function is useful in formulas where you want to ensure a specific number remains constant. It's an easy-to-use function, even for beginners, as it requires just one argument - the number you want to remain unchanged.

## Documentation

Returns the specified number, unchanged.

### Category

Math and trigonometry

### Syntax

UPLUS(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be returned. |


### Behavior

The `UPLUS` function in spreadsheets is a unary operator that returns the same value of the argument it is applied to. It is primarily used for clarity and consistency in complex formulas. Here are some behaviors to expect when using `UPLUS`:

- **Numbers**: The `UPLUS` function simply returns the same number. For example, `UPLUS(5)` will return `5`.
- **Empty cells**: If the `UPLUS` function is applied to an empty cell, it will return `0`.
- **Text**: When the `UPLUS` function is applied to a cell containing text, it will return `#VALUE!` error, as it expects a numeric value.
- **Booleans**: The `UPLUS` function will convert `TRUE` and `FALSE` into `1` and `0` respectively.
- **Errors**: If the `UPLUS` function is applied to a cell containing an error, it will propagate that error. For example, `UPLUS(#N/A)` will return `#N/A`.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the `UPLUS` function is applied to a cell containing non-numeric data, like text. |
| #N/A | This error will be returned by the `UPLUS` function when it is applied to a cell that has a `#N/A` error. |

### Best Practices
> - It's important to remember that `UPLUS` doesn't change the value or behavior of your data. It's primarily used for clarity in formulas.
> - Use `UPLUS` when you want to make it explicit that a number is positive in your formulas.
> - Avoid using `UPLUS` on non-numeric data to prevent `#VALUE!` errors.
> - Although `UPLUS` can technically be used on boolean values or empty cells, it's best to use it on numeric data for the sake of clarity.

### Usage

A few examples using the UPLUS function.

```
UPLUS(5) returns 5  
UPLUS(-7) returns -7  
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
        "Temperature (\u00b0C)",
        "Absolute Value",
        "Unchanged Value"
    ],
    [
        25,
        "=ABS(A2)",
        "=UPLUS(A2)"
    ],
    [
        -10,
        "=ABS(A3)",
        "=UPLUS(A3)"
    ],
    [
        0,
        "=ABS(A4)",
        "=UPLUS(A4)"
    ],
    [
        -5.5,
        "=ABS(A5)",
        "=UPLUS(A5)"
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
        "Temperature (\u00b0C)",
        "Absolute Value",
        "Unchanged Value"
    ],
    [
        25,
        "=ABS(A2)",
        "=UPLUS(A2)"
    ],
    [
        -10,
        "=ABS(A3)",
        "=UPLUS(A3)"
    ],
    [
        0,
        "=ABS(A4)",
        "=UPLUS(A4)"
    ],
    [
        -5.5,
        "=ABS(A5)",
        "=UPLUS(A5)"
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
        "Temperature (\u00b0C)",
        "Absolute Value",
        "Unchanged Value"
    ],
    [
        25,
        "=ABS(A2)",
        "=UPLUS(A2)"
    ],
    [
        -10,
        "=ABS(A3)",
        "=UPLUS(A3)"
    ],
    [
        0,
        "=ABS(A4)",
        "=UPLUS(A4)"
    ],
    [
        -5.5,
        "=ABS(A5)",
        "=UPLUS(A5)"
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
        "Temperature (\u00b0C)",
        "Absolute Value",
        "Unchanged Value"
    ],
    [
        25,
        "=ABS(A2)",
        "=UPLUS(A2)"
    ],
    [
        -10,
        "=ABS(A3)",
        "=UPLUS(A3)"
    ],
    [
        0,
        "=ABS(A4)",
        "=UPLUS(A4)"
    ],
    [
        -5.5,
        "=ABS(A5)",
        "=UPLUS(A5)"
    ]
]
            }]
        });
    }
}
```

