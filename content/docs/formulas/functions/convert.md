title: CONVERT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONVERT function in Jspreadsheet

# CONVERT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CONVERT` function in Jspreadsheet Formulas Pro is a useful tool that allows you to change a number from one measurement system to another. This could be anything from converting currencies, weights, lengths, or even temperatures. You simply input the number you want to convert, specify the current measurement unit, and then specify the unit you want the number converted to. It's a handy function that saves you time, making conversions quick and error-free.

## Documentation

Converts a number from one measurement system to another.

### Category

Engineering

### Syntax

CONVERT(number, from_unit, to_unit)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The value to be converted. |
| `from_unit` | The unit of measurement for the value. |
| `to_unit` | The unit of measurement to which you want to convert the value. |


### Behavior

The `CONVERT` function in a spreadsheet is used to convert a number from one measurement system to another. The function requires three arguments: the number you wish to convert, the unit you are converting from, and the unit you are converting to. 

- If the cell referenced for the number to be converted is empty, the function will return `#VALUE!` error.
- The function cannot handle text values. If any of the arguments are text that cannot be interpreted as a valid number or unit, the function will return `#VALUE!` error.
- Booleans are not supported. If any of the arguments are boolean values, the function will return `#VALUE!` error.
- If the unit inputted for conversion is not supported or not recognized by the function, it will return a `#N/A` error.
- In the case of division by zero, the function will return `#DIV/0!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when either the number to be converted, the unit you are converting from, or the unit you are converting to is not a valid number or unit. It is also returned when the cell referenced for the number is empty. |
| `#N/A` | This error is returned when the unit inputted for conversion is not supported or not recognized by the function. |
| `#DIV/0!` | This error occurs when there is a division by zero in the conversion calculation. |

### Best practices

> - Always double-check the units you are converting from and to, to ensure they are valid and supported by the `CONVERT` function.
> - Handle errors such as `#VALUE!`, `#N/A`, and `#DIV/0!` using error handling functions like `IFERROR` to ensure your spreadsheet remains clean and easy to read.
> - Avoid referencing empty cells as the number to be converted, as this will result in a `#VALUE!` error.
> - Use the `CONVERT` function for dynamic conversions where the numbers or units may change, rather than hard coding conversions.

### Usage

A few examples using the CONVERT function.

```
CONVERT(2.5, "ft", "m") returns 0.762  
CONVERT(250, "lbm", "kg") returns 113.398  
CONVERT(100, "mi", "km") returns 160.934  
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
        "Distance (ft)",
        "Distance (m)",
        "=CONVERT(A1,\"ft\",\"m\")"
    ],
    [
        10,
        "Weight (lbs)",
        "=CONVERT(B2,\"lbm\",\"kg\")"
    ],
    [
        25.5,
        220,
        "=CONVERT(A3,\"ft\",\"m\")"
    ],
    [
        100,
        150,
        "=CONVERT(B4,\"lbm\",\"kg\")"
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
        "Distance (ft)",
        "Distance (m)",
        "=CONVERT(A1,\"ft\",\"m\")"
    ],
    [
        10,
        "Weight (lbs)",
        "=CONVERT(B2,\"lbm\",\"kg\")"
    ],
    [
        25.5,
        220,
        "=CONVERT(A3,\"ft\",\"m\")"
    ],
    [
        100,
        150,
        "=CONVERT(B4,\"lbm\",\"kg\")"
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
        "Distance (ft)",
        "Distance (m)",
        "=CONVERT(A1,\"ft\",\"m\")"
    ],
    [
        10,
        "Weight (lbs)",
        "=CONVERT(B2,\"lbm\",\"kg\")"
    ],
    [
        25.5,
        220,
        "=CONVERT(A3,\"ft\",\"m\")"
    ],
    [
        100,
        150,
        "=CONVERT(B4,\"lbm\",\"kg\")"
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
        "Distance (ft)",
        "Distance (m)",
        "=CONVERT(A1,\"ft\",\"m\")"
    ],
    [
        10,
        "Weight (lbs)",
        "=CONVERT(B2,\"lbm\",\"kg\")"
    ],
    [
        25.5,
        220,
        "=CONVERT(A3,\"ft\",\"m\")"
    ],
    [
        100,
        150,
        "=CONVERT(B4,\"lbm\",\"kg\")"
    ]
]
            }]
        });
    }
}
```

