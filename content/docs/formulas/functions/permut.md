title: PERMUT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERMUT function in Jspreadsheet

# PERMUT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERMUT` function in Jspreadsheet Formulas Pro is a tool that calculates the number of different ways you can arrange a specific number of items within a larger set. For instance, if you have 5 books and want to know how many ways you can arrange 3 of them on a shelf, the `PERMUT` function can provide the answer. This function is especially useful in statistical analysis and probability calculations where understanding possible outcomes is crucial.

## Documentation

Returns the number of permutations for a given number of objects that can be selected from a set.

### Category

Statistical

### Syntax

PERMUT(number, number_chosen)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The total number of objects from which to choose. |
| `number_chosen` | The number of objects to choose. If omitted, number_chosen is assumed to be equal to number. |


### Behavior

The 'PERMUT' function in a spreadsheet calculates the number of permutations for a given set of objects. This function expects two arguments: the total number of objects and the number of objects in each permutation.

- If a cell is empty, the function treats it as zero. 
- Text input is not appropriate, as the function only works with numerical values. Therefore, text input will result in a #VALUE! error.
- Booleans are also not valid inputs. If a cell contains a boolean value, it will be converted into a number where TRUE is 1 and FALSE is 0.
- If either of the function's arguments is less than zero, the function will return a #NUM! error.
- If the number of objects in each permutation (second argument) is greater than the total number of objects (first argument), the function will also return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if either of the arguments is non-numeric. |
| #NUM! | This error occurs if either of the arguments is less than zero or if the number of objects in each permutation is greater than the total number of objects. |

### Best practices

> - Always ensure that the arguments provided to the function are numerical. Text or non-numeric values will lead to errors.
> - Be cautious about the order of arguments. The first argument is the total number of objects, and the second is the number of objects in each permutation. Reversing these could lead to incorrect results or errors.
> - Be aware that the 'PERMUT' function doesn't consider repetitions. If repetition is allowed in permutations, 'PERMUT' may not provide the expected result.
> - Use error-checking functions like ISNUMBER or IFERROR to handle potential errors and make your formulas more robust.

### Usage

A few examples using the PERMUT function.

```
PERMUT(5,3) returns 60, which is the number of ways to select 3 objects from a set of 5 objects  
PERMUT(6) returns 720, which is the number of ways to arrange 6 objects in different order  
PERMUT(A1,B1) returns the number of permutations of B1 objects that can be chosen from a set of A1 objects  
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
        "Items to Select",
        "Permutations"
    ],
    [
        8,
        3,
        "=PERMUT(A2,B2)"
    ],
    [
        10,
        4,
        "=PERMUT(A3,B3)"
    ],
    [
        6,
        6,
        "=PERMUT(A4,B4)"
    ],
    [
        12,
        2,
        "=PERMUT(A5,B5)"
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
        "Items to Select",
        "Permutations"
    ],
    [
        8,
        3,
        "=PERMUT(A2,B2)"
    ],
    [
        10,
        4,
        "=PERMUT(A3,B3)"
    ],
    [
        6,
        6,
        "=PERMUT(A4,B4)"
    ],
    [
        12,
        2,
        "=PERMUT(A5,B5)"
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
        "Items to Select",
        "Permutations"
    ],
    [
        8,
        3,
        "=PERMUT(A2,B2)"
    ],
    [
        10,
        4,
        "=PERMUT(A3,B3)"
    ],
    [
        6,
        6,
        "=PERMUT(A4,B4)"
    ],
    [
        12,
        2,
        "=PERMUT(A5,B5)"
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
        "Items to Select",
        "Permutations"
    ],
    [
        8,
        3,
        "=PERMUT(A2,B2)"
    ],
    [
        10,
        4,
        "=PERMUT(A3,B3)"
    ],
    [
        6,
        6,
        "=PERMUT(A4,B4)"
    ],
    [
        12,
        2,
        "=PERMUT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

