title: Spreadsheet Editors
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, editors
description: Editors are a very flexible and powerful way to transform simple spreadsheets into amazing web-based applications. Learn more about the native editors and how to build your own editors.



# Editors

Jspreadsheet editors will enhance the user experience and transform any application into a powerful data management tool. There are several native editors and the developer can create or integrate plugins to create new custom data editors. The current native editors are: `text, numeric, hidden, dropdown, checkbox, radio, calendar, image, color, email, url, progressbar, rating, autonumber, HTML, percent and notes.`  

## Custom editor

A custom editor requires the implementation of five different methods, as described in the table below:

| Method      | Description                                                                                                                                                               |
| ------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| createCell  | When a new cell is created.<br/>`createCell(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                                    |
| updateCell  | When the cell value changes.<br/>`updateCell(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                                   |
| openEditor  | When the user starts editing a cell.<br/>`openEditor(cell: Object, value: Any, x: Number, y: Number, instance: Object, options: Object) : void`                           |
| closeEditor | When the user finalizes the edit of a cell.<br/>`closeEditor(cell: Object, confirmChanges: Boolean, x: Number, y: Number, instance: Object, options: Object) : void`      |
| destroyCell | When a cell is destroyed.<br/>`destroyCell(cell: Object, x: Number, y: Number, instance: Object) : void`                                                                  |
| get         | Transform the raw data into processed data. It will show text instead of an id in the type dropdown, for example.<br/>`get(options: Object, value: Any) : processedValue` |

 

## Custom editor

The following example implements a simple custom data editor. 

{.ignore}
```javascript
let percent = function() {
    let methods = {};

    methods.updateCell = function(cell, value, x, y, instance) {
        value = Number(value) || 0;
        if (cell) {
            cell.innerText = value + '%';
        }
        return value / 100;
    }

    methods.createCell = methods.updateCell;

    methods.openEditor = function(cell, value, x, y, instance) {
        instance.parent.input.onblur = function() {
            instance.closeEditor(cell, true);
        }
        if (value) {
            instance.parent.input.innerText = (Number(value)) * 100;
        }
        jSuites.focus(instance.parent.input);
    }

    methods.closeEditor = function(cell, save, x, y, instance) {
        if (save) {
            let value = Number(instance.parent.input.innerText);
        } else {
            let value = '';
        }

        return value;
    }

    methods.get = function(options, val) {
        return (val * 100) + '%';
    }

    return methods;
}();
```
 More source code examples can be found at <https://github.com/jspreadsheet/editors>  

### Using a custom editor

Considering the percent editor above, the `column.type` defines a native or custom editor, as follows: 

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
let data = [
    ['PHP', '1'],
    ['Javascript', '0.4'],
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        {
            type: 'text',
            title: 'Course Title',
            width: '300px'
        },
        {
            type: 'percent',
            title: 'Percent',
            width: '200px'
        },
     ]
});
</script>
```
 

### A custom editor using react

You can create a custom editor using react. A [working example](https://codesandbox.io/s/react-custom-editor-for-jspreadsheet-ic6h3l)  

## Editors on the cell level Pro

Using the Pro distribution, it is possible to overwrite the column configuration at a cell level using the property `cells` as shown below: 

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

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
        cells: {
            A1: { type:'percent' }
        }
    }]
});
</script>
</html>
```
  

## Examples

Basic example using multiple different editors. 



```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        ['Jazz', 'Honda', '2019-02-12', '/templates/default/img/nophoto.jpg', true, 2000.00, '#777700'],
        ['Civic', 'Honda', '2018-07-11', '/templates/default/img/nophoto.jpg', true, 4000.01, '#007777'],
    ],
    filters: true,
    columns: [
        {
            type:'text',
            title:'Car',
            width:120
        },
        {
            type: 'dropdown',
            title:'Make',
            width:180,
            source:[
                "Alfa Romeo",
                "Audi",
                "Bmw",
                "Chevrolet",
                "Chrysler",
                "Dodge",
                "Ferrari",
                "Fiat",
                "Ford",
                "Honda",
                "Hyundai",
                "Jaguar",
                "Jeep",
                "Kia",
                "Mazda",
                "Mercedes-Benz",
                "Mitsubishi",
                "Nissan",
                "Peugeot",
                "Porsche",
                "Subaru",
                "Suzuki",
                "Toyota",
                "Volkswagen"
              ]
        },
        {
            type: 'calendar',
            title:'Available',
            width:120,
            options:{ format:'DD/MM/YYYY' }
        },
        {
            type: 'image',
            title:'Photo',
            width:120
        },
        {
            type: 'checkbox',
            title:'Stock',
            width:80
        },
        {
            type: 'text',
            title:'Price',
            mask:'$ #.##0,00',
            width:100,
            decimal:',',
            disabledMaskOnEdition: true
        },
        {
            type: 'color',
            width:100,
        },
     ]
});
</script>
</html>
```
  

### Inline spreadsheet action button



```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let action = function() {
    let methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            let id = instance.getRowId(y);
            // Do some action
            alert(id);
        }

        cell.appendChild(input);
    }

    return methods;
}();

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        { id:'1', data:['Google', '5', ''] },
        { id:'2', data:['Bing', '4', ''] },
        { id:'3', data:['Yahoo', '1', ''] },
        { id:'4', data:['Duckduckgo', '5', ''] },
    ],
    columns: [
        { type: 'text', width:'400px' },
        { type: 'rating', width:'100px' },
        { type: action, width:'100px', readOnly: true },
    ],
});
</script>
</html>
```
 
