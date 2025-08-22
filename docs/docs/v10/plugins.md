title: Jspreadsheet Plugins: Create Add-Ons
keywords: Jspreadsheet, spreadsheets, jss plugins, online spreadsheets, add-ons, customization, feature extension, free plugins, premium plugins, custom plugins
description: Discover the power of JSS plugins to augment existing features or create new ones for your online spreadsheets. Explore a variety of free and premium plugins and learn how to build custom plugins tailored to your specific needs.

# Plugins

JSS plugins are a powerful way to augment existing features or create new features for your online spreadsheets. While many free and premium plugins are already available, you can also build custom plugins to meet your specific needs.  

## Documentation

### Methods

You can add new features to JSS or enhance existing ones by creating custom plugins. Overwriting the following methods allows for customization of the toolbar, context menu, or server-side spreadsheet data persistence. You can create tailored, innovative solutions with full access to all spreadsheet components and events.

| Method                                                       | Description                                                                                                                                                                                                                                          |
| -------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| beforeinit                                                   | Before a new worksheet is added.<br/>`beforeinit(worksheet: Object, config: Object) : void \| object`                                                                                                                                                |
| init                                                         | When a new worksheet is added.<br/>`init(worksheet: Object) : void`                                                                                                                                                                                  |
| onevent                                                      | It will receive a call for every spreadsheet event.<br/>`onevent(event: String, a?: any, b?: any, c?: any, d?: any) : void`<br/> The number of arguments will vary depending on which event is being executed. The first argument is the event name. |
| persistence                                                  | When the spreadsheet needs to save something on the server.<br/>`persistence(worksheet: Object, method: String, args: Array) : void`<br/>The args depends on which method is being executed.                                                         |
| contextMenu                                                  | When the user opens the context menu.<br/>`contextMenu(worksheet: Object, x: Number, y: Number, e: Object, items: [], section: String, a?: any, b?: any) : void` |
| toolbar                                                      | When the toolbar is created and clicked.<br/>`toolbar(worksheet: Object, items: Array) : void`                                                                                                                                                       |

 

### Worksheet options

It is possible to define custom options per worksheet using the `pluginOptions` property.  

## Basic implementation

The following code is a basic implementation that can be used as a reference. 

### Plugin implementation


{.ignore}
```javascript
const newPlugin = (function() {
    // Plugin object
    let plugin = {};

    /**
     * It will be executed for every new worksheet
     */
    plugin.init = function(worksheet) {
    }

    /**
     * Jspreadsheet events
     */
    plugin.onevent = function() {
        // It would be executed in every single event and can be used to customize actions
    }

    /**
     * Persistence: It would be call every single time persistence is required
     * @param {object} worksheet - worksheet
     * @param {string} method - action executed
     * @param {object} args - depending on the action.
     */
    plugin.persistence = function(worksheet, method, args) {
        // Different options are used depending on the action performed.
    }

    /**
     * Run on the context menu
     * @param instance Jexcel Spreadsheet Instance
     * @param x coordinates from the clicked cell
     * @param y coordinates from the clicked cell
     * @param e click object
     * @param items current items in the contextMenu
     */
    plugin.contextMenu = function(instance, x, y, e, items) {
        // Can be used to overwrite the contextMenu

        return items;
    }

    /**
     * Run on toolbar
     * @param instance Jexcel Spreadsheet Instance
     * @param items current items in the toolbar 
     */
    plugin.toolbar = function(instance, items) {
        // Can be used to overwrite the toolbar

        return items;
    }

    // Any startup configuration goes here
    // (...)

    // Return the object
    return plugin;
});
```
  

### Loading a plugin

Considering the following example, you can use the following code to integrate the plugin into a spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
const newPlugin = (function() {
    let plugin = {};

    return plugin;
});
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] },
    ],
    plugins: { newPlugin }
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import newPlugin from "./js/newPlugin.js";

const license = '###license###';

const plugins = {newPlugin};

export default function App() {
    const spreadsheet = useRef();

    return (
        <Spreadsheet ref={spreadsheet} license={license} plugins={plugins}>
            <Worksheet minDimensions={[10, 10]}/>
            <Worksheet minDimensions={[10, 10]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :plugins="plugins">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import newPlugin from "./js/newPlugin.js";

// Set the license
const license = '###license###';

const plugins = { newPlugin };

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            plugins,
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

const newPlugin = (function() {
    let plugin = {};

    return plugin;
});

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Loading data grid plugins
const plugins = { newPlugin };

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
            worksheets: [
                { minDimensions: [6, 6] },
                { minDimensions: [6, 6] },
            ],
            plugins: { newPlugin }
        });
    }
}
```
 

 

### Loading a plugin programmatically

How to load a plugin into a JSS data grid programmatically. 




```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
const otherPlugin = (function() {
    let plugin = {};

    return plugin;
});
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] },
    ]
});

// This method is used to load plugins after the spreadsheet initialization
worksheets[0].parent.setPlugins({ otherPlugin });
</script>
</html>
```
```jsx
import React, { useRef, useEffect } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const otherPlugin = (function() {
    let plugin = {};

    return plugin;
});

const license = '###license###';

export default function App() {
    const spreadsheet = useRef();

    useEffect(() => {
        spreadsheet.current[0].parent.setPlugins({ otherPlugin })
    }, [spreadsheet])

    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} minDimensions={[10,10]} />
            <Worksheet data={data} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";


const otherPlugin = (function() {
    let plugin = {};

    return plugin;
});

// Set the license
const license = '###license###';

const plugins = { otherPlugin };

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    mounted: function() {
        this.$refs.spreadsheet.current[0].parent.setPlugins(plugins)
    },
    setup: function() {
        return {
            plugins,
            license,
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

const otherPlugin = (function() {
    let plugin = {};

    return plugin;
});

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Loading data grid plugins
const plugins = { otherPlugin };

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
            worksheets: [
                { minDimensions: [6, 6] },
                { minDimensions: [6, 6] },
            ]
        });

        // This method is used to load plugins after the spreadsheet initialization
        this.worksheets[0].parent.setPlugins({ otherPlugin });
    }
}
```

## Examples

The following code is a working example of a plugin in action.  

### Spreadsheet properties update

The properties plugin allow the user to change some of the spreadsheet settings, through a new option included in the context menu. 

Right-click in any cell and choose the last option in the context menu.  

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v10/plugins/properties.js"></script>

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] },
    ],
    plugins: { properties },
});
</script>
</html>
```
```jsx
import jspreadsheet from "jspreadsheet";
// Installation npm install @jspreadsheet/properties
import properties from '@jspreadsheet/properties';

// Loading the plugin into the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] },
    ],
    plugins: { properties },
});
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :plugins="properties">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
// Installation npm install @jspreadsheet/properties
import properties from "@jspreadsheet/properties";
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
            // License
            license: license,
            properties: { properties }
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
// Installation: npm install @jspreadsheet/properties
import properties from "@jspreadsheet/properties";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
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
            worksheets: [
                { minDimensions: [6, 6] }, // Worksheet 1
                { minDimensions: [6, 6] }, // Worksheet 2
            ],
            plugins: { properties }
        });
    }
}
```
