title: NA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NA function in Jspreadsheet

# NA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NA` function in Jspreadsheet Formulas Pro is a tool that generates the error message #N/A, signifying that a "value is not available" or "no value exists". This is particularly useful when you're dealing with incomplete or missing data in your spreadsheet. By using the `NA` function, you can intentionally produce an error, helping you to easily identify cells where data is missing or not yet provided. It's a smart way to keep track of information that's still needed in your Jspreadsheet.

## Documentation

Returns the error value #N/A which means "value not available" or "no value exists".

### Category

Information

### Syntax

NA()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `NA` function in spreadsheets is used to generate an error that means "no available data" or "not applicable". It does not take any argument and simply returns the `#N/A` error value. This function can be useful in various cases where you want to explicitly state that a cell's data is not available. Here is how it handles different types of data:

- **Empty Cells**: `NA` function does not require any input to function. Using it in conjunction with empty cells will still return a `#N/A` error.
- **Text**: Since `NA` function does not take any arguments, any text input will simply be ignored and the function will return a `#N/A` error.
- **Booleans**: The `NA` function does not process Boolean values. Any Boolean input will be ignored, and the function will return a `#N/A` error.
- **Errors**: If used in a cell that has an error, the `NA` function will override that error and simply return a `#N/A` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#N/A` | The only error that the `NA` function returns is `#N/A`. This is not a result of an error in the function itself, but the intended output of the function. |

### Best practices

> - Use the `NA` function to explicitly indicate that data is not available or not applicable. This can help other users understand why a cell is empty or why a calculation is not complete.
> - Be cautious when using `NA` function as it can affect other functions that reference the cell containing `NA`. Many functions do not handle `#N/A` errors and might return an error result.
> - Use the `IFERROR` function in combination with `NA` to handle errors in a more controlled way. For instance, you can use `IFERROR(A1, NA())` to return `#N/A` if there is an error in cell A1.
> - Use `NA` function to ignore certain data in charts. Charts in spreadsheets ignore cells with `#N/A` errors and do not include them in the chart.

### Usage

A few examples using the NA function.

```
VLOOKUP("Nonexistent",A1:B10,2,FALSE) returns #N/A  
INDEX(A1:A5,MATCH(6,B1:B5,0)) returns #N/A because there is no match for 6 in range B1:B5  
=IF(ISERROR(VLOOKUP("Nonexistent",A1:B10,2,FALSE)),NA(),VLOOKUP("Nonexistent",A1:B10,2,FALSE)) returns #N/A instead of #N/A error  
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
        "Apple",
        1.5,
        "=IFERROR(VLOOKUP(\"Banana\",A2:B4,2,FALSE),NA())"
    ],
    [
        "Orange",
        2.0
    ],
    [
        "Grape",
        3.25
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
        "Apple",
        1.5,
        "=IFERROR(VLOOKUP(\"Banana\",A2:B4,2,FALSE),NA())"
    ],
    [
        "Orange",
        2.0
    ],
    [
        "Grape",
        3.25
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
        "Apple",
        1.5,
        "=IFERROR(VLOOKUP(\"Banana\",A2:B4,2,FALSE),NA())"
    ],
    [
        "Orange",
        2.0
    ],
    [
        "Grape",
        3.25
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
        "Apple",
        1.5,
        "=IFERROR(VLOOKUP(\"Banana\",A2:B4,2,FALSE),NA())"
    ],
    [
        "Orange",
        2.0
    ],
    [
        "Grape",
        3.25
    ]
]
            }]
        });
    }
}
```

