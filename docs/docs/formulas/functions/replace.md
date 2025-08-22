title: REPLACE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REPLACE function in Jspreadsheet

# REPLACE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `REPLACE` function in Jspreadsheet Formulas Pro is a useful tool that allows you to change a specific sequence of characters within a string with a different set of characters. In other words, if you have a text or a sentence and you want to change a certain part of it, you can use the `REPLACE` function. This function needs you to specify the original text, the starting position of the sequence you want to replace, the number of characters to replace, and the new text you want to insert.

## Documentation

Replaces a sequence of characters in a string with another set of characters.

### Category

Text

### Syntax

REPLACE(old_text, start_num, num_chars, new_text)

| Parameter | Description |
| ----------- | ------------- |
| `old_text` | The text string that contains the characters you want to replace. |
| `start_num` | The position of the first character you want to replace in old_text. |
| `num_chars` | The number of characters you want to replace in old_text. |
| `new_text` | The replacement set of characters. |


### Behavior

The `REPLACE` function in spreadsheets is used to replace part of a text string with a different text string. It works by specifying the starting position and the number of characters to replace. Here's how it handles different situations:

- Empty cells: If the original_text argument is an empty cell, the function will return the new_text argument as the result.
- Text: The function works best with text data type. It will replace the specified part of the original text with the new text.
- Booleans: Boolean values are treated as text, where `TRUE` is considered as "TRUE" and `FALSE` is considered as "FALSE".
- Numeric values: Numeric values are treated as text.
- Errors: If the start_num argument is less than 1 or greater than the length of the original_text, the function will return a #VALUE! error. If the num_chars argument is less than 0, it also returns a #VALUE! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the start_num argument is less than 1 or greater than the length of the original_text, or if the num_chars argument is less than 0. |
| #NAME? | This error occurs when the function name is misspelled or if the syntax of the formula is incorrect. |

### Best practices

> - Always ensure that the start_num argument is greater than 0 and less than or equal to the length of the original_text to avoid #VALUE! error.
> - Be careful when using the num_chars argument. If it's set to a value greater than the remaining characters from the start_num, it will replace all the remaining characters.
> - When replacing part of a number, remember that the function treats numbers as text. Therefore, the result will also be text.
> - If the original_text argument refers to a cell, ensure that the cell contains text data type to get the expected result.

### Usage

A few examples using the REPLACE function.

```
REPLACE("Hello World", 7, 5, "Universe") returns "Hello Universe"  
REPLACE("John Doe", 2, 4, "Dane") returns "JDone"  
REPLACE("123456789", 3, 3, "ABC") returns "12ABC789"  
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
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACE(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Product-ABC-2024",
        "=REPLACE(A3,9,3,\"XYZ\")",
        "Product-XYZ-2024"
    ],
    [
        "File_old_name.txt",
        "=REPLACE(A4,6,3,\"new\")",
        "File_new_name.txt"
    ],
    [
        "ID:12345",
        "=REPLACE(A5,4,5,\"99999\")",
        "ID:99999"
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
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACE(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Product-ABC-2024",
        "=REPLACE(A3,9,3,\"XYZ\")",
        "Product-XYZ-2024"
    ],
    [
        "File_old_name.txt",
        "=REPLACE(A4,6,3,\"new\")",
        "File_new_name.txt"
    ],
    [
        "ID:12345",
        "=REPLACE(A5,4,5,\"99999\")",
        "ID:99999"
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
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACE(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Product-ABC-2024",
        "=REPLACE(A3,9,3,\"XYZ\")",
        "Product-XYZ-2024"
    ],
    [
        "File_old_name.txt",
        "=REPLACE(A4,6,3,\"new\")",
        "File_new_name.txt"
    ],
    [
        "ID:12345",
        "=REPLACE(A5,4,5,\"99999\")",
        "ID:99999"
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
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACE(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Product-ABC-2024",
        "=REPLACE(A3,9,3,\"XYZ\")",
        "Product-XYZ-2024"
    ],
    [
        "File_old_name.txt",
        "=REPLACE(A4,6,3,\"new\")",
        "File_new_name.txt"
    ],
    [
        "ID:12345",
        "=REPLACE(A5,4,5,\"99999\")",
        "ID:99999"
    ]
]
            }]
        });
    }
}
```

