title: Managing Rows: Methods, Events, and Settings
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like rows, spreadsheet rows, data table rows, row management, add rows, delete rows, move rows, row manipulation, row events, row settings, row documentation
description: Explore row management in Jspreadsheet, including adding, deleting, and moving rows and customizing their settings. Discover the methods, events, and settings that enable you to create dynamic customizations and integrations in your data grid application.

# Spreadsheet Rows

Spreadsheet row settings define the behaviours and attributes of rows and their cells, including unique identifiers, row height, styling, and cell properties like read-only status. This section covers methods, events, and settings related to the data grid rows.


{.secondary}
> ### What's new in Version 11?
>
> * **Row style**: It is possible to define the style index for all cells in the same row.

## Documentation

### Methods

The following methods interact with the rows programmatically.

| Method    | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeight | Get the row height.<br/>`getHeight(rowNumber?: Number) => number`                                                                                                                                                                                                                                                                                                                                                                    |
| setHeight | Set the row height.<br/>`setHeight(rowNumber: Number, height: Number) => void`                                                                                                                                                                                                                                                                                                                                                       |
| getRow    | Get the row settings by number.<br/>`getRow(rowNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                                                            |
| moveRow   | Change the position of a row.<br/>`moveRow(rowNumber: Number, newPositionNumber: Number) => void`                                                                                                                                                                                                                                                                                                                                    |
| insertRow | Create one or multiple new rows. <br/>@param {number\|number[]} - number of rows or rows definitions. <br/>@param {number?} rowNumber - The new row reference position \| null refers to the last row in the spreadsheet <br/>@param {boolean?} insertBefore - The new row(s) should be included before or after the rowNumber defined <br/>`insertRow(rows?: Number\|Object[], rowNumber?: Number, insertBefore?: Boolean) => void` |
| deleteRow | Delete one or more rows. <br/>@param {number\|number[]} rowNumber - Row number or list of row numbers to delete. <br/>@param {number} numOfRows - Number of rows to be excluded from the define row reference <br/>`deleteRow(rowNumber: Number\|Number[], numOfRows?: Number) => void;`                                                                                                                                             |
| showRow   | Show a row by number. <br/>@param {number} rowNumber - Show the row by its number <br/>`showRow(rowNumber: Number) => void`                                                                                                                                                                                                                                                                                                          |
| hideRow   | Hide a row by number. <br/>@param {number} rowNumber - Hide the row by its number <br/>`hideRow(rowNumber: Number) => void`                                                                                                                                                                                                                                                                                                          |

 

### Events

There are several events related to the row in your spreadsheet. There are a few <b>onbefore</b> events to intercept, validate or cancel a user action.

| Event                 | Description                                                                                                                                                                       |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreaterow           | After a new row is inserted.<br/>`oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement)`                                                                             |
| onbeforeinsertrow     | Before a new row is inserted. Return false to cancel the user action.<br/>`onbeforeinsertrow(worksheet: Object, rows: Object[]) => Boolean \| Object[] \| void`                   |
| oninsertrow           | After a new row is inserted.<br/>`oninsertrow(worksheet: Object, rows: Object[]) => void`                                                                                         |
| onbeforedeleterow     | Before a row is deleted. Return false to cancel the user action.<br/>`onbeforedeleterow(worksheet: Object, rows: Number[]) => Number[] \| Boolean \| void`                        |
| ondeleterow           | After a row is deleted.<br/>`ondeleterow(worksheet: Object, rows: Number[]) => void`                                                                                              |
| onbeforemoverow       | Before a row is moved to a new position. Return false to cancel the user action.<br/>`onbeforemoverow(worksheet: Object, origin: Number, destination: Number) => void \| boolean` |
| onmoverow             | After a row is moved to a new position.<br/>`onmoverow(worksheet: Object, origin: Number, destination: Number) => void`                                                           |
| onresizerow           | After the height changes for one or more rows.<br/>`onresizerow(worksheet: Object, row: Mixed, height: Mixed, oldHeight: Mixed) => void`                                          |
| onchangerowvisibility | When the visibility of rows changes.<br/>`onchangerowvisibility(worksheet: Object, state: boolean: affected: []]) => void`                                                        |

 

### Initial Settings

The following row-related properties are available through the spreadsheet initialization.

| Property                      | Description                                                                                              |
| ------------------------------|----------------------------------------------------------------------------------------------------------|
| allowInsertRow: boolean       | Enable the user to enter new rows. `Default: true`                                                       |
| allowManualInsertRow: boolean | A new row is automatically inserted when the user presses the enter key in the last row. `Default: true` |
| allowDeleteRow: boolean       | Allow the user to delete rows. `Default: true`                                                           |
| rowDrag: boolean              | Allow the user to change the position of one row by dragging and dropping. `Default: true`               |
| rowResize: boolean            | Allow the user to resize rows. `Default: true`                                                           |
| defaultRowHeight: number      | The default row height.                                                                                  |
| minSpareRows: number          | The mandatory number of blank rows at the end of the spreadsheet. `Default: none.`                       |

 

### Available properties

It is possible to initialize the spreadsheet with a custom id, text and height using the following properties:

| Property          | Description                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------|
| id: number        | Unique identifier for the row, which can be used to synchronize the content with a database. |
| height: number    | The height of the row in pixels.                                                             |
| title: string     | The title or name of the row.                                                                |
| visible: boolean  | Determines whether the row is visible or not.                                                |
| style: number     | Define the style index for all cells in this row.                                            |
| group: number     | The number of rows that this row is grouped with.                                            |
| state: boolean    | The state of the row group (collapsed or expanded).                                          |
| readOnly: boolean | Determines whether the row is read-only or not.                                              |



## Examples

A basic spreadsheet with a few programmatic methods available. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/><br/>

<input type="button" value="Click to insert a new blank row at the end of the spreadsheet" id="btn1"><br/><br/>
<input type="button" value="Click to insert two new blank rows at the beginning of the spreadsheet" id="btn2"><br/><br/>
<input type="button" value="Click to insert a new row with pre-populated values at the end of the spreadsheet" id="btn3"><br/><br/>
<input type="button" value="Click to delete the last row" id="btn4"><br/><br/>
<input type="button" value="Click to move the first row to the third position" id="btn5"><br/><br/>
<input type="button" value="Hide the first row" id="btn6"><br/><br/>
<input type="button" value="Show the first row" id="btn7"><br/><br/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ],
        worksheetName: 'Row management',
    }],
});

document.getElementById("btn1").onclick = () => spreadsheet[0].insertRow();
document.getElementById("btn2").onclick = () => spreadsheet[0].insertRow(2, 0, 1);
document.getElementById("btn3").onclick = () => spreadsheet[0].insertRow([{ data: ['0.99', '1.22', '3.11', '2.21' ]}]);
document.getElementById("btn4").onclick = () => spreadsheet[0].deleteRow();
document.getElementById("btn5").onclick = () => spreadsheet[0].moveRow(0, 2);
document.getElementById("btn6").onclick = () => spreadsheet[0].hideRow(0);
document.getElementById("btn7").onclick = () => spreadsheet[0].showRow(0);
</script>
</html>
```
```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['US', 'Cheese', 1000],
        ['CA', 'Apples', 1200],
        ['CA', 'Carrots', 2000],
        ['BR', 'Oranges', 3800],
    ];
    // Render component
    return (
        <>
          <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet minDimensions={[6, 6]} data={data} worksheetName="Row management" />
          </Spreadsheet>
    
          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => spreadsheet.current[0].insertRow()}
              style={{ marginRight: "5px" }}
            >
              Click to insert a new blank row at the end of the spreadsheet
            </button>
    
            <button
              onClick={() => spreadsheet.current[0].insertRow(2, 0, 1)}
              style={{ marginRight: "5px" }}
            >
              Click to insert two new blank rows at the beginning of the spreadsheet
            </button>
    
            <button
              onClick={() =>
                spreadsheet.current[0].insertRow([
                  { data: ["0.99", "1.22", "3.11", "2.21"] },
                ])
              }
              style={{ marginRight: "5px" }}
            >
              Click to insert a new row with pre-populated values at the end of the spreadsheet
            </button>
    
            <button
              onClick={() => spreadsheet.current[0].deleteRow()}
              style={{ marginRight: "5px" }}
            >
              Click to delete the last row
            </button>
    
            <button
              onClick={() => spreadsheet.current[0].moveRow(0, 2)}
              style={{ marginRight: "5px" }}
            >
              Click to move the first row to the third position
            </button>
    
            <button
              onClick={() => spreadsheet.current[0].hideRow(0)}
              style={{ marginRight: "5px" }}
            >
              Hide the first row
            </button>
    
            <button onClick={() => spreadsheet.current[0].showRow(0)}>
              Show the first row
            </button>
          </div>
        </>
      );
    }
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license">
    <Worksheet :data="data" />
  </Spreadsheet>

  <div style="margin-top: 15px;">
    <button @click="$refs.spreadsheet.current[0].insertRow()" style="margin: 5px;">
      Click to insert a new blank row at the end of the spreadsheet
    </button>

    <button @click="$refs.spreadsheet.current[0].insertRow(2, 0, 1)" style="margin: 5px;">
      Click to insert two new blank rows at the beginning of the spreadsheet
    </button>

    <button
      @click="$refs.spreadsheet.current[0].insertRow([{ data: ['0.99', '1.22', '3.11', '2.21'] }])"
      style="margin: 5px;"
    >
      Click to insert a new row with pre-populated values at the end of the spreadsheet
    </button>

    <button @click="$refs.spreadsheet.current[0].deleteRow()" style="margin: 5px;">
      Click to delete the last row
    </button>

    <button @click="$refs.spreadsheet.current[0].moveRow(0, 2)" style="margin: 5px;">
      Click to move the first row to the third position
    </button>

    <button @click="$refs.spreadsheet.current[0].hideRow(0)" style="margin: 5px;">
      Hide the first row
    </button>

    <button @click="$refs.spreadsheet.current[0].showRow(0)" style="margin: 5px;">
      Show the first row
    </button>
  </div>
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
        // Data
        const data = [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ];
        return {
            data,
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

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <ol class='example' style='cursor:pointer;'>
            <li><a (click)="this.worksheets[0].insertRow()">
                Click to insert a new blank row at the end of the spreadsheet
            </a></li>
            <li><a (click)="this.worksheets[0].insertRow(2, 0, true)">
                Click to insert two new blank rows at the beginning of the spreadsheet
            </a></li>
            <li><a (click)=" this.worksheets[0].insertRow([{ data: ['0.99', '1.22', '3.11', '2.21'], options: {}}])">
                 Click to insert a new row with pre-populated values at the end of the spreadsheet
            </a></li>
            <li><a (click)="this.worksheets[0].deleteRow(-1)">
                Click to delete the last row
            </a></li>
            <li><a (click)="this.worksheets[0].moveRow(0, 2)">
                Click to move the first row to the third position
            </a></li>
            <li><a (click)="this.worksheets[0].hideRow(0)">
                Hide the first row
            </a></li>
            <li><a (click)="this.worksheets[0].showRow(0)">
                Show the first row
            </a></li>
        </ol>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet!: ElementRef;
    worksheets!: jspreadsheet.worksheetInstance[];
  
    ngAfterViewInit() {
      this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
        worksheets: [
          {
            data: [
              ["US", "Cheese", 1000],
              ["CA", "Apples", 1200],
              ["CA", "Carrots", 2000],
              ["BR", "Oranges", 3800],
            ],
            worksheetName: "Row management",
          },
        ],
      });
    }
  }
```
 

 

