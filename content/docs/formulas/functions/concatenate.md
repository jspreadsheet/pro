title: CONCATENATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONCATENATE function in Jspreadsheet

# CONCATENATE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CONCATENATE` function in Jspreadsheet Formulas Pro is a tool that lets you merge or link two or more text strings into one single string. Think of it as a glue that combines different pieces of text together. It's particularly useful when you want to create a longer text string from several smaller ones. This function makes handling and organizing text data in your spreadsheet much simpler.

## Documentation

Joins two or more text strings into one string.

### Category

Text

### Syntax

CONCATENATE(text1, [text2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `text1` | The first text string to concatenate. |
| `[textN]` | Optional. Additional text strings to concatenate. |


### Behavior

The CONCATENATE function in a spreadsheet is used to join two or more text strings into one text string. Here are some common behaviors:

- Empty Cells: If the CONCATENATE function references an empty cell, it will simply ignore it and move on to the next cell.
- Text: The CONCATENATE function works perfectly with text, joining all specified text strings into one.
- Numbers: If numbers are included, CONCATENATE treats them as text and combines them accordingly.
- Booleans: If a boolean value (TRUE or FALSE) is used, CONCATENATE will convert it to its text representation ("TRUE" or "FALSE") and combine it accordingly.
- Errors: If a referenced cell contains an error, the CONCATENATE function will also return that error.

### Common Errors

|Error|Description|
|-|-|
| #VALUE! |This error occurs if the text to be joined exceeds 32767 characters, which is the maximum character limit for a cell.|
| #NAME? |This error occurs if the CONCATENATE function is misspelled or if the function is not supported by the spreadsheet software.|
| #REF! |This error occurs if the referenced cell is deleted or moved.|

> ### Best practices
>
> 1. Always ensure that the total length of the text being concatenated does not exceed the maximum character limit for a cell (32767 characters).
> 2. Rather than referencing a large range of cells, try to only reference the cells that contain the data you wish to concatenate.
> 3. Be cautious when referencing cells that may contain errors, as this will result in the CONCATENATE function returning an error.
> 4. In newer versions of Excel, consider using the CONCAT function instead of CONCATENATE, as it is more versatile and can handle arrays and ranges.

### Usage

A few examples using the CONCATENATE function.

```
CONCATENATE("Hello", " ", "world") returns "Hello world"  
CONCATENATE("Mary", " had a little lamb.") returns "Mary had a little lamb."  
CONCATENATE("Today is ", TEXT(TODAY(), "mm/dd/yyyy")) returns a string that includes today's date  
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
        "John",
        "Smith",
        "=CONCATENATE(A1,\" \",B1)"
    ],
    [
        "Mary",
        "Johnson",
        "=CONCATENATE(A2,\" \",B2)"
    ],
    [
        "Robert",
        "Williams",
        "=CONCATENATE(A3,\" \",B3)"
    ],
    [
        "Sarah",
        "Brown",
        "=CONCATENATE(A4,\" \",B4)"
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
        "John",
        "Smith",
        "=CONCATENATE(A1,\" \",B1)"
    ],
    [
        "Mary",
        "Johnson",
        "=CONCATENATE(A2,\" \",B2)"
    ],
    [
        "Robert",
        "Williams",
        "=CONCATENATE(A3,\" \",B3)"
    ],
    [
        "Sarah",
        "Brown",
        "=CONCATENATE(A4,\" \",B4)"
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
        "John",
        "Smith",
        "=CONCATENATE(A1,\" \",B1)"
    ],
    [
        "Mary",
        "Johnson",
        "=CONCATENATE(A2,\" \",B2)"
    ],
    [
        "Robert",
        "Williams",
        "=CONCATENATE(A3,\" \",B3)"
    ],
    [
        "Sarah",
        "Brown",
        "=CONCATENATE(A4,\" \",B4)"
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
        "John",
        "Smith",
        "=CONCATENATE(A1,\" \",B1)"
    ],
    [
        "Mary",
        "Johnson",
        "=CONCATENATE(A2,\" \",B2)"
    ],
    [
        "Robert",
        "Williams",
        "=CONCATENATE(A3,\" \",B3)"
    ],
    [
        "Sarah",
        "Brown",
        "=CONCATENATE(A4,\" \",B4)"
    ]
]
            }]
        });
    }
}
```

