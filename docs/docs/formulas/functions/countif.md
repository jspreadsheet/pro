title: COUNTIF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNTIF function in Jspreadsheet

# COUNTIF function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COUNTIF` function in Jspreadsheet Formulas Pro is a tool that helps you tally the number of cells within a specific range that satisfy a particular condition. This can be a numerical value, text, or even a date that you're looking for within the data. For example, you can use it to count how many times a certain product name appears in a sales list or how many employees have a specific job title. It's a useful way to extract specific insights from your data.

## Documentation

Counts the number of cells in a range that meet a specified criterion.

### Category

Statistical

### Syntax

COUNTIF(range, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of cells to be evaluated by the criteria. |
| `criteria` | The criteria used to determine which cells to count. |


### Behavior

The `COUNTIF` function in spreadsheets is used to count the number of cells that meet a single criterion that you specify. The criterion can be a number, expression, text, or function that defines which cells will be counted. Here's how it generally behaves:

- Empty cells: `COUNTIF` does not consider empty cells unless the criterion explicitly asks for it (e.g., `COUNTIF(A1:A10, "=")`).
- Text: `COUNTIF` can count cells that contain specific text or string patterns. It is case-insensitive.
- Booleans: `COUNTIF` can count cells containing Boolean values (`TRUE` or `FALSE`) when the criterion matches these values.
- Errors: If a cell contains an error, `COUNTIF` generally does not count it unless the criterion is to specifically count cells with errors.
- Wildcards: `COUNTIF` supports wildcard characters. Use `?` to match any single character and `*` to match any sequence of characters.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if the supplied criteria is a text string which is more than 255 characters in length. |
| #N/A | Occurs if the specified range does not exist. |
| Incorrect result | This is not an error message, but a faulty outcome. It usually occurs when the criteria is set up incorrectly. For instance, if you set the criteria as ">32", but all the numbers are less than 32, it will return a count of 0. |

### Best practices

> - Always check your criteria: The criteria is the heart of the `COUNTIF` function. Make sure it's set up correctly to get the desired result.
> - Use wildcards wisely: Wildcards can be very helpful when dealing with text, but remember that `?` matches any single character and `*` matches any sequence of characters.
> - Be cautious with non-numeric criteria: If your criteria is a text or expression, make sure to enclose it in quotation marks.
> - Handle errors: Consider using functions like `ISERROR` or `IFERROR` alongside `COUNTIF` to handle cells with errors, to prevent them from negatively impacting your count.

### Usage

A few examples using the COUNTIF function.

```
COUNTIF(A1:A10,">5") returns the number of cells in A1 through A10 that are greater than 5  
COUNTIF(B2:D5,"=Bob") returns the number of cells in range B2 through D5 that equal "Bob"  
COUNTIF(H1:H100,"<>0") returns the number of cells in column H from rows 1 through 100 that are not equal to 0  
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
        "Product",
        "Quantity",
        "Count >10"
    ],
    [
        "Apples",
        15,
        "=COUNTIF(B:B,\">10\")"
    ],
    [
        "Bananas",
        8
    ],
    [
        "Oranges",
        12
    ],
    [
        "Grapes",
        5
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
        "Product",
        "Quantity",
        "Count >10"
    ],
    [
        "Apples",
        15,
        "=COUNTIF(B:B,\">10\")"
    ],
    [
        "Bananas",
        8
    ],
    [
        "Oranges",
        12
    ],
    [
        "Grapes",
        5
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
        "Product",
        "Quantity",
        "Count >10"
    ],
    [
        "Apples",
        15,
        "=COUNTIF(B:B,\">10\")"
    ],
    [
        "Bananas",
        8
    ],
    [
        "Oranges",
        12
    ],
    [
        "Grapes",
        5
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
        "Product",
        "Quantity",
        "Count >10"
    ],
    [
        "Apples",
        15,
        "=COUNTIF(B:B,\">10\")"
    ],
    [
        "Bananas",
        8
    ],
    [
        "Oranges",
        12
    ],
    [
        "Grapes",
        5
    ]
]
            }]
        });
    }
}
```

