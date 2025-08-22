title: Jspreadsheet History: Undo and Redo Functionality
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like history, undo, redo, Ctrl+Z, Ctrl+Y, spreadsheet action history, history changes, spreadsheet updates, history of actions, worksheet undo, worksheet redo, data grid revision history, spreadsheet change tracking, version control in Jspreadsheet, history log for data grid, historical changes in Jspreadsheet, undo and redo actions in Jexcel, tracking spreadsheet updates, revision control in JavaScript data grid, data grid state history, Jspreadsheet modification history
description: Discover the powerful history functionality in Jspreadsheet that automatically tracks changes in your data grid. Undo (Ctrl+Z) and redo (Ctrl+Y) actions effortlessly, navigate the history of changes, restore previous states, and ensure data integrity. Experience the convenience and reliability of Jspreadsheet's history feature for improved workflow.

# History tracker

The History tracker in JSS automatically logs all changes made to the sheet. So, the user can undo (CTRL+Z) their actions and restore the sheet to a previous state or redo (CTRL+Y) their changes. This feature provides valuable safety for users, allowing them to restore changes and prevent losing their work. 

> **If you are migrating from previous versions**  The new JSS version 10 significantly improves the history of changes. The change tracker is now decoupled from a specific grid instance and will track changes across all sheets on the screen. The new feature aligns the changes-tracking capabilities with other spreadsheet applications, allowing for safer cross-worksheet operations and providing a more comprehensive history of changes made to the worksheets available on the screen. 

## Documentation

### Methods

The undo and redo methods are normally invoked by the CTRL+Z, CTRL+Y keyboard shortcut. The following methods can be called programmatically, as follows:

| Method            | Description                                                                                |
| ------------------|--------------------------------------------------------------------------------------------|
| history.undo()    | Undo the last spreadsheet changes.<br/>`jspreadsheet.history.undo() : void`                |
| history.redo()    | Redo the most recent spreadsheet changes.<br/>`jspreadsheet.history.redo() : void`         |
| history.reset()   | Remove all history entries.<br/>`jspreadsheet.history.reset() : void`                      |
| **Advance usage** |
| history(object)   | Add a new entry on the history tracker.<br/>`jspreadsheet.history(changes: Object) : void` |

 

### Events

Events related to the history changes tracker.

| Event  | Description                                                                                                                                                         |
| -------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onredo | `onredo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |
| onundo | `onundo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |

 

### Interface

The history tracker interface is composed of the following attributes:

| Event              | Description                                                              |
| -------------------|--------------------------------------------------------------------------|
| index: number;     | History index cursor                                                     |
| actions: [];       | History items                                                            |
| cascade: boolean;  | When true the next item is cascaded in the same existing history element |
| ignore: boolean;   | When true no history will be added to the tracker                        |
| progress: string;  | Tell if a history process is ongoing.                                    |
| undo: () => void;  | Undo last action                                                         |
| redo: () => void;  | Redo most recent action                                                  |
| reset: () => void; | Reset history tracker                                                    |

 

## Examples

### Controlling the changes programmatically

As explained above, the history actions are available on the spreadsheet level. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<br/>
<input type="button" value="Undo" id="undobtn" />
<input type="button" value="Redo" id="redobtn" />
<input type="button" value="Reset" id="resetbtn" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8, 8],
    }],
});

document.getElementById("undobtn").onclick = () => jspreadsheet.history.undo()
document.getElementById("redobtn").onclick = () => jspreadsheet.history.redo()
document.getElementById("resetbtn").onclick = () => jspreadsheet.history.reset()
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[8, 8]}/>
            </Spreadsheet>
            <input type="button" value="Undo" onClick={() => jspreadsheet.history.undo()}/>
            <input type="button" value="Redo" onClick={() => jspreadsheet.history.redo()}/>
            <input type="button" value="Reset" onClick={() => jspreadsheet.history.reset()}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[8,8]" />
    </Spreadsheet>
    <input type="button" value="Undo" @click="jspreadsheet.history.undo()" />
    <input type="button" value="Redo" @click="jspreadsheet.history.redo()" />
    <input type="button" value="Reset" @click="jspreadsheet.history.reset()" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            license,
            jspreadsheet,
        }
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

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type="button" value="Undo" (click)="jspreadsheet.history.undo()" />
        <input type="button" value="Redo" (click)="jspreadsheet.history.redo()" />
        <input type="button" value="Reset" (click)="jspreadsheet.history.reset()" />`,
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
                minDimensions: [8, 8],
            }],
        });
    }
}
```
 

 

## Releases notes

### Differences from version 9

As previously mentioned, the history tracker in JSS version 10 can register changes across all spreadsheets on the screen, regardless of the worksheet instance. Therefore, the syntax to access this feature need revision to the following:

| Attribute                | Description                                |
| -------------------------|--------------------------------------------|
| worksheet.resetHistory() |  Please use `jspreadsheet.history.reset()` |
| worksheet.setHistory()   |  Please use `jspreadsheet.history()`       |


