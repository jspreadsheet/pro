title: UPPER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UPPER function in Jspreadsheet

# UPPER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `UPPER` function in Jspreadsheet Formulas Pro is a useful tool that changes all lowercase letters within a specific text string to uppercase. This feature is ideal if you need to standardize the text in your spreadsheet to uppercase for better readability or uniformity. To use it, simply type `=UPPER(text)` into the cell where you want the change to occur, replacing 'text' with the text string or cell reference you wish to transform. This function makes it effortless to convert any lowercase letters in your Jspreadsheet to uppercase.

## Documentation

Converts all lowercase letters in a text string to uppercase.

### Category

Text

### Syntax

UPPER(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that you want to convert to uppercase. If the text string contains numbers or special characters, they remain unchanged. |


### Behavior

The `UPPER` function in spreadsheets is used to convert all lowercase letters in a text string to uppercase. Here's how it handles different scenarios:

- **Empty cells**: If you use the `UPPER` function on an empty cell, it will return an empty string.
- **Text**: The `UPPER` function will convert all lowercase letters in the text string to uppercase. Any characters that are not lowercase letters (like numbers, punctuation, etc.) are left unchanged.
- **Booleans**: If the `UPPER` function is used on a cell with a boolean value (TRUE or FALSE), it will return "TRUE" or "FALSE" as a text string, in uppercase.
- **Errors**: If the `UPPER` function is used on a cell with an error value, it will return the same error.
- **Numbers**: If the `UPPER` function is used on a cell with a number, it will return the number as a text string. Since numbers don't have case, the output will be the same as the input.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error is returned when the given argument is not a text string. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name `UPPER`. |

### Best practices

> - Always ensure that the input to the `UPPER` function is a text string. If you're not sure, you can use the `TEXT` function to convert it to text first.
> - Remember that the `UPPER` function will not change numbers or special characters, only lowercase letters.
> - If you're using the `UPPER` function as part of a larger formula, always check the result to make sure it's what you expect.
> - Be aware that the `UPPER` function will convert boolean values to text strings, which may affect any subsequent calculations that use those cells.

### Usage

A few examples using the UPPER function.

```
UPPER("hello world") returns "HELLO WORLD", UPPER("123abc") returns "123ABC", UPPER("&$^%") returns "&$^%"  
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
        "Name",
        "Uppercase Name"
    ],
    [
        "john smith",
        "=UPPER(A2)"
    ],
    [
        "mary johnson",
        "=UPPER(A3)"
    ],
    [
        "bob wilson",
        "=UPPER(A4)"
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
        "Name",
        "Uppercase Name"
    ],
    [
        "john smith",
        "=UPPER(A2)"
    ],
    [
        "mary johnson",
        "=UPPER(A3)"
    ],
    [
        "bob wilson",
        "=UPPER(A4)"
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
        "Name",
        "Uppercase Name"
    ],
    [
        "john smith",
        "=UPPER(A2)"
    ],
    [
        "mary johnson",
        "=UPPER(A3)"
    ],
    [
        "bob wilson",
        "=UPPER(A4)"
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
        "Name",
        "Uppercase Name"
    ],
    [
        "john smith",
        "=UPPER(A2)"
    ],
    [
        "mary johnson",
        "=UPPER(A3)"
    ],
    [
        "bob wilson",
        "=UPPER(A4)"
    ]
]
            }]
        });
    }
}
```

