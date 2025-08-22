title: RANDARRAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RANDARRAY function in Jspreadsheet

# RANDARRAY function

`PRO`{.jtag}

The `RANDARRAY` function in Jspreadsheet Formulas Pro is a tool that generates a group of random numbers within a particular range or format. This is great for when you need to quickly create random data for testing or other purposes. You can specify the number of rows and columns in the array, and the function will fill them with random numbers. It's an easy and efficient way to populate your spreadsheet with random data.

## Documentation

Generates an array of random numbers within a specified range or format.

### Category

Math and trigonometry

### Syntax

RANDARRAY([rows], [columns], [min], [max], [integer])

| Parameter | Description |
| ----------- | ------------- |
| `[rows]` | Optional. The number of rows in the output array. Must be greater than or equal to 1. If not specified, defaults to 1. |
| `[columns]` | Optional. The number of columns in the output array. Must be greater than or equal to 1. If not specified, defaults to 1. |
| `[min]` | Optional. The minimum value for random numbers. If not specified, defaults to 0. |
| `[max]` | Optional. The maximum value for random numbers. If not specified, defaults to 1. |
| `[integer]` | Optional. A logical value specifying whether the generated numbers should be integers (TRUE) or decimals (FALSE). If not specified, defaults to FALSE. |


### Behavior

The `RANDARRAY` function in spreadsheets generates an array of random numbers. Here are its general behaviors:
- The generated numbers are in the range of 0 (inclusive) to 1 (exclusive). 
- You can specify the number of rows and columns you want in the generated array.
- It doesn't handle text, booleans, or errors. The parameters for the function should be integers specifying the number of rows and columns for the array. 
- Empty cells are not considered or treated specially by this function. This function only concerns with the dimensions of the array specified.
- The generated numbers will change each time the spreadsheet recalculates.
- The function will return an error if the specified dimensions for the array are invalid (like negative numbers or zero).

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the provided arguments are non-numeric. `RANDARRAY` function expects numeric inputs specifying the dimensions of the array. |
| #NUM! | This error is displayed when the provided arguments are less than 1. The function expects positive integer inputs for the dimensions of the array. |

### Best practices

> - Always use positive integer values for specifying the dimensions of the array. The `RANDARRAY` function does not accept negative numbers, fractions, or zero.
> - Keep in mind that using large numbers for the dimensions can make your spreadsheet heavy and slow to load, as it will generate a vast number of random numbers.
> - Be aware that the generated numbers will change each time the spreadsheet recalculates. If you want to keep the generated numbers static, consider copying the array and pasting the values into a new location.
> - Remember that the `RANDARRAY` function does not handle text, booleans, or errors. It only generates an array of random numbers.

### Usage

A few examples using the RANDARRAY function.

```
RANDARRAY(3, 2, 10, 20, FALSE) returns a 3x2 array of random decimal numbers between 10 and 20  
SUM(RANDARRAY(1000, 1, 1, 6, TRUE)) returns the sum of 1000 randomly generated integers between 1 and 6  
RANDARRAY(A1, B1, -1, 1, TRUE) returns an array with dimensions specified by the values in cells A1 and B1 containing random integers between -1 and 1.  
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
        "Rows",
        "Columns",
        "Min",
        "Max",
        "Random Array"
    ],
    [
        3,
        2,
        1,
        100,
        "=RANDARRAY(A2,B2,C2,D2,TRUE)"
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "Dice Simulation",
        "Count",
        "Sum of Rolls",
        "",
        ""
    ],
    [
        "1000 rolls",
        1000,
        "=SUM(RANDARRAY(B5,1,1,6,TRUE))",
        "",
        ""
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
        "Rows",
        "Columns",
        "Min",
        "Max",
        "Random Array"
    ],
    [
        3,
        2,
        1,
        100,
        "=RANDARRAY(A2,B2,C2,D2,TRUE)"
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "Dice Simulation",
        "Count",
        "Sum of Rolls",
        "",
        ""
    ],
    [
        "1000 rolls",
        1000,
        "=SUM(RANDARRAY(B5,1,1,6,TRUE))",
        "",
        ""
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
        "Rows",
        "Columns",
        "Min",
        "Max",
        "Random Array"
    ],
    [
        3,
        2,
        1,
        100,
        "=RANDARRAY(A2,B2,C2,D2,TRUE)"
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "Dice Simulation",
        "Count",
        "Sum of Rolls",
        "",
        ""
    ],
    [
        "1000 rolls",
        1000,
        "=SUM(RANDARRAY(B5,1,1,6,TRUE))",
        "",
        ""
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
        "Rows",
        "Columns",
        "Min",
        "Max",
        "Random Array"
    ],
    [
        3,
        2,
        1,
        100,
        "=RANDARRAY(A2,B2,C2,D2,TRUE)"
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "Dice Simulation",
        "Count",
        "Sum of Rolls",
        "",
        ""
    ],
    [
        "1000 rolls",
        1000,
        "=SUM(RANDARRAY(B5,1,1,6,TRUE))",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

