title: VALUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VALUE function in Jspreadsheet

# VALUE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `VALUE` function in Jspreadsheet Formulas Pro is a handy tool that allows you to turn a text string, that looks like a number, into an actual number that can be used in calculations. For instance, if you have the number '100' stored as text in a cell, the `VALUE` function can convert it into the numeric value 100. This is particularly useful when you want to perform calculations or data analysis with numbers that were originally entered as text.

## Documentation

Converts a text string that represents a number to a number.

### Category

Text

### Syntax

VALUE(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the number you want to convert. The text can be in any of the constant number, date, or time formats recognized by Excel. |


### Behavior

The 'VALUE' function in spreadsheets is used to convert a text string that represents a number into a numeric value. Here's how it handles various types of inputs:

1. **Empty Cells**: If an empty cell is referenced, the function will return a #VALUE! error.
2. **Text**: The function tries to convert the text into a numeric value. If the text is a string that cannot be converted into a number, a #VALUE! error is returned.
3. **Booleans**: Booleans are not accepted by the function and will result in a #VALUE! error.
4. **Errors**: If the referenced cell contains an error, the 'VALUE' function will return the same error.
5. **Numbers**: If the input is already a number, the function simply returns the number.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the function cannot convert the input text string into a numeric value. It also occurs when the referenced cell is empty or contains a boolean. |
| #REF! | This error is displayed when the cell reference is not valid. |
| #NAME? | This error occurs when the 'VALUE' function is not correctly spelled or formatted. |

### Best practices

> - Always ensure that the text you're trying to convert into a number is numerically compatible. If it contains non-numeric characters (except for period, comma, E/e for scientific notation, and minus sign for negative numbers), the function will return a #VALUE! error.
> - Use the 'VALUE' function when you need to perform mathematical operations on a number that has been entered as text.
> - Avoid using 'VALUE' function on cells that contain boolean or error values.
> - Always check your cell references to prevent #REF! errors.

### Usage

A few examples using the VALUE function.

```
VALUE("123") returns 123  
VALUE("$456") returns 456  
VALUE("12:34") returns 0.523611111  
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
        "Text Values",
        "Converted Numbers"
    ],
    [
        "123",
        "=VALUE(A2)"
    ],
    [
        "$4,567.89",
        "=VALUE(A3)"
    ],
    [
        "98.6%",
        "=VALUE(A4)"
    ],
    [
        "1:30",
        "=VALUE(A5)"
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
        "Text Values",
        "Converted Numbers"
    ],
    [
        "123",
        "=VALUE(A2)"
    ],
    [
        "$4,567.89",
        "=VALUE(A3)"
    ],
    [
        "98.6%",
        "=VALUE(A4)"
    ],
    [
        "1:30",
        "=VALUE(A5)"
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
        "Text Values",
        "Converted Numbers"
    ],
    [
        "123",
        "=VALUE(A2)"
    ],
    [
        "$4,567.89",
        "=VALUE(A3)"
    ],
    [
        "98.6%",
        "=VALUE(A4)"
    ],
    [
        "1:30",
        "=VALUE(A5)"
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
        "Text Values",
        "Converted Numbers"
    ],
    [
        "123",
        "=VALUE(A2)"
    ],
    [
        "$4,567.89",
        "=VALUE(A3)"
    ],
    [
        "98.6%",
        "=VALUE(A4)"
    ],
    [
        "1:30",
        "=VALUE(A5)"
    ]
]
            }]
        });
    }
}
```

