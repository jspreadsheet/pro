title: Data Grid Viewport Overview  
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, viewport, grid performance, massive data sets, efficient rendering, visible cells, boost performance, table optimization
description: Explore the viewport in Jspreadsheet for enhanced grid performance. Learn to adjust dimensions and optimize settings for large dataset handling.

# Data Grid Viewport

The Jspreadsheet <span>data grid</span> viewport is the portion of the table that is visible to the user. The viewport boosts performance when active by rendering only the cells on view. There are three primary configurations to enable the viewport:

- **Fullscreen**: This configuration expands the data grid to fill the available screen space;
- **TableOverflow**: This property defines the viewport dimensions using `tableWidth` and `tableHeight`.
- **Pagination**: This mode specifies the visible number of rows and creates a pagination control;

<br>

These settings can be applied at the worksheet level, offering the flexibility to tailor viewport dimensions for each sheet. Additionally, the viewport can be further customized through CSS styles.

## Documentation

### Methods

#### Viewport Interaction Methods

Interact with the data grid viewport programmatically using the following methods:

| Method       | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| setViewport  | Sets the dimensions of the viewport.<br>`instance.setViewport(w: Number, h: Number) => void` |
| fullscreen   | Toggles the grid's fullscreen mode.<br>`instance.fullscreen(state: Boolean) => void`         |

#### Programmatic Navigation Methods

Facilitate programmatic navigation within the grid with these methods:

| Method  | Description                                                                     |
|---------|---------------------------------------------------------------------------------|
| goto    | `instance.goto(y: Number, x?: Number) => void`                                  |
| left    | `instance.left(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| top     | `instance.top(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`   |
| right   | `instance.right(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void` |
| down    | `instance.down(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| last    | `instance.last(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                  |
| first   | `instance.first(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                 |

 

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


### Known Limitations

Although Jspreadsheet can create larger data grids, browsers have limitations regarding the maximum DOM width and height that can be rendered efficiently. We recommend rendering at most 320K rows. To manage more extensive datasets, consider implementing pagination.

## Example

### Adjusting Viewport Dimensions

This example illustrates the process of dynamically modifying the dimensions of a spreadsheet's visible viewport area.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/><br/>
<input type="text" value="800px" style="width:60px" />
<input type="text" value="400px" style="width:60px" />
<input type="button" value="Set viewport" id="btn1"/>
<input type="button" value="Set fullscreen" id="btn2"/>

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

document.getElementById("btn1").onclick = (e) => setViewport(e.target)
document.getElementById("btn2").onclick = (e) => grid[0].parent.fullscreen(true);
</script>
</html>
```
```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
        const w = width.current.value || "800px";
        const h = height.current.value || "400px";
        spreadsheet.current[0].setViewport(w, h);
    };
    let style = {width: '60px'};
    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
                <Worksheet data={data} tableOverflow tableWidth="600px" resize="both"/>
            </Spreadsheet>
            <input type="text" value="800px" style={style} ref={width}/>
            <input type="text" value="400px" style={style} ref={height}/>
            <input type="button" value="Set viewport" onClick={() => setViewport()}/>
            <input type="button" value="Set fullscreen" onClick={() => spreadsheet.current[0].parent.fullscreen(true)}/>
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
        fullScreen() {
            this.$refs.spreadsheet.current[0].parent.fullscreen(true);
        }
    },
    data() {
        return {
            license: license,
            data: getData(),
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

// Data
const data: any = [];

// Create the data
for (let j = 0; j < 500; j++) {
     data[j] = [];
     for (let i = 0; i < 20; i++) {
         data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
     }
}

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input #width type="text" value="800px" style="width:60px"/>
        <input #height type="text" value="400px" style="width:60px"/>
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
    }

    fullScreen() {
        this.worksheets[0].parent.fullscreen(true);
    }
}
```
 

### Goto to a Specific Data Grid Row

Efficiently reposition the viewport to focus on a particular row (y) or a specific cell (x, y), enhancing user navigation and data accessibility within the grid.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Go to row number 500" id="btn1" /></p>

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

document.getElementById("btn1").onclick = () => grid[0].goto(499);
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
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
 
