title: Data Grid Data Persistence
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like features, spreadsheet data, data tables, data persistence, data storage, frontend data saving, client-side storage, data retrieval, AJAX requests, server integration, persistent data storage, data security, client-server communication, data management, data persistence methods, saving and retrieving data
description: Discover how Jspreadsheet enables data persistence in your data grid. Learn how to send data to the backend and explore the various settings and methods available to customize the data persistence functionality according to your application's needs.

# Persistence

Jspreadsheet is a frontend tool with methods, events, and other features to help with backend data persistence. This section covers the following topics: 

  * Posting data to a remote server;
  * Dealing with record IDs synchronization and sequences;
  * Backend persistence in PHP example;
  * Using plugins for data persistence.

 

## Features

### Internal row id

JSS provides a property that enables you to attach a unique ID to your rows, aiding in synchronizing data with an external database. This property helps to identify the record to update with each AJAX call. 

### Sequence

Jspreadsheet implements an internal sequence for each worksheet that automatically increments and assigns a value to a row when no record ID is defined. That enables the user to programmatically set and retrieve IDs for a given row, providing greater flexibility in managing the data in the worksheet.  

## Documentation

### Methods

| Method          | Description                                                                                                                                                                            |
| ----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getNextSequence | Get the next sequence number.<br/>`getNextSequence() : void`                                                                                                                           |
| getRowId        | Get the row ID from a row number given.<br/>`getRowId(rowNumber: Number) : void`                                                                                                       |
| setRowId        | Set the row ID from a row number given.<br/>`setRowId(rowNumber: Number, rowId: Number) : void`                                                                                        |
| getRowById      | Get the data from a row, or the row object by id.<br/>`getRowById(rowNumber: Number, element: Boolean) : any`                                                                          |
| save            | Internal method to post a request to the server. The callback is executed when the backend returns a JSON<br/>`save(url: String, data: Any, token: String, callback: Function) : void` |

 

### Events

Events provide the most effective means of customizing the persistence behavior in the JSS data grid. They can be utilized to intercept, modify, or prevent user actions.

| Event        | Description                                                                                                                                                                                                                                                                                 |
| -------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesave | Executed before a server update request.<br/>`onbeforesave(spreadsheet: Object, worksheet: Object, data: Object) : Object`<br/>It will return false to cancel the event or the replacement for the original data. Data is the information about the event that requires server persistence. |
| onsave       | It will bring information about the server update request.<br/>`onsave(spreadsheet: Object, worksheet: Object, data: Object, result, Object) : void`                                                                                                                                        |

 

### Settings

| Property                                   | Description                                                                    |
| -------------------------------------------|--------------------------------------------------------------------------------|
| **On the spreadsheet configuration level** |
| server: string                             | URL for the server persistence requests. A global URL for all worksheets.      |
| **On the worksheet configuration level**   |
| persistence: string                        | URL for the server persistence requests. One URL for each worksheet.           |
| columns.primaryKey: boolean                | The primaryKey defines which column will be considered the ID for the records. |
| rows\.id: number                            | Define the ID for the row                                                      |

 

## Examples

### Posting data to a remote server

When the `persistence` property is set to true, an AJAX request will occur for each update made to the spreadsheet. 

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
        url: '/jspreadsheet/books.json',
        columns: [
            {
                type: 'autonumber',
                width: '50px',
                title: 'Code',
                name: 'id',
                readOnly: true,
                primaryKey: true
            },
            {
                type: 'image',
                width: '80px',
                title: 'Image',
                name: 'thumbnailUrl',
                render: function(cell, val, col, row) {
                    if (! val) {
                        cell.innerHTML = '<img src="https://images-na.ssl-images-amazon.com/images/I/21%2Bwfxx2lyL._SX319_BO1,204,203,200_.jpg" style="width:60px;" />';
                    }
                }
            },
            {
                type: 'text',
                width: '200px',
                title: 'Title',
                name: 'title'
            },
            {
                type: 'text',
                width: '55px',
                title: 'Pages',
                name: 'pageCount'
            },
            {
                type: 'calendar',
                width: '90px',
                title: 'Published',
                name: 'publishedDate'
            },
            {
                type: 'text',
                width: '200px',
                title: 'Author',
                name: 'authors'
            },
            {
                type: 'dropdown',
                width: '180px',
                title: 'Categories',
                name: 'categories',
                source: ['Internet','Web Development', 'Java', 'Mobile', 'Open Source'],
                multiple: true,
                render: 'tag'
            },
        ],
        allowComments:true,
        search: true,
        persistence: '/jspreadsheet/save',
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

    // Columns
    const columns = [{
        type: 'autonumber',
        width: '50px',
        title: 'Code',
        name: 'id',
        readOnly: true,
        primaryKey: true
    },
        {
            type: 'image',
            width: '80px',
            title: 'Image',
            name: 'thumbnailUrl',
            render: function (cell, val, col, row) {
                if (!val) {
                    cell.innerHTML = '<img src="https://images-na.ssl-images-amazon.com/images/I/21%2Bwfxx2lyL._SX319_BO1,204,203,200_.jpg" style="width:60px;" />';
                }
            }
        },
        {type: 'text', width: '200px', title: 'Title', name: 'title'},
        {type: 'text', width: '55px', title: 'Pages', name: 'pageCount'},
        {type: 'calendar', width: '90px', title: 'Published', name: 'publishedDate'},
        {type: 'text', width: '200px', title: 'Author', name: 'authors'},
        {
            type: 'dropdown', width: '180px', title: 'Categories', name: 'categories',
            source: ['Internet', 'Web Development', 'Java', 'Mobile', 'Open Source'],
            multiple: true, render: 'tag'
        }
    ];

    // Render react component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet
                url="/jspreadsheet/books.json"
                columns={columns}
                search
                persistence="/jspreadsheet/save"/>
        </Spreadsheet>
    );
}

