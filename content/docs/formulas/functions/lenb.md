title: LENB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LENB function in Jspreadsheet

# LENB function



The `LENB` function in Jspreadsheet Formulas Pro is a tool that gives you the total number of bytes in a specific text string. It's useful when you're dealing with data that needs byte-level analysis. For instance, if you input `LENB("Hello")` into a cell, you'll get the result 5, as 'Hello' consists of 5 bytes. This function can be particularly useful when you're dealing with large amounts of text and need a quick way to analyze the data size.

## Documentation

Returns the number of bytes in a text string.

### Category

Text

### Syntax

LENB(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string whose byte length you want to find. |


### Behavior

The `LENB` function in spreadsheets is used to return the length of a text string as the number of bytes. This function can be extremely useful when dealing with texts in different languages where a single character may take more than one byte. Here are some common behaviors:

- Empty Cells: If the `LENB` function is used on an empty cell, it will return 0.
- Text: If used on a cell containing text, it returns the number of bytes used to represent the characters.
- Numbers: If used on a cell containing a number, it will consider the number as a text string and return the number of bytes used to represent it.
- Booleans: If used on a cell containing a boolean value, it will consider the boolean as a text string and return the number of bytes used to represent it.
- Errors: If used on a cell containing an error, it will return that error.
- Arrays: `LENB` does not operate on arrays.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the given argument is non-numeric or is in an inappropriate format. |
| #NAME? | This error occurs when the spreadsheet does not recognize the text in the formula. For example, a misspelled `LENB` function like `LENBB` will result in a `#NAME?` error. |
| #REF! | This error occurs when the cell reference is not valid. |

### Best practices

> - Be aware that `LENB` counts bytes, not characters. This can lead to different results for languages where a single character may be represented by more than one byte.
> - Always check for leading or trailing spaces in your text strings that might be affecting the `LENB` result.
> - Use the `TRIM` function in combination with `LENB` to remove unnecessary spaces.
> - Be mindful of non-printable characters which might be included in your text string and affect the byte count.

### Usage

A few examples using the LENB function.

```
LENB('apple') returns 5  
LENB('banana') returns 6  
LENB('cherry') returns 6  
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
        "Product Name",
        "Byte Count"
    ],
    [
        "apple",
        "=LENB(A2)"
    ],
    [
        "banana",
        "=LENB(A3)"
    ],
    [
        "cherry",
        "=LENB(A4)"
    ],
    [
        "orange",
        "=LENB(A5)"
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
        "Product Name",
        "Byte Count"
    ],
    [
        "apple",
        "=LENB(A2)"
    ],
    [
        "banana",
        "=LENB(A3)"
    ],
    [
        "cherry",
        "=LENB(A4)"
    ],
    [
        "orange",
        "=LENB(A5)"
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
        "Product Name",
        "Byte Count"
    ],
    [
        "apple",
        "=LENB(A2)"
    ],
    [
        "banana",
        "=LENB(A3)"
    ],
    [
        "cherry",
        "=LENB(A4)"
    ],
    [
        "orange",
        "=LENB(A5)"
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
        "Product Name",
        "Byte Count"
    ],
    [
        "apple",
        "=LENB(A2)"
    ],
    [
        "banana",
        "=LENB(A3)"
    ],
    [
        "cherry",
        "=LENB(A4)"
    ],
    [
        "orange",
        "=LENB(A5)"
    ]
]
            }]
        });
    }
}
```

