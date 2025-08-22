title: HYPGEOMDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HYPGEOMDIST function in Jspreadsheet

# HYPGEOMDIST function

`PRO`{.jtag}

The `HYPGEOMDIST` function in Jspreadsheet Formulas Pro is a statistical tool that helps you figure out the likelihood of a certain number of successful outcomes occurring within a selected group or sample. This function needs you to input the total number of successful outcomes in the overall population, the size of the overall population, and the size of your chosen sample. It's a very important function when you want to make predictions or forecasts based on existing data.

## Documentation

The HYPGEOMDIST function is used to calculate the probability of a specified number of successes in a population sample, given the population size, number of successes in the population, and sample size.

### Category

Statistical

### Syntax

HYPGEOMDIST(sample_s, number_sample, population_s, number_pop)

| Parameter | Description |
| ----------- | ------------- |
| `sample_s` | The number of successes in the sample. |
| `number_sample` | The size of the sample. |
| `population_s` | The number of successes in the population. |
| `number_pop` | The size of the population. |


### Behavior

The `HYPGEOMDIST` function in spreadsheets calculates the hypergeometric distribution, which is a probability. This function requires four arguments: sample successes, sample size, population successes, and population size. 

1. **Empty cells**: If any of the required arguments are empty, the `HYPGEOMDIST` function will return a `#VALUE!` error because it needs all parameters to compute the value.
2. **Text**: If the function encounters a text string instead of a numerical value in any of its arguments, it will return a `#VALUE!` error.
3. **Booleans**: Spreadsheets will coerce boolean values to numbers, with TRUE being 1 and FALSE being 0. However, using boolean values in this function is not recommended as it may not provide meaningful results.
4. **Errors**: If any of the input cells contain errors, the `HYPGEOMDIST` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when one or more of the arguments are not valid, such as if they are empty or contain text. |
| #NUM! | This error is returned if the supplied arguments are numerically invalid. This happens if the number of successes is greater than the sample size or if the sample size is greater than the population size. |

### Best practices

> - Always ensure that the number of sample successes is not greater than the sample size and the sample size is not greater than the population size. The function will return a `#NUM!` error otherwise.
> - While the function can handle decimal inputs, it's best to use integer values as arguments since the function deals with the number of successes and sizes, which should logically be whole numbers.
> - Avoid using boolean values as parameters for this function as it may not provide meaningful or accurate results.
> - Always verify your data and arguments to avoid `#VALUE!` or `#NUM!` errors.

### Usage

A few examples using the HYPGEOMDIST function.

```
HYPGEOMDIST(1, 4, 8, 20) returns approximately 0.3633  
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
        "Defective Items in Population",
        8
    ],
    [
        "Total Population Size",
        20
    ],
    [
        "Sample Size",
        4
    ],
    [
        "Defective Items Found in Sample",
        1
    ],
    [
        "Probability",
        "=HYPGEOMDIST(B4,B3,B1,B2)"
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
        "Defective Items in Population",
        8
    ],
    [
        "Total Population Size",
        20
    ],
    [
        "Sample Size",
        4
    ],
    [
        "Defective Items Found in Sample",
        1
    ],
    [
        "Probability",
        "=HYPGEOMDIST(B4,B3,B1,B2)"
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
        "Defective Items in Population",
        8
    ],
    [
        "Total Population Size",
        20
    ],
    [
        "Sample Size",
        4
    ],
    [
        "Defective Items Found in Sample",
        1
    ],
    [
        "Probability",
        "=HYPGEOMDIST(B4,B3,B1,B2)"
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
        "Defective Items in Population",
        8
    ],
    [
        "Total Population Size",
        20
    ],
    [
        "Sample Size",
        4
    ],
    [
        "Defective Items Found in Sample",
        1
    ],
    [
        "Probability",
        "=HYPGEOMDIST(B4,B3,B1,B2)"
    ]
]
            }]
        });
    }
}
```

