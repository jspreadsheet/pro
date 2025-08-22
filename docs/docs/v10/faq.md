title: The Most Common Technical Questions: Jspreadsheet FAQ
keywords: Jspreadsheet, Jexcel, data grid, JavaScript data grid, Excel-like features, online spreadsheet, data table, most common questions and answers
description: Discover the most common technical questions about out latest Jspreadsheet version 10.

# FAQ

Welcome to our Jspreadsheet FAQ page. Here, we tackle your most common queries about customizing the JSS data grid. Our aim is to simplify your development journey, enabling you to fully leverage our JavaScript spreadsheet component.  

#### 1. How do I define a viewport data grid dimensions as percentages?



{.ignore}
```html
<div id="spreadsheet" style="width: 50%; height: 50%"></div>
<script>
// Create the data grid with spreadsheet controls
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6, 5000],
        tableOverflow: true,
    }]
});
</script>
```
 
#### 2. Why JSS converts a string to a number?

JSS attempts to convert a string to a number by default to enable mathematical operations on numeric data like financial and sales figures, allowing for correct calculations, sorting, and filtering. To prevent JSS from automatically converting a string to a number, you can set the `autoCasting` property to false for a specific column or the entire **data grid**.


{.ignore}
```javascript
...
columns: [{
    type:'text', autoCasting: false
}]
```
 
#### 3. What is the best way to create odd/even rows in my data grid?

Solution: Add the following CSS code to your project.



```css
.jss tbody tr:nth-child(even) {
    background-color: #EEE9F1 !important;
}
```
 
#### 4. How do I transform multiple HTML static tables to dynamic Jspreadsheet data grids?


{.ignore}
```javascript
let tables = document.querySelectorAll('table');
for (let i = 0; i < tables.length; i++) {
    jspreadsheet(tables[i]);
}
```
 
#### 5. How do I disable paste over a JSS data grid?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    onbeforepaste: function(instance, data, x, y) {
        return false;
    }
});
</script>
```
 
#### 6. How can I intercept and change a pasted string over a JSS data grid?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    onbeforepaste: function(instance, data, x, y, options) {
        // Do something with the data
        return data;
    }
});
</script>
```
 
#### 7. How do I overwrite a type of a cell over a column type?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        columns: [
            { type: 'text' },
            { type: 'text' }, 
        ],
        cells: {
            B2: { type:'number', mask:'$ #,##0.00', decimal:'.' },
            B3: { type:'percent' },
        }
    }
});
</script>
```
 
#### 8. How do I disabled the JavaScript contextmenu in my spreadsheet?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    },
    contextMenu: function() {
        return false;
    }
})
</script>
```
 
#### 9. How do I change the default download filename?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    csvFileName: 'yourname'
});
</script>
```
 
#### 10. How do I add an external action without losing the spreadsheet focus?

Working example:

<https://jsfiddle.net/spreadsheet/v5tbxg01/>
#### 11. How do I keep the selection in the spreadsheet when clicking on an element outside the sheet?

Add a class to the external element: **jss_object**

<https://jsfiddle.net/spreadsheet/rg1tdh0z/>
#### 12. How do I automatic add unique ID to the data grid cells?


{.ignore}
```html
<script>
// Initiate a new JSS data grid
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6, 6],
    }],
    oncreatecell: function(worksheet, cell, x, y, options) {
    	let cell = worksheet.helpers.getColumnNameFromCoords(x,y);
        cell.setAttribute('id', cell);
    }
});
</script>
```
 

