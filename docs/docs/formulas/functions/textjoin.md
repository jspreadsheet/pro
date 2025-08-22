title: TEXTJOIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TEXTJOIN function in Jspreadsheet

# TEXTJOIN function

`PRO`{.jtag}

The `TEXTJOIN` function in Jspreadsheet Formulas Pro is a handy tool that allows you to combine or "join" multiple text strings together. The function uses a specified delimiter, which is a character or set of characters that separates the text strings. For instance, you could use a comma, a space, or a dash as your delimiter. This function makes it easy to merge different pieces of text into one, creating a neatly organized and easy-to-read output.

## Documentation

Joins together text strings with a specified delimiter.

### Category

Text

### Syntax

TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `delimiter` | The character or string to separate the joined text values. |
| `ignore_empty` | A logical value determining whether to ignore empty or blank cells in the resulting joined text. |
| `text1` | The first text string to join. |
| `[text2]` | Optional. Additional text strings to join. |


### Behavior

The `TEXTJOIN` function in a spreadsheet allows you to combine or join text strings from different cells or ranges. The syntax is `TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)`. The `delimiter` is the character or characters that separate the text strings. The `ignore_empty` is a boolean that determines if the function should ignore empty cells or not. The `text1, text2, etc.` are the cells or ranges of cells to be joined. 

- If `ignore_empty` is set to TRUE, the function will ignore empty cells in the range.
- If `ignore_empty` is set to FALSE, the function will include empty cells in the range, and they will be separated by the delimiter.
- The function can handle text, numbers, booleans, and errors. 
- If any cell contains an error, the function will return that error.
- If the delimiter is an empty text (""), the function will simply concatenate the text strings without any separators.
- The `TEXTJOIN` function will join the text strings in the order they appear in the range.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the `delimiter` provided is not a text string. |
| #N/A | This error occurs when the `ignore_empty` argument is not a boolean (TRUE or FALSE). |
| #ERROR! | This error occurs when the function encounters a cell with an error. |

### Best practices

> - When using the `TEXTJOIN` function, it's best to make sure that your delimiter is appropriate for your text strings. For instance, if your text strings are numbers, you might want to use a comma or a space as a delimiter.
> - Be careful with the `ignore_empty` argument. If you set it to FALSE, your result might include unnecessary delimiters. If you set it to TRUE, you might exclude important information.
> - When using ranges with the `TEXTJOIN` function, ensure that they are in the correct order to get the desired result.
> - Be aware that the `TEXTJOIN` function will return an error if it encounters a cell with an error. To avoid this, check your range for errors before using the function.

### Usage

A few examples using the TEXTJOIN function.

```
TEXTJOIN(", ", TRUE, "apple", "banana", "cherry") returns "apple, banana, cherry"  
TEXTJOIN("", FALSE, "Hello", "", "World") returns "HelloWorld"  
TEXTJOIN(" - ", TRUE, "John", "", "Smith") returns "John - Smith"  
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
        "John",
        "Michael",
        "Smith",
        "=TEXTJOIN(\" \", TRUE, A1, B1, C1)"
    ],
    [
        "Sarah",
        "",
        "Johnson",
        "=TEXTJOIN(\" \", TRUE, A2, B2, C2)"
    ],
    [
        "apple",
        "banana",
        "cherry",
        "=TEXTJOIN(\", \", TRUE, A3, B3, C3)"
    ],
    [
        "Hello",
        "",
        "World",
        "=TEXTJOIN(\"-\", FALSE, A4, B4, C4)"
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
        "John",
        "Michael",
        "Smith",
        "=TEXTJOIN(\" \", TRUE, A1, B1, C1)"
    ],
    [
        "Sarah",
        "",
        "Johnson",
        "=TEXTJOIN(\" \", TRUE, A2, B2, C2)"
    ],
    [
        "apple",
        "banana",
        "cherry",
        "=TEXTJOIN(\", \", TRUE, A3, B3, C3)"
    ],
    [
        "Hello",
        "",
        "World",
        "=TEXTJOIN(\"-\", FALSE, A4, B4, C4)"
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
        "John",
        "Michael",
        "Smith",
        "=TEXTJOIN(\" \", TRUE, A1, B1, C1)"
    ],
    [
        "Sarah",
        "",
        "Johnson",
        "=TEXTJOIN(\" \", TRUE, A2, B2, C2)"
    ],
    [
        "apple",
        "banana",
        "cherry",
        "=TEXTJOIN(\", \", TRUE, A3, B3, C3)"
    ],
    [
        "Hello",
        "",
        "World",
        "=TEXTJOIN(\"-\", FALSE, A4, B4, C4)"
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
        "John",
        "Michael",
        "Smith",
        "=TEXTJOIN(\" \", TRUE, A1, B1, C1)"
    ],
    [
        "Sarah",
        "",
        "Johnson",
        "=TEXTJOIN(\" \", TRUE, A2, B2, C2)"
    ],
    [
        "apple",
        "banana",
        "cherry",
        "=TEXTJOIN(\", \", TRUE, A3, B3, C3)"
    ],
    [
        "Hello",
        "",
        "World",
        "=TEXTJOIN(\"-\", FALSE, A4, B4, C4)"
    ]
]
            }]
        });
    }
}
```

