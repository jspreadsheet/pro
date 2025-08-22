title: DEC2BIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DEC2BIN function in Jspreadsheet

# DEC2BIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DEC2BIN` function in Jspreadsheet Formulas Pro is a tool that allows you to transform a decimal number into its binary format. Binary format is a numerical system used in digital electronics and mathematics, consisting only of zeros and ones. With `DEC2BIN`, you simply input a decimal number and the function will output its binary equivalent. This is particularly useful in computational fields where binary code is often utilized.

## Documentation

Converts a decimal number to binary format.

### Category

Engineering

### Syntax

DEC2BIN(number, [places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The decimal number you want to convert to binary. |
| `[places]` | Optional. The minimum number of characters to use for the binary number. If omitted or zero, the function will use as many characters as necessary. |


### Behavior

The `DEC2BIN` function converts a decimal number to binary. This function takes two arguments, the decimal number to be converted and the number of characters to use. If the number of characters is not specified, it defaults to 10. The function can handle numbers, text representations of numbers, and references to cells containing numbers. 

- If the cell is empty, the function will return `#NUM!` error as it requires a number to function.
- If the cell contains text that cannot be interpreted as a number, the function will return `#VALUE!` error.
- If the cell contains a boolean value, it will be interpreted as 0 for FALSE and 1 for TRUE.
- If the decimal number is negative, or if it's larger than the function can handle, it will return `#NUM!` error. The largest number `DEC2BIN` can handle is 511 for 10-bit binary numbers (default), or up to the limit of the specified number of characters.
- If the second argument (number of characters) is not an integer between 1 and 10, the function returns `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the supplied number argument is < 0 or is >= 2^places |
| #VALUE! | Occurs if the supplied arguments are non-numeric or if the places argument is non-numeric or is less than 0 |
| #N/A | Occurs if the supplied number is non-numeric |

### Best practices

> - Always ensure that the number you want to convert to binary is within the acceptable range (0 to 2^places - 1). If you're not sure, use a conditional statement to check the number before passing it to the `DEC2BIN` function.
> - Be mindful of the number of characters (bits) you specify. If you specify too few, larger numbers will result in `#NUM!` errors.
> - If you're dealing with negative numbers, remember that `DEC2BIN` cannot handle them. You'll need to use a different method to convert negative numbers to binary.
> - Although `DEC2BIN` can handle text representations of numbers, it's a good practice to ensure that your data is the correct type (number) to avoid unexpected `#VALUE!` errors.

### Usage

A few examples using the DEC2BIN function.

```
DEC2BIN(255) returns 11111111  
DEC2BIN(42,8) returns 00101010  
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
        "Decimal",
        "Binary",
        "Binary (8 places)"
    ],
    [
        15,
        "=DEC2BIN(A2)",
        "=DEC2BIN(A2,8)"
    ],
    [
        42,
        "=DEC2BIN(A3)",
        "=DEC2BIN(A3,8)"
    ],
    [
        127,
        "=DEC2BIN(A4)",
        "=DEC2BIN(A4,8)"
    ],
    [
        255,
        "=DEC2BIN(A5)",
        "=DEC2BIN(A5,8)"
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
        "Decimal",
        "Binary",
        "Binary (8 places)"
    ],
    [
        15,
        "=DEC2BIN(A2)",
        "=DEC2BIN(A2,8)"
    ],
    [
        42,
        "=DEC2BIN(A3)",
        "=DEC2BIN(A3,8)"
    ],
    [
        127,
        "=DEC2BIN(A4)",
        "=DEC2BIN(A4,8)"
    ],
    [
        255,
        "=DEC2BIN(A5)",
        "=DEC2BIN(A5,8)"
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
        "Decimal",
        "Binary",
        "Binary (8 places)"
    ],
    [
        15,
        "=DEC2BIN(A2)",
        "=DEC2BIN(A2,8)"
    ],
    [
        42,
        "=DEC2BIN(A3)",
        "=DEC2BIN(A3,8)"
    ],
    [
        127,
        "=DEC2BIN(A4)",
        "=DEC2BIN(A4,8)"
    ],
    [
        255,
        "=DEC2BIN(A5)",
        "=DEC2BIN(A5,8)"
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
        "Decimal",
        "Binary",
        "Binary (8 places)"
    ],
    [
        15,
        "=DEC2BIN(A2)",
        "=DEC2BIN(A2,8)"
    ],
    [
        42,
        "=DEC2BIN(A3)",
        "=DEC2BIN(A3,8)"
    ],
    [
        127,
        "=DEC2BIN(A4)",
        "=DEC2BIN(A4,8)"
    ],
    [
        255,
        "=DEC2BIN(A5)",
        "=DEC2BIN(A5,8)"
    ]
]
            }]
        });
    }
}
```

