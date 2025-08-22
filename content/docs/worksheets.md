title: Worksheets: Settings, Methods, and Events
keywords: Jspreadsheet, data grid, javascript, excel-like worksheets, spreadsheet, data tables, grid, worksheet events, worksheet support, Jspreadsheet worksheets, worksheet settings, worksheet methods, worksheet events, create worksheets, customize worksheets, track changes in worksheets, worksheet control, dynamic data grids, JavaScript data tables, worksheet customization, worksheet organization, interactive worksheets, data management
description: Learn how to set up and manage worksheets in Jspreadsheet programmatically. Explore various worksheet properties, settings, and efficient handling and customization techniques.

# Worksheets

Jspreadsheet offers the flexibility to customize your spreadsheet with multiple worksheets. You can config JSS to prevent or allow users from manipulating these worksheets by moving, renaming, or deleting them using the context menu. Moreover, you can create programmatic controls and monitor changes made in the spreadsheet through events. 


### What's new in Version 11?

Jspreadsheet V11 introduces a few key updates to enhance spreadsheet management:

* **[Namespaces](/docs/namespaces)**: Aids in organizing spreadsheet instances, facilitating cross calculations without name clashes.
* **Instances**: Use `getWorksheetInstanceByName` for retrieving worksheet instances.
* **global**: window.WORKSHEET_NAME is deprecated.


Please be aware of the updates introduced in the new version, as detailed below.
 
| Method                          | Description                                                                                                 |
|---------------------------------|-------------------------------------------------------------------------------------------------------------|
| *Removed*{.info-label .removed} | Removed: `instance.getWorksheet()`                                                                          |
| *Removed*{.info-label .removed} | Removed: `instance.getWorksheetInstance: (position: number)`. Use: `instance.parent.worksheets[position]`   |
| *New*{.info-label .new}         | Get the worksheet instance by worksheet name `instance.getWorksheetInstanceByName(worksheetName: string)`   |
| *New*{.info-label .new}         | Change worksheet visibility. `instance.setWorksheetState(index, state)`                                     |


## Documentation

### Methods

Available methods to interact programmatically with the worksheets.

| Property                                   | Description                                                                                                                                                           |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getWorksheet(object\|string)               | Get the worksheet position by worksheet object or by the worksheetId.<br/>`getWorksheet(worksheetIdent: worksheetInstance \| String) => Number`                       |
| getWorksheetName(number)                   | Get the worksheet name by index.<br/>`getWorksheetName(position?: Number) => String`                                                                                  |
| openWorksheet(number)                      | Open the worksheet by index.<br/>`openWorksheet(position?: Number) => void`                                                                                           |
| createWorksheet(object, number)            | Add a new worksheet to the online spreadsheet based on a given configuration.<br/>`createWorksheet(worksheetOptions: Object, position?: Number) => worksheetInstance` |
| deleteWorksheet(number)                    | Delete an existing worksheet by index.<br/>`deleteWorksheet(position?: Number) => void`                                                                               |
| renameWorksheet(number, string)            | Rename an existing worksheet by index.<br/>`renameWorksheet(position: Number, title: String) => void`                                                                 |
| moveWorksheet(number, number, boolean)     | Move the position of a worksheet.<br/>`moveWorksheet(from: Number, to: Number, ignoreDomUpdates?: Boolean) => void`                                                   |
| getWorksheetActive()                       | Get the current active worksheet number.<br/>`getWorksheetActive() => Number`                                                                                         |
| getWorksheetInstance(number)               | Get the worksheet instance by index<br/>`getWorksheetInstance(position: Number) => worksheetInstance`                                                                 |
| getWorksheetInstanceByName(string, string) | Get the worksheet instance by worksheet name<br>`getWorksheetInstanceByName(worksheetName: String, namespace?: String) => worksheetInstance`                          |
| setWorksheetState(number, boolean)         | Hide or show worksheets<br>`setWorksheetState(worksheetIndex: Number, state: Boolean) => void`                                                                        |

### Events

Available events related to the worksheets.

| Event                   | Description                                                                                                                                                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onopenworksheet         | `onopenworksheet(worksheet: Object, worksheetNumber: Number) : void`                                                                                                                                                 |
| onbeforecreateworksheet | `onbeforecreateworksheet(options: Object, worksheetNumber: Number) : object \| false \| void`<br>Intercept the creation of worksheets to cancel or define the configuration of the new worksheet. |
| oncreateworksheet       | `oncreateworksheet(worksheet: Object, worksheetOptions: Object, worksheetNumber: Number) : void`                                                                                                                     |
| onrenameworksheet       | `onrenameworksheet(worksheet: Object, worksheetIndex: Number, value: String, oldValue: String) : void;`                                                                                                              |
| onbeforedeleteworksheet | `onbeforedeleteworksheet(worksheet: Object, worksheetNumber: Number) : false \| void`<br>Intercept the exclusion o a worksheet, return false to cancel the user action.                                              | 
| ondeleteworksheet       | `ondeleteworksheet(worksheet: Object, oldWorksheetNumber: Number) : void`                                                                                                                                            |
| onmoveworksheet         | `onmoveworksheet(worksheet: Object, newPosition: Number, oldPosition: Number) : void`                                                                                                                                |


