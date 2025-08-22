title: CHOOSE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHOOSE function in Jspreadsheet

# CHOOSE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CHOOSE` function in Jspreadsheet Formulas Pro is a tool that allows you to select a specific item from a list of values, based on its position. For instance, if you have a list of names and you want to select the third name, you can use the `CHOOSE` function to do this. This function can be particularly useful when you have a list of options and want to select one based on a certain condition or criteria.

## Documentation

Returns a value from a list of values based on its position in the list.

### Category

Lookup and reference

### Syntax

CHOOSE(index_num, value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The index number that corresponds to the value you want to return. Must be a positive integer. |
| `value1` | The first value or cell reference in the list. |
| `valueN` | Optional. Additional values or cell references in the list. |


### Behavior

The `CHOOSE` function in a spreadsheet is a lookup function which allows you to select one of up to 254 values based on the index number. Here is how it handles various inputs:

- **Empty cells**: If the index number argument refers to an empty cell, the `CHOOSE` function will return an error.
- **Text**: The `CHOOSE` function can return text if the index number specifies a text value.
- **Booleans**: Boolean values can be returned by the `CHOOSE` function if the index number specifies a boolean value.
- **Errors**: If the index number is less than 1 or greater than the number of the last value in the list, a `#VALUE!` error is returned. If the index number is non-numeric, a `#VALUE!` error is also returned.
- **Non-integers**: If the index number is a decimal, it is truncated to an integer.

### Common Errors

| Error | Description |
| ------ | ----------- |
| `#VALUE!` | This error is returned if the index number is less than 1, or greater than the number of the last value in the list, or if the index number is non-numeric. |
| `#NAME?` | This error is returned if the formula name is spelled incorrectly, or the input values are not enclosed in parentheses. |
| `#N/A` | This error is returned if the index number refers to an empty cell. |

### Best practices

> - Always ensure that your index number is within the range of the number of values you have provided in the list. If the index number exceeds the number of values, this will result in a `#VALUE!` error.
> - Use the `CHOOSE` function to select from a small number of values, as it can only handle up to 254 values. For larger lists, consider using `VLOOKUP` or `INDEX/MATCH`.
> - Remember that `CHOOSE` uses a 1-based index, meaning that counting starts from 1 and not from 0.
> - Use the `CHOOSE` function to simplify complex nested `IF` functions. It can make your formula easier to read and maintain.

### Usage

A few examples using the CHOOSE function.

```
CHOOSE(2, "Apple", "Banana", "Cherry") returns "Banana"  
CHOOSE(3, A1:C1) returns the value in cell C1  
CHOOSE(1, 100, 200, 300) returns 100  
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
        "Quarter",
        "Sales"
    ],
    [
        "Laptops",
        2,
        "=CHOOSE(B2, 15000, 18000, 22000, 16000)"
    ],
    [
        "Tablets",
        4,
        "=CHOOSE(B3, 8000, 9500, 11000, 7500)"
    ],
    [
        "Phones",
        1,
        "=CHOOSE(B4, 25000, 28000, 32000, 24000)"
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
        "Quarter",
        "Sales"
    ],
    [
        "Laptops",
        2,
        "=CHOOSE(B2, 15000, 18000, 22000, 16000)"
    ],
    [
        "Tablets",
        4,
        "=CHOOSE(B3, 8000, 9500, 11000, 7500)"
    ],
    [
        "Phones",
        1,
        "=CHOOSE(B4, 25000, 28000, 32000, 24000)"
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
        "Quarter",
        "Sales"
    ],
    [
        "Laptops",
        2,
        "=CHOOSE(B2, 15000, 18000, 22000, 16000)"
    ],
    [
        "Tablets",
        4,
        "=CHOOSE(B3, 8000, 9500, 11000, 7500)"
    ],
    [
        "Phones",
        1,
        "=CHOOSE(B4, 25000, 28000, 32000, 24000)"
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
        "Quarter",
        "Sales"
    ],
    [
        "Laptops",
        2,
        "=CHOOSE(B2, 15000, 18000, 22000, 16000)"
    ],
    [
        "Tablets",
        4,
        "=CHOOSE(B3, 8000, 9500, 11000, 7500)"
    ],
    [
        "Phones",
        1,
        "=CHOOSE(B4, 25000, 28000, 32000, 24000)"
    ]
]
            }]
        });
    }
}
```

