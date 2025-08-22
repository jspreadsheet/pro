title: Custom Data Grid Inputs in Jspreadsheet
keywords: Jspreadsheet, data grid, javascript, excel-like controls, spreadsheet controls, editors, data input, input components, cell editors, input integration, editor methods, editor settings, editor events, interactive data grid, custom data entry
description: Discover the flexibility and power of editors in Jspreadsheet for transforming simple spreadsheets into amazing web-based applications. Learn about native editors and how to build your custom editors.

# Spreadsheet Cell Editors

## Overview

Jspreadsheet editors are components that assist users in inputting cells during the edition. Jspreadsheet Pro offers native components, from elementary text fields to sophisticated interactive widgets. It also provides an API so developers can create their custom components, enabling them to embed diverse JavaScript input mechanisms for enriched data interaction experiences.

### Native Editor Components

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

{.secondary}
> **Editors templates**
> 
> Editors source code are available for reference. You can use those to create your own custom editors.
> 
> [https://github.com/jspreadsheet/editors](https://github.com/jspreadsheet/editors){target="_blank"}

## Documentation

### Methods

Methods related with the editors and the data grid cell edition.

| Method       | Description                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| getEditor    | Get the editor instance and options for a column (x) or cell (x,y).<br>                   |
| openEditor   | Start edition for cell. <br/>openEditor(cell: HTMLElement, empty: boolean, e: MouseEvent) |
| closeEditor  | Close the editor.<br>closeEditor(cell: HTMLElement, save: boolean)                        |

### Events

Events related with the editors and the data grid edition.

| Event          | Description                                                                                                                |
|----------------|----------------------------------------------------------------------------------------------------------------------------|
| oneditionstart | `oneditionstart(worksheet: Object, cell: HTMLELement, x: number, y: number) => void \| boolean`                            |
| oneditionend   | `oneditionend(worksheet: Object, cell: HTMLELement, x: number, y: number, v: any, save: boolean) => void`                  |
| oncreateeditor | `oncreateeditor(worksheet: Object, cell: HTMLElement, x: number, y: number, input: HTMLElement, options: object) => void`  |
| onkeydown      | Return `false` to cancel the event.<br>`onkeydown(worksheet: Object, e: Event) => boolean \| void`                         |
| oninput        | `oninput(worksheet: Object, e: Event, test: String) => void`                                                               |

### Properties

While editing, the `worksheet.edition` property provides the DOMElement of the cell currently being edited.

{.ignore}
```javascript
let x = worksheet.edition.getAttribute('data-x');
let y = worksheet.edition.getAttribute('data-y');
// Retrieve the options for this cell or column
let options = worksheet.edition.getOptions(x, y);
```
<br>

### Declaring the editors

The `type` property can be used to declare the editor at the column or cell levels. When you have both columns and cells, the editor declared in the cell level will overwrite the first. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
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

### Custom Editor Example

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

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
    worksheets: [{
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
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

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

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['PHP', '1'],
        ['Javascript', '0.4'],
    ]
    // Columns
    const columns = [
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
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

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

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['PHP', '1'],
            ['Javascript', '0.4'],
        ]
        // Columns
        const columns = [
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const Editor = {
    updateCell: function(cell:any, value:any, x:any, y:any, instance:any) {
        value = Number(value) || 0;
        if (cell) {
            cell.innerText = value + '%';
        }
        return value / 100;
    },
    createCell: function(cell:any, value:any, x:any, y:any, instance:any) {
        value = Number(value) || 0;
        if (cell) {
            cell.innerText = value + '%';
        }
        return value / 100;
    },
    openEditor: function(cell:any, value:any, x:any, y:any, instance:any) {
        instance.parent.input.onblur = function() {
            instance.closeEditor(cell, true);
        };
        if (value) {
            instance.parent.input.innerText = (Number(value)) * 100;
        }
    },
    closeEditor: function(cell:any, save:any, x:any, y:any, instance:any) {
        let value;
        if (save) {
            value = Number(instance.parent.input.innerText);
        } else {
            value = '';
        }

        return value;
    },
    get: function(options:any, val:any) {
        return (val * 100) + '%';
    }
}

const data = [
    ['PHP', '1'],
    ['Javascript', '0.4'],
];

@Component({
    standalone: true,
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
                data: data,
                columns: [
                    {
                        type: 'text',
                        title: 'Course Title',
                    },
                    {
                        type: Editor,
                        title: 'Percent',
                    },
                ]
            }]
        });
    }
}
```

## Examples

### Native editors

Basic example using multiple different editors. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
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
            ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
            ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
        ],
        filters: true,
        columns: [
            {
                type:'text',
                title:'Car'
            },
            {
                type: 'dropdown',
                title:'Make',
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
                options:{ format:'DD/MM/YYYY' }
            },
            {
                type: 'image',
                title:'Photo',
            },
            {
                type: 'checkbox',
                title:'Stock',
                width: 80,
            },
            {
                type: 'text',
                title:'Price',
                mask:'$ #.##0,00',
                width: 80,
                decimal:',',
                disabledMaskOnEdition: true
            },
            {
                type: 'color',
                width: 80,
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
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
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
            <Worksheet columns={columns} data={data} filters />
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const Action: any = {
    createCell: (cell: any, value: any, x: any, y: any, instance: any, options: any) => {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            alert(instance.getRowId(y));
        };

        cell.appendChild(input);
    }
};


@Component({
    standalone: true,
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
                    { type: 'text'},
                    { type: 'rating' },
                    { type: Action, readOnly: true },
                ]
            }]
        });
    }
}
```
 
