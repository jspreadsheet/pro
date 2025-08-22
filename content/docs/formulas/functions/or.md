title: OR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the OR function in Jspreadsheet

# OR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `OR` function in Jspreadsheet Formulas Pro is a logical operator that can help you determine if any of your specified conditions are met. It will return 'true' if at least one of the arguments or conditions you provide is true. If none of the arguments are true, the function will return 'false'. This is useful for validating data or making decisions based on multiple criteria.

## Documentation

Returns true if any argument is true, and false otherwise.

### Category

Logical

### Syntax

OR(logical1, [logical2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `logical` | The first condition to be evaluated. |
| `logicalN` | Optional. An optional condition to be evaluated. |


### Behavior

The `OR` function in a spreadsheet is a logical function that is used to test multiple conditions at the same time. It returns 'TRUE' if any of the conditions are true and 'FALSE' if all conditions are false. Below are its behaviors:

- Empty Cells: If the `OR` function is applied to a range of cells that includes empty cells, these empty cells are ignored by the function.
- Text: If the function is applied to cells containing text, it treats the text as '0' unless the text is 'TRUE' or 'FALSE', in which case it treats them as logical values.
- Booleans: If the function is applied to cells containing Boolean values (TRUE or FALSE), it treats them as logical values.
- Errors: If any of the arguments in the `OR` function is an error, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the given argument is non-numeric and is not a logical value.|
| #NAME? | This error occurs if the `OR` function is misspelled or if the syntax of the function is wrong. |

### Best practices

> - When using the `OR` function, ensure that the arguments are either numbers, logical values, or cell references containing numbers or logical values. Avoid using text strings as they might result in errors.
> - If you want to test multiple conditions, it's more efficient to use the `OR` function rather than multiple nested `IF` statements.
> - Be aware that the `OR` function will return 'TRUE' as soon as it encounters the first 'TRUE' condition. Therefore, the order of the conditions can sometimes affect the result.
> - Always check your function for possible errors to ensure that your formula works smoothly.

### Usage

A few examples using the OR function.

```
OR(1=1,2=3) returns true  
OR(1=2,2=3,3=4) returns false  
OR(A1="Yes",A2="Yes",A3="Yes") returns true if at least one of the specified cells contains the value "Yes"  
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
        "Project A",
        "Complete",
        "=OR(B1=\"Complete\",C1=\"Complete\")"
    ],
    [
        "Project B",
        "In Progress",
        "=OR(B2=\"Complete\",C2=\"Complete\")"
    ],
    [
        "Project C",
        "Pending",
        "=OR(B3=\"Complete\",C3=\"Complete\")"
    ],
    [
        "Project D",
        "Complete",
        "=OR(B4=\"Complete\",C4=\"Complete\")"
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
        "Project A",
        "Complete",
        "=OR(B1=\"Complete\",C1=\"Complete\")"
    ],
    [
        "Project B",
        "In Progress",
        "=OR(B2=\"Complete\",C2=\"Complete\")"
    ],
    [
        "Project C",
        "Pending",
        "=OR(B3=\"Complete\",C3=\"Complete\")"
    ],
    [
        "Project D",
        "Complete",
        "=OR(B4=\"Complete\",C4=\"Complete\")"
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
        "Project A",
        "Complete",
        "=OR(B1=\"Complete\",C1=\"Complete\")"
    ],
    [
        "Project B",
        "In Progress",
        "=OR(B2=\"Complete\",C2=\"Complete\")"
    ],
    [
        "Project C",
        "Pending",
        "=OR(B3=\"Complete\",C3=\"Complete\")"
    ],
    [
        "Project D",
        "Complete",
        "=OR(B4=\"Complete\",C4=\"Complete\")"
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
        "Project A",
        "Complete",
        "=OR(B1=\"Complete\",C1=\"Complete\")"
    ],
    [
        "Project B",
        "In Progress",
        "=OR(B2=\"Complete\",C2=\"Complete\")"
    ],
    [
        "Project C",
        "Pending",
        "=OR(B3=\"Complete\",C3=\"Complete\")"
    ],
    [
        "Project D",
        "Complete",
        "=OR(B4=\"Complete\",C4=\"Complete\")"
    ]
]
            }]
        });
    }
}
```

