title: Jspreadsheet Search: Settings, Methods & Events
keywords: Jspreadsheet, Jexcel, data grid, javascript data grid, excel-like search, spreadsheet search, worksheet search, grid search, search, customize search, spreadsheet search events, data grid search events
description: Learn to set up and customize Jspreadsheet's search using onbeforesearch events. Understand how to intercept or cancel searches for enhanced control

# Search

The search function in Jspreadsheet makes it easy to filter rows based on a specified keyword. If needed, you can modify or cancel the search behavior by utilizing one of the available events described below. 

## Documentation

### Methods

The following methods are related to the spreadsheet search.

| Method       | Description                                                                                        |
| -------------|----------------------------------------------------------------------------------------------------|
| search       | `search(terms: String) : void`<br/>Search for the data grid rows that contain the specified terms. |
| resetSearch  | `resetSearch() : void`<br/>Reset the search terms and show all rows again.                         |
| showSearch   | `showSearch() : void`<br/>Show the search input box.                                               |
| hideSearch   | `hideSearch() : void`<br/>Hide the search input box.                                               |
| updateSearch | `updateSearch() : void`<br/>Refresh the results on the viewport.                                   |

 

### Events

JSS allows developers to customize the data grid search functionality through a set of events that can be utilized to modify or cancel the search behavior. These events enable more advanced control over the search feature, allowing for more complex and specific filtering based on various criteria.

| Event          | Description                                                                                                                                                                                                |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearchstart  | `onsearchstart(worksheet: Object, terms: String)`<br/>It happens before all the search events.                                                                                                             |
| onsearchrow    | `onsearchrow(worksheet: Object, rowNumber: number, terms: String)`<br/>It helps to customize the searching process.                                                                                        |
| onsearch       | `onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |

 

### Initial Settings

The following properties can be used during the initialization of the online spreadsheet.

| Property        | Description               |
| ----------------|---------------------------|
| search: boolean | Enable or disable search. |

 

## Examples

### Simple data grid with search and pagination

Basic example with search and pagination. 

   





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type='button' value='Search for APP' id="searchbtn"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100],
        columns: [
            { type:'text', width:80 },
            { type:'text', width:200 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
        ],
    }]
});

document.getElementById("searchbtn").onclick = () => worksheets[0].search('app');
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
        {type: 'text', width: 80},
        {type: 'text', width: 200},
        {type: 'text', width: 100},
        {type: 'text', width: 200},
        {type: 'text', width: 100},
    ]

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet
                    columns={columns}
                    csv="/tests/demo.csv"
                    csvHeaders
                    search
                    pagination="10"
                    paginationOptions={[10, 25, 50, 100]}/>
            </Spreadsheet>
            <input type={'button'} value={'Search for APP'} onClick={() => spreadsheet.current[0].search('app')}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet
            :columns="columns"
            :csv="/tests/demo.csv"
            csvHeaders
            search
            :pagination="10"
            :paginationOptions="[10,25,50,100]"
        />
    </Spreadsheet>
    <input type='button' value='Search for APP' @click="search" />
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
        search(cell) {
            this.$refs.spreadsheet.current[0].search('app');
        },
    }
    data() {
        const columns = [
            { type:'text', width:80 },
            { type:'text', width:200 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
        ],

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

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type='button' value='Search for APP' (click)="this.worksheets[0].search('app')" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            csv: '/tests/demo.csv',
            csvHeaders: true,
            search: true,
            pagination: 10,
            paginationOptions: [10,25,50,100],
            columns: [
                { type:'text', width:80 },
                { type:'text', width:200 },
                { type:'text', width:100 },
                { type:'text', width:200 },
                { type:'text', width:100 },
            ],
        });
    }
}
```

### Custom local data grid search

