Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![contextmenu plugin icon](img/contextmenu-spreadsheet-plugin-icon.png)

jSpreadsheet Plugin : Contextmenu shortcut
==========================================

ContextMenu Shortcut is a plugin to improve the contextMenu of jSpreadsheet Pro. It allows you to change the base of shortcuts depending on whether you are on a Mac or a Windows. It also allows you to add icons for each menu item.

![preview](https://user-images.githubusercontent.com/52194475/91465865-a0dc1780-e88e-11ea-8a41-1ed1f5275c95.png)

This plugin is **Free**

  

Documentation
-------------

### Dependencies

* With default options of plugin, you should use [Material Design icons](https://material.io/resources/icons/). But, if you want, you can use fontawesome with editing all icons

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `icon_changeColumnType` | Icon for "Change column type" | `String` | `ballot` |
| `icon_insertANewColumnBefore` | Icon for "Insert a new column before" | `String` | `add` |
| `icon_insertANewColumnAfter` | Icon for "Insert a new column after" | `String` | `add` |
| `icon_deleteSelectedColumns` | Icon for "Delete selected columns" | `String` | `delete` |
| `icon_renameThisColumn` | Icon for "Rename this column" | `String` | `create` |
| `icon_orderAscending` | Icon for "Order ascending" | `String` | `sort` |
| `icon_orderDescending` | Icon for "Order descending" | `String` | `sort` |
| `icon_insertANewRowBefore` | Icon for "Insert a new row before" | `String` | `add` |
| `icon_insertANewRowAfter` | Icon for "Insert a new row after" | `String` | `add` |
| `icon_deleteSelectedRows` | Icon for "Delete Selected Rows" | `String` | `delete` |
| `icon_addComments` | Icon for "Add comment" | `String` | `insert_comment` |
| `icon_clearComments` | Icon for "Clear comments" | `String` | `clear` |
| `icon_cut` | Icon for "Cut" | `String` | `content_cut` |
| `icon_copy` | Icon for "Copy" | `String` | `content_copy` |
| `icon_paste` | Icon for "Paste" | `String` | `content_paste` |
| `icon_saveAs` | Icon for "Save As" | `String` | `save` |
| `icon_about` | Icon for "About" | `String` | `info` |
| `isIconHTML` | Flag for defined is icon value is HTML or not (to use only is use an other library of icons i.e. `<i class='fa fa-icons'>></i>` | `Boolean` | `false` |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/plugins/download.js"></script>

<script src="/path/to/contextmenu_shortcut.min.js"></script>

<script>
jSpreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'shortcut', plugin:jss_contextmenu_shortcut},
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
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/contextmenu_shortcut.min.js"></script>
```
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/contextmenu_shortcut
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), { worksheets: [{ minDimensions: [10,10], }], plugins: { jexcel_contextmenu_shortcut }, license: '###license###',});
</script>
```
