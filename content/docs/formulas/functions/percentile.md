title: PERCENTILE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTILE function in Jspreadsheet

# PERCENTILE function

`PRO`{.jtag}

The `PERCENTILE` function in Jspreadsheet Formulas Pro is a useful tool for analyzing a set of data. It gives you the k-th percentile of a set of values, where k can be any value from 0 to 1. This means, if you want to know what value falls at, say, the 25% mark of your data set, you would use this function. However, if your data set is small, or if you're looking for the absolute minimum or maximum values (k=0 or k=1), it's better to use the PERCENTILE.INC function.

## Documentation

Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive. If the data set has a small sample size or if k = 0 or k = 1, use PERCENTILE.INC instead.

### Category

Compatibility

### Syntax

PERCENTILE(array, k)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `k` | The percentile to return, expressed as a decimal between 0 and 1, inclusive. |


### Behavior

The 'PERCENTILE' function in spreadsheets calculates the k-th percentile of values in a range. You can use this function to establish a threshold of acceptance. For instance, you may decide to give a bonus to all salespeople who have sales above the 90th percentile. 

1. **Empty cells:** The 'PERCENTILE' function ignores empty cells in the range provided. 

2. **Text:** If there are cells with text data, the 'PERCENTILE' function will return an error.

3. **Booleans:** Boolean values are taken as 0 (False) or 1 (True).

4. **Errors:** If any cell in the range provided has an error, the 'PERCENTILE' function will also return an error.

5. **Non-Numerical Values:** The function only works with numerical values. If the range includes non-numerical values, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs when the supplied array is empty, or the supplied k argument is less than 0 or greater than 1. |
| #VALUE! | Occurs if any of the cells in the supplied array contain non-numeric values. |
| #DIV/0! | Occurs if the percentile that you want to find is not between 0 and 1 (inclusive). |

### Best practices

> - Always ensure that the range provided contains only numerical values. Any non-numeric value will result in an error.
> - Be aware that the 'PERCENTILE' function will ignore any empty cells in the given range.
> - Remember that the 'k' value for the percentile must be between 0 and 1, inclusive. 
> - If your data might contain errors, consider using error handling functions to prevent 'PERCENTILE' from returning an error.

### Usage

A few examples using the PERCENTILE function.

```
PERCENTILE(A1:A10,0.9) returns the value at the 90th percentile in the range A1 through A10  
PERCENTILE(B1:B5,0.8) returns the value at the 80th percentile in the range B1 through B5  
PERCENTILE(C1:C100,0.99) returns the value at the 99th percentile in the range C1 through C100  
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
        "Eve",
        95
    ],
    [
        "Frank",
        82
    ],
    [
        "Grace",
        90
    ],
    [
        "90th Percentile:",
        "=PERCENTILE(B2:B8,0.9)"
    ],
    [
        "75th Percentile:",
        "=PERCENTILE(B2:B8,0.75)"
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
        "Eve",
        95
    ],
    [
        "Frank",
        82
    ],
    [
        "Grace",
        90
    ],
    [
        "90th Percentile:",
        "=PERCENTILE(B2:B8,0.9)"
    ],
    [
        "75th Percentile:",
        "=PERCENTILE(B2:B8,0.75)"
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
        "Eve",
        95
    ],
    [
        "Frank",
        82
    ],
    [
        "Grace",
        90
    ],
    [
        "90th Percentile:",
        "=PERCENTILE(B2:B8,0.9)"
    ],
    [
        "75th Percentile:",
        "=PERCENTILE(B2:B8,0.75)"
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
        "Eve",
        95
    ],
    [
        "Frank",
        82
    ],
    [
        "Grace",
        90
    ],
    [
        "90th Percentile:",
        "=PERCENTILE(B2:B8,0.9)"
    ],
    [
        "75th Percentile:",
        "=PERCENTILE(B2:B8,0.75)"
    ]
]
            }]
        });
    }
}
```

