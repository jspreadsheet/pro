Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![topmenu plugin icon](img/spreadsheet-plugin-topmenu.png)

Top menu
========

The topmenu plugin add a top menu bar on jSpreadsheet.  
  

![preview](https://user-images.githubusercontent.com/52194475/118120684-8d5ae780-b3f0-11eb-911d-1b38416b9997.png)

This plugin is **Free**

  

### Features

* Add top menu bar
* Add function on instance for add top menu bar
* Load item top menu in other plugins
* Menu can use sub menu

  
  

Documentation
-------------

### Dependencies

* [jSpreadsheet Pro v7](https://www.jspreadsheet.com/v7)

  
  

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `menus` | Define your menus | `Object` | _Default menu_ |

  
  

### For translation

You can defined on translation global to replace var `text_XXXX_` _by `topmenu`_  

| Option name | Default Value |
| --- | --- |
| `text_file` | `File` |
| `text_edit` | `Edit` |
| `text_view` | `View` |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `add(String title, _Optional_ Array/Function items, _Optional_ Int position) → Void` | add new top menu. You can use directly `instance.addTopmenu` with same arguments | `jspreadsheet.current.plugins.topmenu.add("Format");` |
| `refresh() → Void` | Refresh top menu | `jspreadsheet.current.plugins.topmenu.refresh();` |

  
  

### Menus with function

You can use function for have dynamics items.

Use this template:

{.ignore}
```javascript
function (element, instance, menuButton) {
   var items = [];

   if(instance.options.about == true) { // show about item
       items.push({
            title:'About',
            onclick:function() {
                alert('My about text')
            }
        });
   }

   if(instance.selectedCell[0] == 0 && instance.selectedCell[1] == 0) {
       items.push({
            title:'You have selected A1',
            disable: true
            onclick:function() {  }
        });
   }

   return items;
}
```
  
  

### Menu items properties

Item is based on contextmenu item. Use same items of contextmenu for build topmenu

Documentation available on [Quick Reference Contextmenu jSuites.net](https://jsuites.net/v5/contextmenu/quick-reference)

| Property | Description |
| --- | --- |
| type: string | Context menu item type: line \| divisor \| default |
| icon: string | Context menu icon key. (Material icon key icon identification) |
| id: string | HTML id property of the item DOM element |
| disabled: boolean | The item is disabled |
| onclick: function | Specific onclick event for the element. |
| shortcut: string | A short description or instruction for the item. Normally a shortcut. |
| tooltip: string | Show this text when the user mouse over the element |
| submenu: Array of objects | Submenu items |

  
  

### Menu on plugin

On your plugin, add function on your object like contextMenu:

Example:

{.ignore}
```javascript
function example_plugin_jss(instance, options) {
   var plugin = {};
   
   /* ... your code of your plugin ...*/
   
   plugin.topMenu = function(name, items, menuButton, shortcut_base) { 
       /*... your code for new items ...*/
       return items;
   }
   
   /* ... your code of your plugin ...*/
   
   return plugin;
}
```
This function is call when top menu is open

Arguments of `topMenu`:

* `name` : Name of top menu
* `items` : Array
* `menuButton` : Button in top menu
* `shortcut_base` = "CTRL +" or "⌘ +"

this function must return Array of items

  
  

### Get started

Header on page

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/topmenu.min.js"></script>
<link rel="stylesheet" href="/path/to/topmenu.min.css" type="text/css" />

// Initialize plugin on jSpreadsheet

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'topmenu', plugin:jss_topmenu},
      ...  
    ],
    ...
});
</script>
```
  
  

CDN
---

You can use this CDN link

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/topmenu.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/topmenu.min.css" type="text/css" />
```
  
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/topmenu
```

{.ignore}
```javascript
import jss_topmenu from  '@jspreadsheet/topmenu';
```
  
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://repo.gbonnaire.fr) and Code released under the MIT License