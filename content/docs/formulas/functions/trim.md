title: TRIM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TRIM function in Jspreadsheet

# TRIM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TRIM` function in Jspreadsheet Formulas Pro is a useful tool for cleaning up text data. It works by eliminating all extra spaces within a text string, except for single spaces that exist between words. This is particularly helpful when dealing with data that may have been copied from other sources and may contain unwanted spaces. Simply apply the `TRIM` function to your text data, and it will return the cleaned-up version of the text.

## Documentation

Removes all spaces from text except for single spaces between words.

### Category

Text

### Syntax

TRIM(text)

| Parameter | Description |
| ----------- | ------------- |
| `text` | Text - the text from which to remove excess spaces. |


### Behavior

The `TRIM` function in spreadsheets is used to remove leading, trailing, and multiple spaces between words in a text. This function is case-sensitive and only removes ASCII space characters. Here are some behaviors of the `TRIM` function:

- Empty Cells: If the `TRIM` function is used on an empty cell, it will return an empty string.

- Text: `TRIM` will remove extra spaces in the text. It does not affect any other character or punctuation.

- Numbers: If a number is given with spaces, `TRIM` will remove the spaces. If a number is given without spaces, the number will be returned as is.

- Booleans: If `TRIM` is used on a cell containing a Boolean value (TRUE or FALSE), it will return the Boolean value as a text string without any changes.

- Errors: If the `TRIM` function encounters an error value in its argument, it will return that error value.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the given argument is not a text string. |
| #NAME?  | This error occurs if the spreadsheet does not recognize the function name. |

### Best practices
> - Always ensure that the argument passed to the `TRIM` function is a text string to avoid the #VALUE! error.
> - Use the `TRIM` function to clean up text data imported from other sources which may contain extra spaces.
> - Be aware that `TRIM` only removes ASCII space characters. It does not remove other whitespace characters like non-breaking spaces.
> - Combine `TRIM` with other text functions for more complex text manipulation.

### Usage

A few examples using the TRIM function.

```
TRIM("  apple  ") returns "apple"  
TRIM("  banana  split  ") returns "banana split"  
TRIM(" grape") returns "grape"  
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
        "Raw Data",
        "Cleaned Data"
    ],
    [
        "  John Smith  ",
        "=TRIM(A2)"
    ],
    [
        "   Mary   Johnson   ",
        "=TRIM(A3)"
    ],
    [
        "Bob   Wilson",
        "=TRIM(A4)"
    ],
    [
        "  Sarah    Davis  ",
        "=TRIM(A5)"
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
        "Raw Data",
        "Cleaned Data"
    ],
    [
        "  John Smith  ",
        "=TRIM(A2)"
    ],
    [
        "   Mary   Johnson   ",
        "=TRIM(A3)"
    ],
    [
        "Bob   Wilson",
        "=TRIM(A4)"
    ],
    [
        "  Sarah    Davis  ",
        "=TRIM(A5)"
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
        "Raw Data",
        "Cleaned Data"
    ],
    [
        "  John Smith  ",
        "=TRIM(A2)"
    ],
    [
        "   Mary   Johnson   ",
        "=TRIM(A3)"
    ],
    [
        "Bob   Wilson",
        "=TRIM(A4)"
    ],
    [
        "  Sarah    Davis  ",
        "=TRIM(A5)"
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
        "Raw Data",
        "Cleaned Data"
    ],
    [
        "  John Smith  ",
        "=TRIM(A2)"
    ],
    [
        "   Mary   Johnson   ",
        "=TRIM(A3)"
    ],
    [
        "Bob   Wilson",
        "=TRIM(A4)"
    ],
    [
        "  Sarah    Davis  ",
        "=TRIM(A5)"
    ]
]
            }]
        });
    }
}
```

