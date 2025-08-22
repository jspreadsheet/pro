title: PHONETIC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PHONETIC function in Jspreadsheet

# PHONETIC function



The `PHONETIC` function in Jspreadsheet Formulas Pro is used to convert a text string into its phonetic (furigana) representation. This can be especially useful when dealing with text in languages such as Japanese, where furigana is used as a reading aid for kanji characters. You simply input the text string into the `PHONETIC` function and it will output the furigana representation. This can assist in understanding the pronunciation of the text.

## Documentation

Returns the phonetic (furigana) representation of a text string.

### Category

Text

### Syntax

PHONETIC(text, [format_text])

| Parameter | Description |
| ----------- | ------------- |
| `string` | The text string for which you want to generate the phonetic (furigana) representation. |
| `string` | Optional. A format code that controls the phonetic (furigana) formatting of the text string. If omitted, the default format code is used. |


### Behavior

The `PHONETIC` function in spreadsheets is used to extract the phonetic (furigana) characters from a text string. Here's how it behaves:

1. **Text:** When a text string is provided, the function will return the phonetic characters from it. If the text string does not contain any phonetic characters, the function will return an empty string.

2. **Empty Cells:** If the cell reference is empty, `PHONETIC` will return an empty string.

3. **Booleans:** If the input is a Boolean value, the function will return an error since Boolean values do not have phonetic characters.

4. **Errors:** If the input is an error, `PHONETIC` will return that error.

5. **Numeric Values:** If the input is a numeric value, `PHONETIC` will return an empty string, as numbers do not have phonetic characters.

### Common Errors

|Error|Description|
|-----|-----------|
| #VALUE! | This error occurs when the supplied argument is not a text string.|
| #N/A | This error occurs when the function cannot find the phonetic character for the given text string.|

### Best practices

> - It's important to note that the `PHONETIC` function is designed to work with Japanese characters. Using it with other languages may not provide the expected results.
> - Always ensure that the input provided to the `PHONETIC` function is a text string. Providing other data types may result in errors.
> - If you're working with a large dataset, keep in mind that the `PHONETIC` function may slow down your spreadsheet due to the complexity of extracting phonetic characters.
> - Use the `PHONETIC` function in combination with other text functions for more complex text manipulation tasks.

### Usage

A few examples using the PHONETIC function.

```
PHONETIC("東京") returns "とうきょう", which is the phonetic (furigana) representation of the text string "東京"  
PHONETIC("こんにちは") returns "こんにちは", which is the phonetic (furigana) representation of the text string "こんにちは"  
PHONETIC(A1) returns the phonetic (furigana) representation of the text string in cell A1  
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
        "Japanese Text",
        "Phonetic Reading"
    ],
    [
        "\u6771\u4eac",
        "=PHONETIC(A2)"
    ],
    [
        "\u5927\u962a",
        "=PHONETIC(A3)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=PHONETIC(A4)"
    ],
    [
        "\u5b66\u6821",
        "=PHONETIC(A5)"
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
        "Japanese Text",
        "Phonetic Reading"
    ],
    [
        "\u6771\u4eac",
        "=PHONETIC(A2)"
    ],
    [
        "\u5927\u962a",
        "=PHONETIC(A3)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=PHONETIC(A4)"
    ],
    [
        "\u5b66\u6821",
        "=PHONETIC(A5)"
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
        "Japanese Text",
        "Phonetic Reading"
    ],
    [
        "\u6771\u4eac",
        "=PHONETIC(A2)"
    ],
    [
        "\u5927\u962a",
        "=PHONETIC(A3)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=PHONETIC(A4)"
    ],
    [
        "\u5b66\u6821",
        "=PHONETIC(A5)"
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
        "Japanese Text",
        "Phonetic Reading"
    ],
    [
        "\u6771\u4eac",
        "=PHONETIC(A2)"
    ],
    [
        "\u5927\u962a",
        "=PHONETIC(A3)"
    ],
    [
        "\u3053\u3093\u306b\u3061\u306f",
        "=PHONETIC(A4)"
    ],
    [
        "\u5b66\u6821",
        "=PHONETIC(A5)"
    ]
]
            }]
        });
    }
}
```

