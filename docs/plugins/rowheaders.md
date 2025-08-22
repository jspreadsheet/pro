Jexcel Plugins

[Back to the plugins section](/v10/plugins/)

![howheader plugin icon](img/howheader-plugin-icon.png)

jSpreadsheet Plugin : Row Header rename
=======================================

Row Header rename is a plugin for rename row header (Index) with custom name

![preview](https://user-images.githubusercontent.com/52194475/91864087-220d2300-ec70-11ea-9390-fe52e74cf28e.png)

This plugin is **Free**

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `headerIndexTitle` | For change header text of column index | `String` | (blank) |
| `rowIndexTitle` | For change header row (Index)  <br>If set an array : value repeat after last name set If set a function : ryou have 1 parameter : index, return string, If set an object : property = indexrow, value of property = value | `String\|Array[value, value]\|Object {indexrow:value,...}\|function (indexRow) {}` | `null` |
| `widthRowIndex` | For resize column index | `Int\|String` | `50` |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/rowHeaderRename.min.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "hours", rowIndexTitle:function(rowIndex) {return (rowIndex % 24) + ":00";}}},
      ...  
    ],
    ...
});
</script>
</html>
```
Example with options with Array
-------------------------------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/rowHeaderRename.min.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "Who ?", rowIndexTitle:["Me", "You", "Us"]}},
      ...  
    ],
    ...
});
</script>
</html>
```
#### Example with options with Object

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/rowHeaderRename.min.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'rowRename', plugin:jss_rowHeaderRename, options:{headerIndexTitle: "Name", rowIndexTitle:{0:"Tom", 1:"Pierre", 2:"Jean", 3:"William"}, widthRowIndex: 100}},
      ...  
    ],
    ...
});
</script>
</html>
```
CDN
---

You can use this CDN link

<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/rowHeaderRename.min.js"></script>

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/rowheaderrename
```

{.ignore}
```javascript
import jss_rowHeaderRename from '@jspreadsheet/rowheaderrename';
```
Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License