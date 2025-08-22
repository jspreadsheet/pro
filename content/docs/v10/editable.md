title: Worksheet Editable State and Read-Only Cell Properties
keywords: Jspreadsheet, Jexcel, data grid, editable state, excel-like edition control, read-only cells, readonly controls, spreadsheet, editable data tables, worksheet editing, cell protection, data grid customization, user input control, data entry restrictions
description: How to change the editable state of worksheets or cells in Jspreadsheet. Explore methods and settings for control and read-only management. Enhance data grid customization and achieve precise user input control.

# Editable state

This section details how to control the editable state of worksheets or the entire spreadsheet. It also includes information on how to work with cells that are set to read-only mode. 

## Editable

The editable status of a single worksheet or the entire spreadsheet can be changed using the `editable` property. 

### Settings

You can define the value of the editable property during initialization settings or programmatically after initialization.

| Method            | Description                                                                                    |
| ------------------|------------------------------------------------------------------------------------------------|
| editable: boolean | The editable flag can be set either on the worksheet level or on the entire spreadsheet level. |

 

### Example

The following example shows how to change the editable state of the current worksheet or the entire spreadsheet. 

   

[See this example on Jsfiddle](https://jsfiddle.net/spreadsheet/v9s0eapc/)

 





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/>
<input type="button" value="Disable First Worksheet" id="disablefirst" />
<input type="button" value="Disable Spreadsheet" id="disablespreadsheet" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Method to handle the editable state of the first worksheet
const worksheet = function(e) {
    // Toggle the editable state
    grid[0].options.editable = ! grid[0].options.editable;
    // Change button label
    e.value = grid[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
}

// Method to handle the editable state of the whole spreadsheet
const spreadsheet = function(e) {
    // Toggle the editable state
    grid[0].parent.config.editable = ! grid[0].parent.config.editable;
    // Change button label
    e.value = grid[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
}

// Create a new spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
    }]
});

document.getElementById("disablefirst").onclick = () => worksheet(this)
document.getElementById("disablespreadsheet").onclick = () => spreadsheet(this)
</script>
<html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

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
    // Method to handle the editable state of the first worksheet
    const worksheet = (e) => {
        // Toggle the editable state
        spreadsheet.current[0].options.editable = !spreadsheet.current[0].options.editable;
        // Change button label
        e.value = spreadsheet.current[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
    }

    // Method to handle the editable state of the whole spreadsheet
    const all = (e) => {
        // Toggle the editable state
        spreadsheet.current[0].parent.config.editable = !spreadsheet.current[0].parent.config.editable;
        // Change button label
        e.value = spreadsheet.current[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet data={data}/>
            </Spreadsheet>
            <input type="button" value="Disable First Worksheet" onClick={(e) => worksheet(e.target)}/>
            <input type="button" value="Disable Spreadsheet" onClick={(e) => all(e.target)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :tabs="true">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="Disable First Worksheet" @click="worksheet" />
    <input type="button" value="Disable Spreadsheet" @click="all" />
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
        // Method to handle the editable state of the first worksheet
        worksheet(e) {
            // Current state
            let editable = this.$refs.spreadsheet.current[0].options.editable;
            // Toggle the editable state
            this.$refs.spreadsheet.current[0].options.editable = ! this.$refs.spreadsheet.current[0].options.editable;
            // Change button label
            e.value = this.$refs.current[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
        },

        // Method to handle the editable state of the whole spreadsheet
        all(e) {
            // Toggle the editable state
            this.$refs.spreadsheet.current[0].parent.config.editable = ! this.$refs.spreadsheet.current[0].parent.config.editable;
            // Change button label
            e.value = this.$refs.spreadsheet.current[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
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
    template: `<div #spreadsheet></div>
        <input type="button" value="Disable First Worksheet" (click)="worksheet($event)" />
        <input type="button" value="Disable Spreadsheet" (click)="all($event)" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            tabs: true,
            worksheets: [{
                data: [
                    ['Mazda', 2001, 2000, 1],
                    ['Peugeot', 2010, 5000, 1],
                    ['Honda Fit', 2009, 3000, 1],
                    ['Honda CRV', 2010, 6000, 0],
                ],
            }]
        });
    }

    // Method to handle the editable state of the first worksheet
    worksheet(e) {
        // Toggle the editable state
        this.worksheets.current[0].options.editable = ! this.worksheets.current[0].options.editable;
        // Change button label
        e.value = this.worksheets[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
    }

    // Method to handle the editable state of the whole spreadsheet
    all(e) {
        // Toggle the editable state
        this.worksheets.current[0].parent.config.editable = ! this.worksheets.current[0].parent.config.editable;
        // Change button label
        e.value = this.worksheets.current[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
    }
}
```
 

 

## Read-only cells

During the initialization of the data grid, you can set an entire column, row, or specific cell as read-only. 

### Methods

The following methods enable setting or retrieving the read-only state of individual cells after initializing the data grid.

| Method      | Description                                                      |
| ------------|------------------------------------------------------------------|
| isReadOnly  | `instance.isReadOnly(cellName: string) => void`                  |
| setReadOnly | `instance.setReadonly(cellName: string, state: boolean) => void` |

 

### Example

The example below defines the first data grid column or a single cell as read-only. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Toggle B2" id="toggleb2"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Toggle readonly status of a cell
const toggle = function(b) {
    if (grid[0].isReadOnly('B2')) {
        grid[0].setReadOnly('B2', false);
        b.value = 'Disable B2';
    } else {
        grid[0].setReadOnly('B2', true);
        b.value = 'Enable B2';
    }
}

// Create a new spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ],
        columns: [
            { readonly: true, },
        ],
        cells: { B1: { type: 'number', readonly: true } }
    }],
});

document.getElementById("toggleb2").onclick = toggle
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
    ]
    // Columns
    const columns = [
        { readonly: true },
    ]
    // Cells
    const cells = {
        B1: {
            type: 'number',
            readonly: true
        }
    }

    // Toggle readonly status of a cell
    const toggle = (b) => {
        if (spreadsheet.current[0].isReadOnly('B2')) {
            spreadsheet.current[0].setReadOnly('B2', false);
            b.value = 'Disable B2';
        } else {
            spreadsheet.current[0].setReadOnly('B2', true);
            b.value = 'Enable B2';
        }
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} cells={cells} />
            </Spreadsheet>
            <input type="button" value="Disabled B2" onClick={(e) => toggle(e.target)} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :cells="cells" />
    </Spreadsheet>
    <input type="button" value="Disabled B2" @click="toggle" />
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
        // Toggle readonly status of a cell
        toggle(b) {
            if (this.$refs.spreadsheet.current[0].isReadOnly('B2')) {
                spreadsheet.current[0].setReadOnly('B2', false);
                b.value = 'Disable B2';
            } else {
                this.$refs.spreadsheet.current[0].setReadOnly('B2', true);
                b.value = 'Enable B2';
            }
        }
    },
    data() {
        // Data
        const data = [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ]
        // Columns
        const columns = [
            { readonly: true },
        ]
        // Cells
        const cells = {
            B1: {
                type: 'number',
                readonly: true
            }
        }

        return {
            data,
            columns,
            cells,
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
                    [1, 2, 3, 4],
                    [1, 2, 3, 4],
                    [1, 2, 3, 4],
                    [1, 2, 3, 4],
                ],
                columns: [
                    { readonly: true, },
                ],
                cells: { B1: { type: 'number', readonly: true } }
            }],
        });
    }
}
```
 
