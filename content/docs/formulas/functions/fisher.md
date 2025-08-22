title: FISHER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FISHER function in Jspreadsheet

# FISHER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FISHER` function in Jspreadsheet Formulas Pro is a useful tool for statistical analysis. It performs the Fisher transformation on a given value. In simple terms, it changes your data in a way that can make further analysis or interpretation easier. It's particularly useful in situations where you're working with variables that aren't normally distributed, as the Fisher transformation can help normalize the data.

## Documentation

Returns the Fisher transformation of a specified value.

### Category

Statistical

### Syntax

FISHER(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The numeric value for which to find the Fisher transformation. |


### Behavior

The `FISHER` function in spreadsheets calculates the Fisher transformation at a given value. This function is primarily used in statistics, particularly in hypothesis testing. This function takes only one argument, which is a numeric value between -1 and 1. The `FISHER` function returns a value that is normally distributed around zero for any given input value.

- If you provide an empty cell as an argument, it will be treated as zero.
- If you provide a text string as an argument, the function will return a #VALUE! error.
- If you provide a boolean value as an argument, the function will convert FALSE to 0 and TRUE to 1 before performing the calculation.
- If you provide a numeric value that is not between -1 and 1, the function will return a #NUM! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the argument given is non-numeric or a text string. |
| #NUM! | This error is returned when the numeric value provided as an argument is not between -1 and 1. |

### Best practices

> - Always ensure that the input value for the `FISHER` function is a numeric value between -1 and 1. Any value outside this range will return an error.
> - Be careful when linking the `FISHER` function to another cell. If the linked cell contains non-numeric data, the function will return an error.
> - Keep in mind that the `FISHER` function is used in statistical analysis. Unless you're working with hypothesis testing or similar statistical calculations, there may be other more suitable functions to use.
> - Remember that the `FISHER` function will treat empty cells as zero. If this is not your intended behavior, make sure to handle empty cells before supplying them as arguments to the function.

### Usage

A few examples using the FISHER function.

```
FISHER(0.5) returns 0.549306144334055  
FISHER(0.8) returns 1.09861228866811  
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
        "Correlation Coefficient",
        "Fisher Transform"
    ],
    [
        0.3,
        "=FISHER(A2)"
    ],
    [
        0.65,
        "=FISHER(A3)"
    ],
    [
        0.85,
        "=FISHER(A4)"
    ],
    [
        -0.4,
        "=FISHER(A5)"
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
        "Correlation Coefficient",
        "Fisher Transform"
    ],
    [
        0.3,
        "=FISHER(A2)"
    ],
    [
        0.65,
        "=FISHER(A3)"
    ],
    [
        0.85,
        "=FISHER(A4)"
    ],
    [
        -0.4,
        "=FISHER(A5)"
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
        "Correlation Coefficient",
        "Fisher Transform"
    ],
    [
        0.3,
        "=FISHER(A2)"
    ],
    [
        0.65,
        "=FISHER(A3)"
    ],
    [
        0.85,
        "=FISHER(A4)"
    ],
    [
        -0.4,
        "=FISHER(A5)"
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
        "Correlation Coefficient",
        "Fisher Transform"
    ],
    [
        0.3,
        "=FISHER(A2)"
    ],
    [
        0.65,
        "=FISHER(A3)"
    ],
    [
        0.85,
        "=FISHER(A4)"
    ],
    [
        -0.4,
        "=FISHER(A5)"
    ]
]
            }]
        });
    }
}
```

