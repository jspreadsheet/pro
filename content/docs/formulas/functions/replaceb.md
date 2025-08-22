title: REPLACEB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REPLACEB function in Jspreadsheet

# REPLACEB function



The `REPLACEB` function in Jspreadsheet Formulas Pro is a useful tool that allows you to substitute a specific sequence of bytes in a text string with a new set of bytes. This means you can change certain parts of your text without having to manually edit it. You just need to specify the original text, the starting position of the sequence you want to change, the length of this sequence, and the new bytes you want to replace it with. It is an efficient method for modifying text data in your spreadsheets.

## Documentation

Replaces a sequence of bytes in a string with another set of bytes.

### Category

Text

### Syntax

REPLACEB(old_text, start_num, num_bytes, new_text)

| Parameter | Description |
| ----------- | ------------- |
| `old_text` | The text string that contains the bytes you want to replace. |
| `start_num` | The position of the first byte you want to replace in old_text. |
| `num_bytes` | The number of bytes you want to replace in old_text. |
| `new_text` | The replacement set of bytes. |


### Behavior

The `REPLACEB` function in spreadsheets is used to replace part of a text string, based on the number of bytes you specify, with a different text string. It's mostly useful in double-byte character sets where a single character can be represented as either one or two bytes.

- If the old text is not found in the text string, the `REPLACEB` function will return the original text.
- If the old text is found more than once in the text string, `REPLACEB` will replace only the first instance of the old text.
- If the start_num is greater than the length of the text, `REPLACEB` will return a #VALUE! error.
- If num_bytes is greater than the length of the text (from the start_num), `REPLACEB` will replace all the text from the start_num.
- If the start_num or the num_bytes is non-numeric, `REPLACEB` will return a #VALUE! error.
- `REPLACEB` can handle empty cells, and will simply return an empty cell.
- If boolean values are used, they will be converted into their text equivalents: TRUE to "TRUE" and FALSE to "FALSE".
- If an error cell is referenced in the function, `REPLACEB` will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the `start_num` is less than 1 or if the `num_bytes` is less than 0. It will also occur if `start_num` or `num_bytes` is non-numeric. |
| #N/A | This error is returned if the old text is not found in the text string. |

### Best practices

> - Always ensure that the `start_num` is greater than or equal to 1 and `num_bytes` is greater than or equal to 0 to avoid the #VALUE! error.
> - Use `REPLACEB` function when working with double-byte languages like Japanese, Chinese, or Korean as it counts each double-byte character as 2 instead of 1.
> - Be aware that `REPLACEB` will only replace the first instance of the old text. If you need to replace all instances, consider using a different function or method.
> - Always check your text for possible errors before applying the `REPLACEB` function to avoid returning an error result.

### Usage

A few examples using the REPLACEB function.

```
REPLACEB("Hello World", 7, 5, "Universe") returns "Hello Universe"  
REPLACEB("John Doe", 2, 4, "Dane") returns "JDone"  
REPLACEB("123456789", 3, 3, "ABC") returns "12ABC789"  
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
        "Original Text",
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACEB(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Programming",
        "=REPLACEB(A3,1,4,\"Code\")",
        "Codramming"
    ],
    [
        "DataSheet",
        "=REPLACEB(A4,5,5,\"Base\")",
        "DataBase"
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
        "Original Text",
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACEB(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Programming",
        "=REPLACEB(A3,1,4,\"Code\")",
        "Codramming"
    ],
    [
        "DataSheet",
        "=REPLACEB(A4,5,5,\"Base\")",
        "DataBase"
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
        "Original Text",
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACEB(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Programming",
        "=REPLACEB(A3,1,4,\"Code\")",
        "Codramming"
    ],
    [
        "DataSheet",
        "=REPLACEB(A4,5,5,\"Base\")",
        "DataBase"
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
        "Original Text",
        "Formula",
        "Result"
    ],
    [
        "Hello World",
        "=REPLACEB(A2,7,5,\"Universe\")",
        "Hello Universe"
    ],
    [
        "Programming",
        "=REPLACEB(A3,1,4,\"Code\")",
        "Codramming"
    ],
    [
        "DataSheet",
        "=REPLACEB(A4,5,5,\"Base\")",
        "DataBase"
    ]
]
            }]
        });
    }
}
```