### Configuration

You can use the following settings to configure the spreadsheet and worksheet management behavior.

#### Worksheet Settings

| Property                              | Description                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------|
| worksheetId: string                   | Worksheet identification. Default: randomNumber                                      |
| worksheetName: string                 | Worksheet title. Default: string + integer. Note: avoid numeric-only worksheet names |
| worksheetState: 'visible' \| 'hidden' | Worksheet visibility state. Default: 'visible'                                         |

#### Spreadsheet Properties

| Property                              | Description                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------|
| tabs: boolean\|object                 | Show tabs and allow the user to create new worksheets. Default: false.               |
| allowDeleteWorksheet: boolean         | Add a delete worksheet option to the contextMenu. Default: true                      |
| allowRenameWorksheet: boolean         | Add the rename worksheet option to the contextMenu. Default: true                    |
| allowMoveWorksheet: boolean           | Allow worksheet drag and drop options. Default: true                                 |


##### Tabs customizations

Additional customizations are allowed using the extended tabs object declaration as example below.

| Property                     | Description                                                   |
| -----------------------------|---------------------------------------------------------------|
| allowCreate: boolean         | Show the create new tab button                                |
| allowChangePosition: boolean | Allow drag and drop of the headers to change the tab position |
| animation: boolean           | Allow the header border bottom animation.                     |
| hideHeaders: boolean         | Hide the tab headers if only one tab is present.              |
| padding: number              | Default padding content                                       |
| position: string             | Position of the headers: top \| bottom. Default: top          |

