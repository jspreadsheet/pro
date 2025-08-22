title: ARRAYTOTEXT Function - Convert Arrays to Delimited Text in Jspreadsheet
keywords: ARRAYTOTEXT function, array conversion, text concatenation, data formatting, Excel-compatible functions, JavaScript spreadsheet functions, array manipulation, string operations, data transformation, list formatting, array to string conversion, delimited text
description: Transform arrays into delimited text strings using the ARRAYTOTEXT function in Jspreadsheet. Perfect for data formatting, report generation, and converting multi-cell ranges into readable, concatenated text.

# ARRAYTOTEXT function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the function `ARRAYTOTEXT` is used to convert an array, which is a collection of values, into a single text string that's separated by a specific delimiter. This delimiter could be a comma, space, or other character you'd prefer. For example, if you have an array of ["apple","banana","cherry"], applying `ARRAYTOTEXT` with a comma delimiter would result in "apple,banana,cherry". This function is particularly useful when you need to condense multiple values into a single, easy-to-read format.

## Documentation

Converts an array into a delimited text string.

### Category

Text

### Syntax

ARRAYTOTEXT(array, [format])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array to convert to text. |
| `[format]` | Optional. The delimiter to use between values. Defaults to ',' if not specified. |


### Behavior

The `ARRAYTOTEXT` function in spreadsheets is used to convert a range of cells (array) into a single text string. Here's how it handles different types of cell contents:

- Empty Cells: If the array contains empty cells, these will be considered as null or empty strings in the resulting text.
- Text: Text cells are directly converted into text strings.
- Booleans: Boolean values (True/False) are converted into their text equivalents.
- Numbers: Numeric cells are converted into their text equivalents.
- Dates: Date cells are converted into their default text format.
- Errors: If the array includes cells with errors, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the function cannot interpret the data in the cells as text. For example, if the cell contains an object or a formula that cannot be converted into a text string. |
| #REF! | This error is displayed when the reference provided in the function is invalid. For example, if the array range specified does not exist. |
| #N/A | This error is displayed when no array is provided to the function. |

### Best practices

> - Always ensure that the array range specified in the function is valid to avoid #REF! errors.
> - Be aware of the types of data in your array. While `ARRAYTOTEXT` can handle a variety of data types, unexpected results may occur with certain types of data, such as formulas or objects.
> - If your array contains numerical data that you don't want to convert to text, consider using a different function.
> - Use error-checking functions like `ISERROR` or `IFERROR` along with `ARRAYTOTEXT` to handle potential errors in your array data.

### Usage

A few examples using the ARRAYTOTEXT function.

```
ARRAYTOTEXT([1, 2, 3, 4], 0) returns '1,2,3,4'  
ARRAYTOTEXT(["apples","oranges","bananas"], "1 ") returns '["apples", "oranges", "bananas"]'  
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
        "Product",
        "Quantities",
        "Text Output"
    ],
    [
        "Apples",
        [
            12,
            8,
            15,
            20
        ],
        "=ARRAYTOTEXT(B2, 0)"
    ],
    [
        "Oranges",
        [
            5,
            10,
            7,
            12
        ],
        "=ARRAYTOTEXT(B3, 1)"
    ],
    [
        "Bananas",
        [
            18,
            22,
            14,
            9
        ],
        "=ARRAYTOTEXT(B4, 0)"
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
        "Product",
        "Quantities",
        "Text Output"
    ],
    [
        "Apples",
        [
            12,
            8,
            15,
            20
        ],
        "=ARRAYTOTEXT(B2, 0)"
    ],
    [
        "Oranges",
        [
            5,
            10,
            7,
            12
        ],
        "=ARRAYTOTEXT(B3, 1)"
    ],
    [
        "Bananas",
        [
            18,
            22,
            14,
            9
        ],
        "=ARRAYTOTEXT(B4, 0)"
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
        "Product",
        "Quantities",
        "Text Output"
    ],
    [
        "Apples",
        [
            12,
            8,
            15,
            20
        ],
        "=ARRAYTOTEXT(B2, 0)"
    ],
    [
        "Oranges",
        [
            5,
            10,
            7,
            12
        ],
        "=ARRAYTOTEXT(B3, 1)"
    ],
    [
        "Bananas",
        [
            18,
            22,
            14,
            9
        ],
        "=ARRAYTOTEXT(B4, 0)"
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
        "Product",
        "Quantities",
        "Text Output"
    ],
    [
        "Apples",
        [
            12,
            8,
            15,
            20
        ],
        "=ARRAYTOTEXT(B2, 0)"
    ],
    [
        "Oranges",
        [
            5,
            10,
            7,
            12
        ],
        "=ARRAYTOTEXT(B3, 1)"
    ],
    [
        "Bananas",
        [
            18,
            22,
            14,
            9
        ],
        "=ARRAYTOTEXT(B4, 0)"
    ]
]
            }]
        });
    }
}
```

