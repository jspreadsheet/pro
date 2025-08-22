title: Grocery Store Data Grid Example
keywords: Jspreadsheet, Jexcel, JavaScript, Use Cases, Grocery Store, Data Grid, Data Management, Data Organization, Data Analysis, Data Visualization
description: Explore a simple grocery store data grid inventory example featuring search functionality and image upload using Jspreadsheet.

# Grocery Store

A grocery store data grid example with search, pagination and file upload. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg', 'Vegetables', 'Carrots', '2019-02-12', '14.00', '4' ],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg', 'Fruits', 'Apple', '2019-03-01', '45.00', '5'],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Split_ananas.jpg/800px-Split_ananas.jpg', 'Fruits', 'Pineapples', '2018-11-10', '30.00', '4'],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/1280px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg', 'Fruits', 'Plums', '2019-01-12', '14.00', '4' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50],
        columns: [
            { type: 'image', width: '110px', title: 'Photo' },
            {
                type: 'dropdown',
                width: '120px',
                title: 'Category',
                source: [
                    'Vegetables',
                    'Fruits',
                    'Grains, Beans and Nuts',
                    'Meat and Poultry',
                    'Fish and Seafood',
                    'Dairy Foods'
                ]
            },
            { type: 'text', width: '150px', title: 'Description' },
            { type: 'calendar', width: '100px', title: 'Best before' },
            { type: 'text', width: '80px', title: 'Price', mask: '$ #,##0.00' },
            { type: 'rating', width: '90px', title: 'Rating', color: 'red' }
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

// Set the license
const license = '###license###';

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg', 'Vegetables', 'Carrots', '2019-02-12', '14.00', '4' ],
        [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg', 'Fruits', 'Apple', '2019-03-01', '45.00', '5'],
        [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Split_ananas.jpg/800px-Split_ananas.jpg', 'Fruits', 'Pineapples', '2018-11-10', '30.00', '4'],
        [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/1280px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg', 'Fruits', 'Plums', '2019-01-12', '14.00', '4' ],
    ];
    // Columns
    const columns = [
        { type: 'image', width: '110px', title: 'Photo' },
        {
            type: 'dropdown',
            width: '120px',
            title: 'Category',
            source: [
                'Vegetables',
                'Fruits',
                'Grains, Beans and Nuts',
                'Meat and Poultry',
                'Fish and Seafood',
                'Dairy Foods'
            ]
        },
        { type: 'text', width: '150px', title: 'Description' },
        { type: 'calendar', width: '100px', title: 'Best before' },
        { type: 'text', width: '80px', title: 'Price', mask: '$ #,##0.00' },
        { type: 'rating', width: '90px', title: 'Rating', color: 'red' }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} search pagination={"10"} paginationOptions={[10,25,50]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :columns="columns" :search="true" pagination="10" :paginationOptions="[10,25,50]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Create components
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg', 'Vegetables', 'Carrots', '2019-02-12', '14.00', '4' ],
            [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg', 'Fruits', 'Apple', '2019-03-01', '45.00', '5'],
            [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Split_ananas.jpg/800px-Split_ananas.jpg', 'Fruits', 'Pineapples', '2018-11-10', '30.00', '4'],
            [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/1280px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg', 'Fruits', 'Plums', '2019-01-12', '14.00', '4' ],
        ];
        // Columns
        const columns = [
            { type: 'image', width: '110px', title: 'Photo' },
            {
                type: 'dropdown',
                width: '120px',
                title: 'Category',
                source: [
                    'Vegetables',
                    'Fruits',
                    'Grains, Beans and Nuts',
                    'Meat and Poultry',
                    'Fish and Seafood',
                    'Dairy Foods'
                ]
            },
            { type: 'text', width: '150px', title: 'Description' },
            { type: 'calendar', width: '100px', title: 'Best before' },
            { type: 'text', width: '80px', title: 'Price', mask: '$ #,##0.00' },
            { type: 'rating', width: '90px', title: 'Rating', color: 'red' }
        ];

        return {
            data,
            columns,
            license
        };
    }
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set the license
jspreadsheet.setLicense('###license###');

const data = [
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg', 'Vegetables', 'Carrots', '2019-02-12', '14.00', '4'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg', 'Fruits', 'Apple', '2019-03-01', '45.00', '5'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Split_ananas.jpg/800px-Split_ananas.jpg', 'Fruits', 'Pineapples', '2018-11-10', '30.00', '4'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/1280px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg', 'Fruits', 'Plums', '2019-01-12', '14.00', '4'],
];

// Create the data grid component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: data,
                search: true,
                pagination: 10,
                paginationOptions: [10, 25, 50],
                columns: [
                    { type: 'image', title: 'Photo' },
                    {
                        type: 'dropdown',
                        title: 'Category',
                        source: [
                            'Vegetables',
                            'Fruits',
                            'Grains, Beans and Nuts',
                            'Meat and Poultry',
                            'Fish and Seafood',
                            'Dairy Foods'
                        ]
                    },
                    { type: 'text', title: 'Description' },
                    { type: 'calendar', title: 'Best before' },
                    { type: 'text', title: 'Price', mask: '$ #,##0.00' },
                    { type: 'rating', title: 'Rating'}
                ],
            }]
        });
    }
}
```
 
