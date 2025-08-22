title: VALUETOTEXT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VALUETOTEXT function in Jspreadsheet

# VALUETOTEXT function

`PRO`{.jtag}

The `VALUETOTEXT` function in Jspreadsheet Formulas Pro is a tool that transforms any given value into its written form, based on the number format of the language you're currently using. This means that it converts numerical values into words, making them easier to understand and interpret. Additionally, this function allows you to specify the desired format for this transformation, giving you more control over how the data is presented. It's a useful feature for making data more readable and user-friendly.

## Documentation

Converts a value to its textual representation in the number format of the current language and optionally with a specified format.

### Category

Text

### Syntax

VALUETOTEXT(value, [format])

| Parameter | Description |
| ----------- | ------------- |
| `value` | The numeric value that you want to convert to text. |
| `[format]` | Optional. A text string that specifies the number format to use for the conversion. The format must be enclosed in double quotation marks. If omitted, the function uses the default number format for the current language. |


### Behavior

The `VALUETOTEXT` function in spreadsheets converts a value into a text string. It can handle different types of values such as:
- **Empty cells**: For empty cells, `VALUETOTEXT` will return an empty string.
- **Text**: If the input is already a string, `VALUETOTEXT` will return the same string.
- **Booleans**: True and False values are converted into "TRUE" and "FALSE" strings respectively.
- **Errors**: If the cell contains an error, `VALUETOTEXT` will return the error in a string format.
- **Numbers**: Any numerical value is converted into a string. For example, the number 123 is converted into the string "123".
- **Dates and Times**: Dates and times are converted into text according to the default date and time format of the spreadsheet application.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function could not interpret the input value. This typically happens if the input cell contains a formula that results in an error. |
| #NAME? | The function name `VALUETOTEXT` is not recognized. This error usually indicates a typo in the function name. |

### Best practices

> - Always ensure that the cell contents you want to convert are compatible with the `VALUETOTEXT` function. It is best suited for numerical, boolean, and date/time values.
> - Be wary of using `VALUETOTEXT` with cells containing formulas. If the formula results in an error, the function will return the error as a string.
> - When using `VALUETOTEXT` with dates and times, remember that the resulting text string will follow the default date and time format of your spreadsheet application. If you require a specific format, consider using a date and time function to format the cell before applying `VALUETOTEXT`.
> - Use `VALUETOTEXT` to convert numerical values into text when you want to perform string manipulation tasks on the numerical values.

### Usage

A few examples using the VALUETOTEXT function.

```
VALUETOTEXT(1234.5678) returns "1,234.57" (assuming the current language uses comma as the decimal separator)  
VALUETOTEXT(0.75, "0%") returns "75%"  
VALUETOTEXT(123456.789, "#,##0.00 $") returns "123,456.79 $"  
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
        "Value",
        "Text Representation",
        "Formatted Text"
    ],
    [
        1234.5678,
        "=VALUETOTEXT(A2)",
        "=VALUETOTEXT(A2,\"#,##0.00\")"
    ],
    [
        0.75,
        "=VALUETOTEXT(A3)",
        "=VALUETOTEXT(A3,\"0%\")"
    ],
    [
        123456.789,
        "=VALUETOTEXT(A4)",
        "=VALUETOTEXT(A4,\"#,##0.00 $\")"
    ],
    [
        42.333,
        "=VALUETOTEXT(A5)",
        "=VALUETOTEXT(A5,\"0.0\")"
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
        "Value",
        "Text Representation",
        "Formatted Text"
    ],
    [
        1234.5678,
        "=VALUETOTEXT(A2)",
        "=VALUETOTEXT(A2,\"#,##0.00\")"
    ],
    [
        0.75,
        "=VALUETOTEXT(A3)",
        "=VALUETOTEXT(A3,\"0%\")"
    ],
    [
        123456.789,
        "=VALUETOTEXT(A4)",
        "=VALUETOTEXT(A4,\"#,##0.00 $\")"
    ],
    [
        42.333,
        "=VALUETOTEXT(A5)",
        "=VALUETOTEXT(A5,\"0.0\")"
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
        "Value",
        "Text Representation",
        "Formatted Text"
    ],
    [
        1234.5678,
        "=VALUETOTEXT(A2)",
        "=VALUETOTEXT(A2,\"#,##0.00\")"
    ],
    [
        0.75,
        "=VALUETOTEXT(A3)",
        "=VALUETOTEXT(A3,\"0%\")"
    ],
    [
        123456.789,
        "=VALUETOTEXT(A4)",
        "=VALUETOTEXT(A4,\"#,##0.00 $\")"
    ],
    [
        42.333,
        "=VALUETOTEXT(A5)",
        "=VALUETOTEXT(A5,\"0.0\")"
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
        "Value",
        "Text Representation",
        "Formatted Text"
    ],
    [
        1234.5678,
        "=VALUETOTEXT(A2)",
        "=VALUETOTEXT(A2,\"#,##0.00\")"
    ],
    [
        0.75,
        "=VALUETOTEXT(A3)",
        "=VALUETOTEXT(A3,\"0%\")"
    ],
    [
        123456.789,
        "=VALUETOTEXT(A4)",
        "=VALUETOTEXT(A4,\"#,##0.00 $\")"
    ],
    [
        42.333,
        "=VALUETOTEXT(A5)",
        "=VALUETOTEXT(A5,\"0.0\")"
    ]
]
            }]
        });
    }
}
```

