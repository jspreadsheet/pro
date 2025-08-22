title: UNARY_PERCENT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UNARY_PERCENT function in Jspreadsheet

# UNARY_PERCENT function

`PRO`{.jtag}

The `UNARY_PERCENT` function in Jspreadsheet Formulas Pro is a simple and efficient tool for converting numbers into percentage fractions. Essentially, it takes a number and divides it by 100 to provide the equivalent percentage fraction. This function is particularly useful in financial and statistical calculations where percentages are commonly used. For beginners, it's a straightforward way to transition between numerical values and their corresponding percentages without manually doing the division.

## Documentation

Converts a number into a percentage fraction by dividing it by 100.

### Category

Math and trigonometry

### Syntax

UNARY_PERCENT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number to convert to a percentage fraction. |


### Behavior

The 'UNARY_PERCENT' function in spreadsheets converts a decimal number to a percentage. Here are its expected behaviors:

- For numeric inputs, it multiplies the value by 100 and adds a percent sign (%). For example, an input of 0.5 will result in 50%.

- If the cell is empty, the function will return 0%.

- For text inputs, the function will return a '#VALUE!' error since it cannot convert text into a percentage.

- For boolean inputs, the function will return 100% for TRUE and 0% for FALSE.

- If a cell contains an error, the function will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the input cell contains non-numeric data. The 'UNARY_PERCENT' function can only convert numeric values into percentages. |
| #REF! | This error is returned when the input cell reference is not valid. This can occur if the referenced cell has been deleted or moved. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name. This can occur if 'UNARY_PERCENT' is misspelled or if the spreadsheet software does not support this function. |

### Best practices

> - Always ensure that the input cell contains numeric data to avoid the '#VALUE!' error.
> - Be cautious when referencing cells for the 'UNARY_PERCENT' function. If the referenced cell is deleted or moved, it will result in a '#REF!' error.
> - Confirm that your spreadsheet software supports the 'UNARY_PERCENT' function to avoid a '#NAME?' error.
> - Use the 'UNARY_PERCENT' function for clarity when you need to convert decimal numbers to percentages. This helps to improve the readability of your spreadsheet.

### Usage

A few examples using the UNARY_PERCENT function.

```
UNARY_PERCENT(10) returns 0.1  
UNARY_PERCENT(200) returns 2  
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
        "Test Score",
        "Raw Percentage",
        "Decimal Form"
    ],
    [
        "Quiz 1",
        85,
        "=UNARY_PERCENT(B2)"
    ],
    [
        "Quiz 2",
        92,
        "=UNARY_PERCENT(B3)"
    ],
    [
        "Quiz 3",
        78,
        "=UNARY_PERCENT(B4)"
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
        "Test Score",
        "Raw Percentage",
        "Decimal Form"
    ],
    [
        "Quiz 1",
        85,
        "=UNARY_PERCENT(B2)"
    ],
    [
        "Quiz 2",
        92,
        "=UNARY_PERCENT(B3)"
    ],
    [
        "Quiz 3",
        78,
        "=UNARY_PERCENT(B4)"
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
        "Test Score",
        "Raw Percentage",
        "Decimal Form"
    ],
    [
        "Quiz 1",
        85,
        "=UNARY_PERCENT(B2)"
    ],
    [
        "Quiz 2",
        92,
        "=UNARY_PERCENT(B3)"
    ],
    [
        "Quiz 3",
        78,
        "=UNARY_PERCENT(B4)"
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
        "Test Score",
        "Raw Percentage",
        "Decimal Form"
    ],
    [
        "Quiz 1",
        85,
        "=UNARY_PERCENT(B2)"
    ],
    [
        "Quiz 2",
        92,
        "=UNARY_PERCENT(B3)"
    ],
    [
        "Quiz 3",
        78,
        "=UNARY_PERCENT(B4)"
    ]
]
            }]
        });
    }
}
```

