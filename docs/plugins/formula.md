Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![formula plugin icon](img/spreadsheet-plugin-formula.png)

Formula
=======

The formula plugin add feature of formulabar and formula editor on cell, you can:  
  

* Tape F2 after selection cell, and your focus is on formula bar for edit.
* When cell is readonly, formulabar show on readonly value of cell.
* Input formula bar is in multiline, tape ALT+ENTER and new line is created on formula bar.
* If cell type is not recognize for formula, first char "=" is denied.
* Range of cells present on formula is colored on focus in formula bar
* Support custom formula + documentation
* Support multi formula autocomplete
* Highlight formula
* edit on cell
* Select Range and Cell for add reference in formula

![preview](https://user-images.githubusercontent.com/52194475/115026029-4bf31d00-9ec2-11eb-8277-75037ec53694.png)

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.formula.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-formula)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `allowAutocomplete` | Allow autocomplete formula for help write formula | `Boolean` | `true` |
| `allowMultiline` | Allow multiline in formulabar | `Boolean` | `true` |
| `allowHighlightFormula` | Allow formula highlighted | `Boolean` | `true` |
| `allowHelper` | Allow show helper | `Boolean` | `true` |
| `autocompleteSearchApproximative` | Search if text is in formula (not only start by) | `Boolean` | `false` |
| `allowFormulaOnTypes` | Allow type of cell write formula start by "=". Each type is separate by space | `String` | `number text` |

  
  

### For translation

| Option name | Default Value |
| --- | --- |
| `text_about` | About |
| `text_example` | Example |
| `text_orientation` | Orientation |
| `text_results` | Results |
| `text_param` | Parameter |
| `text_link` | Learn more |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `hideBar() → Void` | Hide formula bar | `jspreadsheet.current.plugins.formula.hide();` |
| `refreshDoc() → Void` | Refresh Documentation after edit element of Formula documentation | `jspreadsheet.current.plugins.formula.refreshDoc();` |
| `showBar() → Void` | Show formula bar | `jspreadsheet.current.plugins.formula.show();` |
| `formulabarInput` | Get Element of formula | `jspreadsheet.current.plugins.formula.formulabarInput` |

  
  

Formula documentation
---------------------

You can write your documentation of formulas, by default, this documentation is the same of Google Sheet formula. For write your documentation, add new item on the var `jexcel.formulasDoc`

1 item of jspreadsheet.formulasDoc is construct like:

{.ignore}
```javascript
jspreadsheet.formulasDoc['MYFUNCTION()'] = {
       syntax:"MYFUNCTION(value, value)",
       description:"My custom function description ",
       examples:"MYFUNCTION(2008, 7) equals 25",
       params:[
           {type:"Float", comment:"First value"},
           {type:"Float", comment:"Second value"}
        ],
       link:"https://mydocs.domain.ext/doc/123456"
};
```

Important on `jspreadsheet.formulasDoc` object, define key property formula with () to end else it considers it as a variable.

| Property name | Description |
| --- | --- |
| `syntax` | Syntax of your formula |
| `description` | Description of your formula |
| `examples` | Example of your formula |
| `params (Array)` | Array for description parameters with for 1 param : `type` and `comment` |
| `link` | Link for external documentation |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.formula.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.formula.css" type="text/css" />

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'formula', plugin:jss_formula },
      ...  
    ],
    ...
});
</script>
```
Example with custom formula
---------------------------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.formula.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.formula.css" type="text/css" />

// Definitions
<script>
   var MY_CUSTOM_FORMULA = function(a,b) { return a+b; };
   jspreadsheet.formulasDoc["MY_CUSTOM_FORMULA()"] = {
      syntax:"MY_CUSTOM_FORMULA(number,number)",
      description:"One custom formula for test"
   };
</script>


// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'formula', plugin:jss_formula },
      ...  
    ],
    ...
});
</script>
```
Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)