title: CONCAT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONCAT function in Jspreadsheet

# CONCAT function

`PRO`{.jtag}

The `CONCAT` function in Jspreadsheet Formulas Pro is a handy tool that helps you combine or join two or more pieces of text into a single string. Essentially, it merges separate text elements together. For instance, you can use `CONCAT` to merge a first and a last name into a full name. This function makes it easier to handle and organize your text data effectively.

## Documentation

Joins two or more text strings into one string.

### Category

Text

### Syntax

CONCAT(text1, [text2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The first text string to concatenate. |
| `textN` | Optional. Additional text string to concatenate. |


### Behavior

The CONCAT function in spreadsheets combines two or more text strings into one string. Here's how it handles different types of inputs:

- **Empty cells**: If CONCAT function is applied on empty cells, it will simply ignore them and return the non-empty cells only. It does not produce any error or return a null string.

- **Text**: The CONCAT function can concatenate text strings, numbers, and cell references that contain text strings.

- **Booleans**: If CONCAT function is applied on cells containing boolean values (TRUE or FALSE), it will return the boolean values as text strings. 

- **Errors**: If one of the references in CONCAT function contains an error, the function will return that error. For instance, if you're concatenating cells A1 and A2, and if A1 contains an error, CONCAT function will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the CONCAT function is used with a range of cells, which is not allowed. You must explicitly reference each cell you wish to concatenate. |
| #NAME? | This error occurs if the CONCAT function is misspelled or if the text strings are not properly enclosed in quotes. |
| #REF! | This error occurs when the referenced cell is invalid. For example, if you delete a cell that is being referenced by the CONCAT function, #REF! error is displayed. |

### Best practices

> - When using CONCAT, always make sure to properly reference the cells you want to concatenate. Avoid selecting a range of cells as it would lead to a #VALUE! error.
> - Use the CONCAT function to combine text strings, numbers, or cell references that contain text and/or numbers.
> - Be mindful of the order in which you are concatenating cells, as CONCAT will combine the strings in the order they are referenced in the function.
> - Use delimiters like spaces, commas, etc., within your CONCAT function to make the final result more readable. For instance, you can use `=CONCAT(A1, " ", B1)` to add a space between the text in cell A1 and B1.

### Usage

A few examples using the CONCAT function.

```
CONCAT("Hello", " ", "world") returns "Hello world"  
CONCAT("Mary", " had a little lamb.") returns "Mary had a little lamb."  
CONCAT("Today is ", TEXT(TODAY(), "mm/dd/yyyy")) returns a string that includes today's date  
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
        "=CONCAT(A1,\" \",B1)"
    ],
    [
        "Sarah",
        "Johnson",
        "=CONCAT(A2,\" \",B2)"
    ],
    [
        "Mike",
        "Davis",
        "=CONCAT(A3,\" \",B3)"
    ],
    [
        "Hello",
        "World",
        "=CONCAT(A4,\" \",B4)"
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
        "=CONCAT(A1,\" \",B1)"
    ],
    [
        "Sarah",
        "Johnson",
        "=CONCAT(A2,\" \",B2)"
    ],
    [
        "Mike",
        "Davis",
        "=CONCAT(A3,\" \",B3)"
    ],
    [
        "Hello",
        "World",
        "=CONCAT(A4,\" \",B4)"
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
        "=CONCAT(A1,\" \",B1)"
    ],
    [
        "Sarah",
        "Johnson",
        "=CONCAT(A2,\" \",B2)"
    ],
    [
        "Mike",
        "Davis",
        "=CONCAT(A3,\" \",B3)"
    ],
    [
        "Hello",
        "World",
        "=CONCAT(A4,\" \",B4)"
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
        "=CONCAT(A1,\" \",B1)"
    ],
    [
        "Sarah",
        "Johnson",
        "=CONCAT(A2,\" \",B2)"
    ],
    [
        "Mike",
        "Davis",
        "=CONCAT(A3,\" \",B3)"
    ],
    [
        "Hello",
        "World",
        "=CONCAT(A4,\" \",B4)"
    ]
]
            }]
        });
    }
}
```

