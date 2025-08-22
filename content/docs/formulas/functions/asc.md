title: ASC Function - Convert Full-Width to Half-Width Characters in Jspreadsheet
keywords: ASC function, character width conversion, text formatting, Asian character support, Excel-compatible functions, JavaScript spreadsheet functions, text transformation, character encoding, data standardization, international text, character width normalization
description: Convert full-width characters to half-width format using the ASC function in Jspreadsheet. Essential for standardizing text display, working with Asian characters, and ensuring consistent character width in your spreadsheets.

# ASC function



The `ASC` function in Jspreadsheet Formulas Pro is a tool used to transform full-width characters into half-width characters. Full-width characters typically take up more space than half-width ones, which are more compact. This function is especially useful when working with texts that have mixed character widths, allowing for a more uniform and neat presentation. It's a simple way to standardize your data for easier reading and analysis.

## Documentation

Convert full-width characters to half-width characters.

### Category

Text

### Syntax

ASC(text)

| Parameter | Description |
| ----------- | ------------- |
| `string` | The text containing full-width characters to be converted to half-width characters. |


The 'ASC' function is not a standard spreadsheet function in programs like Excel, Google Sheets, or OpenOffice. It's possible that you might be referring to a specific, custom function in a particular software or a function from a programming language. Please provide more context or check the function's name again.

### Usage

A few examples using the ASC function.

```
ASC("ＡＰＰＬＥ") returns "APPLE"  
ASC("ｃｏｎｖｅｒｓｉｏｎ") returns 'conversion'  
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
        "Full-Width Text",
        "Half-Width Conversion"
    ],
    [
        "\uff28\uff25\uff2c\uff2c\uff2f",
        "=ASC(A2)"
    ],
    [
        "\uff57\uff4f\uff52\uff4c\uff44",
        "=ASC(A3)"
    ],
    [
        "\uff2a\uff21\uff30\uff21\uff2e\uff11\uff12\uff13",
        "=ASC(A4)"
    ],
    [
        "\uff54\uff45\uff53\uff54\uff14\uff15\uff16",
        "=ASC(A5)"
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
        "Full-Width Text",
        "Half-Width Conversion"
    ],
    [
        "\uff28\uff25\uff2c\uff2c\uff2f",
        "=ASC(A2)"
    ],
    [
        "\uff57\uff4f\uff52\uff4c\uff44",
        "=ASC(A3)"
    ],
    [
        "\uff2a\uff21\uff30\uff21\uff2e\uff11\uff12\uff13",
        "=ASC(A4)"
    ],
    [
        "\uff54\uff45\uff53\uff54\uff14\uff15\uff16",
        "=ASC(A5)"
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
        "Full-Width Text",
        "Half-Width Conversion"
    ],
    [
        "\uff28\uff25\uff2c\uff2c\uff2f",
        "=ASC(A2)"
    ],
    [
        "\uff57\uff4f\uff52\uff4c\uff44",
        "=ASC(A3)"
    ],
    [
        "\uff2a\uff21\uff30\uff21\uff2e\uff11\uff12\uff13",
        "=ASC(A4)"
    ],
    [
        "\uff54\uff45\uff53\uff54\uff14\uff15\uff16",
        "=ASC(A5)"
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
        "Full-Width Text",
        "Half-Width Conversion"
    ],
    [
        "\uff28\uff25\uff2c\uff2c\uff2f",
        "=ASC(A2)"
    ],
    [
        "\uff57\uff4f\uff52\uff4c\uff44",
        "=ASC(A3)"
    ],
    [
        "\uff2a\uff21\uff30\uff21\uff2e\uff11\uff12\uff13",
        "=ASC(A4)"
    ],
    [
        "\uff54\uff45\uff53\uff54\uff14\uff15\uff16",
        "=ASC(A5)"
    ]
]
            }]
        });
    }
}
```

