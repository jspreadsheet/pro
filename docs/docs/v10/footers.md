title: Data Grid Footers: Displaying Summary Information
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like footer, spreadsheet, table, footers, summary calculations, status bar, floating footers, worksheet footers
description: The spreadsheet footers allow you to stick information, including formulas and data summaries, at the bottom of the data grid for easy reference and visibility.

# Data grid footers

Footers in Jspreadsheet allow you to display information or calculations at the bottom of a data grid. This section provides instructions for implementing footers during initialization or runtime using programming techniques. 

## Documentation

### Methods

The following methods provide programmatic interaction with the footers of the Jspreadsheet data grid.

| Method                                 | Description                                                                                                              |
| ---------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| getFooter()                            | Get the current footer settings.<br/>`getFooter() : Array`                                                               |
| setFooter()                            | Set the footer settings.<br/>`setFooter(newValue: Array) : void`                                                         |
| resetFooter()                          | Reset and remove the footers.<br/>`resetFooter() : void`                                                                 |
| refreshFooter()                        | Recalculate the values in the footer.<br/>`refreshFooter() : void`                                                       |
| getFooterValue(number, number)         | Get the current footer cell value from the coordinates x, y.<br/>`getFooterValue(x: Number, y: Number) : void`           |
| setFooterValue(number, number, string) | Set the value of a footer cell to the coordinates x, y.<br/>`setFooterValue(x: Number, y: Number, value: String) : void` |

 

### Events

The following events allow you to intercept user interactions with the Jspreadsheet data grid.

| Event               | Description                                                                                                                                                                                   |
| --------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangefooter      |  This method is invoked when the footers undergo modification in the Jspreadsheet data grid. <br/>`onchangefooter(worksheet: Object, newValue: String, oldValue: String) : null`              |
| onchangefootervalue | This method is called when the values of the footers in the Jspreadsheet data grid are modified. <br/>`onchangefootervalue(worksheet: Object, x: Number, y: Number, newValue: String) : null` |
| onrenderfootercell  |  <br/>This method is called when a footer cell is rendered. `onrenderfootercell(worksheet: Object, x: Number, y: Number, newValue: String, td: HTMLElement) : null`                           |

 

### Initial Settings

The following property is available during the initialization of the Jspreadsheet online spreadsheet.

| Property          | Description         |
| ------------------|---------------------|
| footers: string[] | Footers definitions |

 

## Examples

### Basic footer usage

In the example below the custom **SUMCOL** formula is implemented to consider only visible rows in the calculations. 

### Programmatic updates

How to change the formulas in the footers after the initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Change to AVERAGE' id="updatebtn">

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Cheese', 10, 6.00],
            ['Apples', 5, 4.00],
            ['Carrots', 5, 1.00],
            ['Oranges', 6, 2.00],
        ],
        footers: [
            [
                'Total',
                '=SUM(B:B)',
                '=SUM(C:C)',
            ]
        ],
        columns: [
            { width:'400px' }
        ]
    }],
    onrenderfootercell: function(worksheet, x, y, value, td) {
        if (value && x > 0) {
            // Applying a mask to the footer value
            td.innerText = jSuites.mask.render(value, { mask: '$ #,##0.00'}, true);
        }
    }
});

let update = function() {
    worksheets[0].setFooterValue(0,0,'Average');
    worksheets[0].setFooterValue(1,0,'=AVERAGE(B:B)');
    worksheets[0].setFooterValue(2,0,'=AVERAGE(C:C)');
}

document.getElementById("updatebtn").onclick = update
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import jSuites from "jsuites";
import formula from "@jspreadsheet/formula";

// License
jspreadsheet.setLicense('###license###');

