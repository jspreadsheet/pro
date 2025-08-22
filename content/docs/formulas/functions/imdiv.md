title: IMDIV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMDIV function in Jspreadsheet

# IMDIV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `IMDIV` function is used to calculate the division result of two complex numbers. You provide two complex numbers as inputs, and the function will return the quotient. It's a handy tool when you're working with complex number calculations, allowing you to quickly and accurately determine the outcomes.

## Documentation

Returns the quotient of two complex numbers.

### Category

Engineering

### Syntax

IMDIV(inumber1, inumber2)

| Parameter | Description |
| ----------- | ------------- |
| `inumber1` | The complex number that you want to divide. |
| `inumber2` | The complex number that you want to divide by. |


### Behavior

The `IMDIV` function in spreadsheets is used to divide two complex numbers. It takes two arguments: the dividend and the divisor, which are the complex numbers to be divided. Here is how it handles various inputs:

- Empty cells: If one or both the cells are empty, the function returns a `#NUM!` error.
- Text: If the input includes text that cannot be interpreted as a valid complex number, the `IMDIV` function returns a `#VALUE!` error.
- Booleans: Boolean values are not supported by the `IMDIV` function. It returns a `#VALUE!` error for Boolean inputs.
- Errors: If one or both the arguments have error values (e.g., `#N/A`, `#VALUE!`, `#DIV/0!`, etc.), the `IMDIV` function propagates the error.
- Numeric values: Numeric values are treated as real numbers. For instance, `IMDIV(5, 2)` would return `2.5`, as if dividing two real numbers.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#NUM!` | This error occurs if the second argument (the divisor) is 0 or if one or both of the function arguments are empty. |
| `#VALUE!` | This error is returned when one or both the function arguments cannot be interpreted as valid complex numbers, or if Boolean values are used as inputs. |

### Best practices

> - Always ensure to input valid complex numbers as arguments to avoid the `#VALUE!` error.
> - Avoid leaving cells empty that are used as arguments in the `IMDIV` function to prevent the `#NUM!` error.
> - Be cautious when using cell references as function arguments, as any change in the referred cells will affect the result of the `IMDIV` function.
> - Always check that the divisor is not zero to avoid the `#NUM!` error.

### Usage

A few examples using the IMDIV function.

```
IMDIV("4+3i", "1+i") returns "2.5-0.5i"  
IMDIV("6+2i", "2+2i") returns "2-i"  
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
        "Division Result"
    ],
    [
        "4+3i",
        "1+i",
        "=IMDIV(A2,B2)"
    ],
    [
        "6+2i",
        "2+2i",
        "=IMDIV(A3,B3)"
    ],
    [
        "8-4i",
        "2+i",
        "=IMDIV(A4,B4)"
    ],
    [
        "10+5i",
        "3-2i",
        "=IMDIV(A5,B5)"
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
        "Division Result"
    ],
    [
        "4+3i",
        "1+i",
        "=IMDIV(A2,B2)"
    ],
    [
        "6+2i",
        "2+2i",
        "=IMDIV(A3,B3)"
    ],
    [
        "8-4i",
        "2+i",
        "=IMDIV(A4,B4)"
    ],
    [
        "10+5i",
        "3-2i",
        "=IMDIV(A5,B5)"
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
        "Division Result"
    ],
    [
        "4+3i",
        "1+i",
        "=IMDIV(A2,B2)"
    ],
    [
        "6+2i",
        "2+2i",
        "=IMDIV(A3,B3)"
    ],
    [
        "8-4i",
        "2+i",
        "=IMDIV(A4,B4)"
    ],
    [
        "10+5i",
        "3-2i",
        "=IMDIV(A5,B5)"
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
        "Division Result"
    ],
    [
        "4+3i",
        "1+i",
        "=IMDIV(A2,B2)"
    ],
    [
        "6+2i",
        "2+2i",
        "=IMDIV(A3,B3)"
    ],
    [
        "8-4i",
        "2+i",
        "=IMDIV(A4,B4)"
    ],
    [
        "10+5i",
        "3-2i",
        "=IMDIV(A5,B5)"
    ]
]
            }]
        });
    }
}
```

