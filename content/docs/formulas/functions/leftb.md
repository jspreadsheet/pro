title: LEFTB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LEFTB function in Jspreadsheet

# LEFTB function



In Jspreadsheet Formulas Pro, the `LEFTB` function is used to extract a specific number of bytes from the start of a text string. This function is particularly useful when you want to pull out a certain portion of data from a larger text string. You simply provide the text string and the number of bytes you want to extract, and the function will return that portion of text from the beginning of the string.

## Documentation

Returns a specified number of bytes from the beginning (left side) of a text string.

### Category

Text

### Syntax

LEFTB(text, num_bytes)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the characters you want to extract. |
| `num_bytes` | Specifies how many bytes you want LEFTB to return. |


### Behavior

The `LEFTB` function in spreadsheets extracts a certain number of bytes from the beginning of a text string. It is useful when dealing with text strings in languages that use double-byte characters. Here's how it generally behaves:

- The `LEFTB` function takes two arguments: the text string from which you want to extract, and the number of bytes you want to extract. If the number is not specified, it defaults to 1.
- If the text argument is an empty cell, `LEFTB` returns an empty text string.
- If the text argument is a boolean value, `LEFTB` treats it as a text string.
- If the text argument is a numeric value, `LEFTB` converts it to a text string before extracting bytes.
- If the number of bytes specified is more than the length of the text string, `LEFTB` returns the whole text string.
- If the number of bytes specified is less than 0, `LEFTB` returns a #VALUE! error.
- If the number of bytes specified is non-numeric, `LEFTB` returns a #VALUE! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the number of bytes you've specified for the `LEFTB` function is either less than 0 or is non-numeric. |
| #NAME? | This error occurs if the `LEFTB` function is misspelled or not correctly recognized by the spreadsheet program. |

### Best practices

> - Ensure the number of bytes specified for the `LEFTB` function is a positive number.
> - Be aware that `LEFTB` treats numeric and boolean values as text strings.
> - Remember that `LEFTB` defaults to extracting 1 byte if the number of bytes is not specified.
> - Use `LEFTB` when dealing with text strings in languages that use double-byte characters. For languages that use single-byte characters, use the `LEFT` function instead.

### Usage

A few examples using the LEFTB function.

```
LEFTB('apple', 3) returns 'app'  
LEFTB('banana', 2) returns 'ba'  
LEFTB('cherry', 5) returns 'cher'  
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
        "First 3 Bytes",
        "First 2 Bytes"
    ],
    [
        "LAPTOP001",
        "=LEFTB(A2,3)",
        "=LEFTB(A2,2)"
    ],
    [
        "MOUSE456",
        "=LEFTB(A3,3)",
        "=LEFTB(A3,2)"
    ],
    [
        "KEYBOARD789",
        "=LEFTB(A4,3)",
        "=LEFTB(A4,2)"
    ],
    [
        "MONITOR123",
        "=LEFTB(A5,3)",
        "=LEFTB(A5,2)"
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
        "First 3 Bytes",
        "First 2 Bytes"
    ],
    [
        "LAPTOP001",
        "=LEFTB(A2,3)",
        "=LEFTB(A2,2)"
    ],
    [
        "MOUSE456",
        "=LEFTB(A3,3)",
        "=LEFTB(A3,2)"
    ],
    [
        "KEYBOARD789",
        "=LEFTB(A4,3)",
        "=LEFTB(A4,2)"
    ],
    [
        "MONITOR123",
        "=LEFTB(A5,3)",
        "=LEFTB(A5,2)"
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
        "First 3 Bytes",
        "First 2 Bytes"
    ],
    [
        "LAPTOP001",
        "=LEFTB(A2,3)",
        "=LEFTB(A2,2)"
    ],
    [
        "MOUSE456",
        "=LEFTB(A3,3)",
        "=LEFTB(A3,2)"
    ],
    [
        "KEYBOARD789",
        "=LEFTB(A4,3)",
        "=LEFTB(A4,2)"
    ],
    [
        "MONITOR123",
        "=LEFTB(A5,3)",
        "=LEFTB(A5,2)"
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
        "First 3 Bytes",
        "First 2 Bytes"
    ],
    [
        "LAPTOP001",
        "=LEFTB(A2,3)",
        "=LEFTB(A2,2)"
    ],
    [
        "MOUSE456",
        "=LEFTB(A3,3)",
        "=LEFTB(A3,2)"
    ],
    [
        "KEYBOARD789",
        "=LEFTB(A4,3)",
        "=LEFTB(A4,2)"
    ],
    [
        "MONITOR123",
        "=LEFTB(A5,3)",
        "=LEFTB(A5,2)"
    ]
]
            }]
        });
    }
}
```

