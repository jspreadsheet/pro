title: The basics of Jspreadsheet Pro
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, table, grid
description: The basics of Jspreadsheet. How to change the column width, rows height, header titles, etc.



# The basics of the Jspreadsheet

In this page we are going to present the basics of Jspreadsheet, how to handle width, height, titles, column types and other basic concepts.

## Spreadsheet headers

The developer can define a title for a column. If none is defined, the column name will start with a letter as below.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        ['Fusca', 1999],
        ['Camaro', 9999]
    ],
    columns: [
        { width: 100 }
    ]
});
</script>
</html>
```


### Headers from a CSV file

When creating a Jspreadsheet Spreadsheet from a CSV file, is is possible to consider the first row in the file as the column names using the `csvHeaders: true` directive, as below:



```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    csv: '/jspreadsheet/demo.csv',
    csvHeaders: true,
    tableOverflow: true,
    tableWidth: 600,
});
</script>
</html>
```


### Nested headers

Is it possible to create nested headers using the initialization property `nestedHeaders` as follow:



```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let data = [
    ['USA', 'Apples', 100],
    ['USA', 'Bananas', 150],
    ['USA', 'Oranges', 200],
    ['UK', 'Apples', 80],
    ['UK', 'Bananas', 120],
    ['UK', 'Oranges', 180],
    ['Canada', 'Apples', 100],
    ['Canada', 'Bananas', 150],
    ['Canada', 'Oranges', 50],
]

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', title:'Country', width:'300px' },
        { type: 'text', title:'Food', width:'150px' },
        { type: 'text', title:'Stock', width:'100px' },
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
</script>
</html>
```


### Programmatically updates

The methods **setHeader()** , **getHeader()** and **getHeaders()** are available for the developer to interact programmatically with the spreadsheet headers.

[See a working example dealing with headers](/docs/v7/examples/headers)



## Column width

The default column width can be defined using the `defaultColWidth` initialization property. But, it is also possible to define a specific initial value per column using the property in the column directive as below.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let data = [
    ['Fusca', '$ 1999', 58, '1935'],
    ['Camaro', '$ 9999', 9, '1967']
]

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { title:'Model', width:'250px' },
        { title:'Price', width:'80px' },
        { title:'Stock' }, // Will have the default width
        { title:'Date' } // Will have the default width
    ],
    defaultColWidth: '100px'
});
</script>
</html>
```


### Programmatically updates

The methods setWidth(), getWidth() are available to update the column width programatically.

[See a working example](/docs/v7/examples/programmatically-updates)

## Row height

The inital row height can be defined in the height property include in the rows directive.


```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [['Banana'], ['Potato'], ['Apple'], ['Orange'], ['Avocado']],
    rows:{ 3: { height:'500px' }},
    defaultColWidth: '100px'
});
</script>
```

### Programmatically row height updates

The methods setHeight(), getHeight() are available for the developer to update the row height via javascript.

[See this example in action](/docs/v7/examples/programmatically-updates#setHeight)

## Column types

In addition to the default input text, Jspreadsheet also brings native column types to your online spreadsheets. This gives you an exact and responsive method to get data into your spreadsheet. You will also find a template to help you create custom column types and rich user interfaces.

Jspreadsheet is integrated with jSuites, which is why you will see certain familiar native columns, such as: text, numeric, hidden, dropdown, autocomplete, checkbox, radio, calendar, image, color, email, and URL.


{.ignore}
```html
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

When using the calendar column, you can change the behavior behavior of your calendar by sending some extra options as example above. The possible values are:


{.ignore }
```javascript
options : {
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


[See a working example](/docs/v7/examples/date-and-datetime-picker)



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

$('#my').jspreadsheet({
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


[See a working example](/docs/v7/examples/dropdown-and-autocomplete)

### Custom type

Jspreadsheet makes possible to extend third party javascript plugins to create your custom columns. Basically to use this feature, you should implement some basic methods such as: openEditor, closeEditor, getValue, setValue as following.


{.ignore}
```javascript
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

myTable = jspreadsheet(document.getElementById('custom'), {
    data:data2,
    columns: [
        { type: 'text', title:'Course Title', width:300 },
        { type: 'text', title:'Time', width:100, editor:customColumn },
     ]
});
```


[See a working example](/docs/v7/examples/column-types#custom)



## Define a minimum table dimension size.

The follow example will create a data table with a minimum number of ten columns and five rows:


{.ignore}
```javascript
let data3 = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

jspreadsheet(document.getElementById('minExample'), {
    data:data3,
    minDimensions:[10,5],
    license: '###license###',
});
```
 
