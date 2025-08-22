title: JavaScript Dropdown and Autocomplete
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, autocomplete, dropdown, javascript dropdown
description: Learn more about the native javascript dropdown and autocomplete editor. Create advanced conditional javascript dropdown editors.



# JavaScript Dropdown

Jspreadsheet offers a very powerful, flexible, and responsive dropdown column type. It offers a lot of nice options, such as:  

  * Creating a simple dropdown from a JavaScript array or a JSON
  * Key-value options
  * JavaScript autocomplete search based on another column value
  * Conditional dropdowns: options from a dropdown based on a method return
  * Multiple selection and internal dropdown search
  * Responsive data picker with multiple render types
  * Image icon and group items
  * Remote search
  * New options



The official [JavaScript dropdown](https://jsuites.net/docs/dropdown) documentation is available on the jSuites website.

 

## Documentation

### Basic column properties

| Property                | Description                                              |
| ------------------------|----------------------------------------------------------|
| source: Array           | Array of items to be loaded into the dropdown            |
| url: String             | Get the data from a remote URL.                          |
| multiple: Boolean       | Multiple options                                         |
| delimiter: String       | Define the delimiter. Default: ';'                       |
| autocomplete: Boolean   | Allow autocomplete                                       |
| filterOptions: Function | Change the dropdown configuration before editing a cell. |

 

### Extended options

Can be defined using the `columns.options` property within the column or cell.

| Property                 | Description                                                         |
| -------------------------|---------------------------------------------------------------------|
| type: String             | Render type: default \| picker \| searchbar                       |
| placeholder: String      | Placeholder instructions                                            |
| newOptions: Boolean      | The user can add new options to the dropdown.                       |
| remoteSearch: Boolean    | Enabled the remote search features.                                 |
| url: String              | Remote backend to respond to the search.                            |
| onbeforeinsert: Function | Before a new item is added. Return false to cancel the user action. |
| oninsert: Function       | When the user adds a new item to the dropdown.                      |

 

## Items

Each option in the dropdown is defined by one object and the possible attributes are the following:

| Property          | Description                                                 |
| ------------------|-------------------------------------------------------------|
| id: mixed         | Value of the item. Can be used when the property format = 1 |
| value: string     | Label of the item. Can be used when the property format = 1 |
| title: string     | Description of the item                                     |
| image: string     | Icon for the item                                           |
| group: string     | Name of the group the item belongs to                       |
| synonym: array    | Keywords to help find one item                              |
| disabled: boolean | Item is disabled                                            |
| color: number     | Color for the item                                          |
| icon: string      | Material icon keyword                                       |
| tooltip: string   | On mouse over instructions                                  |

 

## Examples

### Multiple and autocomplete options

The following example shows the first column with the JS autocomplete and multiple options active. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Wholemeal', 'Yes', '2019-02-12'],
            ['CA;US;GB', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['CA;BR', 'Grains', 'No', '2018-11-10'],
            ['BR', 'Pasta', 'Yes', '2019-01-12'],
        ],
        columns: [
            { type:'dropdown', width:'300px', title:'Product Origin', url:'/jspreadsheet/countries', autocomplete:true, multiple:true },
            { type:'text', width:'200px', title:'Description' },
            { type:'dropdown', width:'150px', title:'Stock', source:['No','Yes'], options:{ newOptions:true } },
            { type:'calendar', width:'150px', title:'Best before', format:'DD/MM/YYYY' },
        ],
    }],
    license: '###license###',
});
</script>
</html>
```
  

### Conditional dropdown

The example below shows the dependency of the second column with the first column. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let filterOptions = function(o, cell, x, y, v, config) {
    let value = o.getValueFromCoords(x - 1, y);

    if (value == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (value == 2) {
        config.source = ['Carrots'];
    } else {
        config.source = ['Apples','Bananas','Carrots','Oranges','Cheese'];
    }

    return config;
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [3, 'Cheese', true],
            [1, 'Apples', true],
            [2, 'Carrots', true],
            [1, 'Oranges', false],
        ],
        columns: [
            { type:'dropdown', title:'Category', width:'300', source:[ {'id':'1', 'name':'Fruits'}, {'id':'2', 'name':'Legumes'}, {'id':'3', 'name':'General Food'} ] },
            { type:'dropdown', title:'Food', width:'200', source:['Apples','Bananas','Carrots','Oranges','Cheese'], filterOptions: filterOptions },
            { type: 'checkbox', title:'Buy', width:'100' },
        ],
    }],
    onchange: function(worksheet, cell, c, r, value) {
        if (c == 0) {
            let columnName = jspreadsheet.helpers.getColumnNameFromCoords(c + 1, r);
            worksheet.setValue(columnName, '');
        }
    },
    license: '###license###',
});
</script>
</html>
```
  

### Remote search

The following example shows the column with a remote search, including dynamic items that are not in the original spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        worksheetName: 'Remote search',
        data: [
            ['Richard', 'Ocado'],
            ['Jorge', 'Tesco'],
        ],
        columns: [
            { type:'dropdown', width:'200px', title:'Contact', source:['Richard','Jorge'], options: { url: '/jspreadsheet/sample', remoteSearch:true, autocomplete:true } },
            { type:'text', title: 'Company', width: '300px' }
        ],
    }],
    license: '###license###',
});
</script>

</script>
</html>
```
  

### Group, images, and advanced render options

Improve the user experience with a responsive data picker. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
        worksheets: [{
            worksheetName: 'New options',
            data: [
                [1, 'Morning'],
                [2, 'Morning'],
                [3, 'Afternoon'],
                [3, 'Evening'],
            ],
            columns: [
                {
                    type:'dropdown',
                    title:'Category',
                    width:'300',
                    source:[
                        { id:'1', name:'Jorge', image:'/templates/default/img/2.jpg', title:'Admin', group:'Secretary' },
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
        }],
        license: '###license###',
    });
</script>
</html>
```
  

### New options

Allowing new options to be added by the user. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        worksheetName: 'New options',
        data: [
            [1, 'Beatles'],
            [2, 'Beatles'],
            [3, 'Beatles'],
            [4, 'Beatles'],
        ],
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
    }],
    license: '###license###',
});
</script>
</html>
```
   
