title: Spreadsheet Toolbars
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, toolbars
description: This section covers more information on how to add and customize the spreadsheet toolbar.



# Spreadsheet toolbar

Different from previous versions, there is now one toolbar for multiple worksheets. 

## Documentation

### Methods

The following methods can be used to show, hide or customize the toolbar.

| Method      | Description                                                                                                                                                          |
| ------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getToolbar  | Get the toolbar's current settings.<br/>`getToolbar() : Object`                                                                                                      |
| setToolbar  | Redefine the toolbar settings.<br/>`setToolbar(Object settings) : void` <br/>@param {Object} - Toolbar object, the allowed options are described in the table below. |
| showToolbar | Show the toolbar using the current settings.<br/>`showToolbar() : void`                                                                                              |
| hideToolbar | Hide the toolbar.<br/>`hideToolbar() : void`                                                                                                                         |

 

### Toolbar Object

It is possible to customize the toolbar items though the initialization using the following properties.

| Property                       | Description                                                                                                                                                              |
| -------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Toolbar general properties** |
| container: boolean             | Show the toolbar container border.                                                                                                                                       |
| badge: boolean                 | Add a badge container for each toolbar element.                                                                                                                          |
| title: boolean                 | Show title below the icons.                                                                                                                                              |
| responsive: boolean            | Responsive toolbar. Default: false                                                                                                                                       |
| items: Array of toolbar item   | Items for the toolbar.                                                                                                                                                   |
| **Toolbar item properties**    |
| type: string                   | Element type: icon \| divisor \| label \| select                                                                                                                      |
| content: string                | Content of the toolbar element                                                                                                                                           |
| title: boolean                 | Tooltip for the toolbar element                                                                                                                                          |
| width: number                  | Toolbar element width                                                                                                                                                    |
| active: boolean                | Initial state for the toolbar element                                                                                                                                    |
| class: string                  | CSS Class for each toolbar element                                                                                                                                       |
| value: number                  | The initially selected option for the type: select                                                                                                                       |
| render: method                 | Render method parser for the elements in the dropdown when type: select                                                                                                  |
| onclick: method                | When an item is clicked                                                                                                                                                  |
| onchange: method               | When a new item is selected. Valid for the type: select.                                                                                                                 |
| updateState: Function          | Create the item state controller.<br/>`updateState: function(toolbarElement: HTMLElement, toolbarInstance: Object, toolbarItem: HTMLElement, worksheet: Object) => void` |

 

## Examples

### Basic example with programmatic toggle

The following example shows how to enable the default toolbar and hide or show it programmatically after initialization. 

**NOTE:** Material icons style sheet are mandatory for toolbar usage.

It is also possible to show or hide the custom toolbar using JavaScript.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet"
    type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [8,5] },
    ],
    toolbar: true,
});

document.getElementById("showbtn").onclick = () => grid[0].parent.showToolbar();
document.getElementById("hidebtn").onclick = () => grid[0].parent.hideToolbar();
</script>

<input type='button' value='Show Toolbar' id="showbtn">
<input type='button' value='Hide Toolbar' id="hidebtn">
</html>
```
  

### Custom toolbar item

You can set the toolbar property as a function as shown below. This enables a new custom item in the default toolbar without recreating a new toolbar from scratch. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: function(toolbar) {
        // Add a new custom item in the end of my toolbar
        toolbar.items.push({
            tooltip: 'My custom item',
            content: 'share',
            onclick: function() {
                alert('Custom click');
            }
        });

        return toolbar;
    },
    worksheets: [{
        minDimensions: [8,10],
    }]
});
</script>
</html>
```
  

### Custom toolbar

Using the toolbar property, it is possible to customize the items in the spreadsheet toolbar. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let customToolbar = {
    items: [
        {
            content: 'save',
            onclick: function () {
                jspreadsheet.current.download();
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
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-family', d);
            }
        },
        {
            type: 'i',
            content: 'format_bold',
            onclick: function(a,b,c) {
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-weight', 'bold');
            }
        },
        {
            type: 'i',
            content: 'format_italic',
            onclick: function(a,b,c) {
                jspreadsheet.current.setStyle(jspreadsheet.current.getSelected(), 'font-style', 'italic');
            }
        },
        {
            content: 'search',
            onclick: function(a,b,c) {
                if (c.children[0].innerText == 'search') {
                    jspreadsheet.current.showSearch();
                    c.children[0].innerText = 'search_off';
                } else {
                    jspreadsheet.current.hideSearch();
                    c.children[0].innerText = 'search';
                }
            },
            tooltip: 'Toggle Search',
            updateState: function(a,b,c,worksheet) {
                // Call this one when the worksheet is opened and on the selection of any cells
                if (worksheet.options.search == true) {
                    c.children[0].innerText = 'search_off';
                } else {
                    c.children[0].innerText = 'search';
                }
            }
        }
    ]
}

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8,10],
    }],
    toolbar: customToolbar
});
</script>
</html>
```
 
