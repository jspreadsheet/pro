title: MIDB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MIDB function in Jspreadsheet

# MIDB function



The `MIDB` function in Jspreadsheet Formulas Pro is a useful tool for extracting a specific part of a text string. You simply specify the starting position in the text from where you want to begin extracting, and then state the exact number of bytes you wish to extract. This is particularly helpful when you need to analyze or manipulate certain sections of a text string within your spreadsheet. It's a straightforward, powerful feature that enhances your data processing capabilities in Jspreadsheet.

## Documentation

Returns a specific number of bytes from a text string starting at the position you specify.

### Category

Text

### Syntax

MIDB(text, start_num, num_bytes)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the characters you want to extract. |
| `start_num` | Specifies the position of the first byte you want to extract. The first byte in text is 1. |
| `num_bytes` | Specifies the number of bytes you want MIDB to return. |


### Behavior

The `MIDB` function in spreadsheets is used to extract a specific number of characters from a text string, starting at a specific position and counting each byte used by the characters. This function may not work as expected if non-English characters are used, as such characters often use more than one byte.

- If the start_position argument is less than 1, the `MIDB` function will return an error.
- If the num_bytes argument is less than 0, the `MIDB` function will return an error.
- If the num_bytes argument is greater than the length of the text string, the `MIDB` function will return all characters in the string from the start_position to the end of the string.
- If a referenced cell is empty, the `MIDB` function will return an empty string.
- If a boolean value is used, the function will treat TRUE as text and FALSE as an empty string.
- If an error value is used, the `MIDB` function will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when the start_position argument is less than 1. |
| #VALUE! | This error is displayed when the num_bytes argument is less than 0. |
| #VALUE! | This error is displayed if either of the provided arguments are non-numeric. |

### Best practices

> - Generally, it is best to use the `MIDB` function with text strings and avoid using it with boolean values or error values.
> - Be cautious when using non-English characters, as they may use more than one byte and this can affect the output of the `MIDB` function.
> - Always make sure that the start_position and num_bytes arguments are positive numbers to avoid errors.
> - Use the `LENB` function to count the number of bytes in a text string before using the `MIDB` function. This can help you determine the correct arguments to use.

### Usage

A few examples using the MIDB function.

```
MIDB('apple', 1, 3) returns 'app'  
MIDB('banana', 3, 2) returns 'na'  
MIDB('cherry', 2, 4) returns 'herr'  
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
        "Product Code",
        "Start Position",
        "Extracted Code"
    ],
    [
        "ELEC-MON-2024",
        1,
        "=MIDB(A2,B2,4)"
    ],
    [
        "HOME-FUR-2023",
        6,
        "=MIDB(A3,B3,3)"
    ],
    [
        "AUTO-PAR-2022",
        9,
        "=MIDB(A4,B4,4)"
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
        "Product Code",
        "Start Position",
        "Extracted Code"
    ],
    [
        "ELEC-MON-2024",
        1,
        "=MIDB(A2,B2,4)"
    ],
    [
        "HOME-FUR-2023",
        6,
        "=MIDB(A3,B3,3)"
    ],
    [
        "AUTO-PAR-2022",
        9,
        "=MIDB(A4,B4,4)"
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
        "Product Code",
        "Start Position",
        "Extracted Code"
    ],
    [
        "ELEC-MON-2024",
        1,
        "=MIDB(A2,B2,4)"
    ],
    [
        "HOME-FUR-2023",
        6,
        "=MIDB(A3,B3,3)"
    ],
    [
        "AUTO-PAR-2022",
        9,
        "=MIDB(A4,B4,4)"
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
        "Product Code",
        "Start Position",
        "Extracted Code"
    ],
    [
        "ELEC-MON-2024",
        1,
        "=MIDB(A2,B2,4)"
    ],
    [
        "HOME-FUR-2023",
        6,
        "=MIDB(A3,B3,3)"
    ],
    [
        "AUTO-PAR-2022",
        9,
        "=MIDB(A4,B4,4)"
    ]
]
            }]
        });
    }
}
```

