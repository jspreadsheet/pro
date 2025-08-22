title: SUBSTITUTE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUBSTITUTE function in Jspreadsheet

# SUBSTITUTE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SUBSTITUTE` function in Jspreadsheet Formulas Pro is a handy tool that allows you to switch out a specific piece of text within a string with a different text. This is particularly useful when you need to correct or update certain words or characters within your data. You can choose which occurrence of the specified text you want to replace, or replace all occurrences at once. With this function, maintaining accuracy and consistency in your spreadsheet becomes much more straightforward.

## Documentation

Replaces a specified occurrence of text in a string with another text.

### Category

Text

### Syntax

SUBSTITUTE(text, old_text, new_text, [instance_num])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text or the reference to a cell containing text in which you want to substitute characters. |
| `old_text` | The text you want to replace. |
| `new_text` | The text you want to replace the old text with. |
| `[instance_num]` | Optional. The occurrence of old_text in text that you want to substitute. If omitted, all occurrences are substituted. |


### Behavior

The 'SUBSTITUTE' function in spreadsheets is used to replace existing text with a new text in a string. Here is how it handles different inputs:

- **Texts:** The function works optimally when used with text strings. It searches the specified cell for the old text and replaces it with the new one.

- **Numbers:** If the old text and new text are numbers, the 'SUBSTITUTE' function will also work correctly.

- **Empty cells:** If the cell referred to is empty, the 'SUBSTITUTE' function will return an empty cell as well.

- **Booleans:** If the 'SUBSTITUTE' function is used on cells containing Boolean values (TRUE/FALSE), it will treat them as text strings and operate accordingly. If the old text doesn't match the Boolean value, it will return the original Boolean value.

- **Errors:** If the cell referenced by the 'SUBSTITUTE' function contains an error, the function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the function's argument is not a valid data type. For example, if the old text or new text is an array or range. |
| #N/A | This error shows up when the instance number provided is less than 1. |

### Best practices

> - Always ensure that the data type of the old text and the new text is text or number. Using other data types, like arrays or ranges, will result in errors.
> - While specifying the instance number, ensure it is not less than 1 to avoid #N/A errors.
> - If you want to replace all instances of the old text, do not specify the instance number. By default, the 'SUBSTITUTE' function replaces all occurrences.
> - Use the 'SUBSTITUTE' function with caution when used on cells containing Boolean values, as it treats them as text strings.

### Usage

A few examples using the SUBSTITUTE function.

```
SUBSTITUTE("apples and oranges", "apples", "bananas") returns "bananas and oranges"  
SUBSTITUTE(A2, B2, C2) replaces the text in cell B2 with the text in cell C2 in the text string in cell A2  
SUBSTITUTE("one fish two fish red fish blue fish", "fish", "cat", 2) returns "one fish two cat red fish blue fish", replacing only the second occurrence of "fish" with "cat"  
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
        "Old Email",
        "New Domain",
        "Updated Email"
    ],
    [
        "john@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A2,\"oldcompany.com\",B2)"
    ],
    [
        "sarah@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A3,\"oldcompany.com\",B3)"
    ],
    [
        "mike@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A4,\"oldcompany.com\",B4)"
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
        "Old Email",
        "New Domain",
        "Updated Email"
    ],
    [
        "john@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A2,\"oldcompany.com\",B2)"
    ],
    [
        "sarah@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A3,\"oldcompany.com\",B3)"
    ],
    [
        "mike@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A4,\"oldcompany.com\",B4)"
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
        "Old Email",
        "New Domain",
        "Updated Email"
    ],
    [
        "john@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A2,\"oldcompany.com\",B2)"
    ],
    [
        "sarah@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A3,\"oldcompany.com\",B3)"
    ],
    [
        "mike@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A4,\"oldcompany.com\",B4)"
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
        "Old Email",
        "New Domain",
        "Updated Email"
    ],
    [
        "john@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A2,\"oldcompany.com\",B2)"
    ],
    [
        "sarah@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A3,\"oldcompany.com\",B3)"
    ],
    [
        "mike@oldcompany.com",
        "newcompany.com",
        "=SUBSTITUTE(A4,\"oldcompany.com\",B4)"
    ]
]
            }]
        });
    }
}
```

