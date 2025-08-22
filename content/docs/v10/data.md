title: Data Operations: Methods, Events, and Settings for Managing Worksheet Data
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like formulas, spreadsheet data, worksheet data, manage spreadsheet data, change cell data, update worksheet data
description: Explore different methods to load and manipulate the worksheet data in your online spreadsheets. Gain insights into programmatically updating data and leverage related events to integrate the spreadsheet with your applications.

# Data

This section is dedicated to the methods, events and settings related to data and its operations. 

## Loading the data

### Formats

There are various methods for creating a new spreadsheet and loading data into it, including: 

  * From an existing HTML table;
  * Loading data from a CSV file;
  * Loading data from a JSON string or remote JSON file;
  * Loading data from a JavaScript Array;
  * Loading data from an XLSX file;

 

### Cell binding

When an array is declared as the data source in JSS, a reference to the data is retained. This allows for any modifications made in the data grid to be instantly reflected in the original data source. 

> **Nested objects**  JSS supports the use of nested objects, and you must specify the path to the desired property in the column definitions using the property name, as shown below. 

#### Example

The variable data is defined as a reference to an array, which means that any changes made in the following data grid will automatically update the original variable's value. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<div id='console'></div>

<input type='button' id='showonconsole' value='console.log on data'/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

let data = [
    {
        name: 'Jorge',
        address: {
            number: '201',
            city: 'New York'
        }
    },
    {
        name: 'Paul',
        address: {
            number: '1',
            city: 'New Jersey'
        }
    },
];

// Create the data grid
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        // Data pass as a reference
        data: data,
        columns: [{
            // Path to the data property for this column
            name: 'name',
            title: 'Full name',
            type: 'text',
            width: '200px',
        },
        {
            // Path to the data property for this column
            name: 'address.number',
            title: 'Number',
            type: 'text',
            width: '200px',
        },
        {
            // Path to the data property for this column
            name: 'address.city',
            title: 'City',
            type: 'text',
            width: '300px',
        }]
    }]
});

