title: FIND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FIND function in Jspreadsheet

# FIND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FIND` function in Jspreadsheet Formulas Pro is a tool that allows you to locate the position of a specific sequence of characters (a string) within a larger string. It's important to note that this function is case sensitive, meaning it distinguishes between upper and lower case letters. The search process begins from the left side of the string, moving towards the right.

## Documentation

Returns the position of a string within another, but allowing for case sensitivity. Search starts from the left hand side of the string.

### Category

Text

### Syntax

FIND(find_text, within_text, start_num)

| Parameter | Description |
| ----------- | ------------- |
| `find_text` | The text to find. |
| `within_text` | The text to search within. |
| `start_num` | Optional. The position to start the search. If omitted, search starts at the beginning of the string. |


### Behavior

The `FIND` function in spreadsheets is used to find the starting position of a specified text string within another text string. Its syntax is `FIND(find_text, within_text, [start_num])`. The `find_text` is the text you want to find, `within_text` is the text containing the text you want to find, and `start_num` (optional) is the position in the `within_text` where you want to start the search.

- `FIND` is case-sensitive.
- It returns the position of the first character of `find_text` inside `within_text`.
- It will return an error if the `find_text` is not found within the `within_text`.
- If `start_num` is not specified, the function begins the search from the first character of the `within_text`.
- In case of empty cells, `FIND` will return an error.
- `FIND` does not support wildcards like "?" and "*".
- The function does not handle booleans or errors. If `find_text` or `within_text` is a boolean or error, `FIND` will return an error.

### Common Errors

|Error|Description|
|---|---|
|#VALUE!|Occurs when the `find_text` is not found within the `within_text`.|
|#VALUE!|Occurs when `start_num` is less than 1.|
|#VALUE!|Occurs when `start_num` is greater than the length of `within_text`.|
|#VALUE!|Occurs when `find_text` or `within_text` is a boolean or error.|
|#VALUE!|Occurs when `find_text` is an empty string.|

### Best practices

> - Always ensure that the `find_text` is properly formatted and is present in the `within_text` to avoid #VALUE! errors.
> - Be aware that `FIND` is case-sensitive. If you want a case-insensitive function, use `SEARCH` instead.
> - Be careful when using `start_num`. Make sure it is within the length of `within_text`.
> - Remember that `FIND` does not support wildcards. If you need to use wildcards, use `SEARCH` instead.

### Usage

A few examples using the FIND function.

```
FIND("o","Hello World") returns 5  
FIND("O","Hello World") returns 0  
FIND("l","Hello World",3) returns 3  
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
        "Email Address",
        "Search For",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=FIND(B2,A2)"
    ],
    [
        "sarah.smith@gmail.com",
        ".",
        "=FIND(B3,A3)"
    ],
    [
        "mike.wilson@outlook.com",
        "com",
        "=FIND(B4,A4)"
    ],
    [
        "lisa.brown@yahoo.org",
        "L",
        "=FIND(B5,A5)"
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
        "Email Address",
        "Search For",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=FIND(B2,A2)"
    ],
    [
        "sarah.smith@gmail.com",
        ".",
        "=FIND(B3,A3)"
    ],
    [
        "mike.wilson@outlook.com",
        "com",
        "=FIND(B4,A4)"
    ],
    [
        "lisa.brown@yahoo.org",
        "L",
        "=FIND(B5,A5)"
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
        "Email Address",
        "Search For",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=FIND(B2,A2)"
    ],
    [
        "sarah.smith@gmail.com",
        ".",
        "=FIND(B3,A3)"
    ],
    [
        "mike.wilson@outlook.com",
        "com",
        "=FIND(B4,A4)"
    ],
    [
        "lisa.brown@yahoo.org",
        "L",
        "=FIND(B5,A5)"
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
        "Email Address",
        "Search For",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=FIND(B2,A2)"
    ],
    [
        "sarah.smith@gmail.com",
        ".",
        "=FIND(B3,A3)"
    ],
    [
        "mike.wilson@outlook.com",
        "com",
        "=FIND(B4,A4)"
    ],
    [
        "lisa.brown@yahoo.org",
        "L",
        "=FIND(B5,A5)"
    ]
]
            }]
        });
    }
}
```

