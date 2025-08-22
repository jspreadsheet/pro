title: Spreadsheet Cells Comments
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cells comments
description: Learn more about the spreadsheet cell comments, their methods, events and settings.



# Spreadsheet Comments

Adding comments in the spreadsheet cells is part of the JSS native methods. This section covers the related methods and events for interacting with the spreadsheet comments. 

## Documentation

### Methods

The following methods can be used to get or set comments in one or multiple cells.

| Method      | Description                                                                                                                                                                                                                                                                                |
| ------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getComments | Get comments from a cell or from the whole table.<br/>`spreadsheet.getComments(cellName: String \| null)`<br/>@Param mixed - cell identification or null for the whole table.                                                                                                             |
| setComments | Add comment to one or multiple cells.<br/>`spreadsheet.setComments(cellName: Mixed \| Array, comments: String=)` <br/>@param {string\|Object} - Identification of a cell or an array of objects with multiple comments <br/>@param {string=} comments - Comments to be added to the cell |

 

### Events

The `onbeforecomments` can be used to intercept, change or cancel the result of any comments applied by the user.


| Event            | Description                                                                                                                                                                                                                 |
| -----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforecomments | `onbeforecomments(worksheet: Object, newValue: Array) : Array \| null \| false`<br/>The method should return an `array` with overwritten values, `false` to cancel the action or `null` to continue with the user action. |
| oncomments       | `oncomments(worksheet: Object, newValue: Array, oldValue: Array) : void`                                                                                                                                                    |

 

### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property               | Description                                     |
| -----------------------|-------------------------------------------------|
| allowComments: boolean | Enable the user to enter new comments on cells. |
| comments: array        | Array with the initial comments.                |

 

## Examples

The following example shows how to start the spreadsheet with a few initial comments and allow users to edit or insert new comments using the context menu.

 

### Interact with the cell comments programmatically

To apply comments via JavaScript, you can use the methods setComments or getComments, as follow: Set A1 comments Get A1 comments Reset A1 comments  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['US', 'Cheese', '2019-02-12'],
                ['CA', 'Apples', '2019-03-01'],
                ['CA', 'Carrots', '2018-11-10'],
                ['BR', 'Oranges', '2019-01-12'],
            ],
            columns: [{
                width: '300px',
            }],
            allowComments: true,
            comments: {
                B1:'Initial comments on B1',
                C1:'Iniatial comments on C1'
            },
        }
    ],
    oncomments: function() {
        console.log(arguments);
    }
});

document.getElementById('commentBtn1').onclick = function() { worksheets[0].setComments('A1', 'Test'); };
document.getElementById('commentBtn2').onclick = function() { alert(worksheets[0].getComments('A1')); };
document.getElementById('commentBtn3').onclick = function() { worksheets[0].setComments('A1', ''); };
</script>

<br/>
<button type="button" id="commentBtn1">Set A1 comments</button>
<button type="button" id="commentBtn2">Get A1 comments</button>
<button type="button" id="commentBtn3">Reset A1 comments</button>
</html>
```
  

## Related content

### Advanced comments extension

![multiple comments](img/multiple-comments.png)

It is possible to create multiple comments in a cell with the user identification using the advance comments extension available in the Premium edition. [Click here to understand more about that.](/products/comments)
