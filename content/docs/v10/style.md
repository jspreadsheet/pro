title: Spreadsheet Cell Style
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like style, spreadsheet cell style, table style, style, themes, style methods, style events, cell formatting, spreadsheet customization, grid style customization, data grid aesthetics, CSS for data grid, style settings, Jspreadsheet design, dynamic styling
description: Discover how to enable and apply CSS styles to cells in Jspreadsheet. Learn programmatic styling, set up new spreadsheets with custom styling, and track user changes using related events.

# Style

Jspreadsheet is constructed using real DOM elements, which allows you to apply CSS directly to the cells. However, when you use external styling, there is no internal tracking, history, or persistence. Therefore, Jspreadsheet offers settings and methods to manage the internal style programmatically.  

> **What is new**  Jspreadsheet now features a global style property at the spreadsheet level, enabling the reuse of styles across different worksheets and cells. Additionally, the latest version allows for the application of CSS styles to entire rows or columns through Excel-like syntax, such as A:A or 1:1. 

## Documentation

### Methods

You can manage the spreadsheet cell style with the following methods.

| Method     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getStyle   | Get style from one or multiple cells. <br/>@param {string\|null} - Cell identification or null for the whole table. <br/>@param {boolean?} - Return the indexes of the global style. <br/>`getStyle(cellName: String \| null, onlyIndexes?: Boolean)`                                                                                                                                                                                                               |
| setStyle   | Set a single cell style by name, or set the style for multiple cells. <br/>@param {String\|Object} - ID of a cell or an object with multiple cells and the style definitions. <br/>@param {String?} property - Style property <br/>@param {String?} value - Style value <br/>@param {Boolean?} forceOverwrite - true to overwrite the existing CSS. <br/>`setStyle: (cell: string \| object, property?: string, value?: string, forceOverwrite?: boolean) => void;` |
| resetStyle | Reset the style for one or multiple cells <br/>@param {string\|string[]} - String to identify a cell or an array of cell identifications (A1, A2... etc) <br/>`resetStyle(cellName: String \| String[])`                                                                                                                                                                                                                                                            |

 

### Events

Spreadsheet style related events.

| Event         | Description                                                                                                                                                    |
| --------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangestyle | `onchangestyle(worksheet: Object, newValue: Object, oldValue: Objectd) : void`<br/>The method will return an object with the cells and the properties applied. |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property          | Description                                                                                                                            |
| ------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Worksheet level   |
| style: object     | Each object property corresponds to a cell name and range, with the value representing either a CSS string or ID for the global style. |
| Spreadsheet level |
| style: string[]   | The global style definition is an array of CSS strings to generate the CSS classes that will be used across all worksheets.            |

 

## Examples

### Style in the worksheet level

Create a data grid with the style definitions on the worksheet level. 

 





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
        minDimensions: [8,4],
        style: {
            'C:C': 'background-color: #ccffff; font-weight: bold',
            'E1': 'background-color: #ccffff;',
        },
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
    // Style
    const style = {
        'C:C': 'background-color: #ccffff; font-weight: bold',
        'E1': 'background-color: #ccffff;',
    }

    // Render component
    return (<Spreadsheet ref={spreadsheet} license={license}>
        <Worksheet style={style} minDimensions={[8, 4]}/>
    </Spreadsheet>);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :style="style" :minDimensions="[8,4]" />
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
    setup() {
        // Style
        const style = {
            'C:C': 'background-color: #ccffff; font-weight: bold',
            'E1': 'background-color: #ccffff;',
        }
        // Return object
        return {
            style,
            license
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
                    minDimensions: [8,4],
                    style: {
                        'C:C': 'background-color: #ccffff; font-weight: bold',
                        'E1': 'background-color: #ccffff;',
                    },
                }
            ]
        });
    }
}
```
 

 

### Spreadsheet level style

Utilize the new spreadsheet-level style property in Jspreadsheet to easily apply and reuse CSS styles across multiple worksheets. 

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
        minDimensions: [8,4],
        style: {
            'C:C': 0, // first position of the global array
            'E1': 1,
        },
    }],
    style: [
        'background-color: #ccffff; font-weight: bold',
        'background-color: #ccffff'
    ],
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
    // Style
    const globalStyle = [
        'background-color: #ccffff; font-weight: bold',
        'background-color: #ccffff'
    ]
    const style = {
        'C:C': 0, // first position of the global array
        'E1': 1,
    }
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} style={globalStyle}>
            <Worksheet style={style} minDimensions={[8,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :styles="globalStyle">
        <Worksheet :style="style" :minDimensions="[8,4]" />
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
    setup() {
        // Style
        const globalStyle = [
            'background-color: #ccffff; font-weight: bold',
            'background-color: #ccffff'
        ]
        const style = {
            'C:C': 0, // first position of the global array
            'E1': 1,
        }
        // Return object
        return {
            globalStyle,
            style,
            license
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
            worksheets: [{
                minDimensions: [8,4],
                style: {
                    'C:C': 0, // first position of the global array
                    'E1': 1,
                },
            }],
            style: [
                'background-color: #ccffff; font-weight: bold',
                'background-color: #ccffff'
            ],
        });
    }
}
```
 

 

