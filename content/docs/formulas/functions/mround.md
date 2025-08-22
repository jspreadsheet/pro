title: MROUND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MROUND function in Jspreadsheet

# MROUND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MROUND` function in Jspreadsheet Formulas Pro is a helpful tool that allows you to round a number to the nearest multiple of another number you specify. For example, if you want to round a number to the nearest multiple of 5, you would use this function. This can be particularly useful in situations where you need to make calculations fit certain numerical constraints or patterns. It's a straightforward and easy way to achieve precise rounding results in your Jspreadsheet calculations.

## Documentation

Rounds a number to the nearest multiple of another number.

### Category

Math and trigonometry

### Syntax

MROUND(num, multiple)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number you want to round. |
| `multiple` | The multiple to which you want to round number. |


### Behavior

The 'MROUND' function in spreadsheets rounds a number up or down, towards the nearest multiple of a specified factor. Here are some expected behaviors:

- 'MROUND' function treats empty cells as zero.
- If the function encounters text, it will return an error because it expects numerical input.
- Booleans are treated as numbers, with TRUE being 1 and FALSE being 0.
- If the function encounters a cell with an error, it will propagate the error.
- It uses "round half up" rule. For example, MROUND(10, 3) will give 9 because 10 is equidistant from 9 and 12, but 9 is the number that is rounded up.
- If the number and multiple have different signs, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when either the number or multiple argument is non-numeric.|
| #NUM! | This error occurs when the number and multiple arguments have different signs.|
| #DIV/0! | This error is displayed when the multiple argument is zero.|

### Best Practices

> - Always ensure that the number and the multiple arguments have the same sign to avoid the #NUM! error.
> - Avoid using text in cells that you're referencing in your 'MROUND' function to prevent the #VALUE! error.
> - Do not use a zero for the 'multiple' argument as it will result in a #DIV/0! error.
> - Be aware that 'MROUND' uses the "round half up" rule, so if a number is exactly halfway between two multiples, it will be rounded towards the next multiple.

### Usage

A few examples using the MROUND function.

```
MROUND(10,3) returns 9  
MROUND(25.75,0.2) returns 25.8  
MROUND(-10,-3) returns -9  
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
        "Price",
        "Round to Nearest",
        "Rounded Price"
    ],
    [
        23.47,
        0.25,
        "=MROUND(A2,B2)"
    ],
    [
        156.83,
        5,
        "=MROUND(A3,B3)"
    ],
    [
        89.12,
        0.5,
        "=MROUND(A4,B4)"
    ],
    [
        342.91,
        10,
        "=MROUND(A5,B5)"
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
        "Price",
        "Round to Nearest",
        "Rounded Price"
    ],
    [
        23.47,
        0.25,
        "=MROUND(A2,B2)"
    ],
    [
        156.83,
        5,
        "=MROUND(A3,B3)"
    ],
    [
        89.12,
        0.5,
        "=MROUND(A4,B4)"
    ],
    [
        342.91,
        10,
        "=MROUND(A5,B5)"
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
        "Price",
        "Round to Nearest",
        "Rounded Price"
    ],
    [
        23.47,
        0.25,
        "=MROUND(A2,B2)"
    ],
    [
        156.83,
        5,
        "=MROUND(A3,B3)"
    ],
    [
        89.12,
        0.5,
        "=MROUND(A4,B4)"
    ],
    [
        342.91,
        10,
        "=MROUND(A5,B5)"
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
        "Price",
        "Round to Nearest",
        "Rounded Price"
    ],
    [
        23.47,
        0.25,
        "=MROUND(A2,B2)"
    ],
    [
        156.83,
        5,
        "=MROUND(A3,B3)"
    ],
    [
        89.12,
        0.5,
        "=MROUND(A4,B4)"
    ],
    [
        342.91,
        10,
        "=MROUND(A5,B5)"
    ]
]
            }]
        });
    }
}
```

