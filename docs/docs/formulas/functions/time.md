title: TIME function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TIME function in Jspreadsheet

# TIME function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TIME` function in Jspreadsheet Formulas Pro is a handy tool that returns a decimal value representing a specific time. It accepts three arguments - hour, minute, and second, and computes them to give a decimal representation of the time. For instance, the formula `TIME(13,30,0)` would yield 0.5625, which corresponds to 1:30 PM. It's a straightforward and efficient way to work with time in your Jspreadsheet projects.

## Documentation

Returns a decimal value representing a specific time.

### Category

Date and time

### Syntax

TIME(hour, minute, second)

| Parameter | Description |
| ----------- | ------------- |
| `hour` | The hour of the time that you want to represent. |
| `minute` | The minute of the time that you want to represent. |
| `second` | The second of the time that you want to represent. If omitted, defaults to 0. |


### Behavior

The `TIME` function in spreadsheets is used to convert hours, minutes, and seconds given as numbers into a time in the format of `hh:mm:ss`. It takes three arguments, each representing hours, minutes, and seconds respectively. 

- If any of the arguments are left empty, the function assumes it to be zero.
- The function does not accept text inputs. If any of the arguments are text, it will return a `#VALUE!` error.
- It can handle boolean values, treating `TRUE` as 1 and `FALSE` as 0.
- The function accepts a range of values. For hours, the acceptable range is 0-32767. For minutes and seconds, the acceptable range is 0-32767. Any values outside these ranges will result in a `#NUM!` error.
- If an invalid argument or operation is performed, such as division by zero, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the supplied arguments are non-numeric. |
| #NUM! | This error is displayed when the supplied arguments are outside the acceptable range. |
| #DIV/0! | This error is shown if any argument involves a division operation by zero. |

### Best practices

> - Always ensure that the arguments given to the `TIME` function are numeric. If you're using cell references, make sure they contain numeric values.
> - Keep an eye on the acceptable range for each argument. Exceeding the range will result in an error.
> - Avoid performing any operations that could result in division by zero within the arguments.
> - Use error handling functions like `IFERROR` or `ISERROR` to handle possible errors and maintain the cleanliness of your data.

### Usage

A few examples using the TIME function.

```
TIME(12, 30, 15) returns 0.5201388889  
TIME(8, 0, 0) returns 0.3333333333  
TIME(16, 45) returns 0.6979166667  
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
        "Hour",
        "Minute",
        "Second",
        "Time Value"
    ],
    [
        9,
        15,
        30,
        "=TIME(A2,B2,C2)"
    ],
    [
        14,
        45,
        0,
        "=TIME(A3,B3,C3)"
    ],
    [
        23,
        59,
        59,
        "=TIME(A4,B4,C4)"
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
        "Hour",
        "Minute",
        "Second",
        "Time Value"
    ],
    [
        9,
        15,
        30,
        "=TIME(A2,B2,C2)"
    ],
    [
        14,
        45,
        0,
        "=TIME(A3,B3,C3)"
    ],
    [
        23,
        59,
        59,
        "=TIME(A4,B4,C4)"
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
        "Hour",
        "Minute",
        "Second",
        "Time Value"
    ],
    [
        9,
        15,
        30,
        "=TIME(A2,B2,C2)"
    ],
    [
        14,
        45,
        0,
        "=TIME(A3,B3,C3)"
    ],
    [
        23,
        59,
        59,
        "=TIME(A4,B4,C4)"
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
        "Hour",
        "Minute",
        "Second",
        "Time Value"
    ],
    [
        9,
        15,
        30,
        "=TIME(A2,B2,C2)"
    ],
    [
        14,
        45,
        0,
        "=TIME(A3,B3,C3)"
    ],
    [
        23,
        59,
        59,
        "=TIME(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

