title: Data Grid Cell Comments on Jspreadsheet Version 7
keywords: Jspreadsheet, Jexcel, spreadsheet, javascript, cell comments, javascript table, javascript data grid
description: Understanding data grid cell comments using JavaScript. Create comments on your online spreadsheets.


# Comments on your JavaScript spreadsheet

The following example shows how to start the spreadsheet with a few initial comments and allow users to edit or insert new comments using the context menu.

 

## Manage cell comments programmatically

To apply comments via javascript, you can use the methods setComments or getComments, as follow:

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Cheese', '2019-02-12'],
    ['CA', 'Apples', '2019-03-01'],
    ['CA', 'Carrots', '2018-11-10'],
    ['BR', 'Oranges', '2019-01-12'],
];

let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        {
            type: 'dropdown',
            url:'/jspreadsheet/countries',
            width:200,
        },
        {
            type: 'text',
            width:200,
        },
        {
            type: 'calendar',
            width:200,
        }
     ],
     comments: {
        B1: 'Initial comments on B1',
        C1: 'Iniatial comments on C1'
     },
     oncomments: function() {
         console.log(arguments);
     },
     allowComments: true,
     license: '###license###',
});

document.getElementById('commentBtn1').onclick = function() { spreadsheet.setComments('A1', 'Test'); };
document.getElementById('commentBtn2').onclick = function() { alert(spreadsheet.getComments('A1')); };
document.getElementById('commentBtn3').onclick = function() { spreadsheet.setComments('A1', ''); };
</script>

<button type="button" id="commentBtn1">Set A1 comments</button>
<button type="button" id="commentBtn2">Get A1 comments</button>
<button type="button" id="commentBtn3">Reset A1 comments</button>

</html>
```
  

## Related events

| Event          | Description                                                                 |
| ---------------|-----------------------------------------------------------------------------|
| **oncomments** |  When a comment is added or updated. oncomment(DOMElement el, Object cells) |


