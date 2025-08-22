Plugins

[Back to the plugins section](/v10/plugins/)

  
![statusbar plugin icon](img/spreadsheet-plugin-statusbar.png)

jSpreadsheet Plugin : Status bar
================================

Status bar is a plugin for add a status bar on bottom of the sheet like Excel. On this status bar you can add new row with button, and show information on selection (Range selected, Formulas, etc.)

![preview](https://user-images.githubusercontent.com/52194475/94404123-c484cd00-016e-11eb-8f27-c978019f181e.png)

This plugin is **Free**

Documentation
-------------

### Dependencies

* [jSpreadsheet Pro v7](https://www.jspreadsheet.com/v7)

  

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `showAddRowButton` | For show or hide add row button on left of status bar | `Boolean` | `true` |
| `formulas` | Object of formulas, you can use quick reference on formulas  <br>`{range}` : Range name A1:B3  <br>`{cells}` : Array of cells (work with filtered row) \[A1,A3,B1,B3\]  <br>`{x1}` : x start selection (first x = 0)  <br>`{y1}` : y start selection (first y = 0)  <br>`{x2}` : x end selection  <br>`{y2}` : y end selection  <br>the key property of object is the name showing before result  <br>If you use custom formula, for not show empty result, return null. | `Object` | `{ "Range":"{range}", // Format A1:B5 "SUM":"=SUM({range})", "MAX":"=MAX({range})", "MIN":"=MIN({range})" },` |

You can modify CSS file for change separator of formulas

  

### For translation

you can defined on translation global to replace var `text_XXXX_` _by `statusbar`_

| Option name | Default Value |
| --- | --- |
| `text_AddRowButton`  <br>{_} = input box, previous this is button and after is text_ | Add {} row(s) |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/statusbar.min.js"></script>
<link rel="stylesheet" href="/path/to/statusbar.min.css" type="text/css" />

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'statusBar', plugin:jss_statusbar },
      ...  
    ],
    ...
});
</script>
</html>
```
  

Example with options with Options
---------------------------------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/statusbar.min.js"></script>
<link rel="stylesheet" href="/path/to/statusbar.min.css" type="text/css" />

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'statusBar', plugin:jss_statusbar, options: { 
                 showAddRowButton: false, 
                 formulas:{
                    "COUNT":"=COUNT({range})",
                 } // End formulas
            } // End options
      },
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

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/statusbar.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/statusbar.min.css" type="text/css" />
```

  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/statusbar
```

{.ignore}
```javascript
import jss_statusBar from '@jspreadsheet/statusbar';
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License