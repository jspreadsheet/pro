title: Spreadsheet Editors: Customizing Data Input in Jspreadsheet
keywords: Jspreadsheet, data grid, javascript, excel-like controls, spreadsheet controls, editors, data input, input components, cell editors, input integration, editor methods, editor settings, editor events, interactive data grid, custom data entry
description: Discover the flexibility and power of editors in Jspreadsheet for transforming simple spreadsheets into amazing web-based applications. Learn about native editors and build your custom editors.

# Spreadsheet Cell Editors

## Introduction to editors

The Jspreadsheet editors aim to improve the user experience and provide a comprehensive data management tool for any application. It offers various built-in editors; developers can design or include plugins to create customized data editors. Currently, the following native editors are available: 

  1. text;
  2. numeric;
  3. hidden;
  4. dropdown;
  5. checkbox;
  6. radio;
  7. calendar;
  8. image;
  9. color;
  10. email;
  11. url;
  12. progressbar;
  13. rating;
  14. autonumber;
  15. HTML;
  16. percent;
  17. notes;

### Native editors

The type property can be used to declare the editor at the column or cell levels. When you have both columns and cells, the editor declared in the cell level will overwrite the first. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
        columns: [
            { type: 'text' }
        ],
        cells: {
            A1: { type: 'dropdown', source: ['Male','Female'] }
        }
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

    // Columns
    const columns = [
        {type: 'text'}
    ];
    const cells = {
        A1: {type: 'dropdown', source: ['Male', 'Female']}
    };
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet columns={columns} cells={cells}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :columns="columns" :cells="cells" />
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
        // Columns
        const columns = [
            { type: 'text' }
        ];
        const cells = {
            A1: { type: 'dropdown', source: ['Male','Female'] }
        };

        return {
            cells,
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
                minDimensions: [5,5],
                columns: [
                    { type: 'text' }
                ],
                cells: {
                    A1: { type: 'dropdown', source: ['Male','Female'] }
                }
            }]
        });
    }
}
```

### Custom editors

Customizing cell data entry using custom editors can enhance the user experience and data collection in your data grid. A custom editor is defined as a JS object with several methods described below.

| Method      | Description                                                                                                                                                          |
| ------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createCell  | When a new cell is created.<br/>`createCell(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                               |
| updateCell  | When the cell value changes.<br/>`updateCell(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                              |
| openEditor  | When the user starts editing a cell.<br/>`openEditor(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                      |
| closeEditor | When the user finalizes the edit of a cell.<br/>`closeEditor(cell: Object, confirmChanges: Boolean, x: Number, y: Number, instance: Object, options: Object) : void` |
| destroyCell | When a cell is destroyed.<br/>`destroyCell(cell: Object, x: Number, y: Number, instance: Object) : void`                                                             |
| get         | Transform the raw data into processed data. It will show text instead of an id in the type dropdown, for example.<br/>`get(options: Object, value: Any) : Any`       |

### Methods Example

```html
<div id="spreadsheet"></div>

<script>
const Editor = {
    updateCell: function(cell, value, x, y, instance) {
        value = Number(value) || 0;
        if (cell) {
            cell.innerText = value + '%';
        }
        return value / 100;
    },
    createCell: function(cell, value, x, y, instance) {
        value = Number(value) || 0;
        if (cell) {
            cell.innerText = value + '%';
        }
        return value / 100;
    },
    openEditor: function(cell, value, x, y, instance) {
        instance.parent.input.onblur = function() {
            instance.closeEditor(cell, true);
        };
        if (value) {
            instance.parent.input.innerText = (Number(value)) * 100;
        }
        jSuites.focus(instance.parent.input);
    },
    closeEditor: function(cell, save, x, y, instance) {
        let value;
        if (save) {
            value = Number(instance.parent.input.innerText);
        } else {
            value = '';
        }

        return value;
    },
    get: function(options, val) {
        return (val * 100) + '%';
    }
}

const data = [
    ['PHP', '1'],
    ['Javascript', '0.4'],
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        {
            type: 'text',
            title: 'Course Title',
            width: '300px'
        },
        {
            type: Editor,
            title: 'Percent',
            width: '200px'
        },
     ]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import { createRoot } from "react-dom/client";
import Switch from "@mui/material/Switch";

const license = '###license###';

const Editor = {
    createCell: (cell, value, x, y, instance, options) => {
        // Clone the column definitions
        let o = { ...options, defaultChecked: !!value };
        // type is a reserved property
        delete o.type;
        // Change handler
        const onChange = function(event, newValue) {
            // Update the JSS data based on the component
            instance.setValue(cell, newValue);
        }
        // Create the link between react component and JSS
        createRoot(cell).render(<Switch {...o} onChange={onChange} />);
    },
    updateCell: (cell, value) => {
        // Get the checkbox
        let input = cell.querySelector('input');
        // Toggle the value
        input.checked = !! value;
    },
    openEditor: (cell, value, x, y, instance) => {
        // Toggle the value
        instance.setValue(cell, !value);
        // Do not open editor since is just a checkbox
        return false;
    },
    closeEditor: () => {
        // This is not used
        return false;
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [[true]],
    // Columns
    columns: [
        {
            type: Editor,
            color: "warning",
        }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
 

 

## Examples

### Native editors

Basic example using multiple different editors. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
            ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
        ],
        filters: true,
        columns: [
            {
                type:'text',
                title:'Car',
                width:120
            },
            {
                type: 'dropdown',
                title:'Make',
                width:180,
                source:[
                    "Alfa Romeo",
                    "Audi",
                    "Bmw",
                    "Chevrolet",
                    "Chrysler",
                    "Dodge",
                    "Ferrari",
                    "Fiat",
                    "Ford",
                    "Honda",
                    "Hyundai",
                    "Jaguar",
                    "Jeep",
                    "Kia",
                    "Mazda",
                    "Mercedes-Benz",
                    "Mitsubishi",
                    "Nissan",
                    "Peugeot",
                    "Porsche",
                    "Subaru",
                    "Suzuki",
                    "Toyota",
                    "Volkswagen"
                  ]
            },
            {
                type: 'calendar',
                title:'Available',
                width:120,
                options:{ format:'DD/MM/YYYY' }
            },
            {
                type: 'image',
                title:'Photo',
                width:120
            },
            {
                type: 'checkbox',
                title:'Stock',
                width:80
            },
            {
                type: 'text',
                title:'Price',
                mask:'$ #.##0,00',
                width:100,
                decimal:',',
                disabledMaskOnEdition: true
            },
            {
                type: 'color',
                width:100,
                render:'square',
            },
         ]
    }],
});
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
        ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
        ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
    ];
    // Columns
    const columns = [
        {
            type:'text',
            title:'Car',
            width:120
        },
        {
            type: 'dropdown',
            title:'Make',
            width:180,
            source:[
                "Alfa Romeo",
                "Audi",
                "Bmw",
                "Chevrolet",
                // (...)
              ]
        },
        {
            type: 'calendar',
            title:'Available',
            width:120,
            options:{ format:'DD/MM/YYYY' }
        },
        {
            type: 'image',
            title:'Photo',
            width:120
        },
        {
            type: 'checkbox',
            title:'Stock',
            width:80
        },
        {
            type: 'text',
            title:'Price',
            mask:'$ #.##0,00',
            width:100,
            decimal:',',
            disabledMaskOnEdition: true
        },
        {
            type: 'color',
            width:100,
            render:'square',
        },
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} filters />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :filters="true" />
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
            ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
            ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
        ];
        // Columns
        const columns = [
            {
                type:'text',
                title:'Car',
                width:120
            },
            {
                type: 'dropdown',
                title:'Make',
                width:180,
                source:[
                    "Alfa Romeo",
                    "Audi",
                    "Bmw",
                    "Chevrolet",
                    // (...)
                  ]
            },
            {
                type: 'calendar',
                title:'Available',
                width:120,
                options:{ format:'DD/MM/YYYY' }
            },
            {
                type: 'image',
                title:'Photo',
                width:120
            },
            {
                type: 'checkbox',
                title:'Stock',
                width:80
            },
            {
                type: 'text',
                title:'Price',
                mask:'$ #.##0,00',
                width:100,
                decimal:',',
                disabledMaskOnEdition: true
            },
            {
                type: 'color',
                width:100,
                render:'square',
            },
        ];

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
                    ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
                    ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
                ],
                filters: true,
                columns: [
                    {
                        type:'text',
                        title:'Car',
                        width:120
                    },
                    {
                        type: 'dropdown',
                        title:'Make',
                        width:180,
                        source:[
                            "Alfa Romeo",
                            "Audi",
                            "Bmw",
                            "Chevrolet",
                            "Chrysler",
                            "Dodge",
                            "Ferrari",
                            "Fiat",
                            "Ford",
                            "Honda",
                            "Hyundai",
                            "Jaguar",
                            "Jeep",
                            "Kia",
                            "Mazda",
                            "Mercedes-Benz",
                            "Mitsubishi",
                            "Nissan",
                            "Peugeot",
                            "Porsche",
                            "Subaru",
                            "Suzuki",
                            "Toyota",
                            "Volkswagen"
                          ]
                    },
                    {
                        type: 'calendar',
                        title:'Available',
                        width:120,
                        options:{ format:'DD/MM/YYYY' }
                    },
                    {
                        type: 'image',
                        title:'Photo',
                        width:120
                    },
                    {
                        type: 'checkbox',
                        title:'Stock',
                        width:80
                    },
                    {
                        type: 'text',
                        title:'Price',
                        mask:'$ #.##0,00',
                        width:100,
                        decimal:',',
                        disabledMaskOnEdition: true
                    },
                    {
                        type: 'color',
                        width:100,
                        render:'square',
                    },
                 ]
            }]
        });
    }
}
```
 

 

### Action button

Create a edit button in a cell. 


```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let action = function() {
    let methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            let id = instance.getRowId(y);
            // Do some action
            alert(id);
        }

        cell.appendChild(input);
    }

    return methods;
}();

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { id:'1', data:['Google', '5', ''] },
            { id:'2', data:['Bing', '4', ''] },
            { id:'3', data:['Yahoo', '1', ''] },
            { id:'4', data:['Duckduckgo', '5', ''] },
        ],
        columns: [
            { type: 'text', width:'400px' },
            { type: 'rating', width:'100px' },
            { type: action, width:'100px', readOnly: true },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

const Action = function() {
    let methods = {};

    methods.createCell = (cell, value, x, y, instance, options) => {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            alert(instance.getRowId(y));
        }

        cell.appendChild(input);
    }

    return methods;
}();

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        { id:'1', data:['Google', '5', ''] },
        { id:'2', data:['Bing', '4', ''] },
        { id:'3', data:['Yahoo', '1', ''] },
        { id:'4', data:['Duckduckgo', '5', ''] },
    ]
    // Columns
    const columns = [
        { type: 'text', width:'400px' },
        { type: 'rating', width:'100px' },
        { type: Action, width:'100px', readOnly: true },
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet columns={columns} cells={cells} filters />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" filters />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

const Action = function() {
    let methods = {};

    methods.createCell = (cell, value, x, y, instance, options) => {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            alert(instance.getRowId(y));
        }

        cell.appendChild(input);
    }

    return methods;
}();

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            { id:'1', data:['Google', '5', ''] },
            { id:'2', data:['Bing', '4', ''] },
            { id:'3', data:['Yahoo', '1', ''] },
            { id:'4', data:['Duckduckgo', '5', ''] },
        ]
        // Columns
        const columns = [
            { type: 'text', width:'400px' },
            { type: 'rating', width:'100px' },
            { type: Action, width:'100px', readOnly: true },
        ];

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

const Action = function() {
    let methods = {};

    methods.createCell = (cell, value, x, y, instance, options) => {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            alert(instance.getRowId(y));
        }

        cell.appendChild(input);
    }

    return methods;
}();

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
                    { id:'1', data:['Google', '5', ''] },
                    { id:'2', data:['Bing', '4', ''] },
                    { id:'3', data:['Yahoo', '1', ''] },
                    { id:'4', data:['Duckduckgo', '5', ''] },
                ],
                columns: [
                    { type: 'text', width:'400px' },
                    { type: 'rating', width:'100px' },
                    { type: action, width:'100px', readOnly: true },
                ]
            }]
        });
    }
}
```
 
