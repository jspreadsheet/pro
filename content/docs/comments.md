title: Cell Comments
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, data table, cell comments, cell comments methods, cell comments events, cell comments settings
description: Learn how to add and manage comments in JSS data grid cells and customize them using methods and events.

# Data Grid Cell Comments

## Overview

Jspreadsheet allows users to add comments to cells like Excel or Google Sheets. Comments can be added programmatically or through the context menu, enabling annotations and extra information for cell contents. 

## Documentation

### Methods

The following methods can be used to get or set comments in one or multiple data grid cells.

| Method      | Description                                                                                                                                                                                                                                                                                              |
| ------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getComments | Get comments from a cell or from the whole table. <br/>@Param mixed - cell identification or null for the whole table. <br/>`worksheetInstance.getComments(cellName: String \| null)`                                                                                                                   |
| setComments | Add or change the comments for one or multiple cells. <br/>@param {string\|object} cellName - Identification of a cell or an object with multiple definitions <br/>@param {string?} comments - Comments for the cell <br/>`worksheetInstance.setComments(cellName: String \| object, comments?: String)` |
 

### Events

The `onbeforecomments` can be used to intercept, change or cancel the user action when adding a new comment.

| Event                                                                                      | Description                                                                                                                     |
| -------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| onbeforecomments                                                                           | `onbeforecomments(worksheet: Object, newValue: Object) => object \| boolean \| void` <br/>Accepted returns for this event: <br/>* object<br>An object with the cell names and the comments for each cell. Example: { A1: 'test' }<br/>* boolean<br>Return false to cancel the user action<br/>* void<br>To accept the user changes<br/>                                                            |
| oncomments                                                                                 | `oncomments(worksheet: Object, newValue: Object, oldValue: Object) => void`                                                     |

 

### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property               | Description                                                                     |
| -----------------------|---------------------------------------------------------------------------------|
| allowComments: boolean | Enable or disable the user to enter new comments on cells.                      |
| comments: object       | Object with the initial comments. Example: `{ A1: 'test', B1: 'another test' }` |

 

## Examples

### A Basic Data Grid with Comments

This example demonstrates how to initialize a Jspreadsheet data grid with a few predefined comments on specific cells. It also illustrates how to interact with these comments programmatically using the setComments and getComments methods.


```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/><br/>

<input type="button" id="bt1" value="Set A1 comments" />
<input type="button" id="bt2" value="Get A1 comments" />
<input type="button" id="bt3" value="Reset A1 comments" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['US', 'Cheese', '2019-02-12'],
                ['CA', 'Apples', '2019-03-01'],
                ['CA', 'Carrots', '2018-11-10'],
                ['BR', 'Oranges', '2019-01-12'],
            ],
            columns: [
                { width: '300px' },
                { width: '200px' },
                { width: '200px' },
            ],
            allowComments: true,
            comments: {
                B1: 'Initial comments on B1',
                C1: 'Initial comments on C1'
            },
        }
    ],
    oncomments: function() {
        console.log(arguments);
    }
});

document.getElementById('bt1').onclick = function() {
    worksheets[0].setComments('A1', 'Test');
}
document.getElementById('bt2').onclick = function() {
    alert(worksheets[0].getComments('A1'));
}
document.getElementById('bt3').onclick = function() {
    worksheets[0].setComments('A1', '');
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
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Data
    const data = [
        ['US', 'Cheese', '2019-02-12'],
        ['CA', 'Apples', '2019-03-01'],
        ['CA', 'Carrots', '2018-11-10'],
        ['BR', 'Oranges', '2019-01-12'],
    ];
    // Column definitions
    const columns = [
        {width: '300px'},
        {width: '200px'},
        {width: '200px'},
    ];
    // Inicial data grid cell comments
    const comments = {
        B1: 'Initial comments on B1',
        C1: 'Initial comments on C1'
    };
    // Event on comments
    const oncomments = () => {
        console.log(arguments);
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} oncomments={oncomments}>
                <Worksheet data={data} columns={columns} comments={comments} allowComments/>
            </Spreadsheet>
            <input type="button" value="Set A1 comments"
                   onClick={() => spreadsheet.current[0].setComments('A1', 'Test')}/>
            <input type="button" value="Get A1 comments"
                   onClick={() => alert(spreadsheet.current[0].getComments('A1'))}/>
            <input type="button" value="Reset A1 comments"
                   onClick={() => spreadsheet.current[0].setComments('A1', '')}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :oncomments="oncomments">
        <Worksheet :data="data" :columns="columns" :comments="comments" />
    </Spreadsheet>
    <input type="button" value="Set A1 comments" @click="setComments('A1', 'Test')" />
    <input type="button" value="Get A1 comments" @click="getComments('A1')" />
    <input type="button" value="Reset A1 comments" @click="setComments('A1','')"  />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        getComments(cell) {
            alert(this.$refs.spreadsheet.current[0].getComments(cell));
        },
        setComments(cell, title) {
            this.$refs.spreadsheet.current[0].setComments(cell, title);
        },
        oncomments(worksheet) {
            console.log(worksheet);
        },
    },
    data() {
        return {
            // Worksheet data
            data: [
                ["US", "Cheese", "2019-02-12"],
                ["CA", "Apples", "2019-03-01"],
                ["CA", "Carrots", "2018-11-10"],
                ["BR", "Oranges", "2019-01-12"],
            ],
            // Columns
            columns: [
                { width: "300px" },
                { width: "200px" },
                { width: "200px" }
            ],
            // Comments
            comments: {
                B1: "Initial comments on B1",
                C1: "Initial comments on C1",
            },
            // License
            license: license,
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
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" id="bt1" value="Set A1 comments" 
            (click)="this.worksheets[0].setComments('A1', 'Test');" />
        <input type="button" id="bt2" value="Get A1 comments" 
            (click)="alertComments()" />
        <input type="button" id="bt3" value="Reset A1 comments" 
            (click)="this.worksheets[0].setComments('A1', '');" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['US', 'Cheese', '2019-02-12'],
                        ['CA', 'Apples', '2019-03-01'],
                        ['CA', 'Carrots', '2018-11-10'],
                        ['BR', 'Oranges', '2019-01-12'],
                    ],
                    columns: [
                        { width: 300 },
                        { width: 200 },
                        { width: 200 },
                    ],
                    allowComments: true,
                    comments: {
                        B1: 'Initial comments on B1',
                        C1: 'Initial comments on C1'
                    },
                }
            ],
            oncomments: function() {
                console.log(arguments);
            }
        });
    }

    alertComments() {
        alert(this.worksheets[0].getComments('A1'));
    }
}
```
 
### Batch Update for Multiple Cells

The setComment method allows adding comments to various cells simultaneously by passing an object as a parameter. That helps to prevent multiple undesirable entries in the spreadsheet history. 

{.ignore}
```javascript
// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10]
        allowComments: true,
    }],
});

worksheets[0].setComments({ A1: 'Comment on A1', B1: 'Comments on B1' });
```
 

## Enterprise Extensions

### Multiple Comments

JSS Enterprise offers an extension that allows multiple comments within a single `data grid cell`. 

[Learn more about the Advance Comments Extension](/products/comments){.button}
