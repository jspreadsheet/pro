title: ISBETWEEN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISBETWEEN function in Jspreadsheet

# ISBETWEEN function

`PRO`{.jtag}

The `ISBETWEEN` function in Jspreadsheet Formulas Pro is a handy tool that checks if a certain value falls within a specific range. It will return a 'true' result if the value is equal to or greater than the lower limit, and equal to or less than the upper limit. Essentially, this function helps you determine whether a value is within a certain bracket, including the defined boundaries themselves.

## Documentation

Returns true if a value is between a lower and upper bound, inclusive.

### Category

Logical

### Syntax

ISBETWEEN(value, lower_bound, upper_bound)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The value to check if it is between the lower and upper bounds. |
| `number` | The lower bound of the range. |
| `number` | The upper bound of the range. |


### Behavior

The `ISBETWEEN` function checks whether a given value is between two specified values, inclusively. The function returns `TRUE` if the value is between the two values and `FALSE` otherwise. Here's how it handles various inputs:

- **Empty cells**: If any of the inputs is an empty cell, the function will return `FALSE`.
- **Text**: If the given value or the boundary values are text, the function will throw an error as it requires numeric values.
- **Booleans**: If the given value or the boundary values are booleans, they will be treated as `1` for `TRUE` and `0` for `FALSE`.
- **Errors**: If any of the inputs is an error, the function will propagate that error.
- **Non-numeric values**: For non-numeric values, the function will throw an error as it requires numeric values.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the given value or the boundary values are non-numeric (except booleans). |
| #N/A | This error occurs if any of the inputs is an error. |

### Best practices

> - Ensure that all inputs to the `ISBETWEEN` function are numeric values or booleans. The function does not work with text or other non-numeric values.
> - Be careful when using cell references as inputs to the `ISBETWEEN` function. Make sure the cells contain the correct data type.
> - Remember that the `ISBETWEEN` function includes the boundary values. If you want to exclude the boundary values, you'll have to adjust your formula accordingly.
> - Always handle possible errors to ensure your spreadsheet remains functional even when the inputs to the `ISBETWEEN` function are not as expected.

### Usage

A few examples using the ISBETWEEN function.

```
ISBETWEEN(5, 1, 10) returns true  
ISBETWEEN(15, 1, 10) returns false  
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
        "Student",
        "Score",
        "Passing Grade?"
    ],
    [
        "Alice",
        85,
        "=ISBETWEEN(B2,70,100)"
    ],
    [
        "Bob",
        62,
        "=ISBETWEEN(B3,70,100)"
    ],
    [
        "Carol",
        78,
        "=ISBETWEEN(B4,70,100)"
    ],
    [
        "David",
        45,
        "=ISBETWEEN(B5,70,100)"
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
        "Student",
        "Score",
        "Passing Grade?"
    ],
    [
        "Alice",
        85,
        "=ISBETWEEN(B2,70,100)"
    ],
    [
        "Bob",
        62,
        "=ISBETWEEN(B3,70,100)"
    ],
    [
        "Carol",
        78,
        "=ISBETWEEN(B4,70,100)"
    ],
    [
        "David",
        45,
        "=ISBETWEEN(B5,70,100)"
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
        "Student",
        "Score",
        "Passing Grade?"
    ],
    [
        "Alice",
        85,
        "=ISBETWEEN(B2,70,100)"
    ],
    [
        "Bob",
        62,
        "=ISBETWEEN(B3,70,100)"
    ],
    [
        "Carol",
        78,
        "=ISBETWEEN(B4,70,100)"
    ],
    [
        "David",
        45,
        "=ISBETWEEN(B5,70,100)"
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
        "Student",
        "Score",
        "Passing Grade?"
    ],
    [
        "Alice",
        85,
        "=ISBETWEEN(B2,70,100)"
    ],
    [
        "Bob",
        62,
        "=ISBETWEEN(B3,70,100)"
    ],
    [
        "Carol",
        78,
        "=ISBETWEEN(B4,70,100)"
    ],
    [
        "David",
        45,
        "=ISBETWEEN(B5,70,100)"
    ]
]
            }]
        });
    }
}
```

