title: QUARTILE.INC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the QUARTILE.INC function in Jspreadsheet

# QUARTILE.INC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `QUARTILE.INC` is a function in Jspreadsheet Formulas Pro that computes the inclusive quartile of a dataset. This function is useful for separating the lowest 25% of the values from the highest 75%. It uses a slightly different calculation method compared to the standard `QUARTILE` function. Using this function, you can easily understand and analyze the distribution of your data.

## Documentation

Calculates the inclusive quartile of a dataset, which is a value that separates the lowest 25% from the highest 75% of values. This function uses a slightly different calculation than the QUARTILE function.

### Category

Statistical

### Syntax

QUARTILE.INC(array, quart)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data for which to determine the quartile. |
| `quart` | The quartile to return. 1 returns the minimum value, 2 returns the value at the first quartile, 3 returns the value at the median (second quartile), and 4 returns the value at the third quartile. |


### Behavior

The `QUARTILE.INC` function in a spreadsheet calculates the quartile (each of four equal groups) inclusive of a data set based on percentile values from 0 to 1, inclusive. 

Here's how it handles different values:
- Empty cells: Any empty cells are ignored by the `QUARTILE.INC` function.
- Text: If the array or cell reference points to a text, the function will return a `#VALUE!` error.
- Booleans: Boolean values are treated as 1 (TRUE) and 0 (FALSE).
- Errors: If any cell in the dataset contains an error, the `QUARTILE.INC` function will return that error.
- Numbers: The `QUARTILE.INC` function operates on numeric values. Any non-numeric value will cause a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if any cell in the dataset contains a non-numeric value. |
| #NUM! | This error will appear if the quart value isn't an integer between 0 and 4. |
| #N/A | It will appear if the dataset is empty. |

### Best practices

> - Always make sure that your dataset only contains numeric values to avoid the `#VALUE!` error.
> - Ensure that the quart value you're trying to calculate is an integer between 0 and 4 inclusive, otherwise you'll get a `#NUM!` error.
> - Be careful with boolean values in your dataset, as they are treated as 1 (TRUE) and 0 (FALSE).
> - It's a good practice to clean your data and handle any possible errors before using the `QUARTILE.INC` function to get accurate results.

### Usage

A few examples using the QUARTILE.INC function.

```
QUARTILE.INC(A1:A10,2) returns the value at the first quartile (the value separating the lowest 25% of values from the highest 75%) for the range A1:A10 using the inclusive method  
QUARTILE.INC(B2:B20,3) returns the value at the median (the second quartile) for the range B2:B20 using the inclusive method  
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
        78
    ],
    [
        "Bob",
        85
    ],
    [
        "Carol",
        92
    ],
    [
        "David",
        67
    ],
    [
        "Eve",
        89
    ],
    [
        "Frank",
        74
    ],
    [
        "Grace",
        96
    ],
    [
        "Henry",
        83
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.INC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.INC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.INC(B2:B9,3)"
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
        78
    ],
    [
        "Bob",
        85
    ],
    [
        "Carol",
        92
    ],
    [
        "David",
        67
    ],
    [
        "Eve",
        89
    ],
    [
        "Frank",
        74
    ],
    [
        "Grace",
        96
    ],
    [
        "Henry",
        83
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.INC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.INC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.INC(B2:B9,3)"
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
        78
    ],
    [
        "Bob",
        85
    ],
    [
        "Carol",
        92
    ],
    [
        "David",
        67
    ],
    [
        "Eve",
        89
    ],
    [
        "Frank",
        74
    ],
    [
        "Grace",
        96
    ],
    [
        "Henry",
        83
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.INC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.INC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.INC(B2:B9,3)"
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
        78
    ],
    [
        "Bob",
        85
    ],
    [
        "Carol",
        92
    ],
    [
        "David",
        67
    ],
    [
        "Eve",
        89
    ],
    [
        "Frank",
        74
    ],
    [
        "Grace",
        96
    ],
    [
        "Henry",
        83
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.INC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.INC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.INC(B2:B9,3)"
    ]
]
            }]
        });
    }
}
```

