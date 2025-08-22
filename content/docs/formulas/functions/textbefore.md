title: TEXTBEFORE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TEXTBEFORE function in Jspreadsheet

# TEXTBEFORE function

`PRO`{.jtag}

The `TEXTBEFORE` function in Jspreadsheet Formulas Pro is a handy tool that allows you to extract a portion of text from a larger string. It works by locating a specific character or string in your text and returning everything that comes before it. For example, if you have the string "apple-banana" and you use `TEXTBEFORE` with "-" as the specified character, the function will return "apple". This can be extremely useful when managing and organizing large amounts of text data.

## Documentation

Returns the substring of text before a specified character or string.

### Category

Text

### Syntax

TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text from which to extract the substring. |
| `delimiter` | The character or string before which to stop extracting the substring. |
| `[instance_num]` | Optional. The instance number (default is 1) that specifies which occurrence of the delimiter to use for extraction. |
| `[match_mode]` | Optional. The matching mode (default is case-sensitive) to determine how to find the delimiter. |
| `[match_end]` | Optional. A logical value (default is FALSE) to specify whether to include the delimiter in the result. |
| `[if_not_found]` | Optional. The value to return if the delimiter is not found in the text. |


### Behavior

The `TEXTBEFORE` function in spreadsheets is used to extract all characters before a specific text in a cell value. Here's how it handles different data types:

1. Empty cells: If the cell is empty or the specific text is not present in the cell value, the function returns an empty string.
2. Text: The function works ideally with text, extracting all characters before the specified text in the cell value.
3. Numbers: If the cell contains numeric values, they are treated as text, and the function will return all characters before the specific text.
4. Booleans: Boolean values (`TRUE` and `FALSE`) are also treated as text. The function will return all characters before the specific text.
5. Errors: If there is an error in the cell or the specific text is an error, the function will return an error.

### Common Errors

| Error | Description |
| ------|-------------|
| #VALUE! | This error occurs when the specific text is not found in the cell value. |
| #N/A | This error occurs when the function does not find the cell or range specified in the arguments. |
| #REF! | This error occurs when the cell reference is not valid. For example, when the referenced cell is deleted. |

### Best practices
> - Always ensure that the specific text you are looking for exists in the cell value. If it doesn't, the function will return an error.
> - Be aware that the function is case sensitive. Therefore, always ensure that the specific text argument matches the text in the cell value exactly.
> - The function treats numbers and booleans as text. Therefore, if the specific text is a number or boolean, ensure to enter it as text.
> - Use the function together with other text functions for more complex text manipulations. For example, you could use `TEXTAFTER` to get the text after a specific character.

### Usage

A few examples using the TEXTBEFORE function.

```
TEXTBEFORE("apple,banana,cherry", ",") returns "apple"  
TEXTBEFORE("Hello World", "World") returns "Hello "  
TEXTBEFORE("John Smith", " ") returns "John"  
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
        "Email Address",
        "Username",
        "Domain"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTBEFORE(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\")"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTBEFORE(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\")"
    ],
    [
        "mike.wilson@hotmail.com",
        "=TEXTBEFORE(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\")"
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
        "Email Address",
        "Username",
        "Domain"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTBEFORE(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\")"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTBEFORE(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\")"
    ],
    [
        "mike.wilson@hotmail.com",
        "=TEXTBEFORE(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\")"
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
        "Email Address",
        "Username",
        "Domain"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTBEFORE(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\")"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTBEFORE(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\")"
    ],
    [
        "mike.wilson@hotmail.com",
        "=TEXTBEFORE(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\")"
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
        "Email Address",
        "Username",
        "Domain"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTBEFORE(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\")"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTBEFORE(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\")"
    ],
    [
        "mike.wilson@hotmail.com",
        "=TEXTBEFORE(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\")"
    ]
]
            }]
        });
    }
}
```

