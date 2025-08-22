title: CHAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHAR function in Jspreadsheet

# CHAR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CHAR` function in Jspreadsheet Formulas Pro is a handy tool that translates a numeric value into a corresponding character. Each character (letter, number, symbol, etc.) has a unique numeric code, and the `CHAR` function uses these codes to output the specific character. For example, if you use `CHAR(65)`, the function will return the letter 'A'. This can be particularly useful when you need to generate or manipulate text within your spreadsheet.

## Documentation

Returns the character specified by a number.

### Category

Text

### Syntax

CHAR(num)

| Parameter | Description |
| ----------- | ------------- |
| `num` | A number that represents a character in the character set used by your computer. This can be a number between 1 and 255, or a formula or reference to a cell containing such a number. |


### Behavior

The `CHAR` function in a spreadsheet returns a character specified by a number in the Unicode list. This function takes a single argument, which is a numeric code for the character you want to return. Below are the ways it handles different types of data:

- **Numbers**: The function accepts a numeric value between 1 and 255 and returns the corresponding character from the Unicode list. For instance, `CHAR(65)` will return 'A'.
  
- **Text**: You cannot pass a text string to the `CHAR` function. It will result in an error because the function only accepts numbers.

- **Empty Cells**: If an empty cell is referenced, the `CHAR` function will return an error since it needs a numeric input.

- **Booleans**: Boolean values are not accepted as valid input in the `CHAR` function. If a boolean value is used, it will return an error.

- **Errors**: If the cell referenced by the `CHAR` function contains an error, the function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the input argument is not within the acceptable range. The `CHAR` function only accepts numbers between 1 and 255. |
| #NAME? | This error appears when the function name is misspelled. |
| #REF! | This error is shown when the cell reference is invalid. |

### Best practices

> - Always ensure that the numeric input for the `CHAR` function is within the range of 1 to 255.
> - Be cautious while using the `CHAR` function with other functions. It may produce unexpected results if the other function does not return a number.
> - It's a good practice to use the `CHAR` function with the `CODE` function, as they are opposite of each other. The `CODE` function can return the Unicode value of the first character in a text string.
> - Avoid using cell references that might contain non-numeric values, as it will cause an error in the `CHAR` function.

### Usage

A few examples using the CHAR function.

```
CHAR(65) returns "A"  
CHAR(97) returns "a"  
CHAR(36) returns "$"  
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
        "ASCII Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=CHAR(A2)",
        "Uppercase A"
    ],
    [
        97,
        "=CHAR(A3)",
        "Lowercase a"
    ],
    [
        36,
        "=CHAR(A4)",
        "Dollar sign"
    ],
    [
        64,
        "=CHAR(A5)",
        "At symbol"
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
        "ASCII Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=CHAR(A2)",
        "Uppercase A"
    ],
    [
        97,
        "=CHAR(A3)",
        "Lowercase a"
    ],
    [
        36,
        "=CHAR(A4)",
        "Dollar sign"
    ],
    [
        64,
        "=CHAR(A5)",
        "At symbol"
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
        "ASCII Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=CHAR(A2)",
        "Uppercase A"
    ],
    [
        97,
        "=CHAR(A3)",
        "Lowercase a"
    ],
    [
        36,
        "=CHAR(A4)",
        "Dollar sign"
    ],
    [
        64,
        "=CHAR(A5)",
        "At symbol"
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
        "ASCII Code",
        "Character",
        "Description"
    ],
    [
        65,
        "=CHAR(A2)",
        "Uppercase A"
    ],
    [
        97,
        "=CHAR(A3)",
        "Lowercase a"
    ],
    [
        36,
        "=CHAR(A4)",
        "Dollar sign"
    ],
    [
        64,
        "=CHAR(A5)",
        "At symbol"
    ]
]
            }]
        });
    }
}
```

