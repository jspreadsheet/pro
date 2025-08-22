title: SPLIT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SPLIT function in Jspreadsheet

# SPLIT function

`PRO`{.jtag}

The `SPLIT` function in Jspreadsheet Formulas Pro is a handy tool that helps you divide a block of text into multiple parts, based on a specific character, known as a delimiter. For example, if you have a list of names written as 'John, Sara, Mike', and you'd like each name in a separate cell, you can use the `SPLIT` function with a comma as your delimiter. This will result in three separate cells: 'John', 'Sara', and 'Mike'. It's a great way to organize and separate data for easier analysis.

## Documentation

Splits a text string into a table of substrings based on a delimiter.

### Category

Text

### Syntax

SPLIT(text, delimiter)

| Parameter | Description |
| ----------- | ------------- |
| `text` | The text string to be split. |
| `delimiter` | The character or characters that separate the substrings in the text string. |


### Behavior

The `SPLIT` function in spreadsheets is used to divide text around a specified character(s) and put each fragment into a separate cell in the row. Here's how it handles different types of data:

- **Empty cells**: If the cell is empty, `SPLIT` will return an empty cell.
- **Text**: `SPLIT` will divide the text at each instance of the specified character(s). 
- **Booleans**: If Boolean values (TRUE/FALSE) are included, `SPLIT` will treat them as text and split accordingly.
- **Errors**: If the specified character(s) to split text is not found in the cell, `SPLIT` will return the original text.
- **Numbers**: `SPLIT` will treat numbers as text and split accordingly.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the function cannot find the specified character(s) to split the cell content. |
| #REF! | This error occurs when the function has no room to return its results. This usually happens when there is content in the cells where the splitting results would go. |
| #N/A | This error occurs when the split text results exceed the column limit of the spreadsheet (usually 256 in Excel). |

### Best practices

> - Always ensure there is enough empty space in the row for the `SPLIT` function to display all the results. If there's content in the cells where the split results would go, it may overwrite the existing data.
> - Use unique character(s) for splitting that do not appear in the text except as separators.
> - Be aware that `SPLIT` is case-sensitive. For example, it will treat "a" and "A" as different characters.
> - If you're splitting text that includes numbers, ensure the numbers are formatted as text to avoid unexpected results.

### Usage

A few examples using the SPLIT function.

```
SPLIT('apple,banana,orange', ',') returns ['apple', 'banana', 'orange']  
SPLIT('Hello world', ' ') returns ['Hello', 'world']  
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
        "apple,banana,orange",
        "=SPLIT(A1,\",\")"
    ],
    [
        "John Doe;Jane Smith;Bob Wilson",
        "=SPLIT(A2,\";\")"
    ],
    [
        "red|blue|green|yellow",
        "=SPLIT(A3,\"|\")"
    ],
    [
        "Monday Tuesday Wednesday",
        "=SPLIT(A4,\" \")"
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
        "apple,banana,orange",
        "=SPLIT(A1,\",\")"
    ],
    [
        "John Doe;Jane Smith;Bob Wilson",
        "=SPLIT(A2,\";\")"
    ],
    [
        "red|blue|green|yellow",
        "=SPLIT(A3,\"|\")"
    ],
    [
        "Monday Tuesday Wednesday",
        "=SPLIT(A4,\" \")"
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
        "apple,banana,orange",
        "=SPLIT(A1,\",\")"
    ],
    [
        "John Doe;Jane Smith;Bob Wilson",
        "=SPLIT(A2,\";\")"
    ],
    [
        "red|blue|green|yellow",
        "=SPLIT(A3,\"|\")"
    ],
    [
        "Monday Tuesday Wednesday",
        "=SPLIT(A4,\" \")"
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
        "apple,banana,orange",
        "=SPLIT(A1,\",\")"
    ],
    [
        "John Doe;Jane Smith;Bob Wilson",
        "=SPLIT(A2,\";\")"
    ],
    [
        "red|blue|green|yellow",
        "=SPLIT(A3,\"|\")"
    ],
    [
        "Monday Tuesday Wednesday",
        "=SPLIT(A4,\" \")"
    ]
]
            }]
        });
    }
}
```

