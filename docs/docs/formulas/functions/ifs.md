title: IFS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IFS function in Jspreadsheet

# IFS function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `IFS` function is a valuable tool that allows you to assess several conditions and deliver a result that matches the first true condition. Think of it like a series of if-then statements; it checks each condition in the order you list them and once it finds a true one, it gives you the corresponding outcome. This can be particularly useful when you're dealing with complex data sets and need to sort or categorize information based on multiple criteria.

## Documentation

The IFS function is used to evaluate multiple conditions and return a value that corresponds to the first true condition.

### Category

Logical

### Syntax

IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `logical_test1` | The first logical test to perform. |
| `value_if_true1` | The value to return if the first logical_test evaluates to TRUE. |
| `logical_testN` | Optional. The nth logical test to perform. |
| `value_if_trueN` | Optional. The value to return if the nth logical_test evaluates to TRUE. |


### Behavior

The `IFS` function in spreadsheets is a logical function that checks multiple conditions and returns a value corresponding to the first TRUE condition. It is typically used to evaluate several conditions and returns the value associated with the first condition that is met. 

- **Empty Cells**: If a cell reference in a condition is empty, `IFS` treats it as a zero (0).
- **Text**: `IFS` function can handle text if it is part of the logical test. For instance, `IFS(A1="Apple", "Fruit", A1="Carrot", "Vegetable")`. If a text is provided where a numerical value is expected, the function returns an error.
- **Booleans**: The conditions in the `IFS` function should return a boolean (TRUE or FALSE). If not, the function will return an error.
- **Errors**: If an error occurs in any of the conditions or return values, `IFS` will propagate that error. If a condition results in an error, the function stops at that condition and returns the error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs when none of the conditions in the `IFS` function are True.|
| #VALUE! | Occurs when a value is not the expected type. For example, using text where a number is expected. |
| #DIV/0! | Occurs if one of your conditions attempts to divide by zero. |
| #NAME? | Occurs if the spreadsheet does not recognize the function name. This might happen if you misspell "IFS". |

### Best practices

> - Always ensure your conditions return a boolean (TRUE or FALSE). Otherwise, you will receive an error.
> - Use clear and explicit conditions. Ambiguous conditions can lead to unexpected results.
> - If you have more than one condition that could be true at the same time, order your conditions carefully. `IFS` will return the value for the first true condition it encounters.
> - To prevent #N/A errors, you can append a final TRUE condition at the end that acts as a default when none of the previous conditions are met. For example, `IFS(A1>10, "More than 10", A1<=10, "10 or less", TRUE, "Invalid")`.

### Usage

A few examples using the IFS function.

