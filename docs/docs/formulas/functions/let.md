title: LET function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LET function in Jspreadsheet

# LET function

`PRO`{.jtag}

The `LET` function in Jspreadsheet Formulas Pro is a powerful tool that lets you perform a calculation within a formula and then use the outcome of that calculation multiple times within the same formula. You can do this by assigning a name to the calculation. This not only simplifies your formulas by reducing repetition, but also improves computational efficiency, especially with large and complex spreadsheets.

## Documentation

Allows you to define a calculation inside a formula and use the result of that calculation throughout the formula by referencing the name you give to the calculation.

### Category

Logical

### Syntax

LET(name1, name_value1, [calculation_or_name2, name_value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `name` | The name you want to give to the calculation. Must be a valid cell reference or range name. |
| `name_value1` | The value of the first name. |
| `[calculation_or_nameN]` | Optional: Additional names or expression for more calculations. |
| `[name_valueN]` | Optional: Value for the nth name. |


### Behavior

The `LET` function is used in spreadsheets to define variables within a formula, simplifying complex formulas. The function takes a series of variables and a calculation that uses these variables. Here's how it handles various data types:

- Empty cells: If a variable is assigned to an empty cell, `LET` treats it as zero in numeric calculations.
- Text: `LET` can handle text values. If a variable is assigned to a cell containing text, it treats it as a text string. However, if this variable is used in a numeric calculation, it results in an error.
- Booleans: `LET` can handle boolean values. If a variable is assigned to a cell containing a boolean, it treats it as TRUE or FALSE.
- Errors: If a variable is assigned to a cell containing an error, the `LET` function propagates this error through to the final result.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if a variable is used in an inappropriate context, such as trying to perform numeric calculations on text strings. |
| #NAME? | This error occurs if a variable is not defined within the `LET` function but is referenced in the calculation. |
| #CALC! | This error occurs if the `LET` function attempts to calculate a formula that contains a circular reference. |

### Best practices

> - Always ensure that all the variables used in the `LET` function calculation are defined within the function itself to avoid the #NAME? error.
> - Use meaningful names for your variables. This makes your formulas easier to read and understand.
> - Be careful when assigning variables to cells that may contain text or errors. If these variables are used in numeric calculations, it can result in errors.
> - Avoid creating circular references within your `LET` function to prevent the #CALC! error.

### Usage

A few examples using the LET function.

```
LET(x, A1 + B1) + LET(y, A2 + B2) returns the sum of the values in cells A1 through B2, with the intermediate results stored in the names x and y, respectively  
LET(area, PI() * radius ^ 2) returns the area of a circle with radius defined elsewhere in the worksheet  
LET(total_sales, SUM(A1:A10)) / LET(num_salespeople, COUNTA(B1:B10)) returns the average sales per salesperson for the range A1:A10, with the intermediate results stored in the names total_sales and num_salespeople, respectively.  
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
        "Product",
        "Units Sold",
        "Price per Unit",
        "Revenue Analysis"
    ],
    [
        "Laptops",
        25,
        899,
        "=LET(total_revenue, B2*C2, avg_price, (C2+C3+C4)/3, total_revenue/avg_price)"
    ],
    [
        "Tablets",
        18,
        549
    ],
    [
        "Phones",
        42,
        299
    ],
    [
        "Total Units",
        "=SUM(B2:B4)",
        "Avg Price",
        "=LET(prices, C2:C4, AVERAGE(prices))"
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
        "Product",
        "Units Sold",
        "Price per Unit",
        "Revenue Analysis"
    ],
    [
        "Laptops",
        25,
        899,
        "=LET(total_revenue, B2*C2, avg_price, (C2+C3+C4)/3, total_revenue/avg_price)"
    ],
    [
        "Tablets",
        18,
        549
    ],
    [
        "Phones",
        42,
        299
    ],
    [
        "Total Units",
        "=SUM(B2:B4)",
        "Avg Price",
        "=LET(prices, C2:C4, AVERAGE(prices))"
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
        "Product",
        "Units Sold",
        "Price per Unit",
        "Revenue Analysis"
    ],
    [
        "Laptops",
        25,
        899,
        "=LET(total_revenue, B2*C2, avg_price, (C2+C3+C4)/3, total_revenue/avg_price)"
    ],
    [
        "Tablets",
        18,
        549
    ],
    [
        "Phones",
        42,
        299
    ],
    [
        "Total Units",
        "=SUM(B2:B4)",
        "Avg Price",
        "=LET(prices, C2:C4, AVERAGE(prices))"
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
        "Product",
        "Units Sold",
        "Price per Unit",
        "Revenue Analysis"
    ],
    [
        "Laptops",
        25,
        899,
        "=LET(total_revenue, B2*C2, avg_price, (C2+C3+C4)/3, total_revenue/avg_price)"
    ],
    [
        "Tablets",
        18,
        549
    ],
    [
        "Phones",
        42,
        299
    ],
    [
        "Total Units",
        "=SUM(B2:B4)",
        "Avg Price",
        "=LET(prices, C2:C4, AVERAGE(prices))"
    ]
]
            }]
        });
    }
}
```

