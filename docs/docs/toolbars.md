title: Spreadsheet Toolbars
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like toolbar, spreadsheet toolbar, table toolbar, toolbars, data grid toolbars, customizable toolbars, toolbar customization, toolbar integration, interactive data grid, JavaScript data grid, dynamic toolbar, toolbar controls, data grid UI, user-friendly toolbars
description: Learn to enable and customize the Jspreadsheet toolbar for an optimized spreadsheet experience.

# Spreadsheet Toolbar

In this section, you can find information about all the methods, settings, and events related to the data grid toolbar. Additionally, you can explore customizations and other essential settings for the toolbars. 

{.secondary}
> **Icons**
> 
> The use of Material icons style sheet is required for utilizing the toolbar.
> 
> ```<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />```

## Documentation

### Methods

You can use the methods below to display, conceal or customize the toolbar.

| Method         | Description                                                                                                                                                            |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getToolbar     | Get the toolbar's current settings.<br/>`getToolbar(settings: Object) : Object`                                                                                        |
| setToolbar     | Redefine the toolbar settings. <br/>@param {Object} - Toolbar object, the allowed options are described in the table below. <br/>`setToolbar(settings: Object) : void` |
| showToolbar    | Show the toolbar using the current settings.<br/>`showToolbar() : void`                                                                                                |
| hideToolbar    | Hide the toolbar.<br/>`hideToolbar() : void`                                                                                                                           |
| refreshToolbar | Refresh the toolbar.<br/>`refreshToolbar(worksheet: Object) : void`                                                                                                    |

 

### Settings

It is possible to customize the toolbar items though the initialization using the following properties.

| Property                                                  |
| ----------------------------------------------------------|
| **toolbar?:** boolean \| 'extended' \| function \| object |

 

### Toolbar Object

It is possible to customize the toolbar items though the initialization using the following properties.


#### Toolbar general properties

| Property                       | Description                                       |
| -------------------------------|---------------------------------------------------|
| container: boolean             | Show the toolbar container border.                |
| badge: boolean                 | Add a badge container for each toolbar element.   |
| title: boolean                 | Show title below the icons.                       |
| responsive: boolean            | Responsive toolbar. Default: false                |
| items: Items[]                 | Items for the toolbar.                            |

#### Toolbar item properties

| Property                       | Description                                                                                                                                      |
| -------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| type: string                   | Element type: icon \| divisor \| label \| select                                                                                                 |
| content: string                | Content of the toolbar element                                                                                                                   |
| title: boolean                 | Tooltip for the toolbar element                                                                                                                  |
| width: number                  | Toolbar element width                                                                                                                            |
| active: boolean                | Initial state for the toolbar element                                                                                                            |
| class: string                  | CSS Class for each toolbar element                                                                                                               |
| value: number                  | The initially selected option for the type: select                                                                                               |
| render: method                 | Render method parser for the elements in the dropdown when type: select                                                                          |
| onclick: method                | When an item is clicked                                                                                                                          |
| onchange: method               | When a new item is selected. Valid for the type: select.                                                                                         |
| updateState: Function          | Create the item state controller.<br/>`updateState: function(root: HTMLElement, instance: Object, item: HTMLElement, worksheet: Object) => void` |

 

## Examples

### Toolbar visibility

The example below demonstrates how to enable the default toolbar and programmatically show or hide it after initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Show Toolbar' id="btn1">
<input type='button' value='Hide Toolbar' id="btn2"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6,6] },
    ],
    toolbar: true,
});

