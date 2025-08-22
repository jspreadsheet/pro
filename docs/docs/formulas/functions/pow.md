title: POW function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the POW function in Jspreadsheet

# POW function

`PRO`{.jtag}

The `POW` function in Jspreadsheet Formulas Pro is a mathematical tool that allows you to raise a number to a specific power. For example, if you were to use `POW(2,3)`, it would return 8, because 2 raised to the power of 3 equals 8. This function is very useful for quick calculations involving exponents, helping to simplify your data analysis process.

## Documentation

Returns the result of raising a number to a power.

### Category

Math and trigonometry

### Syntax

POW(number, power)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to raise to the power. |
| `power` | The power to raise the number to. |


### Behavior

The `POW` function in a spreadsheet is used to raise a number to a power. It takes two parameters - the base and the exponent. The base is the number you want to raise to a power and the exponent is the power by which the base number will be raised.

- If the cells referenced in the function are empty, the function will return an error.
- If the function includes text or booleans, it will return an error, as it only works with numerical values.
- If the function encounters an error, it will return that error.
- If a negative number is raised to a fractional power, the function will return a `#NUM!` error since it's mathematically undefined.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if either the base number is negative, and the power is any real number other than zero, or if the base is zero and the power is less than zero |
| #VALUE! | Occurs if either the base number or the power is non-numeric |
| #DIV/0! | Occurs if base is 0 and power is 0, since 0 to the power of 0 is mathematically undefined |

### Best practices

> - Make sure that the cells referenced in the `POW` function contain numerical values. The function does not work with text or boolean values.
> - Be careful when using negative numbers or zero in your function. Certain combinations can lead to mathematically undefined results, which will cause errors.
> - Always check the order of your parameters. The first parameter is the base number and the second parameter is the power.
> - Use parentheses to ensure correct order of operations when combining the `POW` function with other functions or mathematical operators.

### Usage

A few examples using the POW function.

```
POW(2, 3) returns 8  
POW(10, 2) returns 100  
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POW(A2,B2)"
    ],
    [
        5,
        2,
        "=POW(A3,B3)"
    ],
    [
        10,
        4,
        "=POW(A4,B4)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POW(A2,B2)"
    ],
    [
        5,
        2,
        "=POW(A3,B3)"
    ],
    [
        10,
        4,
        "=POW(A4,B4)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POW(A2,B2)"
    ],
    [
        5,
        2,
        "=POW(A3,B3)"
    ],
    [
        10,
        4,
        "=POW(A4,B4)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POW(A2,B2)"
    ],
    [
        5,
        2,
        "=POW(A3,B3)"
    ],
    [
        10,
        4,
        "=POW(A4,B4)"
    ]
]
            }]
        });
    }
}
```

