title: TEXT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TEXT function in Jspreadsheet

# TEXT function

`PRO`{.jtag}

The `TEXT` function in Jspreadsheet Formulas Pro is a handy tool that lets you change a value into a text according to a specific number format you choose. This means you can alter the way numbers are displayed without changing the actual data. For example, you could use this function to display a number as a date, time, or currency. It's a beneficial feature for improving data readability and presentation.

## Documentation

Converts a value to text in a specified number format.

### Category

Text

### Syntax

TEXT(value, format_text)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value to convert to text. |
| `format_text` | The number format to apply to the converted text value. |


### Behavior

The `TEXT` function is used in spreadsheet programs like Excel for converting a numeric value into a text string in a specific number format. This function takes two arguments: a value, and a format text. Here's how it handles different types of values:

- **Numbers**: The `TEXT` function is primarily designed to handle numeric values. It converts them into text according to the specified format.
- **Text**: If you pass a text value as the first argument, the function might return an error since it expects a numeric value. However, if the text can be interpreted as a number (like "10" or "3.14"), the function will convert it.
- **Booleans**: If you pass a boolean value (`TRUE` or `FALSE`), the `TEXT` function will treat `TRUE` as 1 and `FALSE` as 0, then convert them into text.
- **Empty cells**: If you reference an empty cell, the `TEXT` function will treat it as zero.
- **Errors**: If you reference a cell with an error value, the `TEXT` function will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
|`#VALUE!`| This error usually occurs when the value argument is not a valid numeric value. For example, if the value is a text that cannot be interpreted as a number, you'll get this error. |
|`#NAME?`| This error occurs if the function name is misspelled. Always ensure that the function name is spelled correctly: `TEXT`. |
|Wrong Formatting Text| If the format text argument is not a valid number format, the function might return unexpected results or an error. |

### Best practices

> - Always ensure the value argument is a valid numeric value or a cell reference that contains a valid numeric value. Avoid plain text unless it can be interpreted as a number.
> - Be careful when formatting dates and times. Excel has specific formatting codes for these types. For example, "mm" is for minutes, while "MM" is for the month.
> - Use predefined number formats whenever possible to avoid confusion and errors. Custom number formats can be powerful, but they can also be complex and error-prone.
> - Remember that the `TEXT` function converts numbers to text, which might affect subsequent calculations. Use this function wisely and only when necessary.

### Usage

A few examples using the TEXT function.

```
TEXT(1234.5678, "$#,##0.00") returns "$1,234.57"  
TEXT(0.75, "0%") returns "75%"  
TEXT("Hello", "00000") returns "Hello"  
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
        "Sales Amount",
        "Formatted Display"
    ],
    [
        1234.5678,
        "=TEXT(A2,\"$#,##0.00\")"
    ],
    [
        0.75,
        "=TEXT(A3,\"0%\")"
    ],
    [
        42,
        "=TEXT(A4,\"000\")"
    ],
    [
        1500000,
        "=TEXT(A5,\"#,##0\")"
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
        "Sales Amount",
        "Formatted Display"
    ],
    [
        1234.5678,
        "=TEXT(A2,\"$#,##0.00\")"
    ],
    [
        0.75,
        "=TEXT(A3,\"0%\")"
    ],
    [
        42,
        "=TEXT(A4,\"000\")"
    ],
    [
        1500000,
        "=TEXT(A5,\"#,##0\")"
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
        "Sales Amount",
        "Formatted Display"
    ],
    [
        1234.5678,
        "=TEXT(A2,\"$#,##0.00\")"
    ],
    [
        0.75,
        "=TEXT(A3,\"0%\")"
    ],
    [
        42,
        "=TEXT(A4,\"000\")"
    ],
    [
        1500000,
        "=TEXT(A5,\"#,##0\")"
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
        "Sales Amount",
        "Formatted Display"
    ],
    [
        1234.5678,
        "=TEXT(A2,\"$#,##0.00\")"
    ],
    [
        0.75,
        "=TEXT(A3,\"0%\")"
    ],
    [
        42,
        "=TEXT(A4,\"000\")"
    ],
    [
        1500000,
        "=TEXT(A5,\"#,##0\")"
    ]
]
            }]
        });
    }
}
```

