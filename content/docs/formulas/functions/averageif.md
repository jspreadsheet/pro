title: AVERAGEIF Function - Calculate Conditional Averages in Jspreadsheet
keywords: AVERAGEIF function, conditional average, filtered average calculation, criteria-based averaging, Excel-compatible functions, JavaScript spreadsheet functions, statistical analysis, data filtering, selective averaging, conditional statistics, data analysis
description: Calculate averages based on specific conditions using the AVERAGEIF function in Jspreadsheet. Perfect for analyzing subsets of data, filtering calculations by criteria, and computing selective averages in complex datasets.

# AVERAGEIF function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `AVERAGEIF` function in Jspreadsheet Formulas Pro is a tool that allows you to calculate the average of a group of cells within a specific range that meet a certain condition. For instance, you could use this function to find the average sales volume for a particular product, or the average score of a student in tests. The formula takes into account only those cells that fulfill the set criteria, before calculating the average. This makes it a powerful function for analyzing specific data within a larger dataset.

## Documentation

Returns the average (arithmetic mean) of all cells in a range that meet a specified criteria.

### Category

Statistical

### Syntax

AVERAGEIF(range, criteria, [average_range])

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of cells to be evaluated by the criteria. |
| `criteria` | The criteria used to determine which cells to include in the average. Can be a number, expression, cell reference, or text string. |
| `average_range` | Optional. The range of cells to be averaged. If omitted, the range parameter is also used as the average range. |


### Behavior

The `AVERAGEIF` function in a spreadsheet calculates the average of the cells specified by a given condition or criteria. Here's how it handles different contents:

1. **Empty cells**: Empty cells are ignored during the calculation.

2. **Text**: The function does not consider text when calculating the average. However, text can be used as a condition or criteria for the cells to be averaged.

3. **Booleans**: Boolean values are treated as numbers, with TRUE as 1 and FALSE as 0.

4. **Errors**: If any cell in the range has an error, the function will return an error.

5. **Non-number criteria**: Non-number criteria are enclosed in double-quotes. For example, text or dates should be given in double-quotes.

### Common Errors

|Error|Description|
|---|---|
|`#DIV/0!`|This error occurs if the criteria does not match any cell in the range, causing a division by zero.|
|`#VALUE!`|This error occurs when the criteria is a text string that is not enclosed in double quotes.|
|`#NAME?`|This error occurs when the spreadsheet does not recognize the text in the formula. For instance, if you misspelled `AVERAGEIF` as `AVERAGIF`.|

### Best practices

> 1. Always ensure your criteria is in the correct format. If you're using a text string or a date as the criteria, make sure it is enclosed in double quotes.
> 
> 2. Use absolute cell references if you want to copy your `AVERAGEIF` formula to other cells without changing the range.
> 
> 3. Avoid including error cells in your range to prevent the `AVERAGEIF` function from returning an error.
> 
> 4. Handle `#DIV/0!` errors by wrapping your `AVERAGEIF` function with the `IFERROR` function. This way you can display a friendlier message or a zero instead of the error.

### Usage

A few examples using the AVERAGEIF function.

```
AVERAGEIF(A1:A5, '>3')  
AVERAGEIF(B2:F2, 'red', B3:F5)  
AVERAGEIF(C2:C9, '<>0', D2:D9)  
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
        "Category",
        "Price",
        "Sales"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        45
    ],
    [
        "Phone",
        "Electronics",
        599,
        32
    ],
    [
        "Desk",
        "Furniture",
        299,
        18
    ],
    [
        "Chair",
        "Furniture",
        159,
        25
    ],
    [
        "Tablet",
        "Electronics",
        399,
        28
    ],
    [
        "",
        "",
        "Avg Electronics Price:",
        "=AVERAGEIF(B2:B6,\"Electronics\",C2:C6)"
    ],
    [
        "",
        "",
        "Avg High Sales:",
        "=AVERAGEIF(D2:D6,\">30\",C2:C6)"
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
        "Category",
        "Price",
        "Sales"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        45
    ],
    [
        "Phone",
        "Electronics",
        599,
        32
    ],
    [
        "Desk",
        "Furniture",
        299,
        18
    ],
    [
        "Chair",
        "Furniture",
        159,
        25
    ],
    [
        "Tablet",
        "Electronics",
        399,
        28
    ],
    [
        "",
        "",
        "Avg Electronics Price:",
        "=AVERAGEIF(B2:B6,\"Electronics\",C2:C6)"
    ],
    [
        "",
        "",
        "Avg High Sales:",
        "=AVERAGEIF(D2:D6,\">30\",C2:C6)"
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
        "Category",
        "Price",
        "Sales"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        45
    ],
    [
        "Phone",
        "Electronics",
        599,
        32
    ],
    [
        "Desk",
        "Furniture",
        299,
        18
    ],
    [
        "Chair",
        "Furniture",
        159,
        25
    ],
    [
        "Tablet",
        "Electronics",
        399,
        28
    ],
    [
        "",
        "",
        "Avg Electronics Price:",
        "=AVERAGEIF(B2:B6,\"Electronics\",C2:C6)"
    ],
    [
        "",
        "",
        "Avg High Sales:",
        "=AVERAGEIF(D2:D6,\">30\",C2:C6)"
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
        "Category",
        "Price",
        "Sales"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        45
    ],
    [
        "Phone",
        "Electronics",
        599,
        32
    ],
    [
        "Desk",
        "Furniture",
        299,
        18
    ],
    [
        "Chair",
        "Furniture",
        159,
        25
    ],
    [
        "Tablet",
        "Electronics",
        399,
        28
    ],
    [
        "",
        "",
        "Avg Electronics Price:",
        "=AVERAGEIF(B2:B6,\"Electronics\",C2:C6)"
    ],
    [
        "",
        "",
        "Avg High Sales:",
        "=AVERAGEIF(D2:D6,\">30\",C2:C6)"
    ]
]
            }]
        });
    }
}
```

