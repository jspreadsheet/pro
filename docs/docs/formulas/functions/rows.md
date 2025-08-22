title: ROWS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROWS function in Jspreadsheet

# ROWS function

`PRO`{.jtag}

The `ROWS` function in Jspreadsheet Formulas Pro is a handy tool that helps you determine the count of rows within a specific range or array. This is especially useful when dealing with large data sets and you need to know the size of your data. You simply input the range or array you're interested in, and the function will return the total number of rows. This is a crucial function for data management and analysis in Jspreadsheet.

## Documentation

Returns the number of rows in a range or array.

### Category

Lookup and reference

### Syntax

ROWS(array)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range or array for which you want to count the number of rows. |


### Behavior
The 'ROWS' function in a spreadsheet returns the number of rows in a given range. Here are some behaviors to note:

- If a range contains empty cells, they are still counted.
- If a range contains text or boolean values, they are still counted.
- The 'ROWS' function only returns the number of rows, not the data within them.
- If the range is invalid or non-existent, the function returns an error.
- The function does not distinguish between hidden and visible rows, it counts both.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the provided range is not valid or does not exist. |
| #REF! | This error occurs when the provided reference is not valid. This usually happens when a cell reference is deleted or moved. |
| #NAME? | This error is seen when the 'ROWS' function is misspelled or not correctly recognized by the spreadsheet software. |

### Best practices

> - Always double-check the range you are providing to the 'ROWS' function to avoid reference errors.
> - Be aware that the 'ROWS' function will count all rows in the range, regardless if they contain data or not.
> - Use the 'ROWS' function in combination with other functions to manipulate and analyze data more effectively.
> - Remember that the 'ROWS' function will count both hidden and visible rows. If you want to count only visible rows, use other functions such as 'SUBTOTAL'.

### Usage

A few examples using the ROWS function.

```
ROWS(A1:A10) returns 10  
ROWS(B2:C5) returns 4  
ROWS([1,2,3;4,5,6]) returns 2  
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
        "Employee",
        "Department",
        "Salary"
    ],
    [
        "John Smith",
        "Sales",
        45000
    ],
    [
        "Sarah Johnson",
        "Marketing",
        52000
    ],
    [
        "Mike Brown",
        "Sales",
        48000
    ],
    [
        "Lisa Davis",
        "HR",
        55000
    ],
    [
        "",
        "Total Employees:",
        "=ROWS(A2:A5)"
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
        "Employee",
        "Department",
        "Salary"
    ],
    [
        "John Smith",
        "Sales",
        45000
    ],
    [
        "Sarah Johnson",
        "Marketing",
        52000
    ],
    [
        "Mike Brown",
        "Sales",
        48000
    ],
    [
        "Lisa Davis",
        "HR",
        55000
    ],
    [
        "",
        "Total Employees:",
        "=ROWS(A2:A5)"
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
        "Employee",
        "Department",
        "Salary"
    ],
    [
        "John Smith",
        "Sales",
        45000
    ],
    [
        "Sarah Johnson",
        "Marketing",
        52000
    ],
    [
        "Mike Brown",
        "Sales",
        48000
    ],
    [
        "Lisa Davis",
        "HR",
        55000
    ],
    [
        "",
        "Total Employees:",
        "=ROWS(A2:A5)"
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
        "Employee",
        "Department",
        "Salary"
    ],
    [
        "John Smith",
        "Sales",
        45000
    ],
    [
        "Sarah Johnson",
        "Marketing",
        52000
    ],
    [
        "Mike Brown",
        "Sales",
        48000
    ],
    [
        "Lisa Davis",
        "HR",
        55000
    ],
    [
        "",
        "Total Employees:",
        "=ROWS(A2:A5)"
    ]
]
            }]
        });
    }
}
```

