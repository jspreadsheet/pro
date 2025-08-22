title: Z.TEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the Z.TEST function in Jspreadsheet

# Z.TEST function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `Z.TEST` function in Jspreadsheet Formulas Pro is a statistical tool that gives you the likelihood of a one-tailed, two-sample z-test. In simpler terms, it helps you compare two sets of data to see if they are different from each other. This function is useful when you need to analyze and make decisions based on your data, such as determining if a change in a product or service has had a significant impact. You input your two data sets into the function, and it returns a probability value, with a smaller value indicating a higher likelihood that the two sets are different.

## Documentation

Returns the probability of a one-tailed, two-sample z-test.

### Category

Statistical

### Syntax

Z.TEST(array1, [array2], [sigma])

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first set of data. |
| `array2` | Optional. The second set of data. If omitted, array1 is used for both samples. |
| `sigma` | Optional. The population (known) standard deviation. If omitted, the sample standard deviation is used instead. |


### Behavior

The 'Z.TEST' function in spreadsheets calculates the one-tailed P-value of a z-test. This function requires an array or range of data points, a value to test against, and optionally, a standard deviation. Here's how it handles different scenarios:

- **Empty Cells**: If there are empty cells in the range, 'Z.TEST' will ignore them.
- **Text**: If the range includes cells with text, 'Z.TEST' will return a #VALUE! error.
- **Booleans**: Boolean values are also not accepted by the 'Z.TEST' function. Inclusion of such will result in a #VALUE! error.
- **Errors**: If the range includes cells with errors, 'Z.TEST' will return the same error.
- **Specific Value**: If the specific value to test against is not provided, 'Z.TEST' will return a #N/A error.
- **Standard Deviation**: If the standard deviation is not provided, 'Z.TEST' will calculate it from the given data.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function returns this error when the given range includes cells with non-numeric values like text or boolean. |
| #N/A | The function returns this error when the specific value to test against is not provided. |
| #DIV/0! | The function returns this error when the standard deviation of the data set is zero. |

### Best practices

> - Always ensure that the data range only contains numeric values to avoid #VALUE! error.
> - Always provide the value to test against to avoid #N/A error.
> - Be cautious when excluding the standard deviation. Without it, 'Z.TEST' will compute the standard deviation from the given data, which might not always produce desired results.
> - Use 'Z.TEST' to find the one-tailed P-value. If you need the two-tailed P-value, you can simply subtract the result of 'Z.TEST' from 1.

### Usage

A few examples using the Z.TEST function.

```
Z.TEST(A1:A5, B1:B5, 1)  
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
        "Sample 1",
        "Sample 2",
        "Z-Test Result"
    ],
    [
        85,
        78,
        "=Z.TEST(A2:A6,B2:B6,5)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        90,
        79
    ],
    [
        87,
        83
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
        "Sample 1",
        "Sample 2",
        "Z-Test Result"
    ],
    [
        85,
        78,
        "=Z.TEST(A2:A6,B2:B6,5)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        90,
        79
    ],
    [
        87,
        83
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
        "Sample 1",
        "Sample 2",
        "Z-Test Result"
    ],
    [
        85,
        78,
        "=Z.TEST(A2:A6,B2:B6,5)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        90,
        79
    ],
    [
        87,
        83
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
        "Sample 1",
        "Sample 2",
        "Z-Test Result"
    ],
    [
        85,
        78,
        "=Z.TEST(A2:A6,B2:B6,5)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        90,
        79
    ],
    [
        87,
        83
    ]
]
            }]
        });
    }
}
```

