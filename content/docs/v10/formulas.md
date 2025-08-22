title: Perform Data Calculations with Excel-Like Formulas in Jspreadsheet
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like formulas, formulas, calculations, spreadsheet calculations, spreadsheet formulas, spreadsheet-like formulas, Excel formulas, Google Sheet formulas, event handling, customizations, internationalization
description: Explore the Jspreadsheet Excel-like formulas features and unlock powerful calculation capabilities for your web-based spreadsheets.

# Excel-like formulas

## Documentation

Jspreadsheet implements spreadsheet-like formulas, ensuring compatibility with major spreadsheet software like Excel or Google Sheets. This section outlines the available formulas, custom formula creation, and other related features. 

### Main features

  * Automatic formula update on copy, paste and corner dragging;
  * The formula returns DOM objects to cells;
  * Custom Excel-like formulas;
  * Cross worksheet calculations;
  * External JS variables into calculations;
  * Calculations with columns.

 

### Important points

  * All formulas and methods must be capital letters.
  * For cross-spreadsheet formulas you might need to pause the calculations until all spreadsheet data are loaded. `jspreadsheet.calculations(false)`

 

> **Upgrades from previous versions**  From version 10 is more strict to follow a spreadsheet like notation. So, operations with point notation (e.g., Sheet1.A1) are no longer supported and should be replace by a spreadsheet-like notation for (Sheet1!A1), instead. There are some changes in chain events and basic methods such as =COLUMN, =ROW, =VALUE have been changed to match other spreadsheet software. 

 

### Settings

A summary of configurations related to the use of formulas.

| Configuration                                 | Description                                                            |
| ----------------------------------------------|------------------------------------------------------------------------|
| **Global configuration for the spreadsheet.** |
| secureFormulas?: boolean                      | Enable formula security. Default: true                                 |
| editorFormulas?: boolean                      | Enable the formula editor. Default: true                               |
| parseFormulas?: boolean                       | Enable formula calculations. Default: true                             |
| debugFormulas?: boolean                       | Enable the formula debug notices. Default: true                        |
| autoIncrement?: boolean                       | Formula variable increment on cloning or copying. Default: true        |
| **Configuration for columns**                 |
| shiftFormula?: boolean                        | Update the formula on cloning (used for custom columns). Default: true |

 

### Events

All events related to formulas.

| Event                      | Description                                                                                                                                         |
| ---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforeformula?: Function | Intercept and parse a formula just before the execution.<br/>onbeforeformula(worksheet: Object, expression: String, x: Number, y: Number) => String |
| onformulachain?: Function  | Get the information about the expressions executed from the formula chain.<br/>onformulachain(worksheet: Object, executions: Object) => void        |

 

### Methods

All methods related to formulas in the JSS context.

| Method                    | Description                                                                                                                     |
| --------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| executeFormula?: Function | Execute a formula.<br/>executeFormula(expression: string, x?: number, y?: number, caching?: boolean, basic?: boolean) => String |

 

### Available formulas

We are working to bring as many formulas as possible. Meanwhile, you can check for the existing implementation. For security reasons, all references should use capital letters, including the implementation of custom methods. 

## Special formulas

To support calculations, Jspreadsheet has a few special formulas listed below:

| Method       | Example                                 |
| -------------|-----------------------------------------|
| **=TABLE()** | Return the Jspreadsheet table instance. |

 

### Roadmap for the formulas

We are constantly adding new methods and features to bring Jspreadsheet in line with modern software. 

## Formula Pro extension

The formulas are available as Basic and Premium. The Basic is the default for all Jspreadsheet distributions, while Premium is distributed as an extension for the Enterprise and Premium plans and provides some extra features such as: 

  * Matrix calculations;
  * New operators such as % and @;
  * Range Variables;
  * Extended formulas;
  * Private scope;
  * Special internal properties, x, y and instance;
  * It runs in stand-alone applications;

 

#### Special properties for Formulas Premium

When the Jspreadsheet Pro invokes the method from a valid cell, you will have access to the coordinates of the cell and the instance of the worksheet. 

