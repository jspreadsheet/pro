title: REGEXREPLACE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REGEXREPLACE function in Jspreadsheet

# REGEXREPLACE function

`PRO`{.jtag}

The `REGEXREPLACE` function in Jspreadsheet Formulas Pro is a powerful tool that allows you to replace certain parts of a text based on a pattern you define, known as a regular expression. This function takes three arguments: the original text, the regular expression which defines the pattern you want to replace, and the replacement text. The function searches the original text for any sequences that match the regular expression, and then substitutes those sequences with the replacement text. This can be especially useful for tasks like data cleaning or formatting.

## Documentation

Replaces parts of a text using a regular expression.

### Category

Text

### Syntax

REGEXREPLACE(text, regex, replacement)

| Parameter | Description |
| ----------- | ------------- |
| `text` | Text in which replacements occur. |
| `regex` | Regular expression that dictates which parts should be replaced. |
| `replacement` | Text that is inserted into the text of the first argument. |


### Behavior

`REGEXREPLACE` is a function used in spreadsheet programs to replace part of a text string with a different text string using regular expressions. The function behaves in the following ways:

1. If the cell referenced is empty or does not contain the pattern specified in the regular expression, `REGEXREPLACE` will return the original text string without any changes. 

2. If the cell contains text, `REGEXREPLACE` will replace all instances of the specified pattern in the text string with the replacement string. 

3. If the cell contains a boolean value, `REGEXREPLACE` will treat it as a text string and proceed with the replace operation. 

4. If the regular expression pattern or the replacement string is not a text string, `REGEXREPLACE` will return an error. 

5. If the cell contains an error, `REGEXREPLACE` will propagate that error.

### Common Errors

| Error Name | Description |
| :--- | :--- |
| #VALUE! | This error occurs when the regular expression is invalid, i.e., it does not follow the correct syntax for regular expressions. |
| #N/A | This error is returned when the pattern specified in the regular expression does not exist in the text string. |
| #ERROR! | This error is returned when the arguments passed in the function are not in the correct format or sequence. |

### Best practices

> - Always ensure that the regular expression pattern is valid and follows the correct syntax to avoid #VALUE! errors.
> - Specify the pattern and replacement string as text strings to avoid #ERROR! errors.
> - When using `REGEXREPLACE` on a range of cells, ensure that all cells in the range contain text strings to ensure consistent results.
> - Be aware that `REGEXREPLACE` will replace all instances of the specified pattern in the text string, not just the first instance. If you only want to replace the first instance, consider using a different function.

### Usage

A few examples using the REGEXREPLACE function.

```
REGEXREPLACE("The price today is (price)", "\(price\)", "$10") returns "The price today is $10"  
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
        "Email",
        "Clean Email",
        "Formula"
    ],
    [
        "john.doe123@email.com",
        "john.doe@email.com",
        "=REGEXREPLACE(A2,\"\\d+\",\"\")"
    ],
    [
        "sarah_smith456@company.org",
        "sarah_smith@company.org",
        "=REGEXREPLACE(A3,\"\\d+\",\"\")"
    ],
    [
        "mike.wilson789@domain.net",
        "mike.wilson@domain.net",
        "=REGEXREPLACE(A4,\"\\d+\",\"\")"
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
        "Email",
        "Clean Email",
        "Formula"
    ],
    [
        "john.doe123@email.com",
        "john.doe@email.com",
        "=REGEXREPLACE(A2,\"\\d+\",\"\")"
    ],
    [
        "sarah_smith456@company.org",
        "sarah_smith@company.org",
        "=REGEXREPLACE(A3,\"\\d+\",\"\")"
    ],
    [
        "mike.wilson789@domain.net",
        "mike.wilson@domain.net",
        "=REGEXREPLACE(A4,\"\\d+\",\"\")"
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
        "Email",
        "Clean Email",
        "Formula"
    ],
    [
        "john.doe123@email.com",
        "john.doe@email.com",
        "=REGEXREPLACE(A2,\"\\d+\",\"\")"
    ],
    [
        "sarah_smith456@company.org",
        "sarah_smith@company.org",
        "=REGEXREPLACE(A3,\"\\d+\",\"\")"
    ],
    [
        "mike.wilson789@domain.net",
        "mike.wilson@domain.net",
        "=REGEXREPLACE(A4,\"\\d+\",\"\")"
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
        "Email",
        "Clean Email",
        "Formula"
    ],
    [
        "john.doe123@email.com",
        "john.doe@email.com",
        "=REGEXREPLACE(A2,\"\\d+\",\"\")"
    ],
    [
        "sarah_smith456@company.org",
        "sarah_smith@company.org",
        "=REGEXREPLACE(A3,\"\\d+\",\"\")"
    ],
    [
        "mike.wilson789@domain.net",
        "mike.wilson@domain.net",
        "=REGEXREPLACE(A4,\"\\d+\",\"\")"
    ]
]
            }]
        });
    }
}
```

