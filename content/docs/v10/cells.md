title: Spreadsheet Cells: Settings, Methods and Events
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, table, documentation, cells settings
description: Explore the events, methods, and settings of spreadsheet cells. Learn to overwrite column settings at the cell level for enhanced customization.

# Cells

This section provides essential information about the data grid cell, including its properties, such as the DOM reference, editor type, and attributes, such as read-only mask and rendering methods. It also explains how to interact with and customize the cell's behaviour according to your requirements. 

## Documentation

### Methods

The methods listed below allow for programmatic interaction with the cells:

| Method            | Description                                                                                                                                                                           |
| ------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getCell           | This function allows you to obtain the DOM element for a data grid cell using its standard name, such as A1 or B3.<br/>`getCell(cellName: String) => Object`                          |
| getCellFromCoords | The following function retrieves the DOM reference for a data grid cell based on its coordinates, starting with (0,0) for A1.<br/>`getCellFromCoords(x: Number, y: Number) => Object` |
| isAttached        | Verify if a cell element is attached to the DOM.<br/>`isAttached(x: Number, y: Number) => void`                                                                                       |
| getProperty       | Get the cell properties<br/> `getProperty(column: Number, row: Number) => Object`<br/>                                                                                                |
| setProperty       | Update the cell properties<br/> `setProperty(column: Number, row: Number, properties: Object) => Object`<br/>                                                                         |

 

#### Internal methods

Internal methods may result in untracked changes not recorded in the system's event listeners, history, or persistence layers. It is recommended to use alternative methods to ensure proper tracking and consistency of the system's state.

| Method     | Description                                                                                                                                                                                                  |
| -----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getCells   | Get the configuration of a cell including type, masks and other attributes.<br/>`getCells(cellName: String) => Object`<br/><br/> **Alternative:** getProperty()                                              |
| setCells   | Set the configuration for a cell or multiple cells without events or history or DOM updates.<br/>`setCells(cellNames: String\|Object, attributes?: Object) => void`<br/><br/> **Alternative:** setProperty() |
| updateCell | Update the cell value without events or history.<br/>`updateCell(x: Number, y: Number, value: String, force: Boolean) => []`<br/><br/> **Alternative:** setValue()                                           |

 

### Events

JS events related to the JavaScript grid cells.

| Property     | Description                                                                                                                                            |
| -------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreatecell | This method will be called when a cell is created.<br/>`oncreatecell(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Value) => void` |

 

### Cells settings Pro

The following property is available through the initialization of the spreadsheet.

| Property               | Type                                                                                                                 | Description                                                                                                     |
|------------------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| type                   | 'text' \| 'number' \| 'numeric' \| 'percent' \| 'notes' \| 'dropdown' \| 'autocomplete' \| 'calendar' \| 'color' \| 'checkbox' \| 'radio' \| 'autonumber' \| 'progressbar' \| 'rating' \| 'email' \| 'url' \| 'image' \| 'html' \| 'hidden' \| 'tags' \| 'record' | Define the type of editor to use for the column. Can be a string to define a native editor, or a method to define a custom editor plugin. |
| title                  | string                                                                                                              | The title of the column.                                                                                        |
| tooltip                | string                                                                                                              | Define the tooltip text to display on mouseover for the column header.                                         |
| align                  | 'center' \| 'left' \| 'right' \| 'justify'                                                                           | The alignment of the column content. Default: center.                                                          |
| source                 | Array<DropdownItem> \| Array<string> \| Array<number>                                                                | The items to show in the dropdown or autocomplete.                                                             |
| autocomplete           | boolean                                                                                                             | Whether the column is an autocomplete field.                                                                   |
| multiple               | boolean                                                                                                             | Whether the dropdown or autocomplete can accept multiple options.                                              |
| delimiter              | string                                                                                                              | The delimiter to use for separating multiple dropdown options. Default: ";".                                   |
| mask                   | string                                                                                                              | The input mask to apply to the data cell. @see https://jsuites.net/v4/javascript-mask                          |
| decimal                | '.' \| ','                                                                                                          | The character to use as the decimal separator.                                                                 |
| truncate               | number                                                                                                              | The maximum number of characters to display in the cell before truncating.                                     |
| disabledMaskOnEdition  | boolean                                                                                                             | Whether to disable the mask when editing.                                                                      |
| render                 | string \| ((td: HTMLElement, value: number\|string, x: number, y: number, worksheet: worksheetInstance, options: Column) => void) | A renderer method or rule for the cell content.                                                                |
| format                 | string                                                                                                              | The format of the date or numbers in the cell. Default for the calendar: "DD/MM/YYYY".                         |
| locale                 | string                                                                                                              | Locale for Intl.NumberFormat                                                                                    |
| options                | Calendar \| Dropdown \| object                                                                                      | Extended configuration for the column.                                                                         |
| readOnly               | boolean                                                                                                             | Whether the column is read-only.                                                                               |
| rotate                 | number                                                                                                              | The rotation angle for the text value, between -90 and 90. Default: null.                                      |

 

