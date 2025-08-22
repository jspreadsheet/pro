title: PROPER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PROPER function in Jspreadsheet

# PROPER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PROPER` function in Jspreadsheet Formulas Pro is a valuable tool when you want to format your text data. It transforms a text string to have the first letter of each word capitalized, with all remaining letters set to lowercase. This is particularly useful for standardizing data entries, such as names or titles. With this function, you can easily ensure a consistent, professional appearance in your spreadsheet data.

## Documentation

Capitalizes the first letter of each word in a text string and sets all other letters to lowercase.

### Category

Text

### Syntax

PROPER(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to capitalize. |


### Behavior

The `PROPER` function in spreadsheets is designed to convert a text string to proper case, meaning the first letter in each word is capitalized and all other letters are lowercase. The function works as follows:
- With text: `PROPER` capitalizes the first letter in each word of the input text string and converts the rest of the characters to lowercase. For example, `PROPER("hello world")` returns "Hello World".
- With numbers: If the input is a number or a string that contains numbers, `PROPER` will return the number or string as it is, since numbers don't have cases.
- With booleans: If the input is a boolean value (`TRUE` or `FALSE`), `PROPER` will convert it to text and capitalize the first letter. For example, `PROPER(FALSE)` returns "False".
- With empty cells: If the input is an empty cell, `PROPER` will return an empty text string.
- With errors: If the input is an error, `PROPER` will return the same error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input to the `PROPER` function is not a text string. For example, `PROPER(A1:B2)` where `A1:B2` is a range of cells. |
| #NAME? | This error occurs when the spreadsheet does not recognize the text string as a valid function name or named range. This might happen if you misspell the `PROPER` function as something like "PRPER". |

### Best practices

> - Always ensure that the input to the `PROPER` function is a text string. If you're unsure, you can use the `TEXT` function to convert the input to text before using it in `PROPER`.
> - Be aware that `PROPER` only capitalizes the first letter of each word. If you need to capitalize all letters in a text string, use the `UPPER` function instead. Similarly, if you need to convert all letters in a text string to lowercase, use the `LOWER` function.
> - Remember that `PROPER` does not handle acronyms or other words that are traditionally written in all caps well. For example, `PROPER("NASA")` will return "Nasa". If this is not desired, you may need to manually adjust the output.
> - Use `PROPER` in combination with other text functions to manipulate and transform text in your spreadsheet in powerful ways. For example, you could combine `PROPER` with `TRIM` to remove extra spaces from a text string and then convert it to proper case.

### Usage

A few examples using the PROPER function.

```
PROPER("this is a test") returns "This Is A Test"  
PROPER("ALL CAPS HERE") returns "All Caps Here"  
PROPER(A1) capitalizes the first letter of each word in the text contained in cell A1  
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
        "Raw Names",
        "Formatted Names"
    ],
    [
        "john smith",
        "=PROPER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=PROPER(A3)"
    ],
    [
        "bob WILLIAMS",
        "=PROPER(A4)"
    ],
    [
        "sarah DAVIS",
        "=PROPER(A5)"
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
        "Raw Names",
        "Formatted Names"
    ],
    [
        "john smith",
        "=PROPER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=PROPER(A3)"
    ],
    [
        "bob WILLIAMS",
        "=PROPER(A4)"
    ],
    [
        "sarah DAVIS",
        "=PROPER(A5)"
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
        "Raw Names",
        "Formatted Names"
    ],
    [
        "john smith",
        "=PROPER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=PROPER(A3)"
    ],
    [
        "bob WILLIAMS",
        "=PROPER(A4)"
    ],
    [
        "sarah DAVIS",
        "=PROPER(A5)"
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
        "Raw Names",
        "Formatted Names"
    ],
    [
        "john smith",
        "=PROPER(A2)"
    ],
    [
        "MARY JOHNSON",
        "=PROPER(A3)"
    ],
    [
        "bob WILLIAMS",
        "=PROPER(A4)"
    ],
    [
        "sarah DAVIS",
        "=PROPER(A5)"
    ]
]
            }]
        });
    }
}
```

