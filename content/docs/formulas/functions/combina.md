title: COMBINA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COMBINA function in Jspreadsheet

# COMBINA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COMBINA` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the total number of possible combinations for a specific set of items, while allowing for repetitions. It takes two arguments: the total number of items and the number of items in each combination. This function is particularly useful in probability and statistics, where it can be used to determine the likelihood of particular outcomes given a certain set of possibilities.

## Documentation

Returns the number of combinations with repetitions for a given number of items.

### Category

Math and trigonometry

### Syntax

COMBINA(number, number_chosen)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The total number of items you have to choose from. |
| `number_chosen` | The number of items you want to choose. Must be a positive integer. |


### Behavior

The `COMBINA` function in spreadsheets calculates the number of combinations (with repetitions) for a given number of items. It takes two arguments: the total number of items and the number of items in each combination. It returns the number of possible combinations.

- If either argument is a text, boolean, or error, `COMBINA` returns a `#VALUE!` error.
- If either argument is non-numeric, `COMBINA` returns a `#VALUE!` error.
- If the number of items in each combination is less than 1 or greater than the total number of items, `COMBINA` returns a `#NUM!` error.
- If the total number of items is less than 0, `COMBINA` returns a `#NUM!` error.
- Empty cells are treated as 0.

### Common Errors

| Error | Description |
| --- | ----------- |
| `#VALUE!` | This error occurs when either argument is non-numeric, or if either argument is a boolean, text, or error. |
| `#NUM!` | This error is returned if the number of items in each combination is less than 1 or greater than the total number of items, or if the total number of items is less than 0. |

### Best practices

> - Always ensure that the number of items in each combination is less than or equal to the total number of items.
> - The `COMBINA` function only works with whole numbers. If either argument is a decimal, it will be truncated.
> - Be mindful of the order in which the arguments are given. The first argument is the total number of items and the second is the number of items in each combination. 
> - Remember that `COMBINA` function considers repetitions, so the number of combinations will be larger compared to the `COMBIN` function for the same set of items.

### Usage

A few examples using the COMBINA function.

```
COMBINA(3, 2) returns 6  
COMBINA(4, 3) returns 20  
COMBINA(2, 1) returns 2  
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
        "Items",
        "Choose",
        "Combinations with Repetition"
    ],
    [
        4,
        2,
        "=COMBINA(A2,B2)"
    ],
    [
        5,
        3,
        "=COMBINA(A3,B3)"
    ],
    [
        3,
        4,
        "=COMBINA(A4,B4)"
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
        "Items",
        "Choose",
        "Combinations with Repetition"
    ],
    [
        4,
        2,
        "=COMBINA(A2,B2)"
    ],
    [
        5,
        3,
        "=COMBINA(A3,B3)"
    ],
    [
        3,
        4,
        "=COMBINA(A4,B4)"
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
        "Items",
        "Choose",
        "Combinations with Repetition"
    ],
    [
        4,
        2,
        "=COMBINA(A2,B2)"
    ],
    [
        5,
        3,
        "=COMBINA(A3,B3)"
    ],
    [
        3,
        4,
        "=COMBINA(A4,B4)"
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
        "Items",
        "Choose",
        "Combinations with Repetition"
    ],
    [
        4,
        2,
        "=COMBINA(A2,B2)"
    ],
    [
        5,
        3,
        "=COMBINA(A3,B3)"
    ],
    [
        3,
        4,
        "=COMBINA(A4,B4)"
    ]
]
            }]
        });
    }
}
```

