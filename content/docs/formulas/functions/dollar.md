title: DOLLAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DOLLAR function in Jspreadsheet

# DOLLAR function

`PRO`{.jtag}

The `DOLLAR` function in Jspreadsheet Formulas Pro allows you to convert any given number into a text, but in a specific currency format. You can also specify the number of decimal places as per your needs. This is particularly useful when you want your numerical data to be represented in monetary terms for easy understanding and comparison. With this function, you can ensure consistency and accuracy in financial data representation across your spreadsheet.

## Documentation

Converts a number to text using currency format with the specified number of decimal places.

### Category

Text

### Syntax

DOLLAR(num, [decimals])

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number you want to format as currency. |
| `decimals` | Optional. The number of decimal places to display in the result. If omitted, assumes a default of 2 decimal places. |


### Behavior

The `DOLLAR` function in a spreadsheet is used to convert a numerical value into text that represents a currency amount. Here's how it handles different types of inputs:

- **Numbers**: The `DOLLAR` function correctly converts numerical values into a currency format.

- **Text**: If the input is text that can't be interpreted as a number, the `DOLLAR` function returns a `#VALUE!` error.

- **Booleans**: If the input is a boolean value (TRUE or FALSE), the `DOLLAR` function converts it into a numerical value. TRUE becomes 1 and FALSE becomes 0. The `DOLLAR` function then converts these numbers into currency amounts.

- **Empty cells**: If the referenced cell is empty, the `DOLLAR` function treats it as zero and returns `$0.00`.

- **Errors**: If the input is an error or refers to a cell containing an error, the `DOLLAR` function returns that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input value cannot be interpreted as a numerical value. For instance, if the input is a text string that doesn't represent a number. |
| #NUM! | This error occurs when the decimal places argument is less than 0 or greater than 255. |

### Best practices

> - It's important to ensure that the input given to the `DOLLAR` function is numerical, or can be interpreted as a numerical value, to avoid a `#VALUE!` error.
> - Be mindful of the second argument (decimal places) with the `DOLLAR` function. It should be within the range of 0 to 255. Providing a value outside this range will result in a `#NUM!` error.
> - While the `DOLLAR` function can handle booleans, it's generally best not to use them as input. This is because it can lead to confusion as TRUE is interpreted as 1 and FALSE as 0.
> - Remember that the `DOLLAR` function returns a text string. This means you can't use the output in further numerical calculations.

### Usage

A few examples using the DOLLAR function.

```
DOLLAR(1234.5678) returns "$1,234.57"  
DOLLAR(9876.54321,3) returns "$9,876.543"  
DOLLAR(A1,0) formats the value in cell A1 as currency with no decimals  
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
        "Product",
        "Price",
        "Formatted Price"
    ],
    [
        "Laptop",
        1234.5678,
        "=DOLLAR(B2)"
    ],
    [
        "Phone",
        987.654,
        "=DOLLAR(B3,0)"
    ],
    [
        "Tablet",
        456.789,
        "=DOLLAR(B4,3)"
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
        "Product",
        "Price",
        "Formatted Price"
    ],
    [
        "Laptop",
        1234.5678,
        "=DOLLAR(B2)"
    ],
    [
        "Phone",
        987.654,
        "=DOLLAR(B3,0)"
    ],
    [
        "Tablet",
        456.789,
        "=DOLLAR(B4,3)"
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
        "Product",
        "Price",
        "Formatted Price"
    ],
    [
        "Laptop",
        1234.5678,
        "=DOLLAR(B2)"
    ],
    [
        "Phone",
        987.654,
        "=DOLLAR(B3,0)"
    ],
    [
        "Tablet",
        456.789,
        "=DOLLAR(B4,3)"
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
        "Product",
        "Price",
        "Formatted Price"
    ],
    [
        "Laptop",
        1234.5678,
        "=DOLLAR(B2)"
    ],
    [
        "Phone",
        987.654,
        "=DOLLAR(B3,0)"
    ],
    [
        "Tablet",
        456.789,
        "=DOLLAR(B4,3)"
    ]
]
            }]
        });
    }
}
```

