title: Enable and customize the toolbar on your spreadsheet
keywords: Jspreadsheet, javascript, vanilla javascript, excel-like, spreadsheet, datatables, data, table, toolbars
description: An example of how to enable or customize your JavaScript spreadsheet toolbar.



# Spreadsheet toolbars

The following examples shows how to include or customize the toolbar or your javascript spreadsheets.

## Basic example

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10,10],
    toolbar: true,
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```

## Customized toolbar

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
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
    toolbar:[
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
            k: 'font-weight',
            v: 'bold'
        },
        {
            type: 'color',
            content: 'format_color_text',
            k: 'color'
        },
        {
            type: 'color',
            content: 'format_color_fill',
            k: 'background-color'
        }
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
  

## Instructions

The toolbar can be customized with a few parameters.

| Property      | Description                                                                                                                                          |
| --------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| _**type**_    |  could be **i** for icon, **select** for a dropdown, **color** or a colorpicker.                                                                     |
| _**content**_ |  defines the icon (from material icons) when you use type:i; [click here for all possible keys](https://material.io/tools/icons/)                    |
| _**k**_       |  means the style should be apply to the cell;                                                                                                        |
| _**v**_       |  means the value of the style should be apply to the cell; When type:select, you can define an array of possibles values;                            |
| _**onclick**_ |  can be used together with type:i to implement any custom method. The method will receive the Jspreadsheet instance and all marked cells by default. |



**NOTE:** Material icons style sheet is mandatory for the toolbar usage.