### Programmatic updates

Defining cell style during initialization and changing it programmatically can be achieved using the following example. 

Even after the initialization, the cell style can still be managed programmatically through the getStyle and setStyle methods.

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
let w = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
            ['CA;BR', 'Carrots', 'No', '2018-11-10'],
            ['BR', 'Oranges', 'Yes', '2019-01-12'],
        ],
        columns: [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: 300,
                url: '/jspreadsheet/countries', // Remote source for your dropdown
                autocomplete: true,
                multiple: true
            },
            {
                type: 'text',
                title: 'Description',
                width: 200
            },
            {
                type: 'dropdown',
                title: 'Stock',
                width: 100 ,
                source: ['No','Yes']
            },
            {
                type: 'calendar',
                title: 'Best before',
                width: 100
            },
        ],
        style: {
            A1:'background-color: orange;',
            B1:'background-color: orange;',
        },
    }]
});

document.getElementById("setbackgroundbtn").onclick = () => w[0].setStyle('A2', 'background-color', 'yellow');
document.getElementById("changestylebtn").onclick = () => w[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' });
document.getElementById("geta1stylebtn").onclick = () => document.getElementById('console').innerHTML = w[0].getStyle('A1');
document.getElementById("gettablestylebtn").onclick = () => document.getElementById('console').innerHTML = JSON.stringify(w[0].getStyle());
</script>

<p><textarea id='console' style="width:100%;max-width:600px;height:100px;"></textarea></p>

<button type="button" id="setbackgroundbtn">Set A2 background</button>
<button type="button" id="changestylebtn">Change A3, B3 style</button>
<button type="button" id="geta1stylebtn">Get A1 style</button>
<button type="button" id="gettablestylebtn">Get the table style</button>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const console = useRef();
    const data = [
        ['US', 'Cheese', 'Yes', '2019-02-12'],
        ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
        ['CA;BR', 'Carrots', 'No', '2018-11-10'],
        ['BR', 'Oranges', 'Yes', '2019-01-12'],
    ];
    const columns = [
        {
            type: 'dropdown',
            title: 'Product Origin',
            width: 300,
            url: '/jspreadsheet/countries', // Remote source for your dropdown
            autocomplete: true,
            multiple: true
        },
        {
            type: 'text',
            title: 'Description',
            width: 200
        },
        {
            type: 'dropdown',
            title: 'Stock',
            width: 100 ,
            source: ['No','Yes']
        },
        {
            type: 'calendar',
            title: 'Best before',
            width: 100
        },
    ];
    const style = {
        A1:'background-color: orange;',
        B1:'background-color: orange;',
    };
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} style={style} />
            </Spreadsheet>
            <textarea ref={console} style={{ width: '100%', maxWidth: '600px', height: '100px'}}></textarea>
            <input type="button" value="Set A2 background"
                onClick={() => spreadsheet.current[0].setStyle('A2', 'background-color', 'yellow')} />
            <input type="button" value="Change A3, B3 style"
                onClick={() => spreadsheet.current[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' })} />
            <input type="button" value="Get A1 style"
                onClick={() => console.current.innerHTML = spreadsheet.current[0].getStyle('A1')} />
            <input type="button" value="Get the table style"
                onClick={() => console.current.innerHTML = JSON.stringify(spreadsheet.current[0].getStyle())} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :style="style" />
    </Spreadsheet>
    <textarea ref='console' style='width:100%;max-width:600px;height:100px;'></textarea>
    <input type="button" value="Set A2 background"
        @click="setStyle('A2', 'background-color', 'yellow')" />
    <input type="button" value="Change A3, B3 style"
        @click="setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' })" />
    <input type="button" value="Get A1 style"
        @click="console.value.innerHTML = getStyle('A1')" />
    <input type="button" value="Get the table style"
        @click="console.value.innerHTML = JSON.stringify(getStyle())" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    setup() {
        const data = [
            ['US', 'Cheese', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
            ['CA;BR', 'Carrots', 'No', '2018-11-10'],
            ['BR', 'Oranges', 'Yes', '2019-01-12'],
        ];
        const columns = [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: 300,
                url: '/jspreadsheet/countries', // Remote source for your dropdown
                autocomplete: true,
                multiple: true
            },
            {
                type: 'text',
                title: 'Description',
                width: 200
            },
            {
                type: 'dropdown',
                title: 'Stock',
                width: 100 ,
                source: ['No','Yes']
            },
            {
                type: 'calendar',
                title: 'Best before',
                width: 100
            },
        ];
        const style = {
            A1:'background-color: orange;',
            B1:'background-color: orange;',
        };

        // Return object
        return {
            data,
            columns,
            style,
            license
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
        <textarea ref='console' style='width:100%;max-width:600px;height:100px;'></textarea>
        <input type="button" value="Set A2 background"
            (click)="this.worksheets[0].setStyle('A2', 'background-color', 'yellow')} />
        <input type="button" value="Change A3, B3 style"
            (click)="this.worksheets[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' })} />
        <input type="button" value="Get A1 style"
            (click)="console.current.innerHTML = this.worksheets[0].getStyle('A1')} />
        <input type="button" value="Get the table style"
            (click)="console.current.innerHTML = JSON.stringify(this.worksheets[0].getStyle())} />
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
            data: [
                ['US', 'Cheese', 'Yes', '2019-02-12'],
                ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
                ['CA;BR', 'Carrots', 'No', '2018-11-10'],
                ['BR', 'Oranges', 'Yes', '2019-01-12'],
            ],
            columns: [
                {
                    type: 'dropdown',
                    title: 'Product Origin',
                    width: 300,
                    url: '/jspreadsheet/countries', // Remote source for your dropdown
                    autocomplete: true,
                    multiple: true
                },
                {
                    type: 'text',
                    title: 'Description',
                    width: 200
                },
                {
                    type: 'dropdown',
                    title: 'Stock',
                    width: 100 ,
                    source: ['No','Yes']
                },
                {
                    type: 'calendar',
                    title: 'Best before',
                    width: 100
                },
            ],
            style: {
                A1:'background-color: orange;',
                B1:'background-color: orange;',
            },
        });
    }
}
```
 

 

### External CSS styling

The following example uses global CSS to apply a background color on even rows. 

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8, 10],
    }]
});
</script>
<style>
#spreadsheet tbody tr:nth-child(even) {
    background-color: #eee;
}
</style>
```
 

## Releases notes

### Differences from version 9

 

| **Style properties**                   | Now JSS has the spreadsheet.style array of strings is used to declare the style strings, and the worksheet style property is used to assign those styles to the cells.      |
| ---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setStyle**                           | The setStyle method adds style properties on top of the existing ones, but you can also use the fourth argument, forceOverwrite, to replace a current style with a new one. |
| **Initialize style to range of cells** | Specifying a new worksheet style using an Excel-like range of cell notation is possible.                                                                                    |


