title: ISO.CEILING function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISO.CEILING function in Jspreadsheet

# ISO.CEILING function

`PRO`{.jtag}

The `ISO.CEILING` function in Jspreadsheet Formulas Pro is a useful tool for rounding numbers upwards. This function will round a number to the closest integer, or alternatively, to a specified multiple that you choose. Importantly, the result it gives will always match an ISO standard paper size. This is particularly beneficial when you're working with measurements related to printing or graphic design.

## Documentation

Rounds a number up to the nearest integer or to the nearest multiple of a specified significance, and returns a result that is on the ISO list of paper sizes.

### Category

Math and trigonometry

### Syntax

ISO.CEILING(number, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number that you want to round. |
| `number` | Optional. The multiple to which you want to round. If omitted, defaults to 1. |


### Behavior

The `ISO.CEILING` function in spreadsheets rounds a number up, to the nearest multiple of significance. The difference between this function and the `CEILING` function is that `ISO.CEILING` always rounds away from zero. Here's how it handles different input:

1. **Empty cells**: If the provided reference cell is empty, the function treats it as zero.
2. **Text**: If the cell reference contains text, the function will return a `#VALUE!` error.
3. **Booleans**: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE equivalent to 0.
4. **Errors**: If the cell reference contains an error, the function will propagate the error.
5. **Negative Numbers**: The function rounds negative numbers towards zero.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error is returned if any of the provided arguments are non-numeric. |
| #NUM! | This error is returned if the significance provided is zero. |

### Best practices

> - Always ensure that the inputs to the `ISO.CEILING` function are numeric. Non-numeric values will result in a `#VALUE!` error.
> - Be aware that the function treats empty cells as zero. Make sure your referenced cells contain relevant data.
> - Use absolute cell references if you want to copy the function across multiple cells.
> - Keep in mind that `ISO.CEILING` always rounds away from zero, even for negative numbers. This is a key difference between `ISO.CEILING` and other rounding functions.

### Usage

A few examples using the ISO.CEILING function.

```
ISO.CEILING(2.7) rounds up to 3  
ISO.CEILING(5.5, 0.5) rounds up to 5.5 because 5.5 is the nearest multiple of 0.5 that is on the ISO list of paper sizes  
ISO.CEILING(B2:C3, 100) returns an array of rounded values based on the specified multiple of 100.  
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
        "Number",
        "Significance",
        "ISO.CEILING Result"
    ],
    [
        2.3,
        "",
        "=ISO.CEILING(A2)"
    ],
    [
        4.7,
        0.5,
        "=ISO.CEILING(A3,B3)"
    ],
    [
        8.2,
        2,
        "=ISO.CEILING(A4,B4)"
    ],
    [
        15.6,
        "",
        "=ISO.CEILING(A5)"
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
        "Number",
        "Significance",
        "ISO.CEILING Result"
    ],
    [
        2.3,
        "",
        "=ISO.CEILING(A2)"
    ],
    [
        4.7,
        0.5,
        "=ISO.CEILING(A3,B3)"
    ],
    [
        8.2,
        2,
        "=ISO.CEILING(A4,B4)"
    ],
    [
        15.6,
        "",
        "=ISO.CEILING(A5)"
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
        "Number",
        "Significance",
        "ISO.CEILING Result"
    ],
    [
        2.3,
        "",
        "=ISO.CEILING(A2)"
    ],
    [
        4.7,
        0.5,
        "=ISO.CEILING(A3,B3)"
    ],
    [
        8.2,
        2,
        "=ISO.CEILING(A4,B4)"
    ],
    [
        15.6,
        "",
        "=ISO.CEILING(A5)"
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
        "Number",
        "Significance",
        "ISO.CEILING Result"
    ],
    [
        2.3,
        "",
        "=ISO.CEILING(A2)"
    ],
    [
        4.7,
        0.5,
        "=ISO.CEILING(A3,B3)"
    ],
    [
        8.2,
        2,
        "=ISO.CEILING(A4,B4)"
    ],
    [
        15.6,
        "",
        "=ISO.CEILING(A5)"
    ]
]
            }]
        });
    }
}
```

