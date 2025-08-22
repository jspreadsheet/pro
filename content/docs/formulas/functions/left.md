title: LEFT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LEFT function in Jspreadsheet

# LEFT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LEFT` function in Jspreadsheet Formulas Pro is a handy tool that allows you to extract a certain number of characters from the start of a text string. Simply put, it takes the first (leftmost) characters of the text you specify. For instance, if you have a cell containing the text 'Hello World' and you use the `LEFT` function to get the first 5 characters, it will return 'Hello'. This can be very useful when you need to manipulate or analyze data in a specific way.

## Documentation

Returns a specified number of characters from the beginning (left side) of a text string.

### Category

Text

### Syntax

LEFT(text, [num_chars])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string that contains the characters you want to extract. |
| `[num_chars]` | Optional. Specifies how many characters you want LEFT to return. |


### Behavior

The `LEFT` function in spreadsheet applications is designed to extract a specified number of characters from the left side of a cell's content. It is applicable to cells containing text or alphanumeric characters. Here's how it handles various inputs:

- **Text**: The `LEFT` function works perfectly with text and returns the specified number of characters from the left.
- **Numbers**: If the cell contains a numerical value, the `LEFT` function will treat it as text and return the specified number of digits from the left.
- **Empty cells**: If the `LEFT` function is applied to an empty cell, it will return an empty string.
- **Booleans**: If the cell contains a Boolean value (`TRUE` or `FALSE`), the `LEFT` function will treat it as text and return the specified number of characters from the left.
- **Errors**: If the cell contains an error (like `#N/A`, `#VALUE!`, etc.), the `LEFT` function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the `num_chars` argument in the `LEFT` function is non-numeric. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name. This might happen if the function is misspelled. |
| #NUM! | This error occurs when the `num_chars` argument in the `LEFT` function is less than zero. |

### Best Practices
> - Always ensure that the `num_chars` argument you provide is a non-negative number. Providing a negative number will result in a `#NUM!` error.
> - Use the `LEFT` function in conjunction with other text functions for more complicated manipulations.
> - Be mindful of the data type in the target cell. Although `LEFT` can handle different data types, its primary use is for text manipulation.
> - Remember that `LEFT` counts each character, including spaces and special characters, when determining the number of characters to return.

### Usage

A few examples using the LEFT function.

```
LEFT('apple', 3) returns 'app'  
LEFT('banana', 2) returns 'ba'  
LEFT('cherry', 5) returns 'cherr'  
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
        "First 3 Characters",
        "First 2 Characters"
    ],
    [
        "APPLE-123",
        "=LEFT(A2,3)",
        "=LEFT(A2,2)"
    ],
    [
        "BANANA-456",
        "=LEFT(A3,3)",
        "=LEFT(A3,2)"
    ],
    [
        "CHERRY-789",
        "=LEFT(A4,3)",
        "=LEFT(A4,2)"
    ],
    [
        "GRAPE-101",
        "=LEFT(A5,3)",
        "=LEFT(A5,2)"
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
        "First 3 Characters",
        "First 2 Characters"
    ],
    [
        "APPLE-123",
        "=LEFT(A2,3)",
        "=LEFT(A2,2)"
    ],
    [
        "BANANA-456",
        "=LEFT(A3,3)",
        "=LEFT(A3,2)"
    ],
    [
        "CHERRY-789",
        "=LEFT(A4,3)",
        "=LEFT(A4,2)"
    ],
    [
        "GRAPE-101",
        "=LEFT(A5,3)",
        "=LEFT(A5,2)"
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
        "First 3 Characters",
        "First 2 Characters"
    ],
    [
        "APPLE-123",
        "=LEFT(A2,3)",
        "=LEFT(A2,2)"
    ],
    [
        "BANANA-456",
        "=LEFT(A3,3)",
        "=LEFT(A3,2)"
    ],
    [
        "CHERRY-789",
        "=LEFT(A4,3)",
        "=LEFT(A4,2)"
    ],
    [
        "GRAPE-101",
        "=LEFT(A5,3)",
        "=LEFT(A5,2)"
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
        "First 3 Characters",
        "First 2 Characters"
    ],
    [
        "APPLE-123",
        "=LEFT(A2,3)",
        "=LEFT(A2,2)"
    ],
    [
        "BANANA-456",
        "=LEFT(A3,3)",
        "=LEFT(A3,2)"
    ],
    [
        "CHERRY-789",
        "=LEFT(A4,3)",
        "=LEFT(A4,2)"
    ],
    [
        "GRAPE-101",
        "=LEFT(A5,3)",
        "=LEFT(A5,2)"
    ]
]
            }]
        });
    }
}
```

