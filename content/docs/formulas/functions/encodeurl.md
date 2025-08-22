title: ENCODEURL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ENCODEURL function in Jspreadsheet

# ENCODEURL function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `ENCODEURL` function is used to make a piece of text suitable for inclusion in a URL. This means it converts the text in a way that can be safely added to a web address without causing errors. It's especially useful when you're working with dynamic data that needs to be inserted into URLs, as it ensures that the text will not break the URL structure.

## Documentation

The ENCODEURL function encodes a text string for use as a valid part of a URL.

### Category

Web

### Syntax

ENCODEURL(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to encode. |


### Behavior

The `ENCODEURL` function in spreadsheets is used to encode a URL or other text string to be URL safe. This function replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits corresponding to the character values in the ISO-8859-1 character-set.

- When given a text string, it will return the encoded URL.
- If the input cell is empty, the function will return an empty string.
- Numbers will be treated as text and be encoded accordingly.
- Boolean values (`TRUE`/`FALSE`) will be treated as text strings and encoded.
- The function does not evaluate errors, it simply encodes the error message as a text string.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given argument is not a text string. For example, if the input is a range of cells or an array. |
| #NAME? | This error occurs when the function name is misspelled or not recognized by the spreadsheet software. |

### Best practices
> - Always ensure that the input to `ENCODEURL` function is a text string. If you are unsure about the data type, use `TEXT` function to convert it to text before using `ENCODEURL`.
> - Remember that the `ENCODEURL` function will not make the URL clickable in the spreadsheet. If you want a clickable URL, you may need to use the `HYPERLINK` function.
> - Avoid using `ENCODEURL` on an entire array or a range of cells as it may result in a #VALUE! error.
> - Use `ENCODEURL` when you want to share a URL through mediums that may not support certain characters in the URL. This helps in preventing the URL from breaking.

### Usage

A few examples using the ENCODEURL function.

```
ENCODEURL('https://www.example.com') returns https%3A%2F%2Fwww.example.com  
ENCODEURL('apples&oranges') returns apples%26oranges  
ENCODEURL(A2) returns the encoded version of the text in cell A2.  
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
        "Original Text",
        "Encoded URL"
    ],
    [
        "hello world",
        "=ENCODEURL(A2)"
    ],
    [
        "search?q=cats&dogs",
        "=ENCODEURL(A3)"
    ],
    [
        "https://site.com/page",
        "=ENCODEURL(A4)"
    ],
    [
        "user@email.com",
        "=ENCODEURL(A5)"
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
        "Original Text",
        "Encoded URL"
    ],
    [
        "hello world",
        "=ENCODEURL(A2)"
    ],
    [
        "search?q=cats&dogs",
        "=ENCODEURL(A3)"
    ],
    [
        "https://site.com/page",
        "=ENCODEURL(A4)"
    ],
    [
        "user@email.com",
        "=ENCODEURL(A5)"
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
        "Original Text",
        "Encoded URL"
    ],
    [
        "hello world",
        "=ENCODEURL(A2)"
    ],
    [
        "search?q=cats&dogs",
        "=ENCODEURL(A3)"
    ],
    [
        "https://site.com/page",
        "=ENCODEURL(A4)"
    ],
    [
        "user@email.com",
        "=ENCODEURL(A5)"
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
        "Original Text",
        "Encoded URL"
    ],
    [
        "hello world",
        "=ENCODEURL(A2)"
    ],
    [
        "search?q=cats&dogs",
        "=ENCODEURL(A3)"
    ],
    [
        "https://site.com/page",
        "=ENCODEURL(A4)"
    ],
    [
        "user@email.com",
        "=ENCODEURL(A5)"
    ]
]
            }]
        });
    }
}
```