// Load the formula pro extension
jspreadsheet.setExtensions({formula});

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Cheese', 10, 6.00, "=B1*C1"],
        ['Apples', 5, 4.00, "=B2*C2"],
        ['Carrots', 5, 1.00, "=B3*C3"],
        ['Oranges', 6, 2.00, "=B4*C4"],
    ];
    // Columns
    const columns = [
        {width: '400px'}
    ];
    // Data grid cell definitions
    const footers = [
        [
            'Total',
            '=SUM(B:B)',
            '=SUM(C:C)',
        ]
    ];
    // Event
    const onrenderfootercell = (worksheet, x, y, value, td) => {
        if (value && x > 0) {
            // Applying a mask to the footer value
            td.innerText = jSuites.mask.render(value, {mask: '$ #,##0.00'}, true);
        }
    }
    // Update
    const update = () => {
        spreadsheet.current[0].setFooterValue(0, 0, 'Avarage');
        spreadsheet.current[0].setFooterValue(1, 0, '=AVERAGE(B:B)');
        spreadsheet.current[0].setFooterValue(2, 0, '=AVERAGE(C:C)');
    }
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} onrenderfootercell={onrenderfootercell}>
            <Worksheet data={data} columns={columns} footers={footers}/>
        </Spreadsheet>
    <input type='button' value='Change to AVERAGE' onClick={() => update()}'>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :onrenderfootercell="onrenderfootercell">
        <Worksheet :data="data" :columns="columns" :footers="footers"  />
    </Spreadsheet>
    <button type="button" @click="update">Update</button>
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
            this.$refs.spreadsheet.current[0].setFooterValue(0,0,'Avarage');
            this.$refs.spreadsheet.current[0].setFooterValue(1,0,'=AVERAGE(B:B)');
            this.$refs.spreadsheet.current[0].setFooterValue(2,0,'=AVERAGE(C:C)');
        },
        // Event
        onrenderfootercell(worksheet, x, y, value, td) {
            if (value && x > 0) {
                // Applying a mask to the footer value
                td.innerText = jSuites.mask.render(value, { mask: '$ #,##0.00'}, true);
            }
        }
    },
    data() {
        // Data
        const data = [
            ['Cheese', 10, 6.00, "=B1*C1"],
            ['Apples', 5, 4.00, "=B2*C2"],
            ['Carrots', 5, 1.00, "=B3*C3"],
            ['Oranges', 6, 2.00, "=B4*C4"],
        ];
        // Columns
        const columns = [
            { width:'400px' }
        ];
        // Data grid cell definitions
        const footers = [
            [
                'Total',
                '=SUM(B:B)',
                '=SUM(C:C)',
            ]
        ];

        return {
            data,
            columns,
            footers,
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
        <button type="button" (click)="update()">Update</button>`,
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
                    ['Cheese', 10, 6.00],
                    ['Apples', 5, 4.00],
                    ['Carrots', 5, 1.00],
                    ['Oranges', 6, 2.00],
                ],
                footers: [
                    [
                        'Total',
                        '=SUM(B:B)',
                        '=SUM(C:C)',
                    ]
                ],
                columns: [
                    { width:'400px' }
                ]
            }],
            onrenderfootercell: function(worksheet, x, y, value, td) {
                if (value && x > 0) {
                    // Applying a mask to the footer value
                    td.innerText = jSuites.mask.render(value, { mask: '$ #,##0.00'}, true);
                }
            }
        });
    }
    update() {
        this.worksheets[0].setFooterValue(0,0,'Avarage');
        this.worksheets[0].setFooterValue(1,0,'=AVERAGE(B:B)');
        this.worksheets[0].setFooterValue(2,0,'=AVERAGE(C:C)');
    }
}
```
 

 

### Cross footer calculations

Footers are used to hold static information, but the following example creates a complete cross-footer calculations with realtime updates using onafterchanges. See our cross [spreadsheet](https://jsfiddle.net/spreadsheet/jv8dp06w/) footer calculations on jsfiddle 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet1"></div><br>
<div id="spreadsheet2"></div><br>
<div id="spreadsheet3"></div><br>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let s1 = jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        worksheetName: 'JSS1',
        data: [
            [43, 64],
            [51, 46],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});

// Create the spreadsheet
let s2 = jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        worksheetName: 'JSS2',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});

