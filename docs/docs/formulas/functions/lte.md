title: LTE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LTE function in Jspreadsheet

# LTE function

`PRO`{.jtag}

The `LTE` function in Jspreadsheet Formulas Pro is a tool used to compare two values. It checks whether the first value is either less than or equal to the second. This function returns `True` if the first value is indeed less than or equal to the second, and `False` if it is not. It's a helpful function when you need to perform comparisons or conditions in your data analysis.

## Documentation

Determines whether the first value is less than or equal to the second.

### Category

Logical

### Syntax

LTE(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to compare. |
| `value2` | The second value to compare. |


### Behavior

The `LTE` function in spreadsheets is a comparison operator that checks if one value is less than or equal to another value. It returns `TRUE` if the first value is less than or equal to the second value and `FALSE` if it is not. 

- **Empty Cells**: If either or both of the cells being compared are empty, the `LTE` function treats them as zero.
- **Text**: When the `LTE` function is used to compare text strings, it compares them based on alphabetical order. For example, "A" is considered less than "B".
- **Booleans**: Boolean values are treated as numbers in the `LTE` function, with `TRUE` being equal to 1 and `FALSE` being equal to 0.
- **Errors**: If the `LTE` function encounters an error in either of the cells being compared, it will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when one or both of the cells being compared are not recognized as numeric or text. |
| #NAME? | This error is returned if the `LTE` function is not recognized, which could be due to a typo or using a spreadsheet program that does not support this function. |

### Best practices

> - Always ensure that the cells being compared using the `LTE` function contain numeric or text data. If not, the function may return an error or unexpected results.
> - Use the `LTE` function with caution when comparing text strings, as it compares them based on alphabetical order which may not always produce the desired results.
> - Be mindful that boolean values are treated as numbers, with `TRUE` equal to 1 and `FALSE` equal to 0.
> - Always check for errors returned by the `LTE` function to ensure accurate results.

### Usage

A few examples using the LTE function.

```
LTE(5, 5) returns true  
LTE(10, 5) returns false  
LTE(5, 10) returns true  
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
        "Budget",
        "Actual",
        "Within Budget?"
    ],
    [
        1000,
        950,
        "=LTE(B2,A2)"
    ],
    [
        500,
        520,
        "=LTE(B3,A3)"
    ],
    [
        750,
        750,
        "=LTE(B4,A4)"
    ],
    [
        300,
        280,
        "=LTE(B5,A5)"
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
        "Budget",
        "Actual",
        "Within Budget?"
    ],
    [
        1000,
        950,
        "=LTE(B2,A2)"
    ],
    [
        500,
        520,
        "=LTE(B3,A3)"
    ],
    [
        750,
        750,
        "=LTE(B4,A4)"
    ],
    [
        300,
        280,
        "=LTE(B5,A5)"
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
        "Budget",
        "Actual",
        "Within Budget?"
    ],
    [
        1000,
        950,
        "=LTE(B2,A2)"
    ],
    [
        500,
        520,
        "=LTE(B3,A3)"
    ],
    [
        750,
        750,
        "=LTE(B4,A4)"
    ],
    [
        300,
        280,
        "=LTE(B5,A5)"
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
        "Budget",
        "Actual",
        "Within Budget?"
    ],
    [
        1000,
        950,
        "=LTE(B2,A2)"
    ],
    [
        500,
        520,
        "=LTE(B3,A3)"
    ],
    [
        750,
        750,
        "=LTE(B4,A4)"
    ],
    [
        300,
        280,
        "=LTE(B5,A5)"
    ]
]
            }]
        });
    }
}
```

