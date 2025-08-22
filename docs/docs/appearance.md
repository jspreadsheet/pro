title: Enhancing Jspreadsheet with Visual Attributes and Themes
keywords: Jspreadsheet, spreadsheet design, visual attributes, data grid styling, JavaScript spreadsheet themes, appearance customization, spreadsheet skins
description: Explore Jspreadsheet visual features, skins, and themes to tailor your data grid's look for enhanced application integration.

# Spreadsheet Layout Customization

This section offers insights into configuring and tailoring the visual appearance of your spreadsheets. Through native classes, thematic elements, or external CSS, you can refine your spreadsheet's overall look and feel to align with your application's aesthetic.

{.secondary}
> Are you interested in customizing cell styles? Visit our dedicated section for comprehensive details on cell style. [Cell Style Documentation](/docs/style)


## Data Grid Layout Attributes

Below are some attributes that pertain to the visual configuration of the data grid.

| Method                | Description                              |
|-----------------------|------------------------------------------|
| gridline: boolean     | Toggles the visibility of the grid lines |




## Examples

### Change the Visual Style

Jspreadsheet supports two inherent visual layouts: default and modern. To apply the `modern layout`, add the jss_modern class to the DIV container of the spreadsheet as shown in the example below: 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="jspreadsheet"></div>

<p><input type="button" id="btn1" value="Toggle Style" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('jspreadsheet'), {
    worksheets: [
        { minDimensions: [6,6] },
    ]
});

document.getElementById("btn1").onclick = function() {
    if (document.getElementById('jspreadsheet').classList.contains('jss_modern')) {
        document.getElementById('jspreadsheet').classList.remove('jss_modern');
    } else {
        document.getElementById('jspreadsheet').classList.add('jss_modern');
    }
}
</script>
</html>
```
```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';
export default function App() {
    const spreadsheet = useRef();
  
    const toggle = () => {
      const element = spreadsheet.current[0].element;
      if (element.classList.contains("jss_modern")) {
        element.classList.remove("jss_modern");
      } else {
        element.classList.add("jss_modern");
      }
    };
  
    return (
      <>
        <Spreadsheet ref={spreadsheet} license={license}>
          <Worksheet />
        </Spreadsheet>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
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
 
### Update the Spreadsheet Grid line

The example below shows how to add or remove the worksheet `grid line`.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Toggle Gridline" id="btn1"></p>

<script>
let toggle = function(worksheet) {
    if (worksheet.table.classList.contains('jss_nogridline')) {
        worksheet.table.classList.remove('jss_nogridline');
    } else {
        worksheet.table.classList.add('jss_nogridline');
    }
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
        gridline: false,
    }]
});

document.getElementById("btn1").onclick = () => toggle(worksheets[0]);
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Toggle the data grid line
const toggle = function(worksheet) {
    if (worksheet.table.classList.contains('jss_nogridline')) {
        worksheet.table.classList.remove('jss_nogridline');
    } else {
        worksheet.table.classList.add('jss_nogridline');
    }
}

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Mazda', 2001, 2000, 1],
        ['Peugeot', 2010, 5000, 1],
        ['Honda Fit', 2009, 3000, 1],
        ['Honda CRV', 2010, 6000, 0],
    ]

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar gridline>
                <Worksheet data={data} />
            </Spreadsheet>
            <input type="button" value="toggle()" onClick={() => toggle(spreadsheet.current[0])} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="toggle()" @click="toggle" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        toggle() {
            let worksheet = this.$refs.spreadsheet.current[0];
            if (worksheet.table.classList.contains('jss_nogridline')) {
                worksheet.table.classList.remove('jss_nogridline');
            } else {
                worksheet.table.classList.add('jss_nogridline');
            }
        }
    },
    data() {
        const data = [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ];

        return {
            data,
            license,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type="button" value="toggle()" (click)="toggle()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                minDimensions: [8,0],
                data: [
                    ['Mazda', 2001, 2000, 1],
                    ['Peugeot', 2010, 5000, 1],
                    ['Honda Fit', 2009, 3000, 1],
                    ['Honda CRV', 2010, 6000, 0],
                ],
            }]
        });
    }
    toggle() {
        if (this.worksheets[0].table.classList.contains('jss_nogridline')) {
            this.worksheets[0].table.classList.remove('jss_nogridline');
        } else {
            this.worksheets[0].table.classList.add('jss_nogridline');
        }
    }
}
```
