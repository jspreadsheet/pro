title: Getting started with Jspreadsheet Pro Version 5
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, table, grid
description: Getting started with Jspreadsheet Spreadsheet version 5. Learning the basics, create instances, and more about the general spreadsheet configuration.



# Getting started

Jspreadsheet is a JavaScript vanilla plugin to embed an online spreadsheet in your web-based applications. Bring highly dynamic datasets to your application and improve the user experience of your software.

 

## Installation

To install Jspreadsheet using NPM

```bash
$ npm install Jspreadsheet-pro@5
```
 
To integrate Jspreadsheet on your application using our CDN

{.ignore}
```html
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
```
 
To download Jspreadsheet and install on local project

<https://jspreadsheet.com/v5/jspreadsheet.zip>
 

 

## Create a new table

A Jspreadsheet spreadsheet table can be created from an HTML table, a JS array, a CSV or a JSON file, as below:

Create a dynamic Jspreadsheet table from a javascript array:

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
data = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns:[
        { title:'Model', width:300 },
        { title:'Price', width:80 },
        { title:'Model', width:100 }
    ]
});
</script>
</html>
```

Create a table from a JSON object:

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:[
        { name:'Richard', id:'3', age:'40', gender:'Male' },
        { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
        { name:'Jorgina Santos', id:'5', age:'32', gender:'Female' },
    ],
    columns: [
        { type:'text', width:'300px', name:'id' },
        { type:'text', width:'200px', name:'name' },
        { type:'text', width:'100px', name:'age' },
        { type:'hidden', name:'gender' },
     ]
});
</script>
</html>
```

### Loading from a CSV file

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    csv:'demo.csv',
    csvHeaders:true,
    columns:[
        { width:300 },
        { width:80 },
        { width:100 }
    ]
});
</script>
</html>
```

### Loading from a table element

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />

<h4>The Official Top biggest albums of 2019</h4>

<table id="spreadsheet">
<thead>
<tr>
<td>POS</td>
<td>TITLE</td>
<td>ARTIST</td>
<td>PEAK</td>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>DIVINELY UNINSPIRED TO A HELLISH EXTENT</td>
<td>LEWIS CAPALDI</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>NO 6 COLLABORATIONS PROJECT</td>
<td>ED SHEERAN</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>THE GREATEST SHOWMAN</td>
<td>MOTION PICTURE CAST RECORDING</td>
<td>1</td>
</tbody>
</table>

<br>

<script>
jspreadsheet(document.getElementById('spreadsheet')); 
</script>
</html>
```

[See a working example](/docs/v5/examples/import-data)

## Destroy an existing table

It is possible to destroy a table, all data and, events related to an existing table by using the method _destroy_ as shown below.

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let myInstance = jspreadsheet(document.getElementById('spreadsheet'), {
    csv: 'demo.csv',
    csvHeaders: true,
    columns: [
        { width: '300px' },
        { width: '100px' },
        { width: '100px' },
    ]
});

// If second argument is true will destroy
// all handlers and you can't create any other instance.
Jspreadsheet.destroy(myInstance, true);
</script>
</html>
```
 

## Titles

If you do not define the column title, the default will be a letter starting in A just as any other spreadsheet software. But, if you would like to have custom column names you can use the directive title as in the example below:

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns:[
        { title:'Model' },
        { title:'Price' },
        { title:'Model' }
    ]
});
</script>
</html>
```
  

### Headers from a CSV file

If you are loading your data from a CSV file, you can define the **csvHeader:true** , so the first row will be used as your column names. 

[See a working example](/docs/v5/examples/import-data)

 

### Programmatically header updates

The methods **setHeader()** , **getHeader()** and **getHeaders()** are available for the developer to interact programmatically with the spreadsheet.

