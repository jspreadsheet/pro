title: LOWER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOWER function in Jspreadsheet

# LOWER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LOWER` function in Jspreadsheet Formulas Pro is used to transform all uppercase letters in a given text string to lowercase. By inputting a specific text string into this function, it will return the same string but with all characters in lowercase. This is particularly useful when you need to standardize text data in your spreadsheet. It's a simple yet powerful tool to make your data more consistent and easier to analyze.

## Documentation

Converts all uppercase letters in a text string to lowercase.

### Category

Text

### Syntax

LOWER(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that you want to convert to lowercase. You can enter the text string directly into the function or reference a cell that contains the text string. |


### Behavior
The `LOWER` function in spreadsheets is used to convert all uppercase characters in a text string to lowercase. Here are some typical behaviors:
- **Text**: If the input is a text string, the `LOWER` function will convert all uppercase letters to lowercase. For example, `LOWER("HELLO WORLD")` will return `hello world`.
- **Empty cells**: If the cell reference is empty, the `LOWER` function will return an empty string.
- **Booleans**: If a boolean value (`TRUE` or `FALSE`) is given as an argument to the `LOWER` function, it will return the lowercase of the boolean's text representation, i.e., `true` or `false`.
- **Errors**: If the input is an error value, the `LOWER` function will return the same error value.
- **Numbers**: If the input is numeric, `LOWER` will return the number as it is because there are no uppercase or lowercase numbers.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error occurs when the `LOWER` function's argument is non-text (except for numbers, booleans, or error values). |
| #NAME? | This error occurs if the function name is misspelled, not recognized, or not defined. |

### Best practices
> - Although the `LOWER` function can handle numbers and booleans, it's primarily designed for text strings. It's best to use it with text for clarity and to prevent unexpected results.
> - Be careful when using this function with data that is case-sensitive. Converting everything to lowercase may cause data loss if the case was important.
> - If you're dealing with text strings with leading or trailing spaces, consider using the `TRIM` function before using `LOWER` to ensure accurate results.
> - If you want to convert only the first letter of each word to lowercase, use the `PROPER` function instead of `LOWER`.

### Usage

A few examples using the LOWER function.

```
LOWER("HELLO") returns the text string "hello"  
LOWER(A1) returns the text string in cell A1 with all uppercase letters converted to lowercase  
LOWER("Hello World") returns the text string "hello world".  
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
        "CUSTOMER NAME",
        "NORMALIZED NAME"
    ],
    [
        "JOHN SMITH",
        "=LOWER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=LOWER(A3)"
    ],
    [
        "ROBERT WILLIAMS",
        "=LOWER(A4)"
    ],
    [
        "SARAH DAVIS",
        "=LOWER(A5)"
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
        "CUSTOMER NAME",
        "NORMALIZED NAME"
    ],
    [
        "JOHN SMITH",
        "=LOWER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=LOWER(A3)"
    ],
    [
        "ROBERT WILLIAMS",
        "=LOWER(A4)"
    ],
    [
        "SARAH DAVIS",
        "=LOWER(A5)"
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
        "CUSTOMER NAME",
        "NORMALIZED NAME"
    ],
    [
        "JOHN SMITH",
        "=LOWER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=LOWER(A3)"
    ],
    [
        "ROBERT WILLIAMS",
        "=LOWER(A4)"
    ],
    [
        "SARAH DAVIS",
        "=LOWER(A5)"
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
        "CUSTOMER NAME",
        "NORMALIZED NAME"
    ],
    [
        "JOHN SMITH",
        "=LOWER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=LOWER(A3)"
    ],
    [
        "ROBERT WILLIAMS",
        "=LOWER(A4)"
    ],
    [
        "SARAH DAVIS",
        "=LOWER(A5)"
    ]
]
            }]
        });
    }
}
```

