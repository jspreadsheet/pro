title: FREQUENCY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FREQUENCY function in Jspreadsheet

# FREQUENCY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FREQUENCY` function in Jspreadsheet Formulas Pro is a tool that allows you to calculate how frequently specific values appear within a set range of values. This function then provides a vertical array of numbers as its output. In simpler terms, it's like a digital tally chart that counts how many times each value shows up in your selected range. This can be extremely helpful in data analysis, such as finding out the most common score in a class test or the most popular product in a sales report.

## Documentation

Calculates how often values occur within a range of values, and then returns a vertical array of numbers.

### Category

Statistical

### Syntax

FREQUENCY(data_array, bins_array)

| Parameter | Description |
| ----------- | ------------- |
| `data_array` | An array or range of values for which you want to count frequencies. |
| `bins_array` | An array or range of intervals into which you want to group the values in 'data_array'. |


### Behavior

The `FREQUENCY` function in spreadsheets is used to calculate the frequency of values within a specified range or interval. Here's how it generally behaves:

- If a cell in the data array is blank or contains text or a logical value, the function ignores it.
- If a cell in the bins array is blank or contains text or a logical value, the function treats it as zero.
- FREQUENCY returns an array of zero values if no values in the data array correspond to a bin in the bins array.
- The function always returns a vertical array.
- FREQUENCY counts values in the data array that are within the limits of each bin range.
- The function returns a value that is equal to the number of elements in the bins array plus one, with the extra element at the end representing the count of values outside the range of bins.
- If there are no elements in the bins array, the function returns the number of values in the data array.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error occurs if the bins array is empty. |
| #N/A | This error occurs if the function is not entered as an array formula. |
| #NUM! | This error occurs if any value in the bins array is less than zero. |

### Best practices

> - Always enter the `FREQUENCY` function as an array formula. 
> - The bins specified should always be in ascending order, as the function checks for values less than or equal to the bin number.
> - If you want to count how often values occur within a range of values, you should sort the data array before using the `FREQUENCY` function.
> - Make sure the bins array is not empty to avoid #VALUE! error.

### Usage

A few examples using the FREQUENCY function.

```
FREQUENCY(A2:A10,B2:B5)  
FREQUENCY(A2:A10,C2:C6)  
FREQUENCY(A2:A10,D2:D7)  
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
        "Test Scores",
        "Bins",
        "Frequency"
    ],
    [
        85,
        70,
        "=FREQUENCY(A2:A8,B2:B5)"
    ],
    [
        92,
        80,
        ""
    ],
    [
        78,
        90,
        ""
    ],
    [
        95,
        100,
        ""
    ],
    [
        73,
        "",
        ""
    ],
    [
        88,
        "",
        ""
    ],
    [
        91,
        "",
        ""
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
        "Test Scores",
        "Bins",
        "Frequency"
    ],
    [
        85,
        70,
        "=FREQUENCY(A2:A8,B2:B5)"
    ],
    [
        92,
        80,
        ""
    ],
    [
        78,
        90,
        ""
    ],
    [
        95,
        100,
        ""
    ],
    [
        73,
        "",
        ""
    ],
    [
        88,
        "",
        ""
    ],
    [
        91,
        "",
        ""
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
        "Test Scores",
        "Bins",
        "Frequency"
    ],
    [
        85,
        70,
        "=FREQUENCY(A2:A8,B2:B5)"
    ],
    [
        92,
        80,
        ""
    ],
    [
        78,
        90,
        ""
    ],
    [
        95,
        100,
        ""
    ],
    [
        73,
        "",
        ""
    ],
    [
        88,
        "",
        ""
    ],
    [
        91,
        "",
        ""
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
        "Test Scores",
        "Bins",
        "Frequency"
    ],
    [
        85,
        70,
        "=FREQUENCY(A2:A8,B2:B5)"
    ],
    [
        92,
        80,
        ""
    ],
    [
        78,
        90,
        ""
    ],
    [
        95,
        100,
        ""
    ],
    [
        73,
        "",
        ""
    ],
    [
        88,
        "",
        ""
    ],
    [
        91,
        "",
        ""
    ]
]
            }]
        });
    }
}
```

