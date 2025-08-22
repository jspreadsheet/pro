title: IMCOS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMCOS function in Jspreadsheet

# IMCOS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the IMCOS function is utilized to calculate the cosine of a complex number. This function takes a complex number as input and provides the cosine of that number as output. It's a helpful tool when dealing with complex mathematical calculations in your spreadsheet. Its usage is straightforward and doesn't require any advanced understanding of the software.

## Documentation

The IMCOS function is used to return the cosine of a complex number.

### Category

Engineering

### Syntax

IMCOS(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the cosine. |


### Behavior

The `IMCOS` function in a spreadsheet returns the cosine of a complex number. The complex number input should be in the format of `x+yi` or `x+yj`.

- If the input cell is empty, the `IMCOS` function will return an error.
- If the input cell contains text that does not fit the format of a complex number, the `IMCOS` function will return an error.
- If the input cell contains a boolean value, the function will treat `TRUE` as 1 and `FALSE` as 0.
- In case of any errors (like division by zero), the function will return an error.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| #DIV/0! | Occurs when a division by zero is attempted in the complex number. |
| #VALUE! | Occurs when the input cell does not contain a valid complex number. |
| #NAME? | Occurs when the `IMCOS` function is not correctly typed or is not recognized by the spreadsheet software. |

### Best practices

> - Always ensure that the input to the `IMCOS` function is a valid complex number. Any deviation from the format will result in an error.
> - Use the `IMCOS` function in combination with other functions to manipulate and derive results from complex numbers.
> - Remember that `IMCOS` function is case-sensitive. It should be always typed in uppercase.
> - Handle errors in your `IMCOS` function by using error checking functions like `IFERROR` or `ISERROR`.

### Usage

A few examples using the IMCOS function.

```
IMCOS(2+3i) returns approximately -4.1896-9.1092i  
IMCOS(-4-3i) returns approximately -27.0348+3.8512i  
IMCOS(0+10i) returns approximately 11013.2329  
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
        "Cosine Result"
    ],
    [
        "2+3i",
        "=IMCOS(A2)"
    ],
    [
        "-4-3i",
        "=IMCOS(A3)"
    ],
    [
        "0+10i",
        "=IMCOS(A4)"
    ],
    [
        "1-2i",
        "=IMCOS(A5)"
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
        "Cosine Result"
    ],
    [
        "2+3i",
        "=IMCOS(A2)"
    ],
    [
        "-4-3i",
        "=IMCOS(A3)"
    ],
    [
        "0+10i",
        "=IMCOS(A4)"
    ],
    [
        "1-2i",
        "=IMCOS(A5)"
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
        "Cosine Result"
    ],
    [
        "2+3i",
        "=IMCOS(A2)"
    ],
    [
        "-4-3i",
        "=IMCOS(A3)"
    ],
    [
        "0+10i",
        "=IMCOS(A4)"
    ],
    [
        "1-2i",
        "=IMCOS(A5)"
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
        "Cosine Result"
    ],
    [
        "2+3i",
        "=IMCOS(A2)"
    ],
    [
        "-4-3i",
        "=IMCOS(A3)"
    ],
    [
        "0+10i",
        "=IMCOS(A4)"
    ],
    [
        "1-2i",
        "=IMCOS(A5)"
    ]
]
            }]
        });
    }
}
```

