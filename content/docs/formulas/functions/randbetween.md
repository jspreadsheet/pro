title: RANDBETWEEN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RANDBETWEEN function in Jspreadsheet

# RANDBETWEEN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RANDBETWEEN` function in Jspreadsheet Formulas Pro is used to generate a random integer between two given numbers, both numbers included. The generated number will change every time the worksheet is recalculated or the function is manually refreshed by pressing F9. This function is handy when you need a random number within a specific range for your calculations.

## Documentation

Generates a random integer between two specified numbers (inclusive). The value of the number changes each time the worksheet is calculated or when the function is recalculated by pressing F9.

### Category

Math and trigonometry

### Syntax

RANDBETWEEN(bottom, top)

| Parameter | Description |
| ----------- | ------------- |
| `bottom` | The smallest integer in the range of acceptable values. |
| `top` | The largest integer in the range of acceptable values. |


### Behavior

The `RANDBETWEEN` function in spreadsheets generates a random integer between the two numbers you specify. The function takes two arguments: the bottom and top of the range in which to generate the random number. Here's how it behaves:

- If the bottom is greater than the top, the function returns an error.
- If either the bottom or top is a non-integer, the function rounds it to an integer.
- If either the bottom or top is a boolean, it is converted into an integer before the function is evaluated (TRUE becomes 1, FALSE becomes 0).
- If either the bottom or top is a text string or an error, the function returns an error.
- Empty cells are treated as zero.
- Each time a worksheet using the function is recalculated by a new or edited entry, a new random number is generated.
  
### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the bottom is greater than the top |
| #VALUE! | Occurs when either argument is a text string or an error |

### Best practices

> - Avoid using `RANDBETWEEN` function where stable and unchanging values are required. Since the function generates a new random number each time the worksheet is recalculated, it may lead to unexpected results.
> - Remember that `RANDBETWEEN` function includes both the bottom and top values in the range. If you don't want to include one or both of these values, adjust your input accordingly.
> - Use the `RANDBETWEEN` function with the `SORT` function if you want to generate a set of unique random numbers.
> - Be careful when using `RANDBETWEEN` in large ranges or in many cells. It may slow down the worksheet's performance.

### Usage

A few examples using the RANDBETWEEN function.

```
RANDBETWEEN(1,10) returns a random integer between 1 and 10 (inclusive)  
IF(RANDBETWEEN(1,6)<=3, "Heads", "Tails") simulates the flip of a fair coin  
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
        "Dice Roll 1",
        "Dice Roll 2",
        "Total"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A2+B2"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A3+B3"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A4+B4"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A5+B5"
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
        "Dice Roll 1",
        "Dice Roll 2",
        "Total"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A2+B2"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A3+B3"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A4+B4"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A5+B5"
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
        "Dice Roll 1",
        "Dice Roll 2",
        "Total"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A2+B2"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A3+B3"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A4+B4"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A5+B5"
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
        "Dice Roll 1",
        "Dice Roll 2",
        "Total"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A2+B2"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A3+B3"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A4+B4"
    ],
    [
        "=RANDBETWEEN(1,6)",
        "=RANDBETWEEN(1,6)",
        "=A5+B5"
    ]
]
            }]
        });
    }
}
```

