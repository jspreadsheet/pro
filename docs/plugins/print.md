Jexcel Plugins

[Back to the plugins section](/v10/plugins/)

![print plugin icon](img/print-plugin-icon.png)

JSpreadsheet Plugin : print
===========================

The print plugin add lot of features for print sheet as :

Add icon on toolbar

* Print all cells of sheet (page break with lot of rows)
* Print area defined, print selection or print result search
* Print all sheets (tabs)
* Orientation of page
* Zoom
* Apply Style of Cell for print (i.e. print CSS of conditional style)
* Popup print
* Replace checkbox by string Yes / No
* Print cells with Charts / Image
* Row breaker (define row who break page)

![preview](https://user-images.githubusercontent.com/52194475/123638873-f1f6c800-d81f-11eb-861c-8767ef3857ee.png)

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.print.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-print)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `allowPrint` | Allow print for page | `Boolean` | `true` |
| `allowShortcut` | Allow shortcut CTRL+P for open popup of print | `Boolean` | `true` |
| `autoprint` | start print automaticaly after preview. Set false for force preview before print | `Boolean` | `true` |
| `header` | Show columns header on print | `Boolean` | `true` |
| `index` | Show rows index on print | `Boolean` | `true` |
| `orientation` | Defined orientation of page  <br><br>* auto : page orientation defined by printer<br>* landscape : page orientation force to landscape<br>* portrait : page orientation force to portrait | `String` | `auto` |
| `range` | Defined area range | `ArrayOfCoord[x1,y1,x2,y2] or String "A1:B5"` | `null` |
| `rowBreaker` | Defined page breaker after number of rows | `Int\|"auto"` | `"auto"` |
| `style` | Defined styles CSS | `String\|Function` | `(blank)` |
| `stylesheet` | Defined url of style file .css | `String` | `(blank)` |
| `title` | Title of page printed | `String` | `(blank)` |
| `zoom` | Zoom of page printed (1 = 100%) | `Float` | `1` |

  
  

### For translation

_If you use general translator, you can translate this plugin to replace "text_" by "print_"_

| Option name | Default Value |
| --- | --- |
| `text_true` | Yes |
| `text_false` | No  |
| `text_orientation` | Orientation |
| `text_orientation_landscape` | Landscape |
| `text_orientation_portrait` | Portrait |
| `text_orientation_auto` | Printer settings |
| `text_zoom` | Zoom |
| `text_title` | Title of page |
| `text_popup_title` | Print options |
| `text_index` | Show index of rows |
| `text_header` | Show header of columns |
| `text_print_area` | Print area |
| `text_print_selection` | Print selection |
| `text_print_resultsearch` | Print results of search |
| `text_print_all` | Print all rows of the sheet |
| `text_print_area_defined` | Print area defined |
| `text_print` | Print |
| `text_printpreview` | Preview |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `do(_optional_ Object optionsPrint) → Void` | execute print with options, if optionsPrint is null, print with default options | `jspreadsheet.current.plugins.print.do({title:'test button print', index:false});` |
| `open() → Void` | Open popup print | `jspreadsheet.current.plugins.print.open();` |
| `preview(_optional_ Object optionsPrint) → Void` | execute preview print with options, if optionsPrint is null, preview with default options | `jspreadsheet.current.plugins.print.preview({title:'test button print', index:false});` |
| `resetRange() → Void` | remove range print area | `jspreadsheet.current.plugins.print.resetRange();` |
| `setRange(Array\|String range) → Void` | set range print area (by Coord \[x1,y1,x2,y2\] of A1:B10) | `jspreadsheet.current.plugins.print.setRange("A1:B10");` |
| `setStyle(String style) → Void` | set style of page printed | `jspreadsheet.current.plugins.print.setStyle(".jexcel tbody tr td.cellAlert {background-color: #f46e42!important;color: #ffffff;}");` |

  
  

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `onprint` | event dispatch after start print and preview | `onprint(ElementJExcel)` |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.print.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: \[
      ...
      { name:'print', plugin:jss_print},
      ...  
    \],
    ...
});
</script>
</html>
```
  

Example
-------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.print.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
        ...
        { name:'print', plugin:jss_print, options:{title:"test print", index:false, style:function(obj) { return obj.plugins.conditionalstyle.getCSS(); }} }, // For apply style of plugin conditional style
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