document.getElementById("btn1").onclick = () => grid[0].parent.showToolbar();
document.getElementById("btn2").onclick = () => grid[0].parent.hideToolbar();
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
            <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
                <Worksheet minDimensions={[6, 6]}/>
            </Spreadsheet>
            <input type='button' value='Show Toolbar' onClick={() => spreadsheet.current[0].showToolbar()}/>
            <input type='button' value='Hide Toolbar' onClick={() => spreadsheet.current[0].hideToolbar()}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :minDimensions="[6,6]" />
    </Spreadsheet>
    <input type="button" value="Show Toolbar" @click="showToolbar" />
    <input type="button" value="Hide Toolbar" @click="hideToolbar" />
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
        showToolbar() {
            this.$refs.spreadsheet.current[0].showToolbar();
        },
        hideToolbar() {
            this.$refs.spreadsheet.current[0].hideToolbar();
        },
    },
    data() {
        return {
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

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="Show Toolbar" (click)="this.worksheets[0].showToolbar();" />
        <input type="button" value="Hide Toolbar" (click)="this.worksheets[0].hideToolbar();" />`
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
                { minDimensions: [6,6] },
            ],
            toolbar: true
        });
    }
}
```

### Custom toolbar method handler

The toolbar property can be set as a function, which allows for the addition of a new custom item to the default toolbar without the need to create a new toolbar from scratch. See the example below. 

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

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: function(toolbar) {
        // Add a new custom item in the end of my toolbar
        toolbar.items.push({
            tooltip: 'My custom item',
            content: 'share',
            onclick: function() {
                alert('Custom click');
            }
        });

        return toolbar;
    },
    worksheets: [{
        minDimensions: [6,6],
    }]
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
    // Toolbar handler
    const toolbar = (toolbar) => {
        // Add a new custom item in the end of my toolbar
        toolbar.items.push({
            tooltip: 'My custom item',
            content: 'share',
            onclick: function() {
                alert('Custom click');
            }
        });
        return toolbar;
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} toolbar={toolbar}>
            <Worksheet minDimensions={[6,6]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :minDimensions="[6,6]" />
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
        // Toolbar handler
        toolbar(toolbar) {
            // Add a new custom item in the end of my toolbar
            toolbar.items.push({
                tooltip: 'My custom item',
                content: 'share',
                onclick: function() {
                    alert('Custom click');
                }
            });
            return toolbar;
        }
    },
    data() {
        return {
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

@Component({
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
            toolbar: function(toolbar) {
                // Add a new custom item in the end of my toolbar
                toolbar.items.push({
                    tooltip: 'My custom item',
                    content: 'share',
                    onclick: function() {
                        alert('Custom click');
                    }
                });

                return toolbar;
            },
            worksheets: [{
                minDimensions: [6,6],
            }]
        });
    }
}
```

### Custom toolbar object

The toolbar property can be utilized to customize the items present in the spreadsheet toolbar. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let customToolbar = {
    items: [
        {
            content: 'save',
            onclick: function () {
                jspreadsheet.current.download();
            }
        },
        {
            type:'divisor',
        },
        {
            type:'select',
            width: '160px',
            options: [ 'Verdana', 'Arial', 'Courier New' ],
            render: function(e) {
                return '<span style="font-family:' + e + '">' + e + '</span>';
            },
            onchange: function(a,b,c,d) {
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-family', d);
            }
        },
        {
            type: 'i',
            content: 'format_bold',
            onclick: function(a,b,c) {
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-weight', 'bold');
            }
        },
        {
            type: 'i',
            content: 'format_italic',
            onclick: function(a,b,c) {
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-style', 'italic');
            }
        },
        {
            content: 'search',
            onclick: function(a,b,c) {
                if (c.children[0].innerText == 'search') {
                    jspreadsheet.current.showSearch();
                    c.children[0].innerText = 'search_off';
                } else {
                    jspreadsheet.current.hideSearch();
                    c.children[0].innerText = 'search';
                }
            },
            tooltip: 'Toggle Search',
            updateState: function(a,b,c,worksheet) {
                // Call this one when the worksheet is opened and on the selection of any cells
                if (worksheet.options.search == true) {
                    c.children[0].innerText = 'search_off';
                } else {
                    c.children[0].innerText = 'search';
                }
            }
        }
    ]
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        worksheetName: 'Toolbar example',
        minDimensions: [6,6],
    }],
    toolbar: customToolbar
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
    // Toolbar handler
    const toolbar = {
        items: [{
                content: 'save',
                onclick: function () {
                    spreadsheet.current.download();
                }
            },
            {
                type:'divisor',
            },
            {
                type:'select',
                width: '160px',
                options: [ 'Verdana', 'Arial', 'Courier New' ],
                render: function(e) {
                    return '<span style="font-family:' + e + '">' + e + '</span>';
                },
                onchange: function(a,b,c,d) {
                    spreadsheet.current.setStyle(spreadsheet.current.getSelected(), 'font-family', d);
                }
            },
            {
                type: 'i',
                content: 'format_bold',
                onclick: function(a,b,c) {
                    spreadsheet.current.setStyle(spreadsheet.current.getSelected(), 'font-weight', 'bold');
                }
            },
            {
                type: 'i',
                content: 'format_italic',
                onclick: function(a,b,c) {
                    spreadsheet.current.setStyle(spreadsheet.current.getSelected(), 'font-style', 'italic');
                }
            },
            {
                content: 'search',
                onclick: function(a,b,c) {
                    if (c.children[0].innerText == 'search') {
                        spreadsheet.current.showSearch();
                        c.children[0].innerText = 'search_off';
                    } else {
                        spreadsheet.current.hideSearch();
                        c.children[0].innerText = 'search';
                    }
                },
                tooltip: 'Toggle Search',
                updateState: function(a,b,c,worksheet) {
                    // Call this one when the worksheet is opened and on the selection of any cells
                    if (worksheet.options.search == true) {
                        c.children[0].innerText = 'search_off';
                    } else {
                        c.children[0].innerText = 'search';
                    }
                }
            }
        ]
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} toolbar={toolbar}>
            <Worksheet minDimensions={[6,6]} worksheetName="Toolbar example" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :minDimensions="[6,6]" worksheetName="Toolbar example" />
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
    data() {
        // Toolbar handler
        const toolbar = {
            items: [{
                    content: 'save',
                    onclick: function () {
                        jspreadsheet.current.download();
                    }
                },
                {
                    type:'divisor',
                },
                {
                    type:'select',
                    width: '160px',
                    options: [ 'Verdana', 'Arial', 'Courier New' ],
                    render: function(e) {
                        return '<span style="font-family:' + e + '">' + e + '</span>';
                    },
                    onchange: function(a,b,c,d) {
                        jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-family', d);
                    }
                },
                {
                    type: 'i',
                    content: 'format_bold',
                    onclick: function(a,b,c) {
                        jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-weight', 'bold');
                    }
                },
                {
                    type: 'i',
                    content: 'format_italic',
                    onclick: function(a,b,c) {
                        jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-style', 'italic');
                    }
                },
                {
                    content: 'search',
                    onclick: function(a,b,c) {
                        if (c.children[0].innerText == 'search') {
                            jspreadsheet.current.showSearch();
                            c.children[0].innerText = 'search_off';
                        } else {
                            jspreadsheet.current.hideSearch();
                            c.children[0].innerText = 'search';
                        }
                    },
                    tooltip: 'Toggle Search',
                    updateState: function(a,b,c,worksheet) {
                        // Call this one when the worksheet is opened and on the selection of any cells
                        if (worksheet.options.search == true) {
                            c.children[0].innerText = 'search_off';
                        } else {
                            c.children[0].innerText = 'search';
                        }
                    }
                }
            ]
        }

        return {
            toolbar,
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
jspreadsheet.setLicense('ZGIzOTQ1MGZjYTU2OWU1ZTMzMDdkMTFkZmY0Mzg0YTVkZGU2MDEzNjk0YjhiZWI3YzYzZWE0ZDlmN2Q3MzdiYTZhZmNlYTkxZmExN2NmMGZkYzdjZjc2NTkyOWRlMGJjNDdjZDZjM2NmMDMyNWEzMTQzNjQ1ZjQ0ZTJkZTY1YmQsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpFMk5UVXhNelF4TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZJak0wSWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luWTVJaXdpZGpFd0lpd2lkakV4SWl3aVkyaGhjblJ6SWl3aVptOXliWE1pTENKbWIzSnRkV3hoSWl3aWNHRnljMlZ5SWl3aWNtVnVaR1Z5SWl3aVkyOXRiV1Z1ZEhNaUxDSnBiWEJ2Y25SbGNpSXNJbUpoY2lJc0luWmhiR2xrWVhScGIyNXpJaXdpYzJWaGNtTm9JaXdpY0hKcGJuUWlMQ0p6YUdWbGRITWlMQ0pqYkdsbGJuUWlMQ0p6WlhKMlpYSWlMQ0p6YUdGd1pYTWlYU3dpWkdWdGJ5STZkSEoxWlgwPQ==');

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
        // Custom toolbar definitions
        let customToolbar = {
            bottom: false,
            items: [
                {
                    content: 'save',
                    onclick: function () {
                        jspreadsheet.current!.download();
                    }
                },
                {
                    type: 'divisor',
                },
                {
                    type: 'select',
                    width: '160px',
                    options: ['Verdana', 'Arial', 'Courier New'],
                    render: function (e:any) {
                        return '<span style="font-family:' + e + '">' + e + '</span>';
                    },
                    onchange: function (a:any, b:any, c:any, d:any) {
                        jspreadsheet.current!.setStyle(jspreadsheet.current!.getSelected(), 'font-family', d);
                    }
                },
                {
                    type: 'i',
                    content: 'format_bold',
                    onclick: function (a:any, b:any, c:any) {
                        jspreadsheet.current!.setStyle(jspreadsheet.current!.getSelected(), 'font-weight', 'bold');
                    }
                },
                {
                    type: 'i',
                    content: 'format_italic',
                    onclick: function (a:any, b:any, c:any) {
                        jspreadsheet.current!.setStyle(jspreadsheet.current!.getSelected(), 'font-style', 'italic');
                    }
                },
                {
                    content: 'search',
                    onclick: function (a:any, b:any, c:any) {
                        if (c.children[0].innerText == 'search') {
                            jspreadsheet.current!.showSearch();
                            c.children[0].innerText = 'search_off';
                        } else {
                            jspreadsheet.current!.hideSearch();
                            c.children[0].innerText = 'search';
                        }
                    },
                    tooltip: 'Toggle Search',
                    updateState: function (a:any, b:any, c:any, worksheet:any) {
                        // Call this one when the worksheet is opened and on the selection of any cells
                        if (worksheet.options.search == true) {
                            c.children[0].innerText = 'search_off';
                        } else {
                            c.children[0].innerText = 'search';
                        }
                    }
                }
            ]
        }

        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                worksheetName: 'Toolbar example',
                minDimensions: [6, 6],
            }],
            toolbar: customToolbar as any,
        });
    }
}
```
 

 

## Default Toolbar Code


{.ignore}
```javascript
const getDefault = function() {
    let items = [];
    let spreadsheet = this;

    const getActive = function() {
        let i = spreadsheet.getWorksheetActive() || 0;
        return spreadsheet.worksheets[i];
    }

    const getComputedStyle = function(prop) {
        let w = getActive();
        if (w && w.cursor) {
            let t = window.getComputedStyle(w.cursor);
            return t.getPropertyValue(prop);
        }
    }

    const getSelected = function() {
        let w = getActive();
        if (w) {
            return w.getSelected();
        }
        return [];
    }


    items.push({
        content: 'undo',
        onclick: function() {
            jspreadsheet.history.undo();
        },
        updateState: function(a,b,c,d) {
            let index = jspreadsheet.history.index + 1;
            if (index > 0) {
                c.classList.remove('jtoolbar-disabled');
            } else {
                c.classList.add('jtoolbar-disabled');
            }
        }
    });

    items.push({
        content: 'redo',
        onclick: function() {
            jspreadsheet.history.redo();
        },
        updateState: function(a,b,c,d) {
            let size = jspreadsheet.history.actions.length;
            let index = jspreadsheet.history.index + 1;
            if (size > index) {
                c.classList.remove('jtoolbar-disabled');
            } else {
                c.classList.add('jtoolbar-disabled');
            }
        }
    });

    items.push({
        content: 'save',
        onclick: function () {
            let w = getActive();
            if (w) {
                w.download();
            }
        }
    });

    items.push({
        type:'divisor',
    });

    items.push({
        type:'select',
        width: '120px',
        options: [ 'Default', 'Verdana', 'Arial', 'Courier New' ],
        render: function(e) {
            return '<span style="font-family:' + e + '">' + e + '</span>';
        },
        onchange: function(a,b,c,d,e) {
            let w = getActive();
            if (w) {
                let cells = getSelected();
                if (cells) {
                    let value = (!e) ? '' : d;
                    w.setStyle(cells, 'font-family', value);
                }
            }
        },
        updateState: function(a,b,c,d) {
            let cell = d.selectedCell;
            if (cell && cell.length) {
                let value = getComputedStyle('font-family') || 0;
                if (value) {
                    value = this.picker.options.data.findIndex(function (element) {
                        return element.toLowerCase() === value.toLowerCase();
                    });
                    if (value === -1) {
                        value = 0;
                    }
                }
                c.picker.setValue(value);
            }
        }
    });

    items.push({
        type: 'select',
        width: '48px',
        content: 'format_size',
        options: ['x-small','small','medium','large','x-large'],
        render: function(e) {
            return '<span style="font-size:' + e + '">' + e + '</span>';
        },
        onchange: function(a,b,c,d) {
            let w = getActive();
            if (w) {
                let cells = getSelected();
                if (cells) {
                    w.setStyle(cells, 'font-size', d);
                }
            }
        }
    });

    items.push({
        type: 'select',
        options: ['left','center','right','justify'],
        render: function(e) {
            return '<i class="material-icons">format_align_' + e + '</i>';
        },
        onchange: function(a,b,c,d) {
            let w = getActive();
            if (w) {
                let cells = getSelected();
                if (cells) {
                    w.setStyle(cells, 'text-align', d);
                }
            }
        },
        updateState: function(a,b,c,d) {
            let w = getActive();
            let value = getComputedStyle('text-align');
            if (! value) {
                if (w) {
                    value = w.options.defaultColAlign;
                }
                if (! value) {
                    value = 'center';
                }
            }
            value = c.picker.options.data.indexOf(value);
            if (value === -1) {
                value = 1;
            }
            c.picker.setValue(value);
        }
    });

    items.push({
        content: 'format_bold',
        onclick: function(a,b,c) {
            let w = getActive();
            if (w) {
                let current = getComputedStyle('font-weight');
                let style = current === 'bold' || current > 400 ? '' : 'bold';
                let cells = getSelected();
                if (cells) {
                    w.setStyle(cells, 'font-weight', style);
                }
                if (style === 'bold') {
                    c.classList.add('jss_toolbar_selected');
                } else {
                    c.classList.remove('jss_toolbar_selected');
                }
            }
        },
        updateState: function(a,b,c,d) {
            // Readonly items
            component.item.call(d, c);
            // Current cell
            let value = getComputedStyle('font-weight');
            if (value === 'bold' || value > 400) {
                c.classList.add('jss_toolbar_selected');
            } else {
                c.classList.remove('jss_toolbar_selected');
            }
        }
    });

    items.push({
        type: 'color',
        content: 'format_color_text',
        k: 'color',
    });

    items.push({
        type: 'color',
        content: 'format_color_fill',
        k: 'background-color',
    });

    let verticalAlign = [ 'top','middle','bottom' ];

    items.push({
        type: 'select',
        options: [ 'vertical_align_top','vertical_align_center','vertical_align_bottom' ],
        render: function(e) {
            return '<i class="material-icons">' + e + '</i>';
        },
        value:  1,
        onchange: function(a,b,c,d,e) {
            let w = getActive();
            if (w) {
                let cells = getSelected();
                if (cells) {
                    w.setStyle(cells, 'vertical-align', verticalAlign[e]);
                }
            }
        },
        updateState: function(a,b,c,d) {
            let value = getComputedStyle('vertical-align') || 'middle';
            if (value) {
                let index = verticalAlign.indexOf(value);
                c.picker.setValue(index);
            }
        }
    });

    items.push({
        content: 'web',
        onclick: function() {
            let w = getActive();
            if (w) {
                if (confirm(T('The merged cells will retain the value of the top-left cell only. Are you sure?'))) {
                    let h = w.getSelection();
                    if (h && h.length) {
                        let cell = jspreadsheet.helpers.getColumnNameFromCoords(h[0], h[1]);
                        if (w.records[h[1]][h[0]].merged) {
                            w.removeMerge(cell);
                        } else {
                            w.setMerge();
                        }
                    }
                }
            }
        },
        tooltip: T('Merge the selected cells'),
    });

    items.push({
        type: 'select',
        data: [ 'border_all', 'border_outer', 'border_inner', 'border_horizontal', 'border_vertical', 'border_left', 'border_top', 'border_right', 'border_bottom', 'border_clear' ],
        columns: 5,
        render: function(e) {
            return '<i class="material-icons">' + e + '</i>';
        },
        right: true,
        onchange: function(a,b,c,d) {
            let w = getActive();
            let h = w.getHighlighted();
            if (h && h.length) {
                // Border type
                let type = d;
                // Default options
                let thickness = b.thickness || 1;
                // Border color
                let color = b.color || 'black';
                // Border style
                const borderStyle = b.style || 'solid';
                if (borderStyle === 'double') {
                    thickness += 2;
                }
                // Updates to the cells
                let style = {};
                // Create style strings
                const setBorder = function(columnName, i, j, selected) {
                    // Coordinates for each selection
                    let px = selected[0];
                    let py = selected[1];
                    let ux = selected[2];
                    let uy = selected[3];

                    let border = [ '','','','' ];

                    if (((type === 'border_top' || type === 'border_outer') && j === py) ||
                        ((type === 'border_inner' || type === 'border_horizontal') && j > py) ||
                        (type === 'border_all')) {
                        border[0] = 'border-top: ' + thickness + 'px ' + borderStyle + ' ' + color;
                    } else {
                        border[0] = 'border-top: ';
                    }

                    if ((type === 'border_all' || type === 'border_right' || type === 'border_outer') && i === ux) {
                        border[1] = 'border-right: ' + thickness + 'px ' + borderStyle + ' ' + color;
                    } else {
                        border[1] = 'border-right: ';
                    }

                    if ((type === 'border_all' || type === 'border_bottom' || type === 'border_outer') && j === uy) {
                        border[2] = 'border-bottom: ' + thickness + 'px ' + borderStyle + ' ' + color;
                    } else {
                        border[2] = 'border-bottom: ';
                    }

                    if (((type === 'border_left' || type === 'border_outer') && i === px) ||
                        ((type === 'border_inner' || type === 'border_vertical') && i > px) ||
                        (type === 'border_all')) {
                        border[3] = 'border-left: ' + thickness + 'px ' + borderStyle + ' ' + color;
                    } else {
                        border[3] = 'border-left: ';
                    }

                    style[columnName] = border.join(';');
                }
                // Go over all selections
                h.forEach(function(selected) {
                    for (let j = selected[1]; j <= selected[3]; j++) { // Row - py - uy
                        for (let i = selected[0]; i <= selected[2]; i++) { // Col - px - ux
                            let cellName = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
                            setBorder(cellName, i, j, selected);
                            let record = w.records[j];
                            if (record && record[i]) {
                                let merged = record[i].merged;
                                if (merged) {
                                    cellName = jspreadsheet.helpers.getColumnNameFromCoords(merged[0].x, merged[0].y);
                                    setBorder(cellName, i, j, selected);
                                }
                            }
                        }
                    }
                });

                if (Object.keys(style)) {
                    w.setStyle(style);
                }
            }
        },
        onload: function(a, b) {
            // Border color
            let container = document.createElement('div');
            let div = document.createElement('div');
            container.appendChild(div);

            let colorPicker = jSuites.color(div, {
                closeOnChange: false,
                onchange: function(o, v) {
                    o.parentNode.children[1].style.color = v;
                    b.color = v;
                },
            });

            let i = document.createElement('i');
            i.classList.add('material-icons');
            i.innerHTML = 'color_lens';
            i.onclick = function() {
                colorPicker.open();
            }
            container.appendChild(i);
            a.children[1].appendChild(container);

            div = document.createElement('div');
            jSuites.picker(div, {
                type: 'select',
                data: [ 1, 2, 3, 4, 5 ],
                render: function(e) {
                    return '<div style="height: ' + e + 'px; width: 30px; background-color: black;"></div>';
                },
                onchange: function(a, k, c, d) {
                    b.thickness = d;
                },
                width: '50px',
            });
            a.children[1].appendChild(div);

            const borderStylePicker = document.createElement('div');
            jSuites.picker(borderStylePicker, {
                type: 'select',
                data: ['solid', 'dotted', 'dashed', 'double'],
                render: function(e) {
                    if (e === 'double') {
                        return '<div style="width: 30px; border-top: 3px ' + e + ' black;"></div>';
                    }
                    return '<div style="width: 30px; border-top: 2px ' + e + ' black;"></div>';
                },
                onchange: function(a, k, c, d) {
                    b.style = d;
                },
                width: '50px',
            });
            a.children[1].appendChild(borderStylePicker);

            div = document.createElement('div');
            div.style.flex = '1'
            a.children[1].appendChild(div);
        }
    });


    items.push({
        type:'divisor',
    });

    items.push({
        content: 'add_photo_alternate',
        onclick: function(a,b,c) {
            let w = getActive();
            if (w) {
                c.children[1].component.open();
            }
        },
        tooltip: 'Add image',
        render: function(a) {
            const open = function(e) {
                e.style.display = 'block';
                e.focus();
            }
            const close = function(e) {
                e.style.display = '';
                e.textContent = '';
            }
            // Border color
            let o = createDialog(open, close);
            o.classList.add('jss_upload');
            a.appendChild(o);
            // Create image uploader
            jSuites.image(o, {
                onchange: function(a) {
                    let w = getActive();
                    if (w) {
                        let top = 0;
                        let left = 0;
                        let cursor = w.cursor;
                        if (cursor) {
                            top = cursor.offsetTop - w.thead.offsetHeight;
                            left = cursor.offsetLeft - 50;
                        }
                        w.setMedia({
                            src: a.content[0].content,
                            width: 400,
                            height: 300,
                            top: top,
                            left: left,
                        });
                    }
                    o.component.close();
                }
            });
        }
    });

    items.push({
        content: 'fullscreen',
        onclick: function(a,b,c) {
            let w = getActive();
            if (c.children[0].textContent === 'fullscreen') {
                w.parent.fullscreen(true);
                c.children[0].textContent = 'fullscreen_exit';
            } else {
                w.parent.fullscreen(false);
                c.children[0].textContent = 'fullscreen';
            }
        },
        tooltip: 'Toggle Fullscreen',
        updateState: function(a,b,c,d) {
            if (d.parent.config.fullscreen === true) {
                c.children[0].textContent = 'fullscreen_exit';
            } else {
                c.children[0].textContent = 'fullscreen';
            }
        }
    });

    items.push({
        content: 'search',
        onclick: function(a,b,c) {
            let w = getActive();
            if (typeof(w.parent.tools.search) !== 'undefined') {
                w.parent.tools.search.open(true);
            } else {
                if (c.children[0].textContent === 'search') {
                    w.showSearch();
                    c.children[0].textContent = 'search_off';
                } else {
                    w.hideSearch();
                    c.children[0].textContent = 'search';
                }
            }
        },
        tooltip: 'Toggle Search',
        updateState: function(a,b,c,d) {
            if (d.options.search === true) {
                c.children[0].textContent = 'search_off';
            } else {
                c.children[0].textContent = 'search';
            }
        }
    });

    return items;
}
```
