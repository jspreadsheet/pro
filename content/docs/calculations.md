title: Cross Spreadsheet Calculations
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, Excel-like formulas, spreadsheet-like formulas, cross spreadsheet calculations, multi-sheet calculations, data calculations across sheets
description: How to create cross-spreadsheet calculations in Jspreadsheet including calculation precedence rules

# Spreadsheet Cross Calculations

## Documentation

### Calculation State

During initialization, Jspreadsheet guarantees that calculations between worksheets are deferred until all data is fully loaded. However, in cross-spreadsheet calculations, specific formulas may require data that still needs to be loaded. To address this, developers can utilize the calculation state feature to queue these calculations, allowing them to be executed once all relevant spreadsheet data is available.

#### Example

To manage calculation states in Jspreadsheet, use jspreadsheet.calculations(state). Setting state to false queues all formula executions, while true executes all queued calculations.

{.ignore}
```javascript
jspreadsheet.calculations(state: boolean);
```

### Calculation Namespaces

The latest version of Jspreadsheet introduces namespaces, enabling you to organize spreadsheets into groups to prevent name conflicts. This feature allows using identical worksheet names, such as Sheet1!A1*10, across different namespaces. Consequently, Jspreadsheet can accurately determine the specific worksheet to reference when applying formulas.

{.ignore}
```javascript
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10]
    }],
    namespace: '3b0fe10b-e48d-4d47-9a4f-5ebf59d52c58',
});
```

### Pre Calculations

The `preCalculation?: boolean` flag allows developers to choose between performing calculations during initial loading or deferring them to an on-demand calculation triggered by scrolling. Using the on-demand mode might impact the scrolling experience for complex calculations, so it should be used with caution.

{.ignore}
```javascript
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10]
    }],
    preCalculation: false,
});
```

## Examples

### Cross spreadsheet calculations

With Jspreadsheet, you can execute Excel-like formulas across multiple spreadsheet instances. It's essential to be aware that the order in which spreadsheets are loaded may lead to errors if a formula references a spreadsheet that has yet to be loaded. To address this, from version 10.3.0 onwards, Jspreadsheet includes a feature that allows you to pause calculations until all referenced spreadsheets are fully loaded, ensuring accurate cross-spreadsheet computations. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet1"></div><br><br>
<div id="spreadsheet2"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Stop calculations to make sure all data grid are ready and loaded
jspreadsheet.calculations(false);

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        data: [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.13, '=B1*C1' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, '=B2*C2' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, '=B3*C3' ],
            [ 'Index Cards Unlined', 3, 6.00, '=B4*C4' ],
            [ 'Tissues', 10, 1.90, '=B5*C5' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, '=B6*C6' ],
            [ 'Thin Markers Crayola only', 2, 3.00, '=B7*C7' ],
            [ 'Highlighter', 4, 1.20, '=B8*C8' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '=SUM(D1:D8)' ],
        ],
        columns: [
            { type: 'text', title:'Product', width:'300' },
            { type: 'number', title:'Qtd', width:'80' },
            { type: 'number', title:'Price', width:'100' },
            { type: 'number', title:'Total', width:'100' },
        ],
        worksheetName: 'Products',
        columnSorting: false,
    }],
});

jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        data: [
            [ 'Price', '=SUM(Products!D1:D8)'],
            [ 'Discount', 0.1],
            [ 'Total', '=B1*(1-B2)'],
        ],
        columns: [
            { type: 'text', title:'Summary', width:'300' },
            { type: 'number', title:'Total', width:'200' },
        ],
        cells: { B2: { type:'percent' } },
        columnSorting: false,
    }],
});

// Release the data grid calculations
jspreadsheet.calculations(true);
</script>
</html>
```

```jsx
import React, {useRef, useEffect} from "react";
import {Spreadsheet, jspreadsheet} from "@jspreadsheet/react";
import * as formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";


// Set the license
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({formula})

// Stop calculations to make sure all data grid are ready and loaded
jspreadsheet.calculations(false);

// Create the component
export default function App() {

    const productsRef = useRef();
    const summaryRef = useRef();

    // Spreadsheet products
    const products = {
        worksheets: [{
            data: [
                ['Crayons Crayola only (No Rose Art)', 2, 5.13, '=B1*C1'],
                ['Colored Pencils Crayola only', 2, 4.41, '=B2*C2'],
                ['Expo Dry-erase Markers Wide', 4, 3.00, '=B3*C3'],
                ['Index Cards Unlined', 3, 6.00, '=B4*C4'],
                ['Tissues', 10, 1.90, '=B5*C5'],
                ['Ziploc Sandwich-size Bags', 5, 1.00, '=B6*C6'],
                ['Thin Markers Crayola only', 2, 3.00, '=B7*C7'],
                ['Highlighter', 4, 1.20, '=B8*C8'],
                ['Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '=SUM(D1:D8)'],
            ],
            columns: [
                {type: 'text', title: 'Product', width: '300'},
                {type: 'number', title: 'Qtd', width: '80'},
                {type: 'number', title: 'Price', width: '100'},
                {type: 'number', title: 'Total', width: '100'},
            ],
            worksheetName: 'Products',
            columnSorting: false,
        }],
    };
    // Spreadsheet summary
    const summary = {
        worksheets: [{
            data: [
                ['Price', '=SUM(Products!D1:D8)'],
                ['Discount', 0.1],
                ['Total', '=B1*(1-B2)'],
            ],
            columns: [
                {type: 'text', title: 'Summary', width: '300'},
                {type: 'number', title: 'Total', width: '200'},
            ],
            cells: {B2: {type: 'percent'}},
            columnSorting: false,
        }],
    }

    useEffect(() => {
        if (summaryRef.current && productsRef.current) {
            // Release the data grid calculations
            jspreadsheet.calculations(true);
        }
    }, [])

    // Create spreadsheets
    return (<>
            <Spreadsheet ref={summaryRef} worksheets={summary.worksheets}/>
            <Spreadsheet ref={productsRef} worksheets={products.worksheets}/>
    </>);
}
```
```vue
<template>
    <Spreadsheet :worksheets="summary" />
    <Spreadsheet :worksheets="products" />
</template>

<script>
import { Spreadsheet, jspreadsheet } from "@jspreadsheet/vue";
import * as formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula })

