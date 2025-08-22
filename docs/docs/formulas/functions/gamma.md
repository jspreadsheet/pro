title: GAMMA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAMMA function in Jspreadsheet

# GAMMA function

`PRO`{.jtag}

The `GAMMA` function in Jspreadsheet Formulas Pro calculates the gamma function, which is a broader version of the factorial function that works with not only integers, but also real and complex numbers. If you input a number into this function, it performs the gamma operation on that number. The result can be used in a wide range of mathematical and scientific calculations. This powerful tool is a great addition to your spreadsheet toolkit, especially if you're dealing with advanced numerical data.

## Documentation

Calculates the gamma function, which is a generalization of the factorial function to real and complex numbers.

### Category

Statistical

### Syntax

GAMMA(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number for which you want to calculate the gamma function. |


### Behavior

The `GAMMA` function in spreadsheets is used to return the Gamma function value. Here is how it handles different kinds of input:
1. **Numbers**: The `GAMMA` function handles positive numbers correctly and returns the correct Gamma function value. For negative integers and zero, the function returns an error as the Gamma function is undefined for these values.
2. **Text**: If a cell containing text is passed to the `GAMMA` function, it returns a `#VALUE!` error.
3. **Booleans**: When Boolean values (`TRUE` or `FALSE`) are used as input, they are treated as `1` and `0` respectively. However, since the Gamma function is undefined for `0`, `GAMMA(FALSE)` would return an error.
4. **Empty cells**: If an empty cell is used as an argument, `GAMMA` function treats it as `0` and hence, returns an error.
5. **Errors**: If the reference cell contains an error, the `GAMMA` function also returns an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the input argument to the `GAMMA` function is non-numeric, such as a text string. |
| #NUM! | This error is returned when the input to the `GAMMA` function is a negative integer or zero, as the Gamma function is undefined for these values. |

### Best practices

> - Always ensure that the input to the `GAMMA` function is a positive number. Negative integers and zero will result in an error.
> - Be careful when referencing cells as input to the `GAMMA` function. Ensure these cells do not contain text, errors, or empty values to avoid unexpected errors.
> - Use error handling functions like `IFERROR` to handle possible errors and improve the robustness of your spreadsheet.
> - The `GAMMA` function can handle real numbers as well. However, be aware that the results for non-integer values may not be as immediately understandable as for integers.

### Usage

A few examples using the GAMMA function.

```
GAMMA(0.5) returns 1.77245385091  
GAMMA(2.5) returns 1.32934038818  
GAMMA(4) returns 6  
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
        "Gamma Function",
        "Factorial (for integers)"
    ],
    [
        0.5,
        "=GAMMA(A2)",
        "N/A"
    ],
    [
        2.5,
        "=GAMMA(A3)",
        "N/A"
    ],
    [
        4,
        "=GAMMA(A4)",
        "=FACT(A4-1)"
    ],
    [
        5,
        "=GAMMA(A5)",
        "=FACT(A5-1)"
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
        "Gamma Function",
        "Factorial (for integers)"
    ],
    [
        0.5,
        "=GAMMA(A2)",
        "N/A"
    ],
    [
        2.5,
        "=GAMMA(A3)",
        "N/A"
    ],
    [
        4,
        "=GAMMA(A4)",
        "=FACT(A4-1)"
    ],
    [
        5,
        "=GAMMA(A5)",
        "=FACT(A5-1)"
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
        "Gamma Function",
        "Factorial (for integers)"
    ],
    [
        0.5,
        "=GAMMA(A2)",
        "N/A"
    ],
    [
        2.5,
        "=GAMMA(A3)",
        "N/A"
    ],
    [
        4,
        "=GAMMA(A4)",
        "=FACT(A4-1)"
    ],
    [
        5,
        "=GAMMA(A5)",
        "=FACT(A5-1)"
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
        "Gamma Function",
        "Factorial (for integers)"
    ],
    [
        0.5,
        "=GAMMA(A2)",
        "N/A"
    ],
    [
        2.5,
        "=GAMMA(A3)",
        "N/A"
    ],
    [
        4,
        "=GAMMA(A4)",
        "=FACT(A4-1)"
    ],
    [
        5,
        "=GAMMA(A5)",
        "=FACT(A5-1)"
    ]
]
            }]
        });
    }
}
```

