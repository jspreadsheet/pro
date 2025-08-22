title: GT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GT function in Jspreadsheet

# GT function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `GT` function is used to check if one value is greater than another. You provide two values, and the function will return true if the first value is larger than the second, and false if it is not. This is a versatile tool that can be used for various tasks, such as comparing numerical data or timestamps.

## Documentation

Determines whether the first value is greater than the second.

### Category

Logical

### Syntax

GT(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to compare. |
| `value2` | The second value to compare. |


### Behavior

The `GT` function, short for Greater Than, is used in spreadsheets to compare two numerical values. If the first value is greater than the second value, the function returns `TRUE`. If not, it returns `FALSE`. Here's how it handles various inputs:

- **Empty cells**: If one or both of the cells being compared are empty, the function treats them as zero.
- **Text**: If one or both of the cells contain text, the function will return an error, as it can only compare numerical values.
- **Booleans**: Boolean values are treated as numbers, with `TRUE` being equivalent to 1 and `FALSE` being equivalent to 0.
- **Errors**: If one or both of the cells being compared contain error values (like `#DIV/0!`), the `GT` function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the `GT` function is used to compare non-numerical values. For example, trying to compare the text "apple" to the number 5 would return this error. |
| #REF! | This error is returned when the `GT` function tries to reference a cell that does not exist. |
| #NAME? | This error occurs when the `GT` function is misspelled or does not exist in the spreadsheet software. |

### Best practices

> - Always ensure that the cells being compared by the `GT` function contain numerical values to avoid the #VALUE! error.
> - Be aware that the `GT` function treats empty cells as zero. If this is not the desired behavior, it may be best to fill empty cells with an appropriate value before using this function.
> - Use absolute cell references if you plan on copying the `GT` function to other cells to keep the cell references constant.
> - Check your spreadsheet software's documentation to ensure that the `GT` function is supported and that you are using the correct syntax.

### Usage

A few examples using the GT function.

```
GT(5, 5) returns false  
GT(10, 5) returns true  
GT(5, 10) returns false  
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
        "Product A",
        150,
        120,
        "=GT(B1,C1)"
    ],
    [
        "Product B",
        85,
        95,
        "=GT(B2,C2)"
    ],
    [
        "Product C",
        200,
        180,
        "=GT(B3,C3)"
    ],
    [
        "Product D",
        75,
        75,
        "=GT(B4,C4)"
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
        "Product A",
        150,
        120,
        "=GT(B1,C1)"
    ],
    [
        "Product B",
        85,
        95,
        "=GT(B2,C2)"
    ],
    [
        "Product C",
        200,
        180,
        "=GT(B3,C3)"
    ],
    [
        "Product D",
        75,
        75,
        "=GT(B4,C4)"
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
        "Product A",
        150,
        120,
        "=GT(B1,C1)"
    ],
    [
        "Product B",
        85,
        95,
        "=GT(B2,C2)"
    ],
    [
        "Product C",
        200,
        180,
        "=GT(B3,C3)"
    ],
    [
        "Product D",
        75,
        75,
        "=GT(B4,C4)"
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
        "Product A",
        150,
        120,
        "=GT(B1,C1)"
    ],
    [
        "Product B",
        85,
        95,
        "=GT(B2,C2)"
    ],
    [
        "Product C",
        200,
        180,
        "=GT(B3,C3)"
    ],
    [
        "Product D",
        75,
        75,
        "=GT(B4,C4)"
    ]
]
            }]
        });
    }
}
```

