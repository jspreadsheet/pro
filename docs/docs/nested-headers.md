title: Data Grid Nested Headers
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, spreadsheet js, spreadsheet, data grid, data tables, nested headers, hierarchical column headers, nested header functionality, creating nested headers in Jspreadsheet, customizing column headers, organizing data grid headers, nested header configuration, data grid header hierarchy
description: Enhance your Jspreadsheet data grid with hierarchical column headers. Learn to create nested headers for organized and visually appealing data presentations. Explore settings, methods, and events for customized nested headers.

# Data Grid Nested Headers

This section will discuss how to create spreadsheets with `nested headers` and how to modify them programmatically. 

## Documentation

### Methods

You can use the following methods to update the nested headers programmatically:

| Method                              | Description                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getNestedCell(number,number)        | Get a nested header cell (DOM element).<br/>`getNestedCell(x: Number, y: Number) : DOMElement`                                                                                                                                                                                                                                        |
| setNestedCell(number,number,object) | Define the nested header cell attributes <br/>@param {Number} x - coordinate x <br/>@param {Number} y - coordinate y <br/>@param {Object} properties - Possible attributes: { title: String, align: String, colspan: Number, tooltip: String, frozen: Boolean }<br/> `setNestedCell(x: Number, y: Number, properties: Object) : void` |
| setNestedCell(object[])             | Define the nested header cell attributes <br/>@param {Object[]} updates - array of objects { x,y,properties } <br/>`setNestedCell(updates: Number\|Object[]) : void`                                                                                                                                                                  |
| getNestedHeaders                    | Return the nested header definitions.<br/>`getNestedHeaders() : []`                                                                                                                                                                                                                                                                   |
| setNestedHeaders(array)             | Set the nested header definitions.<br/>`setNestedHeaders(config: []) : void`                                                                                                                                                                                                                                                          |
| resetNestedHeaders()                | Reset the nested header definitions.<br/>`resetNestedHeaders() : void`                                                                                                                                                                                                                                                                |

 

### Initial Settings

Learn how to generate a new spreadsheet containing nested headers.

| Property                      | Description                                                                                                                    |
| ------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| nestedHeaders: array of items | Worksheet nested header definitions. Possible attributes: { title: String, colspan: Number, tooltip: String, frozen: Boolean } |

 

### Available Events

| Event              | Description                                                                                                                                                                         |
| -------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangenested     | When changing the nested headers definitions<br/>`onchangenested(worksheet: Object, config: Object) : void`                                                                         |
| onchangeheadercell | Update the properties of a nested header cell.<br/>`onchangeheadercell(worksheet: Object, positionXOrArrayOfUpdates: Number\|Object[], positionY?: Number, config?: Object) : void` |

 

## Examples

### Nested header example

The following example demonstrates a basic configuration for nested headers in the JSS spreadsheet. See a working example of a JSS [spreadsheet](https://jsfiddle.net/spreadsheet/0nwh5u71/) with nested headers that updates programmatically on JSFiddle.  

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Update' id="btn1"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['BR', 'Cheese', 1],
            ['CA', 'Apples', 0],
            ['US', 'Carrots', 1],
            ['GB', 'Oranges', 0],
        ],
        columns: [
            {
                type: 'autocomplete',
                title: 'Country',
                width: '200px'
            },
            {
                type: 'dropdown',
                title: 'Food',
                width: '100px',
                source: ['Apples','Bananas','Carrots','Oranges','Cheese']
            },
            {
                type: 'checkbox',
                title: 'Stock',
                width: '100px'
            },
            {
                type: 'number',
                title: 'Price',
                width: '100px'
            },
        ],
        minDimensions: [6,4],
        nestedHeaders:[
            [
                {
                    title: 'Supermarket information',
                    colspan: '6',
                },
            ],
            [
                {
                    title: 'Location',
                    colspan: '1',
                },
                {
                    title: ' Other Information',
                    colspan: '2'
                },
                {
                    title: ' Costs',
                    colspan: '3'
                }
            ],
        ]
    }]
});

