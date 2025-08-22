title: Implement Dynamic Readonly Cells in Jspreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, readonly cells, data protection
description: Learn how to make columns or individual cells read-only in Jspreadsheet, protecting data and preventing users from editing specific cells in your data grid.

# Data Grid Read Only Cells

The example below defines a spreadsheet column or a single data grid cell as read-only. 

```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Disabled B2" id="togglebtn"></p>

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
        columns: [
            {
                type: 'text',
                title:'Description',
                width:'200px',
                readOnly:true,
            },
            {
                type: 'text',
                title:'Year',
                width:'200px'
            },
            {
                type: 'text',
                title:'Price',
                width:'100px',
                mask:'#.##',
            },
            {
                type: 'checkbox',
                title:'Automatic',
                width:'100px'
            },
        ],
    }],
    oncreatecell: (worksheet, cell, x, y, source, value, label) => {
        if (x == 2 && y == 2) {
            cell.classList.add('readonly');
        }
    }
});

document.getElementById("togglebtn").onclick = (e) => toggle(e.target);
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

// Set the license
const license = '###license###';

// Readonly state
const toggle = function(worksheet, button) {
    if (worksheet.isReadOnly('B2')) {
        worksheet.setReadOnly('B2', false);
        button.value = 'Disable B2';
    } else {
        worksheet.setReadOnly('B2', true);
        button.value = 'Enable B2';
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
    // Columns
    const columns = [
        {
            type: 'text',
            title:'Description',
            width:'200px',
            readOnly:true,
        },
        {
            type: 'text',
            title:'Year',
            width:'200px'
        },
        {
            type: 'text',
            title:'Price',
            width:'100px',
            mask:'#.##',
        },
        {
            type: 'checkbox',
            title:'Automatic',
            width:'100px'
        },
    ]
    // Event
    const oncreatecell = (worksheet, cell, x, y, source, value, label) => {
        if (x == 2 && y == 2) {
            cell.classList.add('readonly');
        }
    }
    // Method
    const toggle = function(worksheet, button) {
        if (worksheet.isReadOnly('B2')) {
            worksheet.setReadOnly('B2', false);
            button.value = 'Disable B2';
        } else {
            worksheet.setReadOnly('B2', true);
            button.value = 'Enable B2';
        }
    }

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar oncreatecell={oncreatecell}>
                <Worksheet data={data} columns={columns} />
            </Spreadsheet>
            <input type={"button"} value={"Disabled B2"} onClick={() => toggle(spreadsheet.current[0], this)} />
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

// Set the license
const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods() {
        toggle() {
            let worksheet = this.refs.spreadsheet.current[0];
            if (worksheet.isReadOnly('B2')) {
                worksheet.setReadOnly('B2', false);
                this.refs.button.value.value = 'Disable B2';
            } else {
                worksheet.setReadOnly('B2', true);
                this.refs.button.value.value = 'Enable B2';
            }
        }
    },
    methods: {
        // Event
        oncreatecell(worksheet, cell, x, y, source, value, label) {
            if (x == 2 && y == 2) {
                cell.classList.add('readonly');
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
        // Columns
        const columns = [
            {
                type: 'text',
                title:'Description',
                width:'200px',
                readOnly:true,
            },
            {
                type: 'text',
                title:'Year',
                width:'200px'
            },
            {
                type: 'text',
                title:'Price',
                width:'100px',
                mask:'#.##',
            },
            {
                type: 'checkbox',
                title:'Automatic',
                width:'100px'
            },
        ]

        return {
            data,
            columns,
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

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input #button type='button' value='Disabled B2' (click)="toggle()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("button") button: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Data
    data: data;
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
                        width:'200px',
                        readOnly:true,
                    },
                    {
                        type: 'text',
                        title:'Year',
                        width:'200px'
                    },
                    {
                        type: 'text',
                        title:'Price',
                        width:'100px',
                        mask:'#.##',
                    },
                    {
                        type: 'checkbox',
                        title:'Automatic',
                        width:'100px'
                    },
                ],
            }],
            oncreatecell: (worksheet, cell, x, y, source, value, label) => {
                if (x == 2 && y == 2) {
                    cell.classList.add('readonly');
                }
            }
        });
    }
    toggle() {
        if (this.worksheets[0].isReadOnly('B2')) {
            this.worksheets[0].setReadOnly('B2', false);
            this.button.value = 'Disable B2';
        } else {
            this.worksheets[0].setReadOnly('B2', true);
            this.button.value = 'Enable B2';
        }
    }
}
```
 
