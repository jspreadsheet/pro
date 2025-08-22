title: IMSUB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSUB function in Jspreadsheet

# IMSUB function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `IMSUB` function is used to calculate the difference between two complex numbers. This function takes two arguments, each representing a complex number. It subtracts the second complex number from the first one. The result of this function is a complex number which is the difference between the two input complex numbers.

## Documentation

Returns the difference between two complex numbers.

### Category

Engineering

### Syntax

IMSUB(inumber1, inumber2)

| Parameter | Description |
| ----------- | ------------- |
| `inumber1` | The complex number from which you want to subtract another complex number. |
| `inumber2` | The complex number that you want to subtract from the first complex number. |


### Behavior

The `IMSUB` function in spreadsheet subtracts two complex numbers. It takes two arguments: the first complex number and the second complex number to be subtracted from the first one. 

- When given empty cells for any of the arguments, `IMSUB` treats them as zeroes.
- If text values are provided as arguments, `IMSUB` will attempt to parse them as complex numbers. If the parsing fails, it will return a `#VALUE!` error.
- Booleans are not directly supported. If a boolean is provided as an argument, `IMSUB` will return a `#VALUE!` error.
- `IMSUB` expects the complex numbers to be provided in the form of `a+bi` or `a+bi j`, where `a` and `b` are the real and imaginary parts respectively. If the complex numbers are not in the correct format, the function will return a `#NUM!` error.
- In case of any other errors, like providing more or less number of arguments than required, `IMSUB` will return a `#VALUE!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error is returned when the given arguments are not recognized as valid complex numbers. This can happen if the arguments are boolean values, or if they are text values that cannot be parsed as complex numbers. |
| `#NUM!` | This error is returned when the given complex numbers are not in the correct format. The correct format is `a+bi` or `a+bi j`, where `a` and `b` are the real and imaginary parts respectively. |

### Best practices

> - Always ensure that the complex numbers provided as arguments are in the correct format. The correct format is `a+bi` or `a+bi j`, where `a` and `b` are the real and imaginary parts respectively.
> - To avoid unexpected errors, do not provide boolean values as arguments to this function.
> - Use error handling functions like `IFERROR` in combination with `IMSUB` to handle possible errors gracefully.
> - Be aware that `IMSUB` treats empty cells as zeroes. If this is not the desired behavior, make sure to provide valid complex numbers for both arguments.

### Usage

A few examples using the IMSUB function.

```
IMSUB("1+i", "2+3i") returns "-1-2i"  
IMSUB("3+4i", "-1+2i") returns "4+2i"  
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
        "Complex Number 1",
        "Complex Number 2",
        "Difference"
    ],
    [
        "5+3i",
        "2+i",
        "=IMSUB(A2,B2)"
    ],
    [
        "-1+4i",
        "3-2i",
        "=IMSUB(A3,B3)"
    ],
    [
        "7-5i",
        "-2+3i",
        "=IMSUB(A4,B4)"
    ],
    [
        "4+2i",
        "1+6i",
        "=IMSUB(A5,B5)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Difference"
    ],
    [
        "5+3i",
        "2+i",
        "=IMSUB(A2,B2)"
    ],
    [
        "-1+4i",
        "3-2i",
        "=IMSUB(A3,B3)"
    ],
    [
        "7-5i",
        "-2+3i",
        "=IMSUB(A4,B4)"
    ],
    [
        "4+2i",
        "1+6i",
        "=IMSUB(A5,B5)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Difference"
    ],
    [
        "5+3i",
        "2+i",
        "=IMSUB(A2,B2)"
    ],
    [
        "-1+4i",
        "3-2i",
        "=IMSUB(A3,B3)"
    ],
    [
        "7-5i",
        "-2+3i",
        "=IMSUB(A4,B4)"
    ],
    [
        "4+2i",
        "1+6i",
        "=IMSUB(A5,B5)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Difference"
    ],
    [
        "5+3i",
        "2+i",
        "=IMSUB(A2,B2)"
    ],
    [
        "-1+4i",
        "3-2i",
        "=IMSUB(A3,B3)"
    ],
    [
        "7-5i",
        "-2+3i",
        "=IMSUB(A4,B4)"
    ],
    [
        "4+2i",
        "1+6i",
        "=IMSUB(A5,B5)"
    ]
]
            }]
        });
    }
}
```

