Jspreadsheet Plugins

[Back to the plugins section](/docs/plugins/)

  
  
![summary plugin icon](img/spreadsheet-plugin-summary.png)

JSpreadsheet Plugin : Summary
=============================

The summary plugin can make summary of your sheet :

* Create summary on top of sheet
* Create your custom column and rows with custom formula associate to data of sheet (by TABLEPARENT())
* Auto refresh after change on the sheet
* Can associate plugins (like Charts, Conditional Style)

![preview](https://user-images.githubusercontent.com/52194475/104009060-b5201180-51aa-11eb-99f2-aea4445b9612.png)

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.summary.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-summary)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `columns` | Defined all columns of summary like Jexcel | `array` | `[]` |
| `formulas` | List of formulas per row (automaticaly repliqued on all column) | `Object {"YourTitleOnRow":"=YourFormula()"}` | `{}` |
| `freezeWidth` | Freeze row header with minimum width | `int\|null` | `null` |
| `hideOnMobile` | Hide summary on Mobile | `Boolean` | `false` |
| `plugins` | add plugins in summary JExcel | `Array` | `[]` |
| `widthRowIndex` | Width of the headers of rows | `int` | `50` |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `getJExcelSummary() -> Instance of JExcel (Summary)` | Return instance of Jexcel for manipulate programmaticaly | `jspreadsheet.current.plugins.summary.getJExcelSummary();` |

  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.conditionalstyle.js"></script>
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/rowHeaderRename.min.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
   	  { name:'summary', plugin:jss_summary, options:{
            columns: [
                { title: "0 - 19", width: 80 },
                { title: "20 - 29", width: 80 },
                { title: "30 - 39", width: 80 },
                { title: "40 - 49", width: 80 },
                { title: "50 - 59", width: 80 },
                { title: "+ 60", width: 80 },
            ],
            widthRowIndex: 200,
            formulas: {
                "Number of persons" : "=COUNT_AGE(TABLEPARENT(), COLUMN())",
                "Average of salaries" : "=AVG_SUMMARY_SALARIES_BY_AGE(TABLEPARENT(), COLUMN())",
            },
         }},
      ...  
    ],
    ...
});

// functions
var COUNT_AGE = function(instance, column) {
    switch(column) {
        case 1 :
            var ageStart = 0, ageEnd = 19;
            break;
        case 2 :
            var ageStart = 20, ageEnd = 29;
            break;
        case 3 :
            var ageStart = 30, ageEnd = 39;
            break;
        case 4 :
            var ageStart = 40, ageEnd = 49;
            break;
        case 5 :
            var ageStart = 50, ageEnd = 59;
            break;
        case 6 :
            var ageStart = 60, ageEnd = 1000;
            break;
    }
    var data = instance.getColumnData(3);
    var count = 0;
    for(var ite_data in data) {
        if(data[ite_data] >= ageStart && data[ite_data] <= ageEnd) {
            count++;
        }
    }
    return count;
}

var AVG_SUMMARY_SALARIES_BY_AGE = function(instance, column) {
    switch(column) {
        case 1 :
            var ageStart = 0, ageEnd = 19;
            break;
        case 2 :
            var ageStart = 20, ageEnd = 29;
            break;
        case 3 :
            var ageStart = 30, ageEnd = 39;
            break;
        case 4 :
            var ageStart = 40, ageEnd = 49;
            break;
        case 5 :
            var ageStart = 50, ageEnd = 59;
            break;
        case 6 :
            var ageStart = 60, ageEnd = 1000;
            break;
    }
    var data = instance.getColumnData(3);
    var dataSalary = instance.getColumnData(5);
    var salary = [];
    for(var ite_data in data) {
        if(data[ite_data] >= ageStart && data[ite_data] <= ageEnd) {
            salary.push(dataSalary[ite_data]);
        }
    }
    return numeral(AVGSALARY(salary)).format("$#,##0");
}

function AVGSALARY(data) {
    var values = [];
    for(var ite_data in data) {
        var value = data[ite_data];
        value = value.replace(/[^0-9.]/gm, "");
        values.push(Number(value));
    }
    return AVERAGE(values);
}
</script>
</html>
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)