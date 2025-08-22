title: Creating and Managing Merged Cells
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, merged cells, data grid merged cells, react merged cells, excel-like merged cells, spreadsheet merged cells, merge cells functionality, merging cells in Jspreadsheet, managing merged cells, data grid cell merging, merged cells in JavaScript
description: Discover the Excel-like functionality of merging cells in Jspreadsheet. Explore the methods, events, and settings to add this powerful feature to your data grid worksheets, enhancing data organization and presentation.

# Merged cells

This section covers creating and managing merged cells in your online spreadsheets. 

## Documentation

### Methods

The following methods help to deal with the merged cells programmatically.

| Method           | Description                                                                                                                                                                                                                                                                                                                                                              |
| -----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setMerge**     | Set the defined merged cell by the number of columns and rows given.<br/>`setMerge(cells: String\|Object, colspan?: Number, rowspan?: number) : void`<br/>@param {string} cellName, for example A1, A2. Can be used as an object to apply multiple merge operations.<br/>@param {number?} colspan - Number of columns<br/>@param {number?} rowspan - Number of rows<br/> |
| **getMerge**     | Get a merged cell or all merge cells.<br/>`getMerge(cells?: String) : mixed`<br/>@param {string?} Cell name such as A1 or null to return all merged cells.<br/>@return {string\|null} - cell name or null for all cells with merge properties.                                                                                                                           |
| **removeMerge**  | Destroy the merged cells by the cell name.<br/>`removeMerge(cells: String\|Object) : null`<br/>@param {string\|Object} - Cell name, such as A1 or an object with all cell names. For example: { A1: true, D1: true }                                                                                                                                                     |
| **destroyMerge** | Destroy all merged cells<br/>`destroyMerge() : null`                                                                                                                                                                                                                                                                                                                     |

 

### Events

Spreadsheet merge cells related events.

| Method  | Description                                                           |
| --------|-----------------------------------------------------------------------|
| onmerge | `onmerge(worksheet: Object, newValue: Array, oldValue: Array) : void` |

 

### Initial Settings

The initial merge cells spreadsheet properties.

| Property          | Description                                                |
| ------------------|------------------------------------------------------------|
| mergeCells: array | Allow the user to define the initial default merged cells. |

 

#### Known limitations

Merged cells over hidden or frozen rows and columns can cause unexpected results. We expect to handle exceptions in future releases. 

## Examples

A basic example of how to initiate and programmatically change the merged cells definitions.

Open this [merged cells example](https://jsfiddle.net/spreadsheet/gLc0a1x2/) on JSFiddle.  

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><div id="log"></div></p>

<input type="button" value="setMerge('A3', 2, 3)" id="btn1" />
<input type="button" value="removeMerge('A3')" id="btn2" />
<input type="button" value="Get all merged cells" id="btn3" />
<input type="button" value="Destroy all merged" id="btn4" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
            ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
            ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
            ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
        ],
        columnDrag: true,
        worksheetName: 'Merged Cells',
        minDimensions: [50, 5000],
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
        columns: [
            {
                type: 'text',
                width: '300px',
                title: 'Model',
            },
            {
                type: 'text',
                width: '80px',
                title: 'Year',
            },
            {
                type: 'text',
                width: '100px',
                title: 'Price',
            },
            {
                type: 'calendar',
                width: '150px',
                title: 'Date',
                options: {
                    format: 'DD/MM/YYYY HH24:MI',
                    time: 1,
                }
            },
        ],
        mergeCells: {
            A1: [2, 2]
        }
    }]
});

document.getElementById("btn1").onclick = () => table[0].setMerge('A3', 2, 3);
document.getElementById("btn2").onclick = () => table[0].removeMerge('A3');
document.getElementById("btn3").onclick = () => {
    document.getElementById("log").innerHTML = JSON.stringify(table[0].getMerge());
}
document.getElementById("btn4").onclick = () => table[0].destroyMerge();
</script>
</html>
```

```jsx
import React, { useRef } from 'react';
import { Spreadsheet, Worksheet } from '@jspreadsheet/react';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

