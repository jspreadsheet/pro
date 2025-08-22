title: N function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the N function in Jspreadsheet

# N function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `N` function in Jspreadsheet Formulas Pro is a tool that converts a given value into a numerical format. This is particularly useful when you're dealing with data that may not initially appear as a number. For example, the function can turn a date into its equivalent numerical value, or a true/false statement into 1 or 0 respectively. Essentially, the `N` function helps you to standardize and work with your data in a numeric context.

## Documentation

Returns a value converted to a number.

### Category

Information

### Syntax

N(value)

| Parameter | Description |
| ----------- | ------------- |
| `any` | The value you want to convert to a number. If value is a cell reference, its contents are used. |


The 'N' function in spreadsheets might not be common across all spreadsheet software. However, in the context of Excel or Google Sheets, the 'N' function is used to convert a value to a number. Here is the requested information:

### Behavior 

The 'N' function in spreadsheets behaves differently depending on the data type passed to it:

- **Numbers**: If the cell contains a number, the function will return the same number.
- **Text**: If the cell contains text, the function will return 0.
- **Booleans**: If the cell contains TRUE, the function will return 1. If the cell contains FALSE, the function will return 0.
- **Errors**: If the cell contains an error value, the function will return the error.
- **Empty cells**: If the cell is empty, the function will return 0.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE! | This error occurs when the function receives an argument that it does not know how to handle. |
| #NAME? | This error occurs when the function name is misspelled or when the spreadsheet does not recognize the function name. |

### Best practices

> - Always ensure that the data type of the value you are passing to the 'N' function is one that it can handle, i.e., a number, text, Boolean, or error.
> - Use the 'N' function to convert Boolean values to numerical values for use in mathematical operations.
> - Be aware that the 'N' function will convert text to 0, so ensure this behavior is expected in your calculations.
> - If using the 'N' function in a large range of cells, be sure to handle or filter out error values to avoid unexpected results.

### Usage

A few examples using the N function.

```
N(42) returns 42  
N("-42") returns -42  
N("$1,000.00") returns 1000  
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
        "Raw Data",
        "Converted to Number"
    ],
    [
        "42",
        "=N(A2)"
    ],
    [
        "-$150.75",
        "=N(A3)"
    ],
    [
        "1,250",
        "=N(A4)"
    ],
    [
        true,
        "=N(A5)"
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
        "Raw Data",
        "Converted to Number"
    ],
    [
        "42",
        "=N(A2)"
    ],
    [
        "-$150.75",
        "=N(A3)"
    ],
    [
        "1,250",
        "=N(A4)"
    ],
    [
        true,
        "=N(A5)"
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
        "Raw Data",
        "Converted to Number"
    ],
    [
        "42",
        "=N(A2)"
    ],
    [
        "-$150.75",
        "=N(A3)"
    ],
    [
        "1,250",
        "=N(A4)"
    ],
    [
        true,
        "=N(A5)"
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
        "Raw Data",
        "Converted to Number"
    ],
    [
        "42",
        "=N(A2)"
    ],
    [
        "-$150.75",
        "=N(A3)"
    ],
    [
        "1,250",
        "=N(A4)"
    ],
    [
        true,
        "=N(A5)"
    ]
]
            }]
        });
    }
}
```

