title: RIGHT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RIGHT function in Jspreadsheet

# RIGHT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RIGHT` function in Jspreadsheet Formulas Pro is utilized to extract a certain number of characters from the end of a text string. For instance, if you have a sentence and you want to retrieve the last four characters, you would use this function. You simply input the text string and the number of characters you wish to extract into the function, and it will return your specified characters. It's a helpful tool for manipulating and analyzing text data in your spreadsheet.

## Documentation

Returns a specified number of characters from the end of a text string.

### Category

Text

### Syntax

RIGHT(text, number_of_characters)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string containing the characters to return. |
| `number_of_characters` | The number of characters to return from the end of the text string. |


### Behavior

The `RIGHT` function in a spreadsheet is used to extract a specific number of characters from a cell, starting from the right side of the cell's content. Here's how it handles various data types:

- **Empty Cells**: If the `RIGHT` function is used on an empty cell, it will return an empty string.
- **Text**: The `RIGHT` function extracts characters from a text string starting from the right side of the string.
- **Numbers**: The function treats numbers as text and extracts the rightmost digits.
- **Booleans**: Boolean values (TRUE and FALSE) are treated as text strings by the `RIGHT` function. 'TRUE' will be considered as 'TRUE' and 'FALSE' will be considered as 'FALSE'.
- **Errors**: If the `RIGHT` function is used on a cell containing an error, it will propagate the error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the text provided is not a string or if the number of characters to extract is less than 0. |
| #NAME? | This error occurs if the function name is misspelled. |

### Best practices

> - Be aware that the `RIGHT` function treats numbers as text. If you need to perform mathematical operations on the extracted digits, you might need to convert them back to numbers.
> - Use the `LEN` function in combination with `RIGHT` if you need to extract all characters up to a specific position from the right.
> - Remember that `RIGHT` function does not change the original data, it only returns the result in the cell where it is used. If you want to change the original data, you would need to copy the results and paste them as values.
> - Avoid using `RIGHT` function on cells containing error values, as it will simply propagate the error.

### Usage

A few examples using the RIGHT function.

```
RIGHT("Hello World", 5) returns "World"  
RIGHT("Excel Functions", 9) returns "Functions"  
RIGHT("12345", 2) returns "45"  
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
        "Product Code",
        "Last 3 Digits",
        "File Name",
        "Extension"
    ],
    [
        "ABC-12345",
        "=RIGHT(A2,3)",
        "report.xlsx",
        "=RIGHT(C2,4)"
    ],
    [
        "XYZ-67890",
        "=RIGHT(A3,3)",
        "data.pdf",
        "=RIGHT(C3,4)"
    ],
    [
        "DEF-54321",
        "=RIGHT(A4,3)",
        "summary.docx",
        "=RIGHT(C4,4)"
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
        "Product Code",
        "Last 3 Digits",
        "File Name",
        "Extension"
    ],
    [
        "ABC-12345",
        "=RIGHT(A2,3)",
        "report.xlsx",
        "=RIGHT(C2,4)"
    ],
    [
        "XYZ-67890",
        "=RIGHT(A3,3)",
        "data.pdf",
        "=RIGHT(C3,4)"
    ],
    [
        "DEF-54321",
        "=RIGHT(A4,3)",
        "summary.docx",
        "=RIGHT(C4,4)"
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
        "Product Code",
        "Last 3 Digits",
        "File Name",
        "Extension"
    ],
    [
        "ABC-12345",
        "=RIGHT(A2,3)",
        "report.xlsx",
        "=RIGHT(C2,4)"
    ],
    [
        "XYZ-67890",
        "=RIGHT(A3,3)",
        "data.pdf",
        "=RIGHT(C3,4)"
    ],
    [
        "DEF-54321",
        "=RIGHT(A4,3)",
        "summary.docx",
        "=RIGHT(C4,4)"
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
        "Product Code",
        "Last 3 Digits",
        "File Name",
        "Extension"
    ],
    [
        "ABC-12345",
        "=RIGHT(A2,3)",
        "report.xlsx",
        "=RIGHT(C2,4)"
    ],
    [
        "XYZ-67890",
        "=RIGHT(A3,3)",
        "data.pdf",
        "=RIGHT(C3,4)"
    ],
    [
        "DEF-54321",
        "=RIGHT(A4,3)",
        "summary.docx",
        "=RIGHT(C4,4)"
    ]
]
            }]
        });
    }
}
```

