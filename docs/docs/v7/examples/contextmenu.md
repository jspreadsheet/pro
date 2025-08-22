title: Custom Spreadsheet Contextmenu
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: How to use and customize the spreadsheet contextmenu. Learn how to add custom actions to your javascript spreadsheets.


# Custom contextmenu

The following example customize the spreadsheet contextmenu removing the copy and paste options.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data1 = [
    ['US', 'Cheese', '2019-02-12'],
    ['CA', 'Apples', '2019-03-01'],
    ['CA', 'Carrots', '2018-11-10'],
    ['BR', 'Oranges', '2019-01-12'],
];

let mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data1,
    columns: [
        { type: 'dropdown', url:'/jspreadsheet/countries', width:200, },
        { type: 'text', width:200, },
        { type: 'calendar', width:100, }
     ],
     allowComments: true,
     contextMenu: function(obj, x, y, e) {
         let items = [];

         if (x == null && y == null) {
             if (e.target.parentNode && e.target.tagName == 'DIV' && e.target.parentNode.classList.contains('jtabs-headers')) {
                 items.push({
                     title: obj.options.text.renameThisWorksheet,
                     onclick: function() {
                         let newName = prompt(obj.options.text.renameThisWorksheet, e.target.innerText);
                         if (newName) {
                             obj.renameWorksheet(e.target, newName);
                         }
                     }
                 });
             }
         } else {
             if (y == null) {
                 // Insert a new column
                 if (obj.options.allowInsertColumn == true) {
                     items.push({
                         title:obj.options.text.insertANewColumnBefore,
                         onclick:function() {
                             obj.insertColumn(1, parseInt(x), 1);
                         }
                     });
                 }

                 if (obj.options.allowInsertColumn == true) {
                     items.push({
                         title:obj.options.text.insertANewColumnAfter,
                         onclick:function() {
                             obj.insertColumn(1, parseInt(x), 0);
                         }
                     });
                 }
             } else {
                 // Insert new row
                 if (obj.options.allowInsertRow == true) {
                     items.push({
                         title:obj.options.text.insertANewRowBefore,
                         onclick:function() {
                             obj.insertRow(1, parseInt(y), 1);
                         }
                     });

                     items.push({
                         title:obj.options.text.insertANewRowAfter,
                         onclick:function() {
                             obj.insertRow(1, parseInt(y));
                         }
                     });
                 }
             }

             // Line
             items.push({ type:'line' });

             // Save
             if (obj.options.allowExport) {
                 items.push({
                     title: obj.options.text.saveAs,
                     shortcut: 'Ctrl + S',
                     onclick: function () {
                         obj.download();
                     }
                 });
             }

             // About
             if (obj.options.about) {
                 items.push({
                     title:obj.options.text.about,
                     onclick:function() {
                         alert(obj.options.about);
                     }
                 });
             }
         }

         return items;
     },
     license: '###license###',
});
</script>
</html>
```
 