```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :columns="columns"
            url="/jspreadsheet/books.json"
            search
            persistence="/jspreadsheet/save" />
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
            {
                type: 'autonumber',
                width: '50px',
                title: 'Code',
                name: 'id',
                readOnly: true,
                primaryKey: true
            },
            {
                type: 'image',
                width: '80px',
                title: 'Image',
                name: 'thumbnailUrl',
                render: function(cell, val, col, row) {
                    if (! val) {
                        cell.innerHTML = '<img src="https://images-na.ssl-images-amazon.com/images/I/21%2Bwfxx2lyL._SX319_BO1,204,203,200_.jpg" style="width:60px;" />';
                    }
                }
            },
            { type: 'text', width: '200px', title: 'Title', name: 'title' },
            { type: 'text', width: '55px', title: 'Pages', name: 'pageCount' },
            { type: 'calendar', width: '90px', title: 'Published', name: 'publishedDate' },
            { type: 'text', width: '200px', title: 'Author', name: 'authors' },
            { type: 'dropdown', width: '180px', title: 'Categories', name: 'categories',
                source: [ 'Internet','Web Development', 'Java', 'Mobile', 'Open Source' ],
                multiple: true, render: 'tag' }
        ];

        return {
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
            url: '/jspreadsheet/books.json',
            columns: [
                {
                    type: 'autonumber',
                    width: '50px',
                    title: 'Code',
                    name: 'id',
                    readOnly: true,
                    primaryKey: true
                },
                {
                    type: 'image',
                    width: '80px',
                    title: 'Image',
                    name: 'thumbnailUrl',
                    render: function(cell, val, col, row) {
                        if (! val) {
                            cell.innerHTML = '<img src="https://images-na.ssl-images-amazon.com/images/I/21%2Bwfxx2lyL._SX319_BO1,204,203,200_.jpg" style="width:60px;" />';
                        }
                    }
                },
                {
                    type: 'text',
                    width: '200px',
                    title: 'Title',
                    name: 'title'
                },
                {
                    type: 'text',
                    width: '55px',
                    title: 'Pages',
                    name: 'pageCount'
                },
                {
                    type: 'calendar',
                    width: '90px',
                    title: 'Published',
                    name: 'publishedDate'
                },
                {
                    type: 'text',
                    width: '200px',
                    title: 'Author',
                    name: 'authors'
                },
                {
                    type: 'dropdown',
                    width: '180px',
                    title: 'Categories',
                    name: 'categories',
                    source: ['Internet','Web Development', 'Java', 'Mobile', 'Open Source'],
                    multiple: true,
                    render: 'tag'
                },
            ],
            allowComments:true,
            search: true,
            persistence: '/jspreadsheet/save',
        });
    }
}
```
 

 

### Database ID synchronization and sequences

