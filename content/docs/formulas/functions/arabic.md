title: ARABIC Function - Convert Roman Numerals to Arabic Numbers in Jspreadsheet
keywords: ARABIC function, Roman numeral converter, number conversion, numeric transformation, Excel-compatible functions, JavaScript spreadsheet functions, data conversion, historical data, mathematical functions, number formatting, Roman to Arabic conversion, spreadsheet calculations
description: Convert Roman numerals to standard Arabic numbers easily with the ARABIC function in Jspreadsheet. Perfect for working with historical data, legal documents, and any content containing Roman numerals that needs numerical processing.

# ARABIC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ARABIC` function in Jspreadsheet Formulas Pro is a handy tool that converts Roman numerals into Arabic numerals. For instance, if you have the Roman numeral 'V' in a cell, using `ARABIC` will convert it to the Arabic numeral '5'. This function is particularly useful when you're dealing with data that includes Roman numerals and you need to perform calculations or make comparisons using standard numerical values. Simply input the cell containing the Roman numeral into the `ARABIC` function and the conversion will be done automatically.

## Documentation

Converts a Roman numeral to an Arabic numeral.

### Category

Math and trigonometry

### Syntax

ARABIC(text)

| Parameter | Description |
| ----------- | ------------- |
| `string` | The Roman numeral to convert to an Arabic numeral. |


### Behavior

The 'ARABIC' function in spreadsheets converts a Roman numeral to an Arabic numeral. This function takes one argument, which is the Roman numeral as a string. Here's how it handles different types of inputs:

- Empty cells: If the 'ARABIC' function is called on an empty cell, it returns an error.
- Text: If the function is called on a cell containing text that is not a valid Roman numeral, it returns an error.
- Booleans: The 'ARABIC' function does not work with boolean values. If a cell containing a boolean value is used as an argument, it returns an error.
- Errors: If the argument of the 'ARABIC' function is a cell that contains an error, the function itself will return an error.
- Numbers: If the function is called on a cell containing a number, it treats the number as a string and tries to convert it to an Arabic numeral. If the string is not a valid Roman numeral, it returns an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the input is not a valid Roman numeral. |
| #REF! | This error occurs when the reference provided in the function is not valid. |
| #NAME? | This error occurs when the function name is not spelled correctly. |

### Best practices

> - Always ensure that the input is a valid Roman numeral. The 'ARABIC' function does not work with values that are not valid Roman numerals.
> - Avoid using cells that contain errors as arguments. This will result in the 'ARABIC' function returning an error.
> - It's always a good practice to trim and clean the data before using it in the function to avoid any unexpected errors.
> - Be careful while typing the function's name. Incorrect spelling can lead to a #NAME? error.

### Usage

A few examples using the ARABIC function.

```
ARABIC('XII') returns 12  
ARABIC('MCMXCIV') returns 1994  
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
        "Roman Numeral",
        "Arabic Number"
    ],
    [
        "IV",
        "=ARABIC(A2)"
    ],
    [
        "XIX",
        "=ARABIC(A3)"
    ],
    [
        "XLII",
        "=ARABIC(A4)"
    ],
    [
        "MCMXC",
        "=ARABIC(A5)"
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
        "Roman Numeral",
        "Arabic Number"
    ],
    [
        "IV",
        "=ARABIC(A2)"
    ],
    [
        "XIX",
        "=ARABIC(A3)"
    ],
    [
        "XLII",
        "=ARABIC(A4)"
    ],
    [
        "MCMXC",
        "=ARABIC(A5)"
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
        "Roman Numeral",
        "Arabic Number"
    ],
    [
        "IV",
        "=ARABIC(A2)"
    ],
    [
        "XIX",
        "=ARABIC(A3)"
    ],
    [
        "XLII",
        "=ARABIC(A4)"
    ],
    [
        "MCMXC",
        "=ARABIC(A5)"
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
        "Roman Numeral",
        "Arabic Number"
    ],
    [
        "IV",
        "=ARABIC(A2)"
    ],
    [
        "XIX",
        "=ARABIC(A3)"
    ],
    [
        "XLII",
        "=ARABIC(A4)"
    ],
    [
        "MCMXC",
        "=ARABIC(A5)"
    ]
]
            }]
        });
    }
}
```

