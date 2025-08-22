title: BAHTTEXT Function – Convert Numbers to Thai Currency Text in Jspreadsheet
keywords: Jspreadsheet, BAHTTEXT, JavaScript spreadsheet, spreadsheet formulas, Thai currency, Thai Baht, currency conversion, custom functions, Excel-like formulas, spreadsheet plugins, number to text, Thai text, financial formulas
description: How to use the BAHTTEXT function in Jspreadsheet to convert numbers into Thai currency text. Ideal for financial spreadsheets that require accurate and readable Thai Baht representations.

# BAHTTEXT function



The `BAHTTEXT` function in Jspreadsheet Formulas Pro is a valuable tool for those dealing with Thai currency. This function takes a numerical input and converts it into Thai text, automatically appending the word 'Baht' at the end to denote the currency. It's a simple and efficient way to ensure accuracy and clarity when working with financial data in Thailand. This function makes it easier for users to read and understand the currency values in the spreadsheet.

## Documentation

Converts a number to Thai text, automatically appending a suffix to denote currency in Baht.

### Category

Text

### Syntax

BAHTTEXT(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be converted to Thai text. Must be between -922,337,203,685,477.58 and 922,337,203,685,477.58. |


### Behavior

The 'BAHTTEXT' function in spreadsheets is used to convert a number to text, in the form of Thai currency (Baht). It takes one argument, which is the number you wish to convert to text. The function returns a string that represents the number in Thai words. Here's how it handles various situations:

- **Numbers**: The function works well with numbers and is able to convert them into Thai text representation of Baht. Note that decimals are rounded to the nearest integer.
- **Empty cells**: If the function refers to an empty cell, it will consider it as zero and return the Thai word for zero Baht.
- **Text**: If the function refers to a cell containing text, it will return an error because it expects a numerical input.
- **Booleans**: If the function refers to a cell containing a Boolean value (`TRUE` or `FALSE`), it will consider `TRUE` as 1 and `FALSE` as 0, and return their corresponding Thai words.
- **Errors**: If the function refers to a cell containing an error, it will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function encounters this error when the input argument is non-numeric. |
| #NAME? | This error occurs if the function name is misspelled or if the function is not supported in the user's version of the spreadsheet program. |
| #REF! | This error is encountered when the cell reference is not valid. |

### Best practices

> - Since the BAHTTEXT function only takes numerical values, always make sure the referenced cell contains a number.
> - Keep in mind that this function rounds decimals to the nearest integer. If you need precision, this function may not be the best choice.
> - Be aware that the BAHTTEXT function is not available in all versions of spreadsheet programs. Always ensure it is supported in your version before using it.
> - Use error handling functions to manage potential errors, especially when working with a range of cells.

### Usage

A few examples using the BAHTTEXT function.

```
BAHTTEXT(1234.56) returns "หนึ่งพันสองร้อยสามสิบสี่บาทห้าสิบหกสตางค์"  
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
        "Amount",
        "Thai Baht Text"
    ],
    [
        1234.56,
        "=BAHTTEXT(A2)"
    ],
    [
        5000,
        "=BAHTTEXT(A3)"
    ],
    [
        250.75,
        "=BAHTTEXT(A4)"
    ],
    [
        10000,
        "=BAHTTEXT(A5)"
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
        "Amount",
        "Thai Baht Text"
    ],
    [
        1234.56,
        "=BAHTTEXT(A2)"
    ],
    [
        5000,
        "=BAHTTEXT(A3)"
    ],
    [
        250.75,
        "=BAHTTEXT(A4)"
    ],
    [
        10000,
        "=BAHTTEXT(A5)"
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
        "Amount",
        "Thai Baht Text"
    ],
    [
        1234.56,
        "=BAHTTEXT(A2)"
    ],
    [
        5000,
        "=BAHTTEXT(A3)"
    ],
    [
        250.75,
        "=BAHTTEXT(A4)"
    ],
    [
        10000,
        "=BAHTTEXT(A5)"
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
        "Amount",
        "Thai Baht Text"
    ],
    [
        1234.56,
        "=BAHTTEXT(A2)"
    ],
    [
        5000,
        "=BAHTTEXT(A3)"
    ],
    [
        250.75,
        "=BAHTTEXT(A4)"
    ],
    [
        10000,
        "=BAHTTEXT(A5)"
    ]
]
            }]
        });
    }
}
```

