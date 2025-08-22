title: HEX2BIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HEX2BIN function in Jspreadsheet

# HEX2BIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `HEX2BIN` function in Jspreadsheet Formulas Pro is a tool that allows you to convert a hexadecimal number into a binary number. This means if you have a number in the hexadecimal system (which is base 16), this function can translate it into the binary system (which is base 2). This can be helpful in various computing and programming tasks, as these number systems are often used in these areas. You simply input your hexadecimal number into the function, and it will output the corresponding binary number.

## Documentation

Converts a hexadecimal number to binary.

### Category

Engineering

### Syntax

HEX2BIN(number,[places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The hexadecimal number you want to convert to binary. The most significant bit of number is the left-most bit. |
| `[places]` | Optional. The number of characters to use. Places must be a multiple of 4. If places is omitted, HEX2BIN uses the minimum number of characters necessary. |


### Behavior

The `HEX2BIN` function in spreadsheet converts a hexadecimal number to binary. Here's how it handles different types of inputs:
- **Empty Cells**: If the cell referenced is empty, the function will return an error because it expects a hexadecimal number as an input.
- **Text**: If the cell contains text that isn't a hexadecimal number, the function will return an error. However, if the text is a valid hexadecimal number (e.g., 'A1'), it will be successfully converted to binary.
- **Booleans**: If a cell containing a boolean value (TRUE or FALSE) is referenced, the function will return an error, because it expects a hexadecimal number as an input.
- **Errors**: If the cell referenced contains an error, the `HEX2BIN` function will also return an error.
- **Numbers**: Regular decimal numbers will be treated as hexadecimal numbers and the function will attempt to convert them to binary. This may result in unexpected outputs if the input wasn't intended to be hexadecimal.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the hexadecimal number is negative, or if it's not a valid hexadecimal number. |
| #VALUE! | Occurs when the function's argument is not recognized as a valid hexadecimal number or a valid reference. |
| #N/A | Occurs when the cell referenced is empty, contains a non-hexadecimal text or an error. |

### Best practices

> - Always ensure that the input to `HEX2BIN` is a valid hexadecimal number. Remember that valid hexadecimal numbers include digits from 0 to 9 and letters from A to F.
> - Keep in mind that the `HEX2BIN` function treats numbers as hexadecimal. Therefore, to avoid confusion or errors, it's recommended to input hexadecimal numbers as text strings.
> - Use error handling functions such as `IFERROR` or `ISERROR` to manage potential errors in your `HEX2BIN` function. This can help maintain the cleanliness of your data.
> - Be aware that the `HEX2BIN` function can only handle hexadecimal numbers up to 10 characters (40 bits) in length. For numbers longer than this, you'll need to use another method to convert from hexadecimal to binary.

### Usage

A few examples using the HEX2BIN function.

```
HEX2BIN("F",4) returns 1111  
HEX2BIN("3A",8) returns 00111010  
HEX2BIN("B7") returns 10110111  
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
        "Hex Value",
        "Binary (4 places)",
        "Binary (8 places)"
    ],
    [
        "A",
        "=HEX2BIN(A2,4)",
        "=HEX2BIN(A2,8)"
    ],
    [
        "1F",
        "=HEX2BIN(A3,4)",
        "=HEX2BIN(A3,8)"
    ],
    [
        "C5",
        "=HEX2BIN(A4,4)",
        "=HEX2BIN(A4,8)"
    ],
    [
        "7",
        "=HEX2BIN(A5,4)",
        "=HEX2BIN(A5,8)"
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
        "Hex Value",
        "Binary (4 places)",
        "Binary (8 places)"
    ],
    [
        "A",
        "=HEX2BIN(A2,4)",
        "=HEX2BIN(A2,8)"
    ],
    [
        "1F",
        "=HEX2BIN(A3,4)",
        "=HEX2BIN(A3,8)"
    ],
    [
        "C5",
        "=HEX2BIN(A4,4)",
        "=HEX2BIN(A4,8)"
    ],
    [
        "7",
        "=HEX2BIN(A5,4)",
        "=HEX2BIN(A5,8)"
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
        "Hex Value",
        "Binary (4 places)",
        "Binary (8 places)"
    ],
    [
        "A",
        "=HEX2BIN(A2,4)",
        "=HEX2BIN(A2,8)"
    ],
    [
        "1F",
        "=HEX2BIN(A3,4)",
        "=HEX2BIN(A3,8)"
    ],
    [
        "C5",
        "=HEX2BIN(A4,4)",
        "=HEX2BIN(A4,8)"
    ],
    [
        "7",
        "=HEX2BIN(A5,4)",
        "=HEX2BIN(A5,8)"
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
        "Hex Value",
        "Binary (4 places)",
        "Binary (8 places)"
    ],
    [
        "A",
        "=HEX2BIN(A2,4)",
        "=HEX2BIN(A2,8)"
    ],
    [
        "1F",
        "=HEX2BIN(A3,4)",
        "=HEX2BIN(A3,8)"
    ],
    [
        "C5",
        "=HEX2BIN(A4,4)",
        "=HEX2BIN(A4,8)"
    ],
    [
        "7",
        "=HEX2BIN(A5,4)",
        "=HEX2BIN(A5,8)"
    ]
]
            }]
        });
    }
}
```

