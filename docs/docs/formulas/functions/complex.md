title: COMPLEX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COMPLEX function in Jspreadsheet

# COMPLEX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COMPLEX` function in Jspreadsheet Formulas Pro is used to create a complex number from real and imaginary parts. It takes two arguments, the real and imaginary coefficients, and combines them into a complex number represented as x + yi or x + yj in text format. This is particularly useful when you're dealing with calculations that involve complex numbers, as it allows you to easily generate these numbers and utilize them in your spreadsheet computations.

## Documentation

Converts real and imaginary coefficients into a complex number in x + yi or x + yj text format.

### Category

Engineering

### Syntax

COMPLEX(real_num, [i_num], [suffix])

| Parameter | Description |
| ----------- | ------------- |
| `real_num` | The real coefficient of the complex number. |
| `[i_num]` | Optional. The imaginary coefficient of the complex number. If omitted, assumed to be 0. |
| `[suffix]` | Optional. The suffix to use for the imaginary component of the complex number. Can be either "i" or "j". If omitted, assumed to be "i". |


### Behavior

The `COMPLEX` function in spreadsheets is designed to convert real and imaginary coefficients into a complex number. The function requires two arguments, the real coefficient and the imaginary coefficient. 
- If the real or imaginary coefficients are empty, the function will return an error.
- If the real or imaginary coefficients are text that cannot be converted into a number, the function will return an error.
- Booleans are treated as 1 for `TRUE` and 0 for `FALSE`.
- The function also has an optional third argument which specifies the suffix for the imaginary part. If it is not specified, "i" is used by default.
- The function is not case-sensitive. It will treat "i" and "I" as the same.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the real or imaginary coefficients are non-numeric. |
| #NUM! | This error is returned if the suffix for the imaginary part is not "i" or "j". |
| #N/A | This error is returned if the real or imaginary coefficients are left blank or missing. |

### Best Practices

> - Ensure that the real and imaginary coefficients are numeric values. If they are stored in other cells, ensure those cells contain numeric values.
> - Be sure to use the correct suffix for the imaginary part. The default is "i", but it can be changed to "j" if specified in the function.
> - Do not leave the real or imaginary coefficients blank or missing, as this will return an error.
> - Always verify the result of the `COMPLEX` function, especially when it is used in further calculations. Any error in the `COMPLEX` function will propagate to subsequent calculations.

### Usage

A few examples using the COMPLEX function.

```
COMPLEX(3, 4) returns "3+4i"  
COMPLEX(-2, -1, "j") returns "-2-1j"  
COMPLEX(0, 5) returns "5i"  
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
        "Real Part",
        "Imaginary Part",
        "Complex Number"
    ],
    [
        3,
        4,
        "=COMPLEX(A2,B2)"
    ],
    [
        -2,
        -1,
        "=COMPLEX(A3,B3,\"j\")"
    ],
    [
        0,
        5,
        "=COMPLEX(A4,B4)"
    ],
    [
        7,
        0,
        "=COMPLEX(A5,B5)"
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
        "Real Part",
        "Imaginary Part",
        "Complex Number"
    ],
    [
        3,
        4,
        "=COMPLEX(A2,B2)"
    ],
    [
        -2,
        -1,
        "=COMPLEX(A3,B3,\"j\")"
    ],
    [
        0,
        5,
        "=COMPLEX(A4,B4)"
    ],
    [
        7,
        0,
        "=COMPLEX(A5,B5)"
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
        "Real Part",
        "Imaginary Part",
        "Complex Number"
    ],
    [
        3,
        4,
        "=COMPLEX(A2,B2)"
    ],
    [
        -2,
        -1,
        "=COMPLEX(A3,B3,\"j\")"
    ],
    [
        0,
        5,
        "=COMPLEX(A4,B4)"
    ],
    [
        7,
        0,
        "=COMPLEX(A5,B5)"
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
        "Real Part",
        "Imaginary Part",
        "Complex Number"
    ],
    [
        3,
        4,
        "=COMPLEX(A2,B2)"
    ],
    [
        -2,
        -1,
        "=COMPLEX(A3,B3,\"j\")"
    ],
    [
        0,
        5,
        "=COMPLEX(A4,B4)"
    ],
    [
        7,
        0,
        "=COMPLEX(A5,B5)"
    ]
]
            }]
        });
    }
}
```

