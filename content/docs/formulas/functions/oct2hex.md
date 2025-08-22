title: OCT2HEX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the OCT2HEX function in Jspreadsheet

# OCT2HEX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `OCT2HEX` function in Jspreadsheet Formulas Pro is a tool that allows you to convert an octal number into a hexadecimal number. Octal numbers are based on the number 8 and include digits from 0 to 7. Hexadecimal numbers, on the other hand, are based on the number 16 and include digits from 0 to 9 and letters from A to F. By using the `OCT2HEX` function, you can easily change a number from the octal system to the hexadecimal system.

## Documentation

Converts a octal number to hexadecimal.

### Category

Engineering

### Syntax

OCT2HEX(num, [places])

| Parameter | Description |
| ----------- | ------------- |
| `num` | The octal number you want to convert to hexadecimal. The number cannot contain more than 10 characters (digits). |
| `[places]` | An optional argument that specifies the minimum number of characters (digits) to use for the hexadecimal number. If omitted, Excel uses the smallest number of characters required. |


### Behavior

The `OCT2HEX` function in spreadsheets is used to convert octal numbers to hexadecimal. Here is how it behaves:

- It takes two arguments: the octal number to convert and an optional argument to specify the number of characters to use.

- If the optional argument is not supplied, the function will use the minimum number of characters necessary to represent the number.

- The function will return an error if the octal number is negative or if it's not a valid octal number.

- The function will ignore empty cells and treat them as 0s.

- If a text string or boolean value is passed to the function, it will return an error.

- If the resulting hexadecimal number has more characters than specified by the optional argument, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the octal number is negative, if it's not a valid octal number, or if the resulting hexadecimal number has more characters than specified by the optional argument. |
| #VALUE! | Occurs if a text string or boolean value is passed to the function. |
| #N/A | Occurs if the required octal number argument is not provided. |

### Best practices

> - Always ensure that the octal number you're converting is a valid octal number and is not negative to avoid #NUM! errors.
> - Use the optional argument to specify the number of characters to use if you need a specific number of characters in your resulting hexadecimal number.
> - Be aware that the function will ignore empty cells and treat them as 0s. If this is not your intention, you should handle empty cells in your formula.
> - Avoid passing text strings or boolean values to the function to prevent #VALUE! errors.

### Usage

A few examples using the OCT2HEX function.

```
OCT2HEX(63) returns 33  
OCT2HEX(72) returns 3A  
OCT2HEX(777,4) returns 1FF  
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
        "Octal Input",
        "Hex Output",
        "Hex (4 places)"
    ],
    [
        63,
        "=OCT2HEX(A2)",
        "=OCT2HEX(A2,4)"
    ],
    [
        72,
        "=OCT2HEX(A3)",
        "=OCT2HEX(A3,4)"
    ],
    [
        777,
        "=OCT2HEX(A4)",
        "=OCT2HEX(A4,4)"
    ],
    [
        154,
        "=OCT2HEX(A5)",
        "=OCT2HEX(A5,4)"
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
        "Octal Input",
        "Hex Output",
        "Hex (4 places)"
    ],
    [
        63,
        "=OCT2HEX(A2)",
        "=OCT2HEX(A2,4)"
    ],
    [
        72,
        "=OCT2HEX(A3)",
        "=OCT2HEX(A3,4)"
    ],
    [
        777,
        "=OCT2HEX(A4)",
        "=OCT2HEX(A4,4)"
    ],
    [
        154,
        "=OCT2HEX(A5)",
        "=OCT2HEX(A5,4)"
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
        "Octal Input",
        "Hex Output",
        "Hex (4 places)"
    ],
    [
        63,
        "=OCT2HEX(A2)",
        "=OCT2HEX(A2,4)"
    ],
    [
        72,
        "=OCT2HEX(A3)",
        "=OCT2HEX(A3,4)"
    ],
    [
        777,
        "=OCT2HEX(A4)",
        "=OCT2HEX(A4,4)"
    ],
    [
        154,
        "=OCT2HEX(A5)",
        "=OCT2HEX(A5,4)"
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
        "Octal Input",
        "Hex Output",
        "Hex (4 places)"
    ],
    [
        63,
        "=OCT2HEX(A2)",
        "=OCT2HEX(A2,4)"
    ],
    [
        72,
        "=OCT2HEX(A3)",
        "=OCT2HEX(A3,4)"
    ],
    [
        777,
        "=OCT2HEX(A4)",
        "=OCT2HEX(A4,4)"
    ],
    [
        154,
        "=OCT2HEX(A5)",
        "=OCT2HEX(A5,4)"
    ]
]
            }]
        });
    }
}
```

