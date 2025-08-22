title: JavaScript Grid Selection
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cell selection, cell reset
description: This section brings more information about properties, events and methods to deal with the javascript grid selection.



# Data Grid Selection

This section is dedicated to all properties, events and methods for handling selection on the JavaScript grid. 

## Documentation

### Methods

Methods available to deal with the JavaScript grid selection

| Method                    | Description                                                                                                                                                                  |
| --------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                           |
| #### Main selection       |
|                           |
| getHighlighted            | Get the coordinates of the highlighted cells.<br/>`getHighlighted() : Array \| null`<br/><br/>                                                                              |
| getRange                  | Get the range description of the highlighted cells.<br/>`getRange() : String \| null`<br/><br/>                                                                             |
| selectAll                 | Select all cells.<br/>`selectAll() : void`<br/><br/>                                                                                                                         |
| updateSelection           | Select the cells from the coordinates of a DOM element.<br/>`updateSelection(e1: DOMElement, e2: DOMElement) : void`<br/><br/>                                               |
| updateSelectionFromCoords | Select the cells by coordinates.<br/>`updateSelectionFromCoords(x1: Number, y1: Number, x2: Number, y2: Number) : void`<br/><br/>                                            |
| resetSelection            | Remove the selection.<br/>`resetSelection() : void`<br/><br/>                                                                                                                |
| isSelected                | Verify if the coordinates given are included in the current selection.<br/>`isSelected(x: Number, y: Number) : Boolean`<br/><br/>                                            |
|                           |
| #### Secondary selections |
|                           |
| setBorder                 | Create or update an existing selection with a defined color.<br/>`setBorder(x1: Number, y1: Number, x2: Number, y2: Number, selectionName: string, colorHex: string) : void` |
| getBorder                 | Get the selection border object.<br/>`getBorder(selectionName: string) : void`                                                                                               |
| resetBorders              | Reset the selection by its name.<br/>`resetBorders(selectionName?: string, resetPosition: boolean) : void`<br/>Reset all exiting borders when selectionName is not defined.  |
| refreshBorders            | Refresh one or more selections.<br/>`refreshBorders(selectionName?: string) : void`<br/>Refresh all existing borders when selectionName is not defined.                      |

 

### Events

| Event       | Description                                                                                            |
| ------------|--------------------------------------------------------------------------------------------------------|
| onblur      | `onblur(worksheet: Object) : void`                                                                     |
| onfocus     | `onfocus(worksheet: Object) : void`                                                                    |
| onselection | `onselection(worksheet: Object, x1: Number, y1: Number, x2: Number, y2: Number, e: MouseEvent) : void` |

 

### Initial Settings

| Property               | Description                  |
| -----------------------|------------------------------|
| selectionCopy: boolean | Disable the clone selection. |

 

## Examples

### Programmatic spreadsheet selection

Select all worksheet cells in the grid programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<button id="selectallbtn">Select all</button>
<button id="updateselectionbtn">updateSelectionFromCoords(2,2,3,3)</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("selectallbtn").onclick = () => table[0].selectAll();
document.getElementById("updateselectionbtn").onclick = () => table[0].updateSelectionFromCoords(2,2,3,3);
</script>
</html>
```
  

### Secondary borders

Create secondary borders on the spreasdheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<button id="createredbtn">Create new red selection</button>
<button id="createbluebtn">Create new blue selection</button>
<button id="resetbtn">Clear all selection</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("createredbtn").onclick = () => table[0].setBorder(1,1,2,2,'red-visit','#ff0000')
document.getElementById("createbluebtn").onclick = () => table[0].setBorder(3,3,4,4,'blue-visit','#0000ff')
document.getElementById("resetbtn").onclick = () => table[0].resetBorders()
</script>
</html>
```
 
