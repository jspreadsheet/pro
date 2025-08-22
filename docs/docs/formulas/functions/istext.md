title: ISTEXT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISTEXT function in Jspreadsheet

# ISTEXT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISTEXT` function in Jspreadsheet Formulas Pro is a simple tool that helps you determine if a certain value is text or not. When you use this function, it will assess the value you've inputted and return TRUE if it's text. Conversely, if the value is not text, such as a number or date, it will return FALSE. This can be helpful when you're sorting data and need to differentiate between text and other types of values.

## Documentation

Checks if a given value is text and returns TRUE if the value is text, and FALSE otherwise.

### Category

Information

### Syntax

ISTEXT(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior

The `ISTEXT` function in spreadsheet software is used to check if a cell contains text. This function returns `TRUE` if the cell contains text and `FALSE` if not. Here is how it handles different types of data:

- Empty Cells: If the cell is empty, `ISTEXT` returns `FALSE`.
- Text: If the cell contains any text, `ISTEXT` returns `TRUE`.
- Numbers: If the cell contains just a number, `ISTEXT` returns `FALSE`. However, if a number is written as text (for example, '123' instead of 123), `ISTEXT` returns `TRUE`.
- Booleans: The `ISTEXT` function returns `FALSE` for boolean values (`TRUE` or `FALSE`).
- Errors: If the cell contains an error, `ISTEXT` will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the formula has the wrong type of argument, a `#VALUE!` error is returned. This function only requires a single cell reference. |
| #REF! | If the cell reference is invalid, a `#REF!` error is returned. This typically happens when a referenced cell does not exist. |
| #NAME? | If the formula name is spelled incorrectly, a `#NAME?` error is returned. Ensure that the function is spelled as `ISTEXT`. |

### Best practices

> - Always ensure that the cell reference provided to the `ISTEXT` function is valid. An invalid or incorrect cell reference will result in an error.
> - Use the `ISTEXT` function to validate input data. It can be used to ensure that a cell contains text before performing operations that require text input.
> - Keep in mind that `ISTEXT` will return `TRUE` for numbers that are written as text. If you need to check if a cell contains a number, use the `ISNUMBER` function instead.
> - Remember that `ISTEXT` will return `FALSE` for boolean values and empty cells. If you need to include these in your condition, consider using a different function or adding additional logic to your formula.

### Usage

A few examples using the ISTEXT function.

```
ISTEXT("banana") returns TRUE because "banana" is a text value  
ISTEXT(123) returns FALSE because 123 is not a text value  
ISTEXT(A1) returns TRUE if cell A1 contains a text value, and FALSE otherwise.  
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
        "Product",
        "Price",
        "Is Text?"
    ],
    [
        "Apple",
        1.99,
        "=ISTEXT(A2)"
    ],
    [
        123,
        "Free",
        "=ISTEXT(B3)"
    ],
    [
        "Orange",
        2.5,
        "=ISTEXT(A4)"
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
        "Product",
        "Price",
        "Is Text?"
    ],
    [
        "Apple",
        1.99,
        "=ISTEXT(A2)"
    ],
    [
        123,
        "Free",
        "=ISTEXT(B3)"
    ],
    [
        "Orange",
        2.5,
        "=ISTEXT(A4)"
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
        "Product",
        "Price",
        "Is Text?"
    ],
    [
        "Apple",
        1.99,
        "=ISTEXT(A2)"
    ],
    [
        123,
        "Free",
        "=ISTEXT(B3)"
    ],
    [
        "Orange",
        2.5,
        "=ISTEXT(A4)"
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
        "Product",
        "Price",
        "Is Text?"
    ],
    [
        "Apple",
        1.99,
        "=ISTEXT(A2)"
    ],
    [
        123,
        "Free",
        "=ISTEXT(B3)"
    ],
    [
        "Orange",
        2.5,
        "=ISTEXT(A4)"
    ]
]
            }]
        });
    }
}
```

