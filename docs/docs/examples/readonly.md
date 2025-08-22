title: Implement Dynamic Readonly Cells in Jspreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, readonly cells, data protection
description: Learn how to make columns or individual cells read-only in Jspreadsheet, protecting data and preventing users from editing specific cells in your data grid.

# Data Grid Read Only Cells

The example below defines a spreadsheet column or a single data grid cell as read-only. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Disabled B2" id="btn1"></p>

<script>
let toggle = function(b) {
    if (worksheets[0].isReadOnly('B2')) {
        worksheets[0].setReadOnly('B2', false);
        b.value = 'Disable B2';
    } else {
        worksheets[0].setReadOnly('B2', true);
        b.value = 'Enable B2';
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
    }],
});

document.getElementById("btn1").onclick = (e) => toggle(e.target);
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

    // Method
    const toggle = (worksheet, button) => {
        if (worksheet.isReadOnly("B2")) {
          worksheet.setReadOnly("B2", false);
          button.value = "Disable B2";
        } else {
          worksheet.setReadOnly("B2", true);
          button.value = "Enable B2";
        }
      };
    
    return (
    <>
        <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
        <Worksheet data={data} />
        </Spreadsheet>

        <input
        type="button"
        value="Disable B2"
        onClick={(e) => toggle(spreadsheet.current[0], e.target)}
        />
    </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :oncreatecell="oncreatecell">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <input ref="button" type="button" value="Disabled B2" @click="toggle" />
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
            if (worksheet.isReadOnly('B2')) {
                worksheet.setReadOnly('B2', false);
                this.$refs.button.value = 'Disable B2';
            } else {
                worksheet.setReadOnly('B2', true);
                this.$refs.button.value = 'Enable B2';
            }
        }
    },
    data() {
        // Data
        const data = [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ]

        return {
            data,
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

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input #button type='button' value='Disabled B2' (click)="this.toggle()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("button") button: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['Mazda', 2001, 2000, 1],
                    ['Peugeot', 2010, 5000, 1],
                    ['Honda Fit', 2009, 3000, 1],
                    ['Honda CRV', 2010, 6000, 0],
                ],
                columns: [
                    {
                        type: 'text',
                        title:'Description',
                    },
                    {
                        type: 'text',
                        title:'Year',
                    },
                    {
                        type: 'text',
                        title:'Price',
                        mask:'#.##',
                    },
                    {
                        type: 'checkbox',
                        title:'Automatic',
                    },
                ],
            }],
            oncreatecell: (worksheet: any, cell: any, x: any, y: any, value: any) => {
                if (x == 2 && y == 2) {
                    cell.classList.add('readonly');
                }
            }
        });
    }
    toggle() {
        if (this.worksheets[0].isReadOnly('B2')) {
            this.worksheets[0].setReadOnly('B2', false);
            this.button.nativeElement.value = 'Disable B2';
        } else {
            this.worksheets[0].setReadOnly('B2', true);
            this.button.nativeElement.value = 'Enable B2';
        }
    }
}
```
 
## More information

- [Data Grid Cells ReadOnly Documentation](/docs/read-only)