### Intercept a new row action

The following example demonstrates the usage of the `onbeforeinsertrow` event to modify the configuration of a newly created rows by including default data in each new row. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Click to insert a new blank row at the end of the spreadsheet" id="btn1"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
    }],
    onbeforeinsertrow: function(worksheet, rows) {
        console.log('Intercepting row insertion and adding some data in it...')
        return rows.map(function(v) {
            return { ...v, data:[1,2,3] }
        });
    }
});

document.getElementById("btn1").onclick = () => spreadsheet[0].insertRow();
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
  const spreadsheet = useRef();

  // Intercepta a inserção de linha e adiciona dados nela
  const onbeforeinsertrow = (worksheet, rows) => {
    console.log("Intercepting row insertion and adding some data in it...");
    return rows.map((v) => {
      return { ...v, data: [1, 2, 3] };
    });
  };

  // Botão para inserir nova linha
  const insertRow = () => {
    if (spreadsheet.current) {
      spreadsheet.current[0].insertRow();
    }
  };

  return (
    <>
      <Spreadsheet
        ref={spreadsheet}
        license={license}
        onbeforeinsertrow={onbeforeinsertrow}
      >
        <Worksheet minDimensions={[4, 4]} />
      </Spreadsheet>

      <p>
        <input
          type="button"
          value="Click to insert a new blank row at the end of the spreadsheet"
          onClick={insertRow}
        />
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
        :onbeforeinsertrow="onbeforeinsertrow"
    >
        <Worksheet :minDimensions="[4,4]" />
    </Spreadsheet>

    <p>
        <input
            type="button"
            value="Click to insert a new blank row at the end of the spreadsheet"
            @click="insertRow"
        />
    </p>
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
            license,
        };
    },
    methods: {
        // Interceptando inserção de linha
        onbeforeinsertrow(worksheet, rows) {
            console.log("Intercepting row insertion and adding some data in it...");
            return rows.map((v) => {
                return { ...v, data: [1, 2, 3] };
            });
        },
        // Inserindo uma linha no final
        insertRow() {
            this.$refs.spreadsheet.current[0].insertRow();
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
    standalone: true,
    selector: "app-root",
    template: `
    <div #spreadsheet></div>
    <p><input type="button" value="Click to insert a new blank row at the end of the spreadsheet" (click)="handleClick()"></p>
`,
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
                minDimensions: [4,4],
            }],
            onbeforeinsertrow: function(worksheet, rows) {
                return rows.map(function(v) {
                    return { ...v, data:[1,2,3],options: {} }
                });
            }
        });
    }

    handleClick() {
        this.worksheets[0].insertRow()
    }
}
```
 
