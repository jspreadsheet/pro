title: OCT2DEC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the OCT2DEC function in Jspreadsheet

# OCT2DEC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `OCT2DEC` function in Jspreadsheet Formulas Pro is a tool that allows you to convert an octal number (a number system based on 8) into a decimal number (our familiar number system based on 10). This is especially useful when you're working with data that uses different number systems. Simply input the octal number into the function, and it will output the equivalent decimal number, making your data analysis in Jspreadsheet Formulas Pro easier and more efficient.

## Documentation

Converts a octal number to decimal.

### Category

Engineering

### Syntax

OCT2DEC(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The octal number you want to convert to decimal. The number cannot contain more than 10 characters (digits). |


### Behavior

The `OCT2DEC` function in spreadsheets converts an octal number (base 8) to a decimal number (base 10). Here's how it behaves with various inputs:

- **Empty cells:** If the function references an empty cell, it will return an error, as it expects a numeric octal input.
- **Text:** When a text that doesn't form a valid octal number is entered as an argument, the function returns an error. However, if the text is a valid octal number (only contains digits from 0 to 7), it will correctly convert it to decimal.
- **Booleans:** The function doesn't accept boolean values. If you try to use one, it will return an error.
- **Errors:** If the argument is an error, the function will propagate that error. 
- **Negative numbers:** The function can handle negative octal numbers and will convert them into their corresponding negative decimal numbers.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is returned when the input octal number is not a valid octal number, i.e., it contains digits other than 0 to 7. |
| #VALUE! | This error is returned when the input argument is non-numeric, such as text that cannot be interpreted as an octal number, a boolean value, or an empty cell. |
| #REF! | This error is returned when the input cell reference is not valid. |

### Best practices

> - Always ensure that the input to the `OCT2DEC` function is a valid octal number, i.e., it contains only the digits 0 to 7.
> - Be aware that the function can handle both positive and negative octal numbers.
> - The function doesn't handle non-numeric data types, so always input or reference cells with numeric or text-formatted octal numbers.
> - If you're using a cell reference as the function's argument, make sure that the referenced cell contains a valid octal number, not an error or empty cell.

### Usage

A few examples using the OCT2DEC function.

```
OCT2DEC(63) returns 51  
OCT2DEC(72) returns 58  
OCT2DEC(777) returns 511  
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
        "Octal Number",
        "Decimal Equivalent"
    ],
    [
        54,
        "=OCT2DEC(A2)"
    ],
    [
        123,
        "=OCT2DEC(A3)"
    ],
    [
        777,
        "=OCT2DEC(A4)"
    ],
    [
        1024,
        "=OCT2DEC(A5)"
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
        "Octal Number",
        "Decimal Equivalent"
    ],
    [
        54,
        "=OCT2DEC(A2)"
    ],
    [
        123,
        "=OCT2DEC(A3)"
    ],
    [
        777,
        "=OCT2DEC(A4)"
    ],
    [
        1024,
        "=OCT2DEC(A5)"
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
        "Octal Number",
        "Decimal Equivalent"
    ],
    [
        54,
        "=OCT2DEC(A2)"
    ],
    [
        123,
        "=OCT2DEC(A3)"
    ],
    [
        777,
        "=OCT2DEC(A4)"
    ],
    [
        1024,
        "=OCT2DEC(A5)"
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
        "Octal Number",
        "Decimal Equivalent"
    ],
    [
        54,
        "=OCT2DEC(A2)"
    ],
    [
        123,
        "=OCT2DEC(A3)"
    ],
    [
        777,
        "=OCT2DEC(A4)"
    ],
    [
        1024,
        "=OCT2DEC(A5)"
    ]
]
            }]
        });
    }
}
```

