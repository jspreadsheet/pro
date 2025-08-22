title: PI function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PI function in Jspreadsheet

# PI function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The PI function in Jspreadsheet Formulas Pro is used to return the mathematical constant pi, which is accurate to 15 digits. When you use this function, it will automatically generate the value of pi (approximately 3.141592653589793). This is especially useful in calculations involving circles or any other mathematical formulas where pi is needed. No arguments are needed for this function, just type `=PI()` and it will give you the value.

## Documentation

Returns the mathematical constant pi, accurate to 15 digits.

### Category

Math and trigonometry

### Syntax

PI()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `PI` function in spreadsheets doesn't take any arguments and it always returns the value of pi, which is approximately 3.141592653589793. This function doesn't interact with cells, so it doesn't handle empty cells, text, booleans, errors, or any other types of cell content.

### Common Errors

| Error | Description |
| --- | --- |
| #NAME? | Occurs if the name of the function is misspelled. |
| #VALUE! | Occurs if any arguments are provided to the `PI` function, as it does not take any arguments. |

### Best practices

> - The `PI` function does not take any arguments, so make sure not to include any.
> - Remember that the value returned by `PI` is an approximation, and it may not be precise enough for some scientific or mathematical calculations.
> - If you need to use the value of pi in several places in your spreadsheet, consider using the `PI` function instead of typing out the value manually. This ensures consistency and reduces the risk of errors.
> - If you need to use the value of pi a lot, you might want to store the result of the `PI` function in a cell and then reference that cell in your calculations. This can make your formulas easier to read and understand.

### Usage

A few examples using the PI function.

```
PI() returns 3.14159265358979, which is the value of the mathematical constant pi accurate to 15 digits  
2*PI()*r returns the circumference of a circle with radius r  
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
        "Radius",
        "Circumference",
        "Area"
    ],
    [
        3,
        "=2*PI()*A2",
        "=PI()*A2^2"
    ],
    [
        5,
        "=2*PI()*A3",
        "=PI()*A3^2"
    ],
    [
        7.5,
        "=2*PI()*A4",
        "=PI()*A4^2"
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
        "Radius",
        "Circumference",
        "Area"
    ],
    [
        3,
        "=2*PI()*A2",
        "=PI()*A2^2"
    ],
    [
        5,
        "=2*PI()*A3",
        "=PI()*A3^2"
    ],
    [
        7.5,
        "=2*PI()*A4",
        "=PI()*A4^2"
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
        "Radius",
        "Circumference",
        "Area"
    ],
    [
        3,
        "=2*PI()*A2",
        "=PI()*A2^2"
    ],
    [
        5,
        "=2*PI()*A3",
        "=PI()*A3^2"
    ],
    [
        7.5,
        "=2*PI()*A4",
        "=PI()*A4^2"
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
        "Radius",
        "Circumference",
        "Area"
    ],
    [
        3,
        "=2*PI()*A2",
        "=PI()*A2^2"
    ],
    [
        5,
        "=2*PI()*A3",
        "=PI()*A3^2"
    ],
    [
        7.5,
        "=2*PI()*A4",
        "=PI()*A4^2"
    ]
]
            }]
        });
    }
}
```

