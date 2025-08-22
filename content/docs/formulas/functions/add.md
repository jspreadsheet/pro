title: ADD Function - Basic Addition in Jspreadsheet
keywords: Jspreadsheet, JavaScript spreadsheet, ADD function, arithmetic operations, cell addition, numeric calculations, Excel-compatible formulas, spreadsheet math functions, basic arithmetic, sum function
description: Learn how to use the ADD function in Jspreadsheet Formulas Pro to perform basic addition operations between two numbers or cell values in your spreadsheet

# ADD function

`PRO`{.jtag}

The `ADD` function in Jspreadsheet Formulas Pro is a fundamental arithmetic operation that performs addition between two values. While simple in concept, it's a versatile tool with several key applications:

- Basic arithmetic calculations
- Cell value combinations
- Dynamic formula building
- Automated calculations
- Data validation testing

Unlike the `SUM` function which handles multiple values, `ADD` is optimized for two-value operations, making it ideal for:
- Step-by-step calculations
- Running totals
- Incremental updates
- Paired value operations
- Formula chaining

The function supports numbers, cell references, and even handles special values like booleans, making it a foundational building block for more complex calculations.

## Documentation

Returns the sum of two numbers

### Category

Math and trigonometry

### Syntax

ADD(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The first number to add. |
| `number` | The second number to add. |


### Behavior

The `ADD` function performs addition between two values. It handles different types of input data in the following ways:

- **Numbers**: Adds the two numbers together and returns their sum.
  Example: `ADD(5, 3)` returns `8`

- **Cell References**: Can add values from two different cells.
  Example: `ADD(A1, B1)` adds the values in cells A1 and B1

- **Empty Cells**: Treats empty cells as zero (0).
  Example: If A1 is empty, `ADD(A1, 5)` returns `5`

- **Text**: Returns a #VALUE! error if either argument contains text that cannot be converted to a number.
  Example: `ADD("abc", 5)` returns `#VALUE!`

- **Booleans**: Converts TRUE to 1 and FALSE to 0 before addition.
  Example: `ADD(TRUE, 5)` returns `6`

### Common Errors

| Error Name | Description |
| ----------- | ----------- |
| #VALUE! | Occurs when an argument contains text that cannot be converted to a number |
| #REF! | Occurs when referencing a non-existent cell |
| #NAME? | Occurs when the function name is misspelled or when the syntax is incorrect |

### Best Practices

> - Use `ADD` for simple addition between two values. For adding multiple numbers, consider using the `SUM` function instead.
> - Validate your input data to ensure it contains numeric values before using the function.
> - When working with cell references, verify that the referenced cells exist to avoid #REF! errors.
> - Consider using data validation rules to ensure cells only contain numeric values.
> - For calculations involving currency or financial data, ensure consistent decimal places in the input values.

### Usage Examples

Here are practical examples of using the ADD function in different scenarios:

**1. Basic Addition:**
```
=ADD(5, 10) returns 15
// Simple addition of two numbers
```

**2. Cell References:**
```
=ADD(A1, B1)
// Adds values from two cells
```

**3. Mixed References:**
```
=ADD($A$1, B2)
// Adds an absolute reference with a relative reference
```

**4. Formula Chaining:**
```
=ADD(ADD(A1, B1), C1)
// Adds three numbers using nested ADD functions
```

**5. Running Totals:**
```
=ADD(D1, E1)  // In cell F1
=ADD(F1, G1)  // In cell H1
// Creates a running total across rows
```

**Real-world Applications:**

1. **Invoice Calculations:**
```
=ADD(B2, C2)  // Adds subtotal and tax
```

2. **Inventory Management:**
```
=ADD(D5, E5)  // Combines current stock and new shipment
```

3. **Financial Calculations:**
```
=ADD(G7, H7)  // Adds principal and interest
```

4. **Time Tracking:**
```
=ADD(J3/24, K3/1440)  // Adds hours and minutes (converted to days)
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
        "First Number",
        "Second Number",
        "Sum"
    ],
    [
        25,
        15,
        "=ADD(A2,B2)"
    ],
    [
        8,
        12,
        "=ADD(A3,B3)"
    ],
    [
        100,
        50,
        "=ADD(A4,B4)"
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
        "First Number",
        "Second Number",
        "Sum"
    ],
    [
        25,
        15,
        "=ADD(A2,B2)"
    ],
    [
        8,
        12,
        "=ADD(A3,B3)"
    ],
    [
        100,
        50,
        "=ADD(A4,B4)"
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
        "First Number",
        "Second Number",
        "Sum"
    ],
    [
        25,
        15,
        "=ADD(A2,B2)"
    ],
    [
        8,
        12,
        "=ADD(A3,B3)"
    ],
    [
        100,
        50,
        "=ADD(A4,B4)"
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
        "First Number",
        "Second Number",
        "Sum"
    ],
    [
        25,
        15,
        "=ADD(A2,B2)"
    ],
    [
        8,
        12,
        "=ADD(A3,B3)"
    ],
    [
        100,
        50,
        "=ADD(A4,B4)"
    ]
]
            }]
        });
    }
}
```

