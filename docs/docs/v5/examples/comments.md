title: Data Grid Cell Comments
keywords: Jspreadsheet, spreadsheet, javascript, cell comments, javascript table
description: How to add user comments in your spreadsheets cells.



# Comments on your javascript spreadsheet

Jspreadsheet Pro javascript spreadsheet plugin allows the user to set custom comments for each individual cells. By allowComments in the initialization, the user will be able to add comments in the right click contextMenu.

 

## How to manage the cell comments programmatically

To apply comments via javascript, you can use the methods setComments or getComments, as follow:

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
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
        {
            type: 'dropdown',
            url:'https://jspreadsheet.com/v4/countries',
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
     allowComments: true,
     license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById('commentBtn1').onclick = function() { mySpreadsheet.setComments('A1', 'Test'); };
document.getElementById('commentBtn2').onclick = function() { alert(mySpreadsheet.getComments('A1')); };
document.getElementById('commentBtn3').onclick = function() { mySpreadsheet.setComments('A1', ''); };
</script>

<button type="button" id="commentBtn1">Set A1 comments</button>
<button type="button" id="commentBtn2">Get A1 comments</button>
<button type="button" id="commentBtn3">Reset A1 comments</button>
</html>
```