```
IFS(A1 > 10, "Greater than 10", A1 > 5, "Between 6 and 10", A1 > 0, "Between 1 and 5") returns 'Greater than 10' if the value in cell A1 is greater than 10, 'Between 6 and 10' if it is between 6 and 10, and 'Between 1 and 5' if it is between 1 and 5.  
IFS(B2 = "Yes", C2*0.1, B2 = "No", C2*0.05) returns 10% of the value in cell C2 if the value in cell B2 is 'Yes', and 5% if it is 'No'.  
IFS(D4 = "", "Blank", D4 < 0, "Negative", D4 > 0, "Positive") returns 'Blank' if cell D4 is empty, 'Negative' if it is negative, and 'Positive' if it is positive.  
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
        "Performance Level"
    ],
    [
        95,
        "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",A2<60,\"F\")",
        "=IFS(A2>=90,\"Excellent\",A2>=80,\"Good\",A2>=70,\"Average\",A2>=60,\"Below Average\",A2<60,\"Poor\")"
    ],
    [
        73,
        "=IFS(A3>=90,\"A\",A3>=80,\"B\",A3>=70,\"C\",A3>=60,\"D\",A3<60,\"F\")",
        "=IFS(A3>=90,\"Excellent\",A3>=80,\"Good\",A3>=70,\"Average\",A3>=60,\"Below Average\",A3<60,\"Poor\")"
    ],
    [
        88,
        "=IFS(A4>=90,\"A\",A4>=80,\"B\",A4>=70,\"C\",A4>=60,\"D\",A4<60,\"F\")",
        "=IFS(A4>=90,\"Excellent\",A4>=80,\"Good\",A4>=70,\"Average\",A4>=60,\"Below Average\",A4<60,\"Poor\")"
    ],
    [
        55,
        "=IFS(A5>=90,\"A\",A5>=80,\"B\",A5>=70,\"C\",A5>=60,\"D\",A5<60,\"F\")",
        "=IFS(A5>=90,\"Excellent\",A5>=80,\"Good\",A5>=70,\"Average\",A5>=60,\"Below Average\",A5<60,\"Poor\")"
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
        "Performance Level"
    ],
    [
        95,
        "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",A2<60,\"F\")",
        "=IFS(A2>=90,\"Excellent\",A2>=80,\"Good\",A2>=70,\"Average\",A2>=60,\"Below Average\",A2<60,\"Poor\")"
    ],
    [
        73,
        "=IFS(A3>=90,\"A\",A3>=80,\"B\",A3>=70,\"C\",A3>=60,\"D\",A3<60,\"F\")",
        "=IFS(A3>=90,\"Excellent\",A3>=80,\"Good\",A3>=70,\"Average\",A3>=60,\"Below Average\",A3<60,\"Poor\")"
    ],
    [
        88,
        "=IFS(A4>=90,\"A\",A4>=80,\"B\",A4>=70,\"C\",A4>=60,\"D\",A4<60,\"F\")",
        "=IFS(A4>=90,\"Excellent\",A4>=80,\"Good\",A4>=70,\"Average\",A4>=60,\"Below Average\",A4<60,\"Poor\")"
    ],
    [
        55,
        "=IFS(A5>=90,\"A\",A5>=80,\"B\",A5>=70,\"C\",A5>=60,\"D\",A5<60,\"F\")",
        "=IFS(A5>=90,\"Excellent\",A5>=80,\"Good\",A5>=70,\"Average\",A5>=60,\"Below Average\",A5<60,\"Poor\")"
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
        "Performance Level"
    ],
    [
        95,
        "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",A2<60,\"F\")",
        "=IFS(A2>=90,\"Excellent\",A2>=80,\"Good\",A2>=70,\"Average\",A2>=60,\"Below Average\",A2<60,\"Poor\")"
    ],
    [
        73,
        "=IFS(A3>=90,\"A\",A3>=80,\"B\",A3>=70,\"C\",A3>=60,\"D\",A3<60,\"F\")",
        "=IFS(A3>=90,\"Excellent\",A3>=80,\"Good\",A3>=70,\"Average\",A3>=60,\"Below Average\",A3<60,\"Poor\")"
    ],
    [
        88,
        "=IFS(A4>=90,\"A\",A4>=80,\"B\",A4>=70,\"C\",A4>=60,\"D\",A4<60,\"F\")",
        "=IFS(A4>=90,\"Excellent\",A4>=80,\"Good\",A4>=70,\"Average\",A4>=60,\"Below Average\",A4<60,\"Poor\")"
    ],
    [
        55,
        "=IFS(A5>=90,\"A\",A5>=80,\"B\",A5>=70,\"C\",A5>=60,\"D\",A5<60,\"F\")",
        "=IFS(A5>=90,\"Excellent\",A5>=80,\"Good\",A5>=70,\"Average\",A5>=60,\"Below Average\",A5<60,\"Poor\")"
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
        "Performance Level"
    ],
    [
        95,
        "=IFS(A2>=90,\"A\",A2>=80,\"B\",A2>=70,\"C\",A2>=60,\"D\",A2<60,\"F\")",
        "=IFS(A2>=90,\"Excellent\",A2>=80,\"Good\",A2>=70,\"Average\",A2>=60,\"Below Average\",A2<60,\"Poor\")"
    ],
    [
        73,
        "=IFS(A3>=90,\"A\",A3>=80,\"B\",A3>=70,\"C\",A3>=60,\"D\",A3<60,\"F\")",
        "=IFS(A3>=90,\"Excellent\",A3>=80,\"Good\",A3>=70,\"Average\",A3>=60,\"Below Average\",A3<60,\"Poor\")"
    ],
    [
        88,
        "=IFS(A4>=90,\"A\",A4>=80,\"B\",A4>=70,\"C\",A4>=60,\"D\",A4<60,\"F\")",
        "=IFS(A4>=90,\"Excellent\",A4>=80,\"Good\",A4>=70,\"Average\",A4>=60,\"Below Average\",A4<60,\"Poor\")"
    ],
    [
        55,
        "=IFS(A5>=90,\"A\",A5>=80,\"B\",A5>=70,\"C\",A5>=60,\"D\",A5<60,\"F\")",
        "=IFS(A5>=90,\"Excellent\",A5>=80,\"Good\",A5>=70,\"Average\",A5>=60,\"Below Average\",A5<60,\"Poor\")"
    ]
]
            }]
        });
    }
}
```

