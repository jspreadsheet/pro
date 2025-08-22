title: LEN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LEN function in Jspreadsheet

# LEN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LEN` function in Jspreadsheet Formulas Pro is a useful tool that allows you to determine the length of a specific text string. This means it counts the total number of characters within your chosen text. For example, if you use `LEN` on the text string "Hello World", it will return the number 11, which includes both the letters and the space between the words. This can be particularly helpful when you need to manage and analyze large amounts of text data.

## Documentation

Returns the number of characters in a text string.

### Category

Text

### Syntax

LEN(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string whose length you want to find. |


### Behavior

The `LEN` function in spreadsheets is used to calculate the length of a string, i.e., the number of characters present in a cell. Here's how it handles different types of inputs:

- **Empty cells**: If the `LEN` function is applied to an empty cell, it returns 0 as there are no characters in the cell.
- **Text**: When used on a cell containing text, `LEN` counts all characters including spaces, numbers, special characters, and punctuation.
- **Booleans**: If a cell contains a boolean value (TRUE or FALSE), `LEN` treats it as text and returns the number of characters in the text representation of the boolean.
- **Errors**: If the `LEN` function is used on a cell that contains an error, it will also return an error.
- **Numbers**: When used on a cell containing a number, `LEN` counts the number of digits in the number. Decimal points and negative signs are also included in the count.
- **Dates and Times**: When used on a cell containing a date or time, `LEN` treats it as a numeric value and returns the number of characters in its numeric representation.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the `LEN` function is used on a cell that contains an unsupported value type like an array or a range. |
| #REF! | This error is returned when the cell reference provided is not valid. |

### Best practices
> - Always ensure that the cell you are applying the `LEN` function to contains text, numbers, booleans, or dates. Using this function on unsupported value types will result in an error.
> - Remember that `LEN` counts all characters including spaces, numbers, special characters, punctuation, decimal points, and negative signs. Consider this when interpreting the results.
> - If you want to count only the number of specific characters in a cell, you may need to use additional functions in combination with `LEN`.
> - Be cautious when using `LEN` on cells that contain dates or times, as it treats them as numeric values and returns the length of their numeric representation, which may not be the expected result.

### Usage

A few examples using the LEN function.

```
LEN('apple') returns 5  
LEN('banana') returns 6  
LEN('cherry') returns 6  
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
        "Product Name",
        "Character Count"
    ],
    [
        "iPhone 15 Pro",
        "=LEN(A2)"
    ],
    [
        "MacBook Air",
        "=LEN(A3)"
    ],
    [
        "AirPods Pro",
        "=LEN(A4)"
    ],
    [
        "Apple Watch",
        "=LEN(A5)"
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
        "Product Name",
        "Character Count"
    ],
    [
        "iPhone 15 Pro",
        "=LEN(A2)"
    ],
    [
        "MacBook Air",
        "=LEN(A3)"
    ],
    [
        "AirPods Pro",
        "=LEN(A4)"
    ],
    [
        "Apple Watch",
        "=LEN(A5)"
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
        "Product Name",
        "Character Count"
    ],
    [
        "iPhone 15 Pro",
        "=LEN(A2)"
    ],
    [
        "MacBook Air",
        "=LEN(A3)"
    ],
    [
        "AirPods Pro",
        "=LEN(A4)"
    ],
    [
        "Apple Watch",
        "=LEN(A5)"
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
        "Product Name",
        "Character Count"
    ],
    [
        "iPhone 15 Pro",
        "=LEN(A2)"
    ],
    [
        "MacBook Air",
        "=LEN(A3)"
    ],
    [
        "AirPods Pro",
        "=LEN(A4)"
    ],
    [
        "Apple Watch",
        "=LEN(A5)"
    ]
]
            }]
        });
    }
}
```

