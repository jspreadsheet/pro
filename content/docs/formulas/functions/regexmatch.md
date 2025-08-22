title: REGEXMATCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REGEXMATCH function in Jspreadsheet

# REGEXMATCH function

`PRO`{.jtag}

The `REGEXMATCH` function in Jspreadsheet Formulas Pro is a tool that checks if a specific text aligns with a given pattern, known as a regular expression. It can be used to verify the format of user input, such as email addresses, phone numbers or passwords. The function returns a 'true' result if the text matches the pattern, and 'false' if it doesn't. This can be very useful for maintaining data accuracy and consistency.

## Documentation

Determines whether a text matches a regular expression.

### Category

Text

### Syntax

REGEXMATCH(text, regex)

| Parameter | Description |
| ----------- | ------------- |
| `text` | Text that is tested with the regular expression. |
| `regex` | Regular expression used to test the text. |


### Behavior

The `REGEXMATCH` function in spreadsheets is used to check if a piece of text matches a specified regular expression (regex). Here is how it generally behaves:

- Text: The function applies the regex to the text and returns `TRUE` if there's a match and `FALSE` if there isn't.

- Empty Cells: If the cell is empty, the function generally returns `FALSE` as there is no text to match the regex against.

- Numbers: Numbers are treated as text in the context of this function. Therefore, the function will try to match the regex against the text representation of the number.

- Booleans: `TRUE` and `FALSE` are treated as text strings "TRUE" and "FALSE" respectively.

- Errors: If the regex is invalid or if there is an error in the input, the function will return an error.


### Common Errors

| Error Name | Description |
| --- | --- |
| #N/A | This error is displayed when the regex is invalid. |
| #VALUE! | This error is displayed when the input text is not a string. |
| #ERROR! | This error is displayed when there is a problem with the regex, such as a missing closing bracket. |

### Best practices

> - Always double-check your regular expressions for errors. A small mistake can cause your function to fail.
> - Remember that the `REGEXMATCH` function is case-sensitive. If you want to ignore case, use the `(?i)` flag at the start of your regular expression.
> - Keep your regular expressions as simple as possible for better performance. Complex regular expressions can slow down your spreadsheet.
> - Use `REGEXMATCH` in combination with other functions to get the most out of it. For example, you can use it with `IF` to create conditions based on text patterns.

### Usage

A few examples using the REGEXMATCH function.

```
REGEXMATCH("Price: $10.50","[0-9]+.[0-9]+$") returns true  
REGEXMATCH("Price: $10","[0-9]+.[0-9]+$") returns false  
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
        "Valid Format?"
    ],
    [
        "john.doe@example.com",
        "=REGEXMATCH(A2,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "invalid-email",
        "=REGEXMATCH(A3,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "sarah@company.org",
        "=REGEXMATCH(A4,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "not.an.email.address",
        "=REGEXMATCH(A5,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
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
        "Valid Format?"
    ],
    [
        "john.doe@example.com",
        "=REGEXMATCH(A2,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "invalid-email",
        "=REGEXMATCH(A3,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "sarah@company.org",
        "=REGEXMATCH(A4,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "not.an.email.address",
        "=REGEXMATCH(A5,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
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
        "Valid Format?"
    ],
    [
        "john.doe@example.com",
        "=REGEXMATCH(A2,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "invalid-email",
        "=REGEXMATCH(A3,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "sarah@company.org",
        "=REGEXMATCH(A4,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "not.an.email.address",
        "=REGEXMATCH(A5,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
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
        "Valid Format?"
    ],
    [
        "john.doe@example.com",
        "=REGEXMATCH(A2,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "invalid-email",
        "=REGEXMATCH(A3,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "sarah@company.org",
        "=REGEXMATCH(A4,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ],
    [
        "not.an.email.address",
        "=REGEXMATCH(A5,\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\")"
    ]
]
            }]
        });
    }
}
```

