title: CODE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CODE function in Jspreadsheet

# CODE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CODE` function in Jspreadsheet Formulas Pro is used to retrieve the numeric code that represents the first character in a text string. This function is particularly useful when you need to perform operations based on the ASCII value of characters. For instance, if the input in `CODE` is 'A', the function will return 65, because 65 is the ASCII value for the uppercase letter 'A'. This function allows you to gain deeper insights and manipulate text data in your Jspreadsheet in a unique way.

## Documentation

Returns a numeric code for the first character in a text string.

### Category

Text

### Syntax

CODE(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string containing the character for which you want the code. |


### Behavior

The 'CODE' function in spreadsheets returns the Unicode value of the first character in the text provided. It expects a string input and will return an error if no input is provided. 

- Empty cells: If the 'CODE' function is applied to an empty cell, it will return an error because no character is available to return a Unicode value.
- Text: For text, the 'CODE' function will return the Unicode of the first character in the string. If multiple characters are present, only the first one's Unicode value will be returned.
- Booleans: If a Boolean value is provided as an input, the 'CODE' function will return an error because it expects a text string.
- Errors: If the cell to which the 'CODE' function is applied contains an error, the 'CODE' function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if the supplied argument is not a valid text string. |
| #NAME? | Occurs when the 'CODE' function is misspelled or not properly defined in the spreadsheet. |
| #ERROR! | Occurs if the 'CODE' function is applied to an empty cell or a cell that contains an error. |

### Best practices

> - Always ensure the input to the 'CODE' function is a valid text string. Providing a number, boolean, or error as an input will result in an error.
> - Remember that the 'CODE' function only considers the first character of a text string. If you need to find the code of a character other than the first one, consider using other text functions to manipulate the string first.
> - Be aware that the 'CODE' function returns Unicode values based on the UTF-16 standard. If you're working with characters from other encodings, the returned Unicode value may not be what you expect.
> - Always check for errors in your cells before applying the 'CODE' function to avoid cascading errors.

### Usage

A few examples using the CODE function.

```
CODE("A") returns 65  
CODE("a") returns 97  
CODE("$") returns 36  
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
        "ASCII Code"
    ],
    [
        "A",
        "=CODE(A2)"
    ],
    [
        "z",
        "=CODE(A3)"
    ],
    [
        "@",
        "=CODE(A4)"
    ],
    [
        "5",
        "=CODE(A5)"
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
        "ASCII Code"
    ],
    [
        "A",
        "=CODE(A2)"
    ],
    [
        "z",
        "=CODE(A3)"
    ],
    [
        "@",
        "=CODE(A4)"
    ],
    [
        "5",
        "=CODE(A5)"
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
        "ASCII Code"
    ],
    [
        "A",
        "=CODE(A2)"
    ],
    [
        "z",
        "=CODE(A3)"
    ],
    [
        "@",
        "=CODE(A4)"
    ],
    [
        "5",
        "=CODE(A5)"
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
        "ASCII Code"
    ],
    [
        "A",
        "=CODE(A2)"
    ],
    [
        "z",
        "=CODE(A3)"
    ],
    [
        "@",
        "=CODE(A4)"
    ],
    [
        "5",
        "=CODE(A5)"
    ]
]
            }]
        });
    }
}
```