document.getElementById('showonconsole').onclick = function () { document.getElementById('console').innerHTML = JSON.stringify(data) }
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
    // Console
    const console = useRef();
    // Data
    const data = [
        {
            name: 'Jorge',
            address: {
                number: '201',
                city: 'New York'
            }
        },
        {
            name: 'Paul',
            address: {
                number: '1',
                city: 'New Jersey'
            }
        }
    ];
    // Columns
    const columns = [
        {
            // Path to the data property for this column
            name: 'name',
            title: 'Full name',
            type: 'text',
            width: '200px',
        },
        {
            // Path to the data property for this column
            name: 'address.number',
            title: 'Number',
            type: 'text',
            width: '200px',
        },
        {
            // Path to the data property for this column
            name: 'address.city',
            title: 'City',
            type: 'text',
            width: '300px',
        }
    ];
    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns}/>
            </Spreadsheet>
            <div ref={console}></div>
            <input type='button' onClick={() => console.current.innerText = JSON.stringify(data)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="data" />
    </Spreadsheet>
    <div ref="log"></div>
    <input type='button' @click="get" />
</template>

<script>
import { ref } from 'vue';
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

// Data
const data = [
    {
        name: 'Jorge',
        address: {
            number: '201',
            city: 'New York'
        }
    },
    {
        name: 'Paul',
        address: {
            number: '1',
            city: 'New Jersey'
        }
    }
];

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        get() {
            this.$refs.log.value.innerText = JSON.stringify(data)
        }
    },
    data() {
        // Columns
        const columns = [
            {
                // Path to the data property for this column
                name: 'name',
                title: 'Full name',
                type: 'text',
                width: '200px',
            },
            {
                // Path to the data property for this column
                name: 'address.number',
                title: 'Number',
                type: 'text',
                width: '200px',
            },
            {
                // Path to the data property for this column
                name: 'address.city',
                title: 'City',
                type: 'text',
                width: '300px',
            }
        ];

        return {
            data,
            options,
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

// Data
const data = [
    {
        name: 'Jorge',
        address: {
            number: '201',
            city: 'New York'
        }
    },
    {
        name: 'Paul',
        address: {
            number: '1',
            city: 'New Jersey'
        }
    },
];

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <div #log></div>
        <input type='button' (click)="get()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("log") log: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                // Data pass as a reference
                data: data,
                columns: [{
                    // Path to the data property for this column
                    name: 'name',
                    title: 'Full name',
                    type: 'text',
                    width: '200px',
                },
                {
                    // Path to the data property for this column
                    name: 'address.number',
                    title: 'Number',
                    type: 'text',
                    width: '200px',
                },
                {
                    // Path to the data property for this column
                    name: 'address.city',
                    title: 'City',
                    type: 'text',
                    width: '300px',
                }]
            }]
        });
    },
    get() {
        this.log.nativeElement.innerText = JSON.stringify(data);
    }
}
```

### Advanced loading

Advanced loading allows for additional options to be specified during data loading, such as: 

  * The ability to assign unique IDs to each row;
  * To selectively load only a portion of the data (e.g. loading only rows 10, 11, and 12).


{.ignore}
```javascript
// Loading partial data means, all non-specified rows would be set as blank.
table.setData([
    { id: 1000, row: 10, data:[1,2,3] },
    { id: 2000, row: 11, data:[4,5,6] },
    { id: 2001, row: 12, data:[7,8,9] },
]);
```
  

## Documentation

### Methods

Methods to help the data management on your grid or spreadsheet.

| Method             | Description                                                                                                                                                                                                                                                                                                                                                |
| -------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Read methods       |
| getValue           | Get the value of a cell name. <br/>@param {string} cellName - The string to represent a cell name, for example A1, B1... <br/>@param {boolean} Get the raw data (false). Get the processed data (true)<br/> `getValue(cellName: String, processed: Boolean) => any`                                                                                        |
| getValueFromCoords | Get the value of a cell from its coordinates.<br/> `getValueFromCoords(x: Number, y: Number, processed: Boolean) => any`                                                                                                                                                                                                                                   |
| getData            | Extract the data from the spreadsheet. <br/>@param {boolean} Get the data from the highlighted cells only. <br/>@param {boolean} Get the raw data (false). Get the processed data (true). <br/>@param {string} Delimiter for exporting. Default \t<br/> `getData(highlighted?: Boolean, processed?: Boolean, delimiter?: String, asJson?: Boolean) => []]` |
| getDataFromRange   | Get the data from a Excel like string range.<br/>`getDataFromRange(range: String, processed: Boolean) => []]`                                                                                                                                                                                                                                              |
| getRowData         | Get the data from one row by its number starting on zero.<br/>`getRowData(rowNumber: Number, processed: Boolean) => []]`                                                                                                                                                                                                                                   |
| getColumnData      | Get the data from one column by its number starting on zero.<br/>`getColumnData(colNumber: Number, processed: Boolean) => []`                                                                                                                                                                                                                              |
| Write methods      |
| setValue           | Set the value of a cell or multiple cells. <br/>@param {string\|object[]} cellName - The string to represent a cell name, such as A1,B1, etc. <br/>@param {value?} - The cell new value <br/>@param {boolean?} - Force update values on read-only cells. `setValue(cellName: String\|object[], value: String\|Number, force: Boolean) => void`             |
| setValueFromCoords | Set the value of a cell from its coordinates<br/>`setValueFromCoords(x: Number, y: Number, value: String\|Number, force: Boolean) => void`                                                                                                                                                                                                                 |
| setData            | Update the data from the data JavaScript data grid. <br/>`setData(data: [[]]) => void`                                                                                                                                                                                                                                                                     |
| loadData           | Reset the data from the JavaScript data grid and do not call any events.<br/> `loadData(data: [[]]) => void`                                                                                                                                                                                                                                               |
| setRowData         | Set the data for one row by its number starting on zero. <br/>@param {number} row number. <br/>@param {number[]\|string[]} The new data. <br/>@param {boolean} Force update on readonly cells.<br/> `setRowData(rowNumber: Number, data: [], force: Boolean) => void`                                                                                      |
| setColumnData      | Set the data for one column by its number starting on zero. <br/>@param {number} column number. <br/>@param {number[]\|string[]} The new data. <br/>@param {boolean} Force update on readonly cells.<br/> `setColumnData(columnNumber: Number, data: [], force: Boolean) => void`                                                                          |
| Operation methods  |
| download           | Download the data from a worksheet in a CSV format. <br/>@param {boolean} Include the headers <br/>@param {boolean} Returns the raw data when false or Returns the processed data and formulas when true.<br/> `download(includeHeaders: Boolean, processed: Boolean) => void`                                                                             |
| copy               | Copy the selected cells <br/>@param {boolean} Clear the data before pasting.<br/> `copy(cut: Boolean) => void`                                                                                                                                                                                                                                             |
| paste              | Paste the data to the current cursor position<br/> `paste(x: Number, y: Number, data: String\|String[[]]) => void`                                                                                                                                                                                                                                         |

 

### Events

Events related to operations with the spreadsheet data.

| Event                   | Description                                                                                                                                                                                                          |
| ------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforechange          | `onbeforechange(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Value) => void`<br/>Before changing the cell value. This can be used to intercept, change or cancel the user action.               |
| onchange                | `onchange(worksheet: Object, cell:DOMElement, x: Number, y: Number, newValue: Any, oldValue: Any)`<br/>After a new value is updated.                                                                                 |
| onafterchanges          | `onafterchanges(worksheet: Object, records: Array)`<br/>An array of cells affected.                                                                                                                                  |
| oncopy                  | `oncopy(worksheet: Object, highlighted: Boolean, str: String, cut: boolean)`<br/>The data copied to the clipboard.                                                                                                   |
| onbeforepaste (Updated) | `onbeforepaste(worksheet: Object, data: Array, x: Number, y: Number, properties: Object[])`<br/>This happens before pasting the data in the spreadsheet, can be used to intercept, change or cancel the user action. |
| onpaste                 | `onpaste(worksheet: Object, records: [])`<br/>After the paste action.                                                                                                                                                |

 

### Initial Settings

Settings can be used during the data grid initialization.

| Property             | Description                                     |
| ---------------------|-------------------------------------------------|
| data: Array \| Object  | Define the new data from a local JSON or array. |
| url: String          | Load the data from an external file.            |
| csv: String          | Load the data from an external CSV file.        |
| csvHeaders: Boolean  | The first row of the CSV file is the headers    |
| csvDelimiter: String | CSV divisor. `Default: ','`                     |

 

## Examples

### Create a data grid from an 2D array.

Create a spreadsheet from a JavaScript array 

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ],
        columns: [
            { title:'Model', width:'300px' },
            { title:'Price', width:'80px' },
            { title:'Model', width:'100px' }
        ]
    }]
});
</script>
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
        ['Mazda', 2001, 2000],
        ['Peugeot', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    // Columns
    const columns = [
        { title:'Model', width:'300px' },
        { title:'Price', width:'80px' },
        { title:'Model', width:'100px' }
    ];
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
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
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ];
        // Columns
        const columns = [
            { title:'Model', width:'300px' },
            { title:'Price', width:'80px' },
            { title:'Model', width:'100px' }
        ];

        return {
            data,
            columns,
            license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
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
                data: [
                    ['Mazda', 2001, 2000],
                    ['Peugeot', 2010, 5000],
                    ['Honda Fit', 2009, 3000],
                    ['Honda CRV', 2010, 6000],
                ],
                columns: [
                    { title:'Model', width:'300px' },
                    { title:'Price', width:'80px' },
                    { title:'Model', width:'100px' }
                ]
            }]
        });
    }
}
```
 

 

