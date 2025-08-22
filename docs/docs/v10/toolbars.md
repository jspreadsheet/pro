title: Spreadsheet Toolbars
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like toolbar, spreadsheet toolbar, table toolbar, toolbars, data grid toolbars, customizable toolbars, toolbar customization, toolbar integration, interactive data grid, JavaScript data grid, dynamic toolbar, toolbar controls, data grid UI, user-friendly toolbars
description: Learn to enable and customize the Jspreadsheet toolbar for an optimized spreadsheet experience.

# Spreadsheet toolbar

In this section, you can find information about all the methods, settings, and events related to the data grid toolbar. Additionally, you can explore customizations and other essential settings for the toolbars. 

> **Toolbar icons**  The use of Material icons style sheet is required for utilizing the toolbar. 

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

| Property                       | Description                                                                                                                                                              |
| -------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Toolbar general properties** |
| container: boolean             | Show the toolbar container border.                                                                                                                                       |
| badge: boolean                 | Add a badge container for each toolbar element.                                                                                                                          |
| title: boolean                 | Show title below the icons.                                                                                                                                              |
| responsive: boolean            | Responsive toolbar. Default: false                                                                                                                                       |
| items: Items[]                 | Items for the toolbar.                                                                                                                                                   |
| **Toolbar item properties**    |
| type: string                   | Element type: icon \| divisor \| label \| select                                                                                                                         |
| content: string                | Content of the toolbar element                                                                                                                                           |
| title: boolean                 | Tooltip for the toolbar element                                                                                                                                          |
| width: number                  | Toolbar element width                                                                                                                                                    |
| active: boolean                | Initial state for the toolbar element                                                                                                                                    |
| class: string                  | CSS Class for each toolbar element                                                                                                                                       |
| value: number                  | The initially selected option for the type: select                                                                                                                       |
| render: method                 | Render method parser for the elements in the dropdown when type: select                                                                                                  |
| onclick: method                | When an item is clicked                                                                                                                                                  |
| onchange: method               | When a new item is selected. Valid for the type: select.                                                                                                                 |
| updateState: Function          | Create the item state controller.<br/>`updateState: function(toolbarElement: HTMLElement, toolbarInstance: Object, toolbarItem: HTMLElement, worksheet: Object) => void` |

 

## Examples

### Toolbar visibility

The example below demonstrates how to enable the default toolbar and programmatically show or hide it after initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [8,5] },
    ],
    toolbar: true,
});

document.getElementById("showbtn").onclick = () => grid[0].parent.showToolbar();
document.getElementById("hidebtn").onclick = () => grid[0].parent.hideToolbar();
</script>

<input type='button' value='Show Toolbar' id="showbtn">
<input type='button' value='Hide Toolbar' id="hidebtn">
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
                <Worksheet minDimensions={[8, 5]}/>
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
        <Worksheet :minDimensions="[8,5]" />
    </Spreadsheet>
    <input type="button" value="Show Toolbar" @click="showToolbar" />
    <input type="button" value="Hide Toolbar" @click="hideToolbar" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="Add new validation" (click)="this.worksheets[0].showToolbar();" />
        <input type="button" value="Remove validation" (click)="this.worksheets[0].hideToolbar();" />`
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
                { minDimensions: [8,5] },
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
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
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
        minDimensions: [8,10],
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

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
            <Worksheet minDimensions={[8,10]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :minDimensions="[8,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

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
                minDimensions: [8,10],
            }]
        });
    }
}
```

### Custom toolbar object

The toolbar property can be utilized to customize the items present in the spreadsheet toolbar. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
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
        minDimensions: [6,5],
    }],
    toolbar: customToolbar
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

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
            <Worksheet minDimensions={[6,5]} worksheetName="Toolbar example" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :minDimensions="[6,5]" worksheetName="Toolbar example" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Custom toolbar definitions
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
            worksheets: [{
                worksheetName: 'Toolbar example',
                minDimensions: [6,5],
            }]
            toolbar: customToolbar
        });
    }
}
```
 

 

## Default toolbar code


{.ignore}
```javascript
const J = jspreadsheet;

