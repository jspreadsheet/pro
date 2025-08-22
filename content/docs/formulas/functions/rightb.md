title: RIGHTB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RIGHTB function in Jspreadsheet

# RIGHTB function



The `RIGHTB` function in Jspreadsheet Formulas Pro is a useful tool that allows you to extract a specific number of bytes from the end of a given text string. For instance, if you have a lengthy piece of text and need to pull out the last few bytes, you can use this function. You simply specify the text string and the number of bytes you want to extract, and the function will return them. This is particularly useful for processing and analyzing data in Jspreadsheet.

## Documentation

Returns a specified number of bytes from the end of a text string.

### Category

Text

### Syntax

RIGHTB(text, number_of_bytes)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string containing the bytes to return. |
| `number_of_bytes` | The number of bytes to return from the end of the text string. |


### Behavior

The `RIGHTB` function in spreadsheets is used to extract a specific number of bytes from a text string, starting from the rightmost byte. This function is especially useful when dealing with languages that use double-byte characters. The behavior of `RIGHTB` across different types of inputs is as follows:

- **Text**: `RIGHTB` works directly on text strings. It counts the number of bytes from the right of the text string as specified by the user and returns the corresponding characters.

- **Numbers**: If a cell contains a number, `RIGHTB` treats it as a text string and operates accordingly.

- **Booleans**: Boolean values (`TRUE` / `FALSE`) are treated as text strings (`"TRUE"` / `"FALSE"`) by the `RIGHTB` function.

- **Empty cells**: If the `RIGHTB` function is used on an empty cell, it returns an empty string.

- **Errors**: If a cell contains an error, `RIGHTB` will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the number of bytes to be returned is less than 0. |
| #NAME? | This error is returned when the `RIGHTB` function is misspelled or the input arguments are not recognized. |
| #REF! | This error is returned when the referred cell is invalid. |

### Best practices

> - Always ensure that the number of bytes to be returned is a non-negative number to avoid the #VALUE! error.
> - Be aware that `RIGHTB` counts bytes, not characters. Some characters may use more than one byte, especially in non-English languages.
> - Use the `RIGHTB` function in combination with other text functions for more complex text manipulation tasks.
> - If you are only dealing with single-byte characters, consider using the `RIGHT` function for simplicity.

### Usage

A few examples using the RIGHTB function.

```
RIGHTB("Hello World", 5) returns "World"  
RIGHTB("Excel Functions", 9) returns "Functions"  
RIGHTB("12345", 2) returns "45"  
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
        "Product Code",
        "Last 3 Characters",
        "Last 5 Characters"
    ],
    [
        "PROD-12345",
        "=RIGHTB(A2,3)",
        "=RIGHTB(A2,5)"
    ],
    [
        "ITEM-ABCDE",
        "=RIGHTB(A3,3)",
        "=RIGHTB(A3,5)"
    ],
    [
        "SKU-9876XY",
        "=RIGHTB(A4,3)",
        "=RIGHTB(A4,5)"
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
        "Product Code",
        "Last 3 Characters",
        "Last 5 Characters"
    ],
    [
        "PROD-12345",
        "=RIGHTB(A2,3)",
        "=RIGHTB(A2,5)"
    ],
    [
        "ITEM-ABCDE",
        "=RIGHTB(A3,3)",
        "=RIGHTB(A3,5)"
    ],
    [
        "SKU-9876XY",
        "=RIGHTB(A4,3)",
        "=RIGHTB(A4,5)"
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
        "Product Code",
        "Last 3 Characters",
        "Last 5 Characters"
    ],
    [
        "PROD-12345",
        "=RIGHTB(A2,3)",
        "=RIGHTB(A2,5)"
    ],
    [
        "ITEM-ABCDE",
        "=RIGHTB(A3,3)",
        "=RIGHTB(A3,5)"
    ],
    [
        "SKU-9876XY",
        "=RIGHTB(A4,3)",
        "=RIGHTB(A4,5)"
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
        "Product Code",
        "Last 3 Characters",
        "Last 5 Characters"
    ],
    [
        "PROD-12345",
        "=RIGHTB(A2,3)",
        "=RIGHTB(A2,5)"
    ],
    [
        "ITEM-ABCDE",
        "=RIGHTB(A3,3)",
        "=RIGHTB(A3,5)"
    ],
    [
        "SKU-9876XY",
        "=RIGHTB(A4,3)",
        "=RIGHTB(A4,5)"
    ]
]
            }]
        });
    }
}
```