const license =
  '###license###';

  export default function App() {
    const spreadsheet = useRef();
    const log = useRef();
  
    const worksheets = [
      {
        data: [
          ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
          ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
          ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
          ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
        ],
        columnDrag: true,
        worksheetName: 'Merged Cells',
        minDimensions: [50, 5000],
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
        columns: [
          {
            type: 'text',
            width: '300px',
            title: 'Model',
          },
          {
            type: 'text',
            width: '80px',
            title: 'Year',
          },
          {
            type: 'text',
            width: '100px',
            title: 'Price',
          },
          {
            type: 'calendar',
            width: '150px',
            title: 'Date',
            options: {
              format: 'DD/MM/YYYY HH24:MI',
              time: 1,
            },
          },
        ],
        mergeCells: {
          A1: [2, 2],
        },
      },
    ];
  
    // Extracted functions
    const handleSetMerge = () => {
      spreadsheet.current[0].setMerge('A3', 2, 3);
    };
  
    const handleRemoveMerge = () => {
      spreadsheet.current[0].removeMerge('A3');
    };
  
    const handleGetAllMergedCells = () => {
      log.current.value = JSON.stringify(spreadsheet.current[0].getMerge());
    };
  
    const handleDestroyAllMerged = () => {
      spreadsheet.current[0].destroyMerge();
    };
  
    return (
      <>
        <Spreadsheet
          ref={spreadsheet}
          license={license}
          worksheets={worksheets}
        />
        <div ref={log}></div>
        <input
          type="button"
          value="setMerge('A3', 2, 3)"
          onClick={handleSetMerge}
        />
        <input
          type="button"
          value="removeMerge('A3')"
          onClick={handleRemoveMerge}
        />
        <input
          type="button"
          value="Get all merged cells"
          onClick={handleGetAllMergedCells}
        />
        <input
          type="button"
          value="Destroy all merged"
          onClick={handleDestroyAllMerged}
        />
      </>
    );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
  <div ref="log"></div>
  <input type="button" value="setMerge('A3', 2, 3)" @click="handleSetMerge" />
  <input type="button" value="removeMerge('A3')" @click="handleRemoveMerge" />
  <input
    type="button"
    value="Get all merged cells"
    @click="handleGetAllMergedCells"
  />
  <input
    type="button"
    value="Destroy all merged"
    @click="handleDestroyAllMerged"
  />
</template>

<script>
import { Spreadsheet, Worksheet } from '@jspreadsheet/vue';
import formula from '@jspreadsheet/formula-pro';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

const license =
  '###license###';

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  data() {
    const worksheets = [
      {
        data: [
          ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
          ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
          ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
          ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
        ],
        columnDrag: true,
        worksheetName: 'Merged Cells',
        minDimensions: [50, 5000],
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
        columns: [
          {
            type: 'text',
            width: '300px',
            title: 'Model',
          },
          {
            type: 'text',
            width: '80px',
            title: 'Year',
          },
          {
            type: 'text',
            width: '100px',
            title: 'Price',
          },
          {
            type: 'calendar',
            width: '150px',
            title: 'Date',
            options: {
              format: 'DD/MM/YYYY HH24:MI',
              time: 1,
            },
          },
        ],
        mergeCells: {
          A1: [2, 2],
        },
      },
    ];

    return {
      worksheets,
      license,
    };
  },
  methods: {
    handleSetMerge() {
      this.$refs.spreadsheet.current[0].setMerge('A3', 2, 3);
    },

    handleRemoveMerge() {
      this.$refs.spreadsheet.current[0].removeMerge('A3');
    },

    handleGetAllMergedCells() {
      this.$refs.log.value = JSON.stringify(
        this.$refs.spreadsheet.current[0].getMerge()
      );
    },

    handleDestroyAllMerged() {
      this.$refs.spreadsheet.current[0].destroyMerge();
    },
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extension
jspreadsheet.setExtensions({ formula });

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <div #log></div>
        <input type="button" value="setMerge('A3', 2, 3)" (click)="this.worksheets[0].setMerge('A3', 2, 3);" />
        <input type="button" value="removeMerge('A3')" (click)="this.worksheets[0].removeMerge('A3');" />
        <input type="button" value="Get all merged cells" (click)="getMerge()" />
        <input type="button" value="Destroy all merged" (click)="this.worksheets[0].destroyMerge();" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("log") log: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                data: [
                    ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
                    ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
                    ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
                    ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
                ],
                columnDrag: true,
                worksheetName: 'Merged Cells',
                minDimensions: [50, 5000],
                tableOverflow: true,
                tableWidth: '800px',
                tableHeight: '300px',
                columns: [
                    {
                        type: 'text',
                        width: '300px',
                        title: 'Model',
                    },
                    {
                        type: 'text',
                        width: '80px',
                        title: 'Year',
                    },
                    {
                        type: 'text',
                        width: '100px',
                        title: 'Price',
                    },
                    {
                        type: 'calendar',
                        width: '150px',
                        title: 'Date',
                        options: {
                            format: 'DD/MM/YYYY HH24:MI',
                            time: 1,
                        }
                    },
                ],
                mergeCells: {
                    A1: [2, 2]
                }
            }]
        });
    }

    getMerge() {
        this.log.nativeElement.innerHTML = JSON.stringify(this.worksheets[0].getMerge());
    }
}
```
 

 

## Batch operations

The batch operation enables you to apply with single command multiple merged operations.  

### Example


{.ignore}
```javascript
// To apply set merge in multiple cells at the same time
instance.setMerge({ A1: [2,2], E1: [2,2] });

// To remove merge in multiple cells at the same time
instance.removeMerge({ A1: true, E1: true });
```
 

## Release notes

### Differences from version 9


| **worksheet.updateMerge** |  This method is deprecated.                    |
| --------------------------|------------------------------------------------|
| **worksheet.merged**      |  Internal merge controllers have been updated. |


