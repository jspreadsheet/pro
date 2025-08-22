title: FLOOR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FLOOR function in Jspreadsheet

# FLOOR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FLOOR` function in Jspreadsheet Formulas Pro is a tool you can use when you need to round a number down to the closest multiple of another specific number. For instance, if you want to round the number 7 down to the nearest multiple of 3, the `FLOOR` function will give you 6. This function is particularly helpful in instances where you want to maintain consistency with certain intervals or units.

## Documentation

Rounds a number down to the nearest multiple of a specified factor.

### Category

Compatibility

### Syntax

FLOOR(num, significance)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number that you want to round down. |
| `significance` | The multiple to which you want to round. Default is 1. |


### Behavior

The `FLOOR` function in spreadsheets rounds down a given number to the nearest multiple of a specified significance. It behaves as follows:

1. If the cell is empty, the function will return an error.
2. If the cell contains text, the function will return an error.
3. If the cell contains a boolean value, the function treats `TRUE` as 1 and `FALSE` as 0.
4. If the number is positive, the function will round down to the nearest multiple of significance.
5. If the number is negative, the function will round down away from zero to the next multiple of significance.
6. The function handles errors by returning an error message. For example, if the significance is 0, the function returns a `#DIV/0!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the input is non-numeric, such as text. |
| #DIV/0! | This error is returned when the significance is 0, as division by zero is not possible. |
| #NUM! | This error is returned when the number is non-numeric or the significance is less than zero. |

### Best practices

> 1. Always ensure that the number and significance are numeric values for the `FLOOR` function to work correctly. Avoid using text or non-numeric values.
> 2. Be aware that the `FLOOR` function always rounds down, regardless of the number's decimal value. If you need to round to the nearest integer based on standard rounding rules, consider using the `ROUND` function instead.
> 3. Be cautious when using zero or negative values for the significance, as they may lead to errors.
> 4. Use absolute cell references if you want to apply the `FLOOR` function to multiple cells with the same significance. This avoids the need to manually enter the significance for each cell.

### Usage

A few examples using the FLOOR function.

```
FLOOR(3.7, 1) returns 3  
FLOOR(6.8, 2) returns 6  
FLOOR(-2.5, -1) returns -2  
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
        "Round Down To",
        "Floored Price"
    ],
    [
        23.89,
        5,
        "=FLOOR(A2,B2)"
    ],
    [
        47.25,
        10,
        "=FLOOR(A3,B3)"
    ],
    [
        156.73,
        25,
        "=FLOOR(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=FLOOR(A5,B5)"
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
        "Round Down To",
        "Floored Price"
    ],
    [
        23.89,
        5,
        "=FLOOR(A2,B2)"
    ],
    [
        47.25,
        10,
        "=FLOOR(A3,B3)"
    ],
    [
        156.73,
        25,
        "=FLOOR(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=FLOOR(A5,B5)"
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
        "Round Down To",
        "Floored Price"
    ],
    [
        23.89,
        5,
        "=FLOOR(A2,B2)"
    ],
    [
        47.25,
        10,
        "=FLOOR(A3,B3)"
    ],
    [
        156.73,
        25,
        "=FLOOR(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=FLOOR(A5,B5)"
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
        "Round Down To",
        "Floored Price"
    ],
    [
        23.89,
        5,
        "=FLOOR(A2,B2)"
    ],
    [
        47.25,
        10,
        "=FLOOR(A3,B3)"
    ],
    [
        156.73,
        25,
        "=FLOOR(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=FLOOR(A5,B5)"
    ]
]
            }]
        });
    }
}
```

