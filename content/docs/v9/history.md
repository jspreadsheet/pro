title: Spreadsheet Change History
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, history changes, spreadsheet updates
description: Learn how to interact with the history tracker of your spreadsheet.



# Spreadsheet Change History

All important changes in the spreadsheet are tracked under the History internal container. From version 8 on, the history is one array shared for all worksheets. In this section, we provide a few more details about the spreadsheet changes tracker. 

## Documentation

### Methods

The undo and redo methods are normally invoked by the CTRL+Z, CTRL+Y keyboard shortcut. The following methods can be called programmatically, as follows:

| Method             | Description                                                                        |
| -------------------|------------------------------------------------------------------------------------|
| undo()             | Undo the last spreadsheet changes.<br/>`undo() : void`                             |
| redo()             | Redo the most recent spreadsheet changes.<br/>`redo() : void`                      |
| setHistory(object) | Redo the most recent spreadsheet changes.<br/>`setHistory(history: Object) : void` |
| resetHistory()     | Redo the most recent spreadsheet changes.<br/>`resetHistory() : void`              |

 

### Events

Events related to the history changes tracker.

| Event  | Description                                                                                                                                                         |
| -------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onredo | `onredo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |
| onundo | `onundo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |

 

## Example

As explained above, the history actions are available on the spreadsheet level. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<br/>
<input type="button" value="Undo" id="undobtn" />
<input type="button" value="Redo" id="redobtn" />
<input type="button" value="Reset" id="resetbtn" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8, 8],
    }],
});

document.getElementById("undobtn").onclick = () => spreadsheet[0].undo()
document.getElementById("redobtn").onclick = () => spreadsheet[0].redo()
document.getElementById("resetbtn").onclick = () => spreadsheet[0].parent.resetHistory()
</script>
</html>
```
 
