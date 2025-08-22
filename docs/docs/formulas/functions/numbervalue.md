title: NUMBERVALUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NUMBERVALUE function in Jspreadsheet

# NUMBERVALUE function

`PRO`{.jtag}

The `NUMBERVALUE` function in Jspreadsheet Formulas Pro is a useful tool that allows you to change text into a numerical value, no matter the regional settings. This means it can understand different formats, like the comma being used as a decimal point in some countries. It's particularly beneficial when dealing with data from various international sources, as it ensures consistency in numerical data. Overall, it's a simple way to efficiently convert and standardize text into numbers.

## Documentation

Converts text to a number in a locale-independent way.

### Category

Text

### Syntax

NUMBERVALUE(text, [decimal_separator], [group_separator])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text to be converted to a number. |
| `decimal_separator` | An optional argument that specifies the character used as the decimal separator. If omitted, Excel uses the system's regional settings. |
| `group_separator` | An optional argument that specifies the character used as the group separator, such as a comma or period. If omitted, Excel uses the system's regional settings. |


### Behavior

The `NUMBERVALUE` function in spreadsheets is used to convert text to numbers. Here's how it handles different types of inputs:

- **Text**: `NUMBERVALUE` will convert text that represents numbers into actual numbers. For instance, `NUMBERVALUE("123.45")` would return `123.45`. If the text cannot be converted into a number, it will return an error.
- **Empty cells**: If the function refers to an empty cell, it will return an error.
- **Booleans**: If a cell containing a boolean value (`TRUE` or `FALSE`) is referenced, the function will return an error as these cannot be converted into numbers.
- **Errors**: If the function refers to a cell containing an error, it will propagate that error.
- **Non-numeric text**: If the function refers to a cell containing text that cannot be converted into numbers, it will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the text or the format provided cannot be converted into a number. For example, `NUMBERVALUE("ABC")` would return a `#VALUE!` error because "ABC" is non-numeric and cannot be converted into a number. |
| #N/A   | This error occurs when the function refers to a cell that doesn't exist. For example, `NUMBERVALUE(A10)` would return a `#N/A` error if cell A10 doesn't exist. |
| #REF!  | This error occurs when the function refers to a cell that is not valid. This can happen if a cell is deleted after the function has been set up to refer to it. |

### Best practices

> - Always ensure that the text you're trying to convert can be accurately represented as a number. If it can't, `NUMBERVALUE` will return an error.
> - You can use `NUMBERVALUE` to convert text numbers with decimal and group separators. For example, `NUMBERVALUE("1,234.56")` would return `1234.56`.
> - Be mindful of the decimal separator and group separator that `NUMBERVALUE` uses. By default, it uses a period (.) as the decimal separator and a comma (,) as the group separator. If your text uses different separators, you need to specify them in the function.
> - Use `NUMBERVALUE` to convert text numbers in scientific notation. For example, `NUMBERVALUE("1.23E+3")` would return `1230`.

### Usage

A few examples using the NUMBERVALUE function.

```
NUMBERVALUE('1234.56') returns 1234.56  
NUMBERVALUE('1,234.56', ',', '.') returns 1234.56  
NUMBERVALUE('$1,234.56', '.', ',') returns 1234.56  
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
        "1,234.56",
        "=NUMBERVALUE(A2)"
    ],
    [
        "\u20ac2.345,67",
        "=NUMBERVALUE(A3,\",\",\".\")"
    ],
    [
        "$1,500.00",
        "=NUMBERVALUE(A4)"
    ],
    [
        "3 456,78",
        "=NUMBERVALUE(A5,\",\",\" \")"
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
        "1,234.56",
        "=NUMBERVALUE(A2)"
    ],
    [
        "\u20ac2.345,67",
        "=NUMBERVALUE(A3,\",\",\".\")"
    ],
    [
        "$1,500.00",
        "=NUMBERVALUE(A4)"
    ],
    [
        "3 456,78",
        "=NUMBERVALUE(A5,\",\",\" \")"
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
        "1,234.56",
        "=NUMBERVALUE(A2)"
    ],
    [
        "\u20ac2.345,67",
        "=NUMBERVALUE(A3,\",\",\".\")"
    ],
    [
        "$1,500.00",
        "=NUMBERVALUE(A4)"
    ],
    [
        "3 456,78",
        "=NUMBERVALUE(A5,\",\",\" \")"
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
        "1,234.56",
        "=NUMBERVALUE(A2)"
    ],
    [
        "\u20ac2.345,67",
        "=NUMBERVALUE(A3,\",\",\".\")"
    ],
    [
        "$1,500.00",
        "=NUMBERVALUE(A4)"
    ],
    [
        "3 456,78",
        "=NUMBERVALUE(A5,\",\",\" \")"
    ]
]
            }]
        });
    }
}
```

