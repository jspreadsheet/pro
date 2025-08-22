title: Enable and customize the toolbar on your spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, vanilla javascript, excel-like, spreadsheet, datatables, data, table, toolbars
description: An example of how to enable or customize your JavaScript spreadsheet toolbar.


# Spreadsheet Toolbar

Jspreadsheet brings the basic options in the default toolbar, but it would be also possible to customize that options as shown in the following examples.

 
## Default toolbar

The following example shows how to enable the default toolbar in the worksheet.

**NOTE:** Material icons style sheet is mandatory for the toolbar usage.

It is also possible to show or hide the custom toolbar using JavaScript.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [15,5],
    toolbar: true,
    allowComments: true,
    license: '###license###',
});


document.getElementById("showbtn").onclick = () => grid.showToolbar();
document.getElementById("hidebtn").onclick = () => grid.hideToolbar();
</script>

<input type='button' value='Show Toolbar' id="showbtn">
<input type='button' value='Hide Toolbar' id="hidebtn">
</html>
```
  

## Customized toolbar

It is possible to customize the toolbar using the initialization property `toolbar` as below.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data2 = [
    ['Canada', 'Cheese', 1],
    ['Japan', 'Apples', 0],
    ['United States', 'Carrots', 1],
    ['China', 'Oranges', 0],
];

let customToolbar = {
    items: [
        {
            content: 'save',
            onclick: function () {
                table.download();
            }
        },
        {
            type:'divisor',
        },
        {
            type:'select',
            width: '160px',
            options: [ 'Verdana', 'Arial', 'Courier New' ],
            render: function(e) {
                return '<span style="font-family:' + e + '">' + e + '</span>';
            },
            onchange: function(a,b,c,d) {
                table.setStyle(table.getSelected(), 'font-family', d);
            }
        },
        {
            type: 'select',
            width: '50px',
            options: ['format_align_left','format_align_center','format_align_right','format_align_justify'],
            render: function(e) {
                return '<i class="material-icons">' + e + '</i>';
            },
            onchange: function(a,b,c,d) {
                if (d == 'format_align_left') {
                    table.setStyle(table.getSelected(), 'text-align', 'left');
                } else if (d == 'format_align_center') {
                    table.setStyle(table.getSelected(), 'text-align', 'center');
                } else if (d == 'format_align_right') {
                    table.setStyle(table.getSelected(), 'text-align', 'right');
                } else if (d == 'format_align_justify') {
                    table.setStyle(table.getSelected(), 'text-align', 'justify');
                }
            }
        },
        {
            type: 'i',
            content: 'format_bold',
            onclick: function(a,b,c) {
                table.setStyle(table.getSelected(), 'font-weight', 'bold');
            }
        },
        {
            type: 'i',
            content: 'format_color_text',
            onclick: function(element, instance, item) {
                if (! item.color) {
                    let colorPicker = jSuites.color(item, {
                        onchange:function(o, v) {
                            table.setStyle(table.getSelected(), 'color', v);
                        }
                    });
                    colorPicker.open();
                }
            }
        },
        {
            type: 'i',
            content: 'format_color_fill',
            onclick: function(element, instance, item) {
                if (! item.color) {
                    let colorPicker = jSuites.color(item, {
                        onchange:function(o, v) {
                            table.setStyle(table.getSelected(), 'background-color', v);
                        }
                    });
                    colorPicker.open();
                }
            }
        }
    ]
}

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data2,
    columns: [
        {
            title: 'Country',
            type: 'autocomplete',
            source: ['Brazil','Canada','China','Japan','United States','United Kingdom'],
            width: '300px',
        },
        {
            title: 'Food',
            type: 'dropdown',
            source:['Apples','Bananas','Carrots','Oranges','Cheese'],
            width: '150px',
        },
        {
            title: 'Stock',
            type: 'checkbox',
            width: '100px',
        },
    ],
    toolbar: customToolbar,
    license: '###license###',
});
</script>
</html>
```
  

## Toolbar options

The following options define how jspreadsheet would render its toolbar.

NOTE: Same of the properties below are only available from jSuites v3.5.1+

| Property                  | Description                                                                                                                                                              |
| --------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **type: string**          |  Element type: i \| icon \| divisor \| label \| select \| color                                                                                                     |
| **content: string**       |  Element content, could be a text string or the icon (from material icons) when you use type: icon; [click here for all possible keys](https://material.io/tools/icons/) |
| **title: boolean**        |  Tooltip for the toolbar element                                                                                                                                         |
| **width: number**         |  Toolbar element width                                                                                                                                                   |
| **state: boolean**        |  Add state controller to the toolbar element                                                                                                                             |
| **active: boolean**       |  Initial state for the toolbar element                                                                                                                                   |
| **class: string**         |  CSS Class for each toolbar element                                                                                                                                      |
| **options**               |  When type is select, this option would define the items of the dropdown.                                                                                                |
| **value: number**         |  The initial selected option for the type: select                                                                                                                        |
| **render: method**        |  Parse the items of type: select.                                                                                                                                        |
| **onclick: method**       |  When a item is clicked                                                                                                                                                  |
| **onchange: method**      |  For the type select when a new item is selected                                                                                                                         |
| **k: string (deprected)** |  means the style should be apply to the cell;                                                                                                                            |
| **v: string (deprected)** |  means the value of the style should be apply to the cell; When type:select, you can define an array of possibles values;                                                |



[More about the jSuites toolbar](https://jsuites.net/docs/toolbar)
