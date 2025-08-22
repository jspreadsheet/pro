title: TANH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TANH function in Jspreadsheet

# TANH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TANH` function in Jspreadsheet Formulas Pro is a mathematical formula that gives you the hyperbolic tangent of a number. This means it calculates the ratio between the hyperbolic sine and the hyperbolic cosine of that number. It's a useful tool for various computational tasks. You simply input a number into the `TANH` function and it will return the hyperbolic tangent of that number.

## Documentation

Returns the hyperbolic tangent of a number.

### Category

Math and trigonometry

### Syntax

TANH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The real number for which you want the hyperbolic tangent. |


### Behavior

The `TANH` function in spreadsheets calculates the hyperbolic tangent of a given value. It returns the output as a value between -1 and 1, inclusive. Here's how it handles various input types:

- Numbers: `TANH` works perfectly with numeric inputs. It calculates the hyperbolic tangent of the number. If the number is in degrees, convert it to radians first before passing it into `TANH`.

- Empty cells: If an empty cell is the input, `TANH` treats it as zero and returns 0.

- Text: `TANH` cannot work with text inputs. If a cell containing text is passed as input, it returns a `#VALUE!` error.

- Booleans: If a boolean value is passed to `TANH`, it treats `TRUE` as 1 and `FALSE` as 0 and computes the hyperbolic tangent accordingly.

- Errors: If the input cell has an error, `TANH` also returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input to `TANH` is non-numeric, such as a text string. |
| #DIV/0! | This error is not common with `TANH`, as it doesn't perform any division operation that could result in a division by zero. |
| #NUM! | This error occurs when the input value is outside the acceptable range of the `TANH` function. However, since the function accepts all real numbers, this error is highly unlikely. |

### Best practices

> - Always ensure that the input to the `TANH` function is numeric. If you have any doubt about the input type, use error checking functions to validate the input.
> - The `TANH` function works with radians, not degrees. If your input is in degrees, use the `RADIANS` function to convert it first.
> - Remember that the `TANH` function returns values in the range of -1 to 1. If you're using the result in further calculations, make sure those calculations can handle this range of values.
> - Be aware that the `TANH` function can't handle complex numbers. If your data set might contain complex numbers, consider using a different function or handling the complex numbers separately.

### Usage

A few examples using the TANH function.

```
TANH(0)  
TANH(1)  
TANH(-1)  
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
        "TANH Result",
        "Description"
    ],
    [
        0,
        "=TANH(A2)",
        "Zero input"
    ],
    [
        1,
        "=TANH(A3)",
        "Positive input"
    ],
    [
        -1,
        "=TANH(A4)",
        "Negative input"
    ],
    [
        2.5,
        "=TANH(A5)",
        "Larger positive"
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
        "TANH Result",
        "Description"
    ],
    [
        0,
        "=TANH(A2)",
        "Zero input"
    ],
    [
        1,
        "=TANH(A3)",
        "Positive input"
    ],
    [
        -1,
        "=TANH(A4)",
        "Negative input"
    ],
    [
        2.5,
        "=TANH(A5)",
        "Larger positive"
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
        "TANH Result",
        "Description"
    ],
    [
        0,
        "=TANH(A2)",
        "Zero input"
    ],
    [
        1,
        "=TANH(A3)",
        "Positive input"
    ],
    [
        -1,
        "=TANH(A4)",
        "Negative input"
    ],
    [
        2.5,
        "=TANH(A5)",
        "Larger positive"
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
        "TANH Result",
        "Description"
    ],
    [
        0,
        "=TANH(A2)",
        "Zero input"
    ],
    [
        1,
        "=TANH(A3)",
        "Positive input"
    ],
    [
        -1,
        "=TANH(A4)",
        "Negative input"
    ],
    [
        2.5,
        "=TANH(A5)",
        "Larger positive"
    ]
]
            }]
        });
    }
}
```

