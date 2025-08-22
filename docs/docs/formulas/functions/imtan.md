title: IMTAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMTAN function in Jspreadsheet

# IMTAN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMTAN` function in Jspreadsheet Formulas Pro is used to calculate the tangent of a complex number. A complex number is a value composed of a real and an imaginary part, and this function allows you to find its tangent, a mathematical concept often used in trigonometry. With `IMTAN`, you input the complex number, and the function does the rest, returning the tangent of that number for your use in further calculations. It's a helpful tool for managing complex mathematical operations in Jspreadsheet.

## Documentation

Returns the tangent of a complex number.

### Category

Engineering

### Syntax

IMTAN(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the tangent. |


### Behavior

The `IMTAN` function returns the tangent of a specified complex number. The function takes the form `IMTAN(inumber)`, where `inumber` is the complex number for which you want to calculate the tangent. 

- If `inumber` is a blank or empty cell, `IMTAN` will return a `#NUM!` error. 
- If `inumber` is a text string that cannot be interpreted as a complex number, `IMTAN` will return a `#VALUE!` error.
- If `inumber` is a boolean value (`TRUE` or `FALSE`), it will be coerced to a number (`1` or `0` respectively) and processed as such.
- If `inumber` contains a reference to a cell with an error, `IMTAN` will propagate that error.
- The result of `IMTAN` is a complex number expressed in the form `x + yi` or `x + yj`.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs if the `inumber` argument is an empty cell. |
| #VALUE! | Occurs if the `inumber` argument is a text string that cannot be interpreted as a complex number. |
| #REF! | Occurs if the `inumber` argument contains a cell reference that is not valid. |

### Best practices

> - Always ensure that the `inumber` argument is a valid complex number or a reference to a cell containing a valid complex number.
> - Be aware that `IMTAN` will interpret boolean values as numbers, which might not be the desired behavior.
> - Use error handling functions like `IFERROR` or `ISERROR` to catch possible errors in the `inumber` argument.
> - Keep in mind that the result of `IMTAN` is a complex number, so ensure your spreadsheet or further calculations can handle this type of result.

### Usage

A few examples using the IMTAN function.

```
IMTAN("1+i") returns "0.2718+1.0839i"  
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
        "Tangent Result"
    ],
    [
        "1+i",
        "=IMTAN(A2)"
    ],
    [
        "2+3i",
        "=IMTAN(A3)"
    ],
    [
        "0.5-2i",
        "=IMTAN(A4)"
    ],
    [
        "-1+0.5i",
        "=IMTAN(A5)"
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
        "Tangent Result"
    ],
    [
        "1+i",
        "=IMTAN(A2)"
    ],
    [
        "2+3i",
        "=IMTAN(A3)"
    ],
    [
        "0.5-2i",
        "=IMTAN(A4)"
    ],
    [
        "-1+0.5i",
        "=IMTAN(A5)"
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
        "Tangent Result"
    ],
    [
        "1+i",
        "=IMTAN(A2)"
    ],
    [
        "2+3i",
        "=IMTAN(A3)"
    ],
    [
        "0.5-2i",
        "=IMTAN(A4)"
    ],
    [
        "-1+0.5i",
        "=IMTAN(A5)"
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
        "Tangent Result"
    ],
    [
        "1+i",
        "=IMTAN(A2)"
    ],
    [
        "2+3i",
        "=IMTAN(A3)"
    ],
    [
        "0.5-2i",
        "=IMTAN(A4)"
    ],
    [
        "-1+0.5i",
        "=IMTAN(A5)"
    ]
]
            }]
        });
    }
}
```

