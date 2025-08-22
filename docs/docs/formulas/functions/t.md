title: T function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the T function in Jspreadsheet

# T function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `T` function in Jspreadsheet Formulas Pro is a mathematical tool that is used to calculate the one-tailed probability of a Student's t-distribution. This calculation is based on the probability density function (pdf), which is defined by the degrees of freedom. In essence, it provides a way to interpret statistical data by assigning probabilities to different outcomes. This function is particularly useful in data analysis and hypothesis testing.

## Documentation

Returns the one-tailed probability of a Student's t-distribution where the probability density function (pdf) is defined by the degrees of freedom.

### Category

Text

### Syntax

T(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value to check if it's text. |


### Behavior

The 'T' function in spreadsheets is used to return the text referred to by a specified value. If the value is not a text, the function returns an empty string. Here's how it handles different types of inputs:

- **Empty cells**: The 'T' function returns an empty string when the cell is empty.
- **Text**: If the cell contains text, 'T' function returns the same text.
- **Booleans**: If the cell contains a boolean value (TRUE or FALSE), 'T' function returns an empty string.
- **Numbers**: If the cell contains a numerical value, 'T' function returns an empty string.
- **Errors**: If the cell contains an error, 'T' function returns the same error.

### Common Errors

| Error               | Description                                         |
|---------------------|-----------------------------------------------------|
| #NAME?              | Occurs if the formula name is spelled incorrectly.  |
| #VALUE!             | Occurs if the supplied argument is not valid.       |
| #N/A                | Occurs if the supplied argument is not available.   |

### Best practices

> - Always make sure that the cell you are referring to exists. If the cell doesn't exist, the 'T' function will return an error.
> - Use the 'T' function when it's necessary to distinguish between text and other values. This is particularly useful when working with mixed data types.
> - Be aware that 'T' function is case sensitive. It treats lowercase and uppercase texts as different values.
> - If you are not sure whether a cell contains a text or not, use the 'ISTEXT' function before applying the 'T' function. This can prevent potential errors in your formulas.

### Usage

A few examples using the T function.

```
T("Hello") returns "Hello"  
T(123) returns ""  
T(A1) returns the text value if A1 contains text, or an empty string if it doesn't.  
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
        "Product Name",
        "Price",
        "Text Only"
    ],
    [
        "Laptop",
        999,
        "=T(A2)"
    ],
    [
        "ABC123",
        "",
        "=T(A3)"
    ],
    [
        500,
        "",
        "=T(A4)"
    ],
    [
        "Mouse",
        25,
        "=T(A5)"
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
        "Product Name",
        "Price",
        "Text Only"
    ],
    [
        "Laptop",
        999,
        "=T(A2)"
    ],
    [
        "ABC123",
        "",
        "=T(A3)"
    ],
    [
        500,
        "",
        "=T(A4)"
    ],
    [
        "Mouse",
        25,
        "=T(A5)"
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
        "Product Name",
        "Price",
        "Text Only"
    ],
    [
        "Laptop",
        999,
        "=T(A2)"
    ],
    [
        "ABC123",
        "",
        "=T(A3)"
    ],
    [
        500,
        "",
        "=T(A4)"
    ],
    [
        "Mouse",
        25,
        "=T(A5)"
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
        "Product Name",
        "Price",
        "Text Only"
    ],
    [
        "Laptop",
        999,
        "=T(A2)"
    ],
    [
        "ABC123",
        "",
        "=T(A3)"
    ],
    [
        500,
        "",
        "=T(A4)"
    ],
    [
        "Mouse",
        25,
        "=T(A5)"
    ]
]
            }]
        });
    }
}
```

