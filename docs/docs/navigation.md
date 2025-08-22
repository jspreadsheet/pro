title: Jspreadsheet Navigation Methods
keywords: Jspreadsheet, navigation, spreadsheet navigation, data grid movement, goto, pageUp, pageDown, left, up, right, down, last, first
description: Discover Jspreadsheet's navigation methods for data grid cell and worksheet movement, including goto, pageUp, pageDown, left, up, right, down, last, and first, with code examples.

# Jspreadsheet Navigation Methods

## Navigation Methods

Jspreadsheet provides a set of methods to programmatically navigate through cells and worksheets within a spreadsheet instance. These methods allow developers to control the active cell or scroll through the grid, enhancing user interaction and automation.

## Documentation

The following methods are available for navigating a Jspreadsheet instance. They can be called on a worksheet object to move the active cell or adjust the view.

### Methods

| Method        | Description                                                   |
|---------------|---------------------------------------------------------------|
| `goto(y, x?)` | Moves the active cell to the specified coordinates (y, x).    |
| `pageUp()`    | Scrolls the view up by one page, adjusting the visible rows.  |
| `pageDown()`  | Scrolls the view down by one page, adjusting the visible rows. |
| `left()`      | Moves the active cell one column to the left.                 |
| `up()`        | Moves the active cell one row up.                             |
| `right()`     | Moves the active cell one column to the right.                |
| `down()`      | Moves the active cell one row down.                           |
| `last()`      | Moves the active cell to the last cell in the worksheet.      |
| `first()`     | Moves the active cell to the first cell in the worksheet.     |

## Example

### Programmatic Navigation in a Spreadsheet

The following example demonstrates how to use Jspreadsheet's navigation methods to control the active cell in a worksheet. The spreadsheet is initialized with sample data, and buttons are provided to trigger navigation actions.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>
<br>
<button onclick="mySpreadsheet[0].goto(2, 1)">Go to C2</button>
<button onclick="mySpreadsheet[0].pageUp()">Page Up</button>
<button onclick="mySpreadsheet[0].pageDown()">Page Down</button>
<button onclick="mySpreadsheet[0].left()">Left</button>
<button onclick="mySpreadsheet[0].up()">Up</button>
<button onclick="mySpreadsheet[0].right()">Right</button>
<button onclick="mySpreadsheet[0].down()">Down</button>
<button onclick="mySpreadsheet[0].first()">First Cell</button>
<button onclick="mySpreadsheet[0].last()">Last Cell</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda', 2020, 3000],
            ['Fiat', 2015, 4000],
        ],
        worksheetName: 'Sheet1',
        minDimensions: [6, 6],
    }],
    namespace: 'c4b0065e-d777-4b9b-b89f-1c03c01ccf96',
}).worksheets[0];
</script>
</html>
```
