title: GESTEP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GESTEP function in Jspreadsheet

# GESTEP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `GESTEP` function helps you determine if a particular number surpasses a set threshold value. If the number in question is greater than or equal to the threshold, the function will return 1, indicating a TRUE outcome. However, if the number is less than the threshold, it will return 0, indicating a FALSE outcome. This function is a simple way to perform quick numerical comparisons.

## Documentation

Returns a numeric value indicating whether a number is greater than a threshold value, 1 for TRUE, 0 for FALSE.

### Category

Engineering

### Syntax

GESTEP(number, step)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number you want to test whether it is greater than the step value. |
| `step` | The threshold value that determines whether the number is greater. If the number is greater than or equal to the step value, GESTEP returns TRUE; otherwise, it returns FALSE. |


### Behavior

The `GESTEP` function in spreadsheets is used to test whether a number is greater than a step value. The function will return 1 if the number is greater than the step value, and 0 if the number is less than or equal to the step value. 

- If the step value is not provided, the function will automatically use 0 as the step value.
- If the input number is a text, the function will consider it as 0.
- If the input number is a boolean, TRUE will be regarded as 1 and FALSE as 0.
- If the cell is empty, the function will also consider it as 0.
- Error values in the number or step will result in an error in the function.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs when the given input is non-numeric. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name, possibly due to a typo. |
| #N/A | This error occurs when the required input is missing. |

### Best practices

> - Always ensure the input values are numerical to avoid errors.
> - If you expect some cells to be empty or non-numerical, it is recommended to use error handling functions to manage such possibilities and make your function more robust.
> - Be mindful when omitting the step value, the function will use 0 as the default step value.
> - Use clear and descriptive names for your cells to make your formulas easier to understand and debug.

### Usage

A few examples using the GESTEP function.

```
GESTEP(5, 3) returns 1  
GESTEP(10, 20) returns 0  
GESTEP(A1, 0) where A1 contains -4 returns FALSE  
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
        "Temperature (\u00b0C)",
        "Threshold",
        "Above Threshold?"
    ],
    [
        25,
        20,
        "=GESTEP(A2,B2)"
    ],
    [
        15,
        20,
        "=GESTEP(A3,B3)"
    ],
    [
        35,
        30,
        "=GESTEP(A4,B4)"
    ],
    [
        -5,
        0,
        "=GESTEP(A5,B5)"
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
        "Temperature (\u00b0C)",
        "Threshold",
        "Above Threshold?"
    ],
    [
        25,
        20,
        "=GESTEP(A2,B2)"
    ],
    [
        15,
        20,
        "=GESTEP(A3,B3)"
    ],
    [
        35,
        30,
        "=GESTEP(A4,B4)"
    ],
    [
        -5,
        0,
        "=GESTEP(A5,B5)"
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
        "Temperature (\u00b0C)",
        "Threshold",
        "Above Threshold?"
    ],
    [
        25,
        20,
        "=GESTEP(A2,B2)"
    ],
    [
        15,
        20,
        "=GESTEP(A3,B3)"
    ],
    [
        35,
        30,
        "=GESTEP(A4,B4)"
    ],
    [
        -5,
        0,
        "=GESTEP(A5,B5)"
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
        "Temperature (\u00b0C)",
        "Threshold",
        "Above Threshold?"
    ],
    [
        25,
        20,
        "=GESTEP(A2,B2)"
    ],
    [
        15,
        20,
        "=GESTEP(A3,B3)"
    ],
    [
        35,
        30,
        "=GESTEP(A4,B4)"
    ],
    [
        -5,
        0,
        "=GESTEP(A5,B5)"
    ]
]
            }]
        });
    }
}
```

