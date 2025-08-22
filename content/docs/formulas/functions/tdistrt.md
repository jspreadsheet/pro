title: T.DIST.RT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the T.DIST.RT function in Jspreadsheet

# T.DIST.RT function

`PRO`{.jtag}

The `T.DIST.RT` function in Jspreadsheet Formulas Pro is a statistical tool that gives you the right-tailed Student's t-distribution. In simple terms, it helps you understand the likelihood of a particular value occurring in a set of data. This function is particularly useful when you're working with small data samples and you want to make predictions or draw conclusions about the data. It's a critical tool for statistical analysis within Jspreadsheet.

## Documentation

Returns the right-tailed Student's t-distribution.

### Category

Statistical

### Syntax

T.DIST.RT(x, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The numeric value at which to evaluate the distribution. |
| `degrees_freedom` | The number of degrees of freedom. |


### Behavior

The 'T.DIST.RT' function in a spreadsheet calculates the right-tailed Student's T-distribution. The function takes in two arguments: x, which is the numeric value at which to evaluate the distribution, and degrees_freedom, which is the number of degrees of freedom. 

1. If the cell for the x argument is empty, the function will return an error.
2. If the cell for the degrees_freedom argument is empty, the function will also return an error.
3. The function will return an error if the given value for degrees_freedom is less than 1.
4. When a text value is provided for either of the arguments, the function will return an error.
5. In case of non-numeric values, the function returns an error.
6. Booleans are considered as 0 (False) and 1 (True) respectively.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the given degrees of freedom is less than 1, or if the x argument is non-numeric. |
| #VALUE! | Occurs when a non-numeric value is provided for either argument, or if a cell is empty. |
| #DIV/0! | Occurs when the degrees of freedom is zero, as it would result in division by zero. |

### Best practices

> - Always ensure that the degrees of freedom is greater than or equal to 1 to avoid the #NUM! error.
> - Provide numeric values for both arguments to avoid the #VALUE! error.
> - Avoid using boolean values as arguments as they are considered as numeric 0 (False) and 1 (True), and might not provide the expected result.
> - Be aware that the T.DIST.RT function only calculates the right-tailed T-distribution. If you need a two-tailed distribution or a left-tailed distribution, consider using the T.DIST.2T or T.DIST functions respectively.

### Usage

A few examples using the T.DIST.RT function.

```
T.DIST.RT(1.5, 10)  
T.DIST.RT(2, 8)  
T.DIST.RT(1, 5)  
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
        "t-statistic",
        "degrees of freedom",
        "right-tail probability"
    ],
    [
        1.5,
        10,
        "=T.DIST.RT(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.RT(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.RT(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.RT(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "right-tail probability"
    ],
    [
        1.5,
        10,
        "=T.DIST.RT(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.RT(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.RT(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.RT(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "right-tail probability"
    ],
    [
        1.5,
        10,
        "=T.DIST.RT(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.RT(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.RT(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.RT(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "right-tail probability"
    ],
    [
        1.5,
        10,
        "=T.DIST.RT(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.RT(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.RT(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.RT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

