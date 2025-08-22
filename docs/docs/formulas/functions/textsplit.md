title: TEXTSPLIT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TEXTSPLIT function in Jspreadsheet

# TEXTSPLIT function

`PRO`{.jtag}

The `TEXTSPLIT` function in Jspreadsheet Formulas Pro is a tool that helps you divide a block of text into smaller parts, known as substrings. These substrings are broken up based on certain characters or symbols, called delimiters, that you specify. For example, if you have a list of items separated by commas, you can use `TEXTSPLIT` to separate each item into its own substring. This function is very useful for organizing and managing data in your spreadsheet.

## Documentation

Splits a text string into an array of substrings based on specified delimiters.

### Category

Text

### Syntax

TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to split. |
| `col_delimiter` | The character or string used to separate columns within the text string. |
| `[row_delimiter]` | Optional: The character or string used to separate rows within the text string. If not specified, the entire text is treated as one row. |
| `[ignore_empty]` | Optional: A boolean value (TRUE or FALSE) that determines whether empty cells should be included in the result. By default, empty cells are included (TRUE). |
| `[match_mode]` | Optional: A text value that specifies the matching mode. Possible values are 'exact' (default) or 'partial'. In 'partial' mode, the delimiter is treated as a regular expression pattern for splitting. |
| `[pad_with]` | Optional: A text value used to pad columns to a consistent length. If specified, shorter columns are padded with this text to match the length of the longest column. |


### Behavior

The `TEXTSPLIT` function is used to split a text string into a list or array based on a specified delimiter. Here's how it generally behaves:

- For text: The function splits the text into separate cells based on the specified delimiter.
- For numbers: Numbers are treated as text and are split based on the delimiter.
- For boolean values: Boolean values are converted to text (TRUE or FALSE) and then split.
- For empty cells: An empty cell is returned as an empty text ("").
- For errors: If there's an error in the input, the function will return an error.
- For array or range input: `TEXTSPLIT` can be used on arrays or ranges of cells, splitting each cell's content and returning an array of results.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error usually occurs when the wrong type of argument or operand is used. |
| #N/A | This error occurs when the specified delimiter is not found in the text string. |
| #ERROR! | This error occurs when the function is used with incorrect, inappropriate, or malformed syntax. |

### Best practices

> - Always ensure that the delimiter you specify is present in the text string you want to split. If it's not, the function will return an error.
> - Be aware that this function treats all inputs as text. If you're working with numbers or boolean values, remember they will be converted to text first.
> - If you're splitting a text string that contains numbers, and you want to use the results as numbers (for mathematical operations, for instance), you'll need to convert the split results back to numbers.
> - When working with large amounts of text, be aware that the function might return a large array. Make sure your sheet has enough space to accommodate the results.

### Usage

A few examples using the TEXTSPLIT function.

```
TEXTSPLIT("apple, banana, cherry", ", ") returns [["apple", "banana", "cherry"]]  
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
        "Name",
        "Skills",
        "Split Skills"
    ],
    [
        "John Smith",
        "Excel, PowerPoint, Word",
        "=TEXTSPLIT(B2, \", \")"
    ],
    [
        "Sarah Jones",
        "Python, SQL, Tableau",
        "=TEXTSPLIT(B3, \", \")"
    ],
    [
        "Mike Chen",
        "JavaScript, HTML, CSS, React",
        "=TEXTSPLIT(B4, \", \")"
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
        "Name",
        "Skills",
        "Split Skills"
    ],
    [
        "John Smith",
        "Excel, PowerPoint, Word",
        "=TEXTSPLIT(B2, \", \")"
    ],
    [
        "Sarah Jones",
        "Python, SQL, Tableau",
        "=TEXTSPLIT(B3, \", \")"
    ],
    [
        "Mike Chen",
        "JavaScript, HTML, CSS, React",
        "=TEXTSPLIT(B4, \", \")"
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
        "Name",
        "Skills",
        "Split Skills"
    ],
    [
        "John Smith",
        "Excel, PowerPoint, Word",
        "=TEXTSPLIT(B2, \", \")"
    ],
    [
        "Sarah Jones",
        "Python, SQL, Tableau",
        "=TEXTSPLIT(B3, \", \")"
    ],
    [
        "Mike Chen",
        "JavaScript, HTML, CSS, React",
        "=TEXTSPLIT(B4, \", \")"
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
        "Name",
        "Skills",
        "Split Skills"
    ],
    [
        "John Smith",
        "Excel, PowerPoint, Word",
        "=TEXTSPLIT(B2, \", \")"
    ],
    [
        "Sarah Jones",
        "Python, SQL, Tableau",
        "=TEXTSPLIT(B3, \", \")"
    ],
    [
        "Mike Chen",
        "JavaScript, HTML, CSS, React",
        "=TEXTSPLIT(B4, \", \")"
    ]
]
            }]
        });
    }
}
```

