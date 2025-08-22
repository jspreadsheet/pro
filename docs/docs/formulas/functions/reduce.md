title: REDUCE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REDUCE function in Jspreadsheet

# REDUCE function



The `REDUCE` function in Jspreadheet Formulas Pro is used to simplify fractions to their lowest terms. You provide the fraction as an argument and the function will return it in its simplest form. This means that it divides both the numerator and denominator by their greatest common divisor. For example, if you use `REDUCE` on the fraction 8/12, it will return 2/3.

## Documentation

Returns the reduced form of a fraction.

### Category

Logical

### Syntax

REDUCE(initial_value, array, function)

| Parameter | Description |
| ----------- | ------------- |
| `initial_value` | The initial value of the accumulator. |
| `array` | The array of values to reduce. |
| `function` | The LAMBDA function to apply to each value in the array. |


### Behavior

The 'REDUCE' function in spreadsheets allows you to reduce an array or a range of values based on a binary function. The behavior of this function is dependent on the data types and the binary function provided. Here's how it generally behaves with different types of data:

- **Empty cells**: The 'REDUCE' function usually skips over empty cells, depending on the specific binary function used.
- **Text**: The behavior with text depends on the binary function. Some functions may convert text into numbers, while others may return an error.
- **Booleans**: Booleans are typically treated as numbers, with TRUE being equivalent to 1 and FALSE equivalent to 0.
- **Errors**: If any cell in the range contains an error, the 'REDUCE' function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the binary function provided cannot handle the data types in the range. For example, if the binary function expects numbers and encounters a text value. |
| #NAME? | This error is returned when the binary function provided is not recognized by the spreadsheet software. |
| #N/A | This error is returned when the range provided to the 'REDUCE' function is empty. |

### Best practices

> - Always ensure the binary function you provide can handle the data types in your range. If your range contains a mix of data types, consider using a function that can handle all of them or cleaning your data beforehand.
> - Be mindful of how booleans and empty cells are handled. Depending on your binary function, these may affect your result.
> - Handle errors gracefully. If your range may contain errors, consider using an error handling function to avoid getting an error from the 'REDUCE' function.
> - Test your 'REDUCE' function with a small range first. This can help you identify any issues with your binary function or data before applying it to a large range.

### Usage

A few examples using the REDUCE function.

```
REDUCE(0, [1, 2, 3, 4], MyLambdaFunction) returns the accumulated result of applying MyLambdaFunction to each element in the array.  
REDUCE(100, [10, 20, 30], AnotherLambda) returns the accumulated result of applying AnotherLambda to each element in the array starting from the initial value 100.  
REDUCE(1, [2, 3, 4], SomeOtherLambda) returns the accumulated result of applying SomeOtherLambda to each element in the array starting from the initial value 1.  
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Total Sales"
    ],
    [
        1000,
        1200,
        1500,
        1800,
        "=REDUCE(0, B1:E1, LAMBDA(acc,val,acc+val))"
    ],
    [
        800,
        950,
        1100,
        1300,
        "=REDUCE(0, B2:E2, LAMBDA(acc,val,acc+val))"
    ],
    [
        1200,
        1400,
        1600,
        2000,
        "=REDUCE(0, B3:E3, LAMBDA(acc,val,acc+val))"
    ],
    [
        "Product",
        "=REDUCE(1, B1:E1, LAMBDA(acc,val,acc*val))"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Total Sales"
    ],
    [
        1000,
        1200,
        1500,
        1800,
        "=REDUCE(0, B1:E1, LAMBDA(acc,val,acc+val))"
    ],
    [
        800,
        950,
        1100,
        1300,
        "=REDUCE(0, B2:E2, LAMBDA(acc,val,acc+val))"
    ],
    [
        1200,
        1400,
        1600,
        2000,
        "=REDUCE(0, B3:E3, LAMBDA(acc,val,acc+val))"
    ],
    [
        "Product",
        "=REDUCE(1, B1:E1, LAMBDA(acc,val,acc*val))"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Total Sales"
    ],
    [
        1000,
        1200,
        1500,
        1800,
        "=REDUCE(0, B1:E1, LAMBDA(acc,val,acc+val))"
    ],
    [
        800,
        950,
        1100,
        1300,
        "=REDUCE(0, B2:E2, LAMBDA(acc,val,acc+val))"
    ],
    [
        1200,
        1400,
        1600,
        2000,
        "=REDUCE(0, B3:E3, LAMBDA(acc,val,acc+val))"
    ],
    [
        "Product",
        "=REDUCE(1, B1:E1, LAMBDA(acc,val,acc*val))"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Total Sales"
    ],
    [
        1000,
        1200,
        1500,
        1800,
        "=REDUCE(0, B1:E1, LAMBDA(acc,val,acc+val))"
    ],
    [
        800,
        950,
        1100,
        1300,
        "=REDUCE(0, B2:E2, LAMBDA(acc,val,acc+val))"
    ],
    [
        1200,
        1400,
        1600,
        2000,
        "=REDUCE(0, B3:E3, LAMBDA(acc,val,acc+val))"
    ],
    [
        "Product",
        "=REDUCE(1, B1:E1, LAMBDA(acc,val,acc*val))"
    ]
]
            }]
        });
    }
}
```

