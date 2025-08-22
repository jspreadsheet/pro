title: GAMMADIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAMMADIST function in Jspreadsheet

# GAMMADIST function

`PRO`{.jtag}

The `GAMMADIST` function in Jspreadsheet Formulas Pro is a powerful tool that helps you calculate the gamma distribution. The gamma distribution is a type of continuous probability distribution that is used to describe data patterns with a long right tail and positive skewness. This means it's particularly useful for data that tends to have higher values on the right side. By using the `GAMMADIST` function, you can easily analyze and interpret such data sets in Jspreadsheet.

## Documentation

Calculates the gamma distribution, which is a continuous probability distribution that describes the shape of data that has positive skewness and a long right tail.

### Category

Statistical

### Syntax

GAMMADIST(x, alpha, beta, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which you want to evaluate the distribution. |
| `alpha` | A parameter that specifies the shape of the distribution. Alpha must be greater than 0. |
| `beta` | A parameter that specifies the scale of the distribution. Beta must be greater than 0. |
| `cumulative` | Parameter that specifies whether to return the cumulative distribution function (CDF) or the probability density function (PDF). Enter TRUE to return the CDF, or FALSE to return the PDF. |


### Behavior

The `GAMMADIST` function in spreadsheet software calculates the gamma distribution, often used in probability theory and statistics. Here's how it behaves with different inputs:

- **Empty Cells**: If any of the input cells are empty, the function will return an error as it requires all the arguments to calculate the distribution.
- **Text**: If there is any text input in the argument cells, `GAMMADIST` will return an error as it only accepts numerical inputs.
- **Booleans**: Boolean values are also not accepted by `GAMMADIST`. If any Boolean value is provided, the function will return an error.
- **Errors**: If any of the argument cells contain an error, the `GAMMADIST` function will also return an error.
- **Negative Values**: If a negative value is provided for the alpha or beta parameters, the function will return an error as these parameters must be positive.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is returned when alpha, beta, or x is less than or equal to zero, as these parameters must be positive in the gamma distribution. |
| #VALUE! | This error is returned when a non-numeric argument is supplied or if any of the argument cells contain text. |
| #N/A | This error is returned when insufficient arguments are provided to the function. `GAMMADIST` requires three arguments: x, alpha, and beta. |

### Best practices

> - Always ensure that the alpha, beta, and x parameters are positive. If any of these values are zero or less, the function will return an error.
> - The `GAMMADIST` function will return an error if non-numeric values are provided. Therefore, it is essential to validate the input data before using this function.
> - It's always a good practice to handle possible errors using functions like `IFERROR` to avoid disruption in the calculation flow.
> - Understand that the `GAMMADIST` function gives the probability density function. If you want the cumulative distribution function, set the cumulative argument to TRUE.

### Usage

A few examples using the GAMMADIST function.

```
GAMMADIST(2,3,2,FALSE)  
GAMMADIST(10,5,1.5,TRUE)  
GAMMADIST(20,7,4,FALSE)  
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
        "x",
        "alpha",
        "beta",
        "cumulative",
        "GAMMADIST Result"
    ],
    [
        2,
        3,
        2,
        "FALSE",
        "=GAMMADIST(A2,B2,C2,D2)"
    ],
    [
        10,
        5,
        1.5,
        "TRUE",
        "=GAMMADIST(A3,B3,C3,D3)"
    ],
    [
        20,
        7,
        4,
        "FALSE",
        "=GAMMADIST(A4,B4,C4,D4)"
    ],
    [
        15,
        4,
        3,
        "TRUE",
        "=GAMMADIST(A5,B5,C5,D5)"
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
        "x",
        "alpha",
        "beta",
        "cumulative",
        "GAMMADIST Result"
    ],
    [
        2,
        3,
        2,
        "FALSE",
        "=GAMMADIST(A2,B2,C2,D2)"
    ],
    [
        10,
        5,
        1.5,
        "TRUE",
        "=GAMMADIST(A3,B3,C3,D3)"
    ],
    [
        20,
        7,
        4,
        "FALSE",
        "=GAMMADIST(A4,B4,C4,D4)"
    ],
    [
        15,
        4,
        3,
        "TRUE",
        "=GAMMADIST(A5,B5,C5,D5)"
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
        "x",
        "alpha",
        "beta",
        "cumulative",
        "GAMMADIST Result"
    ],
    [
        2,
        3,
        2,
        "FALSE",
        "=GAMMADIST(A2,B2,C2,D2)"
    ],
    [
        10,
        5,
        1.5,
        "TRUE",
        "=GAMMADIST(A3,B3,C3,D3)"
    ],
    [
        20,
        7,
        4,
        "FALSE",
        "=GAMMADIST(A4,B4,C4,D4)"
    ],
    [
        15,
        4,
        3,
        "TRUE",
        "=GAMMADIST(A5,B5,C5,D5)"
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
        "x",
        "alpha",
        "beta",
        "cumulative",
        "GAMMADIST Result"
    ],
    [
        2,
        3,
        2,
        "FALSE",
        "=GAMMADIST(A2,B2,C2,D2)"
    ],
    [
        10,
        5,
        1.5,
        "TRUE",
        "=GAMMADIST(A3,B3,C3,D3)"
    ],
    [
        20,
        7,
        4,
        "FALSE",
        "=GAMMADIST(A4,B4,C4,D4)"
    ],
    [
        15,
        4,
        3,
        "TRUE",
        "=GAMMADIST(A5,B5,C5,D5)"
    ]
]
            }]
        });
    }
}
```

