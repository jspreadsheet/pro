title: Jspreadsheet Data Grid Notifications: Custom Alert Management for Enhanced User Experience
keywords: Jspreadsheet, Notifications API, Custom Alerts, User Interaction, Spreadsheet Alerts, Notification Interception, Web Spreadsheet, JavaScript Spreadsheet, Data Alerts, User Notification Customization
description: This documentation details the process for customizing notifications within Jspreadsheet data grid using onerror events. It provides a step-by-step approach to intercepting default alerts and implementing custom messages for enhanced data interaction. 

# Data Grid Notifications

This section explains using the `onerror` event in Jspreadsheet to customize the data grid notifications, better integrate with different application needs, and improve UI consistency.

## Documentation

The default notification on the most recent version uses the [jSuites toast plugin](https://jsuites.net/docs/javascript-toast).

### Events

| Shortcut    | Description                                          |
|-------------|------------------------------------------------------|
| *onerror*   | onerror(spreadsheet: object, result: object) => void |

### Default Errors and Translations

{.ignore}
```html
jspreadsheet.setDictionary({
    'Cursor not in the viewport': 'Le curseur n\'est pas dans la zone visible',
    'This column is part of a merged cell.': 'Cette colonne fait partie d\'une cellule fusionnée.',
    'This row is part of a merged cell': 'Cette ligne fait partie d\'une cellule fusionnée',
    'Please clear your search before perform this action': 'Veuillez effacer votre recherche avant d\'exécuter cette action',
    'Worksheet not found': 'Feuille de calcul introuvable',
})
```

## Examples

The next example shows how to customize the error messages from Jspreadsheet and present that to the user in a custom way.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Try to change page...' id="btn1" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
    }],
    onerror: function(spreadsheet, result) {
        // Customize the alerts
        jSuites.notification(result);
    }
});

document.getElementById("btn1").onclick = () => spreadsheet[0].page(1);
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    const onError = function (spreadsheet, result) {
        // Customize the alerts
        jSuites.notification(result);
    }

    // Render component
    return (<>
        <Spreadsheet ref={spreadsheet} license={license} onerror={onError}>
            <Worksheet minDimensions={[5, 5]}/>
        </Spreadsheet>
        <p><input type='button' value='Try to change page...' onClick={() => spreadsheet.current[0].page(1)}/></p>
    </>);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onerror="onError">
        <Worksheet :minDimensions="[5, 5]" />
    </Spreadsheet>
    <p><input type="button" value="Try to change page..." @click="changePage" /></p>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = "###license###";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        changePage: function() {
            this.$refs.spreadsheet.current[0].page(1)
        },
        onError: function(spreadsheet, result) {
            // Customize the alerts
            jSuites.notification(result);
        }
    },
    data() {
        // Data
        const data = [['101.00']];
        
        return {
            data,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import jSuites from "jsuites";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <p><input type='button' value='Try to change page...' (click)="changePage()" /></p>
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
            worksheets: [{
                minDimensions: [5,5],
            }],
            onerror: function(spreadsheet, result:any) {
                // Customize the alerts
                jSuites.notification(result);
            }
        });
    }

    changePage() {
        this.worksheets[0].page(1)
    }
}
```


