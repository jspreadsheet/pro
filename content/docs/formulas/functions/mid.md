title: MID function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MID function in Jspreadsheet

# MID function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MID` function in Jspreadsheet Formulas Pro is a useful tool that allows you to extract a specific part of a text string. You can specify the position in the text where you want to start, and then indicate the number of characters you wish to extract from that point. This is particularly useful for breaking down longer pieces of text into more manageable segments or for extracting specific information from a larger body of text.

## Documentation

Returns a specific number of characters from a text string starting at the position you specify.

### Category

Text

### Syntax

MID(text, start_num, num_chars)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the characters you want to extract. |
| `start_num` | Specifies the position of the first character you want to extract. The first character in text is 1. |
| `num_chars` | Specifies the number of characters you want MID to return. |


### Behavior

The `MID` function in spreadsheet is used to extract a specific number of characters from a text string, starting at a specified position. Here's how it handles different types of inputs:

- **Text**: The function works best with text strings. It returns the specified substring from the original text.
- **Empty cells**: If the cell is empty, the function returns an empty string.
- **Numbers**: If a number is passed as the text argument, the function treats it as a text string and performs the operation.
- **Booleans**: If a boolean value is passed as the text argument, it's converted into a string ("TRUE" or "FALSE") and the function performs the operation.
- **Errors**: If the start position is less than 1 or greater than the length of the text, the function returns a `#VALUE!` error. If the number of characters to extract is less than zero, it also returns a `#VALUE!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned if the start position is less than 1, greater than the length of the text, or if the number of characters to extract is less than zero. |
| #NAME? | This error is returned if the function name is misspelled. |

### Best practices

> - Always ensure that the start position and the number of characters to extract are positive numbers. A negative start position or number of characters will result in a `#VALUE!` error.
> - Be careful when using cell references or other functions as arguments. Ensure they will return the expected values.
> - Remember that `MID` function considers spaces as characters, so they will be included in the count.
> - It's always a good idea to have error handling in place when using the `MID` function, to handle possible `#VALUE!` errors.

### Usage

A few examples using the MID function.

```
MID('apple', 1, 3) returns 'app'  
MID('banana', 3, 2) returns 'na'  
MID('cherry', 2, 4) returns 'herr'  
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
        "First 3 Chars",
        "Middle 2 Chars"
    ],
    [
        "ABC12345",
        "=MID(A2,1,3)",
        "=MID(A2,4,2)"
    ],
    [
        "XYZ67890",
        "=MID(A3,1,3)",
        "=MID(A3,4,2)"
    ],
    [
        "DEF24680",
        "=MID(A4,1,3)",
        "=MID(A4,4,2)"
    ],
    [
        "GHI13579",
        "=MID(A5,1,3)",
        "=MID(A5,4,2)"
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
        "First 3 Chars",
        "Middle 2 Chars"
    ],
    [
        "ABC12345",
        "=MID(A2,1,3)",
        "=MID(A2,4,2)"
    ],
    [
        "XYZ67890",
        "=MID(A3,1,3)",
        "=MID(A3,4,2)"
    ],
    [
        "DEF24680",
        "=MID(A4,1,3)",
        "=MID(A4,4,2)"
    ],
    [
        "GHI13579",
        "=MID(A5,1,3)",
        "=MID(A5,4,2)"
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
        "First 3 Chars",
        "Middle 2 Chars"
    ],
    [
        "ABC12345",
        "=MID(A2,1,3)",
        "=MID(A2,4,2)"
    ],
    [
        "XYZ67890",
        "=MID(A3,1,3)",
        "=MID(A3,4,2)"
    ],
    [
        "DEF24680",
        "=MID(A4,1,3)",
        "=MID(A4,4,2)"
    ],
    [
        "GHI13579",
        "=MID(A5,1,3)",
        "=MID(A5,4,2)"
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
        "First 3 Chars",
        "Middle 2 Chars"
    ],
    [
        "ABC12345",
        "=MID(A2,1,3)",
        "=MID(A2,4,2)"
    ],
    [
        "XYZ67890",
        "=MID(A3,1,3)",
        "=MID(A3,4,2)"
    ],
    [
        "DEF24680",
        "=MID(A4,1,3)",
        "=MID(A4,4,2)"
    ],
    [
        "GHI13579",
        "=MID(A5,1,3)",
        "=MID(A5,4,2)"
    ]
]
            }]
        });
    }
}
```

