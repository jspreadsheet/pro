title: FINDB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FINDB function in Jspreadsheet

# FINDB function



The `FINDB` function in Jspreadsheet Formulas Pro is utilized to locate the position of a specific string of text within another string, taking into account case sensitivity. This means it differentiates between upper and lower case letters. The unique aspect of this function is that the search begins from the right side of the string, rather than the left. This can be particularly useful when you're trying to locate specific text within a larger string.

## Documentation

Returns the position of a string within another, but allowing for case sensitivity. Search starts from the right hand side of the string.

### Category

Text

### Syntax

FIND(find_text, within_text, start_num)

| Parameter | Description |
| ----------- | ------------- |
| `find_text` | The text to find. |
| `within_text` | The text to search within. |
| `start_num` | Optional. The starting position of the search. If omitted, search starts at the end of the string. |


### Behavior

The `FINDB` function in spreadsheets is used to search for a specific text string within another text string, and returns the starting position of the first text string from the first character of the second text string. 

- If the text string to be found is not found, the `FINDB` function returns a #VALUE! error.
- If the start_num argument is omitted, it is assumed to be 1. If start_num is less than 1, `FINDB` returns a #VALUE! error.
- If start_num is greater than the length of within_text, `FINDB` returns a #VALUE! error.
- `FINDB` is case sensitive and does not allow wildcard characters.
- `FINDB` counts each double-byte character as 2 when you have enabled the editing of a language that supports DBCS and then set it as the default language. Otherwise `FINDB` counts each character as 1.
- If any of the arguments are empty cells, `FINDB` will return a #VALUE! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the text to find is not in the within_text or if the start_num is less than 1 or greater than the length of the within_text. It also occurs when any of the arguments are empty cells. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. Ensure you have typed 'FINDB' correctly. |

### Best practices

> - Always ensure that the text to find is present within the within_text to avoid a #VALUE! error.
> - Be aware that `FINDB` is case sensitive, so be sure to use the correct case when searching for a text string.
> - Keep in mind that `FINDB` does not support wildcard characters.
> - Remember that `FINDB` counts each character as 2 if you have enabled the editing of a language that supports DBCS and then set it as the default language. Otherwise, it counts each character as 1.

### Usage

A few examples using the FINDB function.

```
FINDB("o","Hello World") returns 8  
FINDB("O","Hello World") returns 0  
FINDB("l","Hello World",3) returns 3  
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
        "Text",
        "Search For",
        "Position"
    ],
    [
        "Hello World",
        "o",
        "=FINDB(B2,A2)"
    ],
    [
        "Programming",
        "g",
        "=FINDB(B3,A3)"
    ],
    [
        "Excel Functions",
        "F",
        "=FINDB(B4,A4)"
    ],
    [
        "Case Sensitive",
        "s",
        "=FINDB(B5,A5)"
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
        "Text",
        "Search For",
        "Position"
    ],
    [
        "Hello World",
        "o",
        "=FINDB(B2,A2)"
    ],
    [
        "Programming",
        "g",
        "=FINDB(B3,A3)"
    ],
    [
        "Excel Functions",
        "F",
        "=FINDB(B4,A4)"
    ],
    [
        "Case Sensitive",
        "s",
        "=FINDB(B5,A5)"
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
        "Text",
        "Search For",
        "Position"
    ],
    [
        "Hello World",
        "o",
        "=FINDB(B2,A2)"
    ],
    [
        "Programming",
        "g",
        "=FINDB(B3,A3)"
    ],
    [
        "Excel Functions",
        "F",
        "=FINDB(B4,A4)"
    ],
    [
        "Case Sensitive",
        "s",
        "=FINDB(B5,A5)"
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
        "Text",
        "Search For",
        "Position"
    ],
    [
        "Hello World",
        "o",
        "=FINDB(B2,A2)"
    ],
    [
        "Programming",
        "g",
        "=FINDB(B3,A3)"
    ],
    [
        "Excel Functions",
        "F",
        "=FINDB(B4,A4)"
    ],
    [
        "Case Sensitive",
        "s",
        "=FINDB(B5,A5)"
    ]
]
            }]
        });
    }
}
```

