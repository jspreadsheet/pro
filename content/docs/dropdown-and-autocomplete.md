title: JavaScript Dropdown and Autocomplete Editor Type
keywords: Jspreadsheet, data grid, javascript, excel-like dropdown, spreadsheet dropdown, autocomplete, JavaScript dropdown, JavaScript autocomplete, remote search, dropdown settings, dropdown implementation, dropdown customization, dynamic dropdown, interactive data grid
description: Explore the integration of dropdown and autocomplete editors in Jspreadsheet, focusing on technical implementation, configuration options, and conditional logic for enriched data input interfaces.

# JavaScript Dropdown

Jspreadsheet offers a versatile dropdown column type that is responsive and feature-rich, presenting a variety of options such as:

- Creating dropdowns from JavaScript arrays or JSON data;
- Utilizing key-value objects for dropdown options;
- Populate values based on another column;
- Setting up conditional dropdowns that adapt based on other data points;
- Enabling multiple selections and incorporating search within the dropdown;
- Offering a responsive data picker that supports multiple rendering styles;
- Incorporating image icons within dropdown items and grouping options;
- Facilitating remote searches for dynamic data retrieval;
- Allowing the addition of new options dynamically;

 The official [JavaScript Dropdown](https://jsuites.net/docs/dropdown) documentation is available on the jSuites website. 

## Documentation

### Dropdown settings

The JSS data grid supports several attributes that can be used with the properties of a `column` or `cells`, including:

| Property                  | Description                                                                    |
|---------------------------|--------------------------------------------------------------------------------|
| source: Items[]           | Array of items to be loaded into the dropdown                                  |
| url: String               | Get the data from a remote URL.                                                |
| multiple: Boolean         | Multiple options                                                               |
| delimiter: String         | Define the delimiter. Default: ';'                                             |
| autocomplete: Boolean     | Allow autocomplete                                                             |
| filterOptions: Function   | Change the dropdown configuration before editing a cell.                       |
| dynamicSource: String     | It defines the options of a dropdown from a cell range. Example: Sheet1!A1:A4  |
 

### Extended Options

Can be defined using the `options` property within the `column` or `cells` settings.

| Property                 | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| type: String             | Render type: default \| picker \| searchbar                         |
| placeholder: String      | Placeholder instructions                                            |
| newOptions: Boolean      | The user can add new options to the dropdown.                       |
| remoteSearch: Boolean    | Enabled the remote search features.                                 |
| url: String              | Remote backend to respond to the search.                            |
| onbeforeinsert: Function | Before a new item is added. Return false to cancel the user action. |
| oninsert: Function       | When the user adds a new item to the dropdown.                      |
| prompt: Function         | Customize the prompt for adding an ew item.                        |

#### Customize the prompt

You can customize the prompt as example below:

{.ignore}
```javascript
const addANewItem = (addNewOption) => {
    // Customize your prompt and call the function when you are ready
    let title = prompt('Add a new item', '');
    if (title) {
        // Define the id of the new item
        let id = Math.random() * 1000;
        // Execute new item
        addNewOption(title, id);
    }
}

jspreadsheet(root, {
    worksheets: [{
        minDimensions: [20, 20],
        tableOverflow: true,
        tableWidth: 800,
        columns: [
            {
                type:'dropdown',
                source: [1,2,3],
                options: {
                    newOptions: true,
                    prompt: addANewItem
                }
            }
        ],
    }]
});
```

#### Include a JWT in Your Autocomplete Dropdown Requests

Easily intercept autocomplete requests to your server and attach variables or custom HTTP headers—such as a JSON Web Token (JWT)—for authentication.

{.ignore}
```javascript
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [8,8],
        columns: [{
            type: 'dropdown',
            options: {
                url: 'https://jspreadsheet.com/jspreadsheet/countries',
                autocomplete: true,
                remoteSearch: true,
                onbeforesearch: function(instance, request) {
                    request.method = 'POST';
                    request.data['anotherVariable'] = 1;
                    request.beforeSend = (httpRequest) => {
                        httpRequest.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('jwt'));
                    }
                    return request;
                }
            }
        }]
    }],
});
```

### Properties of an item

Each option in the dropdown is defined by one object and the possible attributes are the following:

| Property           | Description                            |
|--------------------|----------------------------------------|
| id: mixed          | key of the item                        |
| value: string      | value of the item                      |
| title: string      | Description of the item                |
| image: string      | Icon for the item                      |
| group: string      | Name of the group the item belongs to  |
| synonym: array     | Keywords to help find one item         |
| disabled: boolean  | Item is disabled                       |
| color: number      | Color for the item                     |
| icon: string       | Material icon keyword                  |
| tooltip: string    | On mouse over instructions             |

 

## Examples

### Autocomplete and Multiple Options

The following example shows the first column with the JS autocomplete and multiple options active. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
            { type:'dropdown', width:'200px', title:'Product Origin', url:'https://jspreadsheet.com/jspreadsheet/countries', autocomplete:true, multiple:true },
            { type:'text', width:'100px', title:'Description' },
            { type:'dropdown', width:'100px', title:'Stock', source:['No','Yes'], options:{ newOptions:true } },
            { type:'calendar', width:'100px', title:'Best before', format:'DD/MM/YYYY' },
        ],
    }]
});
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['US', 'Wholemeal', 'Yes', '2019-02-12'],
        ['CA;US;GB', 'Breakfast Cereals', 'Yes', '2019-03-01'],
        ['CA;BR', 'Grains', 'No', '2018-11-10'],
        ['BR', 'Pasta', 'Yes', '2019-01-12'],
    ];
    // Columns
    const columns = [
        {
            type: 'dropdown',
            width: '300px',
            title: 'Product Origin',
            url: 'https://jspreadsheet.com/jspreadsheet/countries',
            autocomplete: true,
            multiple: true
        },
        {
            type: 'text',
            width: '200px',
            title: 'Description'
        },
        {
            type: 'dropdown',
            width: '150px',
            title: 'Stock',
            source: ['No', 'Yes'],
            options: {newOptions: true}
        },
        {
            type: 'calendar',
            width: '150px',
            title: 'Best before',
            format: 'DD/MM/YYYY'
        }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['US', 'Wholemeal', 'Yes', '2019-02-12'],
            ['CA;US;GB', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['CA;BR', 'Grains', 'No', '2018-11-10'],
            ['BR', 'Pasta', 'Yes', '2019-01-12'],
        ];
        // Columns
        const columns = [
            {
                type:'dropdown',
                width:'300px',
                title: 'Product Origin',
                url:'https://jspreadsheet.com/jspreadsheet/countries',
                autocomplete:true,
                multiple:true
            },
            {
                type:'text',
                width:'200px',
                title:'Description'
            },
            {
                type:'dropdown',
                width:'150px',
                title:'Stock',
                source:['No','Yes'],
                options:{ newOptions:true }
            },
            {
                type:'calendar',
                width:'150px',
                title:'Best before',
                format:'DD/MM/YYYY'
            }
        ];


        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['US', 'Wholemeal', 'Yes', '2019-02-12'],
                    ['CA;US;GB', 'Breakfast Cereals', 'Yes', '2019-03-01'],
                    ['CA;BR', 'Grains', 'No', '2018-11-10'],
                    ['BR', 'Pasta', 'Yes', '2019-01-12'],
                ],
                columns: [
                    { type:'dropdown', title:'Product Origin', url:'/jspreadsheet/countries', autocomplete:true, multiple:true },
                    { type:'text', title:'Description' },
                    { type:'dropdown', title:'Stock', source:['No','Yes'], options:{ newOptions:true } },
                    { type:'calendar', title:'Best before', format:'DD/MM/YYYY' },
                ],
            }]
        });
    }
}
```
 

 

### Conditional Dropdown

The example below shows the dependency of the second column with the first column. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let filterOptions = function(o, cell, x, y, value, config) {
    let v = o.getValueFromCoords(x - 1, y);

    if (v == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (v == 2) {
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
            {
                type:'dropdown',
                title:'Category',
                width:'300',
                source:[
                    { 'id':'1', 'name':'Fruits' },
                    { 'id':'2', 'name':'Legumes' },
                    { 'id':'3', 'name':'General Food' }
                ]
            },
            {
                type:'dropdown',
                title:'Food',
                width:'200',
                source: [ 'Apples','Bananas','Carrots','Oranges','Cheese' ],
                filterOptions: filterOptions
            },
            {
                type:'checkbox',
                title:'Buy',
                width:'100'
            }
        ]
    }],
    onchange: function(worksheet, cell, c, r, value) {
        if (c == 0) {
            let columnName = jspreadsheet.helpers.getColumnNameFromCoords(c + 1, r);
            worksheet.setValue(columnName, '');
        }
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

const filterOptions = (o, cell, x, y, value, config) => {
    let category = o.getValueFromCoords(x - 1, y);

    if (category == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (category == 2) {
        config.source = ['Carrots'];
    } else {
        config.source = ['Apples','Bananas','Carrots','Oranges','Cheese'];
    }

    return config;
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [3, 'Cheese', true],
        [1, 'Apples', true],
        [2, 'Carrots', true],
        [1, 'Oranges', false],
    ]
    // Columns
    const columns = [
        {
            type:'dropdown',
            title:'Category',
            width:'300',
            source:[
                { 'id':'1', 'name':'Fruits' },
                { 'id':'2', 'name':'Legumes' },
                { 'id':'3', 'name':'General Food' }
            ]
        },
        {
            type:'dropdown',
            title:'Food',
            width:'200',
            source: [ 'Apples','Bananas','Carrots','Oranges','Cheese' ],
            filterOptions: filterOptions
        },
        {
            type:'checkbox',
            title:'Buy',
            width:'100'
        }
    ]
    // Event
    const onchange = (worksheet, cell, c, r, value) => {
        if (c == 0) {
            let columnName = jspreadsheet.helpers.getColumnNameFromCoords(c + 1, r);
            worksheet.setValue(columnName, '');
        }
    }

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onchange={onchange}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onchange="onchange">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

const filterOptions = (o, cell, x, y, value, config) => {
    let category = o.getValueFromCoords(x - 1, y);

    if (category == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (category == 2) {
        config.source = ['Carrots'];
    } else {
        config.source = ['Apples','Bananas','Carrots','Oranges','Cheese'];
    }

    return config;
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        onchange(worksheet, cell, c, r, value) {
            if (c == 0) {
                let columnName = jspreadsheet.helpers.getColumnNameFromCoords(c + 1, r);
                worksheet.setValue(columnName, '');
            }
        }
    },
    data() {
        // Data
        const data = [
            [3, 'Cheese', true],
            [1, 'Apples', true],
            [2, 'Carrots', true],
            [1, 'Oranges', false],
        ]
        // Columns
        const columns = [
            {
                type:'dropdown',
                title:'Category',
                width:'300',
                source:[
                    { 'id':'1', 'name':'Fruits' },
                    { 'id':'2', 'name':'Legumes' },
                    { 'id':'3', 'name':'General Food' }
                ]
            },
            {
                type:'dropdown',
                title:'Food',
                width:'200',
                source: [ 'Apples','Bananas','Carrots','Oranges','Cheese' ],
                filterOptions: filterOptions
            },
            {
                type:'checkbox',
                title:'Buy',
                width:'100'
            }
        ]

        return {
            data,
            license,
            columns
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Filter options
const filterOptions = function(o: any, cell: any, x: any, y: any, value: any, config: any) {
    let category = o.getValueFromCoords(x - 1, y);

    if (category == 1) {
        config.source = ['Apples','Bananas','Oranges'];
    } else if (category == 2) {
        config.source = ['Carrots'];
    } else {
        config.source = ['Apples','Bananas','Carrots','Oranges','Cheese'];
    }

    return config;
}

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    [3, 'Cheese', true],
                    [1, 'Apples', true],
                    [2, 'Carrots', true],
                    [1, 'Oranges', false],
                ],
                columns: [
                    {
                        type:'dropdown',
                        title:'Category',
                        source:[
                            { 'id':'1', 'name':'Fruits' },
                            { 'id':'2', 'name':'Legumes' },
                            { 'id':'3', 'name':'General Food' }
                        ]
                    },
                    {
                        type:'dropdown',
                        title:'Food',
                        source: [ 'Apples','Bananas','Carrots','Oranges','Cheese' ],
                        filterOptions: filterOptions
                    },
                    {
                        type:'checkbox',
                        title:'Buy',
                    }
                ]
            }],
            onchange: function(worksheet, cell, c, r: any, value) {
                if (c == 0) {
                    let columnName = jspreadsheet.helpers.getColumnNameFromCoords(c + 1, r);
                    worksheet.setValue(columnName, '');
                }
            }
        });
    }
}
```
 

 

