title: JavaScript Data Grid Selection
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cell selection, cell reset
description: This section brings more information about properties, events and methods to deal with the javascript grid selection.



# Data Grid Selection

This section is dedicated to all properties, events and methods for handling selection on the JavaScript data grid. 

## Documentation

### Methods

Methods available to deal with the JavaScript grid selection

| Method                    | Description                                                                                                                       |
| --------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| getHighlighted            | Get the coordinates of the highlighted cells.<br/>`getHighlighted() : Array \| null`<br/><br/>                                   |
| getRange                  | Get the range description of the highlighted cells.<br/>`getRange() : String \| null`<br/><br/>                                  |
| selectAll                 | Select all cells.<br/>`selectAll() : void`<br/><br/>                                                                              |
| updateSelection           | Select the cells from the coordinates of a DOM element.<br/>`updateSelection(e1: DOMElement, e2: DOMElement) : void`<br/><br/>    |
| updateSelectionFromCoords | Select the cells by coordinates.<br/>`updateSelectionFromCoords(x1: Number, y1: Number, x2: Number, y2: Number) : void`<br/><br/> |
| resetSelection            | Remove the selection.<br/>`resetSelection() : void`<br/><br/>                                                                     |
| isSelected                | Verify if the coordinates given are included in the current selection.<br/>`isSelected(x: Number, y: Number) : Boolean`<br/><br/> |

 

### Data Grid Events

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

Select all worksheet cells in the data grid programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br/>
<button id="selectallbtn">Select all</button>
<button id="updateselectionbtn">updateSelectionFromCoords(2,2,3,3)</button>

<script>
// Set the JSS spreadsheet license
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
 
