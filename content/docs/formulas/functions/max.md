title: MAX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MAX function in Jspreadsheet

# MAX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MAX` function in Jspreadsheet Formulas Pro is used to find the largest value within a specific range of cells. It's a highly useful tool when dealing with extensive data sets and you need to quickly identify the highest number. Simply specify the range of cells you're interested in, and the `MAX` function will return the biggest value. This can come in handy when analyzing data such as sales figures, grades, or any other numerical data.

## Documentation

Returns the largest value in a range of cells.

### Category

Statistical

### Syntax

MAX(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers that you want to find the maximum value for. |
| `numberN` | Optional. Additional numbers or ranges of numbers that you want to find the maximum value for. You can specify up to 255 arguments. |


### Behavior

The 'MAX' function in a spreadsheet is used to return the largest numeric value in a range of cells. Here's how it handles different types of data:

- Empty Cells: These are ignored by the 'MAX' function.
- Text: The 'MAX' function doesn't consider text in its calculations. If the range of cells includes text, it will simply ignore them.
- Booleans: Booleans are also ignored by the 'MAX' function.
- Errors: If the range of cells includes a cell with an error, the 'MAX' function will return an error.
- Non-Numeric Values: If non-numeric values are present in the range of cells, they are ignored by the 'MAX' function.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the 'MAX' function encounters a cell in the range that has non-numeric, non-error values, such as text or symbols. |
| #REF! | This error is returned when the 'MAX' function encounters a reference error in the cell range, such as a reference to a non-existing cell. |
| #NAME? | This error occurs when the 'MAX' function is misspelled, or when the spreadsheet does not recognize the text in the formula. |

### Best practices

> - Always ensure that the range of cells you're applying the 'MAX' function to contains numeric values. If there are any text or symbols, they will be ignored, which might lead to incorrect results.
> - Be aware of the possibility of errors in the range of cells. The 'MAX' function will return an error if it encounters a cell with an error in the range.
> - Use the 'MAX' function with other functions, such as 'MIN' or 'AVERAGE', to get a more comprehensive understanding of the data in your spreadsheet.
> - Be careful with the cell range selection. If the selection is not correct, you may not get the expected result.

### Usage

A few examples using the MAX function.

```
MAX(A1:A10) returns the largest value in the range A1:A10  
MAX(10, 20, 30) returns the number 30, which is the largest value among the arguments  
MAX(B1:B5, C1:C5) returns the largest value between the two ranges B1:B5 and C1:C5.  
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
        1250,
        1480,
        1320
    ],
    [
        "Product B",
        890,
        1050,
        975
    ],
    [
        "Product C",
        1680,
        1420,
        1550
    ],
    [
        "Highest Sale",
        "=MAX(B1:B3)",
        "=MAX(C1:C3)",
        "=MAX(D1:D3)"
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
        1250,
        1480,
        1320
    ],
    [
        "Product B",
        890,
        1050,
        975
    ],
    [
        "Product C",
        1680,
        1420,
        1550
    ],
    [
        "Highest Sale",
        "=MAX(B1:B3)",
        "=MAX(C1:C3)",
        "=MAX(D1:D3)"
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
        1250,
        1480,
        1320
    ],
    [
        "Product B",
        890,
        1050,
        975
    ],
    [
        "Product C",
        1680,
        1420,
        1550
    ],
    [
        "Highest Sale",
        "=MAX(B1:B3)",
        "=MAX(C1:C3)",
        "=MAX(D1:D3)"
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
        1250,
        1480,
        1320
    ],
    [
        "Product B",
        890,
        1050,
        975
    ],
    [
        "Product C",
        1680,
        1420,
        1550
    ],
    [
        "Highest Sale",
        "=MAX(B1:B3)",
        "=MAX(C1:C3)",
        "=MAX(D1:D3)"
    ]
]
            }]
        });
    }
}
```