### Create a data grid from an JSON object

How to create a data grid from a JSON object. 

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { name:'Jorge', id:'3', age:'40', gender:'Male' },
            { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
            { name:'Jorge Santos', id:'5', age:'32', gender:'Female' },
        ],
        columns: [
            { type:'text', width:'300px', name:'id' },
            { type:'text', width:'200px', name:'name' },
            { type:'text', width:'100px', name:'age' },
            { type:'hidden', name:'gender' },
         ]
    }]
});
</script>
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
        { name:'Jorge', id:'3', age:'40', gender:'Male' },
        { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
        { name:'Jorge Santos', id:'5', age:'32', gender:'Female' },
    ];
    const columns = [
        { type:'text', width:'300px', name:'id' },
        { type:'text', width:'200px', name:'name' },
        { type:'text', width:'100px', name:'age' },
        { type:'hidden', name:'gender' },
    ];
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
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
            { name:'Jorge', id:'3', age:'40', gender:'Male' },
            { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
            { name:'Jorge Santos', id:'5', age:'32', gender:'Female' },
        ];
        const columns = [
            { type:'text', width:'300px', name:'id' },
            { type:'text', width:'200px', name:'name' },
            { type:'text', width:'100px', name:'age' },
            { type:'hidden', name:'gender' },
        ];
        return {
            data,
            columns,
            license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                    { name:'Jorge', id:'3', age:'40', gender:'Male' },
                    { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
                    { name:'Jorge Santos', id:'5', age:'32', gender:'Female' },
                ],
                columns: [
                    { type:'text', width:'300px', name:'id' },
                    { type:'text', width:'200px', name:'name' },
                    { type:'text', width:'100px', name:'age' },
                    { type:'hidden', name:'gender' },
                 ]
            }]
        });
    }
}
```
 

 

### Create a data grid from a CSV file

How to create a data grid from a remote CSV file 

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        // Remove file
        csv: '/jspreadsheet/demo.csv',
        tableOverflow: true,
        tableWidth: 600,
        // First line will define the header titles
        csvHeaders: true,
        columns: [
            { width: '300px' },
            { width: '100px' },
            { width: '100px' },
        ]
    }]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet csv="demo.csv" csvHeaders />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet csv="demo.csv" csvHeaders />
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
        return {
            license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                // Remove file
                csv: 'demo.csv',
                // First line will define the header titles
                csvHeaders: true,
                columns: [
                    { width: '300px' },
                    { width: '100px' },
                    { width: '100px' },
                ]
            }]
        });
    }
}
```

