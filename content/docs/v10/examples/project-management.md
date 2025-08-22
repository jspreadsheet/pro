title: Web-based Project Management Spreadsheet Example
keywords: Jspreadsheet, Jexcel, JavaScript, Use Cases, Project Management Example
description: Get insights into a simple project management spreadsheet example powered by Jspreadsheet.

# Project Management Spreadsheet

A simple online task management spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Add new task' id="insertRow"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ formula });

// Custom formula
const PHOTO = function(photo) {
    if (! photo) {
        photo = 'nophoto';
    }
    return ' <img src="/templates/default/img/'+photo+'.jpg" class="users-small" />';
}
// Set the custom formulas
formula.setFormula({ PHOTO });

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ '=B1', '2', 'New products section', '2019-02-12', '80' ],
            [ '=B2', '2', 'API integration', '2019-03-01', '100' ],
            [ '=B3', '4', 'Deck', '2018-11-10', '30' ],
            [ '=B4', '2', 'Prototype', '2019-01-12', '0' ],
        ],
        columns: [
            {
                type: 'text',
                width: '60px',
                title: 'Photo',
                readOnly: true
            },
            {
                type: 'dropdown',
                width: '140px',
                title: 'Name',
                source: [{
                    id: '2',
                    name: 'Jorge'
                }, {
                    id: '4',
                    name: 'Paul'
                }]
            },
            {
                type: 'text',
                width: '200px',
                title: 'Task'
            },
            {
                type: 'calendar',
                width: '100px',
                title: 'When'
            },
            {
                type: 'progressbar',
                width: '200px',
                title: '%'
            },
        ],
    }],
    oninsertrow: function(worksheet) {
        for (let j = 0; j < worksheet.rows.length; j++) {
            if (! worksheet.options.data[j][0]) {
                worksheet.setValue('A' + (j+1), '=PHOTO(B' + (j+1) + ')', true);
            }
        }
    }
});

document.getElementById("insertRow").onclick = () => spreadsheet[0].insertRow();
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from '@jspreadsheet/formula-pro';

// Set the license
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setFormulas({ formula });

const PHOTO = function(photo) {
    if (! photo) {
        photo = 'nophoto';
    }
    return ' <img src="/templates/default/img/'+photo+'.jpg" class="users-small" />';
}
// Set the custom formulas
formula.setFormula({ PHOTO });

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ '=PHOTO(B1)', '2', 'New products section', '2019-02-12', '80' ],
        [ '=PHOTO(B2)', '2', 'API integration', '2019-03-01', '100' ],
        [ '=PHOTO(B3)', '4', 'Deck', '2018-11-10', '30' ],
        [ '=PHOTO(B4)', '2', 'Prototype', '2019-01-12', '0' ],
    ]
    // Columns
    const columns = [
        {
            type: 'text',
            width: '60px',
            title: 'Photo',
            readOnly: true
        },
        {
            type: 'dropdown',
            width: '140px',
            title: 'Name',
            source: [
                { id: '2', name: 'Jorge' },
                { id: '4', name: 'Paul' }
            ]
        },
        {
            type: 'text',
            width: '200px',
            title: 'Task'
        },
        {
            type: 'calendar',
            width: '100px',
            title: 'When'
        },
        {
            type: 'progressbar',
            width: '200px',
            title: '%'
        },
    ];
    // Event to make sure the first cell is populated
    const oninsertrow = (worksheet) => {
        for (let j = 0; j < worksheet.rows.length; j++) {
            if (! worksheet.options.data[j][0]) {
                worksheet.setValue('A' + (j+1), '=PHOTO(B' + (j+1) + ')', true);
            }
        }
    }
    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} oninsertrow={oninsertrow}>
                <Worksheet data={data} columns={columns} />
            </Spreadsheet>
            <input type={"button"} value={"Add new task"} onClick={() => spreadsheet.current[0].insertRow()} />
        </>
    );
}
```
```vue
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

// Custom formula
const PHOTO = function(photo) {
    if (! photo) {
        photo = 'nophoto';
    }
    return ' <img src="/templates/default/img/'+photo+'.jpg" class="users-small" />';
}

// Set the custom formulas
formula.setFormula({ PHOTO });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ '=PHOTO(B1)', '2', 'New products section', '2019-02-12', '80' ],
            [ '=PHOTO(B2)', '2', 'API integration', '2019-03-01', '100' ],
            [ '=PHOTO(B3)', '4', 'Deck', '2018-11-10', '30' ],
            [ '=PHOTO(B4)', '2', 'Prototype', '2019-01-12', '0' ],
        ]
        // Columns
        const columns = [
            {
                type: 'text',
                width: '60px',
                title: 'Photo',
                readOnly: true
            },
            {
                type: 'dropdown',
                width: '140px',
                title: 'Name',
                source: [
                    { id: '2', name: 'Jorge' },
                    { id: '4', name: 'Paul' }
                ]
            },
            {
                type: 'text',
                width: '200px',
                title: 'Task'
            },
            {
                type: 'calendar',
                width: '100px',
                title: 'When'
            },
            {
                type: 'progressbar',
                width: '200px',
                title: '%'
            },
        ];
        // Event to make sure the first cell is populated
        const oninsertrow = (worksheet) => {
            for (let j = 0; j < worksheet.rows.length; j++) {
                if (! worksheet.options.data[j][0]) {
                    worksheet.setValue('A' + (j+1), '=PHOTO(B' + (j+1) + ')', true);
                }
            }
        }

        return {
            data,
            columns,
            oninsertrow,
            license
        };
    },
    template: `<Spreadsheet ref="spreadsheet" :license="license" :oninsertrow="oninsertrow">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <input type='button' value='Add new task' @click="spreadsheet[0].insertRow()" />`,
}
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import formula from "@jspreadsheet/formula-pro";


// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula });

// Custom formula
const PHOTO = function(photo) {
    if (! photo) {
        photo = 'nophoto';
    }
    return ' <img src="/templates/default/img/'+photo+'.jpg" class="users-small" />';
}

// Set the custom formulas
formula.setFormula({ PHOTO });

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
        this.worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
            worksheets: [{
                data: [
                    [ '=B1', '2', 'New products section', '2019-02-12', '80' ],
                    [ '=B2', '2', 'API integration', '2019-03-01', '100' ],
                    [ '=B3', '4', 'Deck', '2018-11-10', '30' ],
                    [ '=B4', '2', 'Prototype', '2019-01-12', '0' ],
                ],
                columns: [
                    {
                        type: 'text',
                        width: '60px',
                        title: 'Photo',
                        readOnly: true
                    },
                    {
                        type: 'dropdown',
                        width: '140px',
                        title: 'Name',
                        source: [{
                            id: '2',
                            name: 'Jorge'
                        }, {
                            id: '4',
                            name: 'Paul'
                        }]
                    },
                    {
                        type: 'text',
                        width: '200px',
                        title: 'Task'
                    },
                    {
                        type: 'calendar',
                        width: '100px',
                        title: 'When'
                    },
                    {
                        type: 'progressbar',
                        width: '200px',
                        title: '%'
                    },
                ],
            }],
            oninsertrow: function(worksheet) {
                for (let j = 0; j < worksheet.rows.length; j++) {
                    if (! worksheet.options.data[j][0]) {
                        worksheet.setValue('A' + (j+1), '=PHOTO(B' + (j+1) + ')', true);
                    }
                }
            }
        });
    }
}
```
 