How to create a custom method to search for your rows. 

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
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100],
        defaultColWidth: 150,
    }],
    oncreatecell: function(worksheet, td, col, row) {
        // JSS is creating a cell that should be highlighted
        if (worksheet.highlight && worksheet.highlight[row] && worksheet.highlight[row][col]) {
            td.classList.add('jss_highlight');
        }
    },
    onsearchstart: function(worksheet) {
        // Reset any potential previous highlighted cells
        if (worksheet.highlight) {
            for (let j = 0; j < worksheet.highlight.length; j++) {
                if (worksheet.highlight[j]) {
                    for (let i = 0; i < worksheet.highlight[j].length; i++) {
                        if (worksheet.records[j][i] && worksheet.records[j][i].element) {
                            worksheet.records[j][i].element.classList.remove('jss_highlight');
                        }
                    }
                }
            }
        }
        // Reset the highlighted and restart the search
        worksheet.highlight = [];
    },
    onsearchrow: function(worksheet, row, terms) {
        // Search for the term
        terms = new RegExp(terms, 'gi');
        // Value
        let value = null;
        // Result
        let test = false;
        // Get the values from the rows
        for (let col = 0; col < worksheet.options.columns.length; col++) {
            // Get the information from cell
            value = '' + worksheet.getValueFromCoords(col,row,true);
            // If find the term
            if (value.match(terms)) {
                // Highlight cell
                if (worksheet.records[row][col].element) {
                    worksheet.records[row][col].element.classList.add('jss_highlight');
                }
                // Highlighted cells container
                if (! worksheet.highlight[row]) {
                    worksheet.highlight[row] = [];
                }
                worksheet.highlight[row][col] = true;
                // Add to the result
                test = true;
            }
        }
        // Search
        return test;
    }
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

    const oncreatecell = (worksheet, td, col, row) => {
        // JSS is creating a cell that should be highlighted
        if (worksheet.highlight && worksheet.highlight[row] && worksheet.highlight[row][col]) {
            td.classList.add('jss_highlight');
        }
    }

    const onsearchstart = (worksheet) => {
        // Reset any potential previous highlighted cells
        if (worksheet.highlight) {
            for (let j = 0; j < worksheet.highlight.length; j++) {
                if (worksheet.highlight[j]) {
                    for (let i = 0; i < worksheet.highlight[j].length; i++) {
                        if (worksheet.records[j][i] && worksheet.records[j][i].element) {
                            worksheet.records[j][i].element.classList.remove('jss_highlight');
                        }
                    }
                }
            }
        }
        // Reset the highlighted and restart the search
        worksheet.highlight = [];
    }

    const onsearchrow = (worksheet,row,terms) => {
        // Search for the term
        let terms = new RegExp(terms, 'gi');
        // Value
        let value = null;
        // Result
        let test = false;
        // Get the values from the rows
        for (let col = 0; col < worksheet.options.columns.length; col++) {
            // Get the information from cell
            value = '' + worksheet.getValueFromCoords(col,row,true);
            // If find the term
            if (value.match(terms)) {
                // Highlight cell
                if (worksheet.records[row][col].element) {
                    worksheet.records[row][col].element.classList.add('jss_highlight');
                }
                // Highlighted cells container
                if (! worksheet.highlight[row]) {
                    worksheet.highlight[row] = [];
                }
                worksheet.highlight[row][col] = true;
                // Add to the result
                test = true;
            }
        }
        // Search
        return test;
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} oncreatecell={oncreatecell}
            onsearchstart={onSearchStart} onsearchrow={onsearchrow}>
                    <Worksheet
                    csv="/tests/demo.csv"
                    csvHeaders
                    search
                    pagination="10"
                    paginationOptions={[10,25,50,100]}
                    defaultColWidth="150" />
            </Spreadsheet>
            <input type='button' value='Search for APP' onClick={() => spreadsheet.current[0].search('app')} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :oncreatecell="oncreatecell"
        :onsearchstart="onsearchstart" :onsearchrow="onsearchrow">
            <Worksheet defaultColWidth="150" :csv="/tests/demo.csv"
                csvHeaders
                search
                :pagination="10"
                :paginationOptions="[10,25,50,100]" />
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
    methods: {
        search(cell) {
            this.$refs.spreadsheet.current[0].search('app');
        },
        oncreatecell(worksheet, td, col, row) {
            // JSS is creating a cell that should be highlighted
            if (worksheet.highlight && worksheet.highlight[row] && worksheet.highlight[row][col]) {
                td.classList.add('jss_highlight');
            }
        },
        onsearchstart(worksheet) {
            // Reset any potential previous highlighted cells
            if (worksheet.highlight) {
                for (let j = 0; j < worksheet.highlight.length; j++) {
                    if (worksheet.highlight[j]) {
                        for (let i = 0; i < worksheet.highlight[j].length; i++) {
                            if (worksheet.records[j][i] && worksheet.records[j][i].element) {
                                worksheet.records[j][i].element.classList.remove('jss_highlight');
                            }
                        }
                    }
                }
            }
            // Reset the highlighted and restart the search
            worksheet.highlight = [];
        },
        onsearchrow(worksheet, row, terms) {
            // Search for the term
            let terms = new RegExp(terms, 'gi');
            // Value
            let value = null;
            // Result
            let test = false;
            // Get the values from the rows
            for (let col = 0; col < worksheet.options.columns.length; col++) {
                // Get the information from cell
                value = '' + worksheet.getValueFromCoords(col,row,true);
                // If find the term
                if (value.match(terms)) {
                    // Highlight cell
                    if (worksheet.records[row][col].element) {
                        worksheet.records[row][col].element.classList.add('jss_highlight');
                    }
                    // Highlighted cells container
                    if (! worksheet.highlight[row]) {
                        worksheet.highlight[row] = [];
                    }
                    worksheet.highlight[row][col] = true;
                    // Add to the result
                    test = true;
                }
            }
            // Search
            return test;
        }
    },
    data() {
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
                csv: '/tests/demo.csv',
                csvHeaders: true,
                search: true,
                pagination: 10,
                paginationOptions: [10,25,50,100],
                defaultColWidth: 150,
            }],
            oncreatecell: function(worksheet, td, col, row) {
                // JSS is creating a cell that should be highlighted
                if (worksheet.highlight && worksheet.highlight[row] && worksheet.highlight[row][col]) {
                    td.classList.add('jss_highlight');
                }
            },
            onsearchstart: function(worksheet) {
                // Reset any potential previous highlighted cells
                if (worksheet.highlight) {
                    for (let j = 0; j < worksheet.highlight.length; j++) {
                        if (worksheet.highlight[j]) {
                            for (let i = 0; i < worksheet.highlight[j].length; i++) {
                                if (worksheet.records[j][i] && worksheet.records[j][i].element) {
                                    worksheet.records[j][i].element.classList.remove('jss_highlight');
                                }
                            }
                        }
                    }
                }
                // Reset the highlighted and restart the search
                worksheet.highlight = [];
            },
            onsearchrow: function(worksheet, row, terms) {
                // Search for the term
                let terms = new RegExp(terms, 'gi');
                // Value
                let value = null;
                // Result
                let test = false;
                // Get the values from the rows
                for (let col = 0; col < worksheet.options.columns.length; col++) {
                    // Get the information from cell
                    value = '' + worksheet.getValueFromCoords(col,row,true);
                    // If find the term
                    if (value.match(terms)) {
                        // Highlight cell
                        if (worksheet.records[row][col].element) {
                            worksheet.records[row][col].element.classList.add('jss_highlight');
                        }
                        // Highlighted cells container
                        if (! worksheet.highlight[row]) {
                            worksheet.highlight[row] = [];
                        }
                        worksheet.highlight[row][col] = true;
                        // Add to the result
                        test = true;
                    }
                }
                // Search
                return test;
            }
        });
    }
}
```
 

 

### Custom search using the backend

The example below demonstrates how to modify the search behavior by fetching data from the backend. For the sake of the testing, the server will return always [2,20,200] 

 





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
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100],
        defaultColWidth: 150,
    }],
    onbeforesearch: function(worksheet, str, currentResults) {
        // Loading spin
        jSuites.loading.show();
        // Remote search processing
        jSuites.ajax({
            url: '/v10/test?q=' + str,
            dataType: 'json',
            success: function(newResults) {
                // Loading spin
                jSuites.loading.hide();
                // Set the rowIds that should be return to the user.
                if (newResults && newResults.length) {
                    worksheet.results = newResults;
                } else {
                    worksheet.results = null;
                }
                // Execute the update
                worksheet.updateSearch();
            }
        })

        // Cancel the native search
        return false;
    }
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
    // Columns
    const onbeforesearch = (worksheet, str, currentResults) => {
        // Loading spin
        jSuites.loading.show();
        // Remote search processing
        jSuites.ajax({
            url: '/v10/test?q=' + str,
            dataType: 'json',
            success: function(newResults) {
                // Loading spin
                jSuites.loading.hide();
                // Set the rowIds that should be return to the user.
                if (newResults && newResults.length) {
                    worksheet.results = newResults;
                } else {
                    worksheet.results = null;
                }
                // Execute the update
                worksheet.updateSearch();
            }
        })

        // Cancel the native search
        return false;
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet csv="/tests/demo.csv"
                csvHeaders
                search
                pagination="10"
                paginationOptions={[10,25,50,100]}
                defaultColWidth="150" />
            </Spreadsheet>
            <input type='button' value='Search for APP' onClick={() => spreadsheet.current[0].search('app')} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforesearch="onbeforesearch">
        <Worksheet defaultColWidth="150" :csv="/tests/demo.csv"
            csvHeaders
            search
            :pagination="10"
            :paginationOptions="[10,25,50,100]" />
    </Spreadsheet>
    <input type='button' value='Search for APP' @click="search" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jSuites from "jsuites";

const license = '###license###';

// Columns
const onbeforesearch = (worksheet, str, currentResults) => {
    // Loading spin
    jSuites.loading.show();
    // Remote search processing
    jSuites.ajax({
        url: '/v10/test?q=' + str,
        dataType: 'json',
        success: function(newResults) {
            // Loading spin
            jSuites.loading.hide();
            // Set the rowIds that should be return to the user.
            if (newResults && newResults.length) {
                worksheet.results = newResults;
            } else {
                worksheet.results = null;
            }
            // Execute the update
            worksheet.updateSearch();
        }
    })

    // Cancel the native search
    return false;
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        search(cell) {
            this.$refs.spreadsheet.current[0].search('app');
        },
        onbeforesearch,
    }
    data() {
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
import jSuites from "jSuites";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type='button' value='Search for APP' (click)="this.worksheets[0].search('app')" />`,
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
                csv: '/tests/demo.csv',
                csvHeaders: true,
                search: true,
                pagination: 10,
                paginationOptions: [10,25,50,100],
                defaultColWidth: 150,
            }],
            onbeforesearch: function(worksheet, str, currentResults) {
                // Loading spin
                jSuites.loading.show();
                // Remote search processing
                jSuites.ajax({
                    url: '/v10/test?q=' + str,
                    dataType: 'json',
                    success: function(newResults) {
                        // Loading spin
                        jSuites.loading.hide();
                        // Set the rowIds that should be return to the user.
                        if (newResults && newResults.length) {
                            worksheet.results = newResults;
                        } else {
                            worksheet.results = null;
                        }
                        // Execute the update
                        worksheet.updateSearch();
                    }
                })

                // Cancel the native search
                return false;
            }
        });
    }
}
```
 

 

## Related content

[Data grid pagination](/docs/v10/pagination)
