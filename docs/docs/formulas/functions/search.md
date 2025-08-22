title: SEARCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SEARCH function in Jspreadsheet

# SEARCH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SEARCH` function in Jspreadsheet Formulas Pro is a useful tool that helps you find the starting point of a specific text string within a larger string. It begins its search from the leftmost character. If the specific text you're searching for is present, the function will give you its position in the larger string. However, if the text is not found within the larger string, it will simply return '#VALUE!'.

## Documentation

Returns the starting position of a text string within another text string, starting from the leftmost character. If the text is not found, returns #VALUE!

### Category

Text

### Syntax

SEARCH(find_text, within_text,[start_num])

| Parameter | Description |
| ----------- | ------------- |
| `find_text` | The text to find. |
| `within_text` | The text to search within. |
| `[start_num]` | Optional. The starting position of the search. Default is 1. |


### Behavior

The `SEARCH` function in a spreadsheet is used to find the position of a particular string within another string. The function returns the start position of the first occurrence of the search text within the text. The search is not case-sensitive. 

- If the `SEARCH` function does not find the search text within the text, it returns an `#VALUE!` error.
- If the start number provided is less than 1, the function returns `#VALUE!` error.
- If the start number provided is greater than the length of the text, the function returns `#VALUE!` error.
- The function will ignore empty cells.
- The function can handle text, and it will treat numbers as text.
- The function cannot directly handle boolean values. If a boolean value is provided, it will be treated as text.
- The function is not case-sensitive, so it will treat 'A' and 'a' as the same.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned if the `SEARCH` function does not find the search text within the text, or if the start number provided is less than 1 or greater than the length of the text. |
| `#N/A` | This error is returned if the function is unable to evaluate one or more of the provided arguments.|

### Best practices

> - Always check the text and the search text for any possible error that might occur due to case sensitivity.
> - Use the `ISERROR` function to handle possible errors that might occur when the `SEARCH` function does not find the search text within the text.
> - Be mindful when using the start number argument. Make sure it is not less than 1 and not greater than the length of the text.
> - Remember that `SEARCH` function treats numbers as text, so if you are trying to find a numerical value, ensure your search term is formatted as text.

### Usage

A few examples using the SEARCH function.

```
SEARCH("blue","The sky is blue.")  
SEARCH("red","The sky is blue.")  
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
        "Search Term",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=SEARCH(B2,A2)"
    ],
    [
        "sales@business.org",
        "business",
        "=SEARCH(B3,A3)"
    ],
    [
        "info@website.net",
        "xyz",
        "=SEARCH(B4,A4)"
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
        "Search Term",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=SEARCH(B2,A2)"
    ],
    [
        "sales@business.org",
        "business",
        "=SEARCH(B3,A3)"
    ],
    [
        "info@website.net",
        "xyz",
        "=SEARCH(B4,A4)"
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
        "Search Term",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=SEARCH(B2,A2)"
    ],
    [
        "sales@business.org",
        "business",
        "=SEARCH(B3,A3)"
    ],
    [
        "info@website.net",
        "xyz",
        "=SEARCH(B4,A4)"
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
        "Search Term",
        "Position"
    ],
    [
        "john.doe@company.com",
        "@",
        "=SEARCH(B2,A2)"
    ],
    [
        "sales@business.org",
        "business",
        "=SEARCH(B3,A3)"
    ],
    [
        "info@website.net",
        "xyz",
        "=SEARCH(B4,A4)"
    ]
]
            }]
        });
    }
}
```

