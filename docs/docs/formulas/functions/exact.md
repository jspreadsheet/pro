title: EXACT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EXACT function in Jspreadsheet

# EXACT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `EXACT` function in Jspreadsheet Formulas Pro is used to compare two sets of text strings. It will return a TRUE value if both the text strings are identical, and a FALSE value if they are not. Remember, this function is case-sensitive, meaning it distinguishes between uppercase and lowercase letters. Therefore, 'Text' and 'text' would be considered different and would result in a FALSE outcome.

## Documentation

The EXACT function compares two text strings and returns TRUE if they are exactly the same, FALSE otherwise. The comparison is case-sensitive.

### Category

Text

### Syntax

EXACT(text1, text2)

| Parameter | Description |
| ----------- | ------------- |
| `text1` | The first text string to compare. |
| `text2` | The second text string to compare. |


### Behavior

The 'EXACT' function in spreadsheets compares two cells and returns TRUE if they are the exact same and FALSE if they are not. It is case-sensitive and doesn't ignore additional spaces. Here's how it handles different types of data:

- **Empty cells**: If both cells are empty, the function returns TRUE. If only one cell is empty, the function returns FALSE.
- **Text**: The function is case-sensitive, so it distinguishes between upper and lower case letters. It also considers additional spaces, so "text " is not the same as "text".
- **Booleans**: The function treats TRUE and FALSE as distinct values.
- **Errors**: If any of the cells contain an error, the function will return that error. 
- **Numbers**: The function treats numbers as text, so it distinguishes between different formats. For example, 'EXACT(1, "1")' will return TRUE, but 'EXACT(1, "1.0")' will return FALSE.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if either of the arguments is missing or if more than two arguments are provided. |
| #NAME? | This error occurs if the function name is spelled incorrectly. |
| #N/A | This error occurs if the cell referenced in the function is not available. |

### Best practices

> - Always ensure that the data types you are comparing are the same. For instance, comparing a number with a string will result in FALSE.
> - Remember that 'EXACT' is case-sensitive and does not ignore additional spaces. So, always check your data for these potential discrepancies.
> - Use 'EXACT' function when case sensitivity is important in data comparison. For case-insensitive comparison, use the '=' operator.
> - Use the 'TRIM' function in combination with 'EXACT' if you want to ignore leading, trailing, or multiple spaces when comparing text.

### Usage

A few examples using the EXACT function.

```
EXACT("apple", "apple") returns TRUE  
EXACT("apple", "Apple") returns FALSE  
EXACT(A2, B2) compares the values in cells A2 and B2 and returns TRUE if they are exactly the same, FALSE otherwise.  
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
        "Entered Code",
        "Match"
    ],
    [
        "ABC123",
        "ABC123",
        "=EXACT(A2,B2)"
    ],
    [
        "XYZ789",
        "xyz789",
        "=EXACT(A3,B3)"
    ],
    [
        "DEF456",
        "DEF456",
        "=EXACT(A4,B4)"
    ],
    [
        "GHI999",
        "GHI 999",
        "=EXACT(A5,B5)"
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
        "Entered Code",
        "Match"
    ],
    [
        "ABC123",
        "ABC123",
        "=EXACT(A2,B2)"
    ],
    [
        "XYZ789",
        "xyz789",
        "=EXACT(A3,B3)"
    ],
    [
        "DEF456",
        "DEF456",
        "=EXACT(A4,B4)"
    ],
    [
        "GHI999",
        "GHI 999",
        "=EXACT(A5,B5)"
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
        "Entered Code",
        "Match"
    ],
    [
        "ABC123",
        "ABC123",
        "=EXACT(A2,B2)"
    ],
    [
        "XYZ789",
        "xyz789",
        "=EXACT(A3,B3)"
    ],
    [
        "DEF456",
        "DEF456",
        "=EXACT(A4,B4)"
    ],
    [
        "GHI999",
        "GHI 999",
        "=EXACT(A5,B5)"
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
        "Entered Code",
        "Match"
    ],
    [
        "ABC123",
        "ABC123",
        "=EXACT(A2,B2)"
    ],
    [
        "XYZ789",
        "xyz789",
        "=EXACT(A3,B3)"
    ],
    [
        "DEF456",
        "DEF456",
        "=EXACT(A4,B4)"
    ],
    [
        "GHI999",
        "GHI 999",
        "=EXACT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

