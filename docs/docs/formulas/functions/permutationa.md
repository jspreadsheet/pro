title: PERMUTATIONA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERMUTATIONA function in Jspreadsheet

# PERMUTATIONA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERMUTATIONA` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the total number of possible arrangements, or permutations, from a given set of items, and allows for repetition. This means an item can be selected more than once. For example, if you have a list of different colors and want to know how many combinations you can make with a certain number of choices, this function can give you that exact number. It's a handy function for statistical analysis and probability calculations.

## Documentation

Returns the number of permutations for a given number of objects that can be selected from a set with repetition.

### Category

Statistical

### Syntax

PERMUTATIONA(number, number_chosen)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The total number of objects from which to choose. |
| `number_chosen` | The number of objects to choose. If omitted, number_chosen is assumed to be equal to number. |


### Behavior

The `PERMUTATIONA` function in spreadsheets calculates the number of permutations for a given set of items with repetitions. This function takes two arguments:

1. `number`: The total number of items.
2. `number_chosen`: The number of items in each permutation.

Here is how it handles different types of inputs:

- Empty Cells: If either of the arguments is an empty cell, the function will return a #VALUE! error.
- Text: If either of the arguments is text instead of a number, the function will return a #VALUE! error.
- Booleans: If either of the arguments is a boolean value (TRUE or FALSE), the function will treat TRUE as 1 and FALSE as 0.
- Errors: If either of the arguments is an error, the function will return that error.
- Negative Numbers: If either of the arguments is a negative number, the function will return a #NUM! error.
- Non-integer Numbers: If either of the arguments is a non-integer number, the function will round it down to the nearest integer.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when either of the input arguments is non-numeric, an empty cell, or text. |
| #NUM! | This error is returned when either of the input arguments is negative or if `number_chosen` is greater than `number`. |
| #N/A | This error is returned when the function is missing one or both of its arguments. |

### Best practices

> - Always ensure that both input arguments are positive numbers. If you're unsure, you can use functions like `ISNUMBER` and `IF` to check the inputs and handle errors. 
> - Be aware that the function rounds down non-integer numbers to the nearest integer. If you want to calculate permutations with fractional items, you'll need to adjust your inputs accordingly.
> - Remember that `PERMUTATIONA` allows for repetition of items in the set. If you want to calculate permutations without repetition, use the `PERMUT` function instead. 
> - Be mindful of the computational limits of your spreadsheet software. Calculating permutations for large numbers can consume significant processing power and may cause your spreadsheet to become unresponsive.

### Usage

A few examples using the PERMUTATIONA function.

```
PERMUTATIONA(5,3) returns 125, which is the number of ways to select 3 objects from a set of 5 objects when repetition is allowed  
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
        "Set Size",
        "Items Chosen",
        "Permutations with Repetition"
    ],
    [
        4,
        2,
        "=PERMUTATIONA(A2,B2)"
    ],
    [
        6,
        3,
        "=PERMUTATIONA(A3,B3)"
    ],
    [
        5,
        4,
        "=PERMUTATIONA(A4,B4)"
    ],
    [
        8,
        2,
        "=PERMUTATIONA(A5,B5)"
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
        "Set Size",
        "Items Chosen",
        "Permutations with Repetition"
    ],
    [
        4,
        2,
        "=PERMUTATIONA(A2,B2)"
    ],
    [
        6,
        3,
        "=PERMUTATIONA(A3,B3)"
    ],
    [
        5,
        4,
        "=PERMUTATIONA(A4,B4)"
    ],
    [
        8,
        2,
        "=PERMUTATIONA(A5,B5)"
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
        "Set Size",
        "Items Chosen",
        "Permutations with Repetition"
    ],
    [
        4,
        2,
        "=PERMUTATIONA(A2,B2)"
    ],
    [
        6,
        3,
        "=PERMUTATIONA(A3,B3)"
    ],
    [
        5,
        4,
        "=PERMUTATIONA(A4,B4)"
    ],
    [
        8,
        2,
        "=PERMUTATIONA(A5,B5)"
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
        "Set Size",
        "Items Chosen",
        "Permutations with Repetition"
    ],
    [
        4,
        2,
        "=PERMUTATIONA(A2,B2)"
    ],
    [
        6,
        3,
        "=PERMUTATIONA(A3,B3)"
    ],
    [
        5,
        4,
        "=PERMUTATIONA(A4,B4)"
    ],
    [
        8,
        2,
        "=PERMUTATIONA(A5,B5)"
    ]
]
            }]
        });
    }
}
```

