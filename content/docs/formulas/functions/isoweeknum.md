title: ISOWEEKNUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISOWEEKNUM function in Jspreadsheet

# ISOWEEKNUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISOWEEKNUM` is a function in Jspreadsheet Formulas Pro that provides the ISO week number corresponding to a specific date. This ISO week number is an integer that ranges from 1 to 53. The first week of the year, or week 1, is defined as the week which includes January 4th. Thus, by inputting a chosen date into this function, you can easily find out which week of the year it falls into according to the ISO standard.

## Documentation

Returns the ISO week number for a given date as an integer between 1 and 53, where week 1 is the week containing January 4.

### Category

Date and time

### Syntax

ISOWEEKNUM(date)

| Parameter | Description |
| ----------- | ------------- |
| `date` | The date for which you want to find the ISO week number. |


### Behavior

The `ISOWEEKNUM` function in spreadsheets returns the ISO week number of a specific date. The ISO week number corresponds to the week of the year based on the ISO 8601 standard, which follows a specific set of rules:
- Weeks start on Monday.
- The first week of the year is the week that includes the first Thursday of the year.

The `ISOWEEKNUM` function requires a date as an argument. When the function encounters different types of input, it behaves as follows:
- Empty Cells: If an empty cell is passed as an argument, the function returns a `#VALUE!` error.
- Text: If a text string that can be interpreted as a date is passed as an argument, the function will return the ISO week number of that date. If the text cannot be interpreted as a date, the function returns a `#VALUE!` error.
- Boolean Values: Boolean values are not valid arguments for the `ISOWEEKNUM` function. Providing a boolean value will result in a `#VALUE!` error.
- Error Values: If the argument is an error value, the function propagates the error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error occurs when the argument to `ISOWEEKNUM` is not a valid date, is an error value, or is empty.|
| `#NUM!` | This error occurs when the date provided as an argument is out of the valid range. The valid range for dates is 01/01/1900 to 12/31/9999. |

### Best practices

> - Always ensure that the argument passed to `ISOWEEKNUM` is a valid date. If the input data might be in a different format, consider using data validation or date parsing functions to standardize it before passing it to `ISOWEEKNUM`.
> - Remember that `ISOWEEKNUM` follows the ISO 8601 standard. This means that weeks start on Monday and the first week of the year is the one that includes the first Thursday. This might be different from other week numbering systems you are familiar with.
> - Keep in mind that `ISOWEEKNUM` can only handle dates from 01/01/1900 to 12/31/9999. If you're working with dates outside this range, you'll need to use a different approach.
> - If you're using `ISOWEEKNUM` in a complex formula, remember that it can return errors if the argument is not a valid date. Make sure to handle these potential errors to ensure your formulas remain robust.

### Usage

A few examples using the ISOWEEKNUM function.

```
ISOWEEKNUM("2022-01-01") returns 52 because January 1, 2022 falls in the last week of 2021 according to the ISO standard  
ISOWEEKNUM(D3) returns the ISO week number for the date in cell D3  
ISOWEEKNUM(TODAY()) returns the current ISO week number based on the system clock.  
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
        "Date",
        "ISO Week Number"
    ],
    [
        "2024-01-01",
        "=ISOWEEKNUM(A2)"
    ],
    [
        "2024-07-15",
        "=ISOWEEKNUM(A3)"
    ],
    [
        "2024-12-30",
        "=ISOWEEKNUM(A4)"
    ],
    [
        "2023-01-02",
        "=ISOWEEKNUM(A5)"
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
        "Date",
        "ISO Week Number"
    ],
    [
        "2024-01-01",
        "=ISOWEEKNUM(A2)"
    ],
    [
        "2024-07-15",
        "=ISOWEEKNUM(A3)"
    ],
    [
        "2024-12-30",
        "=ISOWEEKNUM(A4)"
    ],
    [
        "2023-01-02",
        "=ISOWEEKNUM(A5)"
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
        "Date",
        "ISO Week Number"
    ],
    [
        "2024-01-01",
        "=ISOWEEKNUM(A2)"
    ],
    [
        "2024-07-15",
        "=ISOWEEKNUM(A3)"
    ],
    [
        "2024-12-30",
        "=ISOWEEKNUM(A4)"
    ],
    [
        "2023-01-02",
        "=ISOWEEKNUM(A5)"
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
        "Date",
        "ISO Week Number"
    ],
    [
        "2024-01-01",
        "=ISOWEEKNUM(A2)"
    ],
    [
        "2024-07-15",
        "=ISOWEEKNUM(A3)"
    ],
    [
        "2024-12-30",
        "=ISOWEEKNUM(A4)"
    ],
    [
        "2023-01-02",
        "=ISOWEEKNUM(A5)"
    ]
]
            }]
        });
    }
}
```

