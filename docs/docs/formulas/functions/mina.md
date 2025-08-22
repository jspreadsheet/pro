title: MINA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MINA function in Jspreadsheet

# MINA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MINA` function in Jspreadsheet Formulas Pro is used to find the smallest value from a given list of arguments. These arguments can be numbers, arrays, or references. For example, if you have a list of sales figures and you want to find the lowest sales figure, you could use the `MINA` function. It's a useful tool when you need to quickly identify the minimum value in a large dataset.

## Documentation

Returns the smallest value in a list of supplied arguments, including numbers, arrays, and references.

### Category

Statistical

### Syntax

MINA(value1,[value2],...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value or range from which you want to find the minimum. |
| `[valueN]` | Optional. Additional values or ranges from which you want to find the minimum. You can have up to 255 arguments. |


### Behavior

The `MINA` function in spreadsheets finds the smallest number in a set of values, where text representations of numbers are counted as numbers. Here's how it handles different types of data:

- Empty Cells: `MINA` ignores empty cells in the range or array of cells it is evaluating.
- Text: If the text can be interpreted as a numeric value, `MINA` will include it in its evaluation. For instance, '5' will be treated as the number 5. However, non-numeric text is counted as 0.
- Booleans: `MINA` treats `TRUE` as 1 and `FALSE` as 0.
- Errors: If any cell in the range contains an error, the `MINA` function will return that error.
- Numbers: `MINA` includes all numeric values in its evaluation.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the function encounters a cell with text that it can't interpret as a numeric value, such as 'abc'. |
| #DIV/0! | This error occurs when the function is trying to divide by zero, which isn't possible in mathematics. |
| #NAME? | This error occurs when the spreadsheet doesn't recognize the function name, possibly due to a typo or incorrect syntax. |
| #N/A | This error occurs when no numeric values are found in the given range or array of cells. |

### Best practices

> - When using `MINA`, ensure that your selected range or array of cells primarily contains numeric values or text representations of numbers. Including cells with non-numeric text can lead to errors or inaccurate results.
> - Remember that `MINA` treats empty cells as if they don't exist. If you want to include empty cells as zeros in your calculation, consider using another function like `MIN` or preprocessing your data to replace empty cells with zeros.
> - Be aware that `MINA` will return an error if any cell in the range contains an error. It's a good idea to clean your data and handle errors before applying the `MINA` function.
> - Use `MINA` to include logical values as part of the calculation. If you want to exclude logical values from the calculation, use `MIN` instead.

### Usage

A few examples using the MINA function.

```
MINA(3, 5, 1) returns 1  
MINA(A1:C10) returns the smallest value in the range A1 through C10  
MINA([1, 2, 3, 4, 5]) returns 1  
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
        "Product B",
        "Product C",
        "Minimum"
    ],
    [
        85,
        92,
        78,
        "=MINA(A2:C2)"
    ],
    [
        91,
        87,
        95,
        "=MINA(A3:C3)"
    ],
    [
        76,
        89,
        82,
        "=MINA(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MINA(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum"
    ],
    [
        85,
        92,
        78,
        "=MINA(A2:C2)"
    ],
    [
        91,
        87,
        95,
        "=MINA(A3:C3)"
    ],
    [
        76,
        89,
        82,
        "=MINA(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MINA(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum"
    ],
    [
        85,
        92,
        78,
        "=MINA(A2:C2)"
    ],
    [
        91,
        87,
        95,
        "=MINA(A3:C3)"
    ],
    [
        76,
        89,
        82,
        "=MINA(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MINA(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum"
    ],
    [
        85,
        92,
        78,
        "=MINA(A2:C2)"
    ],
    [
        91,
        87,
        95,
        "=MINA(A3:C3)"
    ],
    [
        76,
        89,
        82,
        "=MINA(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MINA(A2:C4)"
    ]
]
            }]
        });
    }
}
```

