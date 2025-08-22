title: Jspreadsheet Plugins
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, tables, most common questions
description: How to create custom plugins for Jspreadsheet Version 7 to expand its capabilities.



# Jspreadsheet Plugins

It is possible to enhance or create new custom features on your spreadsheets using official, third-party, or creating your plugins. You can accelerate the learning curve and create plugins using the official template below. It is possible to change the toolbar, context menu, overwrite calculations, creating new features, and much more.

## Custom Plugins

{.ignore}
```javascript
let newPlugin = (function() {
    // Plugin object
    let plugin = {};

    /**
     * Initial executions
     */
    plugin.init = function(el) {
    }

    /**
     * Jspreadsheet events
     */
    plugin.onevent = function() {
        // It would be executed in every single event and can be used to customize actions
    }

    /**
     * Run on the context menu
     * @param instance Jspreadsheet Instance
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
     * @param instance Jspreadsheet Instance
     * @param items current items in the toolbar 
     */
    plugin.toolbar = function(instance, itens) {
        // Can be used to overwrite the toolbar

        return itens;
    }

    // Call initial configuration
    plugin.init();

    // Return the object
    return plugin;
});
```

### Loading a custom plugin

A plugin can be loaded to a spreadsheet using the following code.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
const newPlugin = (function() {
    let plugin = {};

    return plugin;
});

jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10, 10],
    plugins: [{ name:'Plugin Name', plugin: newPlugin }],
    license: true,
});
</script>
</html>
```
  

### A plugin source code example

You can download the source code on our [github page](https://github.com/jspreadsheet/plugins/properties).  

### Publish your plugins

You can publish your plugins on the website. Those plugins can be free or paid, the price is defined by the author. If you would like to become an author, please get in touch with: contact@jspreadsheet.com

[Go to the Plugin Gallery](/docs/plugins)
