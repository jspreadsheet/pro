title: Data Grid Search: Settings, Methods & Events
keywords: Jspreadsheet, data grid search, JavaScript, Excel-like search functionality, spreadsheet search customization, search event handling
description: In this section, you'll explore the search functionality, including methods and events, to tailor behaviour to your application's requirements.

# Data Grid Search

The search functionality in Jspreadsheet enables row filtering via keyword matching. This feature supports modifying or terminating search operations, catering to varied application requirements. This section provides an in-depth examination of the search feature, focusing on the technical aspects of methods and events to customize search behaviour according to application specifications.

## Documentation

### Methods

Below are methods associated with implementing and managing search functionality in the spreadsheet:

| Method       | Description                                                                                        |
| -------------|----------------------------------------------------------------------------------------------------|
| search       | `search(terms: String) : void`<br/>Search for the data grid rows that contain the specified terms. |
| resetSearch  | `resetSearch() : void`<br/>Reset the search terms and show all rows again.                         |
| showSearch   | `showSearch() : void`<br/>Show the search input box.                                               |
| hideSearch   | `hideSearch() : void`<br/>Hide the search input box.                                               |
| updateSearch | `updateSearch() : void`<br/>Refresh the results on the viewport.                                   |

 

### Events

Jspreadsheet provides a framework for developers to tailor the search functionality within the data grid using specific events. These events can alter or halt the search process, granting enhanced oversight of the search mechanism. It allows for implementing intricate and targeted filtering according to diverse criteria.

| Event          | Description                                                                                                                                                                                                |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearchstart  | `onsearchstart(worksheet: Object, terms: String)`<br/>It happens before all the search events.                                                                                                             |
| onsearchrow    | `onsearchrow(worksheet: Object, rowNumber: number, terms: String)`<br/>It helps to customize the searching process.                                                                                        |
| onsearch       | `onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |

 

### Initial Settings

Below are properties available to configure the online spreadsheet at its initialization.

| Property        | Description               |
| ----------------|---------------------------|
| search: boolean | Enable or disable search. |

 

## Examples

### Data Grid with Search and Pagination

The example below demonstrates a basic data grid with search functionality and pagination.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Search for APP' id="btn1" /></p>

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
            { type:'text', width:100 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
        ],
    }]
});

document.getElementById("btn1").onclick = () => worksheets[0].search('app');
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
    // Columns
    const columns = [
        {type: 'text', width: 80},
        {type: 'text', width: 100},
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
    },
    data() {
        const columns = [
            { type:'text', width:80 },
            { type:'text', width:100 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
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

// Create component
@Component({
    standalone: true,
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
                { type:'text', width:100 },
                { type:'text', width:100 },
                { type:'text', width:200 },
                { type:'text', width:100 },
            ],
        });
    }
}
```

### A Custom Local Data Grid Search

Guide on developing a bespoke method for row search within your data grid.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
        defaultColWidth: 120,
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

    const onsearchrow = (worksheet, row, terms) => {
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
                    defaultColWidth="120" />
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
        <Worksheet defaultColWidth="120" :csv="/tests/demo.csv" csvHeaders
               search :pagination="10" :paginationOptions="[10,25,50,100]" />
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
    standalone: true,
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
                defaultColWidth: 120,
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
 

 

### Backend-Driven Custom Search

The following example illustrates altering the search functionality to retrieve data from a backend server. The server is configured to return the values [2,20,200] for testing purposes consistently.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
        defaultColWidth: 120,
    }],
    onbeforesearch: function(worksheet, str, currentResults) {
        // Loading spin
        jSuites.loading.show();
        // Remote search processing
        jSuites.ajax({
            url: '/v11/test?q=' + str,
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
            url: '/v11/test?q=' + str,
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
                defaultColWidth="120" />
            </Spreadsheet>
            <input type='button' value='Search for APP' onClick={() => spreadsheet.current[0].search('app')} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforesearch="onbeforesearch">
        <Worksheet defaultColWidth="120" :csv="/tests/demo.csv"
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Columns
const onbeforesearch = (worksheet, str, currentResults) => {
    // Loading spin
    jSuites.loading.show();
    // Remote search processing
    jSuites.ajax({
        url: '/v11/test?q=' + str,
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
    standalone: true,
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
                defaultColWidth: 120,
            }],
            onbeforesearch: function(worksheet, str, currentResults) {
                // Loading spin
                jSuites.loading.show();
                // Remote search processing
                jSuites.ajax({
                    url: '/v11/test?q=' + str,
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
 
## Related Content

- [Data Grid Pagination](/docs/pagination)
- [Advance Search and Replace Extension](/products/search)
