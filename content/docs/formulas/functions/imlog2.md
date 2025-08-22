title: IMLOG2 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMLOG2 function in Jspreadsheet

# IMLOG2 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMLOG2` function in Jspreadsheet Formulas Pro is a useful tool when dealing with complex numbers. It's primarily used to calculate the base-2 logarithm of a given complex number. In simpler terms, it's like asking "2 to what power will give me this complex number?" This function can be especially handy for various mathematical and scientific calculations.

## Documentation

Returns the base-2 logarithm of a complex number.

### Category

Engineering

### Syntax

IMLOG2(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the base-2 logarithm. |


### Behavior

The 'IMLOG2' function in spreadsheets is used to calculate the base-2 logarithm of a complex number. The complex number can be in the form of `x+yi` or `x+yj`. 

- If the cell reference or complex number argument is empty, the function returns a `#NUM!` error.
- If the complex number argument is non-numeric, the function also returns a `#NUM!` error.
- If the complex number argument includes a boolean value, the boolean is treated as a numeric value where TRUE is equivalent to 1 and FALSE is equivalent to 0.
- If the complex number argument includes an error, the function propagates that error.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| #NUM! | This error occurs when the cell reference or complex number argument is empty or non-numeric. |
| #VALUE! | This error occurs when the complex number argument is in incorrect format. The correct format is either `x+yi` or `x+yj` |

### Best practices

> - Always ensure the complex number is in the correct format (`x+yi` or `x+yj`).
> - Avoid using boolean values in the complex number argument unless your use case specifically requires it.
> - Always handle errors appropriately to prevent propagation of errors. 
> - Use the 'IMLOG2' function with other complex number functions for more advanced calculations.

### Usage

A few examples using the IMLOG2 function.

```
IMLOG2("1+i") returns "0,5+1,133i"  
IMLOG2("2+2i") returns "1,5+1,133i"  
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
        "Base-2 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG2(A2)"
    ],
    [
        "2+2i",
        "=IMLOG2(A3)"
    ],
    [
        "4",
        "=IMLOG2(A4)"
    ],
    [
        "1-i",
        "=IMLOG2(A5)"
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
        "Base-2 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG2(A2)"
    ],
    [
        "2+2i",
        "=IMLOG2(A3)"
    ],
    [
        "4",
        "=IMLOG2(A4)"
    ],
    [
        "1-i",
        "=IMLOG2(A5)"
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
        "Base-2 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG2(A2)"
    ],
    [
        "2+2i",
        "=IMLOG2(A3)"
    ],
    [
        "4",
        "=IMLOG2(A4)"
    ],
    [
        "1-i",
        "=IMLOG2(A5)"
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
        "Base-2 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG2(A2)"
    ],
    [
        "2+2i",
        "=IMLOG2(A3)"
    ],
    [
        "4",
        "=IMLOG2(A4)"
    ],
    [
        "1-i",
        "=IMLOG2(A5)"
    ]
]
            }]
        });
    }
}
```