{.green}
> The tab object refers to the same properties for the `jSuites.tabs` plugin, and you can use to customize the tabs position and general behavior. More information: [jSuites Tabs Plugin](https://jsuites.net/docs/javascript-tabs)

 
#### Quick example

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: {
        allowCreate: true,
        allowChangePosition: true,
        animation: true,
        position: "bottom",
    },
    worksheets: [{
        minDimensions: [8,8],
    }],
});
</script>
```

```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Tabs
    const tabs = {
        allowCreate: true,
        allowChangePosition: true,
        animation: true,
        position: "bottom",
    };
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} tabs={tabs}>
            <Worksheet minDimensions={[6, 6]}/>
            <Worksheet minDimensions={[6, 6]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :tabs="tabs">
        <Worksheet :minDimensions="[8,8]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            // License
            license: license,
            // Tabs customizations
            tabs: {
                allowCreate: true,
                allowChangePosition: true,
                animation: true,
                position: "bottom",
            }
        };
    }
}
</script>
```
```angularjs
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: {
        allowCreate: true,
        allowChangePosition: true,
        animation: true,
        position: "bottom",
    },
    worksheets: [{
        minDimensions: [8,8],
    }],
});
```


## Examples

### Active worksheet

How to get the active worksheet number on a JSS spreadsheet.  

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p>
<input type="button" value="Get active worksheet" id="btn1"/>
<input type="button" value="Rename first worksheet" id="btn2"/></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    // Allow create a new tab button
    tabs: true,
    // Initial worksheet
    worksheets: [
        { minDimensions: [6,6] },
        { minDimensions: [6,6] },
    ],
});

document.getElementById("btn1").onclick = () => alert(worksheets[0].parent.getWorksheetActive());
document.getElementById("btn2").onclick = () => worksheets[0].parent.renameWorksheet(0, 'Anything');
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
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet minDimensions={[6,6]} />
                <Worksheet minDimensions={[6,6]} />
            </Spreadsheet>
            <input type="button" value="Get active worksheet"
                onClick={() => alert(spreadsheet.current[0].getWorksheetActive())} />
            <input type="button" value="Rename first worksheet"
                onClick={() => spreadsheet.current[0].renameWorksheet(0, prompt('New name', 'Sheet 1'))} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,6]" />
        <Worksheet :minDimensions="[6,6]" />
    </Spreadsheet>
    <input type="button" value="Get active worksheet" @click="setFreezeRows" />
    <input type="button" value="Rename first worksheet" @click="resetFreezeRows" />
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
        setFreezeRows(number) {
            alert(this.$refs.spreadsheet.current[0].getWorksheetActive());
        },
        resetFreezeRows() {
            this.$refs.spreadsheet.current[0].renameWorksheet(0, prompt('New name', 'Sheet 1'));
        },
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
jspreadsheet.setLicense('YjA3NDVlMzc3OGMwY2MwNTFmMDEyM2YwNDMwMWZiMDEzYmUxNWE5MTdhNDdiZDkzY2NlZmQ5NThlMDM2MjA2MzQ3YTAzNjU3NGYzZmJiYjk0Y2FlZDdlNmYzZmE4ZmNjNDVhODI2YWQzNTVkNDc3MTUyMDA5N2Y5YmNjMDAyZWYsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpFMk5EUTNNVEkwTENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZJak0wSWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luWTVJaXdpZGpFd0lpd2lkakV4SWl3aVkyaGhjblJ6SWl3aVptOXliWE1pTENKbWIzSnRkV3hoSWl3aWNHRnljMlZ5SWl3aWNtVnVaR1Z5SWl3aVkyOXRiV1Z1ZEhNaUxDSnBiWEJ2Y25SbGNpSXNJbUpoY2lJc0luWmhiR2xrWVhScGIyNXpJaXdpYzJWaGNtTm9JaXdpY0hKcGJuUWlMQ0p6YUdWbGRITWlMQ0pqYkdsbGJuUWlMQ0p6WlhKMlpYSWlMQ0p6YUdGd1pYTWlYU3dpWkdWdGJ5STZkSEoxWlgwPQ==');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
    <input type="button" value="Active worksheet" (click)="this.getActive()">
    <input type="button" value="Rename 1st worksheet" (click)="renameFirst()">`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            // Allow create a new tab button
            tabs: true,
            // Initial worksheet
            worksheets: [
                { minDimensions: [6,6] },
                { minDimensions: [6,6] },
            ],
        });
    }

    getActive() {
        alert(this.worksheets[0].parent.getWorksheetActive())
    }

    renameFirst() {
        this.worksheets[0].parent.renameWorksheet(0, 'Anything')
    }
}
```
 

 

### Worksheet events

Create a new worksheet and explore the related events. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    // Allow create a new tab button
    tabs: true,
    // Initial worksheet
    worksheets: [
        {
            data: [
                ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
                ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
                ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
                ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
            ],
            columns: [
                { type: 'autonumber', title: 'Id' },
                { type: 'text', width: '350px', title: 'Title' },
                { type: 'text', width: '250px', title: 'Artist' },
            ],
            // Name of the worksheet
            worksheetName: 'Albums',
        }
    ],
    // Intercept the new worksheet and define the options for the new worksheet
    onbeforecreateworksheet: function(config, index) {
        let options = {
            minDimensions: [5,5],
            worksheetName: 'Albums ' + index
        }
        return options;
    },
    // When you open the worksheet
    onopenworksheet: function(element, instance, worksheetNumber) {
        console.log(element, instance, worksheetNumber);
    },
});
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
        ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
        ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
        ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
        ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
    ]
    // Columns
    const columns = [
        { type: 'autonumber', title: 'Id' },
        { type: 'text', width: '350px', title: 'Title' },
        { type: 'text', width: '250px', title: 'Artist' },
    ]

    // Intercept the action to define the default configuration for each new worksheet
    const onbeforecreateworksheet = () => {
        return {
          minDimensions: [5, 5],
        };
      };
    
    const onopenworksheet = (element, instance, worksheetNumber) => {
        console.log("Opened worksheet:", worksheetNumber, instance, element);
      };

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} tabs
            onbeforecreateworksheet={onbeforecreateworksheet} onopenworksheet={onopenworksheet}>
                <Worksheet data={data} columns={columns} worksheetName={"Albums"} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" tabs
            :onbeforecreateworksheet="onbeforecreateworksheet" :onopenworksheet="onopenworksheet">
        <Worksheet :data="data" :columns="columns" worksheetName="Albums" />
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
    methods: {
        // Intercept the action to define the default configuration for each new worksheet
        onbeforecreateworksheet() {
            return {
                minDimensions: [5,5],
            }
        },
        // When a new worksheet is opened
        onopenworksheet(element, instance, worksheetNumber) {
            console.log(element, instance, worksheetNumber);
        }
    },
    data() {
        return {
            // License
            license: license,
            // Data
            data: [
                ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
                ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
                ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
                ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
            ],
            // Columns
            columns: [
                { type: 'autonumber', title: 'Id' },
                { type: 'text', width: '350px', title: 'Title' },
                { type: 'text', width: '250px', title: 'Artist' },
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
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            // Allow create a new tab button
            tabs: true,
            // Initial worksheet
            worksheets: [
                {
                    data: [
                        ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
                        ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
                        ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
                        ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
                    ],
                    columns: [
                        { type: 'autonumber', title: 'Id' },
                        { type: 'text', width: 350, title: 'Title' },
                        { type: 'text', width: 250, title: 'Artist' },
                    ],
                    // Name of the worksheet
                    worksheetName: 'Albums',
                }
            ],
            // Intercept the new worksheet and define the options for the new worksheet
            onbeforecreateworksheet: function (config, index) {
                return {
                    minDimensions: [5, 5],
                    worksheetName: 'Albums ' + index
                };
            },
            // When you open the worksheet
            onopenworksheet: function (worksheet: any, index: number) {
                console.log("Opened worksheet:", index, worksheet);
            },            
        });
    }
}
```

