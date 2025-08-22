title: DEC2OCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DEC2OCT function in Jspreadsheet

# DEC2OCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DEC2OCT` function in Jspreadsheet Formulas Pro is a tool used for converting decimal numbers into octal format. This is particularly helpful when dealing with mathematical problems or data that requires the octal numeral system. To use it, simply input your decimal number into the function and it will output the equivalent in octal format. It's a simple and effective way of transforming your data between these two numerical systems.

## Documentation

Converts a decimal number to octal format.

### Category

Engineering

### Syntax

DEC2OCT(number, [places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The decimal number you want to convert to octal. |
| `[places]` | Optional. The minimum number of characters to use for the octal number. If omitted or zero, the function will use as many characters as necessary. |


### Behavior

The `DEC2OCT` function in spreadsheets is used to convert decimal numbers to octal. This function takes two arguments: the decimal number you want to convert, and an optional argument that specifies the number of characters to use.

- If the function is given an empty cell, it will return a `#NUM!` error.
- If the function is provided with text instead of a number, it will return a `#VALUE!` error.
- Booleans are treated as numbers: `TRUE` is treated as 1 and `FALSE` as 0.
- When the number provided is negative, the function will return a two's complement octal value.
- If the number provided is not an integer, the function will truncate it before converting.
- If the number of characters specified is less than the minimum number of characters needed to represent the number, the function will ignore this argument and use as many characters as needed.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | Occurs if the given number is less than -549755813888 or greater than 549755813887. |
| `#VALUE!` | Occurs if an argument that is not a number is used. |
| `#NUM!` | Occurs if the number of characters to use is less than 0. |

### Best practices

> - Always ensure that the number you are converting is within the allowable range to avoid `#NUM!` error.
> - Be aware that the function will truncate non-integer numbers before converting. If you want to convert a decimal number with fractional part, you should handle the fractional part separately.
> - When specifying the number of characters to use, ensure it is not less than the minimum needed to represent the number in octal.
> - Keep in mind that the function treats booleans as numbers. If you do not intend this behavior, you should convert booleans to text before passing them to the function.

### Usage

A few examples using the DEC2OCT function.

```
DEC2OCT(255) returns 377  
DEC2OCT(42,4) returns 0052  
DEC2OCT(1000) returns 1750  
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
        "Octal",
        "Octal (4 places)"
    ],
    [
        255,
        "=DEC2OCT(A2)",
        "=DEC2OCT(A2,4)"
    ],
    [
        42,
        "=DEC2OCT(A3)",
        "=DEC2OCT(A3,4)"
    ],
    [
        100,
        "=DEC2OCT(A4)",
        "=DEC2OCT(A4,4)"
    ],
    [
        512,
        "=DEC2OCT(A5)",
        "=DEC2OCT(A5,4)"
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
        "Octal",
        "Octal (4 places)"
    ],
    [
        255,
        "=DEC2OCT(A2)",
        "=DEC2OCT(A2,4)"
    ],
    [
        42,
        "=DEC2OCT(A3)",
        "=DEC2OCT(A3,4)"
    ],
    [
        100,
        "=DEC2OCT(A4)",
        "=DEC2OCT(A4,4)"
    ],
    [
        512,
        "=DEC2OCT(A5)",
        "=DEC2OCT(A5,4)"
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
        "Octal",
        "Octal (4 places)"
    ],
    [
        255,
        "=DEC2OCT(A2)",
        "=DEC2OCT(A2,4)"
    ],
    [
        42,
        "=DEC2OCT(A3)",
        "=DEC2OCT(A3,4)"
    ],
    [
        100,
        "=DEC2OCT(A4)",
        "=DEC2OCT(A4,4)"
    ],
    [
        512,
        "=DEC2OCT(A5)",
        "=DEC2OCT(A5,4)"
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
        "Octal",
        "Octal (4 places)"
    ],
    [
        255,
        "=DEC2OCT(A2)",
        "=DEC2OCT(A2,4)"
    ],
    [
        42,
        "=DEC2OCT(A3)",
        "=DEC2OCT(A3,4)"
    ],
    [
        100,
        "=DEC2OCT(A4)",
        "=DEC2OCT(A4,4)"
    ],
    [
        512,
        "=DEC2OCT(A5)",
        "=DEC2OCT(A5,4)"
    ]
]
            }]
        });
    }
}
```

