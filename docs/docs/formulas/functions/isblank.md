title: ISBLANK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISBLANK function in Jspreadsheet

# ISBLANK function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISBLANK` function in Jspreadsheet Formulas Pro is a useful tool that helps you determine if a certain cell is empty or not. If the cell you've selected is empty, this function will return a value of TRUE. However, if there is any content in the cell, even just a single character, the function will return FALSE. It's a simple yet effective way to check for empty spaces in your spreadsheet.

## Documentation

Returns TRUE if a specified cell is empty, and FALSE otherwise.

### Category

Information

### Syntax

ISBLANK(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value or reference to the cell that you want to test. |


### Behavior

The `ISBLANK` function in spreadsheets is a logical function that checks if a specific cell is empty or not. It returns `TRUE` if the cell is completely empty, and `FALSE` if the cell contains any content, including spaces, false, 0, or an empty string (""). The function handles different types of content as follows:

- **Empty cells**: If the reference cell is empty, `ISBLANK` will return `TRUE`.
- **Text**: If the cell contains any form of text, even a single space, the function will return `FALSE`.
- **Numbers and Booleans**: `ISBLANK` will return `FALSE` for cells containing numbers, boolean values (`TRUE` or `FALSE`).
- **Errors**: If the cell contains an error (like #N/A, #VALUE!, etc.), `ISBLANK` will return `FALSE`.
- **Formulas**: If a cell contains a formula, `ISBLANK` will return `FALSE`, even if the formula's result is blank or an empty string ("").

### Common Errors

| Error | Description |
|-------|-------------|
| #REF! | This error occurs if the cell reference is not valid. This commonly happens when rows or columns containing the referenced cell is deleted.|
| #NAME? | This error is displayed when the spreadsheet does not recognize the formula name. This usually occurs when the `ISBLANK` function is misspelled. |

### Best practices

> - Always ensure that the cell reference is valid and exists to avoid #REF! errors.
> - Be aware that `ISBLANK` will return `FALSE` for cells containing spaces, formulas that return an empty string, or error values. If you want to test whether a cell contains any useful value or not, `ISBLANK` might not always work as expected.
> - If you want to check for cells that only appear blank but might contain spaces or invisible characters, consider using the `TRIM` function in combination with `ISBLANK`.
> - `ISBLANK` is case-insensitive and doesn't require any specific text formatting.

### Usage

A few examples using the ISBLANK function.

```
ISBLANK(A1) returns TRUE if cell A1 is empty  
ISBLANK(B2) returns FALSE if cell B2 contains any value (including a formula)  
ISBLANK(C3+D3) returns TRUE if the formula in C3+D3 evaluates to an empty cell.  
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
        "Name",
        "Email",
        "Complete?"
    ],
    [
        "John Smith",
        "john@email.com",
        "=ISBLANK(B2)"
    ],
    [
        "Jane Doe",
        "",
        "=ISBLANK(B3)"
    ],
    [
        "",
        "mike@email.com",
        "=ISBLANK(A4)"
    ],
    [
        "Sarah Wilson",
        "sarah@email.com",
        "=ISBLANK(B5)"
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
        "Name",
        "Email",
        "Complete?"
    ],
    [
        "John Smith",
        "john@email.com",
        "=ISBLANK(B2)"
    ],
    [
        "Jane Doe",
        "",
        "=ISBLANK(B3)"
    ],
    [
        "",
        "mike@email.com",
        "=ISBLANK(A4)"
    ],
    [
        "Sarah Wilson",
        "sarah@email.com",
        "=ISBLANK(B5)"
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
        "Name",
        "Email",
        "Complete?"
    ],
    [
        "John Smith",
        "john@email.com",
        "=ISBLANK(B2)"
    ],
    [
        "Jane Doe",
        "",
        "=ISBLANK(B3)"
    ],
    [
        "",
        "mike@email.com",
        "=ISBLANK(A4)"
    ],
    [
        "Sarah Wilson",
        "sarah@email.com",
        "=ISBLANK(B5)"
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
        "Name",
        "Email",
        "Complete?"
    ],
    [
        "John Smith",
        "john@email.com",
        "=ISBLANK(B2)"
    ],
    [
        "Jane Doe",
        "",
        "=ISBLANK(B3)"
    ],
    [
        "",
        "mike@email.com",
        "=ISBLANK(A4)"
    ],
    [
        "Sarah Wilson",
        "sarah@email.com",
        "=ISBLANK(B5)"
    ]
]
            }]
        });
    }
}
```

