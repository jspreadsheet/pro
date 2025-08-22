title: BIN2OCT Function – Convert Binary to Octal in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function, binary to octal, BIN2OCT, engineering
description: How to use the BIN2OCT function in Jspreadsheet to convert binary numbers into octal format. This guide covers syntax, usage, common errors, and best practices for binary-to-octal conversion in spreadsheets.

# BIN2OCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BIN2OCT` function in Jspreadsheet Formulas Pro converts a binary number (base-2) into an octal number (base-8). Binary numbers use only the digits 0 and 1, while octal numbers use digits from 0 to 7. This function is useful when handling numerical systems in computing and digital applications where octal representation is required.

## Documentation

Converts a binary number to its octal representation.

### Category

Engineering

### Syntax

BIN2OCT(number, [places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | Binary string (up to 10 characters of 0 and 1) to convert. |
| `[places]` | Optional. The number of characters to use. If omitted, places defaults to the minimum number necessary to represent the number. |


### Behavior

The `BIN2OCT` function in spreadsheets is used to convert binary numbers to octal. This function takes the binary number as the first argument and the number of characters to use as the second optional argument.

- If the input cell is empty, `BIN2OCT` will return an error.
- If the input is text that can't be converted to a number, `BIN2OCT` will return an error.
- If the input is a boolean, it will be coerced into a number, with TRUE being 1 and FALSE being 0.
- If the binary number is more than 10 characters (10 bits) in length, the function will return a `#NUM!` error because it exceeds the maximum allowable binary number length.
- For negative numbers, the function will assume it's a binary string that's in two's complement representation.
- The function will truncate any decimal places in the binary number.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | If the binary number is more than 10 characters (10 bits) in length or if the number of characters to use is less than the length of the binary number. |
| #VALUE! | If the binary number or the number of characters to use is non-numeric. |

### Best practices

> - Verify that binary numbers are not more than 10 characters in length and are valid binary numbers before using the `BIN2OCT` function to prevent `#NUM!` errors.
> - Use the second argument of `BIN2OCT` to set the number of characters to use for the output to ensure the output format is as desired.
> - Be aware that `BIN2OCT` will truncate decimal places in binary numbers, so consider this when providing input to this function.
> - Always check for possible error outputs from the function, and handle them appropriately in your spreadsheet.

### Usage

A few examples using the BIN2OCT function.

```
BIN2OCT("110101")         → "65"
BIN2OCT("1111", 2)        → "17"
BIN2OCT("0001", 4)        → "0001"
BIN2OCT("1111111111")     → "7777777777" 
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
        "Binary Number",
        "Places",
        "Octal Result"
    ],
    [
        1101,
        3,
        "=BIN2OCT(A2,B2)"
    ],
    [
        110101,
        "",
        "=BIN2OCT(A3,B3)"
    ],
    [
        1111,
        4,
        "=BIN2OCT(A4,B4)"
    ],
    [
        1000000000,
        6,
        "=BIN2OCT(A5,B5)"
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
        "Binary Number",
        "Places",
        "Octal Result"
    ],
    [
        1101,
        3,
        "=BIN2OCT(A2,B2)"
    ],
    [
        110101,
        "",
        "=BIN2OCT(A3,B3)"
    ],
    [
        1111,
        4,
        "=BIN2OCT(A4,B4)"
    ],
    [
        1000000000,
        6,
        "=BIN2OCT(A5,B5)"
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
        "Binary Number",
        "Places",
        "Octal Result"
    ],
    [
        1101,
        3,
        "=BIN2OCT(A2,B2)"
    ],
    [
        110101,
        "",
        "=BIN2OCT(A3,B3)"
    ],
    [
        1111,
        4,
        "=BIN2OCT(A4,B4)"
    ],
    [
        1000000000,
        6,
        "=BIN2OCT(A5,B5)"
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
        "Binary Number",
        "Places",
        "Octal Result"
    ],
    [
        1101,
        3,
        "=BIN2OCT(A2,B2)"
    ],
    [
        110101,
        "",
        "=BIN2OCT(A3,B3)"
    ],
    [
        1111,
        4,
        "=BIN2OCT(A4,B4)"
    ],
    [
        1000000000,
        6,
        "=BIN2OCT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