{.ignore}
```javascript
let YOUR_METHOD = function() {
    // Return the coordinates to the cell
    return this.x + ',' + this.y;
}
```
   

## Custom formulas

It is possible to create custom methods that will be available in the spreadsheet. The custom method should return the appropriate content for the cell. From version 7 on, Jspreadsheet accepts a DOM element as a return of a function. **IMPORTANT** : All method names should be created using capital letters. 

{.ignore}
```javascript
// New custom formula
let COLORIZE = function(v) {
    let d = document.createElement('div');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Add to the correct scope
formula.setFormula({ COLORIZE });

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300' },
            { type: 'text', width:'200' },
        ]
    }]
});
```
  

## Example

### Basic spreadsheet with formulas.

A basic spreadsheet example using formulas, including currency, percentage and mask. 

 





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

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    style: ['background-color:orange; font-weight: bold;'],
    worksheets: [{
        data: [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
            [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
            [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
            [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
            [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
        ],
        columns: [
            { type: 'text', title:'Product', width:'300' },
            { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
            { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
            { type: 'text', title:'Discount', mask:'0.00%' },
            {
                type: 'number',
                title: 'Total',
                width: '100px',
                format: 'US #.##0,00;[Red](#.##0,00)',
            },
        ],
        style: {
            'A9:E9': 0,
        },
        columnSorting:false,
        worksheetName: 'Calculations',
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

    // Global grid style
    const styles = ['background-color:orange; font-weight: bold;'];

    // Worksheet data
    const data = [
        ['Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)'],
        ['Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)'],
        ['Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)'],
        ['Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)'],
        ['Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)'],
        ['Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)'],
        ['Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)'],
        ['Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)'],
        ['Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)'],
    ]

    // Column definitions
    const columns = [
        {type: 'text', title: 'Product', width: '300'},
        {type: 'text', title: 'Qtd', width: '80', mask: '#.##0'},
        {type: 'text', title: 'Price', width: '100px', mask: '$ #.##0,00'},
        {type: 'text', title: 'Discount', mask: '0.00%'},
        {
            type: 'number',
            title: 'Total',
            width: '100px',
            format: 'US #.##0,00;[Red](#.##0,00)',
        },
    ]

    // Data grid style
    const style = {
        'A9:E9': 0,
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} style={styles} toolbar={true}>
            <Worksheet data={data} columns={columns} style={style} worksheetName="Calculations" columnSorting/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :styles="styles">
        <Worksheet :data="data" :columns="columns" :style="style" columnSorting worksheetName="Calculations" />
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
        // Global grid style
        const styles = ['background-color:orange; font-weight: bold;'];

        // Worksheet data
        const data = [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
            [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
            [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
            [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
            [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
        ]

        // Column definitions
        const columns = [
            { type: 'text', title:'Product', width:'300' },
            { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
            { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
            { type: 'text', title:'Discount', mask:'0.00%' },
            {
                type: 'number',
                title: 'Total',
                width: '100px',
                format: 'US #.##0,00;[Red](#.##0,00)',
            },
        ]

        // Data grid style
        const style = {
            'A9:E9': 0,
        }

        return {
            styles,
            data,
            columns,
            style,
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
            toolbar: true,
            style: ['background-color:orange; font-weight: bold;'],
            worksheets: [{
                data: [
                    [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                    [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                    [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                    [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                    [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                    [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                    [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                    [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                    [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
                ],
                columns: [
                    { type: 'text', title:'Product', width:'300' },
                    { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
                    { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
                    { type: 'text', title:'Discount', mask:'0.00%' },
                    {
                        type: 'number',
                        title: 'Total',
                        width: '100px',
                        format: 'US #.##0,00;[Red](#.##0,00)',
                    },
                ],
                style: {
                    'A9:E9': 0,
                },
                columnSorting:false,
                worksheetName: 'Calculations',
            }]
        });
    }
}
```
 

 

### Cross worksheet formulas

Cross-worksheet formulas have been implemented from version 7 on. The following example has cross-worksheet and cross-spreadsheet formula calculations. 

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

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
                ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
            ],
            worksheetName: 'Example1',
            minDimensions: [5,5],
            defaultColWidth: '50px',
            columns: [{
                width: '300px'
            }],
            cells: {
                B5: { mask:'#.##0' },
                D5: { mask:'#.##0' },
            }
        },
        {
            data: [
                ['20%', "=Example1!D1"],
                ['20%', "=Example1!D2"],
                ['20%', "=Example1!D3"],
                ['20%', "=Example1!D4"],
            ],
            worksheetName: 'Example2',
            minDimensions: [5,5],
        },
    ]
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

    // All worksheets in a single variable
    const worksheets = [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
                ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
            ],
            worksheetName: 'Example1',
            minDimensions: [5,5],
            defaultColWidth: '50px',
            columns: [{
                width: '300px'
            }],
            cells: {
                B5: { mask:'#.##0' },
                D5: { mask:'#.##0' },
            }
        },
        {
            data: [
                ['20%', "=Example1!D1"],
                ['20%', "=Example1!D2"],
                ['20%', "=Example1!D3"],
                ['20%', "=Example1!D4"],
            ],
            worksheetName: 'Example2',
            minDimensions: [5,5],
        },
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
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
        // All worksheets in a single variable
        const worksheets = [
            {
                data: [
                    ['Cheese', 10, 6.00, "=B1*C1"],
                    ['Apples', 5, 4.00, "=B2*C2"],
                    ['Carrots', 5, 1.00, "=B3*C3"],
                    ['Oranges', 6, 2.00, "=B4*C4"],
                    ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
                ],
                worksheetName: 'Example1',
                minDimensions: [5,5],
                defaultColWidth: '50px',
                columns: [{
                    width: '300px'
                }],
                cells: {
                    B5: { mask:'#.##0' },
                    D5: { mask:'#.##0' },
                }
            },
            {
                data: [
                    ['20%', "=Example1!D1"],
                    ['20%', "=Example1!D2"],
                    ['20%', "=Example1!D3"],
                    ['20%', "=Example1!D4"],
                ],
                worksheetName: 'Example2',
                minDimensions: [5,5],
            },
        ]

        return {
            worksheets,
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
            worksheets: [
                {
                    data: [
                        ['Cheese', 10, 6.00, "=B1*C1"],
                        ['Apples', 5, 4.00, "=B2*C2"],
                        ['Carrots', 5, 1.00, "=B3*C3"],
                        ['Oranges', 6, 2.00, "=B4*C4"],
                        ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
                    ],
                    worksheetName: 'Example1',
                    minDimensions: [5,5],
                    defaultColWidth: '50px',
                    columns: [{
                        width: '300px'
                    }],
                    cells: {
                        B5: { mask:'#.##0' },
                        D5: { mask:'#.##0' },
                    }
                },
                {
                    data: [
                        ['20%', "=Example1!D1"],
                        ['20%', "=Example1!D2"],
                        ['20%', "=Example1!D3"],
                        ['20%', "=Example1!D4"],
                    ],
                    worksheetName: 'Example2',
                    minDimensions: [5,5],
                },
            ]
        });
    }
}
```
 

 

### Defined names

From version 8 on, defined names are available on the premium edition. 

This feature is only available in with the [JSS Formula Premium](/products/formulas) plugin.

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

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                [ 1, '=SUM(Test*10)' ],
                [ 2, '' ],
                [ 3, '' ],
                [ 4, '' ],
            ],
            minDimensions: [5,5],
            worksheetName: 'Named ranges',
        }
    ],
    // On JSS the defined names must be uppercase
    definedNames: {
        'TEST': 'A1:A4',
    },
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

    // All worksheets in a single variable
    const worksheets = [
        {
            data: [
                [ 1, '=SUM(Test*10)' ],
                [ 2, '' ],
                [ 3, '' ],
                [ 4, '' ],
            ],
            minDimensions: [5,5],
            worksheetName: 'Named ranges',
        }
    ];

    // On JSS the defined names must be uppercase
    const definedNames = {
        TEST: 'A1:A4',
    };

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} definedNames={definedNames} />
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" :definedNames="definedNames" />
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
        // All worksheets in a single variable
        const worksheets = [
            {
                data: [
                    [ 1, '=SUM(Test*10)' ],
                    [ 2, '' ],
                    [ 3, '' ],
                    [ 4, '' ],
                ],
                minDimensions: [5,5],
                worksheetName: 'Named ranges',
            }
        ];

        // On JSS the defined names must be uppercase
        const definedNames = {
            TEST: 'A1:A4',
        };

        return {
            worksheets,
            definedNames,
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
            worksheets: [
                {
                    data: [
                        [ 1, '=SUM(Test*10)' ],
                        [ 2, '' ],
                        [ 3, '' ],
                        [ 4, '' ],
                    ],
                    minDimensions: [5,5],
                    worksheetName: 'Named ranges',
                }
            ],
            // On JSS the defined names must be uppercase
            definedNames: {
                'TEST': 'A1:A4',
            }
        });
    }
}
```
 

 

### Custom methods

All custom methods should be declared in capital letters. 

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

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300' },
            { type: 'text', width:'200' },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Extensions
const extensions = { formula };

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'red', '=COLORIZE(A1)' ],
        [ 'green', '=COLORIZE(A2)' ],
        [ 'blue', '=COLORIZE(A3)' ],
    ]
    const columns = [
        { type: 'text', width:'300px' },
        { type: 'text', width:'200px' },
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Extensions
const extensions = { formula };

// Create data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ]
        const columns = [
            { type: 'text', width:'300px' },
            { type: 'text', width:'200px' },
        ]

        return {
            extensions,
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
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a custom javascript method (capital case)
const COLORIZE = (v) => {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Create the data grid component
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
                data: [
                    [ 'red', '=COLORIZE(A1)' ],
                    [ 'green', '=COLORIZE(A2)' ],
                    [ 'blue', '=COLORIZE(A3)' ],
                ],
                columns: [
                    { type: 'text', width:'300' },
                    { type: 'text', width:'200' },
                ]
            }]
        });
    }
}
```
 

 

### Using columns in your formulas

You can use custom column name in your calculations. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 10, '=@Quantity*10' ],
            [ 20, '=@Quantity*10' ],
            [ 30, '=@Quantity*10' ],
        ],
        columns: [
            { type: 'text', width:'300', title: 'Quantity' },
            { type: 'text', width:'200', title: 'Total' },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Extensions
const extensions = { formula };

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();

    // Data grid
    const data = [
        [ 10, '=@Quantity*10' ],
        [ 20, '=@Quantity*10' ],
        [ 30, '=@Quantity*10' ],
    ];

    // Grid column definitions
    const columns = [
        { type: 'text', width:'300', title: 'Quantity' },
        { type: 'text', width:'200', title: 'Total' },
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Extensions
const extensions = { formula };

// Create data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data grid
        const data = [
            [ 10, '=@Quantity*10' ],
            [ 20, '=@Quantity*10' ],
            [ 30, '=@Quantity*10' ],
        ];

        // Grid column definitions
        const columns = [
            { type: 'text', width:'300', title: 'Quantity' },
            { type: 'text', width:'200', title: 'Total' },
        ];

        return {
            extensions,
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
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create the data grid component
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
                data: [
                    [ 10, '=@Quantity*10' ],
                    [ 20, '=@Quantity*10' ],
                    [ 30, '=@Quantity*10' ],
                ],
                columns: [
                    { type: 'text', width:'300', title: 'Quantity' },
                    { type: 'text', width:'200', title: 'Total' },
                ]
            }]
        });
    }
}
```
 

 

## Releases notes

### Differences from version 9

| Deprecated                | Description                                                                                                                               |
| --------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| worksheet.formula         | The internal formula control is now deprecated. The formula chain property is part of the cell object worksheet.records[y][x].chain?: Map |
| onbeforechangereferences  | This event is deprecated                                                                                                                  |
| onchangereferences        | This event is deprecated                                                                                                                  |
| worksheet.updateFormula() | This method is deprecated                                                                                                                 |


