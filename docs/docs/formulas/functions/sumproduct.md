title: SUMPRODUCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMPRODUCT function in Jspreadsheet

# SUMPRODUCT function

`PRO`{.jtag}

The `SUMPRODUCT` function in Jspreadsheet Formulas Pro is a powerful tool that multiplies corresponding items in the given arrays or ranges and then sums those results. Imagine you have two columns of numbers, and you want to multiply each pair of numbers together and then add all those results up. Instead of doing this manually, you can use `SUMPRODUCT` to do it all in one step. It streamlines the process, making it much quicker and easier to handle large amounts of data.

## Documentation

Returns the sum of the products of corresponding ranges or arrays.

### Category

Math and trigonometry

### Syntax

SUMPRODUCT(array1, [array2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range to multiply and add. |
| `arrayN` | Optional. Additional arrays or ranges to multiply and add. |


### Behavior

The `SUMPRODUCT` function in spreadsheets is a function that multiplies ranges or arrays together and returns the sum of products. It is a useful tool for performing complex calculations with multiple data sets. Here's how it typically behaves:

- **Empty cells:** `SUMPRODUCT` treats empty cells as zero. When a range or array containing an empty cell is included in the function, that cell's contribution to the overall product-sum is zero.
- **Text:** `SUMPRODUCT` does not process text and will treat any text entry as zero when performing calculations.
- **Booleans:** If boolean values are included in the arrays, `SUMPRODUCT` will treat TRUE as 1 and FALSE as 0.
- **Errors:** If an error is present in one of the cells in the array, the `SUMPRODUCT` function will return an error. This could be any error like `#DIV/0!`, `#N/A`, `#NAME?`, `#NULL!`, `#NUM!`, `#REF!`, `#VALUE!`.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error typically occurs when the arrays or ranges that you've specified in the `SUMPRODUCT` function do not have the same dimensions. |
| `#REF!` | This error is seen when you include a cell reference that's not valid. This might be because the referenced cell has been deleted. |
| `#NAME?` | This error occurs when the spreadsheet does not recognize the function name. This could be due to a typo in the function name `SUMPRODUCT`. |
| `#N/A` | This error is seen when the function includes a cell or range of cells that contain `#N/A` error.|

### Best practices

> - Always ensure that the arrays or ranges included in the `SUMPRODUCT` function have the same dimensions. Mismatched dimensions will return a `#VALUE!` error.
> - Avoid including text entries in the cells that `SUMPRODUCT` will process. The function treats text entries as zeros which may skew your results.
> - Use absolute cell references if you plan to copy or move your `SUMPRODUCT` formula. This ensures that the correct cells are always referenced.
> - Always check for errors in your data before applying the `SUMPRODUCT` function. The function will return an error if an error is present in any of the cells in the array.

### Usage

A few examples using the SUMPRODUCT function.

```
SUMPRODUCT(A2:A6, B2:B6) returns the sum of the products of each pair of numbers in cells A2 through A6 and B2 through B6  
SUMPRODUCT([1, 2, 3], [4, 5, 6]) returns 32 (the sum of the products of each pair of numbers in the two arrays)  
SUMPRODUCT(A2:C6, D2:F6) returns the sum of the products of each set of three corresponding numbers in the two ranges  
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
        "Quantity",
        "Revenue"
    ],
    [
        "Laptops",
        800,
        5,
        "=SUMPRODUCT(B2:B4,C2:C4)"
    ],
    [
        "Tablets",
        300,
        8
    ],
    [
        "Phones",
        600,
        12
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
        "Quantity",
        "Revenue"
    ],
    [
        "Laptops",
        800,
        5,
        "=SUMPRODUCT(B2:B4,C2:C4)"
    ],
    [
        "Tablets",
        300,
        8
    ],
    [
        "Phones",
        600,
        12
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
        "Quantity",
        "Revenue"
    ],
    [
        "Laptops",
        800,
        5,
        "=SUMPRODUCT(B2:B4,C2:C4)"
    ],
    [
        "Tablets",
        300,
        8
    ],
    [
        "Phones",
        600,
        12
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
        "Quantity",
        "Revenue"
    ],
    [
        "Laptops",
        800,
        5,
        "=SUMPRODUCT(B2:B4,C2:C4)"
    ],
    [
        "Tablets",
        300,
        8
    ],
    [
        "Phones",
        600,
        12
    ]
]
            }]
        });
    }
}
```

