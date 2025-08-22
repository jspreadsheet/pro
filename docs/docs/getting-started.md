title: Getting Started with Version 11
keywords: Jspreadsheet Pro, Jexcel, JavaScript data grid, online spreadsheets, JavaScript tables, Excel-like data grid, web-based spreadsheets, data grid controls, data grid features
description: Learn the basics, discover how to install, and create your first online spreadsheet with our JavaScript Data Grid plugin.

# Getting started

Jspreadsheet is a JavaScript Spreadsheet plugin that allows for creating online data grids with the look and feel of a traditional spreadsheet. This plugin provides various features to enable the creation of interactive and engaging datasets, improving the user experience of web-based applications. 

## Installation

Please choose one of the following options: 

### Download

Download and run jspreadsheet on your server or local machine <https://jspreadsheet.com/v11/jspreadsheet.zip>

### NPM

To install jspreadsheet using NPM 

```bash
// Install version 11
$ npm install jspreadsheet@11

// Alternatively, you can use one of our dedicated wrappers as below. 

// Install the react wrapper
$ npm install @jspreadsheet/react@11

// Install the vue wrapper
$ npm install @jspreadsheet/vue@11
```

### CDN

Run jspreadsheet directly from JSDelivr CDN


{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/jspreadsheet@11/dist/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jspreadsheet@11/dist/jspreadsheet.min.css" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.css" type="text/css" />
```

### License

This software requires a license. You can generate a certificate from your profile. Each certificate is normally valid for 12 months and need to be regenerated before expiration.

{.green}
> **Start your free trial**
> 
> The free trial certificate is valid for 30 days, but if you need more time you can extend this period.<br>
>
> [Create a Free Account](/me/login?create){.button .secondary target="_top"}



## Documentation

### Global methods and properties

| Method Description                                                                                                                       |
|------------------------------------------------------------------------------------------------------------------------------------------|
| Create a new spreadsheet.<br/>`jspreadsheet(el: HTMLElement\|null, options: Object)`                                                     |
| Destroy a given spreadsheet.<br/>`jspreadsheet.destroy(ident: HTMLElement\|object, events: Boolean)`                                     |
| Destroy all spreadsheets in all namespaces.<br/>`jspreadsheet.destroyAll()`                                                              |
| Bind extensions to Jspreadsheet, null to remove all extensions.<br/>`jspreasheet.setExtensions(extensions: object\| null)`               |
| Set the license string to your jspreadsheet application.<br/>`jspreadsheet.setLicnese(license: string)`                                  |
| Translate Jspreadsheet components and extensions.<br/>`jspreadsheet.setDictionary(translations: object)`                                 |
| Get a worksheet instance by name and namespace.<br/>`jspreadsheet.getWorksheetInstanceByName(worksheetName: string, namespace?: string)` |


## Examples

### Create a new data grid

You can create a new data grid with spreadsheet-like controls from an HTML table element, a JS array, a CSV, a JSON file or an Excel XLSX file.  

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ],
        columns: [
            { title:'Model', width:'300px' },
            { title:'Year', width:'80px' },
            { title:'Price', width:'100px' },
        ]
    }]
});
</script>
</html>
```

```jsx
import React, { useRef } from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Mazda', 2001, 2000],
        ['Peugeot', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    const columns = [
        {title: 'Model', width: '300px'},
        {title: 'Year', width: '80px'},
        {title: 'Price', width: '100px'},
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
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
        return {
            // License
            license: license,
            // Data
            data: [
                ['Mazda', 2001, 2000],
                ['Peugeot', 2010, 5000],
                ['Honda Fit', 2009, 3000],
                ['Honda CRV', 2010, 6000],
            ],
            columns: [
                { title:'Model', width:'300px' },
                { title:'Year', width:'80px' },
                { title:'Price', width:'100px' },
            ],
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

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div #spreadsheet></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet!: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[] = [];
  // Create a new JavaScript data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
        worksheets: [{
            data: [
                ['Mazda', 2001, 2000],
                ['Peugeot', 2010, 5000],
                ['Honda Fit', 2009, 3000],
                ['Honda CRV', 2010, 6000],
            ],
            columns: [
                { title:'Model', width: 300 },
                { title:'Year', width: 80 },
                { title:'Price', width: 100 },
            ]
        }]
    });
  }
}
```

### Destroying The Data Grid

The following example shows how to dynamically destroy and recreate a new data grid. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='jspreadsheet'></div>

<p><input type='button' value='Destroy' id="btn1" />
<input type='button' value='Create' id="btn2" /></p>

<script>
// Create a new spreadsheet
let create = function() {
    jspreadsheet(document.getElementById('jspreadsheet'), {
    	worksheets: [ { minDimensions:[5,5] } ]
    });
}

// Destroy the spreadsheet
let destroy = function() {
    jspreadsheet.destroy(document.getElementById('jspreadsheet'));
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('jspreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
    }]
});

document.getElementById("btn1").onclick = () => destroy()
document.getElementById("btn2").onclick = () => create()
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create a new spreadsheet
const create = function() {
    jspreadsheet(document.getElementById('spreadsheet'), {
    	worksheets: [ { minDimensions:[5,5] } ]
    });
}

// Destroy the spreadsheet
const destroy = function(spreadsheet) {
    jspreadsheet.destroy(spreadsheet);
}

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Mazda', 2001, 2000],
        ['Peugeot', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    const columns = [
        { title:'Model', width:'300px' },
        { title:'Year', width:'80px' },
        { title:'Price', width:'100px' },
    ];

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} id="spreadsheet">
                <Worksheet data={data} columns={columns} />
            </Spreadsheet>
            <input type="button" value="Destroy" onClick={() => destroy(spreadsheet.current[0].parent)} />
            <input type="button" value="Create" onClick={() => create()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" id="spreadsheet">
        <Worksheet />
    </Spreadsheet>
    <input type="button" value="Destroy" @click="destroy()" />
    <input type="button" value="Create" @click="create()" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Create a new worksheet
        create() {
            jspreadsheet(document.getElementById('spreadsheet'), {
                worksheets: [ { minDimensions:[5,5] } ]
            });
        },
        // Destroy the whole data grid
        destroy() {
            jspreadsheet.destroy(this.$refs.spreadsheet.current[0].parent);
        }
    },
    data() {
        return {
            license: license,
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

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="Destroy" (click)="destroy()" />
        <input type="button" value="Create" (click)="create()" />`
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
                minDimensions: [5,5],
            }]
        });
    }

    destroy() {
        jspreadsheet.destroy(this.spreadsheet.nativeElement);
    }

    create() {
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [ { minDimensions:[5,5] } ]
        });
    }
}
```
 
