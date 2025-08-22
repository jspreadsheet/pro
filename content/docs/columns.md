title: Spreadsheet Columns: Settings, Methods and Events
keywords: Jspreadsheet, column management, JavaScript spreadsheets, Excel-like columns, data grid customization, column settings, spreadsheet methods, column events
description: Dive into the comprehensive guide on managing spreadsheet columns in Jspreadsheet, covering column settings, programmable methods, and associated events for complete control and customization.

# Spreadsheet Columns

Column settings in a spreadsheet determine the behaviour of all cells within a column, including input data types and properties such as read-only status, data masks, and rendering options. This section provides a comprehensive overview of settings, events, and programmatic methods available in Jspreadsheet, designed to tailor the spreadsheet functionality to specific application requirements. 
 

## Documentation

### Methods

Below are the methods for programmatically interacting with spreadsheet columns.

| Method            | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| autoWidth         | Resize the given column numbers based on their content.<br/>`autoWidth(columns: number[]) => void`                                                                                                                                                                                                                                                                                                       |
| getWidth          | Get the width from one or all defined columns.<br/>`getWidth(colNumber?: Number) => number \| array`                                                                                                                                                                                                                                                                                                     |
| setWidth          | Set the column width.<br/>`setWidth(col: number\|number[], width: number\|number[]) => void`                                                                                                                                                                                                                                                                                                             |
| getColumn         | Get the column settings by number.<br/>`getColumn(colNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                          |
| getColumnIdByName | Get the column position number by name, when the data is a JSON.<br/>`getColumnIdByName(columnName: String) => Number`                                                                                                                                                                                                                                                                                   |
| getPrimaryKey     | Get a column in which the primaryKey property is defined as true.<br/>`getPrimaryKey() => mixed`                                                                                                                                                                                                                                                                                                         |
| moveColumn        | Change the position of one or more columns.<br/>`moveColumn(columnNumber: Number, newPositionNumber: Number, quantityOfColumns?: Number) => void`                                                                                                                                                                                                                                                        |
| insertColumn      | Create one or more new columns. <br/>@param {number\|Object[]} - number of columns or column definitions. <br/>@param {number?} columnNumber - The new column reference position. <br/>@param {boolean?} insertBefore - The new column(s) should be included before or after the columnNumber defined <br/>`insertColumn(columns?: Number\|Object[], position?: Number, insertBefore?: Boolean) => void` |
| deleteColumn      | Delete one or more columns. <br/>@param {number\|number[]} columns - Column number or list of column numbers to delete. <br/>@param {number?} numOfColumns - Number of columns to be excluded when the first argument is a number. <br/>`deleteColumn(columns: Number\|Number[], numOfColumns?: Number) => void`                                                                                         |
| showColumn        | Show a columns <br/>@param {number\|number[]} columns - Show the column by numbers. <br/>`showColumn(columns: Number\|Number[]) => void`                                                                                                                                                                                                                                                                 |
| hideColumn        | Hide a column by number. <br/>@param {number\|number[]} columns - Hide the column by numbers. <br/>`hideColumn(columns: Number\|Number[]) => void`                                                                                                                                                                                                                                                       |
| showIndex         | Show the index column for the spreadsheet.<br/>`showIndex() => void`                                                                                                                                                                                                                                                                                                                                     |
| hideIndex         | Hide the index column for the spreadsheet.<br/>`hideIndex() => void`                                                                                                                                                                                                                                                                                                                                     |
| getProperty       | Get the column settings by number.<br/>`getProperty(colNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                        |
| setProperty       | Set the column settings by number.<br/>`setProperty(colNumber: Number, properties: Object) => Object`                                                                                                                                                                                                                                                                                                    |

#### Adding a New Column

To insert a new column into the data grid, you can pass an array of objects, each object containing three properties outlined below. This approach allows for the creation of multiple columns in a single operation.

| Method          | Description                                      |
| ----------------|--------------------------------------------------|
| data: any[]     | Array with the column data                       |
| column: number  | The index where the new column will be inserted. |
| options: object | An object specifying the column's attributes.    |

##### Example

To add a new column at the beginning of the grid:

{.ignore}
```javascript
worksheet.insertColumn([
    {
        data: [1,2,3],
        column: 0,
        options: {
            type: 'calendar',
            title: 'My new column'
        }
    }
]);
```

### Events

There are several events related to the column in your spreadsheet. There are a few `onbefore` events you can use to intercept, validate or cancel a user action.

| Event                    | Description                                                                                                                                                                                                |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreatecolumn           | When a new column is created.<br/> `oncreatecolumn(worksheet: Object, columnNumber: number, td: HTMLElement, options: Object)`                                                                             |
| onbeforeinsertcolumn     | Before a new column is inserted. Return false to cancel the user action.<br/> `onbeforeinsertcolumn(worksheet: Object, columns: Object[]) => Boolean \| Object[] \| void`                                  |
| oninsertcolumn           | After a new column is inserted.<br/> `oninsertcolumn(worksheet: Object, column: Object[]) => void`                                                                                                         |
| onbeforedeletecolumn     | Before a column is excluded. Return false to cancel the user action.<br/> `onbeforedeletecolumn(worksheet: Object, cols: Number[]) => boolean \| Number[] \| void`                                         |
| ondeletecolumn           | After a column is excluded.<br/> `ondeletecolumn(worksheet: Object, cols: Number[]) => void`                                                                                                               |
| onbeforemovecolumn       | Before a column is moved to a new position. Return false to cancel the user action.<br/> `onbeforemovecolumn(worksheet: Object, origin: Number, destination: Number, quantity: Number) => boolean \| void` |
| onmovecolumn             | After a column is moved to a new position.<br/> `onmovecolumn(worksheet: Object, origin: Number, destination: Number, quantity: Number) => void`                                                           |
| onresizecolumn           | After a column width change for one or more columns.<br/> `onresizecolumn(worksheet: Object, column: Mixed, width: Mixed, oldWidth: Mixed) => void`                                                        |
| onchangecolumnvisibility | When the visibility of cols changes.<br/> `onchangecolumnvisibility(worksheet: Object, state: boolean: affected: []]) => void`                                                                             |

 

### Initial Settings

The following column-related properties are available through the initialization of the online spreadsheet.

| Property                         | Description                                                                                   |
| ---------------------------------|-----------------------------------------------------------------------------------------------|
| allowInsertColumn: boolean       | Enable the user to enter new columns. `Default: true`                                         |
| allowManualInsertColumn: boolean | A new column is added when the user presses the tab key in the last column. `Default: true`   |
| allowDeleteColumn: boolean       | Allow the user to delete columns. `Default: true`                                             |
| allowRenameColumn: boolean       | Allow the user to rename columns. `Default: true`                                             |
| columnDrag: boolean              | Allow the user to change the position of one column by dragging and dropping. `Default: true` |
| columnSorting: boolean           | Allow the user to sort columns. `Default: true`                                               |
| columnResize: boolean            | Allow the user to resize columns. `Default: true`                                             |
| defaultColWidth: number          | The default column width. `Default: 100px`                                                    |
| defaultColAlign: string          | The default column text alignment. Default: center.                                           |
| minSpareCols: number             | The mandatory number of blank columns at the end of the spreadsheet. `Default: none.`         |


### Available properties

Please bear in mind that each column type can hold specific properties. The following are the most commonly available.

| Property              | Description                                                                                                                               |
| ----------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | Define the type of editor to use for the column. Can be a string to define a native editor, or a method to define a custom editor plugin. |
| title                 | The title of the column.                                                                                                                  |
| name                  | The name or path of a property when the data is a JSON object.                                                                            |
| tooltip               | Define the tooltip text to display on mouseover for the column header.                                                                    |
| width                 | The width of the column.                                                                                                                  |
| visible               | Whether the column is visible.                                                                                                            |
| align                 | The alignment of the column content. `Default: center.`                                                                                   |
| filterOptions         | A method to overwrite the column definitions in real-time just before the column is edited.                                               |
| url                   | The URL to load items from for the dropdown in this column.                                                                               |
| source                | The items to show in the dropdown or autocomplete.                                                                                        |
| autocomplete          | Whether the column is an autocomplete field.                                                                                              |
| multiple              | Whether the dropdown or autocomplete can accept multiple options.                                                                         |
| delimiter             | The delimiter to use for separating multiple dropdown options. `Default: ";".`                                                            |
| mask                  | The input mask to apply to the data cell.                                                                                                 |
| decimal               | The character to use as the decimal separator.                                                                                            |
| truncate              | The maximum number of characters to display in the cell before truncating.                                                                |
| disabledMaskOnEdition | Whether to disable the mask when editing.                                                                                                 |
| render                | A renderer method or rule for the cell content.                                                                                           |
| format                | The format of the date or numbers in the cell. `Default for the calendar: "DD/MM/YYYY".`                                                  |
| primaryKey            | Whether the column is a primary key.                                                                                                      |
| options               | Extended configuration for the column.                                                                                                    |
| readOnly              | Whether the column is read-only.                                                                                                          |
| process               | Whether to process the raw data when copying or downloading. `Default: true.`                                                             |
| autoCasting           | Whether to try to cast numbers from a cell text. `Default: true.`                                                                         |
| shiftFormula          | Whether to shift the formula when copying and pasting. This option is only valid for custom column types. Default: false.                 |
| wrap                  | Whether to wrap the text in the column.                                                                                                   |
| rotate                | The rotation angle for the text value, between -90 and 90. `Default: null.`                                                               |
| zebra                 | Whether to apply CSS odd-even background color to the column. `Default: false.`                                                           |
| group                 | The number of columns to group together.                                                                                                  |
| state                 | State of the column group.                                                                                                                |

 

## Examples

### Render method

The render method can intercept and modify the visible data before its insertion into a grid cell. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Adding an arbitrary number leading zeros.
let pad = function(cell, value, x, y, instance, options) {
    if (value || Number(value)) {
        let size = options.digits||0;
        value = value.toString();
        while (value.length < size) {
            value = "0" + value;
        }
        cell.innerText = value;
    }
}

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        data: [[1]],
        minDimensions: [6,6],
        columns: [{ render: pad, digits: 6 }]
    }],
});
</script>
</html>
```

```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Adding an arbitrary number leading zeros.
const pad = (cell, value, x, y, instance, options) => {
    if (value !== '') {
        let size = options.digits || 0;
        value = value.toString();
        while (value.length < size) {
            value = "0" + value;
        }
        cell.innerText = value;
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [[1]];
    // Columns
    const columns = [
        {render: pad, digits: 6}
    ];

    // Render component
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

// Adding an arbitrary number leading zeros.
const pad = (cell, value, x, y, instance, options) => {
    if (value !== '') {
        let size = options.digits||0;
        value = value.toString();
        while (value.length < size) {
            value = "0" + value;
        }
        cell.innerText = value;
    }
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [[1]];
        // Columns
        const columns = [
            { render: pad, digits: 6 }
        ];

        return {
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Adding an arbitrary number leading zeros.
const pad = (cell: any, value: any, x: any, y: any, instance: any, options: any) => {
    if (value || Number(value)) {
        let size = options.digits||0;
        value = value.toString();
        while (value.length < size) {
            value = "0" + value;
        }
        cell.innerText = value;
    }
}

// Create component
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
            tabs: true,
            toolbar: true,
            worksheets: [{
                data: [[1]],
                minDimensions: [6,6],
                // @ts-ignore
                columns: [{ render: pad, digits: 6 }]
            }],
        });
    }
}
```

### Programmatic methods

A basic spreadsheet and a few programmatic methods available. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/><br/>

<input type="button" value="Insert a new blank column at the end" id="btn1" /><br/><br/>
<input type="button" value="Insert two new blank columns at the beginning" id="btn2" /><br/><br/>
<input type="button" value="Click to insert a new column with pre-populated values at the end of the table" id="btn3" /><br/><br/>
<input type="button" value="Click to delete the last column" id="btn4" /><br/><br/>
<input type="button" value="Click to move the first column to the third position" id="btn5" /><br/><br/>
<input type="button" value="Hide the first column" id="btn6" /><br/><br/>
<input type="button" value="Show the first column" id="btn7" /><br/><br/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ]
    }],
});

document.getElementById('btn1').onclick = function() { worksheets[0].insertColumn(); };
document.getElementById('btn2').onclick = function() { worksheets[0].insertColumn(2, 0, 1); };
document.getElementById('btn3').onclick = function() { worksheets[0].insertColumn([{ data: ['0.99', '1.22', '3.11', '2.21']}]); };
document.getElementById('btn4').onclick = function() { worksheets[0].deleteColumn(); };
document.getElementById('btn5').onclick = function() { worksheets[0].moveColumn(0, 2); };
document.getElementById('btn6').onclick = function() { worksheets[0].hideColumn(0); };
document.getElementById('btn7').onclick = function() { worksheets[0].showColumn(0); };
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
    // Data
    const data = [
        ['US', 'Cheese', 1000 ],
        ['CA', 'Apples', 1200 ],
        ['CA', 'Carrots', 2000 ],
        ['BR', 'Oranges', 3800 ],
    ];
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} />
            </Spreadsheet>
            <li onClick={() => spreadsheet.current[0].insertColumn()}>
                Click to insert a new blank column at the end of the table
            </li>
            <li onClick={() => spreadsheet.current[0].insertColumn(2, 0, 1)}>
                Click to insert two new blank columns at the beginning of the table
            </li>
            <li onClick={() => spreadsheet.current[0].insertColumn([{ data: ['0.99', '1.22', '3.11', '2.21' ]}])}>
                Click to insert a new column with pre-populated values at the end of the table
            </li>
            <li onClick={() => spreadsheet.current[0].deleteColumn()}>
                Click to delete the last column
            </li>
            <li onClick={() => spreadsheet.current[0].moveColumn(0, 2)}>
                Click to move the first column to the third position
            </li>
            <li onClick={() => spreadsheet.current[0].hideColumn(0)}>
                Hide the first column
            </li>
            <li onClick={() => spreadsheet.current[0].showColumn(0)}>
                Show the first column
            </li>
        </>
    );
}
```
```vue
<template>
  <div>
    <Spreadsheet ref="spreadsheet" :license="license">
      <Worksheet :data="data" />
    </Spreadsheet>
    <ul>
      <li @click="insertColumnAtEnd">
        Click to insert a new blank column at the end of the table
      </li>
      <li @click="insertColumnsAtBeginning">
        Click to insert two new blank columns at the beginning of the table
      </li>
      <li @click="insertColumnWithData">
        Click to insert a new column with pre-populated values at the end of the
        table
      </li>
      <li @click="deleteLastColumn">Click to delete the last column</li>
      <li @click="moveFirstColumnToThird">
        Click to move the first column to the third position
      </li>
      <li @click="hideFirstColumn">Hide the first column</li>
      <li @click="showFirstColumn">Show the first column</li>
    </ul>
  </div>
</template>

<script>
import { Spreadsheet, Worksheet } from '@jspreadsheet/vue';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

const license = '###license###';

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  data() {
    // Data
    const data = [
      ['US', 'Cheese', 1000],
      ['CA', 'Apples', 1200],
      ['CA', 'Carrots', 2000],
      ['BR', 'Oranges', 3800],
    ];
    return {
      data,
      license,
    };
  },
  methods: {
    // Helper method to get spreadsheet instance
    getSpreadsheetInstance() {
      return this.$refs.spreadsheet?.current?.[0];
    },

    insertColumnAtEnd() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.insertColumn();
      }
    },
    insertColumnsAtBeginning() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.insertColumn(2, 0, 1);
      }
    },
    insertColumnWithData() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.insertColumn([{ data: ['0.99', '1.22', '3.11', '2.21'] }]);
      }
    },
    deleteLastColumn() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.deleteColumn();
      }
    },
    moveFirstColumnToThird() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.moveColumn(0, 2);
      }
    },
    hideFirstColumn() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.hideColumn(0);
      }
    },
    showFirstColumn() {
      const spreadsheet = this.getSpreadsheetInstance();
      if (spreadsheet) {
        spreadsheet.showColumn(0);
      }
    },
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  '###license###'
);

// Create component
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div>
        <ul>
            <li (click)="insertColumnAtEnd()">
                Click to insert a new blank column at the end of the table
            </li>
            <li (click)="insertColumnsAtBeginning()">
                Click to insert two new blank columns at the beginning of the table
            </li>
            <li (click)="insertColumnWithData()">
                Click to insert a new column with pre-populated values at the end of the table
            </li>
            <li (click)="deleteLastColumn()">
                Click to delete the last column
            </li>
            <li (click)="moveFirstColumnToThird()">
                Click to move the first column to the third position
            </li>
            <li (click)="hideFirstColumn()">
                Hide the first column
            </li>
            <li (click)="showFirstColumn()">
                Show the first column
            </li>
        </ul>`,
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
      toolbar: true,
      worksheets: [
        {
          data: [
            ['US', 'Cheese', 1000],
            ['CA', 'Apples', 1200],
            ['CA', 'Carrots', 2000],
            ['BR', 'Oranges', 3800],
          ],
        },
      ],
    });
  }

  // Helper method to get the first worksheet
  private getWorksheet() {
    return this.worksheets?.[0];
  }

  insertColumnAtEnd() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.insertColumn();
    }
  }

  insertColumnsAtBeginning() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.insertColumn(2, 0, true);
    }
  }

  insertColumnWithData() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      // @ts-ignore
      worksheet.insertColumn([{ data: ['0.99', '1.22', '3.11', '2.21'] }]);
    }
  }

  deleteLastColumn() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      // @ts-ignore
      worksheet.deleteColumn();
    }
  }

  moveFirstColumnToThird() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.moveColumn(0, 2);
    }
  }

  hideFirstColumn() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.hideColumn(0);
    }
  }

  showFirstColumn() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.showColumn(0);
    }
  }
}
```
 

 

### Intercept the new column

The following example demonstrates the usage of the `onbeforeinsertcolumn` event to modify the configuration of a newly created column by including default data in each new column. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/>

<p><input type="button" value="Insert a new blank column at the end" id="btn1" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
    }],
    onbeforeinsertcolumn: function(worksheet, columns) {
        console.log('intercepting the new column and adding data to it..')
        return columns.map(function(v) {
            return { ...v, data:[1,2,3] }
        });
    }
});

document.getElementById('btn1').onclick = function() { worksheets[0].insertColumn(); };
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
  // Spreadsheet array of worksheets
  const spreadsheet = useRef();
  // Adding a new column event
  const onbeforeinsertcolumn = (worksheet, columns) => {
    return columns.map(function (v) {
      return { ...v, data: [1, 2, 3] };
    });
  };

  const insertCol = () => {
    spreadsheet.current[0].insertColumn();
  };

  // Render component
  return (
    <>
      <Spreadsheet
        ref={spreadsheet}
        license={license}
        onbeforeinsertcolumn={onbeforeinsertcolumn}
      >
        <Worksheet minDimensions={[4, 4]} />
      </Spreadsheet>
      <p>
        <button onClick={insertCol}>
          Insert a new blank column at the end
        </button>
      </p>
    </>
  );
}
```
```vue
<template>
  <Spreadsheet
    ref="spreadsheet"
    :license="license"
    :onbeforeinsertcolumn="onbeforeinsertcolumn"
  >
    <Worksheet :minDimensions="[4, 4]" />
  </Spreadsheet>
  <button @click="insertCol">Insert a new blank column at the end</button>
</template>

<script>
import { Spreadsheet, Worksheet } from '@jspreadsheet/vue';
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
    // Adding a new column event
    const onbeforeinsertcolumn = (worksheet, columns) => {
      return columns.map(function (v) {
        return { ...v, data: [1, 2, 3] };
      });
    };

    return {
      onbeforeinsertcolumn,
      license,
    };
  },
  methods: {
    insertCol: function () {
      this.$refs.spreadsheet.current[0].insertColumn();
    },
  },
};
</script>

```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
  selector: 'app-root',
  template: `
        <div #spreadsheet></div>
        <button (click)="insertCol()">Insert a column at the end</button>
    `,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];
  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          minDimensions: [4, 4],
        },
      ],
      // @ts-ignore
      onbeforeinsertcolumn: function (worksheet, columns) {
        return columns.map(function (v) {
          return { ...v, data: [1, 2, 3] };
        });
      },
    });
  }

  // Helper method to get the first worksheet
  private getWorksheet() {
    return this.worksheets?.[0];
  }

  // New method based on Vue example
  insertCol() {
    const worksheet = this.getWorksheet();
    if (worksheet) {
      worksheet.insertColumn();
    }
  }
}
```
 
