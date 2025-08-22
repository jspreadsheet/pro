Jspreadsheet Plugins

[Back to the plugins section](/docs/plugins/)

  
  
![contextmenu plugin icon](img/spreadsheet-plugin-advanced-contextmenu.png)

Advance contextmenu
===================

Contextmenu rows advanced actions
---------------------------------

ContextMenu rows advanced actions is a plugin for add new items in contextMenu of jSpreadsheet Pro for manage rows.

![preview](https://user-images.githubusercontent.com/52194475/102090914-5b802d80-3e1e-11eb-9fe6-572cea5eecae.png)

This plugin is **Free**

  

Documentation
-------------

### Dependencies

* [jSpreadsheet Pro v7](https://www.jspreadsheet.com/v7)
    
* With default options of plugin, you should use [Material Design icons](https://material.io/resources/icons/).
    

  
  

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `icon_moveup` | Icon for "move up rows" | `String` | `arrow_upward` |
| `icon_movedown` | Icon for "Move down rows" | `String` | `arrow_downward` |
| `icon_duplicate` | Icon for "Duplicate rows" | `String` | `content_copy` |
| `icon_deleteSelectedColumns` | Icon for "Delete selected columns" | `String` | `delete` |

  
  

### For translation

you can defined on translation global to replace var `text_XXXX_` _by `contextmenurowsadvancedactions`_  

| Option name | Default Value |
| --- | --- |
| `text_moveup` | `Move up row(s) selected` |
| `text_movedown` | `Move down row(s) selected` |
| `text_duplicate` | `Duplicate row(s) selected` |

  
  

### Get started

Header on page 

{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<script src="/path/to/contextmenu_rowAdvancedActions.min.js"></script>
```

Initialize plugin on jSpreadsheet

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'rowsAdvancedAction', plugin:jss_contextmenu_rowAdvancedActions},
      ...  
    ],
    ...
});
</script>
```
    

CDN
---

You can use this CDN link

<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/contextmenu_rowsAdvancedActions.min.js"></script>

  
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/contextmenu_rowsadvancedactions
```

{.ignore}
```javascript
import jss_contextmenu_rowAdvancedActions from '@jspreadsheet/contextmenu_rowsadvancedactions';
```
  
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License