The following example demonstrates several concepts related to record ID synchronization and sequences in Jspreadsheet: 

  * Loading data with hidden IDs for the user;
  * Creating a custom column with an icon to perform actions using the record ID
  * Obtaining the record ID from a remote server when a new row is added.

 

 NOTE: the example shows one new line, but you can interact to get more ids if more than one row is added.  





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
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

        // Readonly
        cell.classList.add('readonly');
    }
 
    return methods;
}();
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { id:1, data:['Google', '5', ''] },
            { id:2, data:['Bing', '4', ''] },
            { id:3, data:['Yahoo', '1', ''] },
            { id:4, data:['Duckduckgo', '5', ''] },
        ],
        columns: [
            { type: 'text', width:'400px' },
            { type: 'rating', width:'100px' },
            { type: action, width:'100px' },
        ],
        persistence: '/jspreadsheet/save',
    }],
    oninsertrow: function(a,b,c,d,e) {
        // Inserted before?
        let rowNumber = e == false ? b + 1 : b;
        // Go in remotely get the id and return to the cell
        jSuites.ajax({
            url: '/jspreadsheet/id',
            method: 'GET',
            dataType: 'json',
            success: function(result) {
                // The new id is
                alert('The new row has id: ' + result);
                // set row id
                a.setRowId(rowNumber, result);
            }
        })
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jSuites from "jsuites";

const license = '###license###';

const action = function() {
    const methods = {};

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

        // Readonly
        cell.classList.add('readonly');
    }

    return methods;
}();

export default function App() {
    // Data
    const data = [
        { id:1, data:['Google', '5', ''] },
        { id:2, data:['Bing', '4', ''] },
        { id:3, data:['Yahoo', '1', ''] },
        { id:4, data:['Duckduckgo', '5', ''] },
    ];
    // Event for insert row
    const oninsertrow = (a,b,c,d,e) => {
        // Inserted before?
        let rowNumber = e == false ? b + 1 : b;
        // Go in remotely get the id and return to the cell
        jSuites.ajax({
            url: '/jspreadsheet/id',
            method: 'GET',
            dataType: 'json',
            success: function(result) {
                // The new id is
                alert('The new row has id: ' + result);
                // set row id
                a.setRowId(rowNumber, result);
            }
        })
    }
    // Columns
    const columns = [
        { type: 'text', width:'400px' },
        { type: 'rating', width:'100px' },
        { type: action, width:'100px' },
    ];

    // Render react component
    return (
        <Spreadsheet ref={spreadsheet} license={license} oninsertrow={oninsertrow}>
            <Worksheet data={data} persistence="/jspreadsheet/save" columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :oninsertrow="oninsertrow">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jSuites from "jsuites";

const license = '###license###';

const action = function() {
    const methods = {};

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

        // Readonly
        cell.classList.add('readonly');
    }

    return methods;
}();

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods {
        // Event for insert row
        oninsertrow(a,b,c,d,e) {
            // Inserted before?
            let rowNumber = e == false ? b + 1 : b;
            // Go in remotely get the id and return to the cell
            jSuites.ajax({
                url: '/jspreadsheet/id',
                method: 'GET',
                dataType: 'json',
                success: function(result) {
                    // The new id is
                    alert('The new row has id: ' + result);
                    // set row id
                    a.setRowId(rowNumber, result);
                }
            })
        }
    },
    data() {
        // Data
        const data = [
            { id:1, data:['Google', '5', ''] },
            { id:2, data:['Bing', '4', ''] },
            { id:3, data:['Yahoo', '1', ''] },
            { id:4, data:['Duckduckgo', '5', ''] },
        ];
        // Columns
        const columns = [
            { type: 'text', width:'400px' },
            { type: 'rating', width:'100px' },
            { type: action, width:'100px' },
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

const action = function() {
    let methods = {};

    methods.createCell = (cell, value, x, y, instance, options) => {
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

        // Readonly
        cell.classList.add('readonly');
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
                    { id:1, data:['Google', '5', ''] },
                    { id:2, data:['Bing', '4', ''] },
                    { id:3, data:['Yahoo', '1', ''] },
                    { id:4, data:['Duckduckgo', '5', ''] },
                ],
                columns: [
                    { type: 'text', width:'400px' },
                    { type: 'rating', width:'100px' },
                    { type: action, width:'100px' },
                ],
                persistence: '/jspreadsheet/save',
            }],
            oninsertrow: (a,b,c,d,e) => {
                // Inserted before?
                let rowNumber = e == false ? b + 1 : b;
                // Go in remotely get the id and return to the cell
                jSuites.ajax({
                    url: '/jspreadsheet/id',
                    method: 'GET',
                    dataType: 'json',
                    success: function(result) {
                        // The new id is
                        alert('The new row has id: ' + result);
                        // set row id
                        a.setRowId(rowNumber, result);
                    }
                })
            }
        });
    }
}
```
 

 
