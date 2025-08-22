title: Spreadsheet Appearance Customization
keywords: Jspreadsheet, data grid, javascript, excel-like features, spreadsheet appearance, visual integration, appearance customization, styling, design, visual customization
description: Learn how to customize the appearance of your Jspreadsheet data grid. Explore styling options bringing Jspreadsheet in line with your applications.

# Spreadsheet Layout

## Examples

### Change the visual style

Currently, there are two native layouts: the `default` and the `modern`. The latter can be selected by adding the `jss_modern` class to the spreadsheet DIV container. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="jspreadsheet"></div>

<script>
let toggle = function() {
    if (document.getElementById('jspreadsheet').classList.contains('jss_modern')) {
        document.getElementById('jspreadsheet').classList.remove('jss_modern');
    } else {
        document.getElementById('jspreadsheet').classList.add('jss_modern');
    }
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('jspreadsheet'), {
    worksheets: [
        { minDimensions: [10,10] },
    ]
});

document.getElementById("togglebtn").onclick = toggle
</script>

<button type="button" id="togglebtn">Toggle skin </button>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = '###license###';

const toggle = function () {
    if (document.getElementById('spreadsheet').classList.contains('jss_modern')) {
        document.getElementById('spreadsheet').classList.remove('jss_modern');
    } else {
        document.getElementById('spreadsheet').classList.add('jss_modern');
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet/>
            </Spreadsheet>
            <button type="button" onClick={() => toggle()}>Toggle</button>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet />
    </Spreadsheet>
    <button type="button" @click="toggle">Toggle</button>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        toggle() {
            if (this.$refs.spreadsheet.el.classList.contains('jss_modern')) {
                this.$refs.spreadsheet.el.classList.remove('jss_modern');
            } else {
                this.$refs.spreadsheet.el.classList.add('jss_modern');
            }
        }
    },
    data() {
        return {
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <button type="button" (click)="toggle()">Toggle</button>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{ minDimensions: [10,10] }],
        });
    }

    toggle() {
        if (this.spreadsheet.nativeElement.classList.contains('jss_modern')) {
            this.spreadsheet.nativeElement.classList.remove('jss_modern');
        } else {
            this.spreadsheet.nativeElement.classList.add('jss_modern');
        }
    }
}
```
 