## Examples

### Configuration at the cell level

Basic data grid with different cell types and attributes 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
            ['Purchase price', '19700'],
            ['Down payment', '1000'],
            ['Trade-in value', '500'],
            ['Interest rate', '0.0305'],
            ['Length of loan (in months)', '60'],
            ['', ''],
            ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
            ['Total cost', '=-(B8*B6)+(B3+B4)'],
        ],
        columns: [
            { width:'300px' },
            { width:'200px' },
        ],
        mergeCells: {
            A1: [2, 1]
        },
        rows: {
            0: { height:'200px' }
        },
        cells: {
            A1: { type:'html' },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B6: { type: 'dropdown', source: [12,24,36,48,60] },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        },
    }]
});
</script>
</html>
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
        ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
        ['Purchase price', '19700'],
        ['Down payment', '1000'],
        ['Trade-in value', '500'],
        ['Interest rate', '0.0305'],
        ['Length of loan (in months)', '60'],
        ['', ''],
        ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
        ['Total cost', '=-(B8*B6)+(B3+B4)'],
    ];
    // Cells
    const cells = {
        A1: {type: 'html'},
        B2: {type: 'number', mask: '#.##0,00'},
        B3: {type: 'number', mask: '#.##0,00'},
        B4: {type: 'number', mask: '#.##0,00'},
        B5: {type: 'number', mask: '0.00%'},
        B6: {type: 'dropdown', source: [12, 24, 36, 48, 60]},
        B8: {type: 'number', mask: '#.##0,00'},
        B9: {type: 'number', mask: '#.##0,00'},
    }
    // Columns
    const columns = [
        {width: '300px'},
        {width: '200px'},
    ];
    // Merge cells
    const mergeCells = {
        A1: [2, 1];
    }
    // Rows properties
    const rows = {
        0: {height: '200px'}
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} cells={cells} columns={columns} mergeCells={mergeCells} rows={rows}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :cells="cells" :rows="rows" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
            ['Purchase price', '19700'],
            ['Down payment', '1000'],
            ['Trade-in value', '500'],
            ['Interest rate', '0.0305'],
            ['Length of loan (in months)', '60'],
            ['', ''],
            ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
            ['Total cost', '=-(B8*B6)+(B3+B4)'],
        ];
        // Cells
        const cells = {
            A1: { type:'html' },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B6: { type: 'dropdown', source: [12,24,36,48,60] },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        }
        // Columns
        const columns = [
            { width:'300px' },
            { width:'200px' },
        ];
        // Merge cells
        const mergeCells = {
            A1: [2, 1];
        }
        // Rows properties
        const rows = {
            0: { height:'200px' }
        }

        return {
            data,
            cells,
            columns,
            mergeCells,
            rows,
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
                    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
                    ['Purchase price', '19700'],
                    ['Down payment', '1000'],
                    ['Trade-in value', '500'],
                    ['Interest rate', '0.0305'],
                    ['Length of loan (in months)', '60'],
                    ['', ''],
                    ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
                    ['Total cost', '=-(B8*B6)+(B3+B4)'],
                ],
                columns: [
                    { width:'300px' },
                    { width:'200px' },
                ],
                mergeCells: {
                    A1: [2, 1]
                },
                rows: {
                    0: { height:'200px' }
                },
                cells: {
                    A1: { type:'html' },
                    B2: { type:'number', mask: '#.##0,00' },
                    B3: { type:'number', mask: '#.##0,00' },
                    B4: { type:'number', mask: '#.##0,00' },
                    B5: { type:'number', mask: '0.00%' },
                    B6: { type: 'dropdown', source: [12,24,36,48,60] },
                    B8: { type:'number', mask: '#.##0,00' },
                    B9: { type:'number', mask: '#.##0,00' },
                },
            }]
        });
    }
}
```
 

 

### Update the cell type

Here is an example that demonstrates how to programmatically change the type of a cell. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="button" value="Change A1 to dropdown" id="changebtn"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const setType = function() {
    // Change the cell editor type
    worksheets[0].setProperty(0,0,{
        type: 'dropdown',
        source: ['Male','Female'],
    });
    // Define the new value
    worksheets[0].setValue('A1', 'Male');
}

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }]
});

document.getElementById('changebtn').onclick = setType
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

const setType = (worksheet) => {
    // Change the cell editor type
    worksheet.setProperty(0,0,{
        type: 'dropdown',
        source: ['Male','Female'],
    });
    // Define the new value
    worksheet.setValue('A1', 'Male');
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[6,6]} />
            </Spreadsheet>
            <input type="button" onClick={() => setType(spreadsheet.current[0])} value="Change A1 to a dropdown" />
        </>
    );
}
```
```vue
<template>
<Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :cells="cells" :rows="rows" />
    </Spreadsheet>
    <input type="button" @click="setType" value="Change A1 to a dropdown" />
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
        setType() {
            // First worksheet
            let worksheet = this.$refs.spreadsheet.current[0];

            // Change the cell editor type
            worksheet.setProperty(0,0,{
                type: 'dropdown',
                source: ['Male','Female'],
            });

            // Define the new value
            worksheet.setValue('A1', 'Male');
        }
    },
    data() {
        // Data
        const data = [
            ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
            ['Purchase price', '19700'],
            ['Down payment', '1000'],
            ['Trade-in value', '500'],
            ['Interest rate', '0.0305'],
            ['Length of loan (in months)', '60'],
            ['', ''],
            ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
            ['Total cost', '=-(B8*B6)+(B3+B4)'],
        ];
        // Cells
        const cells = {
            A1: { type:'html' },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B6: { type: 'dropdown', source: [12,24,36,48,60] },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        }
        // Columns
        const columns = [
            { width:'300px' },
            { width:'200px' },
        ];
        // Merge cells
        const mergeCells = {
            A1: [2, 1];
        }
        // Rows properties
        const rows = {
            0: { height:'200px' }
        }

        return {
            data,
            cells,
            columns,
            mergeCells,
            rows,
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

// Set the type
const setType = (worksheet) => {
    // Change the cell editor type
    worksheet.setProperty(0,0,{
        type: 'dropdown',
        source: ['Male','Female'],
    });
    // Define the new value
    worksheet.setValue('A1', 'Male');
}

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type="button" (click)="setType()" value="Change A1 to a dropdown" />`;
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
                    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" width="150" tabindex="0"><br><h4>Vehicle Payment Calculator</h4>', ''],
                    ['Purchase price', '19700'],
                    ['Down payment', '1000'],
                    ['Trade-in value', '500'],
                    ['Interest rate', '0.0305'],
                    ['Length of loan (in months)', '60'],
                    ['', ''],
                    ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
                    ['Total cost', '=-(B8*B6)+(B3+B4)'],
                ],
                columns: [
                    { width:'300px' },
                    { width:'200px' },
                ],
                mergeCells: {
                    A1: [2, 1]
                },
                rows: {
                    0: { height:'200px' }
                },
                cells: {
                    A1: { type:'html' },
                    B2: { type:'number', mask: '#.##0,00' },
                    B3: { type:'number', mask: '#.##0,00' },
                    B4: { type:'number', mask: '#.##0,00' },
                    B5: { type:'number', mask: '0.00%' },
                    B6: { type: 'dropdown', source: [12,24,36,48,60] },
                    B8: { type:'number', mask: '#.##0,00' },
                    B9: { type:'number', mask: '#.##0,00' },
                },
            }]
        });
    }

    setType() {
            // First worksheet
            let worksheet = this.worksheets[0];

            // Change the cell editor type
            worksheet.setProperty(0,0,{
                type: 'dropdown',
                source: ['Male','Female'],
            });

            // Define the new value
            worksheet.setValue('A1', 'Male');
    }
}
```
 
