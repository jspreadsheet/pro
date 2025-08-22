title: ROMAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROMAN function in Jspreadsheet

# ROMAN function

`PRO`{.jtag}

The `ROMAN` function in Jspreadsheet Formulas Pro is a useful tool that changes an Arabic numeral into a Roman numeral. If you input a number into this function, it will output the equivalent value in Roman numerals. It's a simple and efficient way to convert numbers into a different numerical system, which can be particularly useful in specific fields or for educational purposes. This function makes it easy to understand and utilize Roman numerals in your Jspreadsheet tasks.

## Documentation

Converts an Arabic numeral to a Roman numeral.

### Category

Math and trigonometry

### Syntax

ROMAN(number, [style])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The Arabic numeral you want to convert to a Roman numeral. |
| `style` | Optional. A number that determines the type of Roman numeral to use in the conversion. If omitted or set to 0, ROMAN uses the classic Roman numeral form. |


### Behavior

The `ROMAN` spreadsheet function is used to convert a number into its Roman numeral equivalent. The function takes two arguments. The first one is the number that you want to convert into Roman numerals and the second optional one is a number (from 0 to 4) that determines the type of Roman numerals you want to use.

Here's how it handles different types of input:

- Empty cells: If the cell reference is empty, the function will return `#VALUE!` error.
- Text: If the cell reference contains text, the function will return `#VALUE!` error.
- Booleans: If the cell reference contains a boolean (TRUE or FALSE), the function will return `#VALUE!` error.
- Errors: If the cell reference contains an error, the function will return that error.
- Numbers: The function works well with numbers. The number should be between 1 and 3999.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the input cell is empty, contains text, or contains a boolean value. |
| #NUM! | This error occurs if the input number is less than 0 or greater than 3999. |
| #N/A | This error occurs if the second argument is not between 0 and 4. |

### Best practices

> - Always ensure the input number is within the acceptable range (1 to 3999), else the function will return `#NUM!` error.
> - Use the second argument to control the form of Roman numerals. If you want the classic form, use 0. If you want the more concise form, use 4.
> - Avoid referring to cells containing text or boolean values as the function will return a `#VALUE!` error.
> - It is best to use the `ROMAN` function when you need to display numbers in Roman numeral form for aesthetic or formatting purposes.

### Usage

A few examples using the ROMAN function.

```
ROMAN(10) returns "X"  
ROMAN(3999) returns "MMMCMXCIX"  
ROMAN(2021, 2) returns "MMXXI"  
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
        "Arabic Number",
        "Roman Numeral",
        "Style"
    ],
    [
        1994,
        "=ROMAN(A2)",
        "=ROMAN(A2,1)"
    ],
    [
        2023,
        "=ROMAN(A3)",
        "=ROMAN(A3,2)"
    ],
    [
        456,
        "=ROMAN(A4)",
        "=ROMAN(A4,0)"
    ],
    [
        3999,
        "=ROMAN(A5)",
        "=ROMAN(A5,3)"
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
        "Arabic Number",
        "Roman Numeral",
        "Style"
    ],
    [
        1994,
        "=ROMAN(A2)",
        "=ROMAN(A2,1)"
    ],
    [
        2023,
        "=ROMAN(A3)",
        "=ROMAN(A3,2)"
    ],
    [
        456,
        "=ROMAN(A4)",
        "=ROMAN(A4,0)"
    ],
    [
        3999,
        "=ROMAN(A5)",
        "=ROMAN(A5,3)"
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
        "Arabic Number",
        "Roman Numeral",
        "Style"
    ],
    [
        1994,
        "=ROMAN(A2)",
        "=ROMAN(A2,1)"
    ],
    [
        2023,
        "=ROMAN(A3)",
        "=ROMAN(A3,2)"
    ],
    [
        456,
        "=ROMAN(A4)",
        "=ROMAN(A4,0)"
    ],
    [
        3999,
        "=ROMAN(A5)",
        "=ROMAN(A5,3)"
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
        "Arabic Number",
        "Roman Numeral",
        "Style"
    ],
    [
        1994,
        "=ROMAN(A2)",
        "=ROMAN(A2,1)"
    ],
    [
        2023,
        "=ROMAN(A3)",
        "=ROMAN(A3,2)"
    ],
    [
        456,
        "=ROMAN(A4)",
        "=ROMAN(A4,0)"
    ],
    [
        3999,
        "=ROMAN(A5)",
        "=ROMAN(A5,3)"
    ]
]
            }]
        });
    }
}
```

