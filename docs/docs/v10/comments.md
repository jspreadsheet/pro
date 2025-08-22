title: Cell Comments: Adding, Editing, and Deleting Comments in Cells
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, data table, cell comments, cell comments methods, cell comments events, cell comments settings
description: Learn how to add and manage comments in JSS data grid cells and customize them using methods and events.

# Data grid comments

JSS data grid offers the ability to add comments to cells using the context menu, similar to Excel or Google Sheets. Additionally, it provides various methods and events for further customization. 

## Documentation

### Methods

The following methods can be used to get or set comments in one or multiple data grid cells.

| Method      | Description                                                                                                                                                                                                                                                                                              |
| ------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getComments |  Get comments from a cell or from the whole table. <br/>@Param mixed - cell identification or null for the whole table. <br/>`worksheetInstance.getComments(cellName: String \| null)`                                                                                                                   |
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

### Basic data grid with comments

How to create a data grid or spreadsheet with a few initial comments. 

 **Interact with the cell comments programmatically**  To apply comments via JavaScript, you can use the methods setComments or getComments, as follow:




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
document.getElementById('commentBtn1').onclick = function() { worksheets[0].setComments('A1', 'Test'); };
document.getElementById('commentBtn2').onclick = function() { alert(worksheets[0].getComments('A1')); };
document.getElementById('commentBtn3').onclick = function() { worksheets[0].setComments('A1', ''); };
</script>

<button type="button" id="commentBtn1">Set A1 comments</button>
<button type="button" id="commentBtn2">Get A1 comments</button>
<button type="button" id="commentBtn3">Reset A1 comments</button>
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
        ['US', 'Cheese', '2019-02-12'],
        ['CA', 'Apples', '2019-03-01'],
        ['CA', 'Carrots', '2018-11-10'],
        ['BR', 'Oranges', '2019-01-12'],
    ]
    const columns = [
        {width: '300px'},
        {width: '200px'},
        {width: '200px'},
    ]
    const comments = {
        B1: 'Initial comments on B1',
        C1: 'Initial comments on C1'
    }
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
    <Spreadsheet ref="spreadsheet" :license="license" :oncomments="oncomments">
        <Worksheet :data="data" :columns="columns" :comments="comments" />
    </Spreadsheet>
    <input type="button" value="Set A1 comments" @click="setComments('A1', 'Test')" />
    <input type="button" value="Get A1 comments" @click="getComments('A1')" />
    <input type="button" value="Reset A1 comments" @click="setComments('A1','')"  />
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
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <button type="button" (click)="this.worksheets[0].setComments('A1', 'Test');">Set A1 comments</button>
        <button type="button" (click)="alert(this.worksheets[0].getComments('A1'));">Get A1 comments</button>
        <button type="button" (click)="this.worksheets[0].setComments('A1', '');">Reset A1 comments</button>
    `
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
    }
}
```
 

 

### Update the comments of multiple cells

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

### Multiple comments in the same grid cell

JSS Enterprise offers an extension that enables multiple comments within a single `grid cell`. 

 [More information about the Advance Comments extension](/products/comments)
