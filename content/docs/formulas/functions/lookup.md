title: LOOKUP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOOKUP function in Jspreadsheet

# LOOKUP function

`PRO`{.jtag}

The `LOOKUP` function in Jspreadsheet Formulas Pro is a useful tool for finding a specific value within a certain range or array. This function operates by identifying a value you specify within a given set, then provides the corresponding value from a different set that is positioned in the same way. Essentially, it's like having a digital assistant that can find the 'match' of a piece of data from one list in another list. This feature can save you a significant amount of time when working with large or complex data sets.

## Documentation

Searches for a value in a range or array and returns a value in the same position from a second range or array.

### Category

Lookup and reference

### Syntax

LOOKUP(lookup_value, lookup_array, [result_array])

| Parameter | Description |
| ----------- | ------------- |
| `lookup_value` | The value to search for in the lookup_array. The lookup_value can be a number, text, logical value, or a reference to a cell containing any of these. |
| `lookup_array` | The range of cells or an array that contains the values to be searched. The lookup_array must be one row or one column. |
| `r[esult_array]` | Optional. The range of cells or an array that contains the values to be returned. If this argument is omitted, the function returns the corresponding value from the lookup_array. |


### Behavior

The `LOOKUP` function in spreadsheets is used to search and retrieve data from a specific column or row in a range. It is commonly used when you need to look up and match data in different sheets or tables.

Here's how `LOOKUP` handles different types of data:

- **Empty Cells**: `LOOKUP` will return an `#N/A` error if there's no match found in the lookup range.
- **Text**: The function treats uppercase and lowercase text as the same. If the search key is a text string, `LOOKUP` will return the first match that it finds.
- **Booleans**: `LOOKUP` can handle boolean values (`TRUE` or `FALSE`). If the lookup value is boolean, it matches the boolean value in lookup vector.
- **Errors**: If the `LOOKUP` function encounters errors in the lookup vector or result vector, it will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when `LOOKUP` cannot find the lookup value in the lookup range. |
| #REF! | This error is returned when the formula contains an invalid cell reference. |
| #VALUE! | This error is returned if the wrong type of argument or operand is used. |
| #NAME? | This error is returned when the spreadsheet does not recognize text in the formula. |

### Best practices

> - Always ensure that the data in the lookup column is sorted in ascending order. If the data is not sorted, `LOOKUP` may return incorrect results.
> - Be careful with text and numeric values. If your lookup value is numeric and the lookup vector contains text, `LOOKUP` will return `#N/A`.
> - Avoid using `LOOKUP` with arrays that have more than one row or column. Use `VLOOKUP` or `HLOOKUP` instead.
> - Handle errors properly by using functions like `IFERROR` to ensure your spreadsheet continues to work smoothly even when errors occur.

### Usage

A few examples using the LOOKUP function.

```
LOOKUP(2, A1:A10, B1:B10) searches for the value 2 in the range A1:A10 and returns the corresponding value from the same position in the range B1:B10  
LOOKUP("apples", A1:A10, B1:B10) searches for the text "apples" in the range A1:A10 and returns the corresponding value from the same position in the range B1:B10  
LOOKUP(0.5, [0,0.25,0.5,0.75,1], ["F","D","C","B","A"]) searches for the value 0.5 in the array [0,0.25,0.5,0.75,1] and returns the corresponding value "C" from the same position in the array ["F","D","C","B","A"].  
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
        "Price",
        "Lookup Result"
    ],
    [
        "Apples",
        2.5
    ],
    [
        "Bananas",
        1.75
    ],
    [
        "Oranges",
        3.0
    ],
    [
        "Bananas",
        "=LOOKUP(A5,A2:A4,B2:B4)"
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
        "Price",
        "Lookup Result"
    ],
    [
        "Apples",
        2.5
    ],
    [
        "Bananas",
        1.75
    ],
    [
        "Oranges",
        3.0
    ],
    [
        "Bananas",
        "=LOOKUP(A5,A2:A4,B2:B4)"
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
        "Price",
        "Lookup Result"
    ],
    [
        "Apples",
        2.5
    ],
    [
        "Bananas",
        1.75
    ],
    [
        "Oranges",
        3.0
    ],
    [
        "Bananas",
        "=LOOKUP(A5,A2:A4,B2:B4)"
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
        "Price",
        "Lookup Result"
    ],
    [
        "Apples",
        2.5
    ],
    [
        "Bananas",
        1.75
    ],
    [
        "Oranges",
        3.0
    ],
    [
        "Bananas",
        "=LOOKUP(A5,A2:A4,B2:B4)"
    ]
]
            }]
        });
    }
}
```

