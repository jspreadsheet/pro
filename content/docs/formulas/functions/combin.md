title: COMBIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COMBIN function in Jspreadsheet

# COMBIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COMBIN` function in Jspreadsheet Formulas Pro is a powerful tool that calculates the total number of possible combinations for a specified number of items. For example, if you have 5 different books and want to know how many ways you can choose 3 out of 5, the `COMBIN` function would give you the answer. You simply input the total number of items, and the number of items you want to combine, and the function does the rest. It's an easy and efficient way to solve combination problems.

## Documentation

Returns the number of combinations for a given number of items.

### Category

Math and trigonometry

### Syntax

COMBIN(number, number_chosen)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The total number of items you have to choose from. |
| `number_chosen` | The number of items you want to choose. |


### Behavior

The `COMBIN` function in spreadsheet is used to calculate the number of combinations for a given number of items. It takes two arguments: the total number of items and the number of items in each combination. Here's how it handles different inputs:
- **Empty cells**: If either of the arguments are empty cells, the `COMBIN` function will return a `#VALUE!` error.
- **Text**: If either of the arguments is text, the `COMBIN` function will return a `#VALUE!` error.
- **Booleans**: If either of the arguments is a boolean value (TRUE or FALSE), the `COMBIN` function will coerce the boolean into an integer (TRUE to 1, FALSE to 0) before executing.
- **Errors**: If either of the arguments contains an error, the `COMBIN` function will return that error.
- **Non-integers**: If the number of items in each combination (second argument) is not an integer, it will be truncated to an integer.
- **Negative numbers**: If either of the arguments is negative, the `COMBIN` function will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error is returned when one or both of the arguments are non-numeric, or if the cells are empty. |
| `#NUM!` | This error is returned when one or both of the arguments are negative, or if the number of combinations (second argument) is greater than the total number of items (first argument). |

### Best practices

> 1. Ensure both the total number of items and the number of items in each combination are positive integers.
> 2. Be aware that if the number of combinations is larger than the total number of items, the `COMBIN` function will return a `#NUM!` error.
> 3. Keep in mind that if non-integer values are used, they will be truncated to integers.
> 4. Utilize error handling functions like `IFERROR` to manage potential errors in your `COMBIN` formula.

### Usage

A few examples using the COMBIN function.

```
COMBIN(5, 3) returns 10  
COMBIN(8, 2) returns 28  
COMBIN(10, 1) returns 10  
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
        "Total Items",
        "Items Chosen",
        "Combinations"
    ],
    [
        8,
        3,
        "=COMBIN(A2,B2)"
    ],
    [
        10,
        4,
        "=COMBIN(A3,B3)"
    ],
    [
        12,
        2,
        "=COMBIN(A4,B4)"
    ],
    [
        6,
        5,
        "=COMBIN(A5,B5)"
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
        "Total Items",
        "Items Chosen",
        "Combinations"
    ],
    [
        8,
        3,
        "=COMBIN(A2,B2)"
    ],
    [
        10,
        4,
        "=COMBIN(A3,B3)"
    ],
    [
        12,
        2,
        "=COMBIN(A4,B4)"
    ],
    [
        6,
        5,
        "=COMBIN(A5,B5)"
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
        "Total Items",
        "Items Chosen",
        "Combinations"
    ],
    [
        8,
        3,
        "=COMBIN(A2,B2)"
    ],
    [
        10,
        4,
        "=COMBIN(A3,B3)"
    ],
    [
        12,
        2,
        "=COMBIN(A4,B4)"
    ],
    [
        6,
        5,
        "=COMBIN(A5,B5)"
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
        "Total Items",
        "Items Chosen",
        "Combinations"
    ],
    [
        8,
        3,
        "=COMBIN(A2,B2)"
    ],
    [
        10,
        4,
        "=COMBIN(A3,B3)"
    ],
    [
        12,
        2,
        "=COMBIN(A4,B4)"
    ],
    [
        6,
        5,
        "=COMBIN(A5,B5)"
    ]
]
            }]
        });
    }
}
```

