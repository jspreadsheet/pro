title: CLEAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CLEAN function in Jspreadsheet

# CLEAN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CLEAN` function in Jspreadsheet Formulas Pro is a handy tool that helps you tidy up your text data. It works by eliminating all nonprintable characters from a text string, leaving only the characters that can be visibly read and printed. This is particularly useful when you're dealing with text data imported from other sources, which might include nonprintable characters that could interfere with other functions or formulas. With the `CLEAN` function, you can ensure your text data is clean and ready for further processing.

## Documentation

Removes all nonprintable characters from a text string.

### Category

Text

### Syntax

CLEAN(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the characters you want to remove. |


### Behavior

The `CLEAN` function in spreadsheets is used to remove all non-printable characters from a text string. It works by taking a single argument, which is the text string from which you wish to remove non-printable characters. The function then returns a new string that is identical to the input string, apart from the fact that all non-printable characters have been removed.

- Empty cells: If the `CLEAN` function is applied to an empty cell, the result will also be an empty cell.
- Text: The `CLEAN` function treats text strings as input and removes all non-printable characters from them.
- Numbers: If the `CLEAN` function is applied to a cell containing a numeric value, the function will treat the numeric value as a text string, and since numeric values do not contain non-printable characters, the function will return the original numeric value.
- Booleans: The `CLEAN` function will treat boolean values (TRUE or FALSE) as text strings and since these do not contain non-printable characters, the function will return the original boolean value.
- Errors: If the cell to which the `CLEAN` function is applied contains an error, the function will return that error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error occurs when the `CLEAN` function is applied to a cell that contains an error.|
| #NAME? | This error occurs when the `CLEAN` function is not correctly recognized by the spreadsheet, perhaps due to a typo or wrong function name.|

### Best practices

> - Always ensure that the text string to which the `CLEAN` function is being applied does not contain any characters that you do not want to be removed. The `CLEAN` function will remove all non-printable characters, and there is no way to specify particular non-printable characters that you want to keep.
> - Keep in mind that the `CLEAN` function treats all values as text strings. Therefore, if you apply the function to a numeric value, the function will return the numeric value, not a text string.
> - Use the `CLEAN` function in conjunction with other text functions for best results. For instance, you can first use the `CLEAN` function to remove non-printable characters from a text string, and then use another function to perform further manipulation on the cleaned text string.
> - Be careful when applying the `CLEAN` function to a cell that contains an error. The function will simply return the error, so it is always a good idea to ensure that the cell does not contain any errors before applying the `CLEAN` function.

### Usage

A few examples using the CLEAN function.

```
CLEAN("This is ​a test.") returns "This is a test."  
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
        "Original Text",
        "Cleaned Text"
    ],
    [
        "Product\u200bName\u0001",
        "=CLEAN(A2)"
    ],
    [
        "Customer\u0002Data\u0003",
        "=CLEAN(A3)"
    ],
    [
        "Invoice\u0007Number",
        "=CLEAN(A4)"
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
        "Original Text",
        "Cleaned Text"
    ],
    [
        "Product\u200bName\u0001",
        "=CLEAN(A2)"
    ],
    [
        "Customer\u0002Data\u0003",
        "=CLEAN(A3)"
    ],
    [
        "Invoice\u0007Number",
        "=CLEAN(A4)"
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
        "Original Text",
        "Cleaned Text"
    ],
    [
        "Product\u200bName\u0001",
        "=CLEAN(A2)"
    ],
    [
        "Customer\u0002Data\u0003",
        "=CLEAN(A3)"
    ],
    [
        "Invoice\u0007Number",
        "=CLEAN(A4)"
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
        "Original Text",
        "Cleaned Text"
    ],
    [
        "Product\u200bName\u0001",
        "=CLEAN(A2)"
    ],
    [
        "Customer\u0002Data\u0003",
        "=CLEAN(A3)"
    ],
    [
        "Invoice\u0007Number",
        "=CLEAN(A4)"
    ]
]
            }]
        });
    }
}
```

