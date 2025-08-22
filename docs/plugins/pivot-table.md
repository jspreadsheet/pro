Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![pivot table plugin icon](img/spreadsheet-plugin-pivot-table.png)

JSpreadsheet Plugin : pivot Table
=================================

The pivot table plugin add lot of features for make a pivot table like Excel :

* Create Sheet in mode pivot table
* Create slicer for filter data
* Filter data
* Make custom function for values
* Make custom sort of columns/rows/slicers
* Can run other plugin specifics (for example : conditional style)

![preview](https://user-images.githubusercontent.com/52194475/104006056-4a6cd700-51a6-11eb-88af-db819d2bb872.png)

This plugin is **Premium**

  

Demo
----

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.pivottable.php)

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-pivottable)

  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `colsSortBy` | Defined custom sort of columns in pivot | `function\|null` | `null` |
| `columns` | List of name or column name ("A") or column index (0 = first column) | `Array` | `null` |
| `data` | if data null, data is get on instance | `Array\|null` | `null` |
| `filters` | filters present of pivot "columnName":value/regexp/arrayofvalue | `Object` | `{}` |
| `footers` | Show footers of pivot (Total columns) | `Boolean` | `false` |
| `hideSheetData` | hide sheet with data | `Boolean` | `false` |
| `plugins` | Plugins for instance JExcel of pivot | `Array\|null` | `null` |
| `rows` | List of name or column name ("A") or column index (0 = first column) | `Array` | `[]` |
| `rowSortBy` | Custom sort row (index, array of index, function) | `int\|array\|function` | `null` |
| `showEmptyColumns` | Show columns with no data | `boolean` | `false` |
| `slicers` | List of name or column name ("A") or column index (0 = first column) | `Array` | `[]` |
| `slicersSortBy` | Custom sort slicers (function with indexSlicers) | `function` | `null` |
| `values` | Name or column name ("A") or column index (0 = first column) | `string\|int` | `null` |
| `valuesFormula` | Results cross row/column | `string(SUM/COUNT/AVG/MIN/MAX)\|function` | `"SUM"` |

  
  

### For translation

| Option name | Default Value |
| --- | --- |
| `text_allItems` | All items |
| `text_empty` | (empty) |
| `text_resultsOf` | Results of |
| `text_slicer_multiple` | Multiple select |
| `text_slicer_clear` | Clear select |
| `text_total` | Total |

  
  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `setData(Array) -> Void` | Defined data for pivotTable | `jspreadsheet.current.plugins.pivotTable.setData([[1,2,3],[4,5,6]]);` |
| `updatePivot() -> Void` | refresh pivot from data | `jspreadsheet.current.plugins.pivotTable.updatePivot();` |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.pivotTable.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
        ...
        { name:'pivot', plugin:jss_pivotTable, options:{
                rows: ["A", "B", "C"], 
                columns: ["E", "F", "G"], 
                values: "H", 
                valuesFormula: "SUM", 
                filters: {"C": ["New York", "London"]},
                slicers: ["C", "E", "F", "G"],
                rowsSortBy: [2,1],
                colsSortBy: function(RowA, RowB) {
                    var a_value_col2 = RowA[2];
                    var b_value_col2 = RowB[2];
                    if(RowA[0] == RowB[0]) {
                        if(RowA[1] == RowB[1]) {
                            if(a_value_col2 == b_value_col2) {
                                return 0;
                            } else {
                            var a_index = orderReferential.indexOf(a_value_col2);
                            var b_index = orderReferential.indexOf(b_value_col2);
                            return a_index>b_index ? 1:-1;
                            }
                        } else {
                            return RowA[1]>RowB[1] ? 1:-1;
                        }
                    } else {
                        return RowA[0]>RowB[0] ? 1:-1;
                    }
                },
                slicersSortBy: function(a, b, indexSlicer) {
                    if(a==b) {
                        return 0;
                    }
                    if(indexSlicer==0) { // First slicer
                        var a_index = orderReferential.indexOf(a.toLowerCase());
                        var b_index = orderReferential.indexOf(b.toLowerCase());
                        return a_index>b_index ? 1:-1;
                    } else { // Default
                        return a>b ? 1:-1;
                    }
                },
                worksheetName: "Pivot Table",
                hideSheetData: false,
                plugins:null,
                footers: false,
            }},
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