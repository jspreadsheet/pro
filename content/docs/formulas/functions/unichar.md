title: UNICHAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UNICHAR function in Jspreadsheet

# UNICHAR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `UNICHAR` function in Jspreadsheet Formulas Pro is used to retrieve a specific Unicode character based on a numeric value you provide. Unicode is a universal standard for representing text and symbols from all writing systems. So if you have a number that corresponds to a specific Unicode character, the `UNICHAR` function will translate that number into the corresponding character. This can be handy for displaying special symbols or characters in your spreadsheet.

## Documentation

Returns the Unicode character that is referenced by the given numeric value.

### Category

Text

### Syntax

UNICHAR(num)

| Parameter | Description |
| ----------- | ------------- |
| `num` | A number between 1 and 1,114,111 that represents the Unicode character you want to return. |


### Behavior

The `UNICHAR` function in a spreadsheet is used to return the Unicode character that is represented by a given number. Here's how this function handles different inputs:

- Empty cells: If the `UNICHAR` function is given an empty cell as its input, it will return an error because it expects a numeric input.
- Text: If a text string is provided as an input, the `UNICHAR` function will return an error, unless the string contains a numeric value.
- Booleans: Boolean values (TRUE or FALSE) are not valid inputs for the `UNICHAR` function. If a boolean value is provided as an input, the function will return an error.
- Errors: If the input cell for the `UNICHAR` function contains an error, the function will also return an error.
- Numbers: The `UNICHAR` function expects a numeric input which represents a Unicode value. The function will return the corresponding Unicode character for this value.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the input is not a number, or if the input number is not a valid Unicode value. |
| #N/A | This error is displayed when the function doesn't have any input value. It needs a number as input to work correctly. |

### Best practices

> - Always ensure that the input to the `UNICHAR` function is a numeric value. Non-numeric inputs will result in errors.
> - Be aware that not all numbers correspond to printable or visible characters in the Unicode standard. Some numbers might correspond to control characters or other unprintable characters.
> - Use error handling functions like `IFERROR` in combination with the `UNICHAR` function to handle potential errors in a graceful manner.
> - Check the compatibility of the Unicode characters with the system where the spreadsheet is being viewed. Some characters might not be displayed correctly on all systems.

### Usage

A few examples using the UNICHAR function.

```
UNICHAR(65) returns "A"  
UNICHAR(8364) returns "€"  
UNICHAR(128591) returns "🙃"  
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
        "Unicode Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=UNICHAR(A2)",
        "Letter A"
    ],
    [
        8364,
        "=UNICHAR(A3)",
        "Euro symbol"
    ],
    [
        128591,
        "=UNICHAR(A4)",
        "Upside-down face emoji"
    ],
    [
        9733,
        "=UNICHAR(A5)",
        "Star symbol"
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
        "Unicode Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=UNICHAR(A2)",
        "Letter A"
    ],
    [
        8364,
        "=UNICHAR(A3)",
        "Euro symbol"
    ],
    [
        128591,
        "=UNICHAR(A4)",
        "Upside-down face emoji"
    ],
    [
        9733,
        "=UNICHAR(A5)",
        "Star symbol"
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
        "Unicode Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=UNICHAR(A2)",
        "Letter A"
    ],
    [
        8364,
        "=UNICHAR(A3)",
        "Euro symbol"
    ],
    [
        128591,
        "=UNICHAR(A4)",
        "Upside-down face emoji"
    ],
    [
        9733,
        "=UNICHAR(A5)",
        "Star symbol"
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
        "Unicode Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=UNICHAR(A2)",
        "Letter A"
    ],
    [
        8364,
        "=UNICHAR(A3)",
        "Euro symbol"
    ],
    [
        128591,
        "=UNICHAR(A4)",
        "Upside-down face emoji"
    ],
    [
        9733,
        "=UNICHAR(A5)",
        "Star symbol"
    ]
]
            }]
        });
    }
}
```

