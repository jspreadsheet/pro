title: IMSIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSIN function in Jspreadsheet

# IMSIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMSIN` function in Jspreadsheet Formulas Pro is a useful tool for working with complex numbers. It's designed to give you the sine of a complex number. Essentially, you input a complex number into the `IMSIN` function, and it will return the sine of that complex number. This can be particularly useful in fields of study or work that involve mathematical calculations with complex numbers.

## Documentation

Returns the sine of a complex number.

### Category

Engineering

### Syntax

IMSIN(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the sine. |


### Behavior

The `IMSIN` function in a spreadsheet returns the sine of a complex number. The function requires a single argument, which is a complex number in the form of text, or a real number. 

1. If the cell is empty, `IMSIN` will return `#NUM!` error as it needs a complex number as an input. 
2. When given text that doesn't represent a complex number, `IMSIN` will return `#VALUE!` error. 
3. Boolean values are not accepted as input. If a Boolean value is inputted, `IMSIN` will return `#VALUE!` error.
4. If the argument is a valid complex or real number, `IMSIN` will calculate the sine of the complex number. 
5. `IMSIN` handles errors propagated from its arguments. If an argument contains an error, `IMSIN` will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the provided argument is not a valid complex number or if the cell is empty. |
| #VALUE! | Occurs if the provided argument is text that cannot be interpreted as a complex number, or if the input is a Boolean value. |

### Best practices

> - Always ensure that the provided argument is either a complex number in the form of text or a real number.
> - Be careful with the syntax while writing complex numbers. Incorrect syntax can lead to `#NUM!` or `#VALUE!` errors.
> - Check for errors in input cells before applying the `IMSIN` function. Any error in the input cell will be propagated to the `IMSIN` function.
> - Although `IMSIN` can handle real numbers, it's primarily used for complex numbers. For real numbers, consider using the `SIN` function instead.

### Usage

A few examples using the IMSIN function.

```
IMSIN("1+i") returns "1.2985+0.63496i"  
IMSIN("2+2i") returns "3.42095-1.5093i"  
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
        "Sine Result"
    ],
    [
        "1+i",
        "=IMSIN(A2)"
    ],
    [
        "2+2i",
        "=IMSIN(A3)"
    ],
    [
        "-1+3i",
        "=IMSIN(A4)"
    ],
    [
        "4-i",
        "=IMSIN(A5)"
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
        "Sine Result"
    ],
    [
        "1+i",
        "=IMSIN(A2)"
    ],
    [
        "2+2i",
        "=IMSIN(A3)"
    ],
    [
        "-1+3i",
        "=IMSIN(A4)"
    ],
    [
        "4-i",
        "=IMSIN(A5)"
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
        "Sine Result"
    ],
    [
        "1+i",
        "=IMSIN(A2)"
    ],
    [
        "2+2i",
        "=IMSIN(A3)"
    ],
    [
        "-1+3i",
        "=IMSIN(A4)"
    ],
    [
        "4-i",
        "=IMSIN(A5)"
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
        "Sine Result"
    ],
    [
        "1+i",
        "=IMSIN(A2)"
    ],
    [
        "2+2i",
        "=IMSIN(A3)"
    ],
    [
        "-1+3i",
        "=IMSIN(A4)"
    ],
    [
        "4-i",
        "=IMSIN(A5)"
    ]
]
            }]
        });
    }
}
```

