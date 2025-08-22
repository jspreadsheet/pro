title: FILTER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FILTER function in Jspreadsheet

# FILTER function

`PRO`{.jtag}

The `FILTER` function in Jspreadsheet Formulas Pro is a tool that helps you selectively pick data from a larger array based on specific criteria you set. This function sifts through your data and only returns those elements that meet your specified conditions. It's like using a sieve to separate wanted elements from unwanted ones. This function is particularly useful when you need to analyze or make calculations based on a select portion of your data.

## Documentation

Returns an array filtered by a set of criteria.

### Category

Lookup and reference

### Syntax

FILTER(array, include, [if_empty])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range to filter. |
| `include` | The array or range containing the criteria values to include. |
| `[if_empty]` | Optional. The value to return if the result is empty. If omitted, blank cells are returned. |


### Behavior

The 'FILTER' function in spreadsheets is designed to filter a range of cells based on specified criteria. This function can be used to filter both rows and columns. It takes two arguments - the range to filter and the condition to filter by. Here's how it handles different types of data:

- Empty Cells: The 'FILTER' function will ignore any empty cells unless they are part of the range you specified to filter.
- Text: The function can filter text values. The criteria can be a text string (e.g., "apple") and it will return all rows or columns with that exact text.
- Booleans: The 'FILTER' function can also work with Boolean values. If the criteria is a Boolean expression (e.g., A2:A10>5), it will return all rows or columns that satisfy this condition.
- Errors: If any cells in the specified range contain error values (e.g., #DIV/0!, #N/A, #NAME?, #NULL!, #NUM!, #REF!, or #VALUE!), the 'FILTER' function will also return an error.

### Common Errors

|Error|Description|
|---|---|
|#N/A|Occurs if no cells in the range meet the given criteria.|
|#VALUE!|Occurs if the array and include arrays don't have the same dimensions.|
|#REF!|Occurs if the formula results in a range that's larger than the allowable range.|

### Best practices

> - Ensure that the 'range' and 'criteria' arguments have the same dimensions to avoid a #VALUE! error.
> - Use clear and specific criteria to filter data accurately. Vague or incorrect criteria can result in errors or inaccurate results.
> - Handle error values in your data before using the 'FILTER' function to avoid returning an error.
> - Be aware that the 'FILTER' function will return a #N/A error if no cells in the range meet the given criteria. You may want to handle this in your formula or ensure your data has matching criteria.

### Usage

A few examples using the FILTER function.

```
FILTER([1,2,3,4,5], [TRUE,FALSE,TRUE,FALSE,TRUE]) returns [1,3,5]  
FILTER(A1:A10, B1:B10>50) returns [73, 78, 81]  
FILTER(B2:E6, F2:F6) returns [[2, 4, 6, 8], [11, 13, 15, 17]]  
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
        "Sales",
        "Category"
    ],
    [
        "Laptop",
        1200,
        "Electronics"
    ],
    [
        "Chair",
        150,
        "Furniture"
    ],
    [
        "Phone",
        800,
        "Electronics"
    ],
    [
        "Desk",
        300,
        "Furniture"
    ],
    [
        "Tablet",
        600,
        "Electronics"
    ],
    [
        "",
        "=FILTER(A2:A6,C2:C6=\"Electronics\")"
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
        "Sales",
        "Category"
    ],
    [
        "Laptop",
        1200,
        "Electronics"
    ],
    [
        "Chair",
        150,
        "Furniture"
    ],
    [
        "Phone",
        800,
        "Electronics"
    ],
    [
        "Desk",
        300,
        "Furniture"
    ],
    [
        "Tablet",
        600,
        "Electronics"
    ],
    [
        "",
        "=FILTER(A2:A6,C2:C6=\"Electronics\")"
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
        "Sales",
        "Category"
    ],
    [
        "Laptop",
        1200,
        "Electronics"
    ],
    [
        "Chair",
        150,
        "Furniture"
    ],
    [
        "Phone",
        800,
        "Electronics"
    ],
    [
        "Desk",
        300,
        "Furniture"
    ],
    [
        "Tablet",
        600,
        "Electronics"
    ],
    [
        "",
        "=FILTER(A2:A6,C2:C6=\"Electronics\")"
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
        "Sales",
        "Category"
    ],
    [
        "Laptop",
        1200,
        "Electronics"
    ],
    [
        "Chair",
        150,
        "Furniture"
    ],
    [
        "Phone",
        800,
        "Electronics"
    ],
    [
        "Desk",
        300,
        "Furniture"
    ],
    [
        "Tablet",
        600,
        "Electronics"
    ],
    [
        "",
        "=FILTER(A2:A6,C2:C6=\"Electronics\")"
    ]
]
            }]
        });
    }
}
```

