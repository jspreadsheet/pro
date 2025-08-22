title: UNICODE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UNICODE function in Jspreadsheet

# UNICODE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `UNICODE` function in Jspreadsheet Formulas Pro is a tool that gives you the Unicode value of the initial character in any text string. Unicode is a universal standard that assigns a unique numeric value to each character used in digital text, including letters, numbers, symbols and emojis. With the `UNICODE` function, you can input a string of text and it will return the numeric Unicode value of the first character in that string. This can be particularly useful for various data analysis and manipulation tasks.

## Documentation

Returns the Unicode value of the first character in a text string.

### Category

Text

### Syntax

UNICODE(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string containing the character for which you want to find the Unicode value. If the text string contains multiple characters, only the first character is used. |


### Behavior

The `UNICODE` function in spreadsheets returns the Unicode value of the first character of the text provided. Here are some behaviors to note:

1. If the cell referenced is empty, the function returns `#VALUE!` error.
2. If the cell contains a string of text, the function will only consider the first character of the string.
3. If the cell contains a boolean value (TRUE or FALSE), the function will return `#VALUE!` error as it does not consider boolean values as text.
4. If the cell contains a numerical value, the function will return the Unicode value of the number's character representation.
5. If the function encounters an error, it will return the respective error message.

### Common Errors

| Error | Description |
| ------ | ------------ |
| `#VALUE!` | This error is returned when the referenced cell is empty or contains a boolean value. The `UNICODE` function requires a text value to return the correct Unicode value. |
| `#NAME?` | This error is returned when the spreadsheet does not recognize the function name. It can occur due to a typo or if the function is not supported in the spreadsheet software. |
| `#REF!` | This error is returned when the cell reference is not valid. This could be because the cell or range of cells does not exist. |

### Best practices

> - Always ensure that the cell referenced by the `UNICODE` function contains text. If the cell is empty or contains a boolean value, the function will return an error.
> - The `UNICODE` function only considers the first character of the text. If you want to get Unicode values for each character in the text, use a separate function for each character.
> - Be aware that the `UNICODE` function will treat numerical values as their character representation. If you want to get the Unicode value of a number as a character, convert the number to text first.
> - Always check for correct cell references to avoid `#REF!` errors.

### Usage

A few examples using the UNICODE function.

```
UNICODE("A") returns 65  
UNICODE("€") returns 8364  
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
        "Character",
        "Unicode Value"
    ],
    [
        "A",
        "=UNICODE(A2)"
    ],
    [
        "\u20ac",
        "=UNICODE(A3)"
    ],
    [
        "\u4e2d",
        "=UNICODE(A4)"
    ],
    [
        "@",
        "=UNICODE(A5)"
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
        "Character",
        "Unicode Value"
    ],
    [
        "A",
        "=UNICODE(A2)"
    ],
    [
        "\u20ac",
        "=UNICODE(A3)"
    ],
    [
        "\u4e2d",
        "=UNICODE(A4)"
    ],
    [
        "@",
        "=UNICODE(A5)"
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
        "Character",
        "Unicode Value"
    ],
    [
        "A",
        "=UNICODE(A2)"
    ],
    [
        "\u20ac",
        "=UNICODE(A3)"
    ],
    [
        "\u4e2d",
        "=UNICODE(A4)"
    ],
    [
        "@",
        "=UNICODE(A5)"
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
        "Character",
        "Unicode Value"
    ],
    [
        "A",
        "=UNICODE(A2)"
    ],
    [
        "\u20ac",
        "=UNICODE(A3)"
    ],
    [
        "\u4e2d",
        "=UNICODE(A4)"
    ],
    [
        "@",
        "=UNICODE(A5)"
    ]
]
            }]
        });
    }
}
```

