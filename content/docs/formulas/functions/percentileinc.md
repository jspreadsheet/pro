title: PERCENTILE.INC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTILE.INC function in Jspreadsheet

# PERCENTILE.INC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERCENTILE.INC` function in Jspreadsheet Formulas Pro is a helpful tool used to determine the k-th percentile of values within a specified range. The value of k can range between 0 and 1, inclusive. This means if you want to find the 90th percentile, you would use k=0.90. This function helps to understand the distribution of data in a given range by providing the value below which a given percentage falls.

## Documentation

Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive.

### Category

Statistical

### Syntax

PERCENTILE.INC(array, k)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `k` | The percentile to return, expressed as a decimal between 0 and 1, inclusive. |


### Behavior

The `PERCENTILE.INC` function in spreadsheets calculates the kth percentile of values in a range, where k is in the range 0..1, inclusive. If the array or reference contains no numbers, `PERCENTILE.INC` returns the #NUM! error value. 

- If the array contains empty cells, those are ignored.
- If the array contains text, those cells are ignored.
- If the array contains booleans, they are treated as 1s (for TRUE) and 0s (for FALSE).
- If k is nonnumeric, `PERCENTILE.INC` returns the #VALUE! error value.
- If k is less than 0 or if it is more than 1, `PERCENTILE.INC` returns the #NUM! error value.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs if the array or reference does not contain any numbers, or if the value of k is less than 0 or more than 1. |
| #VALUE! | Happens when the given k value is non-numeric. |

### Best practices

> - Always ensure that the array or reference you provide to `PERCENTILE.INC` contains numeric values. If it contains text, errors, or simply empty cells, it might not provide the expected results.
> - The value of k should always be between 0 and 1 (inclusive). Ensure that the k value you provide is within this range to avoid #NUM! errors.
> - Understand that `PERCENTILE.INC` considers TRUE as 1 and FALSE as 0 when dealing with Boolean values.
> - Remember that `PERCENTILE.INC` performs an ascending order sort. Keep this in mind when interpreting results, especially when the data set has a significant number of duplicate values.

### Usage

A few examples using the PERCENTILE.INC function.

```
PERCENTILE.INC(A1:A10,0.9) returns the value at the 90th percentile in the range A1 through A10  
PERCENTILE.INC(B1:B5,0.8) returns the value at the 80th percentile in the range B1 through B5  
PERCENTILE.INC(C1:C100,0.99) returns the value at the 99th percentile in the range C1 through C100  
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
        95
    ],
    [
        "Eve",
        88
    ],
    [
        "90th Percentile",
        "=PERCENTILE.INC(B2:B6,0.9)"
    ],
    [
        "75th Percentile",
        "=PERCENTILE.INC(B2:B6,0.75)"
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
        95
    ],
    [
        "Eve",
        88
    ],
    [
        "90th Percentile",
        "=PERCENTILE.INC(B2:B6,0.9)"
    ],
    [
        "75th Percentile",
        "=PERCENTILE.INC(B2:B6,0.75)"
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
        95
    ],
    [
        "Eve",
        88
    ],
    [
        "90th Percentile",
        "=PERCENTILE.INC(B2:B6,0.9)"
    ],
    [
        "75th Percentile",
        "=PERCENTILE.INC(B2:B6,0.75)"
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
        95
    ],
    [
        "Eve",
        88
    ],
    [
        "90th Percentile",
        "=PERCENTILE.INC(B2:B6,0.9)"
    ],
    [
        "75th Percentile",
        "=PERCENTILE.INC(B2:B6,0.75)"
    ]
]
            }]
        });
    }
}
```

