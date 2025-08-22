title: REGEXEXTRACT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REGEXEXTRACT function in Jspreadsheet

# REGEXEXTRACT function

`PRO`{.jtag}

The `REGEXEXTRACT` function in Jspreadsheet Formulas Pro is a powerful tool that allows you to extract specific parts of a text based on a given pattern, known as a regular expression. This function is especially useful when you need to sift through large amounts of text and pull out certain pieces of information. For example, you could use it to extract all email addresses from a long document. The `REGEXEXTRACT` function makes this process much more efficient and accurate by automating it.

## Documentation

Extracts parts of a text using a regular expression.

### Category

Text

### Syntax

REGEXEXTRACT(text, regex)

| Parameter | Description |
| ----------- | ------------- |
| `text` | Text from which the parts will be extracted. |
| `regex` | Regular expression that dictates which parts should be extracted. |


### Behavior

The 'REGEXEXTRACT' function in spreadsheets is used to extract matching substrings according to a regular expression. Here's how it handles different types of data:

- Empty cells: If a cell is empty, 'REGEXEXTRACT' will return an empty string.
- Text: 'REGEXEXTRACT' operates on text strings. The function will match the regular expression against the text and return the first matching substring.
- Numbers: If a number is passed, it will be treated as a text string and 'REGEXEXTRACT' will try to match the regular expression against it.
- Booleans: Booleans are converted to their text representations ('TRUE' or 'FALSE') and then 'REGEXEXTRACT' will try to match the regular expression against these.
- Errors: If 'REGEXEXTRACT' cannot find a match or if the regular expression is invalid, it will return a #N/A error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the given regular expression is invalid. |
| #N/A | This error is returned when 'REGEXEXTRACT' cannot find a match. |
| #ERROR! | This error is returned for general errors, such as when the function is not given the required number of arguments. |

### Best practices

> - Always ensure that the regular expression is valid and correctly formatted to avoid #VALUE! errors.
> - Remember that 'REGEXEXTRACT' will return the first match it finds. If you want to extract all matches, you may need to use an array formula or script.
> - Be aware that 'REGEXEXTRACT' is case sensitive. If you need to perform a case insensitive extraction, make sure to adjust your regular expression accordingly.
> - Check your data type. If you want to extract data from numbers or booleans, make sure they are converted to text beforehand.

### Usage

A few examples using the REGEXEXTRACT function.

```
REGEXEXTRACT("The price today is $826.25", "[0-9]+.[0-9]+[0-9]+") returns "826.25"  
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
        "Extract Domain"
    ],
    [
        "john.doe@gmail.com",
        "=REGEXEXTRACT(A2, \"@(.+)\")",
        ""
    ],
    [
        "sarah.smith@company.org",
        "=REGEXEXTRACT(A3, \"@(.+)\")",
        ""
    ],
    [
        "mike.jones@university.edu",
        "=REGEXEXTRACT(A4, \"@(.+)\")",
        ""
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
        "Extract Domain"
    ],
    [
        "john.doe@gmail.com",
        "=REGEXEXTRACT(A2, \"@(.+)\")",
        ""
    ],
    [
        "sarah.smith@company.org",
        "=REGEXEXTRACT(A3, \"@(.+)\")",
        ""
    ],
    [
        "mike.jones@university.edu",
        "=REGEXEXTRACT(A4, \"@(.+)\")",
        ""
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
        "Extract Domain"
    ],
    [
        "john.doe@gmail.com",
        "=REGEXEXTRACT(A2, \"@(.+)\")",
        ""
    ],
    [
        "sarah.smith@company.org",
        "=REGEXEXTRACT(A3, \"@(.+)\")",
        ""
    ],
    [
        "mike.jones@university.edu",
        "=REGEXEXTRACT(A4, \"@(.+)\")",
        ""
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
        "Extract Domain"
    ],
    [
        "john.doe@gmail.com",
        "=REGEXEXTRACT(A2, \"@(.+)\")",
        ""
    ],
    [
        "sarah.smith@company.org",
        "=REGEXEXTRACT(A3, \"@(.+)\")",
        ""
    ],
    [
        "mike.jones@university.edu",
        "=REGEXEXTRACT(A4, \"@(.+)\")",
        ""
    ]
]
            }]
        });
    }
}
```

