Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![tooltip plugin icon](img/spreadsheet-plugin-tooltip.png)

Tooltip
=======

![preview](https://user-images.githubusercontent.com/52194475/115005696-6ddfa600-9ea8-11eb-9ce4-227e0c35e5fb.png)

Plugin for JSpreadsheet for add tooltip feature on cell.

You can add differents types of tooltip :

* Tooltip info, warning, error, comment
* Tooltip for string (and HTML), array, object
* Add copy value on contextmenu

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.tooltip.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-tooltip)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `positionHorizontal` | Position Horizontal of tooltip | `string` | `"right"` |
| `positionVertical` | Position Vertical of tooltip | `string` | `"bottom"` |
| `forComments` | Active tooltip for comments | `boolean` | `false` |

  
  

### For translation

_If you use general translator, you can translate this plugin to replace "text_" by "tooltip_"_

| Option name | Default Value |
| --- | --- |
| `text_copytooltip` | Copy tooltip text |
| `text_copytooltipall` | Copy all tooltip text |
| `text_copytooltipvalueof` | Copy value of |
| `text_copytooltipcol` | column |
| `text_copytooltiprow` | row |
| `text_notificationvaluecopied` | Value copied to clipboard |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `setTooltip(String cellName, String\|Object\|Array message, _optional_ String type, _optional_ Boolean removeOnChange ) -> Void` | Set tooltip for one cell. Message can be an object of value or Array. In this case, on tooltip use can copy value | `jspreadsheet.current.plugins.tooltip.setTooltip("A1", "My tooltip");` or `myTable.setTooltip("A1", "My tooltip");` |
| `removeTooltip(String cellName) -> Void` | Remove tooltip for one cell | `jspreadsheet.current.plugins.tooltip.removeTooltip("A1");` or `myTable.removeTooltip("A1");` |
| `getTooltipType(String cellName) -> String` | get tooltip type for one cell | `jspreadsheet.current.plugins.tooltip.getTooltipType("A1");` |

  
  

### Helpers

For help to set type, you can use helper

* For tooltip type info : `jspreadsheet.helpers.tooltipType.info`
* For tooltip type success : `jspreadsheet.helpers.tooltipType.success`
* For tooltip type warning : `jspreadsheet.helpers.tooltipType.warning`
* For tooltip type error : `jspreadsheet.helpers.tooltipType.error`
* For tooltip type comment : `jspreadsheet.helpers.tooltipType.comment`

  
  

### Get started

Header on page

{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js">;</script>;
<script src="https://jspreadsheet.com/v10/jsuites.js">;</script>;
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />;
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />;

<script src="/path/to/tooltip.js">;</script>;
<link rel="stylesheet" href="/path/to/tooltip.css" type="text/css" />;

<script>;
var myTable = jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'tooltip', plugin:jss_tooltip, options:{
            forComments: true,
            tooltips: {
                  "A1": {message: "one error example", type:jspreadsheet.helpers.tooltipType.error},
                  "B1": {message: "one warning example with <i>;HTML</i>;<hr>;Ok!", type:jspreadsheet.helpers.tooltipType.warning},
                  "C1": {message: "one success example", type:jspreadsheet.helpers.tooltipType.success},
             }
          }},
      ...  
    ],
    ...
});

// Other way for setTooltip
myTable.setTooltip('A3', {name:'One object', valueString:'OK', valueBoolean:true, valueNumber:4});
myTable.setTooltip('B3', [[1,2,3], [4,5,6], [7,8,9]]);
myTable.setTooltip('C3', [
     {col1: "A", col2: 5, col3: 2.5},
     {col1: "B", col2: 6, col3: 2.3},
     {col1: "C", col2: 1, col3: 1.5, col5: "Test string"},
     {col1: "D", col2: 2, col3: 2.1}
]);
</script>;
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)