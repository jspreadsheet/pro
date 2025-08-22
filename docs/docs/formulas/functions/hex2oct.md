title: HEX2OCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HEX2OCT function in Jspreadsheet

# HEX2OCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `HEX2OCT` function is utilized to transform a hexadecimal number into an octal number. Hexadecimal numbers are a base-16 counting system, often used in computing, while octal numbers use a base-8 system. When you input a hexadecimal number into the `HEX2OCT` function, it will output the equivalent number in octal format. This is particularly useful in certain computing and programming contexts.

## Documentation

Converts a hexadecimal number to octal.

### Category

Engineering

### Syntax

HEX2OCT(number,[places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The hexadecimal number you want to convert to octal. |
| `[places]` | Optional. The number of characters to use. Places must be a multiple of 3. If places is omitted, HEX2OCT uses the minimum number of characters necessary. |


### Behavior

The `HEX2OCT` function in spreadsheets takes a hexadecimal number as an input and converts it into an octal number. Here's how it handles different types of input:

- **Empty cells**: If an empty cell is provided as an argument, `HEX2OCT` will return an error, as it expects a hexadecimal number as input.
- **Text**: If a text string that isn't a valid hexadecimal number is provided, `HEX2OCT` will return an error. However, if the text string represents a valid hexadecimal number (for example, 'A'), it will be converted to its octal equivalent.
- **Booleans**: Boolean values are not valid inputs for this function and will result in an error.
- **Errors**: If the input cell has an error, the `HEX2OCT` function will also return an error.
- **Numeric values**: Numeric values will be treated as hexadecimal numbers and will be converted to their octal equivalent. For instance, if the input is '10' (which is a hexadecimal number), the output will be '20' (its octal equivalent).

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the hexadecimal number is negative, or it is greater than '1FFFFFFF' |
| #VALUE! | Occurs when the input argument is not a valid hexadecimal number, or the input cell is empty or contains non-numeric characters |

### Best practices

> - Always ensure that the inputs to the `HEX2OCT` function are valid hexadecimal numbers. Invalid inputs will result in errors.
> - Be cautious when inputting numeric values. The function will assume that they are hexadecimal numbers and will convert them accordingly.
> - Remember that `HEX2OCT` only accepts hexadecimal numbers up to '1FFFFFFF'. Anything beyond this will generate a #NUM! error.
> - Always check for error messages and understand what they signify to correctly use the `HEX2OCT` function.

### Usage

A few examples using the HEX2OCT function.

```
HEX2OCT("B",2)  
HEX2OCT("FF",4)  
HEX2OCT("1AC")  
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
        "Octal (Auto)",
        "Octal (4 places)"
    ],
    [
        "A",
        "=HEX2OCT(A2)",
        "=HEX2OCT(A2,4)"
    ],
    [
        "FF",
        "=HEX2OCT(A3)",
        "=HEX2OCT(A3,4)"
    ],
    [
        "1AC",
        "=HEX2OCT(A4)",
        "=HEX2OCT(A4,4)"
    ],
    [
        "B",
        "=HEX2OCT(A5)",
        "=HEX2OCT(A5,4)"
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
        "Octal (Auto)",
        "Octal (4 places)"
    ],
    [
        "A",
        "=HEX2OCT(A2)",
        "=HEX2OCT(A2,4)"
    ],
    [
        "FF",
        "=HEX2OCT(A3)",
        "=HEX2OCT(A3,4)"
    ],
    [
        "1AC",
        "=HEX2OCT(A4)",
        "=HEX2OCT(A4,4)"
    ],
    [
        "B",
        "=HEX2OCT(A5)",
        "=HEX2OCT(A5,4)"
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
        "Octal (Auto)",
        "Octal (4 places)"
    ],
    [
        "A",
        "=HEX2OCT(A2)",
        "=HEX2OCT(A2,4)"
    ],
    [
        "FF",
        "=HEX2OCT(A3)",
        "=HEX2OCT(A3,4)"
    ],
    [
        "1AC",
        "=HEX2OCT(A4)",
        "=HEX2OCT(A4,4)"
    ],
    [
        "B",
        "=HEX2OCT(A5)",
        "=HEX2OCT(A5,4)"
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
        "Octal (Auto)",
        "Octal (4 places)"
    ],
    [
        "A",
        "=HEX2OCT(A2)",
        "=HEX2OCT(A2,4)"
    ],
    [
        "FF",
        "=HEX2OCT(A3)",
        "=HEX2OCT(A3,4)"
    ],
    [
        "1AC",
        "=HEX2OCT(A4)",
        "=HEX2OCT(A4,4)"
    ],
    [
        "B",
        "=HEX2OCT(A5)",
        "=HEX2OCT(A5,4)"
    ]
]
            }]
        });
    }
}
```

