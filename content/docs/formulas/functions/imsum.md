title: IMSUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSUM function in Jspreadsheet

# IMSUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMSUM` function in Jspreadsheet Formulas Pro is a powerful tool used to calculate the sum of complex numbers. Complex numbers are numbers that consist of a real and an imaginary part. When you input multiple complex numbers into the `IMSUM` function, it will add together both the real and the imaginary parts separately, and then combine them to provide the total sum as a complex number. This function is particularly useful when doing advanced mathematical calculations involving complex numbers.

## Documentation

Returns the sum of complex numbers.

### Category

Engineering

### Syntax

IMSUM(inumber1, [inumber2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `inumber1` | The first complex number to add. |
| `inumberN` | Optional. Additional complex numbers you want to include in the sum. |


### Behavior

The `IMSUM` function in spreadsheets is used to add complex numbers. Here's how it generally behaves:

- It takes two or more complex numbers as arguments. If less than two arguments are provided, an error will be returned.
- Each argument provided must be in the format of a complex number. For instance, "3+4i" or "5-6i" are valid, while "7", "8i" only, or any non-complex value is not.
- Empty cells are treated as zero. However, if all the arguments are empty cells or no arguments are provided, an error will be returned.
- Text that cannot be converted into a complex number will result in an error.
- Boolean values are not accepted and will result in an error.
- If any of the arguments are error values, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the function encounters a text value that cannot be translated into a complex number. |
| #NUM! | This error is returned if the function encounters a number that is not in a complex number format, like "5" or "6i". |
| #N/A | This error occurs when the function is provided with less than two arguments. |

### Best practices

> - Ensure that all values are in the correct complex number format before applying the `IMSUM` function to avoid errors.
> - When using cell references, make sure they contain complex numbers and not empty cells, text, or error values.
> - Use error-checking functions like `ISERROR` or `IFERROR` to handle possible errors in the `IMSUM` function.
> - The `IMSUM` function only adds the real parts together and the imaginary parts together. If you want to perform other operations, you may need to use other complex number functions.

### Usage

A few examples using the IMSUM function.

```
IMSUM("1+i", "2+3i") returns "3+4i"  
IMSUM("3+4i", "-1+2i") returns "2+6i"  
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
        "Sum"
    ],
    [
        "3+2i",
        "1+4i",
        "=IMSUM(A2,B2)"
    ],
    [
        "5-3i",
        "-2+6i",
        "=IMSUM(A3,B3)"
    ],
    [
        "1+i",
        "4-2i",
        "=IMSUM(A4,B4)"
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
        "Sum"
    ],
    [
        "3+2i",
        "1+4i",
        "=IMSUM(A2,B2)"
    ],
    [
        "5-3i",
        "-2+6i",
        "=IMSUM(A3,B3)"
    ],
    [
        "1+i",
        "4-2i",
        "=IMSUM(A4,B4)"
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
        "Sum"
    ],
    [
        "3+2i",
        "1+4i",
        "=IMSUM(A2,B2)"
    ],
    [
        "5-3i",
        "-2+6i",
        "=IMSUM(A3,B3)"
    ],
    [
        "1+i",
        "4-2i",
        "=IMSUM(A4,B4)"
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
        "Sum"
    ],
    [
        "3+2i",
        "1+4i",
        "=IMSUM(A2,B2)"
    ],
    [
        "5-3i",
        "-2+6i",
        "=IMSUM(A3,B3)"
    ],
    [
        "1+i",
        "4-2i",
        "=IMSUM(A4,B4)"
    ]
]
            }]
        });
    }
}
```

