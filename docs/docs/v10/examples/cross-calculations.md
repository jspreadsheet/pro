title: Cross Spreadsheet Calculations in Jspreadsheet - Excel-Like Formulas Across Multiple Worksheets
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, Excel-like formulas, spreadsheet-like formulas, cross spreadsheet calculations, multi-sheet calculations, data calculations across sheets
description: Learn how to perform cross-spreadsheet calculations in Jspreadsheet. Explore the flexibility of performing calculations that involve data from multiple sheets, allowing data analysis and manipulation across your entire spreadsheet application.

# Spreadsheet Cross Calculations

You can use Excel-like formulas to perform calculations across different spreadsheet instances. However, note that the sequence in which you load the spreadsheets can cause errors, especially if a formula references a spreadsheet that has yet to be loaded. To handle this scenario, starting from jspreadsheet v10.3.0 and onwards, a feature has been introduced to pause calculations until all spreadsheets are ready. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br><br>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Stop calculations to make sure all data grid are ready and loaded
jspreadsheet.calculations(false);

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet'), {
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

jspreadsheet(document.getElementById('spreadsheet'), {
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
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

// Set the license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula })

// Create the component
export default function App() {

    const productsRef = useRef();
    const summaryRef = useRef();

    // Spreadsheet products
    const products = {
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
    };
    // Spreadsheet summary
    const summary = {
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
    }

    // Create spreadsheets
    return (
        <Spreadsheet ref={summaryRef} worksheets={summary.worksheets} />
        <Spreadsheet ref={productsRef} worksheets={products.worksheets} />
    );
}
```
```vue
<template>
    <Spreadsheet :worksheets="summary" />
    <Spreadsheet :worksheets="products" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

// Set the license
jspreadsheet.setLicense('###license###');

// Load the extensions
jspreadsheet.setExtensions({ formula });

// Create components
export default {
    components: {
        Spreadsheet,
        Worksheet,
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import * as formula from "@jspreadsheet/formula-pro";

// Create the data grid component
@Component({
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
                    { type: 'text', title:'Product', width:'300' },
                    { type: 'number', title:'Qtd', width:'80' },
                    { type: 'number', title:'Price', width:'100' },
                    { type: 'number', title:'Total', width:'100' },
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
                    { type: 'text', title:'Summary', width:'300' },
                    { type: 'number', title:'Total', width:'200' },
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
 