document.getElementById("btn1").onclick = () => table[0].setNestedCell(0, 0, { title:'New title',tooltip:'New tooltip' })
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
    // Data
    const data = [
        ['BR', 'Cheese', 1],
        ['CA', 'Apples', 0],
        ['US', 'Carrots', 1],
        ['GB', 'Oranges', 0],
    ];
    // Columns
    const columns = [
        {
            type: 'autocomplete',
            title: 'Country',
            width: '200px'
        },
        {
            type: 'dropdown',
            title: 'Food',
            width: '100px',
            source: ['Apples', 'Bananas', 'Carrots', 'Oranges', 'Cheese']
        },
        {
            type: 'checkbox',
            title: 'Stock',
            width: '100px'
        },
        {
            type: 'number',
            title: 'Price',
            width: '100px'
        },
    ];
    // Nested headers
    const nestedHeaders = [
        [
            {
                title: 'Supermarket information',
                colspan: '8',
            },
        ],
        [
            {
                title: 'Location',
                colspan: '1',
            },
            {
                title: ' Other Information',
                colspan: '2'
            },
            {
                title: ' Costs',
                colspan: '5'
            }
        ],
    ];
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} nestedHeaders={nestedHeaders} minDimensions={[8, 4]}/>
            </Spreadsheet>
            <input type='button' value='Update'
                   onClick={() => spreadsheet.current[0].setNestedCell(0, 0, {title: 'New', tooltip: 'Tooltip'})}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :nestedHeaders="nestedHeaders" :minDimensions="[8,4]" />
    </Spreadsheet>
    <input type='button' value='Update' @click="update" />
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
            ['BR', 'Cheese', 1],
            ['CA', 'Apples', 0],
            ['US', 'Carrots', 1],
            ['GB', 'Oranges', 0],
        ];
        // Columns
        const columns = [
            {
                type: 'autocomplete',
                title: 'Country',
                width: '200px'
            },
            {
                type: 'dropdown',
                title: 'Food',
                width: '100px',
                source: ['Apples','Bananas','Carrots','Oranges','Cheese']
            },
            {
                type: 'checkbox',
                title: 'Stock',
                width: '100px'
            },
            {
                type: 'number',
                title: 'Price',
                width: '100px'
            },
        ];
        // Nested headers
        const nestedHeaders = [
            [
                {
                    title: 'Supermarket information',
                    colspan: '8',
                },
            ],
            [
                {
                    title: 'Location',
                    colspan: '1',
                },
                {
                    title: ' Other Information',
                    colspan: '2'
                },
                {
                    title: ' Costs',
                    colspan: '5'
                }
            ],
        ];

        return {
            data,
            columns,
            nestedHeaders,
            license,
        };
    },
    methods: {
        update() {
            this.$refs.spreadsheet.current[0].setNestedCell(0, 0, { title:'New', tooltip:'Tooltip' })
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import jSuites from "jSuites";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type='button' value='Update' (click)="this.worksheets[0].setNestedCell(0, 0, { title:'New title',tooltip:'New tooltip' })">
    `,
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
                    ['BR', 'Cheese', 1],
                    ['CA', 'Apples', 0],
                    ['US', 'Carrots', 1],
                    ['GB', 'Oranges', 0],
                ],
                columns: [
                    {
                        type: 'autocomplete',
                        title: 'Country',
                    },
                    {
                        type: 'dropdown',
                        title: 'Food',
                        source: ['Apples','Bananas','Carrots','Oranges','Cheese']
                    },
                    {
                        type: 'checkbox',
                        title: 'Stock',
                    },
                    {
                        type: 'number',
                        title: 'Price',
                    },
                ],
                minDimensions: [8,4],
                nestedHeaders:[
                    [
                        {
                            title: 'Supermarket information',
                            colspan: 8,
                        },
                    ],
                    [
                        {
                            title: 'Location',
                            colspan: 1,
                        },
                        {
                            title: ' Other Information',
                            colspan: 2
                        },
                        {
                            title: ' Costs',
                            colspan: 5
                        }
                    ],
                ]
            }]
        });
    }
}
```
 
### Frozen nested headers

The following example starts the spreadsheet with a basic nested headers configuration. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the data grid
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [22,10],
        freezeColumns: 2,
        tableOverflow: true,
        tableWidth: 600,
        nestedHeaders:[
            [
                {
                    title: 'Location',
                    colspan: 2,
                    frozen: true,
                },
                {
                    title: ' Information',
                    colspan: '10'
                },
                {
                    title: ' Another information',
                    colspan: '10'
                }
            ],
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

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Nested headers
    const nestedHeaders = [
        [
            {
                title: 'Location',
                colspan: 2,
                frozen: true,
            },
            {
                title: ' Information',
                colspan: '10'
            },
            {
                title: ' Another information',
                colspan: '10'
            }
        ],
    ];
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} toolbar tabs>
            <Worksheet nestedHeaders={nestedHeaders} minDimensions={[22,10]} freezeColumns="2" tableOverflow tableWidth="600" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" toolbar tabs>
        <Worksheet :nestedHeaders="nestedHeaders" :minDimensions="[22,10]"
            freezeColumns="2" tableOverflow tableWidth="600" />
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
        // Nested headers
        const nestedHeaders = [
            [
                {
                    title: 'Location',
                    colspan: 2,
                    frozen: true,
                },
                {
                    title: ' Information',
                    colspan: '10'
                },
                {
                    title: ' Another information',
                    colspan: '10'
                }
            ],
        ];

        return {
            nestedHeaders,
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
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type='button' value='Update' (click)="this.worksheets[0].setNestedCell(0, 0, { title:'New title',tooltip:'New tooltip' })">
    `,
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
                    ['BR', 'Cheese', 1],
                    ['CA', 'Apples', 0],
                    ['US', 'Carrots', 1],
                    ['GB', 'Oranges', 0],
                ],
                columns: [
                    {
                        type: 'autocomplete',
                        title: 'Country',
                    },
                    {
                        type: 'dropdown',
                        title: 'Food',
                        source: ['Apples','Bananas','Carrots','Oranges','Cheese']
                    },
                    {
                        type: 'checkbox',
                        title: 'Stock',
                    },
                    {
                        type: 'number',
                        title: 'Price',
                    },
                ],
                minDimensions: [20,20],
                nestedHeaders:[
                    [
                        {
                            title: 'Supermarket information',
                            colspan: 8,
                        },
                    ],
                    [
                        {
                            title: 'Location',
                            colspan: 1,
                        },
                        {
                            title: ' Other Information',
                            colspan: 2
                        },
                        {
                            title: ' Costs',
                            colspan: 5
                        }
                    ],
                ]
            }]
        });
    }
}

```
 
