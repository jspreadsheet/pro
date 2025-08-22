Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![conditional style plugin icon](img/conditional-style-plugin-icon.png)

Conditional style
=================

The Conditional Style plugin like conditional style of Excel. With this plugin, you can:  
  

* Add conditional style on Jspreadsheet like Excel on specific cell, column, row, range or all cells
* Order conditional style and stop apply when criteria is true
* Add style with class or style properties
* Add icon on cell with material-icons

  
![preview](https://user-images.githubusercontent.com/52194475/91465458-15fb1d00-e88e-11ea-960a-c79f42f55b7b.png)  

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.conditionnalstyle.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-conditionalstyle)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `allUpdateAlways` | Update all cell on all refresh, when this property is set to false, refresh only cell changed and impacted (linked by formula) | `Boolean` | `false` |
| `rules` | Define all rules in order of apply | `Array of rules` | `[]` |
| `pathClassName` | Path css class name. When you apply style, this plugin create a new class CSS, and this path can specific spreadsheet to apply | `String` | `.jexcel tbody tr td` |

  
  

### Options of Rules

| Option name | Description | Type | Example |
| --- | --- | --- | --- |
| `Range (optional)` | Range of cells. Can be add multiple ranges separate by `;`. If not defined, by default is all cells of sheet  <br>Other syntax available : 1:1 = All data of row 1 A:A = All data of column A | `String` | `{range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"},` |
| `criteria (optional)` | Is condition for apply rules. Critera is directly a value or a formula. If not defined, by default is apply to all cells of sheet | `String / Int / Float / Boolean / Function` | `{criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}, stopIfTrue:true},` |
| `style (optional)` | Style apply on cell if result of criteria is right | `String` | `{criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}},` |
| `class (optional)` | Class CSS apply on cell if result of critera is right | `String` | `{range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"},` |
| `stopIfTrue (optional)` | this option like Excel, if rule is apply, stop apply conditional style for this cell (no go check next rule). By Default is `false` | `Boolean` | `<i class="context_icon material-icons">create</i>` |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `addRule(Range, Criteria, Style, Class, Position) -> Void` | Create new rule | `jspreadsheet.current.plugins.conditionalstyle.addRule("B:B", ">3000", "color: red;", null, 1);` |
| `editRule(Position, Range, Criteria, Style, Class) -> Void` | Edit rule on specific position | `jspreadsheet.current.plugins.conditionalstyle.editRule(1, "B:B", "<3000", "color: red;", null);` |
| `getCSS() -> String` | Get all CSS of styles. Use for example with print plugin | `{ name:'print', plugin:jss_print, options:{style:function(obj) { return obj.plugins.conditionalstyle.getCSS(); }} },` |
| `moveRulePosition(Position, NewPosition) -> Void` | Move rule to specific position | `jspreadsheet.current.plugins.conditionalstyle.moveRulePosition(1, 3);` |
| `removeRule(Position) -> Void` | Remove rule on specific position | `jspreadsheet.current.plugins.conditionalstyle.removeRule(3);` |

  
  

Example
-------

Header on page

{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.conditionalstyle.js"></script>

<style>    
    .jexcel tbody tr td.cellAlert {
        background-color: #f46e42!important;
        color: #ffffff;
    }    
</style>
```
Initialize plugin on JSpreadsheet

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
           { name:'conditionalstyle', plugin:jss_conditionalstyle, options:{rules:[
               // #Rules 1 : For Range B1:B10 and Row 1, cell = Honda use ClassCss cellAlert
                    {range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"}, 
                    // #Rule 2 : All data of Column G if value > 3000, apply this style and stop here (no check next rules if true)
                    {range:"G:G", criteria: ">3000", style:{"color": "red", "font-weight":"bold", "background-color": "LightPink"}, stopIfTrue:true}, 
                    // #Rule 3 : All data of Column F, if value = true (checkbox), apply style and stop here (no check next rules if true)
                    {range:"F:F", criteria: true, style:"background-color:green", stopIfTrue:true}, 
                    // #Rule 4 All sheet, If rule is even, apply style                      
                    {criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}},  
            ]}},
      ...  
    ],
    ...
});
</script>
```
  
  

Copyright and license
=====================

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