[Working example](/docs/v5/examples/headers#Programmatically-header-updates)

 

### Nested headers

The nested headers area available in the initialization through the directive **nestedHeaders:[]** , and should be used as follow: 

```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'autocomplete', title:'Country', width:'300', url:'/jspreadsheet/countries' },
        { type: 'dropdown', title:'Food', width:'150', source:['Apples','Bananas','Carrots','Oranges','Cheese'] },
        { type: 'checkbox', title:'Stock', width:'100' },
    ],
    nestedHeaders:[
        [
            { title:'Supermarket information', colspan:'3' },
        ],
        [
            { title:'Location', colspan:'1' },
            { title:' Other Information', colspan:'2' }
        ],
    ],
});
```
 

[See this example in action](/docs/v5/examples/headers)

## Column width

The initial width can be defined in the width property in the column parameter.



```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns:[
        { title:'Model', width:300 },
        { title:'Price', width:80 },
        { title:'Model', width:100 }
    ]
});
</script>
```
  

### Programmatically column width updates

The methods setWidth(), getWidth() are available for the developer to update the column width via javascript.

[See this example in action](/docs/v5/examples/programmatically-updates#setWidth)

## Row height

The inital row height can be defined in the height property include in the rows directive.



```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    rows:{ 3: { height:'500px' }},
});
</script>
```
  

### Programmatically row height updates

The methods setHeight(), getHeight() are available for the developer to update the row height via javascript.

[See this example in action](/docs/v5/examples/programmatically-updates#setHeight)

## Column types

In addition to the default input text, Jspreadsheet also brings native column types to your online spreadsheets. This gives you an exact and responsive method to get data into your spreadsheet. You will also find a template to help you create custom column types and rich user interfaces.

Jspreadsheet is integrated with jSuites, which is why you will see certain familiar native columns, such as: text, numeric, hidden, dropdown, autocomplete, checkbox, radio, calendar, image, color, email, and URL.


```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { title:'Model', width:300, type:'text'; },
        { title:'Price', width:80, type:'numeric' },
        { title:'Date', width:100, type:'calendar', options: { format:'DD/MM/YYYY' } },
        { title:'Photo', width:150, type:'image' },
        { title:'Condition', width:150, type:'dropdown', source:['New','Used'] },
        { title:'Color', width:80, type:'color' },
        { title:'Available', width:80, type:'checkbox' },
    ]
});
</script>
```
 

### Calendar type

When using the calendar column, you can change the behavior of your calendar by sending some extra options as example above. The possible values are:


{.ignore}
```javascript
options: {
    // Date format
    format:'DD/MM/YYYY',
    // Allow keyboard date entry
    readonly:0,
    // Today is default
    today:0,
    // Show timepicker
    time:0,
    // Show the reset button
    resetButton:true,
    // Placeholder
    placeholder:'',
    // Translations can be done here
    months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdays_short:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    // Value
    value:null,
    // Events
    onclose:null,
    onchange:null,
    // Fullscreen (this is automatic set for screensize < 800)
    fullscreen:false,
};
```

[See a working example](/docs/v5/examples/date-and-datetime-picker)

### Dropdown and autocomplete type

There are different ways to work with dropdowns in Jspreadsheet. It is possible to define the parameter _source_ as a simple or key-value array. It is also possible to use the param _URL_ to populate your dropdown from an external JSON format source. In addition to that, it is possible to have conditional values. The values from one dropdown can be conditional to other dropdowns in your table.

You can set the autocomplete dropdown through the initial param _autocomplete:true_ and the multiple picker can be activate by _multiple:true_ property as shown in the following example:

{.ignore}
```javascript
let data = [
    ['Honda', 1, 'Civic', '4'],
    ['Peugeot', 3,'1007', '2'],
    ['Smart', 3,'Cabrio', '4;5'],
];

$('#spreadsheet').jspreadsheet({
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        {
            type:'dropdown',
            title:'Region',
            source:['South East','South West','North','London'],
            width:'200',
        },
        {
            type:'dropdown',
            title:'Available in',
            multiple:true,
            source:[{id:1, name:'Red'},{id:2, name:'Yellow'},{id:3,name:'Blue'}],
            width:'200',
        },
        {
            type:'autocomplete',
            title:'Region',
            url:'values.json',
            width:'200',
        },
    ]
});
```
 

[See a working example](/docs/v5/examples/dropdown-and-autocomplete)

### Custom type

Jspreadsheet makes possible to extend third party javascript plugins to create your custom columns. Basically to use this feature, you should implement some basic methods such as: openEditor, closeEditor, getValue, setValue as following.

```html
<div id="spreadsheet"></div>
<script>
let data2 = [
    ['PHP', '14:00'],
    ['Javascript', '16:30'],
];

let customColumn = {
    // Methods
    closeEditor : function(cell, save) {
        let value = cell.children[0].value;
        cell.innerHTML = value;
        return value;
    },
    openEditor : function(cell) {
        // Create input
        let element = document.createElement('input');
        element.value = cell.innerHTML;
        // Update cell
        cell.classList.add('editor');
        cell.innerHTML = '';
        cell.appendChild(element);
        $(element).clockpicker({
            afterHide:function() {
                setTimeout(function() {
                    // To avoid double call
                    if (cell.children[0]) {
                        myTable.closeEditor(cell, true);
                    }
                });
            }
        });
        // Focus on the element
        element.focus();
    },
    getValue : function(cell) {
        return cell.innerHTML;
    },
    setValue : function(cell, value) {
        cell.innerHTML = value;
    }
}

myTable = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data2,
    columns: [
        { type: 'text', title:'Course Title', width:300 },
        { type: 'text', title:'Time', width:100, editor:customColumn },
     ]
});
</script>
```
 

[See a working example](/docs/v5/examples/column-types#custom)

 

## Define a minimum table dimension size.

The follow example will create a data table with a minimum number of ten columns and five rows:

```html
<div id="spreadsheet"></div>
<script>
let data3 = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data3,
    minDimensions:[10,5],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
```
 