### Create a data grid from a HTML table

How to create data grid from an existing HTML table element 

{.ignore}
```html
<table id="spreadsheet">
<thead>
<tr>
<td>POS</td>
<td>TITLE</td>
<td>ARTIST</td>
<td>PEAK</td>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>DIVINELY UNINSPIRED TO A HELLISH EXTENT</td>
<td>LEWIS CAPALDI</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>NO 6 COLLABORATIONS PROJECT</td>
<td>ED SHEERAN</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>THE GREATEST SHOWMAN</td>
<td>MOTION PICTURE CAST RECORDING</td>
<td>1</td>
</tbody>
</table>

<br>

<script>
jspreadsheet(document.getElementById('spreadsheet'));
</script>
```
 

### Batch update

How to update multiple cells with a single call 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type='button' value='Update multiple cells' id='updateCells' />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const update = function() {
    let records = [
        {
            x: 0,
            y: 0,
            value: 'update A1',
        },
        {
            x: 3,
            y: 3,
            value: 'Another cell',
        }
    ];

    worksheets[0].setValue(records);
}

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }]
});

document.getElementById('updateCells').onclick = update
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

    // Update multiple cells
    const update = () => {
        let records = [
            {
                x: 0,
                y: 0,
                value: 'update A1',
            },
            {
                x: 10,
                y: 10,
                value: 'Another cell',
            },
            // (...)
        ];

        spreadsheet.current[0].setValue(records);
    }

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet />
            </Spreadsheet>
        <input type='button' value='Update multiple cells' onClick={()=>update()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet />
    </Spreadsheet>
    <input type='button' value='Update multiple cells' @click="update" />
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
        update() {
            let records = [
                {
                    x: 0,
                    y: 0,
                    value: 'update A1',
                },
                {
                    x: 10,
                    y: 10,
                    value: 'Another cell',
                },
                // (...)
            ];

            this.$refs.spreadsheet.current[0].setValue(records);
        }
    },
    data() {
        return {
            license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type='button' value='Update multiple cells' (click)="update()" />`,
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
    update() {
        let records = [
            {
                x: 0,
                y: 0,
                value: 'update A1',
            },
            {
                x: 10,
                y: 10,
                value: 'Another cell',
            },
            // (...)
        ];

        this.worksheets[0].setValue(records);
    }
}
```
 

 

## Extensions

Depending on the version of XLSX and the operations included in the file, this extension may be subject to limitations or produce differences in the final render. We are continually working to improve our product, so if you encounter any such limitations, please don't hesitate to contact us at contact@jspreadsheet.com for assistance.

 

### Create from a XSLX file

This feature requires an extension that is part of the Premium and Enterprise license. 

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet.setLicense('###license###');

// Bind the XSLX parser to your JSS distribution
jspreadsheet.setExtensions({ parser });

// Create spreadsheet from the XLSX
jspreadsheet.parser({
    url: '/tests/Samples/sample.xlsx',
    onload: function(config) {
        // Create the spreadsheet
        jspreadsheet(document.getElementById('spreadsheet'), config);
    },
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";

// Set the license
jspreadsheet.setLicense('###license###');
// Enable extensions
jspreadsheet.setExtensions({ parser });

export default function App() {
    // Grid
    const grid = useRef();
    // Data
    const load = () => {
        jspreadsheet.parser({
            url: '/tests/Samples/sample.xlsx',
            onload: function(config) {
                // Create the spreadsheet
                jspreadsheet(spreadsheet.current, config);
            },
        });
    }
    // Render data grid component
    return (
        <>
            <div ref={grid}></div>
            <input type="button" onClick={load} value="Create data grid" />
        </>
    );
}
```
```vue
<template>
    <div ref="grid"></div>
    <input type="button" @click="load" value="Create data grid" />
</template>

<script>
import { ref } from "vue";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        load() {
            jspreadsheet.parser({
                url: '/tests/Samples/sample.xlsx',
                onload: function(config) {
                    // Create the spreadsheet
                    jspreadsheet(this.$refs.grid.value, config);
                },
            });
        }
    },
    data() {
        let grid = ref(null);

        return {
            grid,
            license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #grid></div>
        <input type="button" (click)="load" value="Create data grid" />`;
})
export class AppComponent {
    @ViewChild("grid") grid: ElementRef;
    // Create a new data grid
    load() {
        jspreadsheet.parser({
            url: '/tests/Samples/sample.xlsx',
            onload: function(config) {
                // Create the spreadsheet
                jspreadsheet(this.grid, config);
            },
        });
    }
}
```
 

 

## Releases notes

### Differences from version 9

 

| **worksheet.refresh()** |  This method is deprecated. You can destroy and re-create the spreadsheet.<br/><br/>// Destroy the spreadsheet<br/> jspreadsheet.destroy(DOM);<br/> // Recreate the same data grid<br/> jspreadsheet(DOM, options);<br/> |
| ------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **onbeforepaste**       |  This event has been updated since it brings now the format of the cells.                                                                                                                                                     |


