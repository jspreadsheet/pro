title: Data Grid Filters: Settings, Methods, and Related Events
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like filters, spreadsheet filters, table filters, column filters, data grid filters, column filter
description: This section provides comprehensive information about the data grid column filters. Learn how to use and customize filters and explore details of the available methods and events.

# Spreadsheet Filters

This section provides in-depth information on customizing the data grid filters, including the various associated methods, events, and properties. 

> **Operators**  The updated filters now allow users to select their preferred search operator. 

## Documentation

### Methods

| Method                   | Description                                                                                     |
| -------------------------|-------------------------------------------------------------------------------------------------|
| setFilter(number, array) | Apply filters programmatically.<br/>`setFilter(columnNumber: Number, values: String[])`         |
| getFilter(mixed)         | Currently applied filters to a column or to all columns.<br/>`getFilter(columnNumber?: Number)` |
| openFilter(number)       | Open the filter input.<br/>`openFilter(columnNumber: Number)`                                   |
| closeFilter()            | Close the filter input.<br/>`closeFilter()`                                                     |
| resetFilters()           | Reset all filters.<br/>`resetFilters()`                                                         |
| showFilter(number)       | Enable the filter icon for one or all columns.<br/>`showFilter(columnNumber?: Number)`          |
| hideFilter(number)       | Disable the filter icon for one or all columns.<br/>`hideFilter(columnNumber?: Number)`         |
| resetFilters(mixed)      | Reset the filters for one or all columns..<br/>`resetFilters(columnNumber?: Number)`            |

 

### Related events

You can intercept, cancel, or modify the filter results using the <code>onbeforefilter</code> event.

| Events         | Description                                                                                                                                                                                                                      |
| ---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforefilter | This method runs before the filter is applied. It returns an array of valid row numbers or false to return all rows.<br/>`onbeforefilter(worksheet: Object, terms: Object, rowNumbers: Number[]) => Boolean \| Number[] \| void` |
| onfilter       | After the filter has been applied to the rows.<br/>`onfilter(worksheet: Object, terms: String[], rowNumbers: Number[])`                                                                                                          |
| onopenfilter   | Customize the items available when the filter editor is open.<br/>`onopenfilter(worksheet: Object, column: number options: Object[]) => options \| undefined`                                                                    |

 

### Initial Settings

| Property         | Description                                                      |
| -----------------|------------------------------------------------------------------|
| filters: boolean | Start the spreadsheet with the filters enabled. `Default: false` |

 

#### Enable the filter for individual columns

The filter property is available in the columns object for creating a new spreadsheet. Setting `filter: true` enables the filter for the specified column. 

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Jazz', 'Honda'],
            ['Civic', 'Honda'],
            ['Civic', 'Honda'],
            ['Picanto', 'Kia'],
            ['Optima', 'Kia'],
        ],
        filters: false,
        columns: [
            { type: 'text', title: 'Car', filter: true },
            { type: 'text' },
         ]
     }]
});
</script>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [
        {type: 'text', filter: true, width: '300px'},
        {type: 'text'},
    ]
    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} filters={false}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :columns="columns" filters />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data grid column definitions
        const columns = [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]

        return {
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
                data: data,
                filters: false,
                columns: [
                    { type: 'text', title: 'Car', filter: true },
                    { type: 'text' },
                 ]
             }]
        });
    }
}
```
 

 

### Translations

You can translate the filter controls by utilizing the command provided below. 

{.ignore}
```javascript
// Translating the spreadsheet filter controls to French
jspreadsheet.setDictionary({
    'Contains': 'Contient',
    'Does not contain': 'Ne contient pas',
    'Begins with': 'Commence par',
    'Ends with': 'Se termine par',
    'Equal': 'Égal à',
    'Not equal': 'Pas égal à',
    'Greater than': 'Plus grand que',
    'Lower than': 'Moins que',
    'Search': 'Recherche',
    'No matches': 'Pas de correspondance',
});
```
  

## Examples

### Interacting with the filters programmatically

Enable the filters on the initialization and apply or reset filters programmatically. 

Apply ['Honda'] programmatically to the first worksheet, second column

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Apply' id="applybtn">
<input type='button' value='Reset' id="resetbtn">

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const apply = function() {
    worksheets[0].setFilter(1, ['Honda']);
}
const reset = function() {
    worksheets[0].resetFilters();
}

const worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
            ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
            ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
            ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
            ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
        ],
        filters: true,
        columns: [
            {
                type:'text',
                title:'Car',
                width:120,
                // Start the data grid with the following filters applied for this column
                filters: ['Civic','Picanto'],
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
                    "Chrystler",
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
                    "Mercedez-Benz",
                    "Mitsubish",
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
                type: 'checkbox',
                title:'Stock',
                width:80
            },
            {
                type: 'number',
                title:'Price',
                mask:'$ #.##0,00',
                width:100,
                decimal:','
            },
            {
                type: 'text',
                width:110,
                title:'Commission',
                truncate: 3,
            },
            {
                title: 'Color',
                type: 'color',
                width:100,
                render:'square',
            },
         ]
     }]
});

document.getElementById("applybtn").onclick = apply
document.getElementById("resetbtn").onclick = reset
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
        ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
        ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
        ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
        ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
    ]
    // Columns
    const columns = [
        {
            type:'text',
            title:'Car',
            width:120,
            // Start the data grid with the following filters applied for this column
            filters: ['Civic','Picanto'],
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
                "Chrystler",
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
                "Mercedez-Benz",
                "Mitsubish",
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
            type: 'checkbox',
            title:'Stock',
            width:80
        },
        {
            type: 'number',
            title:'Price',
            mask:'$ #.##0,00',
            width:100,
            decimal:','
        },
        {
            type: 'text',
            width:110,
            title:'Commission',
            truncate: 3,
        },
        {
            title: 'Color',
            type: 'color',
            width:100,
            render:'square',
        },
    ]

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                    <Worksheet data={data} columns={columns} filters />
            </Spreadsheet>
            <input type='button' value='Apply' onClick={() => spreadsheet.current[0].setFilter(1, ['Honda'])}>
            <input type='button' value='Reset' onClick={() => spreadsheet.current[0].resetFilters()}>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns"/>
    </Spreadsheet>
    <input type='button' value='Apply' @click="setFilter(1, ['Honda'])}">
    <input type='button' value='Reset' @click="resetFilters()">
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        setFilter(column, filter) {
            this.$refs.spreadsheet.current[0].setFilter(column, filter);
        },
        resetFilters() {
            this.$refs.spreadsheet.current[0].resetFilters();
        },
    },
    data() {
        // Data
        const data = [
            ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
            ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
            ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
            ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
            ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
        ];

        // Columns
        const columns = [
            {
                type:'text',
                title:'Car',
                width:120,
                // Start the data grid with the following filters applied for this column
                filters: ['Civic','Picanto'],
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
                    "Chrystler",
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
                    "Mercedez-Benz",
                    "Mitsubish",
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
                type: 'checkbox',
                title:'Stock',
                width:80
            },
            {
                type: 'number',
                title:'Price',
                mask:'$ #.##0,00',
                width:100,
                decimal:','
            },
            {
                type: 'text',
                width:110,
                title:'Commission',
                truncate: 3,
            },
            {
                title: 'Color',
                type: 'color',
                width:100,
                render:'square',
            },
        ];

        return {
            columns,
            data,
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
    template: `
        <div #spreadsheet></div>
        <input type='button' value='Apply' (click)="this.worksheets[0].setFilter(1, ['Honda'])">
        <input type='button' value='Reset' (click)="this.worksheets[0].resetFilters()">
    `
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
                    ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
                    ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
                    ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
                    ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
                    ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
                ],
                filters: true,
                columns: [
                    {
                        type:'text',
                        title:'Car',
                        width:120,
                        // Start the data grid with the following filters applied for this column
                        filters: ['Civic','Picanto'],
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
                            "Chrystler",
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
                            "Mercedez-Benz",
                            "Mitsubish",
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
                        type: 'checkbox',
                        title:'Stock',
                        width:80
                    },
                    {
                        type: 'number',
                        title:'Price',
                        mask:'$ #.##0,00',
                        width:100,
                        decimal:','
                    },
                    {
                        type: 'text',
                        width:110,
                        title:'Commission',
                        truncate: 3,
                    },
                    {
                        title: 'Color',
                        type: 'color',
                        width:100,
                        render:'square',
                    },
                 ]
             }]
        });
    }
}
```
 

 

