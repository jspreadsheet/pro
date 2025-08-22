title: LOG function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOG function in Jspreadsheet

# LOG function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `LOG` function in Jspreadsheet Formulas Pro is a mathematical tool that allows you to find the logarithm of a given number with a specified base. Essentially, it tells you how many times you need to multiply the base number to get the number you're looking for. To use it, you simply input the number and the base into the function, like this: `LOG(number, base)`. This function can be particularly useful for calculations involving exponential growth or decay.

## Documentation

Returns the logarithm of a number to a specified base.

### Category

Math and trigonometry

### Syntax

LOG(number, [base])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The positive real number for which you want to find the logarithm. |
| `[base]` | Optional. The base of the logarithm you want to find. If omitted, base 10 is used. |


### Behavior

The `LOG` function in a spreadsheet is used to calculate the logarithm of a number to a specified base. The default base is 10 if not specified. Here's how it handles different types of input:

1. **Numbers**: The `LOG` function works perfectly with positive numbers. However, it will return an error for negative numbers and zero.

2. **Empty cells**: If an empty cell is referenced, the function will treat it as a zero and return an error.

3. **Text**: If a cell containing text is referenced, the function will return a `#VALUE!` error.

4. **Booleans**: If a cell containing a boolean value (`TRUE`/`FALSE`) is referenced, the function will convert `TRUE` to `1` and `FALSE` to `0`. As the logarithm of 0 is undefined, `LOG(FALSE)` will return an error.

5. **Errors**: If a cell referenced in the `LOG` function contains an error, the `LOG` function will also return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error is returned if the number is less than or equal to zero. |
| #VALUE! | This error is returned if the base is less than or equal to zero or if the base is 1. It is also returned when the cell referenced contains text. |
| #REF! | This error is returned if the cell reference is invalid. |

### Best Practices

> - Always ensure that the number and the base (if specified) are greater than zero and the base is not one. The `LOG` function returns errors for values that are less than or equal to zero and for base that equals one.
> - Avoid using cell references that might contain text, as this will cause the `LOG` function to return a `#VALUE!` error.
> - Be aware that `LOG(TRUE)` will return `0` as the function converts `TRUE` to `1` and the logarithm of 1 is 0.
> - Always handle possible errors using error handling functions like `IFERROR` or `ISERROR` to ensure your spreadsheet remains clean and professional.

### Usage

A few examples using the LOG function.

```
LOG(1) returns 0 because log base 10 of 1 is 0  
LOG(100, 10) returns 2 because log base 10 of 100 is 2  
LOG(A1, 2) returns the logarithm base 2 of the value contained in cell A1.  
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
        "Number",
        "Base",
        "LOG Result"
    ],
    [
        100,
        10,
        "=LOG(A2,B2)"
    ],
    [
        8,
        2,
        "=LOG(A3,B3)"
    ],
    [
        1000,
        "",
        "=LOG(A4)"
    ],
    [
        16,
        2,
        "=LOG(A5,B5)"
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
        "Number",
        "Base",
        "LOG Result"
    ],
    [
        100,
        10,
        "=LOG(A2,B2)"
    ],
    [
        8,
        2,
        "=LOG(A3,B3)"
    ],
    [
        1000,
        "",
        "=LOG(A4)"
    ],
    [
        16,
        2,
        "=LOG(A5,B5)"
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
        "Number",
        "Base",
        "LOG Result"
    ],
    [
        100,
        10,
        "=LOG(A2,B2)"
    ],
    [
        8,
        2,
        "=LOG(A3,B3)"
    ],
    [
        1000,
        "",
        "=LOG(A4)"
    ],
    [
        16,
        2,
        "=LOG(A5,B5)"
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
        "Number",
        "Base",
        "LOG Result"
    ],
    [
        100,
        10,
        "=LOG(A2,B2)"
    ],
    [
        8,
        2,
        "=LOG(A3,B3)"
    ],
    [
        1000,
        "",
        "=LOG(A4)"
    ],
    [
        16,
        2,
        "=LOG(A5,B5)"
    ]
]
            }]
        });
    }
}
```

