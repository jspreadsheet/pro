title: HARMEAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HARMEAN function in Jspreadsheet

# HARMEAN function

`PRO`{.jtag}

The `HARMEAN` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the harmonic mean of a specified set of numbers. It is particularly useful when dealing with rates or ratios. You input your data set into the `HARMEAN` function, and it will return the harmonic mean of those numbers, which is a type of average. This function is beneficial for specific statistical analyses in your data management tasks.

## Documentation

Returns the harmonic mean of a data set.

### Category

Statistical

### Syntax

HARMEAN(number1, [number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the harmonic mean. |
| `numberN` | Optional. Additional numbers or ranges of numbers for which to calculate the harmonic mean, up to a maximum of 255 values. |


### Behavior

The `HARMEAN` function in spreadsheets calculates the harmonic mean of a dataset. This function ignores empty cells, text, and boolean values. However, it does include zero values, which can lead to a `#DIV/0!` error if the dataset contains a zero. Furthermore, if the argument to the function is a logical value or a text representation of a number, the function converts it into a number. If the argument is an array or reference, only numbers in that array or reference are counted. The `HARMEAN` function also returns an error if any value in the dataset is less than zero.

### Common Errors

| Error | Description |
| --- | --- |
| `#DIV/0!` | This error occurs if the dataset contains a zero. |
| `#VALUE!` | This error is returned if any value in the dataset is less than zero. |
| `#NUM!` | This error is returned if less than 1 argument is provided. |
| `#NAME?` | This error is returned if the `HARMEAN` function is spelled incorrectly. |

### Best practices

> - Always ensure that your dataset does not contain any zero or negative values to avoid errors.
> - Use the `HARMEAN` function when dealing with rates. It is more accurate as it gives equal weight to each data point.
> - Be careful when including cell references or ranges as arguments. The `HARMEAN` function only includes numbers in its calculation.
> - Ensure that you input a minimum of 1 argument to avoid the `#NUM!` error.

### Usage

A few examples using the HARMEAN function.

```
HARMEAN(5,10,20) returns 8.571428571  
HARMEAN(A1:A5)  
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
        "Speed (mph)",
        "Time (hours)",
        "Harmonic Mean Speed"
    ],
    [
        30,
        2,
        "=HARMEAN(A2:A5)"
    ],
    [
        45,
        1.5
    ],
    [
        60,
        1
    ],
    [
        40,
        2.5
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
        "Speed (mph)",
        "Time (hours)",
        "Harmonic Mean Speed"
    ],
    [
        30,
        2,
        "=HARMEAN(A2:A5)"
    ],
    [
        45,
        1.5
    ],
    [
        60,
        1
    ],
    [
        40,
        2.5
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
        "Speed (mph)",
        "Time (hours)",
        "Harmonic Mean Speed"
    ],
    [
        30,
        2,
        "=HARMEAN(A2:A5)"
    ],
    [
        45,
        1.5
    ],
    [
        60,
        1
    ],
    [
        40,
        2.5
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
        "Speed (mph)",
        "Time (hours)",
        "Harmonic Mean Speed"
    ],
    [
        30,
        2,
        "=HARMEAN(A2:A5)"
    ],
    [
        45,
        1.5
    ],
    [
        60,
        1
    ],
    [
        40,
        2.5
    ]
]
            }]
        });
    }
}
```

