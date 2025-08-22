title: LARGE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LARGE function in Jspreadsheet

# LARGE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LARGE` function in Jspreadsheet Formulas Pro is a useful tool that helps you find the k-th largest value from a range or array of numbers. For instance, if you have a list of numbers and you want to find the third largest number, you can use this function. You just need to specify the range or array of numbers and the position of the largest value you want (k). The function will then return the k-th largest value from your specified range or array.

## Documentation

Returns the k-th largest value in a range or array of numbers.

### Category

Statistical

### Syntax

LARGE(array, k)

| Parameter | Description |
| ----------- | ------------- |
| `array` | An array or range of cells containing the values from which you want to find the k-th largest value. |
| `k` | The position (from largest) in the array or range that you want to return. For example, 1 returns the largest value, 2 returns the second-largest value, and so on. |


### Behavior

The `LARGE` function in spreadsheets is used to return the k-th largest value in a data set, where k is the function's second argument. 

- If the provided range of cells or array contains text, booleans, or empty cells, the `LARGE` function will ignore them and only consider numeric values. 
- If the array parameter does not contain any numeric values, the function will return a `#NUM!` error.
- If the k parameter provided is greater than the number of numeric values in the array or less than 1, the function will return a `#NUM!` error.
- The function handles array formulas. If you provide an array formula as an argument, the function will consider the results of this formula as its array.
- The function handles errors in the array. If one of the values in the array is an error, the `LARGE` function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the provided array does not contain any numeric values, or the k-th position provided is less than 1 or greater than the number of numeric values in the array |
| #VALUE! | Occurs if the k-th position provided is non-numeric |
| Error in the array | If one of the values in the array is an error, the `LARGE` function will return that error |

### Best practices

> - Always ensure that the k-th position provided is a positive integer and falls within the count of numeric values in the array.
> - Use the `LARGE` function with other functions like `ROW`, `INDEX`, and `MATCH` to find the k-th largest value in a range with specific conditions.
> - When handling a large dataset, try to avoid whole column references as it may slow down the spreadsheet's performance.
> - Double check your data set to make sure it doesn't contain any errors as the `LARGE` function will return that error if encountered.

### Usage

A few examples using the LARGE function.

```
LARGE(A1:A10, 1) returns the largest value in the range A1:A10  
LARGE(B1:B10, 3) returns the third-largest value in the range B1:B10  
LARGE([1,2,3,4,5], 2) returns the second-largest value in the array [1,2,3,4,5].  
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
        "Sales Rep",
        "Monthly Sales",
        "Top 3 Sales"
    ],
    [
        "Alice",
        15000,
        "=LARGE(B2:B6,1)"
    ],
    [
        "Bob",
        22000,
        "=LARGE(B2:B6,2)"
    ],
    [
        "Carol",
        18000,
        "=LARGE(B2:B6,3)"
    ],
    [
        "Dave",
        12000
    ],
    [
        "Eve",
        25000
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
        "Sales Rep",
        "Monthly Sales",
        "Top 3 Sales"
    ],
    [
        "Alice",
        15000,
        "=LARGE(B2:B6,1)"
    ],
    [
        "Bob",
        22000,
        "=LARGE(B2:B6,2)"
    ],
    [
        "Carol",
        18000,
        "=LARGE(B2:B6,3)"
    ],
    [
        "Dave",
        12000
    ],
    [
        "Eve",
        25000
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
        "Sales Rep",
        "Monthly Sales",
        "Top 3 Sales"
    ],
    [
        "Alice",
        15000,
        "=LARGE(B2:B6,1)"
    ],
    [
        "Bob",
        22000,
        "=LARGE(B2:B6,2)"
    ],
    [
        "Carol",
        18000,
        "=LARGE(B2:B6,3)"
    ],
    [
        "Dave",
        12000
    ],
    [
        "Eve",
        25000
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
        "Sales Rep",
        "Monthly Sales",
        "Top 3 Sales"
    ],
    [
        "Alice",
        15000,
        "=LARGE(B2:B6,1)"
    ],
    [
        "Bob",
        22000,
        "=LARGE(B2:B6,2)"
    ],
    [
        "Carol",
        18000,
        "=LARGE(B2:B6,3)"
    ],
    [
        "Dave",
        12000
    ],
    [
        "Eve",
        25000
    ]
]
            }]
        });
    }
}
```