### Remote Search

This example demonstrates a column with a remote search feature that retrieves options from a remote server. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
            {
                type:'dropdown',
                width:'200px',
                title:'Contact',
                source:['Richard','Jorge'],
                options: { url: '/jspreadsheet/sample', remoteSearch:true, autocomplete:true }
            },
            {
                type:'text',
                title: 'Company',
                width: '300px'
            }
        ],
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Richard', 'Ocado'],
        ['Jorge', 'Tesco'],
    ]
    // Columns
    const columns = [
        {
            type:'dropdown',
            width:'200px',
            title:'Contact',
            source:['Richard','Jorge'],
            options: { url: '/jspreadsheet/sample', remoteSearch: true, autocomplete: true }
        },
        {
            type:'text',
            title: 'Company',
            width: '300px'
        }
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} worksheetName={"Remote search"} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" worksheetName="Remote search" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['Richard', 'Ocado'],
            ['Jorge', 'Tesco'],
        ]
        // Columns
        const columns = [
            {
                type:'dropdown',
                width:'200px',
                title:'Contact',
                source:['Richard','Jorge'],
                options: { url: '/jspreadsheet/sample', remoteSearch:true, autocomplete:true }
            },
            {
                type:'text',
                title: 'Company',
                width: '300px'
            }
        ];

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                worksheetName: 'Remote search',
                data: [
                    ['Richard', 'Ocado'],
                    ['Jorge', 'Tesco'],
                ],
                columns: [
                    {
                        type:'dropdown',
                        title:'Contact',
                        source:['Richard','Jorge'],
                        options: { url: '/jspreadsheet/sample', remoteSearch:true, autocomplete:true }
                    },
                    {
                        type:'text',
                        title: 'Company',
                    }
                ],
            }]
        });
    }
}
```
 

 

### Group, Images, and Render Options

Improve the user experience with a responsive data picker. 

 





```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
                    { id:'1', name:'Jorge', image:'img/2.jpg', title:'Admin', group:'Secretary' },
                    { id:'2', name:'Cosme Sergio', image:'img/2.jpg', title:'Teacher', group:'Docent' },
                    { id:'3', name:'Rose Mary', image:'img/3.png', title:'Teacher', group:'Docent' },
                    { id:'4', name:'Fernanda', image:'img/3.png', title:'Admin', group:'Secretary' },
                    { id:'5', name:'Roger', image:'img/3.png', title:'Teacher', group:'Docent' },
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
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [1, 'Morning'],
        [2, 'Morning'],
        [3, 'Afternoon'],
        [3, 'Evening'],
    ];
    // Columns
    const columns = [
        {
            type:'dropdown',
            title:'Category',
            width:'300',
            source:[
                { id:'1', name:'Jorge', image:'img/2.jpg', title:'Admin', group:'Secretary' },
                { id:'2', name:'Cosme Sergio', image:'img/2.jpg', title:'Teacher', group:'Docent' },
                { id:'3', name:'Rose Mary', image:'img/3.png', title:'Teacher', group:'Docent' },
                { id:'4', name:'Fernanda', image:'img/3.png', title:'Admin', group:'Secretary' },
                { id:'5', name:'Roger', image:'img/3.png', title:'Teacher', group:'Docent' },
            ]
        },
        {
            type:'dropdown',
            title:'Working hours',
            width:'200',
            source:['Morning','Afternoon','Evening'],
            options: { type:'picker' },
        }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [1, 'Morning'],
            [2, 'Morning'],
            [3, 'Afternoon'],
            [3, 'Evening'],
        ];
        // Columns
        const columns = [
            {
                type:'dropdown',
                title:'Category',
                width:'300',
                source:[
                    { id:'1', name:'Jorge', image:'img/2.jpg', title:'Admin', group:'Secretary' },
                    { id:'2', name:'Cosme Sergio', image:'img/2.jpg', title:'Teacher', group:'Docent' },
                    { id:'3', name:'Rose Mary', image:'img/3.png', title:'Teacher', group:'Docent' },
                    { id:'4', name:'Fernanda', image:'img/3.png', title:'Admin', group:'Secretary' },
                    { id:'5', name:'Roger', image:'img/3.png', title:'Teacher', group:'Docent' },
                ]
            },
            {
                type:'dropdown',
                title:'Working hours',
                width:'200',
                source:['Morning','Afternoon','Evening'],
                options: { type:'picker' },
            }
        ];

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
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
                        source:[
                            { id:'1', name:'Jorge', image:'img/2.jpg', title:'Admin', group:'Secretary' },
                            { id:'2', name:'Cosme Sergio', image:'img/2.jpg', title:'Teacher', group:'Docent' },
                            { id:'3', name:'Rose Mary', image:'img/3.png', title:'Teacher', group:'Docent' },
                            { id:'4', name:'Fernanda', image:'img/3.png', title:'Admin', group:'Secretary' },
                            { id:'5', name:'Roger', image:'img/3.png', title:'Teacher', group:'Docent' },
                        ]
                    },
                    {
                        type:'dropdown',
                        title:'Working hours',
                        source:['Morning','Afternoon','Evening'],
                        options: { type:'picker' },
                    },
                ],
            }]
        });
    }
}
```
 

 

### New options

Allowing new options to be added by the user. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [1, 'Beatles'],
        [2, 'Beatles'],
        [3, 'Beatles'],
        [4, 'Beatles'],
    ];
    // Columns
    const columns = [
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
        }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} worksheetName={"New options"} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" worksheetName="New options" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [1, 'Beatles'],
            [2, 'Beatles'],
            [3, 'Beatles'],
            [4, 'Beatles'],
        ];
        // Columns
        const columns = [
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
            }
        ];

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
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
                        source: ['Beatles'],
                    },
                ],
            }]
        });
    }
}
```
 
