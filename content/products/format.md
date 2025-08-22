title: JavaScript Format Extension for Jspreadsheet
keywords: Jspreadsheet, Jexcel, JavaScript, data grid, format extension, cell formatting, column formatting, spreadsheet plugin, cell masks, dropdown editor, calendar editor
description: The Jspreadsheet Format extension adds a context-menu option to apply advanced formatting to cells and columns. Supports numeric masks, dropdowns, calendars, checkboxes, and more for enhanced spreadsheet control.

# Format Extension

The **Format Extension** provides an interface for configuring masks and editors on columns and cells in Jspreadsheet. It supports everything from basic numeric formats to advanced types like **Record Reference**, giving users precise control over data formatting and input behavior.

Supported formats include masks and alternative cell editors such as calendars, dropdowns, checkboxes, color pickers, and more. A full list of available options is provided below.

## Documentation

No additional configuration is needed. Simply enable the extension using the `setExtensions` method, and it activates automatically.

Once enabled, it adds a context menu option that opens a formatting modal, allowing users to customize cell and column behavior with various masks and editor types.

### Mask Options

| Mask Type  |
|------------|
| General    |
| Number     |
| Currency   |
| Accounting |
| Percentage |
| Text       |
| Custom     |

### Editor Options

| Editor Type |
|-------------|
| Text        |
| Notes       |
| Numeric     |
| Percent     |
| Dropdown    |
| Checkbox    |
| Radio       |
| Calendar    |
| Image       |
| Color       |
| Email       |
| Link        |
| Progress    |
| Rating      |
| Autonumber  |
| Richtext    |
| Record      |


### Installing

#### Using NPM

```bash
$ npm install @jspreadsheet/format
```

Import the necessary CSS

{.ignore}
```javascript
import "@jspreadsheet/format/dist/style.css"
import "@lemonadejs/studio/dist/style.css"
import "jsuites/dist/jsuites.css"
```

#### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/format/dist/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/format/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
```

## Examples

### Basic Format-Enabled Spreadsheet

Once the Format Extension is enabled, a **"Format"** option appears at the top of the context menu when you right-click any cell or column. This opens the formatting modal for customizing masks and editors.

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/format/dist/style.min.css" type="text/css" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/format/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ format });
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbars: true,
    worksheets: [{
        data: [[0.5]],
        minDimensions: [5, 5],
        cells: { A1: { mask: 'h:mm:ss' } }, 
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import format from "@jspreadsheet/format";

import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";
import "@lemonadejs/studio/dist/style.css";
import "@jspreadsheet/format/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ format })

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [[0.5]];
    // Cells
    const cells = { A1: { mask: 'h:mm:ss' } }

    // Render component
    return (
      <Spreadsheet ref={spreadsheet}>
          <Worksheet data={data} cells={cells} />
      </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :cells="cells" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import format from "@jspreadsheet/format";

import "jsuites/dist/jsuites.css"
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css"
import "@jspreadsheet/format/dist/style.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ format })

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    setup() {
         // Data
         const data = [[0.5]];
         // Cells
         const cells = { A1: { mask: 'h:mm:ss' } }

        // Return object
        return {
            data,
            cells,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import format from "@jspreadsheet/format";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ format });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [[0.5]],
                minDimensions: [5, 5],
                cells: { A1: { mask: 'h:mm:ss' } },
            }],
        });
    }
}
```
