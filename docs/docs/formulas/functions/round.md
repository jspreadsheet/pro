title: ROUND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROUND function in Jspreadsheet

# ROUND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ROUND` function in Jspreadsheet Formulas Pro is a mathematical tool used to modify the precision of a number. It allows you to specify how many digits after the decimal point you want to keep. For example, if you have the number 3.14159 and you want to keep only two digits after the decimal point, you would use the `ROUND` function and the result would be 3.14. It's a convenient and simple way to manage numerical accuracy in your Jspreadsheet projects.

## Documentation

Rounds a number to a specified number of digits.

### Category

Math and trigonometry

### Syntax

ROUND(number, num_digits)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number you want to round. |
| `num_digits` | The number of digits to which you want to round the number. |


### Behavior

The `ROUND` function in a spreadsheet is used to round numbers to a certain number of decimal places. Here is how it behaves with different types of input:

- **Numbers**: The `ROUND` function works as expected with numbers, rounding them to the nearest value based on the number of decimal places specified.
- **Empty cells**: If the `ROUND` function is applied to an empty cell, it will typically return an error because it expects a numeric input.
- **Text**: If the `ROUND` function is applied to a cell containing text, it will return an error as it can only round numeric values.
- **Booleans**: When rounding a boolean value, it will treat `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If the cell that the `ROUND` function is referencing contains an error, the `ROUND` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the `ROUND` function is applied to a cell containing non-numeric data, like text. |
| #NUM! | This error is returned when the number of decimal places specified for rounding is less than zero. |
| #REF! | This error is returned when the cell reference is not valid. This might happen if the referenced cell was deleted. |
| #DIV/0! | This error is returned if we try to divide by zero within the `ROUND` function. |

### Best practices

> - Always ensure that the input to the `ROUND` function is numeric. Non-numeric inputs will result in errors.
> - Be mindful of the fact that `ROUND` function does not just truncate the number, but rounds it. i.e., `ROUND(1.5, 0)` will return 2, not 1.
> - Be aware that the `ROUND` function will treat boolean values as 1 for `TRUE` and 0 for `FALSE`.
> - Double-check your cell references to avoid `#REF!` errors. If you delete a cell that is referenced by a `ROUND` function, it will return an error.

### Usage

A few examples using the ROUND function.

```
ROUND(3.14159, 2) returns 3.14  
ROUND(99.95, 0) returns 100  
ROUND(1234.56789, -2) returns 1200  
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
        "Original Price",
        "Rounded Price"
    ],
    [
        "Widget A",
        23.456,
        "=ROUND(B2,2)"
    ],
    [
        "Widget B",
        147.89,
        "=ROUND(B3,0)"
    ],
    [
        "Widget C",
        1234.567,
        "=ROUND(B4,-1)"
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
        "Original Price",
        "Rounded Price"
    ],
    [
        "Widget A",
        23.456,
        "=ROUND(B2,2)"
    ],
    [
        "Widget B",
        147.89,
        "=ROUND(B3,0)"
    ],
    [
        "Widget C",
        1234.567,
        "=ROUND(B4,-1)"
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
        "Original Price",
        "Rounded Price"
    ],
    [
        "Widget A",
        23.456,
        "=ROUND(B2,2)"
    ],
    [
        "Widget B",
        147.89,
        "=ROUND(B3,0)"
    ],
    [
        "Widget C",
        1234.567,
        "=ROUND(B4,-1)"
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
        "Original Price",
        "Rounded Price"
    ],
    [
        "Widget A",
        23.456,
        "=ROUND(B2,2)"
    ],
    [
        "Widget B",
        147.89,
        "=ROUND(B3,0)"
    ],
    [
        "Widget C",
        1234.567,
        "=ROUND(B4,-1)"
    ]
]
            }]
        });
    }
}
```

