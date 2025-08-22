title: RAND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RAND function in Jspreadsheet

# RAND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RAND` function in Jspreadsheet Formulas Pro is used to produce a random decimal number between 0 and 1. This number updates every time the worksheet recalculates, meaning it changes every time you make a change to your data or press F9. It's a simple and effective way to create random values on your spreadsheet.

## Documentation

Generates a random decimal number between 0 and 1. The value of the number changes each time the worksheet is calculated or when the function is recalculated by pressing F9.

### Category

Math and trigonometry

### Syntax

RAND()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `RAND` function in spreadsheets returns a random number greater than or equal to 0 and less than 1, distributed uniformly. It does not require any arguments. Each time a worksheet is recalculated by entering a formula, or by manually recalculating (pressing F9), a new random number is produced. 

- Empty cells: As `RAND` function does not require any arguments, empty cells do not affect its behavior.

- Text: `RAND` function ignores any text or string as it does not require any arguments. 

- Booleans: Similarly, `RAND` function does not interact with Boolean values as it does not require any arguments.

- Errors: `RAND` function does not produce any errors, unless the spreadsheet software encounters a calculation error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #NAME? | This error occurs if the function is misspelled or not recognized by the spreadsheet software. For example, typing `RND` instead of `RAND`. |
| Calculation Error | This error can occur if the spreadsheet software encounters a calculation error. However, this is extremely rare with `RAND` function. |

### Best practices

> - Since `RAND` function generates a new random number every time the worksheet is recalculated, you may want to keep the generated random numbers static. To do this, copy the cells with `RAND` function and paste them as values.
> - If you need to generate a random number within a specific range, you can use the formula `RAND()*(b-a) + a`, where `a` is the start of your range and `b` is the end of your range.
> - Be aware that `RAND` function produces a uniformly distributed random number. If you need a different distribution, you may need to use a different function or formula.
> - `RAND` function can be combined with other functions to produce more complex random behaviors. For example, `RANDBETWEEN` can be used to generate random integers within a specific range.

### Usage

A few examples using the RAND function.

```
RAND() returns a random decimal number between 0 and 1 on each calculation  
IF(RAND()>0.5, "Heads", "Tails") simulates the flip of a biased coin with a 50% chance of landing on Heads  
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
        "Random Number",
        "Coin Flip",
        "Dice Roll"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
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
        "Random Number",
        "Coin Flip",
        "Dice Roll"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
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
        "Random Number",
        "Coin Flip",
        "Dice Roll"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
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
        "Random Number",
        "Coin Flip",
        "Dice Roll"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ],
    [
        "=RAND()",
        "=IF(RAND()>0.5,\"Heads\",\"Tails\")",
        "=INT(RAND()*6)+1"
    ]
]
            }]
        });
    }
}
```

