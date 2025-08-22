Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![open file plugin icon](img/spreadsheet-plugin-open-file.png)

JSpreadsheet Plugin : Open File
===============================

With the open file plugin, you can:

* open modal for open file CSV, XLS, XLSX from your computer (without throught by server)
* select options on open (separator for csv, import style for XLSX, remove current sheets)

![preview](https://user-images.githubusercontent.com/52194475/115003509-28ba7480-9ea6-11eb-969c-845dd127ce6a.png)

This plugin is **Premium**

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.openfile.php)

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-openfile)

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `allowShortcut` | Allow use shortcut CTRL + O for open file | `Boolean` | `true` |
| `icon_toolbar` | Material icon on toolbar | `String` | `folder_open` |

  
  

### For translation

_If you use general translator, you can translate this plugin to replace "text_" by "openfile_"_

| Option name | Default Value |
| --- | --- |
| `text_toolbar_badge` | Open file |
| `text_popup_title_options` | Options of import |
| `text_popup_removesheets` | Remove current sheets |
| `text_popup_csvdelimiter` | Delimiter fields in row |
| `text_popup_csvheaders` | First row is an header |
| `text_popup_loadstyle` | Load style from file |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `open() → Void` | open modal for choose file on local | `jspreadsheet.current.plugins.openFile.open();` |

  
  

### Events of plugin

| Event | Arguments | Description |
| --- | --- | --- |
| `openfile_onload` | `DOMElementJSS, instanceJSS` | After load file, this event is dispatched |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.openFile.js"></script>

Initialize plugin on Jspreadsheet

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'openFile', plugin:jss_openfile },
      ...  
    ],
    ...
});
</script>
</html>
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)