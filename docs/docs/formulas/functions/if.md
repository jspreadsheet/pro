title: IF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IF function in Jspreadsheet

# IF function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the IF function plays a key role in performing logical tests within your spreadsheets. Essentially, it examines a certain condition and if the condition proves to be true, one specific value is returned. However, if the condition is false, a different value is returned. This function is particularly useful for categorizing data based on specific criteria or conditions that you set.

## Documentation

The IF function is used to perform a logical test and return one value if the condition is true, and another value if the condition is false.

### Category

Logical

### Syntax

IF(logical_test, [value_if_true], [value_if_false])

| Parameter | Description |
| ----------- | ------------- |
| `logical_test` | The logical test to perform. |
| `value_if_true` | Optional. The value to return if the logical_test evaluates to TRUE. If omitted, returns TRUE. |
| `value_if_false` | Optional. The value to return if the logical_test evaluates to FALSE. If omitted, returns FALSE. |


### Behavior

The 'IF' function in spreadsheets is used to make conditional tests on values and formulas. It has three parts: the test, the result if the test is true, and the result if the test is false.

- **Empty cells**: If the logical test in the 'IF' function refers to an empty cell, the function returns FALSE.
- **Text**: Text can be used in the logical test as well as in the value if true and value if false sections. However, the text must be enclosed in double quotation marks.
- **Booleans**: The 'IF' function can return Boolean values (TRUE or FALSE). If the logical test proves true, the function will return TRUE, else it will return FALSE.
- **Errors**: If the logical test contains an error, the 'IF' function will return that error.

### Common Errors

| Error | Description |
| -------- | ----------- |
| #VALUE! | This error occurs if the logical test contains unrecognized text or if the text is not enclosed in double quotation marks. |
| #NAME? | This error occurs if the function's spelling is incorrect or if it's not recognized by the spreadsheet software. |
| #DIV/0! | This error occurs if the logical test attempts to divide by zero. |

### Best practices

> - Always ensure that your logical test is valid and correctly structured. An invalid logical test will cause the 'IF' function to return an error.
> - Use double quotes around text values in your logical test, otherwise, an error will occur.
> - Be aware that the 'IF' function will only perform one condition at a time. If you need to perform multiple tests, use nested 'IF' functions or use functions like 'IFS' or 'SWITCH'.
> - Always check your function for possible division by zero scenarios to avoid #DIV/0! errors.

### Usage

A few examples using the IF function.

```
IF(A1 > 10, "Greater than 10", "Less than or equal to 10") returns 'Greater than 10' if the value in cell A1 is greater than 10, and 'Less than or equal to 10' if it is less than or equal to 10.  
IF(B2 = "Yes", C2*0.1, C2) returns 10% of the value in cell C2 if the value in cell B2 is 'Yes', and the value in cell C2 if it is not.  
IF(D4 <> "", D4, E4) returns the value in cell D4 if it is not blank, and the value in cell E4 if it is.  
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
        "Score",
        "Grade",
        "Status"
    ],
    [
        85,
        "=IF(A2>=90,\"A\",IF(A2>=80,\"B\",\"C\"))",
        "=IF(A2>=70,\"Pass\",\"Fail\")"
    ],
    [
        92,
        "=IF(A3>=90,\"A\",IF(A3>=80,\"B\",\"C\"))",
        "=IF(A3>=70,\"Pass\",\"Fail\")"
    ],
    [
        68,
        "=IF(A4>=90,\"A\",IF(A4>=80,\"B\",\"C\"))",
        "=IF(A4>=70,\"Pass\",\"Fail\")"
    ],
    [
        77,
        "=IF(A5>=90,\"A\",IF(A5>=80,\"B\",\"C\"))",
        "=IF(A5>=70,\"Pass\",\"Fail\")"
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
        "Score",
        "Grade",
        "Status"
    ],
    [
        85,
        "=IF(A2>=90,\"A\",IF(A2>=80,\"B\",\"C\"))",
        "=IF(A2>=70,\"Pass\",\"Fail\")"
    ],
    [
        92,
        "=IF(A3>=90,\"A\",IF(A3>=80,\"B\",\"C\"))",
        "=IF(A3>=70,\"Pass\",\"Fail\")"
    ],
    [
        68,
        "=IF(A4>=90,\"A\",IF(A4>=80,\"B\",\"C\"))",
        "=IF(A4>=70,\"Pass\",\"Fail\")"
    ],
    [
        77,
        "=IF(A5>=90,\"A\",IF(A5>=80,\"B\",\"C\"))",
        "=IF(A5>=70,\"Pass\",\"Fail\")"
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
        "Score",
        "Grade",
        "Status"
    ],
    [
        85,
        "=IF(A2>=90,\"A\",IF(A2>=80,\"B\",\"C\"))",
        "=IF(A2>=70,\"Pass\",\"Fail\")"
    ],
    [
        92,
        "=IF(A3>=90,\"A\",IF(A3>=80,\"B\",\"C\"))",
        "=IF(A3>=70,\"Pass\",\"Fail\")"
    ],
    [
        68,
        "=IF(A4>=90,\"A\",IF(A4>=80,\"B\",\"C\"))",
        "=IF(A4>=70,\"Pass\",\"Fail\")"
    ],
    [
        77,
        "=IF(A5>=90,\"A\",IF(A5>=80,\"B\",\"C\"))",
        "=IF(A5>=70,\"Pass\",\"Fail\")"
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
        "Score",
        "Grade",
        "Status"
    ],
    [
        85,
        "=IF(A2>=90,\"A\",IF(A2>=80,\"B\",\"C\"))",
        "=IF(A2>=70,\"Pass\",\"Fail\")"
    ],
    [
        92,
        "=IF(A3>=90,\"A\",IF(A3>=80,\"B\",\"C\"))",
        "=IF(A3>=70,\"Pass\",\"Fail\")"
    ],
    [
        68,
        "=IF(A4>=90,\"A\",IF(A4>=80,\"B\",\"C\"))",
        "=IF(A4>=70,\"Pass\",\"Fail\")"
    ],
    [
        77,
        "=IF(A5>=90,\"A\",IF(A5>=80,\"B\",\"C\"))",
        "=IF(A5>=70,\"Pass\",\"Fail\")"
    ]
]
            }]
        });
    }
}
```

