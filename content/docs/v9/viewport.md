title: Spreadsheet Viewport
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, viewport
description: More information about the viewport, how to change the dimensions programmatically and all related events and settings to the viewport, lazyloading and more.



# Spreadsheet Viewport

The viewport delimits the area of the visible cells in the JavaScript grid. When the viewport is enabled, JSS will render only the necessary visible cells. That means viewport is the most important configuration when dealing with a large amount of data. **tableOverflow: true** will enable the viewport along the properties tableWidth and tableHeight to define the viewport width and height respectively. It is also possible to use **fullscreen: true** to make sure all available screen area is used for cell rendering. Those properties are defined at the worksheet level. That means the developer can choose different viewport sizes for each worksheet.  

## Documentation

### Methods

The following methods interact with the worksheets viewport programmatically.

| Method      | Description                                                                     |
| ------------|---------------------------------------------------------------------------------|
| setViewport | `instance.setViewport(w: Number, h: Number) => void`                            |
| fullscreen  | `instance.fullscreen(state: Boolean) => void`                                   |
| goto        | `instance.goto(y: Number, x?: Number) => void`                                  |
| left        | `instance.left(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| top         | `instance.top(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`   |
| right       | `instance.right(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void` |
| down        | `instance.down(shiftKey?: Boolean, ctrlKey?: Boolean, jump?: Boolean) => void`  |
| last        | `instance.last(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                  |
| first       | `instance.first(shiftKey?: Boolean, ctrlKey?: Boolean) => void`                 |

 

### Settings

Related settings.

| Property                 | Description                                           |
| -------------------------|-------------------------------------------------------|
| tableOverflow: boolean   | `Enable the spreadsheet viewport.`                    |
| tableWidth: number       | `Spreadsheet viewport width.`                         |
| tableHeight: number      | `Spreadsheet Viewport height.`                        |
| resize: string           | `Enable resizable viewport.`                          |
| fullscreen: boolean      | `Fullscreen viewport.`                                |
| virtualizationX: boolean | `Enable virtualization on the columns. Default true.` |
| virtualizationY: boolean | `Enable virtualization on the rows. Default true.`    |

 

### Events

Related events.

| Method   | Description                                                 |
| ---------|-------------------------------------------------------------|
| onresize | `onresize(worksheet: Object, w: number, h: number) => void` |

 

## Example

### Change the spreadsheet viewport dimensions

The following example changes the visible viewport area dynamically. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="text" value="800px" style="width:60px" />
<input type="text" value="400px" style="width:60px" />
<input type="button" value="Set viewport" id="setviewport"/>
<input type="button" value="Set fullscreen" id="setfullscren"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let setViewport = function(o) {
    // First worksheet
    grid[0].setViewport(o.previousElementSibling.previousElementSibling.value, o.previousElementSibling.value);
}

let data = [];

// Create the data
for (let j = 0; j < 500; j++) {
     data[j] = [];
     for (let i = 0; i < 20; i++) {
         data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
     }
}


let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '600px',
        // Enable resize on both directions
        resize: 'both',
    }]
});

document.getElementById("setviewport").onclick = (e) => setViewport(e.target)
document.getElementById("setfullscren").onclick = () => grid[0].fullscreen(true)
</script>
</html>
```
  

### Goto

Move the viewport to a specified row or cell. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="Go to row number 500" id="goto500" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6, 5000],
        tableOverflow: true,
        tableWidth: '600px',
    }]
});

document.getElementById("goto500").onclick = () => grid[0].goto(499);
</script>
</html>
```
 
