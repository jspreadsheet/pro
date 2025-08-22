title: Data Grid Dropdown Column Type
keywords: Jspreadsheet, jquery, javascript, excel-like, spreadsheet, jquery plugin, sorting, table, grid, order by
description: Examples of how to handle simple, advanced, multiple, autocomplete, and conditional dropdowns. Learn how to add groups and images to your dropdown column type.



# JavaScript Dropdown and autocomplete column type

Jspreadsheet brings a very powerful, flexible and responsive dropdown column type to bring a better user experience to your applications. The new dropdown column options include autocomplete, multiple options, remote search, dynamic new options, data picker, different template types and much more advantages, such as:

  * Create a simple dropdown from array
  * Value or key-value selectbox is available
  * Populate a dropdown from a external JSON request
  * Dynamic autocomplete search based on another column value
  * Conditional dropdowns: options from a dropdown based on a method return
  * Multiple selection and internal dropdown search
  * Responsive data picker with multiple render types
  * Image icon and group items
  * Remote search
  * New options


The official dropdown documentation can be found at [jSuites documentation](https://jsuites.net/docs/dropdown).

## Multiple and autocomplete options

The following example shows a the first column with the autocomplete and multiple flags active.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Wholemeal', 'Yes', '2019-02-12'],
    ['CA;US', 'Breakfast Cereals', 'Yes', '2019-03-01'],
    ['CA;BR', 'Grains', 'No', '2018-11-10'],
    ['BR', 'Pasta', 'Yes', '2019-01-12'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type:'dropdown', width:'200', title:'Product Origin', url:'/jspreadsheet/countries', autocomplete:true, multiple:true },
        { type:'text', width:'150', title:'Description' },
        { type:'dropdown', width:'100', title:'Stock', source:['No','Yes'] },
        { type:'calendar', width:'100', title:'Best before', format:'DD/MM/YYYY' },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
<script>

</script>
</html>
```
  
## Conditional dropdown

The example below shows the dependency of the second column in relation to the first.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data2 = [
    [3, 'Cheese', true],
    [1, 'Apples', true],
    [2, 'Carrots', true],
    [1, 'Oranges', false],
];

let filterOptions = function(o, cell, x, y, value, config) {
    value = o.getValueFromCoords(x - 1, y);
    if (value == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (value == 2) {
        config.source = ['Carrots'];
    } else {
        config.source = ['Apples','Bananas','Carrots','Oranges','Cheese'];
    }
    return config;
}

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data2,
    columns: [
        { type:'dropdown', title:'Category', width:'300', source:[ {'id':'1', 'name':'Fruits'}, {'id':'2', 'name':'Legumes'}, {'id':'3', 'name':'General Food'} ] },
        { type:'dropdown', title:'Food', width:'200', source:['Apples','Bananas','Carrots','Oranges','Cheese'], filterOptions: filterOptions },
        { type: 'checkbox', title:'Buy', width:'100' },
    ],
    onchange: function(instance, cell, c, r, value) {
        if (c == 0) {
            let columnName = jspreadsheet.getColumnNameFromId([c + 1, r]);
            instance.jspreadsheet.setValue(columnName, '');
        }
    },
    license: '39130-64ebc-bd98e-26bc4',
});
<script>
</html>
```
  
## Remote search

The following example shows the a column with a remote search including dynamic items not in the original spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data3 = [
    ['Paul', 'Ocado'],
    ['Jorge', 'Tesco'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data3,
    columns: [
        { type:'dropdown', width:'200px', title:'Contact', source:['Paul','Jorge'], options: { url: '/jspreadsheet/sample', remoteSearch:true, autocomplete:true } },
        { type:'text', title: 'Company', width: '300px' }
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
<script>

</script>
</html>
```

## Group, images, and advanced render options

Improve the user experience with a responsive data picker.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data4 = [
    [1, 'Morning'],
    [2, 'Morning'],
    [3, 'Afternoon'],
    [3, 'Evening'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data4,
    columns: [
        {
            type:'dropdown',
            title:'Category',
            width:'300',
            source:[
                { id:'1', name:'Richard', image:'/templates/default/img/1.jpg', title:'Admin', group:'Secretary' },
                { id:'2', name:'Cosme Sergio', image:'/templates/default/img/2.jpg', title:'Teacher', group:'Docent' },
                { id:'3', name:'Rose Mary', image:'/templates/default/img/3.png', title:'Teacher', group:'Docent' },
                { id:'4', name:'Fernanda', image:'/templates/default/img/3.png', title:'Admin', group:'Secretary' },
                { id:'5', name:'Roger', image:'/templates/default/img/3.png', title:'Teacher', group:'Docent' },
            ]
        },
        {
            type:'dropdown',
            title:'Working hours',
            width:'200',
            source:['Morning','Afternoon','Evening'],
            options: { type:'picker' },
        },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
<script>
</html>
```

## New options

Allowing new options to be added by the user.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data5 = [
    [1, 'Beatles'],
    [2, 'Beatles'],
    [3, 'Beatles'],
    [4, 'Beatles'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data5,
    columns: [
        {
            type: 'dropdown',
            title: 'Name',
            width: '300px',
            source: [
                { id:'1', name:'Paul' },
                { id:'2', name:'Ringo' },
                { id:'3', name:'George' },
                { id:'4', name:'John' },
            ],
            options: { newOptions: true }
        },
        {
            type:'dropdown',
            title:'Band',
            width:'200px',
            source: ['Beatles'],
        },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
<script>
</html>
```
   
