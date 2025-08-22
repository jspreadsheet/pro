title: IMCSCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMCSCH function in Jspreadsheet

# IMCSCH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMCSCH` formula in Jspreadsheet Formulas Pro is a mathematical function that operates on complex numbers. Essentially, it calculates the inverse hyperbolic cosecant of a given complex number. For those new to complex number operations, this function can be a useful tool in simplifying complex calculations. It is critical for advanced mathematical modelling and computations within the Jspreadsheet environment.

## Documentation

Calculates the inverse hyperbolic cosecant of a complex number.

### Category

Engineering

### Syntax

IMCSCH(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The number for which you want to calculate the inverse hyperbolic cosecant. |


### Behavior

The `IMCSCH` function in a spreadsheet is used to return the hyperbolic cosecant of a complex number in x+yi or x+yj text format. 

- If the cell is empty, the function will return a #NUM! error.
- If the cell contains text that cannot be interpreted as a valid complex number, the function will return a #VALUE! error.
- If the cell contains a boolean value, the function will treat TRUE as 1 and FALSE as 0.
- If the cell contains a real number, `IMCSCH` will treat it as a complex number where the imaginary part is 0.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the function is applied to an empty cell |
| #VALUE! | Occurs if the function is applied to a cell containing text that cannot be interpreted as a valid complex number |

### Best practices

> - Always ensure that the cell or range of cells being referenced contains valid complex numbers. 
> - It is important to note that the function expects the complex number to be in x+yi or x+yj text format.
> - Use error handling functions like `IFERROR` to handle possible errors.
> - Since the function treats real numbers as complex numbers where the imaginary part is 0, be cautious when applying it to cells that might contain real numbers.

### Usage

A few examples using the IMCSCH function.

```
IMCSCH("4+3i")  
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
        "IMCSCH Result"
    ],
    [
        "4+3i",
        "=IMCSCH(A2)"
    ],
    [
        "2-5i",
        "=IMCSCH(A3)"
    ],
    [
        "1+i",
        "=IMCSCH(A4)"
    ],
    [
        "-3+2i",
        "=IMCSCH(A5)"
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
        "IMCSCH Result"
    ],
    [
        "4+3i",
        "=IMCSCH(A2)"
    ],
    [
        "2-5i",
        "=IMCSCH(A3)"
    ],
    [
        "1+i",
        "=IMCSCH(A4)"
    ],
    [
        "-3+2i",
        "=IMCSCH(A5)"
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
        "IMCSCH Result"
    ],
    [
        "4+3i",
        "=IMCSCH(A2)"
    ],
    [
        "2-5i",
        "=IMCSCH(A3)"
    ],
    [
        "1+i",
        "=IMCSCH(A4)"
    ],
    [
        "-3+2i",
        "=IMCSCH(A5)"
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
        "IMCSCH Result"
    ],
    [
        "4+3i",
        "=IMCSCH(A2)"
    ],
    [
        "2-5i",
        "=IMCSCH(A3)"
    ],
    [
        "1+i",
        "=IMCSCH(A4)"
    ],
    [
        "-3+2i",
        "=IMCSCH(A5)"
    ]
]
            }]
        });
    }
}
```

