title: Managing Editable States in Jspreadsheet Worksheets and Spreadsheets
keywords: Jspreadsheet, editable state control, read-only settings, spreadsheet customization, worksheet editing methods, cell protection techniques, data entry management
description: Delve into controlling the editable states of worksheets and spreadsheets in Jspreadsheet.

# Editable Spreadsheets and Worksheets

Explore how to adjust the editable states of individual worksheets or the entire spreadsheet for tailored data interaction control.

## Editable State Configuration

The editable property controls the editability of an individual worksheet or the entire spreadsheet.

### Settings

The editable property can be set during the initial configuration or adjusted programmatically at any time.

| Attribute         | Description                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| editable: boolean | Determines editability at the `worksheet level` or for the entire `spreadsheet`. |


### Managing Locked Spreadsheets

For enhanced compatibility with XLSX and other spreadsheet formats, the following attributes are provided:

| Method                         | Description                                                 |
|--------------------------------|-------------------------------------------------------------|
| locked?: boolean               | Controls the lock state of the worksheet. Defaults to null. |
| selectUnLockedCells?: boolean  | Enables selection of unlocked cells. Default: true.         |
| selectLockedCells?: boolean    | Enables selection of locked cells. Default: true.           |

### Example

#### Modifying Editable States

This example demonstrates how to toggle the current worksheet's editable state or the entire spreadsheet.

[See this example on Jsfiddle](https://jsfiddle.net/spreadsheet/v9s0eapc/)


```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/><br/>

<input type="button" value="Disable First Worksheet" id="btn1" />
<input type="button" value="Disable Spreadsheet" id="btn2" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Method to handle the editable state of the first worksheet
const worksheet = function(e) {
    // Toggle the editable state
    grid[0].options.editable = ! grid[0].options.editable;
    // Change button label
    e.target.value = grid[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
}

// Method to handle the editable state of the whole spreadsheet
const spreadsheet = function(e) {
    // Toggle the editable state
    grid[0].parent.config.editable = ! grid[0].parent.config.editable;
    // Change button label
    e.target.value = grid[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
}

// Create a new spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
    }]
});

document.getElementById("btn1").addEventListener('click', worksheet);
document.getElementById("btn2").addEventListener('click', spreadsheet);
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
    // Data
    const data = [
        ['Mazda', 2001, 2000, 1],
        ['Peugeot', 2010, 5000, 1],
        ['Honda Fit', 2009, 3000, 1],
        ['Honda CRV', 2010, 6000, 0],
    ]
    // Method to handle the editable state of the first worksheet
    const worksheet = (e) => {
        // Toggle the editable state
        spreadsheet.current[0].options.editable = !spreadsheet.current[0].options.editable;
        // Change button label
        e.value = spreadsheet.current[0].options.editable ? 'Disable First Worksheet' : 'Enable First Worksheet';
    }

    // Method to handle the editable state of the whole spreadsheet
    const all = (e) => {
        // Toggle the editable state
        spreadsheet.current[0].parent.config.editable = !spreadsheet.current[0].parent.config.editable;
        // Change button label
        e.value = spreadsheet.current[0].parent.config.editable ? 'Disable Spreadsheet' : 'Enable Spreadsheet';
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet data={data}/>
            </Spreadsheet>
            <input type="button" value="Disable First Worksheet" onClick={(e) => worksheet(e.target)}/>
            <input type="button" value="Disable Spreadsheet" onClick={(e) => all(e.target)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :tabs="true">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="Disable First Worksheet" @click="worksheet" />
    <input type="button" value="Disable Spreadsheet" @click="all" />
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
  // Method to handle the editable state of the first worksheet
  worksheet(e) {
    console.log(this.$refs.spreadsheet.current[0].options.editable);
    // Current state - treat undefined as true (editable by default)
    let editable = this.$refs.spreadsheet.current[0].options.editable !== false;
    // Toggle the editable state
    this.$refs.spreadsheet.current[0].options.editable = !editable;
    // Change button label
    e.target.value = this.$refs.spreadsheet.current[0].options.editable
      ? 'Disable First Worksheet'
      : 'Enable First Worksheet';
  },

  // Method to handle the editable state of the whole spreadsheet
  all(e) {
    // Current state - treat undefined as true (editable by default)
    let editable = this.$refs.spreadsheet.current[0].parent.config.editable !== false;
    // Toggle the editable state
    this.$refs.spreadsheet.current[0].parent.config.editable = !editable;
    // Change button label
    e.target.value = this.$refs.spreadsheet.current[0].parent.config.editable
      ? 'Disable Spreadsheet'
      : 'Enable Spreadsheet';
  },
},
data() {
  // Data
  const data = [
    ['Mazda', 2001, 2000, 1],
    ['Peugeot', 2010, 5000, 1],
    ['Honda Fit', 2009, 3000, 1],
    ['Honda CRV', 2010, 6000, 0],
  ];

  return {
    data,
    license,
  };
},
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div>
        <input type="button" value="Disable First Worksheet" #btn1 (click)="worksheet(btn1)" />
        <input type="button" value="Disable Spreadsheet" #btn2 (click)="all(btn2)" />`,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];
  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      tabs: true,
      worksheets: [
        {
          data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
          ],
        },
      ],
    });
  }

  // Method to handle the editable state of the first worksheet
  worksheet(e: HTMLInputElement) {
    if (this.worksheets)
      // Toggle the editable state
      this.worksheets[0].options.editable =
        !this.worksheets[0].options.editable;
    // Change button label
    e.value = this.worksheets[0].options.editable
      ? 'Disable First Worksheet'
      : 'Enable First Worksheet';
  }

  // Method to handle the editable state of the whole spreadsheet
  all(e: HTMLInputElement) {
    // Toggle the editable state
    this.worksheets[0].parent.config.editable =
      !this.worksheets[0].parent.config.editable;
    // Change button label
    e.value = this.worksheets[0].parent.config.editable
      ? 'Disable Spreadsheet'
      : 'Enable Spreadsheet';
  }
}
```

## Other related features

- [Data Grid Read-Only Cells](/docs/read-only)

 
