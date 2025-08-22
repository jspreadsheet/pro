title: IMLOG10 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMLOG10 function in Jspreadsheet

# IMLOG10 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMLOG10` function in Jspreadsheet Formulas Pro is used to calculate the base-10 logarithm of a complex number. A complex number is a number that can be expressed in the form a + bi, where 'a' and 'b' are real numbers and 'i' is the imaginary unit. When you input a complex number into the `IMLOG10` function, it will return the base-10 logarithm of that value. This can be useful when performing calculations in fields like engineering or physics, which often involve complex numbers.

## Documentation

Returns the base-10 logarithm of a complex number.

### Category

Engineering

### Syntax

IMLOG10(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the base-10 logarithm. |


### Behavior

The `IMLOG10` function in spreadsheets is used to return the base-10 logarithm of a complex number. The complex number is provided in the form of `"x+yi"` or `"x+yj"`.

- If the cell is empty, the function will return `#NUM!` error.
- If the cell contains boolean values (`TRUE` or `FALSE`), the function will return `#VALUE!` error.
- If the cell contains text that cannot be converted into a complex number, the function will return `#NUM!` error.
- If the number argument is a valid complex number, the function will return the base-10 logarithm of that complex number.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | Occurs if the provided argument is non-numeric, or is a logical value. |
| `#NUM!` | Occurs if the provided argument is not a valid complex number, or if the cell is empty. |

### Best practices

> - Always ensure that the cell or range of cells provided as arguments contain valid complex numbers.
> - Handle errors by using error handling functions such as `IFERROR` or `ISERROR`.
> - Verify the validity of complex numbers before using them in the `IMLOG10` function to avoid `#NUM!` errors.
> - Remember to include the imaginary unit in the complex number, either as `i` or `j`, and it should be a string, i.e., enclosed in quotes.

### Usage

A few examples using the IMLOG10 function.

```
IMLOG10("1+i") returns "0.1505+0.3414i"  
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
        "Base-10 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG10(A2)"
    ],
    [
        "3+4i",
        "=IMLOG10(A3)"
    ],
    [
        "2-3i",
        "=IMLOG10(A4)"
    ],
    [
        "5",
        "=IMLOG10(A5)"
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
        "Base-10 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG10(A2)"
    ],
    [
        "3+4i",
        "=IMLOG10(A3)"
    ],
    [
        "2-3i",
        "=IMLOG10(A4)"
    ],
    [
        "5",
        "=IMLOG10(A5)"
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
        "Base-10 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG10(A2)"
    ],
    [
        "3+4i",
        "=IMLOG10(A3)"
    ],
    [
        "2-3i",
        "=IMLOG10(A4)"
    ],
    [
        "5",
        "=IMLOG10(A5)"
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
        "Base-10 Logarithm"
    ],
    [
        "1+i",
        "=IMLOG10(A2)"
    ],
    [
        "3+4i",
        "=IMLOG10(A3)"
    ],
    [
        "2-3i",
        "=IMLOG10(A4)"
    ],
    [
        "5",
        "=IMLOG10(A5)"
    ]
]
            }]
        });
    }
}
```

