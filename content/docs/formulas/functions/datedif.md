title: DATEDIF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DATEDIF function in Jspreadsheet

# DATEDIF function

`PRO`{.jtag}

The `DATEDIF` function in Jspreadsheet Formulas Pro is used to calculate the difference between two dates based on a specified interval. This could be in terms of days, months, or years. You provide two dates, the start date and the end date, and the interval type, and the function will return the difference according to your chosen interval. This is particularly useful when you need to find out the duration between two specific dates.

## Documentation

Calculates the difference between two dates based on the specified interval.

### Category

Date and time

### Syntax

DATEDIF(start_date, end_date, interval)

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date of the time period. |
| `end_date` | The end date of the time period. |
| `interval` | The type of time unit to use for the calculation: "Y" for full years, "M" for full months, and "D" for full days. Use "MD" to get the number of days between two dates that fall in different months, or "YM" to get the number of months between two dates that fall in different years. |


### Behavior

The `DATEDIF` spreadsheet function calculates the number of days, months, or years between two dates. Here is how it handles various inputs:

1. **Empty cells**: If either or both of the date cells are empty, `DATEDIF` returns a `#VALUE!` error due to invalid or missing inputs.
2. **Text**: If a cell contains text instead of a date, `DATEDIF` returns a `#VALUE!` error since it only works with date values.
3. **Booleans**: Boolean values are not valid inputs for `DATEDIF`. If a cell contains a boolean value, the function returns a `#VALUE!` error.
4. **Errors**: If a cell referenced in the `DATEDIF` computation contains an error, the function propagates that error.
5. **Dates**: It expects the start date to be less than or equal to the end date. If the start date is greater than the end date, `DATEDIF` returns a `#NUM!` error.
6. **Units**: The unit parameter in `DATEDIF` should be a text value either "Y" for years, "M" for months, "D" for days, "YM" for months excluding years, "YD" for days excluding years, or "MD" for days excluding years and months. Any other value will result in a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when the start date, end date, or both are not valid dates (e.g., empty cells, text, boolean values, etc). It also occurs if an invalid unit is provided. |
| `#NUM!` | This error occurs when the start date is greater than the end date.|

### Best practices

> 1. Always ensure that your start date is less than or equal to your end date to avoid a `#NUM!` error.
> 2. Only use valid date formats that your spreadsheet software recognizes. Inconsistent or incorrect date formats can lead to errors or incorrect results.
> 3. Be aware that `DATEDIF` ignores time values in dates. If you need to account for time, consider using a different function or calculation.
> 4. Ensure the unit parameter is correctly specified as either "Y", "M", "D", "YM", "YD", or "MD". Other values will result in a `#VALUE!` error.

### Usage

A few examples using the DATEDIF function.

```
DATEDIF("2022-01-01","2022-03-15","d")  
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
        "Days Between"
    ],
    [
        "2024-01-15",
        "2024-03-20",
        "=DATEDIF(A2,B2,\"d\")"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        "=DATEDIF(A3,B3,\"y\")"
    ],
    [
        "2024-02-10",
        "2024-08-25",
        "=DATEDIF(A4,B4,\"m\")"
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
        "Days Between"
    ],
    [
        "2024-01-15",
        "2024-03-20",
        "=DATEDIF(A2,B2,\"d\")"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        "=DATEDIF(A3,B3,\"y\")"
    ],
    [
        "2024-02-10",
        "2024-08-25",
        "=DATEDIF(A4,B4,\"m\")"
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
        "Days Between"
    ],
    [
        "2024-01-15",
        "2024-03-20",
        "=DATEDIF(A2,B2,\"d\")"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        "=DATEDIF(A3,B3,\"y\")"
    ],
    [
        "2024-02-10",
        "2024-08-25",
        "=DATEDIF(A4,B4,\"m\")"
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
        "Days Between"
    ],
    [
        "2024-01-15",
        "2024-03-20",
        "=DATEDIF(A2,B2,\"d\")"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        "=DATEDIF(A3,B3,\"y\")"
    ],
    [
        "2024-02-10",
        "2024-08-25",
        "=DATEDIF(A4,B4,\"m\")"
    ]
]
            }]
        });
    }
}
```

