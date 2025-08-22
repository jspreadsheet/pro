title: IMAGINARY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMAGINARY function in Jspreadsheet

# IMAGINARY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the IMAGINARY function is used to extract the imaginary component of a complex number. A complex number comprises a real and an imaginary part and this function helps to isolate the imaginary part. By using this function, you can easily work with the imaginary coefficients in your calculations. It's particularly useful when dealing with complex mathematical equations or data analysis that involves complex numbers.

## Documentation

The IMAGINARY function is used to return the imaginary coefficient of a complex number.

### Category

Engineering

### Syntax

IMAGINARY(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the imaginary coefficient. |


### Behavior

The `IMAGINARY` function in a spreadsheet is used to return the imaginary coefficient of a complex number. This function takes only one argument, which is a string representing a complex number. 

1. If the cell is empty, the `IMAGINARY` function will return an error because it expects a complex number as an input.
2. If the input is a text that does not represent a complex number, the function will also return an error.
3. Boolean values are not valid inputs for the `IMAGINARY` function. It will return an error if the input is a boolean value.
4. If the input is a real number, the `IMAGINARY` function will return 0, because real numbers do not have an imaginary part.
5. In case of a complex number, the `IMAGINARY` function will return the coefficient of the imaginary part.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | If the provided argument is not recognized as a complex number, this error will be returned. This may happen if the input is a boolean, an unrecognized text, or an empty cell. |
| #NUM! | If the argument represents a complex number, but the function cannot interpret it, this error will be returned. For example, if the argument is "1+1", the function will return this error because it's not a valid complex number. |

### Best practices

> - Always ensure that the input for the `IMAGINARY` function is a complex number. If it is not, the function will return an error.
> - Use the `COMPLEX` function to generate complex numbers if you're working with real and imaginary parts separately.
> - Be careful when typing the complex number. It should be in the format "a+bi" or "a-bi", where a is the real part and b is the imaginary part.
> - Remember that the `IMAGINARY` function will return 0 if the input is a real number. Do not mistake this for an error or a sign that the function is not working.

### Usage

A few examples using the IMAGINARY function.

```
IMAGINARY("3+4i") returns 4  
IMAGINARY("-2-5i") returns -5  
IMAGINARY("0+8i") returns 8  
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
        "Complex Number",
        "Imaginary Part"
    ],
    [
        "3+4i",
        "=IMAGINARY(A2)"
    ],
    [
        "-2-5i",
        "=IMAGINARY(A3)"
    ],
    [
        "0+8i",
        "=IMAGINARY(A4)"
    ],
    [
        "7-3i",
        "=IMAGINARY(A5)"
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
        "Complex Number",
        "Imaginary Part"
    ],
    [
        "3+4i",
        "=IMAGINARY(A2)"
    ],
    [
        "-2-5i",
        "=IMAGINARY(A3)"
    ],
    [
        "0+8i",
        "=IMAGINARY(A4)"
    ],
    [
        "7-3i",
        "=IMAGINARY(A5)"
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
        "Complex Number",
        "Imaginary Part"
    ],
    [
        "3+4i",
        "=IMAGINARY(A2)"
    ],
    [
        "-2-5i",
        "=IMAGINARY(A3)"
    ],
    [
        "0+8i",
        "=IMAGINARY(A4)"
    ],
    [
        "7-3i",
        "=IMAGINARY(A5)"
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
        "Complex Number",
        "Imaginary Part"
    ],
    [
        "3+4i",
        "=IMAGINARY(A2)"
    ],
    [
        "-2-5i",
        "=IMAGINARY(A3)"
    ],
    [
        "0+8i",
        "=IMAGINARY(A4)"
    ],
    [
        "7-3i",
        "=IMAGINARY(A5)"
    ]
]
            }]
        });
    }
}
```

