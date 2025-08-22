title: YEARFRAC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the YEARFRAC function in Jspreadsheet

# YEARFRAC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `YEARFRAC` function in Jspreadsheet Formulas Pro is a useful tool for calculating the fraction of a year between two dates, which is then presented as a decimal value. You simply input two dates into the function, and it will provide the proportion of the year that has passed between them. This can be particularly useful for financial calculations or tracking project timelines where precise time measurements are required.

## Documentation

Returns the fraction of a year between two dates, represented as a decimal value.

### Category

Date and time

### Syntax

YEARFRAC(start_date, end_date, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date of the period. |
| `end_date` | The end date of the period. |
| `basis` | Optional. The day count basis to use in the calculation. Can be 0, 1, 2, 3, or 4. If omitted, it defaults to 0 (US (NASD) 30/360). |


### Behavior

The `YEARFRAC` function in spreadsheet calculates the fraction of the year represented by the number of whole days between two dates (start_date and end_date). The syntax for this function is `YEARFRAC(start_date, end_date, [basis])` where `basis` is an optional argument that specifies the type of day count basis to use.

Here are some behaviors to expect:

1. Empty Cells: If either `start_date` or `end_date` is an empty cell, the function will return a `#VALUE!` error.
2. Text: If either `start_date` or `end_date` is text that cannot be interpreted as a date, the function will return a `#VALUE!` error.
3. Booleans: If either `start_date` or `end_date` is a boolean value, the function will return a `#VALUE!` error.
4. Errors: If either `start_date` or `end_date` contains an error, the function will propagate that error.
5. If the `basis` argument is not provided, the function will default to using the US (NASD) 30/360 basis.
6. If an invalid `basis` argument is provided, the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | ----------- |
| `#VALUE!` | This error occurs when either `start_date` or `end_date` cannot be interpreted as a valid date. This includes empty cells, text that cannot be parsed into a date, and boolean values. |
| `#NUM!` | This error occurs when an invalid `basis` argument is provided. Valid `basis` values are integers from 0 to 4. |

### Best practices

> - Always ensure that `start_date` and `end_date` are valid dates. You can use date functions to construct these dates if necessary.
> - Be mindful of the optional `basis` argument. If not provided, the function defaults to the US (NASD) 30/360 day count convention. Depending on your use case, you may need to specify a different `basis`.
> - Be aware that `YEARFRAC` calculates the year fraction based on whole days. Therefore, the function may not return accurate results if you need to account for fractions of days.
> - Use error checking functions like `ISERROR` or `IFERROR` to handle possible error values that `YEARFRAC` may return.

### Usage

A few examples using the YEARFRAC function.

```
YEARFRAC("2022-01-01", "2022-03-15") returns: 0.197222  
YEARFRAC("1995-12-31", "2000-01-01", 1) returns: 4.008219  
YEARFRAC("2000-01-01", "2000-02-29", 4) returns: 0.164383  
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
        "Start Date",
        "End Date",
        "Year Fraction"
    ],
    [
        "2023-01-01",
        "2023-06-30",
        "=YEARFRAC(A2,B2)"
    ],
    [
        "2022-03-15",
        "2023-03-15",
        "=YEARFRAC(A3,B3)"
    ],
    [
        "2020-02-01",
        "2020-02-29",
        "=YEARFRAC(A4,B4)"
    ],
    [
        "2021-12-01",
        "2022-05-15",
        "=YEARFRAC(A5,B5)"
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
        "Start Date",
        "End Date",
        "Year Fraction"
    ],
    [
        "2023-01-01",
        "2023-06-30",
        "=YEARFRAC(A2,B2)"
    ],
    [
        "2022-03-15",
        "2023-03-15",
        "=YEARFRAC(A3,B3)"
    ],
    [
        "2020-02-01",
        "2020-02-29",
        "=YEARFRAC(A4,B4)"
    ],
    [
        "2021-12-01",
        "2022-05-15",
        "=YEARFRAC(A5,B5)"
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
        "Start Date",
        "End Date",
        "Year Fraction"
    ],
    [
        "2023-01-01",
        "2023-06-30",
        "=YEARFRAC(A2,B2)"
    ],
    [
        "2022-03-15",
        "2023-03-15",
        "=YEARFRAC(A3,B3)"
    ],
    [
        "2020-02-01",
        "2020-02-29",
        "=YEARFRAC(A4,B4)"
    ],
    [
        "2021-12-01",
        "2022-05-15",
        "=YEARFRAC(A5,B5)"
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
        "Start Date",
        "End Date",
        "Year Fraction"
    ],
    [
        "2023-01-01",
        "2023-06-30",
        "=YEARFRAC(A2,B2)"
    ],
    [
        "2022-03-15",
        "2023-03-15",
        "=YEARFRAC(A3,B3)"
    ],
    [
        "2020-02-01",
        "2020-02-29",
        "=YEARFRAC(A4,B4)"
    ],
    [
        "2021-12-01",
        "2022-05-15",
        "=YEARFRAC(A5,B5)"
    ]
]
            }]
        });
    }
}
```

