title: Boosting Performance with Data Grid Viewport
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, viewport, grid performance, massive data sets, efficient rendering, visible cells, boost performance, table optimization
description: Discover how to utilize the viewport feature in Jspreadsheet to enhance performance. Learn how to programmatically change its dimensions and explore the related events and settings for optimal viewport configuration in your data grid.

# Viewport

The viewport is a crucial feature in the JSS JavaScript grid, referring to the visible section of the table displayed on the user's screen. When enabled, the viewport option enhances JSS's performance, rendering only visible cells and boosting performance when dealing with massive data sets. There are two configurations available for enabling the viewport: 

  * **Fullscreen** : This configuration sets the table dimensions to utilize the available screen area.
  * **TableOverflow** : This configuration enables the viewport along with the properties tableWidth and tableHeight, allowing developers to customize the viewport's width and height, respectively.
  * **Pagination** : This configuration defines the number of rows visible to the user and creates page navigation.

 Developers can define these properties at the worksheet level, allowing them to set different viewport sizes for each worksheet. This capability enables developers to optimize data display for various devices or use cases. Falar sobre a definicao do viewport via style.  

## Documentation

### Methods

The following methods interact with the worksheets viewport programmatically.

| Method      | Description                                                                     |
| ------------|---------------------------------------------------------------------------------|
| setViewport | `instance.setViewport(w: Number, h: Number) => void`                            |
| fullscreen  | `instance.fullscreen(state: Boolean) => void`                                   |
| goto        | `instance.goto(y: Number, x?: Number) => void`                                  |
| left        | `instance.left(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| top         | `instance.top(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`   |
| right       | `instance.right(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void` |
| down        | `instance.down(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| last        | `instance.last(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                  |
| first       | `instance.first(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                 |

 

### Settings

Related settings.

| Property                 | Description                                           |
| -------------------------|-------------------------------------------------------|
| tableOverflow: boolean   | Enable the spreadsheet viewport.                      |
| tableWidth: number       | Spreadsheet viewport width.                           |
| tableHeight: number      | Spreadsheet Viewport height.                          |
| resize: string           | Enable resizable viewport.                            |
| fullscreen: boolean      | Fullscreen viewport.                                  |
| virtualizationX: boolean | Enable virtualization on the columns. `Default true.` |
| virtualizationY: boolean | Enable virtualization on the rows. `Default true.`    |

 

### Events

The following events are related to the viewport:

| Method   | Description                                                 |
| ---------|-------------------------------------------------------------|
| onresize | `onresize(worksheet: Object, w: Number, h: Number) => void` |

 

## Example

### Change the spreadsheet viewport dimensions

This example demonstrates how to change the visible viewport area dynamically. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="text" value="800px" style="width:60px" />
<input type="text" value="400px" style="width:60px" />
<input type="button" value="Set viewport" id="setviewport"/>
<input type="button" value="Set fullscreen" id="setfullscren"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let setViewport = function(o) {
    // First worksheet
    grid[0].setViewport(o.previousElementSibling.previousElementSibling.value, o.previousElementSibling.value);
}

let data = [];

// Create the data
for (let j = 0; j < 500; j++) {
     data[j] = [];
     for (let i = 0; i < 20; i++) {
         data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
     }
}

let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '600px',
        // Enable resize on both directions
        resize: 'both',
    }]
});

document.getElementById("setviewport").onclick = (e) => setViewport(e.target)
document.getElementById("setfullscren").onclick = () => grid[0].fullscreen(true)
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";

const license = '###license###';

const getData = () => {
    // Data
    const data = [];
    // Create the data
    for (let j = 0; j < 500; j++) {
        data[j] = [];
        for (let i = 0; i < 20; i++) {
            data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
        }
    }
    return data;
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const width = useRef();
    const height = useRef();
    // Data
    const data = getData();
    // Resize viewport
    const setViewport = () => {
        spreadsheet.current[0].setViewport(width.current, height.current);
    }
    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
                <Worksheet data={data} tableOverflow tableWidth="600px" resize="both"/>
            </Spreadsheet>
            <input type="text" value="800px" style={{width: '60px'}} ref={width}/>
            <input type="text" value="400px" style={{width: '60px'}} ref={height}/>
            <input type="button" value="Set viewport" onClick={() => setViewport()}/>
            <input type="button" value="Set fullscreen" onClick={() => spreadsheet.current[0].fullscreen(true)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" tableOverflow tableWidth="600px" resize="both" />
    </Spreadsheet>
    <input type="text" value="800px" style="width:60px" ref="width" />
    <input type="text" value="400px" style="width:60px" ref="height" />
    <input type="button" value="Set viewport" @click="setViewport" />
    <input type="button" value="Set fullscreen" @click="fullScreen" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

const getData = () => {
    // Data
    const data = [];
    // Create the data
    for (let j = 0; j < 500; j++) {
         data[j] = [];
         for (let i = 0; i < 20; i++) {
             data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
         }
    }
    return data;
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        setViewport() {
            this.$refs.spreadsheet.current[0].setViewport(this.$refs.width.value.value, this.$refs.height.value.value);
        },
        fullScreen:() {
            this.$refs.spreadsheet.current[0].setViewport.fullscreen(true);
        }
    },
    data() {
        return {
            // License
            license: license,
            // Data
            data: getData(),
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

// Data
const data = [];

// Create the data
for (let j = 0; j < 500; j++) {
     data[j] = [];
     for (let i = 0; i < 20; i++) {
         data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
     }
}

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type="text" value="800px" style="width:60px" ref="width" />
        <input type="text" value="400px" style="width:60px" ref="height" />
        <input type="button" value="Set viewport" (click)="setViewport()" />
        <input type="button" value="Set fullscreen" (click)="fullScreen()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("width") width: ElementRef;
    @ViewChild("height") height: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                data: data,
                tableOverflow: true,
                tableWidth: '600px',
                // Enable resize on both directions
                resize: 'both',
            }]
        });
    }
    setViewport() {
        this.worksheets[0].setViewport(this.width.nativeElement.value, this.height.nativeElement.value);
    },
    fullScreen() {
        this.worksheets[0].setViewport.fullscreen(true);
    }
}
```
 

 

### Goto

Move the viewport to a specified row or cell. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="button" value="Go to row number 500" id="goto500" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6, 5000],
        tableOverflow: true,
        tableWidth: '600px',
    }]
});

document.getElementById("goto500").onclick = () => grid[0].goto(499);
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
    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[6,5000]} tableOverflow tableWidth="600px" />
            </Spreadsheet>
            <input type="button" value="Goto row number 500" onClick={() => spreadsheet.current[0].goto(499)} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,5000]" tableOverflow tableWidth="600px" />
    </Spreadsheet>
    <input type="button" value="Goto row number 500" @click="goto(499)" />
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
        goto(row) {
            this.$refs.spreadsheet.current[0].goto(row);
        }
    },
    data() {
        return {
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
    template: `<div #spreadsheet></div>
    <input type="button" value="Goto row number 500" (click)="this.worksheets[0].goto(499)" />`,
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
                minDimensions: [6, 5000],
                tableOverflow: true,
                tableWidth: '600px',
            }]
        });
    }
}
```
 
