title: JIS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the JIS function in Jspreadsheet

# JIS function



The `JIS` function in Jspreadsheet Formulas Pro is a tool that transforms a numerical value into a text format based on the Japanese Industrial Standards (JIS). This function is particularly helpful when dealing with data that needs to be presented in a standardized Japanese format. For instance, if you have a spreadsheet with numbers that need to be converted to JIS format for readability or compliance purposes, you can use the `JIS` function to do this transformation easily.

## Documentation

Converts a number to text in the JIS (Japanese Industrial Standards) format.

### Category

Text

### Syntax

JIS(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number that you want to convert to text. |


### Behavior

The `JIS` function in spreadsheets is used to convert full-width (double-byte) characters to half-width (single-byte) characters. It is commonly used in spreadsheets with Japanese characters. The function takes a text string as its argument and returns a string where all full-width characters have been converted to half-width. 

- If an empty cell is given as a reference, the `JIS` function returns an empty string.
- If a cell containing a number is given as a reference, the `JIS` function treats the number as a text string and applies the conversion.
- If a cell containing a boolean value (`TRUE` or `FALSE`) is given as a reference, the function treats the boolean as a text string and applies the conversion.
- If a cell containing an error is given as a reference, the `JIS` function propagates the error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned if the provided argument is not a text string. |
| #REF! | This error is returned if the cell reference provided is invalid. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name. This may occur if the function is not available in the version of the spreadsheet software being used. |

### Best practices

> - Use the `JIS` function to handle data that involves Japanese characters, as it is specifically designed for this purpose.
> - Be certain that the argument provided to the `JIS` function is a text string, or can be treated as a text string, to avoid a `#VALUE!` error.
> - Always verify that your cell references are correct to avoid a `#REF!` error.
> - Ensure your version of the spreadsheet software supports the `JIS` function to avoid a `#NAME?` error. If it doesn't, consider updating your software or finding an alternative method to achieve the same result.

### Usage

A few examples using the JIS function.

```
JIS(123)  
JIS(456.789)  
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
        "Number",
        "JIS Format"
    ],
    [
        123,
        "=JIS(A2)"
    ],
    [
        456.789,
        "=JIS(A3)"
    ],
    [
        1000,
        "=JIS(A4)"
    ],
    [
        25.5,
        "=JIS(A5)"
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
        "Number",
        "JIS Format"
    ],
    [
        123,
        "=JIS(A2)"
    ],
    [
        456.789,
        "=JIS(A3)"
    ],
    [
        1000,
        "=JIS(A4)"
    ],
    [
        25.5,
        "=JIS(A5)"
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
        "Number",
        "JIS Format"
    ],
    [
        123,
        "=JIS(A2)"
    ],
    [
        456.789,
        "=JIS(A3)"
    ],
    [
        1000,
        "=JIS(A4)"
    ],
    [
        25.5,
        "=JIS(A5)"
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
        "Number",
        "JIS Format"
    ],
    [
        123,
        "=JIS(A2)"
    ],
    [
        456.789,
        "=JIS(A3)"
    ],
    [
        1000,
        "=JIS(A4)"
    ],
    [
        25.5,
        "=JIS(A5)"
    ]
]
            }]
        });
    }
}
```

