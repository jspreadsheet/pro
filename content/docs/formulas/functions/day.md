title: DAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DAY function in Jspreadsheet

# DAY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DAY` function in Jspreadsheet Formulas Pro provides the specific day of the month for any given date. The output is a numerical value, ranging from 1 to 31, that corresponds to the day in the month. This function is useful for breaking down dates into more specific components, and can be a helpful tool in organizing and analyzing your data. For instance, you can use `DAY` to find out which day of the month a particular transaction occurred or an event took place.

## Documentation

Returns the day of the month as a number (1-31) for a given date.

### Category

Date and time

### Syntax

DAY(date)

| Parameter | Description |
| ----------- | ------------- |
| `date` | The date from which to extract the day of the month. |


### Behavior

The 'DAY' function in a spreadsheet is used to return the day of a month from a given date. The value returned will be an integer ranging from 1 to 31. Here's how it handles different inputs:

- Empty cells: If the 'DAY' function is applied to an empty cell, it will return a #VALUE! error, since it expects a date value.
- Text: If the input is a text string that can be interpreted as a date (e.g., "2022-04-01"), the 'DAY' function will return the day of the month from the text string. If the text string cannot be interpreted as a date, it will return a #VALUE! error.
- Booleans: Boolean values are not valid inputs for the 'DAY' function and will return a #VALUE! error.
- Errors: If the input cell or expression results in an error, the 'DAY' function will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the input can't be interpreted as a valid date. This includes empty cells, boolean values, text strings that don't represent a date, or other non-date values. |
| #NUM! | This error is returned if the input is a date that is not supported by Excel. For example, Excel doesn't support dates before January 1, 1900, so using such a date as input will return a #NUM! error. |

### Best practices
> - Always make sure that the input for the 'DAY' function is a valid date or a text string that can be interpreted as a date.
> - Be aware of the date system used by your version of Excel. Different systems interpret dates differently, especially for dates prior to March 1, 1900.
> - Avoid using 'DAY' function with cells that have a possibility of being empty or having non-date values, as this will result in an error. If there are such possibilities, consider using error handling functions like 'IFERROR' to manage errors.
> - Use the 'DATE' function to construct a date from separate year, month, and day components before applying the 'DAY' function, if necessary.

### Usage

A few examples using the DAY function.

```
DAY(2958465) returns 31  
DAY("9999-12-31") returns 31  
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
        "Day of Month"
    ],
    [
        "2024-01-15",
        "=DAY(A2)"
    ],
    [
        "2024-06-30",
        "=DAY(A3)"
    ],
    [
        "2024-12-07",
        "=DAY(A4)"
    ],
    [
        "2024-02-29",
        "=DAY(A5)"
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
        "Day of Month"
    ],
    [
        "2024-01-15",
        "=DAY(A2)"
    ],
    [
        "2024-06-30",
        "=DAY(A3)"
    ],
    [
        "2024-12-07",
        "=DAY(A4)"
    ],
    [
        "2024-02-29",
        "=DAY(A5)"
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
        "Day of Month"
    ],
    [
        "2024-01-15",
        "=DAY(A2)"
    ],
    [
        "2024-06-30",
        "=DAY(A3)"
    ],
    [
        "2024-12-07",
        "=DAY(A4)"
    ],
    [
        "2024-02-29",
        "=DAY(A5)"
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
        "Day of Month"
    ],
    [
        "2024-01-15",
        "=DAY(A2)"
    ],
    [
        "2024-06-30",
        "=DAY(A3)"
    ],
    [
        "2024-12-07",
        "=DAY(A4)"
    ],
    [
        "2024-02-29",
        "=DAY(A5)"
    ]
]
            }]
        });
    }
}
```