// Stop calculations to make sure all data grid are ready and loaded
jspreadsheet.calculations(false);

// Create components
export default {
    components: {
        Spreadsheet,
    },
    mounted() {
        // Release the data grid calculations
        jspreadsheet.calculations(true);
    },
    data() {
        // Spreadsheet products
        const products = [
            {
                data: [
                    ["Crayons Crayola only (No Rose Art)", 2, 5.13, "=B1*C1"],
                    ["Colored Pencils Crayola only", 2, 4.41, "=B2*C2"],
                    ["Expo Dry-erase Markers Wide", 4, 3.0, "=B3*C3"],
                    ["Index Cards Unlined", 3, 6.0, "=B4*C4"],
                    ["Tissues", 10, 1.9, "=B5*C5"],
                    ["Ziploc Sandwich-size Bags", 5, 1.0, "=B6*C6"],
                    ["Thin Markers Crayola only", 2, 3.0, "=B7*C7"],
                    ["Highlighter", 4, 1.2, "=B8*C8"],
                    ["Total", "=SUM(B1:B8)", "=ROUND(SUM(C1:C8), 2)", "=SUM(D1:D8)"],
                ],
                columns: [{
                        type: "text",
                        title: "Product",
                        width: "300"
                    },
                    {
                        type: "number",
                        title: "Qtd",
                        width: "80"
                    },
                    {
                        type: "number",
                        title: "Price",
                        width: "100"
                    },
                    {
                        type: "number",
                        title: "Total",
                        width: "100"
                    },
                ],
                worksheetName: "Products",
                columnSorting: false,
            }
        ];

        // Spreadsheet summary
        const summary = [
            {
                data: [
                    ["Price", "=SUM(Products!D1:D8)"],
                    ["Discount", 0.1],
                    ["Total", "=B1*(1-B2)"],
                ],
                columns: [{
                        type: "text",
                        title: "Summary",
                        width: "300"
                    },
                    {
                        type: "number",
                        title: "Total",
                        width: "200"
                    },
                ],
                cells: {
                    B2: {
                        type: "percent"
                    }
                },
                columnSorting: false,
            }
        ];

        return {
            products,
            summary,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula })

// Create the data grid component
@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #summary></div>
        <div #products></div>
    `,
})
export class AppComponent {
    @ViewChild("summary") summary: ElementRef;
    @ViewChild("products") products: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Stop calculations to make sure all data grid are ready and loaded
        jspreadsheet.calculations(false);

        // Create summary spreadsheet
        jspreadsheet(this.summary.nativeElement, {
            worksheets: [{
                data: [
                    [ 'Crayons Crayola only (No Rose Art)', 2, 5.13, '=B1*C1' ],
                    [ 'Colored Pencils Crayola only', 2, 4.41, '=B2*C2' ],
                    [ 'Expo Dry-erase Markers Wide', 4, 3.00, '=B3*C3' ],
                    [ 'Index Cards Unlined', 3, 6.00, '=B4*C4' ],
                    [ 'Tissues', 10, 1.90, '=B5*C5' ],
                    [ 'Ziploc Sandwich-size Bags', 5, 1.00, '=B6*C6' ],
                    [ 'Thin Markers Crayola only', 2, 3.00, '=B7*C7' ],
                    [ 'Highlighter', 4, 1.20, '=B8*C8' ],
                    [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '=SUM(D1:D8)' ],
                ],
                columns: [
                    { type: 'text', title:'Product', width: 300 },
                    { type: 'number', title:'Qtd', width: 80 },
                    { type: 'number', title:'Price', width: 100 },
                    { type: 'number', title:'Total', width: 100 },
                ],
                worksheetName: 'Products',
                columnSorting: false,
            }],
        });

        // Create products spreadsheet
        jspreadsheet(this.products.nativeElement, {
            worksheets: [{
                data: [
                    [ 'Price', '=SUM(Products!D1:D8)'],
                    [ 'Discount', 0.1],
                    [ 'Total', '=B1*(1-B2)'],
                ],
                columns: [
                    { type: 'text', title:'Summary', width: 300 },
                    { type: 'number', title:'Total', width: 200 },
                ],
                cells: { B2: { type:'percent' } },
                columnSorting: false,
            }],
        });

        // Release the data grid calculations
        jspreadsheet.calculations(true);
    }
}
```
 
