title: STDEVP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STDEVP function in Jspreadsheet

# STDEVP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `STDEVP` function in Jspreadsheet Formulas Pro is a tool that computes the standard deviation of a whole data set, which could be a population. This function includes all sorts of values in the data set, such as numbers, text, and logical values (True/False). The standard deviation is a measure of how spread out the numbers in a data set are. By using `STDEVP`, you can determine the degree of variation or dispersion in your data within Jspreadsheet.

## Documentation

Calculates the standard deviation of an entire population, including text and logical values.

### Category

Statistical

### Syntax

STDEVP(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value in the population. Can be a number, text, or logical value. |
| `valueN` | Optional. Additional values in the population. Can be a number, text, or logical value. |


### Behavior

The `STDEVP` function in spreadsheets calculates the standard deviation of a population based on the entire population given as arguments. Here's how it handles different types of inputs:

- Numbers: It includes these in the standard deviation calculation.
- Booleans: These are coerced to numbers (`TRUE` becomes `1` and `FALSE` becomes `0`), and then included in the calculation.
- Text: This is ignored in the calculation.
- Empty cells: These are also ignored in the calculation.
- Error values: If any cell in the range contains an error, `STDEVP` returns an error.
- Logical values and text representations of numbers that you type directly into the list of arguments are counted.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs if no numbers are supplied as arguments. Since the standard deviation requires at least one number, a `#DIV/0!` error is returned when there are no numbers to calculate. |
| #VALUE! | This error occurs if any of the arguments provided directly to the function are text which cannot be interpreted as numbers. |
| #N/A | This error occurs if any cell in the given range is `#N/A`. |

### Best practices

> - Always ensure that the data set you are using with `STDEVP` function represents an entire population. If your data represents a sample of the population, instead use functions that estimate standard deviation, like `STDEV.S`.
> - Be careful with text and error values in your data set. While `STDEVP` will ignore text values, it will return an error if any cell in the range contains an error.
> - If your data set contains logical values that you want to be interpreted as numbers, ensure they are actual numbers and not text representations of those logical values.
> - Remember that `STDEVP` assumes that its arguments constitute the entire population. To calculate standard deviation for a sample of the population, use the `STDEVS` function.

### Usage

A few examples using the STDEVP function.

```
STDEVP(2, "hello", TRUE, 8, "world")  
STDEVP(A1:A5)  
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
        "Population Data",
        "Values",
        "Standard Deviation"
    ],
    [
        "Sample 1",
        12,
        "=STDEVP(B2:B6)"
    ],
    [
        "Sample 2",
        15
    ],
    [
        "Sample 3",
        8
    ],
    [
        "Sample 4",
        20
    ],
    [
        "Sample 5",
        10
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
        "Population Data",
        "Values",
        "Standard Deviation"
    ],
    [
        "Sample 1",
        12,
        "=STDEVP(B2:B6)"
    ],
    [
        "Sample 2",
        15
    ],
    [
        "Sample 3",
        8
    ],
    [
        "Sample 4",
        20
    ],
    [
        "Sample 5",
        10
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
        "Population Data",
        "Values",
        "Standard Deviation"
    ],
    [
        "Sample 1",
        12,
        "=STDEVP(B2:B6)"
    ],
    [
        "Sample 2",
        15
    ],
    [
        "Sample 3",
        8
    ],
    [
        "Sample 4",
        20
    ],
    [
        "Sample 5",
        10
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
        "Population Data",
        "Values",
        "Standard Deviation"
    ],
    [
        "Sample 1",
        12,
        "=STDEVP(B2:B6)"
    ],
    [
        "Sample 2",
        15
    ],
    [
        "Sample 3",
        8
    ],
    [
        "Sample 4",
        20
    ],
    [
        "Sample 5",
        10
    ]
]
            }]
        });
    }
}
```

