title: DBCS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DBCS function in Jspreadsheet

# DBCS function



The `DBCS` function in Jspreadsheet Formulas Pro is a tool that allows you to verify if a text string includes double-byte characters. These types of characters are typically found in languages like Japanese and Chinese. When you use this function, it scans the text you provide and returns a true or false response. This can be particularly useful if you're working with multilingual data and need to identify specific language characters.

## Documentation

Checks whether a text string contains double-byte characters, which are used in some languages such as Japanese and Chinese.

### Category

Text

### Syntax

DBCS(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to be checked for double-byte characters. |


### Behavior

The 'DBCS' function in spreadsheets is not a standard function and may not be recognized in common spreadsheet programs such as Excel, Google Sheets, or OpenOffice Calc. It is usually associated with Double Byte Character Set (DBCS) in computing, which is used to encode languages with a large number of unique characters, such as Chinese, Japanese, and Korean. If you are referring to a specific function within a specific spreadsheet software, ensure that it supports the function and that it is properly documented.

### Common Errors

Since 'DBCS' is not a recognized function in standard spreadsheet software, attempting to use it as a function will likely result in an error. The table below lists some common errors that may occur:

| Error Name | Description |
|------------|-------------|
| #NAME?     | This error occurs when spreadsheet software does not recognize the text in a formula. If you're trying to use 'DBCS' as a function in Excel or Google Sheets, you'll likely encounter this error because 'DBCS' is not a recognized function. |
| #VALUE!    | This error occurs when the wrong type of argument or operand is used. If 'DBCS' were a function and it expected a certain data type but received another, this error could occur. |
| #REF!      | This error occurs when a formula contains an invalid cell reference. If 'DBCS' were a function and it referred to a cell that doesn't exist, this error could occur. |

### Best practices

> Since 'DBCS' isn't a recognized function in most spreadsheet software, here are some general best practices for using functions:
> 1. Always check the documentation: Ensure the function you're using is supported by your spreadsheet software and understand what it does and what arguments it expects.
> 2. Check your data: Make sure the data you're inputting into your function is the correct type and in the correct format.
> 3. Handle errors: Use error handling functions to manage and troubleshoot any potential errors that may occur.
> 4. Keep formulas simple: Try to avoid overly complex formulas. If a formula is becoming too complex, it might be better to break it down into smaller parts or use additional helper columns.

### Usage

A few examples using the DBCS function.

```
DBCS("こんにちは") returns TRUE because the string contains double-byte characters  
DBCS("Hello") returns FALSE because the string does not contain double-byte characters  
DBCS("你好") returns TRUE because the string contains double-byte characters  
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
        "Text Sample",
        "Contains DBCS?"
    ],
    [
        "Hello World",
        "=DBCS(A2)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=DBCS(A3)"
    ],
    [
        "\u4f60\u597d\u670b\u53cb",
        "=DBCS(A4)"
    ],
    [
        "Mixedtext\u6df7\u5408",
        "=DBCS(A5)"
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
        "Text Sample",
        "Contains DBCS?"
    ],
    [
        "Hello World",
        "=DBCS(A2)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=DBCS(A3)"
    ],
    [
        "\u4f60\u597d\u670b\u53cb",
        "=DBCS(A4)"
    ],
    [
        "Mixedtext\u6df7\u5408",
        "=DBCS(A5)"
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
        "Text Sample",
        "Contains DBCS?"
    ],
    [
        "Hello World",
        "=DBCS(A2)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=DBCS(A3)"
    ],
    [
        "\u4f60\u597d\u670b\u53cb",
        "=DBCS(A4)"
    ],
    [
        "Mixedtext\u6df7\u5408",
        "=DBCS(A5)"
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
        "Text Sample",
        "Contains DBCS?"
    ],
    [
        "Hello World",
        "=DBCS(A2)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=DBCS(A3)"
    ],
    [
        "\u4f60\u597d\u670b\u53cb",
        "=DBCS(A4)"
    ],
    [
        "Mixedtext\u6df7\u5408",
        "=DBCS(A5)"
    ]
]
            }]
        });
    }
}
```

