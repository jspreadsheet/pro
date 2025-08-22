title: DECIMAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DECIMAL function in Jspreadsheet

# DECIMAL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DECIMAL` function in Jspreadsheet Formulas Pro is a powerful tool that allows you to convert a text representation of a number from a particular base into a decimal number. For example, if you have a binary number (base 2) written as text, you can use the `DECIMAL` function to convert it into a decimal number (base 10). This function is particularly helpful when dealing with numbers in different numeral systems, allowing for easy conversion and calculation.

## Documentation

Converts a text representation of a number in a given base into a decimal number.

### Category

Math and trigonometry

### Syntax

DECIMAL(text, radix)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string containing the number you want to convert. |
| `radix` | Optional. The base of the number you want to convert. If omitted, assumes base 10. |


### Behavior

The `DECIMAL` function in spreadsheets is used to convert a text representation of a number in a given base into a decimal number. The function takes two arguments: the text to convert, and the base of the text number. 

- Empty cells: If either of the function's arguments refers to an empty cell, the function will return a `#VALUE!` error.
- Text: The first argument is expected to be a text, while the second argument should be a number representing the base. If a non-textual value is used in the first argument, the function would return a `#VALUE!` error. 
- Booleans: If boolean values are used as arguments, they will be implicitly converted into numbers - TRUE as 1, FALSE as 0.
- Errors: If the second argument (base) is less than 2 or greater than 36, the function will return a `#NUM!` error. If any of the arguments are error values, the function propagates the error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If either of the function's arguments refers to an empty cell or a non-textual value is used as the first argument, the `DECIMAL` function will return a `#VALUE!` error. |
| #NUM! | If the base is less than 2 or greater than 36, the function will return a `#NUM!` error. This error is also returned if the text to be converted contains characters not allowed in the base. |

### Best practices

> - Ensure that the first argument to the function is a text. You may need to explicitly convert numbers to text using the `TEXT` function.
> - Be cautious while specifying the base, it should be a number between 2 and 36. 
> - Make sure the text to be converted does not contain characters not allowed in the base.
> - Always perform data validation to avoid reference to empty cells.

### Usage

A few examples using the DECIMAL function.

```
DECIMAL("101010",2) returns 42  
DECIMAL("FF",16) returns 255  
DECIMAL("1000",8) returns 512  
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
        "Binary",
        "Base",
        "Decimal"
    ],
    [
        "101010",
        2,
        "=DECIMAL(A2,B2)"
    ],
    [
        "FF",
        16,
        "=DECIMAL(A3,B3)"
    ],
    [
        "1000",
        8,
        "=DECIMAL(A4,B4)"
    ],
    [
        "777",
        8,
        "=DECIMAL(A5,B5)"
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
        "Binary",
        "Base",
        "Decimal"
    ],
    [
        "101010",
        2,
        "=DECIMAL(A2,B2)"
    ],
    [
        "FF",
        16,
        "=DECIMAL(A3,B3)"
    ],
    [
        "1000",
        8,
        "=DECIMAL(A4,B4)"
    ],
    [
        "777",
        8,
        "=DECIMAL(A5,B5)"
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
        "Binary",
        "Base",
        "Decimal"
    ],
    [
        "101010",
        2,
        "=DECIMAL(A2,B2)"
    ],
    [
        "FF",
        16,
        "=DECIMAL(A3,B3)"
    ],
    [
        "1000",
        8,
        "=DECIMAL(A4,B4)"
    ],
    [
        "777",
        8,
        "=DECIMAL(A5,B5)"
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
        "Binary",
        "Base",
        "Decimal"
    ],
    [
        "101010",
        2,
        "=DECIMAL(A2,B2)"
    ],
    [
        "FF",
        16,
        "=DECIMAL(A3,B3)"
    ],
    [
        "1000",
        8,
        "=DECIMAL(A4,B4)"
    ],
    [
        "777",
        8,
        "=DECIMAL(A5,B5)"
    ]
]
            }]
        });
    }
}
```

