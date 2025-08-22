title: MEDIAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MEDIAN function in Jspreadsheet

# MEDIAN function

`PRO`{.jtag}

The `MEDIAN` function in Jspreadsheet Formulas Pro is used to find the middle value in a set of numbers. When you provide a range of numbers to this function, it sorts them in ascending order and returns the number that falls exactly in the middle. If the total number of values is even, it finds the average of the two middle numbers. This function is especially useful in providing a central tendency of your data, which reduces the impact of outliers.

## Documentation

Returns the median value in a range of numbers.

### Category

Statistical

### Syntax

MEDIAN(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers that you want to find the median value for. |
| `[numberN]` | Optional. Additional numbers or ranges of numbers that you want to find the median value for. You can specify up to 255 arguments. |


### Behavior

The 'MEDIAN' function in spreadsheets is used to find the median, or the middle value, in a data set. It arranges the numbers in order and identifies the middle value. If the data set has an even number of observations, the function returns the average of the two middle numbers. 

- If the data set includes empty cells, the function will ignore these and only consider numerical data. 
- If the data set includes text or boolean values, these will be ignored as well. However, if the function is directly given a boolean value, TRUE is treated as 1 and FALSE as 0.
- If the data set includes error values, the function will return an error. 
- If the function is given no arguments, it will return an error. 
- If all the values in the data set are text, the function will return an error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error occurs when the function is given no arguments. |
| #NUM! | This error occurs when the function is given a dataset with no numerical values. |
| #N/A | This error occurs when the function is used in an array formula, and there are not enough values in the array to return a result. |

### Best Practices

> - When using the 'MEDIAN' function, it is important to ensure that the data set only includes numerical data. Text or boolean values will not result in an error, but they will be ignored, which could skew the results. 
> - It is also important to make sure that there are no error values in the data set, as this will cause the function to return an error. 
> - Be careful when using the function with arrays. If there are not enough values in the array to return a result, the function will return an error. 
> - Always check the result of the 'MEDIAN' function. If the data set has an even number of observations, the function will return the average of the two middle numbers, which may not be a value that actually appears in the data set.

### Usage

A few examples using the MEDIAN function.

```
MEDIAN(A1:A10) returns the median value in the range A1:A10  
MEDIAN(10, 20, 30) returns the number 20, which is the median value among the arguments  
MEDIAN(B1:B5, C1:C5) returns the median value between the two ranges B1:B5 and C1:C5.  
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
        "Student",
        "Test Score"
    ],
    [
        "Alice",
        85
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Median Score",
        "=MEDIAN(B2:B5)"
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
        "Student",
        "Test Score"
    ],
    [
        "Alice",
        85
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Median Score",
        "=MEDIAN(B2:B5)"
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
        "Student",
        "Test Score"
    ],
    [
        "Alice",
        85
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Median Score",
        "=MEDIAN(B2:B5)"
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
        "Student",
        "Test Score"
    ],
    [
        "Alice",
        85
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ],
    [
        "David",
        88
    ],
    [
        "Median Score",
        "=MEDIAN(B2:B5)"
    ]
]
            }]
        });
    }
}
```

