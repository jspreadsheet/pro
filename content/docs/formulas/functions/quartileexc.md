title: QUARTILE.EXC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the QUARTILE.EXC function in Jspreadsheet

# QUARTILE.EXC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `QUARTILE.EXC` function in Jspreadsheet Formulas Pro is used to calculate the exclusive quartile in a given dataset. This value essentially separates the bottom 25% of values from the top 75%. However, it's worth noting that it uses a slightly different computation method compared to the standard `QUARTILE` function. This tool is particularly beneficial for statistical analysis and data processing.

## Documentation

Calculates the exclusive quartile of a dataset, which is a value that separates the lowest 25% from the highest 75% of values. This function uses a slightly different calculation than the QUARTILE function.

### Category

Statistical

### Syntax

QUARTILE.EXC(array, quart)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data for which to determine the quartile. |
| `quart` | The quartile to return. 1 returns the minimum value, 2 returns the value at the first quartile, 3 returns the value at the median (second quartile), and 4 returns the value at the third quartile. |


### Behavior

The `QUARTILE.EXC` function in spreadsheets is used to return the quartile of a data set, excluding 0 and 4. The data set must be numeric. The function handles various inputs in the following ways:

- **Numeric values**: The function calculates the quartile based on these values.
- **Empty cells**: These are ignored by the function.
- **Text**: If the data set contains text, the function ignores it.
- **Booleans**: If the function encounters booleans, it will convert TRUE to 1 and FALSE to 0.
- **Errors**: If there's an error in the data set, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is returned when the `quart` argument is less than 0 or more than 4. |
| #DIV/0! | This error is returned when the array or reference argument contains less than 4 data points. |
| #VALUE! | This error is returned when the `quart` argument is non-numeric. |
| #N/A | This error is returned when the `quart` argument is not an integer. |

### Best practices

> - Always ensure that the `quart` argument is an integer between 1 and 3. The `QUARTILE.EXC` function does not accept 0 or 4 as values for the `quart` argument.
> - Make sure that your data set has more than four data points. If not, the function will return a #DIV/0! error.
> - Remember that this function ignores text and empty cells. If you want to include these in your data set, you should convert them to numeric values.
> - Be aware that this function will return an error if there is an error within your data set. Always check your data set for errors before using this function.

### Usage

A few examples using the QUARTILE.EXC function.

```
QUARTILE.EXC(A1:A10,2) returns the value at the first quartile (the value separating the lowest 25% of values from the highest 75%) for the range A1:A10 using the exclusive method  
QUARTILE.EXC(B2:B20,3) returns the value at the median (the second quartile) for the range B2:B20 using the exclusive method  
QUARTILE.EXC(C1:C100,4) returns the value at the third quartile (the value separating the lowest 75% of values from the highest 25%) for the range C1:C100 using the exclusive method  
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
        88
    ],
    [
        "Frank",
        73
    ],
    [
        "Grace",
        95
    ],
    [
        "Henry",
        81
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.EXC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.EXC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.EXC(B2:B9,3)"
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
        88
    ],
    [
        "Frank",
        73
    ],
    [
        "Grace",
        95
    ],
    [
        "Henry",
        81
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.EXC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.EXC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.EXC(B2:B9,3)"
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
        88
    ],
    [
        "Frank",
        73
    ],
    [
        "Grace",
        95
    ],
    [
        "Henry",
        81
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.EXC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.EXC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.EXC(B2:B9,3)"
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
        88
    ],
    [
        "Frank",
        73
    ],
    [
        "Grace",
        95
    ],
    [
        "Henry",
        81
    ],
    [
        "Q1 (25th percentile)",
        "=QUARTILE.EXC(B2:B9,1)"
    ],
    [
        "Q2 (Median)",
        "=QUARTILE.EXC(B2:B9,2)"
    ],
    [
        "Q3 (75th percentile)",
        "=QUARTILE.EXC(B2:B9,3)"
    ]
]
            }]
        });
    }
}
```

