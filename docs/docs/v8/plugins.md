title: Jspreadsheet Plugins
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, tables, most common questions
description: How to create custom plugins for Jspreadsheet Version 8 to expand its capabilities.



# Plugins

The JSS plugins are the best way to enhance existing features or to create new features for your online spreadsheets. There are plenty of free or premium plugins already available, but you can build your own custom plugins.  

## Custom plugins

You can overwrite a few methods described below to create custom features. For instance, you can change the toolbar or context menu or implement server-side spreadsheet data persistence. You will have access to all components in your spreadsheet, and along with the available events, you will be able to create amazing things.

| Method                                                       | Description                                                                                                                                                                                                                                          |
| -------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| beforeinit                                                   | Before a new worksheet is added.<br/>`beforeinit(worksheet: Object, config: Object) : void \| object`                                                                                                                                               |
| init                                                         | When a new worksheet is added.<br/>`init(worksheet: Object) : void`                                                                                                                                                                                  |
| onevent                                                      | It will receive a call for every spreadsheet event.<br/>`onevent(event: String, a?: any, b?: any, c?: any, d?: any) : void`<br/> The number of arguments will vary depending on which event is being executed. The first argument is the event name. |
| persistence                                                  | When the spreadsheet needs to save something on the server.<br/>`persistence(method: String, args: Object) : void`<br/>The second argument depends on which method is being executed.                                                                |
| contextMenu                                                  | When the user opens the context menu.<br/>`contextMenu(instance: Object, x: Number, y: Number, e: MouseEvent, items: Array, section: String, a: any, b?: any) : void`<br/> |
| toolbar                                                      | When the toolbar is created and clicked.<br/>`toolbar(instance: Object, items: Array) : void`                                                                                                                                                        |

 

## Custom options by worksheet

It is possible to define custom options per worksheet using the `pluginOptions` property.  

## Basic implementation

The following code is a basic implementation that can be used as a reference. 

### Plugin implementation

{.ignore}
```javascript
let newPlugin = (function() {
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
     * @param {string} method - action executed
     * @param {object} args - depending on the action.
     */
    plugin.persistence = function(method, args) {
        // Different options are used depending on the action performated. 
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
  

### Loading the plugin

#### During initialization

Considering the following example, you can use the following code to integrate the plugin into a spreadsheet. 

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

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
  

#### Programmatically

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

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
  

## Examples

The following code is a working example of a plugin in action.  

### Spreadsheet properties update

The properties plugin allow the user to change some of the spreadsheet settings, through a new option included in the context menu. 

 Right-click in any cell and choose the last option in the context menu.  

#### Using CDN

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://jspreadsheet.com/v8/plugins/properties.js"></script>

<div id='spreadsheet'></div>

<script>
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
 
#### Using NPM

{.ignore}
```javascript
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
 

  

## Plugin gallery

 

### GitHub Repository

You can find more information about the plugins on our [GitHub page](https://github.com/jspreadsheet/plugin).  

### Publish your plugins

To publish your plugins on our website, please clone our plugins repository on GitHub and send a PR.  

### Search for plugins

You can find third-party and official plugins on the list below. 
