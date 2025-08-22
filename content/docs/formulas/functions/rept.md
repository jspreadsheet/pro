title: REPT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REPT function in Jspreadsheet

# REPT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `REPT` function in Jspreadsheet Formulas Pro is a handy tool that allows you to duplicate a certain text string as many times as you need. You simply input the text you want to repeat and specify the number of repetitions. This function is useful when you need to fill or format cells with repeated patterns or series of characters. It's a straightforward and efficient way to manage and manipulate text data in your Jspreadsheet.

## Documentation

Repeats a text string a specified number of times.

### Category

Text

### Syntax

REPT(text, number_times)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to repeat. |
| `number_times` | The number of times to repeat the text. |


### Behavior

The `REPT` function in spreadsheets is used to repeat a text string a specified number of times. It takes two arguments: the text to be repeated, and the number of times to repeat it. Here's how it handles different types of input:

- **Empty Cells**: If the text argument is an empty cell, `REPT` will return an empty cell. If the number argument is an empty cell, `REPT` will treat it as zero and return an empty cell.
- **Text**: `REPT` repeats the text string exactly as it is, including any spaces or special characters.
- **Booleans**: If the text argument is a boolean, `REPT` will treat it as text ("TRUE" or "FALSE"). If the number argument is a boolean, `REPT` will treat TRUE as 1 and FALSE as 0.
- **Errors**: If either argument is an error, `REPT` will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the number to repeat is not an integer, is negative, or is a non-numeric text string. |
| #NAME? | This error is returned when the function name is misspelled or the cell references are incorrect. |

### Best practices

> - Always ensure the number of repetitions is a non-negative integer. If you input a decimal, it will be rounded down.
> - Be aware that `REPT` can quickly generate very long text strings. Extremely large numbers of repetitions may cause performance issues.
> - `REPT` can be used in combination with other functions for useful effects, such as creating indentations or bullet lists.
> - If you're using `REPT` to repeat a formula, remember that the formula will be recalculated for each repetition.

### Usage

A few examples using the REPT function.

```
REPT("Hello ", 3) returns "Hello Hello Hello "  
REPT("Excel ", 5) returns "Excel Excel Excel Excel Excel "  
REPT("123", 2) returns "123123"  
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
        "Pattern",
        "Count",
        "Result"
    ],
    [
        "*",
        5,
        "=REPT(A2,B2)"
    ],
    [
        "-",
        3,
        "=REPT(A3,B3)"
    ],
    [
        "ABC",
        2,
        "=REPT(A4,B4)"
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
        "Pattern",
        "Count",
        "Result"
    ],
    [
        "*",
        5,
        "=REPT(A2,B2)"
    ],
    [
        "-",
        3,
        "=REPT(A3,B3)"
    ],
    [
        "ABC",
        2,
        "=REPT(A4,B4)"
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
        "Pattern",
        "Count",
        "Result"
    ],
    [
        "*",
        5,
        "=REPT(A2,B2)"
    ],
    [
        "-",
        3,
        "=REPT(A3,B3)"
    ],
    [
        "ABC",
        2,
        "=REPT(A4,B4)"
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
        "Pattern",
        "Count",
        "Result"
    ],
    [
        "*",
        5,
        "=REPT(A2,B2)"
    ],
    [
        "-",
        3,
        "=REPT(A3,B3)"
    ],
    [
        "ABC",
        2,
        "=REPT(A4,B4)"
    ]
]
            }]
        });
    }
}
```

