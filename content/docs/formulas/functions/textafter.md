title: TEXTAFTER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TEXTAFTER function in Jspreadsheet

# TEXTAFTER function

`PRO`{.jtag}

The `TEXTAFTER` function in Jspreadsheet Formulas Pro is used to extract a part of a text string that comes after a specified character or string. For instance, if you have a cell with the text "hello-world" and you use the `TEXTAFTER` function with "-" as the specified character, the function will return "world". This can be especially useful when you need to separate information in a cell based on specific delimiters or separators.

## Documentation

Returns the substring of text after a specified character or string.

### Category

Text

### Syntax

TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text from which to extract the substring. |
| `delimiter` | The character or string after which to start extracting the substring. |
| `[instance_num]` | Optional. The instance number of the delimiter to use if there are multiple occurrences. Default is 1. |
| `[match_mode]` | Optional. Specifies the match mode. Options include 'exact' (default) or 'approximate'. |
| `[match_end]` | Optional. Specifies whether to match at the end of the text. Options include 'start' (default) or 'end'. |
| `[if_not_found]` | Optional. The value to return if the delimiter is not found in the text. Default is an empty string. |


### Behavior

- The `TEXTAFTER` function in a spreadsheet is used to extract the substring that comes after a specific character or string in a given text string.
- It is case-sensitive and treats lower-case and upper-case letters as distinct characters.
- If the given text string is empty, `TEXTAFTER` will return an empty string.
- If the delimiter is not found in the text string, `TEXTAFTER` will return an empty string.
- If the delimiter occurs more than once in the text, `TEXTAFTER` will return the text after the first occurrence of the delimiter.
- `TEXTAFTER` will treat boolean values (TRUE or FALSE) as text strings. If used as a delimiter, TRUE is treated as the string "TRUE" and FALSE as "FALSE".
- If the input is a numerical value, `TEXTAFTER` will treat it as a text string and perform the operation.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the provided arguments are not valid, such as if the first argument is not a text string or if the delimiter is not a text string. |
| #N/A | This error occurs if the delimiter is not found in the text string. |

### Best practices

> - Always make sure the input is a text string. If you're using a cell reference, ensure that it contains text and not numerical or error values.
> - Be aware that `TEXTAFTER` is case-sensitive. If your delimiter is not being found, check that the case matches exactly with the delimiter in the text string.
> - If your text string or delimiter may contain leading or trailing spaces, consider using the `TRIM` function to remove them before using `TEXTAFTER`.
> - If you want to get the text after the last occurrence of a delimiter, consider using a combination of other functions such as `MID` and `FIND`.

### Usage

A few examples using the TEXTAFTER function.

```
TEXTAFTER("apple,banana,cherry", ",") returns "banana,cherry"  
TEXTAFTER("Hello World", "World") returns ""  
TEXTAFTER("John Smith", " ") = "Smith"  
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
        "Domain",
        "Username"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTAFTER(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\",,-1)"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTAFTER(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\",,-1)"
    ],
    [
        "mike.wilson@outlook.com",
        "=TEXTAFTER(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\",,-1)"
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
        "Domain",
        "Username"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTAFTER(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\",,-1)"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTAFTER(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\",,-1)"
    ],
    [
        "mike.wilson@outlook.com",
        "=TEXTAFTER(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\",,-1)"
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
        "Domain",
        "Username"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTAFTER(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\",,-1)"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTAFTER(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\",,-1)"
    ],
    [
        "mike.wilson@outlook.com",
        "=TEXTAFTER(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\",,-1)"
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
        "Domain",
        "Username"
    ],
    [
        "john.doe@gmail.com",
        "=TEXTAFTER(A2,\"@\")",
        "=TEXTAFTER(A2,\"@\",,-1)"
    ],
    [
        "sarah.smith@company.org",
        "=TEXTAFTER(A3,\"@\")",
        "=TEXTAFTER(A3,\"@\",,-1)"
    ],
    [
        "mike.wilson@outlook.com",
        "=TEXTAFTER(A4,\"@\")",
        "=TEXTAFTER(A4,\"@\",,-1)"
    ]
]
            }]
        });
    }
}
```

