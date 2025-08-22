title: NE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NE function in Jspreadsheet

# NE function

`PRO`{.jtag}

The `NE` function in Jspreadsheet Formulas Pro is a simple tool that helps you compare two values. When used, it checks whether value1 is not the same as value2. If the two values are different, the function will return TRUE. If they are the same, it will return FALSE. This is a useful function for identifying disparities in your data.

## Documentation

Returns if value1 is not equal to value2

### Category

Math and trigonometry

### Syntax

NE(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to evaluate. |
| `value2` | The second value to evaluate. |


### Behavior

The 'NE' function, also known as 'NOT EQUAL TO' in spreadsheets, compares two values and returns `TRUE` if the values are not equal and `FALSE` if they are equal. 

- For empty cells, if one of the compared values is an empty cell, the 'NE' function usually returns `TRUE` unless the other value is also an empty cell. 
- For text, the 'NE' function is case sensitive and spaces are also considered. Therefore, 'Text' is not equal to 'text' or 'Text '.
- For booleans, `TRUE` is considered as 1 and `FALSE` is considered as 0. Hence, `TRUE` is not equal to `FALSE` and vice versa.
- For errors, if one or both of the compared values is an error, the 'NE' function will also return an error.

### Common Errors

| Error Name | Description |
|---|---|
| #VALUE! | This error occurs when the 'NE' function is used with inappropriate arguments. For example, comparing a text value with a mathematical formula. |
| #NAME? | This error occurs when the 'NE' function is spelled incorrectly or not recognized by the spreadsheet software. |
| #N/A | This error occurs when the 'NE' function is used with a reference that doesn't exist. |

### Best practices

> - Always ensure that the types of values you are comparing with the 'NE' function are compatible, for example comparing number with number, text with text, etc.
> - Be mindful of case sensitivity and spaces when comparing text values.
> - Handle possible errors in your data to prevent the 'NE' function from returning error values.
> - Use the 'NE' function with other logical functions like 'IF' to make more complex conditions and to return more meaningful results.

### Usage

A few examples using the NE function.

```
NE(1, 2) returns TRUE  
NE(2, 2) returns FALSE  
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        95,
        "=NE(A2,B2)"
    ],
    [
        50,
        50,
        "=NE(A3,B3)"
    ],
    [
        75,
        80,
        "=NE(A4,B4)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        95,
        "=NE(A2,B2)"
    ],
    [
        50,
        50,
        "=NE(A3,B3)"
    ],
    [
        75,
        80,
        "=NE(A4,B4)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        95,
        "=NE(A2,B2)"
    ],
    [
        50,
        50,
        "=NE(A3,B3)"
    ],
    [
        75,
        80,
        "=NE(A4,B4)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        95,
        "=NE(A2,B2)"
    ],
    [
        50,
        50,
        "=NE(A3,B3)"
    ],
    [
        75,
        80,
        "=NE(A4,B4)"
    ]
]
            }]
        });
    }
}
```