// Create the spreadsheet
let s3 = jspreadsheet(document.getElementById('spreadsheet3'), {
    worksheets: [{
        worksheetName: 'JSS3',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(JSS1!A:A,JSS2!A:A,JSS3!A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula";

// License
jspreadsheet.setLicense('###license###');

// Load the formula pro extension
jspreadsheet.setExtensions({ formula });

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Update footers from the last data grid
    const onafterchanges = function () {
        s3[0].setFooter();
    }

    const s1 = [{
        worksheetName: 'JSS1',
        data: [
            [43, 64],
            [51, 46],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }]

    const s2 = [{
        worksheetName: 'JSS2',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }]

    const s3 = [{
        worksheetName: 'JSS3',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(JSS1!A:A,JSS2!A:A,JSS3!A:A)']
        ],
    }]

    // Render data grid component
    return (
        <Spreadsheet worksheets={s1} onafterchanges={onafterchanges} />
        <Spreadsheet worksheets={s2} onafterchanges={onafterchanges} />
        <Spreadsheet worksheets={s3} onafterchanges={onafterchanges} />
    );
}
```
```vue
<template>
    <Spreadsheet :worksheets="s1" :onafterchanges="onafterchanges" />
    <Spreadsheet :worksheets="s2" :onafterchanges="onafterchanges" />
    <Spreadsheet :worksheets="s3" :onafterchanges="onafterchanges" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula";

// License
jspreadsheet.setLicense('###license###');

// Load the formula pro extension
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Update footers from the last data grid
        onafterchanges() {
            s3[0].setFooter();
        }
    },
    data() {
        const s1 = [{
            worksheetName: 'JSS1',
            data: [
                [43, 64],
                [51, 46],
            ],
            footers: [
                ['=SUM(A:A)']
            ],
        }]

        const s2 = [{
            worksheetName: 'JSS2',
            data: [
                [34, 53],
                [51, 35],
            ],
            footers: [
                ['=SUM(A:A)']
            ],
        }]

        const s3 = [{
            worksheetName: 'JSS3',
            data: [
                [34, 53],
                [51, 35],
            ],
            footers: [
                ['=SUM(JSS1!A:A,JSS2!A:A,JSS3!A:A)']
            ],
        }]

        return {
            s1,
            s2,
            s3,
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
    template: `
        <div #spreadsheet1></div>
        <div #spreadsheet2></div>
        <div #spreadsheet3></div>
    `,
})
export class AppComponent {
    @ViewChild("spreadsheet1") spreadsheet1: ElementRef;
    @ViewChild("spreadsheet1") spreadsheet2: ElementRef;
    @ViewChild("spreadsheet3") spreadsheet3: ElementRef;
    // Worksheets
    s1: jspreadsheet.worksheetInstance[];
    s2: jspreadsheet.worksheetInstance[];
    s3: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create the spreadsheet
        this.s1 = jspreadsheet(this.spreadsheet1.nativeElement, {
            worksheets: [{
                worksheetName: 'JSS1',
                data: [
                    [43, 64],
                    [51, 46],
                ],
                footers: [
                    ['=SUM(A:A)']
                ],
            }],
            onafterchanges: () => () {
                this.s3[0].setFooter();
            }
        });

        // Create the spreadsheet
        this.s2 = jspreadsheet(this.spreadsheet2.nativeElement, {
            worksheets: [{
                worksheetName: 'JSS2',
                data: [
                    [34, 53],
                    [51, 35],
                ],
                footers: [
                    ['=SUM(A:A)']
                ],
            }],
            onafterchanges: () => () {
                this.s3[0].setFooter();
            }
        });

        // Create the spreadsheet
        this.s3 = jspreadsheet(this.spreadsheet3.nativeElement, {
            worksheets: [{
                worksheetName: 'JSS3',
                data: [
                    [34, 53],
                    [51, 35],
                ],
                footers: [
                    ['=SUM(JSS1!A:A,JSS2!A:A,JSS3!A:A)']
                ],
            }],
            onafterchanges: () => {
                this.s3[0].setFooter();
            }
        });
    }
}
```
 
