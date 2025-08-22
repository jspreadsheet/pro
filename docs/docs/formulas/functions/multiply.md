title: MULTIPLY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MULTIPLY function in Jspreadsheet

# MULTIPLY function

`PRO`{.jtag}

The `MULTIPLY` function in Jspreadsheet Formulas Pro is a simple tool that allows you to find the product of two numbers. It's like doing a multiplication operation. You simply input the two numbers you wish to multiply as arguments into the function, and it will provide you with the result. This function is a great tool for performing calculations quickly and accurately in your spreadsheet.

## Documentation

Returns the product of two numbers.

### Category

Math and trigonometry

### Syntax

MULTIPLY(factor1, factor2)

| Parameter | Description |
| ----------- | ------------- |
| `factor1` | First number to multiply. |
| `factor2` | Second number to multiply. |


### Behavior

The `MULTIPLY` function in a spreadsheet is used to multiply two or more numbers. Here's how it behaves in different scenarios:

- Empty cells: If one of the cells referenced in the function is empty, the `MULTIPLY` function treats it as zero.
- Text: If the function is used on cells that contain text, it will return an error, since multiplication is not applicable to text.
- Booleans: Boolean values are treated as numbers in spreadsheets. Therefore, `TRUE` is regarded as 1 and `FALSE` as 0 when used in the `MULTIPLY` function.
- Errors: If one of the cells referenced in the function contains an error, the `MULTIPLY` function will also return that error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error occurs if one or more of the arguments are text that cannot be converted into numbers. |
| #REF! | This error is displayed when a cell reference is not valid. This can occur if a cell that is being referenced has been deleted. |
| #DIV/0! | This error occurs when a number is divided by zero. While not directly related to the `MULTIPLY` function, it can occur if the result of the multiplication is used as the divisor in a division operation. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. This could happen if the function name is misspelled (e.g., `MULTIPLI` instead of `MULTIPLY`). |

### Best practices

> - Always ensure that the cells you're referencing in your `MULTIPLY` function contain numbers. If there's a chance they might contain text, use error checking functions to handle these cases.
> - Be aware that empty cells will be treated as zero. If you don't want this behavior, you should add checks to exclude empty cells from the multiplication.
> - If you're working with boolean values, remember that they will be treated as 1 (for `TRUE`) and 0 (for `FALSE`).
> - Check your function for correct spelling and syntax to avoid `#NAME?` errors.

### Usage

A few examples using the MULTIPLY function.

```
MULTIPLY(5, 10) returns 50  
MULTIPLY(10, -1) returns -10  
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
        "Product A",
        25,
        12,
        "=MULTIPLY(B1,C1)"
    ],
    [
        "Product B",
        8,
        15,
        "=MULTIPLY(B2,C2)"
    ],
    [
        "Product C",
        30,
        7,
        "=MULTIPLY(B3,C3)"
    ],
    [
        "Product D",
        18,
        9,
        "=MULTIPLY(B4,C4)"
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
        "Product A",
        25,
        12,
        "=MULTIPLY(B1,C1)"
    ],
    [
        "Product B",
        8,
        15,
        "=MULTIPLY(B2,C2)"
    ],
    [
        "Product C",
        30,
        7,
        "=MULTIPLY(B3,C3)"
    ],
    [
        "Product D",
        18,
        9,
        "=MULTIPLY(B4,C4)"
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
        "Product A",
        25,
        12,
        "=MULTIPLY(B1,C1)"
    ],
    [
        "Product B",
        8,
        15,
        "=MULTIPLY(B2,C2)"
    ],
    [
        "Product C",
        30,
        7,
        "=MULTIPLY(B3,C3)"
    ],
    [
        "Product D",
        18,
        9,
        "=MULTIPLY(B4,C4)"
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
        "Product A",
        25,
        12,
        "=MULTIPLY(B1,C1)"
    ],
    [
        "Product B",
        8,
        15,
        "=MULTIPLY(B2,C2)"
    ],
    [
        "Product C",
        30,
        7,
        "=MULTIPLY(B3,C3)"
    ],
    [
        "Product D",
        18,
        9,
        "=MULTIPLY(B4,C4)"
    ]
]
            }]
        });
    }
}
```

