title: Worksheets Zoom In and Zoom Out
keywords: Jspreadsheet, zoom in and zoom out, data grid zoom 
description: This sections covers more about the worksheet zoom your spreadsheet data grids, the related methods and events. 

# Worksheet Zoom

In our latest version, we bring a new feature. The zoom compatibility. In this section you will learn how to initiate the spreadsheets with this feature on, or how to setup zoom after the sprdadsheet initialization.

## Documentation

### Methods

Programmatic methods to interact with the worksheet zoom state.

| Method          | Description                                               |
|-----------------|-----------------------------------------------------------|
| setZoom(number) | Apply zoom to the worksheet. Value from 0.1 to 1          |
| getZoom()       | Get the current zoom value. Default 1 for no zoom applied |



### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property      | Description                                             |
|---------------|---------------------------------------------------------|
| zoom: number  | Define the zoom state                                   |


## Examples

### Basic Freeze Columns Example.

How to define a start zoom state on the worksheet and change the zoom programatically.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br><br>

<p><input type="button" value="setZoom(0.8)" id="btn1" />
<input type="button" value="setZoom(1)" id="btn2" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: 600,
        tableHeight: 400,
        zoom: 0.8,
    }]
});

document.getElementById("btn1").onclick = () => spreadsheet[0].setZoom(0.8)
document.getElementById("btn2").onclick = () => spreadsheet[0].setZoom(1)
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[50, 20]} tableOverflow={true} tableWidth={"600"} tableHeight={"400"}
                           zoom={0.8}/>
            </Spreadsheet>
            <button onClick={() => spreadsheet.current[0].setZoom(0.8)}>setZoom(0.8)</button>
            <button onClick={() => spreadsheet.current[0].setZoom(1)}>setZoom(1)</button>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[50,20]" :tableOverflow="true" :tableWidth="600" :tableHeight="400" :zoom="0.8" />
    </Spreadsheet>
    <button @click="setZoomHalf">setZoom(0.8)</button>
    <button @click="setZoomOne">setZoom(1)</button>
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
        setZoomHalf: function () {
            this.$refs.spreadsheet.current[0].setZoom(0.8)
        },
        setZoomOne: function () {
            this.$refs.spreadsheet.current[0].setZoom(1)
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
        <button (click)="setZoomHalf()">setZoom(0.8)</button>
        <button (click)="setZoomOne()">setZoom(1)</button>`
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
                minDimensions: [50,20],
                tableOverflow: true,
                tableWidth: 600,
                tableHeight: 400,
                zoom: 0.8,
            }]
        });
    }

    setZoomHalf() {
        this.worksheets[0].setZoom(0.8)
    }

    setZoomOne() {
        this.worksheets[0].setZoom(1)
    }
}
```