const getDefault = function(toolbar) {
    let items = [];

    items.push({
        content: 'undo',
        onclick: function() {
            if (J.current) {
                J.current.undo();
            }
        }
    });

    items.push({
        content: 'redo',
        onclick: function() {
            if (J.current) {
                J.current.redo();
            }
        }
    });

    items.push({
        content: 'save',
        onclick: function () {
            if (J.current) {
                J.current.download();
            }
        }
    });

    items.push({
        type:'divisor',
    });

    items.push({
        type:'select',
        width: '120px',
        options: [ 'Verdana', 'Arial', 'Courier New' ],
        render: function(e) {
            return '<span style="font-family:' + e + '">' + e + '</span>';
        },
        onchange: function(a,b,c,d) {
            if (J.current) {
                J.current.setStyle(J.current.getSelected(false, true), 'font-family', d);
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
            if (J.current) {
                J.current.setStyle(J.current.getSelected(false, true), 'font-size', d);
            }
        }
    });

    items.push({
        type: 'select',
        options: ['format_align_left','format_align_center','format_align_right','format_align_justify'],
        render: function(e) {
            return '<i class="material-icons">' + e + '</i>';
        },
        onchange: function(a,b,c,d) {
            if (J.current) {
                J.current.setStyle(J.current.getSelected(false, true), 'text-align', d.split('_')[2]);
            }
        },
        updateState: function(a,b,c,d) {
            let cell = d.selectedCell;
            if (cell && cell.length) {
                if (d.records[cell[1]][cell[0]].element) {
                    let value = 'format_align_' + (d.records[cell[1]][cell[0]].element.style.textAlign || d.options.defaultColAlign || 'center');
                    let index = this.picker.options.data.indexOf(value);
                    c.picker.setValue(index);
                }
            }
        }
    });
    items.push({
        type: 'i',
        content: 'format_bold',
        k: 'font-weight',
        v: 'bold'
    });

    items.push({
        type: 'color',
        content: 'format_color_text',
        k: 'color'
    });

    items.push({
        type: 'color',
        content: 'format_color_fill',
        k: 'background-color'
    });

    if (toolbar === 'extended' || typeof(toolbar) === 'function') {
        let verticalAlign = ['top','middle','bottom'];

        items.push({
            type: 'select',
            options: ['vertical_align_top','vertical_align_center','vertical_align_bottom'],
            render: function(e) {
                return '<i class="material-icons">' + e + '</i>';
            },
            value:  1,
            onchange: function(a,b,c,d,e) {
                if (J.current) {
                    J.current.setStyle(J.current.getSelected(false, true), 'vertical-align', verticalAlign[e]);
                }
            },
            updateState: function(a,b,c,d) {
                let cell = d.selectedCell;
                if (cell && cell.length) {
                    if (d.records[cell[1]][cell[0]].element) {
                        let value = d.records[cell[1]][cell[0]].element.style.verticalAlign || 'middle';
                        let index = verticalAlign.indexOf(value);
                        c.picker.setValue(index);
                    }
                }
            }
        });

        items.push({
            content: 'web',
            onclick: function(a,b,c) {
                if (J.current) {
                    let h = J.current.getHighlighted();
                    if (h && h.length) {
                        let cell = J.helpers.getColumnNameFromCoords(h[0], h[1]);
                        if (J.current.records[h[1]][h[0]].merged) {
                            J.current.removeMerge(cell);
                        } else {
                            let colspan = h[2] - h[0] + 1;
                            let rowspan = h[3] - h[1] + 1;
                            J.current.setMerge(cell, colspan, rowspan);
                        }
                    }
                }
            },
            tooltip: T('Merge the selected cells'),
        });
    }

    items.push({
        type: 'select',
        data: [ 'border_all', 'border_outer', 'border_inner', 'border_horizontal', 'border_vertical', 'border_left', 'border_top', 'border_right', 'border_bottom', 'border_clear' ],
        columns: 5,
        render: function(e) {
            return '<i class="material-icons">' + e + '</i>';
        },
        right: true,
        onchange: function(a,b,c,d,e) {
            let selected = J.current.getHighlighted();
            let type = d;

            if (selected) {
                // Default options
                let thickness = b.thickness || 1;
                let color = b.color || 'black';
                let style = {};

                // Matrix
                let px = selected[0];
                let py = selected[1];
                let ux = selected[2];
                let uy = selected[3];

                for (let j = selected[1]; j <= selected[3]; j++) { // Row - py - uy
                    for (let i = selected[0]; i <= selected[2]; i++) { // Col - px - ux
                        let columnName = Helpers.getColumnNameFromCoords(i, j);

                        if (! style[columnName]) {
                            style[columnName] = '';
                        }

                        if ((type == 'border_left' || type == 'border_outer') && i == px) {
                            style[columnName] += 'border-left: ' + thickness + 'px solid ' + color + '; ';
                        } else if ((type == 'border_inner' || type == 'border_vertical') && i > px) {
                            style[columnName] += 'border-left: ' + thickness + 'px solid ' + color + '; ';
                        } else if (type == 'border_all') {
                            style[columnName] += 'border-left: ' + thickness + 'px solid ' + color + '; ';
                        } else {
                            style[columnName] += 'border-left: ; ';
                        }

                        if ((type == 'border_all' || type == 'border_right' || type == 'border_outer') && i == ux) {
                            style[columnName] += 'border-right: ' + thickness + 'px solid ' + color + '; ';
                        } else {
                            style[columnName] += 'border-right: ; ';
                        }

                        if ((type == 'border_top' || type == 'border_outer') && j == py) {
                            style[columnName] += 'border-top: ' + thickness + 'px solid ' + color + '; ';
                        } else if ((type == 'border_inner' || type == 'border_horizontal') && j > py) {
                            style[columnName] += 'border-top: ' + thickness + 'px solid ' + color + '; ';
                        } else if (type == 'border_all') {
                            style[columnName] += 'border-top: ' + thickness + 'px solid ' + color + '; ';
                        } else {
                            style[columnName] += 'border-top: ; ';
                        }

                        if ((type == 'border_all' || type == 'border_bottom' || type == 'border_outer') && j == uy) {
                            style[columnName] += 'border-bottom: ' + thickness + 'px solid ' + color + '; ';
                        } else {
                            style[columnName] += 'border-bottom: ; ';
                        }
                    }
                }

                if (Object.keys(style)) {
                    J.current.setStyle(style, null, null, true);
                }
            }
        },
        onload: function(a, b) {
            // Border color
            let container = document.createElement('div');
            let div = document.createElement('div');
            let i = document.createElement('i');

            let colorPicker = jSuites.color(div, {
                closeOnChange: false,
                onchange: function(o, v) {
                    o.parentNode.children[1].style.color = v;
                    b.color = v;
                },
            });

            i.classList.add('material-icons');
            i.innerHTML = 'color_lens';
            i.onclick = function() {
                colorPicker.open();
            }

            container.appendChild(div);
            container.appendChild(i);
            a.children[1].appendChild(container);

            div = document.createElement('div');
            jSuites.picker(div, {
                type: 'select',
                data: [ 1, 2, 3, 4, 5 ],
                render: function(e) {
                    return '<div style="height: ' + e + 'px; width: 50px; background-color: black;"></div>';
                },
                onchange: function(a, k, c, d) {
                    b.thickness = d;
                },
                width: '80px',
            });
            a.children[1].appendChild(div);

            div = document.createElement('div');
            div.style.flex = '1'
            a.children[1].appendChild(div);
        }
    });

    items.push({
        type:'divisor',
    });

    items.push({
        content: 'fullscreen',
        onclick: function(a,b,c) {
            if (c.children[0].innerText == 'fullscreen') {
                J.current.fullscreen(true);
                c.children[0].innerText = 'fullscreen_exit';
            } else {
                J.current.fullscreen(false);
                c.children[0].innerText = 'fullscreen';
            }
        },
        tooltip: 'Toggle Fullscreen',
        updateState: function(a,b,c,d) {
            if (d.parent.config.fullscreen == true) {
                c.children[0].innerText = 'fullscreen_exit';
            } else {
                c.children[0].innerText = 'fullscreen';
            }
        }
    });

    items.push({
        content: 'search',
        onclick: function(a,b,c) {
            if (c.children[0].innerText == 'search') {
                Search.show.call(J.current);
                c.children[0].innerText = 'search_off';
            } else {
                Search.hide.call(J.current);
                c.children[0].innerText = 'search';
            }
        },
        tooltip: 'Toggle Search',
        updateState: function(a,b,c,d) {
            if (d.options.search == true) {
                c.children[0].innerText = 'search_off';
            } else {
                c.children[0].innerText = 'search';
            }
        }
    });

    return items;
}
```
 
