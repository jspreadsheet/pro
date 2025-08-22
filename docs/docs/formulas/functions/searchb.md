title: SEARCHB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SEARCHB function in Jspreadsheet

# SEARCHB function



The `SEARCHB` function in Jspreadsheet Formulas Pro is used to find the position of a specific text string within another text string, starting from the first character on the left. It is a case-sensitive function that treats double-byte characters as separate entities. If the text you're looking for isn't found, it will return #VALUE!. This can be incredibly useful for locating specific data within a larger text field.

## Documentation

Returns the starting position of a text string within another text string, starting from the leftmost character. If the text is not found, returns #VALUE!. This function is case-sensitive and considers double-byte characters as separate characters.

### Category

Text

### Syntax

SEARCHB(find_text,within_text,[start_num])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text to find. |
| `text` | The text to search within. |
| `number` | Optional. The starting position of the search. Default is 1. |


### Behavior

The `SEARCHB` function in spreadsheets is used to find the starting position of a given text string within another text string. It distinguishes between uppercase and lowercase characters.
- The function returns the position of the first character of the found text as a number.
- It starts searching from the first character of the within_text string.
- It treats consecutive delimiters as one (if the optional [start_num] argument is used).
- If the text to search for (find_text) is not found, the function returns an error.
- If the text to search for (find_text) is an empty string, the function returns an error.
- If the within_text string is an empty string, and the find_text is not an empty string, the function returns an error.
- If the within_text string is an empty string, and the find_text is an empty string, the function returns 1.
- The function handles boolean values as text. For example, if the find_text string is TRUE or FALSE, it tries to match the text strings "TRUE" or "FALSE".
- If either of the arguments is a range of cells, only the first cell in the range is used.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error is returned if the text to search for (find_text) is not found within the within_text string. |
| #N/A | This error is returned if the optional [start_num] argument is greater than the length of the within_text string. |
| #VALUE! | This error is returned if either the find_text or the within_text is an array or a range of cells. |

### Best practices

> - Be aware that `SEARCHB` is case-insensitive and does not support wildcards, unlike the `FIND` function which is case-sensitive.
> - Use the optional [start_num] argument to skip a specified number of characters at the start of the within_text string.
> - When using `SEARCHB`, it may be helpful to wrap the function in an `ISNUMBER` function to return a boolean value instead of an error if the text to search for is not found.
> - Keep in mind that `SEARCHB` counts 2 bytes for characters that fall in the double-byte character set, so the returned value may be larger than the actual number of characters.

### Usage

A few examples using the SEARCHB function.

```
SEARCHB("日本","Japan is 日本 in Japanese.") returns 10  
SEARCHB("日","Japan is 日本 in Japanese.") returns #VALUE!  
SEARCHB("is","The sky is blue.",6) returns 9  
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
        "Text to Search",
        "Search Term",
        "Result"
    ],
    [
        "Japan is \u65e5\u672c in Japanese.",
        "\u65e5\u672c",
        "=SEARCHB(B2,A2)"
    ],
    [
        "The sky is blue.",
        "is",
        "=SEARCHB(B3,A3)"
    ],
    [
        "Hello \u4e16\u754c World",
        "\u4e16\u754c",
        "=SEARCHB(B4,A4)"
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
        "Text to Search",
        "Search Term",
        "Result"
    ],
    [
        "Japan is \u65e5\u672c in Japanese.",
        "\u65e5\u672c",
        "=SEARCHB(B2,A2)"
    ],
    [
        "The sky is blue.",
        "is",
        "=SEARCHB(B3,A3)"
    ],
    [
        "Hello \u4e16\u754c World",
        "\u4e16\u754c",
        "=SEARCHB(B4,A4)"
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
        "Text to Search",
        "Search Term",
        "Result"
    ],
    [
        "Japan is \u65e5\u672c in Japanese.",
        "\u65e5\u672c",
        "=SEARCHB(B2,A2)"
    ],
    [
        "The sky is blue.",
        "is",
        "=SEARCHB(B3,A3)"
    ],
    [
        "Hello \u4e16\u754c World",
        "\u4e16\u754c",
        "=SEARCHB(B4,A4)"
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
        "Text to Search",
        "Search Term",
        "Result"
    ],
    [
        "Japan is \u65e5\u672c in Japanese.",
        "\u65e5\u672c",
        "=SEARCHB(B2,A2)"
    ],
    [
        "The sky is blue.",
        "is",
        "=SEARCHB(B3,A3)"
    ],
    [
        "Hello \u4e16\u754c World",
        "\u4e16\u754c",
        "=SEARCHB(B4,A4)"
    ]
]
            }]
        });
    }
}
```