### Enable filters for individual columns

It is possible to enable the filters at the column level. This means you can use the filters for one specific column only. 

 





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Picanto', 'Kia' ],
            [ 'Optima', 'Kia' ],
        ],
        filters: false,
        columns: [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
         ]
     }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'Jazz', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Picanto', 'Kia' ],
        [ 'Optima', 'Kia' ],
    ]
    // Columns
    const columns = [
        { type: 'text', filter: true, width: '300px' },
        { type: 'text' },
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} filters={false} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns"/>
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Picanto', 'Kia' ],
            [ 'Optima', 'Kia' ],
        ]
        // Columns
        const columns = [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]

        return {
            columns,
            data,
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
                data: [
                    [ 'Jazz', 'Honda' ],
                    [ 'Civic', 'Honda' ],
                    [ 'Civic', 'Honda' ],
                    [ 'Picanto', 'Kia' ],
                    [ 'Optima', 'Kia' ],
                ],
                filters: false,
                columns: [
                    { type: 'text', filter: true, width: '300px' },
                    { type: 'text' },
                 ]
             }]
        });
    }
}
```
 

 

### Customize the spreadsheet filter behavior

Custom filters can be created using the onbeforefilter event. 

 In this example, if "Canada" is present in the terms in the first column filter, always display all rows.  





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
            ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['Canada', 'Grains', 'No', '2018-11-10'],
            ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
        ],
        defaultColWidth: '140px',
        filters: true,
    }],
    onbeforefilter: function(worksheet, terms, results) {
        // Show all rows if Canada is one of the options
        if (terms[0] && terms[0].indexOf('Canada') >= 0) {
            return false;
        }
        return results;
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
        ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
        ['Canada', 'Grains', 'No', '2018-11-10'],
        ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
    ]
    // Event
    const onbeforefilter = (worksheet, terms, results) => {
        // Show all rows if Canada is one of the options
        if (terms[0] && terms[0].indexOf('Canada') >= 0) {
            return false;
        }
        return results;
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onbeforefilter={onbeforefilter}>
                <Worksheet data={data} filters defaultColWidth="140px" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforefilter="onbeforefilter">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Event
        onbeforefilter(worksheet, terms, results) {
            // Show all rows if Canada is one of the options
            if (terms[0] && terms[0].indexOf('Canada') >= 0) {
                return false;
            }
            return results;
        }
    },
    data() {
        // Data
        const data = [
            ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
            ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['Canada', 'Grains', 'No', '2018-11-10'],
            ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
        ]

        return {
            data,
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
                data: [
                    ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
                    ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
                    ['Canada', 'Grains', 'No', '2018-11-10'],
                    ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
                ],
                defaultColWidth: '140px',
                filters: true,
            }],
            onbeforefilter: function(worksheet, terms, results) {
                // Show all rows if Canada is one of the options
                if (terms[0] && terms[0].indexOf('Canada') >= 0) {
                    return false;
                }
                return results;
            }
        });
    }
}
```
 
