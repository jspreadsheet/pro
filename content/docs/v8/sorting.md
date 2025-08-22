title: Sorting the Spreadsheet Columns
keywords: Jspreadsheet, spreadsheet, javascript, javascript table, spreadsheet, documentation, sorting, custom sorting
description: All information about the spreadsheet sorting, events, programmatically sorting, sorting customization methods, and initial spreadsheet settings.



# Sorting

The most recent JavaScript spreadsheet plugin (v8+) gives the developer more control over the sorting feature with: 

  * A global sorting handler to customize the JavaScript sorting behavior.
  * The onbeforesorting event to intercept, change or cancel the results for the user.

To sort the spreadsheet, the user can use the context menu or double-click the column header. 

## Documentation

### Methods

The developer can call the spreadsheet sorting programmatically using the following methods.

| Method  | Description                                                                                                                                                                     |
| --------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| orderBy | `orderBy(columnNumber: integer, direction: bool) : void`<br/><br/>@param {number} columnNumber - Sort by column number<br/>@param {boolean} direction: false (ASC), true (DESC) |

 

### Events

The `onbeforesort` can be used to intercept, change or cancel the order results.

| Event        | Description                                                                                   |
| -------------|-----------------------------------------------------------------------------------------------|
| onbeforesort | `onbeforesort(worksheet: Object, column: Number, direction: Number, newValue: Array) : Array` |
| onsort       | `onsort(worksheet: Object, column: Number, direction: Number, newValue: Array) : void`        |


### Initial Settings

The following property helps to define the sorting behavior.

| Property            | Description                                                             |
| --------------------|-------------------------------------------------------------------------|
| sorting: function   | Define a custom sorting handler.<br/>`sorting(bool Direction) : method` |
| columnSorting: bool | Allow the user to sort the spreadsheet by columns. `Default: true`      |
| orderBy: integer    | The initial sorting by a column number. `Default: false`                |

 

### Native sorting handler

The following code is the default sorting method. You can customize the function to create different sorting results. 

{.ignore}
```javascript
/**
 * Default sorting method
 * @param {boolean} Direction
 * @param {number} Column number starting on zero.
 */
let sorting = function(direction, column) {
    // Handler
    return function(a, b) {
        let valueA = a[1];
        let valueB = b[1];

        if (! direction) {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
        } else {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
        }
    }
}
```

## Examples

### Basic sorting

The following example shows the behavior when sorting through different column types. 

Double click in any spreadsheet column header below

Change the spreadsheet column order programmatically

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
    ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
    ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
    ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data:data,
        columns: [
            { type: 'text', width:300 },
            { type: 'text', width:80 },
            { type: 'text', width:100 },
            { type: 'calendar', width:100 },
            { type: 'number', width:100 },
            { type: 'number', width:100 },
            { type: 'number', width:100 },
        ],
    }]
});

document.getElementById("orderby").onclick = () => table[0].orderBy(document.getElementById('columnNumber').value);
</script>

<select id='columnNumber'>
    <option value='0'>Column 1</option>
    <option value='1'>Column 2</option>
    <option value='2'>Column 3</option>
    <option value='3'>Column 4</option>
</select>

<input type='button' value='Sort column' id="orderby"/>

</html>
```
  

### Custom sorting handler

The following example shows how to customize the spreadsheet sorting behavior using the `sorting` property.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Spreadsheets', 1],
            ['Grids', 2],
            ['Tables', 3],
            ['Plugins', 4],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
        ],
        columns: [
            { type: 'text', width:200 },
            { type: 'text', width:400 },
        ],
    }],
    sorting: function(direction, column) {
        return function(a, b) {
            let valueA = a[1];
            let valueB = b[1];

            // Consider blank rows in the sorting
            if (! direction) {
                return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
            } else {
                return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
            }
        }
    }
});
</script>
</html>
```
 
