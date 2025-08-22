title: DEC2HEX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DEC2HEX function in Jspreadsheet

# DEC2HEX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DEC2HEX` function in Jspreadsheet Formulas Pro is a tool that allows you to convert a decimal number into a hexadecimal format. Hexadecimal is a base-16 number system used in digital and computer systems. When you input a decimal number into the `DEC2HEX` function, it will output the corresponding hexadecimal value. This function is especially useful when dealing with data that needs to be represented in a hexadecimal format.

## Documentation

Converts a decimal number to hexadecimal format.

### Category

Engineering

### Syntax

DEC2HEX(number, [places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The decimal number you want to convert to hexadecimal. |
| `[places]` | Optional. The minimum number of characters to use for the hexadecimal number. If omitted or zero, the function will use as many characters as necessary. |


### Behavior

The DEC2HEX function in spreadsheets is used to convert decimal numbers into hexadecimal. Here are some behaviors to expect:

- If the cell is empty, the function will return an error.
- The function only accepts numerical values. If a text string is entered, an error would be returned.
- It can handle positive numbers, negative numbers, and zero.
- It does not directly handle boolean values. True and False are interpreted as 1 and 0 respectively.
- If an error (like #VALUE! or #DIV/0!) is in the cell referenced by the function, it will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the provided argument is non-numeric. |
| #NUM! | This error is returned when the provided number is less than -549,755,813,888 or more than 549,755,813,887. |
| #N/A | This error occurs if the function is not supported in the version of the spreadsheet being used. |

### Best practices

> - Always ensure that the input value to the DEC2HEX function is a decimal number.
> - Be aware of the numerical limits of the DEC2HEX function to avoid the #NUM! error.
> - Use error handling functions like IFERROR to handle possible errors that may arise from using the DEC2HEX function.
> - Remember that the DEC2HEX function will treat boolean values as 1 (for TRUE) and 0 (for FALSE). Make sure this is the expected behavior for your use case.

### Usage

A few examples using the DEC2HEX function.

```
DEC2HEX(255) returns FF  
DEC2HEX(42,4) returns 002A  
DEC2HEX(1000) returns 3E8  
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        255,
        "=DEC2HEX(A2)",
        "=DEC2HEX(A2,4)"
    ],
    [
        42,
        "=DEC2HEX(A3)",
        "=DEC2HEX(A3,4)"
    ],
    [
        1000,
        "=DEC2HEX(A4)",
        "=DEC2HEX(A4,4)"
    ],
    [
        16,
        "=DEC2HEX(A5)",
        "=DEC2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        255,
        "=DEC2HEX(A2)",
        "=DEC2HEX(A2,4)"
    ],
    [
        42,
        "=DEC2HEX(A3)",
        "=DEC2HEX(A3,4)"
    ],
    [
        1000,
        "=DEC2HEX(A4)",
        "=DEC2HEX(A4,4)"
    ],
    [
        16,
        "=DEC2HEX(A5)",
        "=DEC2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        255,
        "=DEC2HEX(A2)",
        "=DEC2HEX(A2,4)"
    ],
    [
        42,
        "=DEC2HEX(A3)",
        "=DEC2HEX(A3,4)"
    ],
    [
        1000,
        "=DEC2HEX(A4)",
        "=DEC2HEX(A4,4)"
    ],
    [
        16,
        "=DEC2HEX(A5)",
        "=DEC2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        255,
        "=DEC2HEX(A2)",
        "=DEC2HEX(A2,4)"
    ],
    [
        42,
        "=DEC2HEX(A3)",
        "=DEC2HEX(A3,4)"
    ],
    [
        1000,
        "=DEC2HEX(A4)",
        "=DEC2HEX(A4,4)"
    ],
    [
        16,
        "=DEC2HEX(A5)",
        "=DEC2HEX(A5,4)"
    ]
]
            }]
        });
    }
}
```

