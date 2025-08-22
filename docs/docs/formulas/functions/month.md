title: MONTH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MONTH function in Jspreadsheet

# MONTH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `MONTH` function is used to retrieve the month from a given date, which is represented by a serial number. This function will provide an integer value corresponding to the month, which ranges from 1 to 12. For instance, if the date is in January, the output will be 1, and if it's in December, the output will be 12. This function is very useful when you need to perform operations based on the month of a specific date.

## Documentation

Returns the month of a date represented by a serial number. The month is given as an integer, ranging from 1 (January) to 12 (December).

### Category

Date and time

### Syntax

MONTH(serial_number)

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The date for which you want to determine the month. Excel stores dates as sequential serial numbers so that they can be used in calculations. |


### Behavior

The `MONTH` function in a spreadsheet is used to obtain the month portion of a specific date. This function expects a single argument, which is the date from which the month is to be extracted. 

- If the cell is empty, the `MONTH` function will return a `#VALUE!` error.
- If the cell contains text that cannot be interpreted as a date, the `MONTH` function will return a `#VALUE!` error.
- If the cell contains a boolean, the `MONTH` function will treat it as a date starting from December 30, 1899, with TRUE being 1 (December 31, 1899) and FALSE being 0 (December 30, 1899), and return the corresponding month.
- If the cell contains an error, the `MONTH` function will propagate that error.
- The `MONTH` function always returns an integer between 1 and 12, inclusive.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function returns this error when the argument to the `MONTH` function cannot be interpreted as a date. This includes empty cells and text that does not represent a date. |
| #NUM! | This error is returned if the supplied date argument is out of the valid range (i.e., less than 1 or greater than 1E+307). |
| #REF! | This error is returned when the referenced cell is invalid. |

### Best practices

> - Always ensure that the argument to the `MONTH` function is a valid date or a cell reference to a date.
> - If you are uncertain whether a cell contains a valid date, use spreadsheet functions like `ISDATE` to check before using the `MONTH` function.
> - Be careful when using boolean values as arguments to the `MONTH` function. The results may not be what you expect.
> - To avoid confusion, it is recommended to format the result of the `MONTH` function to display as a month name rather than a number.

### Usage

A few examples using the MONTH function.

```
MONTH(DATE(2022,3,15)) returns 3  
MONTH(A1) where cell A1 contains the date 5/25/2023 returns 5  
MONTH(TODAY()) returns the current month  
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
        "Month"
    ],
    [
        "2023-01-15",
        "=MONTH(A2)"
    ],
    [
        "2023-06-22",
        "=MONTH(A3)"
    ],
    [
        "2023-12-05",
        "=MONTH(A4)"
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
        "Month"
    ],
    [
        "2023-01-15",
        "=MONTH(A2)"
    ],
    [
        "2023-06-22",
        "=MONTH(A3)"
    ],
    [
        "2023-12-05",
        "=MONTH(A4)"
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
        "Month"
    ],
    [
        "2023-01-15",
        "=MONTH(A2)"
    ],
    [
        "2023-06-22",
        "=MONTH(A3)"
    ],
    [
        "2023-12-05",
        "=MONTH(A4)"
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
        "Month"
    ],
    [
        "2023-01-15",
        "=MONTH(A2)"
    ],
    [
        "2023-06-22",
        "=MONTH(A3)"
    ],
    [
        "2023-12-05",
        "=MONTH(A4)"
    ]
]
            }]
        });
    }
}
```