### Programmatic operations

Create a new worksheet programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Create a new worksheet" id="btn1" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    worksheets: [
        {
            minDimensions: [5,5],
            worksheetName: 'Example2',
        }
    ]
});

document.getElementById("btn1").onclick = () => spreadsheet[0].createWorksheet({ minDimensions: [5,5] });
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

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet minDimensions={[5,5]} worksheetName="Example2" />
            </Spreadsheet>
            <input type="button" value="Create a new worksheet"
                onClick={() => spreadsheet.current[0].createWorksheet({ minDimensions: [5,5] })} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[5,5]" worksheetName="Example2" />
    </Spreadsheet>
    <input type="button" value="Create a new worksheet" @click="createWorksheet" />
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
        createWorksheet() {
            this.$refs.spreadsheet.current[0].createWorksheet({ minDimensions: [5,5] });
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
    <input type="button" value="Create a new worksheet"
    (click)="this.worksheets[0].createWorksheet({ minDimensions: [5,5] })">`
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
            worksheets: [
                {
                    minDimensions: [5,5],
                    worksheetName: 'Example2',
                }
            ]
        });
    }
}
```
 

 

### Formulas on worksheets

The Pro distribution of Jspreadsheet allows you to execute formulas using variables from any other worksheet. The syntax follows the standard used by other spreadsheet software like Google Sheets or Excel, which involves using the exclamation mark. For example: `Products!A2*10`. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
            ],
            minDimensions: [5,5],
            worksheetName: 'Products',
        },
        {
            data: [
                ['20%', "=Products!D1"],
                ['20%', "=Products!D2"],
                ['20%', "=Products!D3"],
                ['20%', "=Products!D4"],
            ],
            minDimensions: [5,5],
            worksheetName: 'Profitability',
        }
    ],
    onload: function() {
        console.log('Ready');
    }
});
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
    const data1 = [
        ['Cheese', 10, 6.00, "=B1*C1"],
        ['Apples', 5, 4.00, "=B2*C2"],
        ['Carrots', 5, 1.00, "=B3*C3"],
        ['Oranges', 6, 2.00, "=B4*C4"],
    ]
    const data2 = [
        ['20%', "=Products!D1"],
        ['20%', "=Products!D2"],
        ['20%', "=Products!D3"],
        ['20%', "=Products!D4"],
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} tabs>
            <Worksheet data={data1} minDimensions={[5,5]} worksheetName="Products" />
            <Worksheet data={data2} minDimensions={[5,5]} worksheetName="Profitability" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data1" :minDimensions="[5,5]" worksheetName="Products" />
        <Worksheet :data="data2" :minDimensions="[5,5]" worksheetName="Profitability" />
    </Spreadsheet>
    <input type="button" value="Create a new worksheet" @click="createWorksheet"/>
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
        createWorksheet() {
            this.$refs.spreadsheet.current[0].createWorksheet({ minDimensions: [5,5] });
        }
    },
    data() {
        return {
            // License
            license: license,
            // Data
            data1: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
            ],
            data2: [
                ['20%', "=Products!D1"],
                ['20%', "=Products!D2"],
                ['20%', "=Products!D3"],
                ['20%', "=Products!D4"],
            ]
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
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['Cheese', 10, 6.00, "=B1*C1"],
                        ['Apples', 5, 4.00, "=B2*C2"],
                        ['Carrots', 5, 1.00, "=B3*C3"],
                        ['Oranges', 6, 2.00, "=B4*C4"],
                    ],
                    minDimensions: [5,5],
                    worksheetName: 'Products',
                },
                {
                    data: [
                        ['20%', "=Products!D1"],
                        ['20%', "=Products!D2"],
                        ['20%', "=Products!D3"],
                        ['20%', "=Products!D4"],
                    ],
                    minDimensions: [5,5],
                    worksheetName: 'Profitability',
                }
            ],
            onload: function() {
                console.log('Ready');
            }
        });
    }
}
```



