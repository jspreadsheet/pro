title: Jspreadsheet Theme Editor
keywords: Jspreadsheet, data grid, javascript, build excel-like applications, spreadsheet, theme editor, data grid customization, visual styling, color customization, dynamic themes
description: Customize the styling of your Jspreadsheet data grid with the online theme editor. Create visually appealing designs to suit your needs.

# Spreadsheet Theme Editor

This is an online tool for editing spreadsheet color themes. To utilize this feature, you must include the additional CSS file `jspreadsheet.themes.css`. Also, incorporate the CSS variables as outlined in the example below.

{.green}
> To use themes in Jspreadsheet, include `jspreadsheet.themes.css` in your project and the include the CSS variables, as shown in the example below.

<lm-themes></lm-themes>

{.ignore-execution}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.themes.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            minDimensions: [6,10],
        }
    ]
});
</script>
```

```jsx
import React, {useRef, useState} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import 'jspreadsheet/dist/jspreadsheet.themes.css';

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet :license="license">
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import 'jspreadsheet/dist/jspreadsheet.themes.css';

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet
    },
    setup() {
        return {
            license
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

import 'jspreadsheet/dist/jspreadsheet.themes.css';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
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
                minDimensions: [10,10],
            }]
        });
    }
}
```
