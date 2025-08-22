title: IMREAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMREAL function in Jspreadsheet

# IMREAL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMREAL` function in Jspreadsheet Formulas Pro is used to extract the real part of a complex number. When you provide a complex number as input into this function, it processes this data and returns the real coefficient. This is handy when you're dealing with complex numbers and need to isolate the real part for further calculations. It's a simple and straightforward way to break down complex numbers in your sheets.

## Documentation

Returns the real coefficient of a complex number.

### Category

Engineering

### Syntax

IMREAL(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to return the real coefficient. |


### Behavior

The `IMREAL` function in spreadsheet is used to return the real coefficient of a complex number. The complex number is provided in the form of "x+yi" or "x+yi", i.e., a real number followed by a '+' or '-' sign, followed by an imaginary number with 'i' or 'j'.

1. If an empty cell is provided as an input, the `IMREAL` function will return a `#VALUE!` error. 

2. If the input provided is text that does not conform to the complex number format, the `IMREAL` function will return a `#NUM!` error.

3. If a boolean value (TRUE or FALSE) is provided as an input, the `IMREAL` function will treat it as a numerical value: TRUE as 1 and FALSE as 0.

4. If a purely real number is provided as an input, the `IMREAL` function will return that number. For example, `IMREAL("5")` will return 5.

5. If a purely imaginary number is provided as an input, the `IMREAL` function will return 0. For example, `IMREAL("5i")` will return 0.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the provided cell is empty. |
| #NUM! | This error occurs when the input provided is a text that does not conform to the complex number format. |
| #NAME? | This error occurs when the formula name is misspelled or the function is not recognized by the spreadsheet program. |

### Best practices

> - Always ensure that the complex number is correctly formatted as "x+yi" or "x-yi". Any deviation from this format will result in errors.
> - Use the `IMREAL` function to extract the real coefficient from a complex number when you perform calculations involving complex numbers.
> - Be cognizant of how the `IMREAL` function handles different data types (e.g., empty cells, text, boolean values) to avoid unexpected errors.
> - Always check for common errors such as `#VALUE!`, `#NUM!`, and `#NAME?` that may occur when using the `IMREAL` function.

### Usage

A few examples using the IMREAL function.

```
IMREAL("3+4i") returns 3  
IMREAL("2-i") returns 2  
IMREAL("-5+2i") returns -5  
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
        "Real Part"
    ],
    [
        "3+4i",
        "=IMREAL(A2)"
    ],
    [
        "2-5i",
        "=IMREAL(A3)"
    ],
    [
        "-7+2i",
        "=IMREAL(A4)"
    ],
    [
        "6-3i",
        "=IMREAL(A5)"
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
        "Real Part"
    ],
    [
        "3+4i",
        "=IMREAL(A2)"
    ],
    [
        "2-5i",
        "=IMREAL(A3)"
    ],
    [
        "-7+2i",
        "=IMREAL(A4)"
    ],
    [
        "6-3i",
        "=IMREAL(A5)"
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
        "Real Part"
    ],
    [
        "3+4i",
        "=IMREAL(A2)"
    ],
    [
        "2-5i",
        "=IMREAL(A3)"
    ],
    [
        "-7+2i",
        "=IMREAL(A4)"
    ],
    [
        "6-3i",
        "=IMREAL(A5)"
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
        "Real Part"
    ],
    [
        "3+4i",
        "=IMREAL(A2)"
    ],
    [
        "2-5i",
        "=IMREAL(A3)"
    ],
    [
        "-7+2i",
        "=IMREAL(A4)"
    ],
    [
        "6-3i",
        "=IMREAL(A5)"
    ]
]
            }]
        });
    }
}
```

