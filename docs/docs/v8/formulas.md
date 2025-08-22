title: Excel-like Formulas
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, formulas, spreadsheet-like formulas, excel formulas
description: Integrate excel-like formulas on your data grid and create amazing applications that work and feel like a spreadsheet.



# Spreadsheet Formulas

Jspreadsheet implements spreadsheet-like formulas, providing great compatibility with major spreadsheet software, such as Excel or Google Sheets. In this section, you can find which formulas are available, how to create custom formulas and other features. 

  * Automatic formula update on copy, paste and corner dragging.
  * The formula returns DOM objects to cells.
  * Cross worksheet calculations.

 

### Formula extension distribution

In most recent versions, the formula extension has two different versions, Basic or Premium. The Basic is the default version for all Jspreadsheet distributions, while Premium is available for purchase, and it brings some differences, such as: 

  * Matrix calculations;
  * Range Variables;
  * Extended formulas;
  * Private scope;
  * Special internal properties, x, y and instance;
  * It runs in stand-alone applications;

 

#### Special properties

When the Jspreadsheet Pro invokes the method from a valid cell, you will have access to the coordinates of the cell and the instance of the worksheet. 

{.ignore}
```javascript
let YOUR_METHOD = function() {
    // Return the coordinates to the cell
    return this.x + ',' + this.y;
}
```
   

## Available formulas

We are working to bring as many formulas as possible. Meanwhile, you can check for the existing implementation. For security reasons, all references should use capital letters, including the implementation of custom methods. 

 

## Formula configurations

A summary of configurations related to the use of formulas.

| Configuration                                 | Description                                                            |
| ----------------------------------------------|------------------------------------------------------------------------|
| **Global configuration for the spreadsheet.** |
| secureFormulas?: boolean                      | Enable formula security. Default: true                                 |
| editorFormulas?: boolean                      | Enable the formula editor. Default: true                               |
| parseFormulas?: boolean                       | Enable formula calculations. Default: true                             |
| debugFormulas?: boolean                       | Enable the formula debug notices. Default: true                        |
| autoIncrement?: boolean                       | Formula variable increment on cloning or copying. Default: true        |
| **Configuration for columns**                 |
| shiftFormula?: boolean                        | Update the formula on cloning (used for custom columns). Default: true |

 

## Spreadsheet formula events

All events related to formulas.

| Event                      | Description                                                                                                                                         |
| ---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforeformula?: Function | Intercept and parse a formula just before the execution.<br/>onbeforeformula(worksheet: Object, expression: String, x: Number, y: Number) => String |
| onformulachain?: Function  | Get the information about the expressions executed from the formula chain.<br/>onformulachain(worksheet: Object, executions: Object) => void        |

  

## Special formulas

To support calculations, Jspreadsheet has a few special formulas listed below:

| Method        | Example                                                                                                                                                               |
| --------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **=TABLE()**  | Return the Jspreadsheet table instance                                                                                                                                |
| **=COLUMN()** | Return the column number where the formula has been executed                                                                                                          |
| **=ROW()**    | Return the row number where the formula has been executed                                                                                                             |
| **=CELL()**   | Return the cell string identification                                                                                                                                 |
| **=VALUE()**  |  Return the cell value based on the colNumber and rowNumber. You can get the raw or processed value. <br/>`=VALUE(col: Number, row: Number, processedValue: Boolean)` |

 

### Roadmap for the formulas

We are constantly adding new methods and features to bring Jspreadsheet in line with modern software.  

## Custom formulas

It is possible to create custom methods that will be available in the spreadsheet. The custom method should return the appropriate content for the cell. From version 7 on, Jspreadsheet accepts a DOM element as a return of a function. **IMPORTANT** : All method names should be created using capital letters. 

{.ignore}
```javascript
// New custom formula
let COLORIZE = function(v) {
    let d = document.createElement('div');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Add to the correct scope
formula.setFormula({ COLORIZE });

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300' },
            { type: 'text', width:'200' },
        ]
    }]
});
```
  

## Example

### Basic spreadsheet with formulas.

A basic spreadsheet example using formulas, including currency, percentage and mask. 



```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let style = 'background-color:orange; font-weight: bold;';

jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
            [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
            [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
            [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
            [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
        ],
        columns: [
            { type: 'text', title:'Product', width:'300' },
            { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
            { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
            { type: 'text', title:'Discount', mask:'0.00%' },
            {
                type: 'number',
                title: 'Total',
                width: '100px',
                format: 'US #.##0,00;[Red](#.##0,00)',
            },
        ],
        style: {
            A9: style,
            B9: style,
            C9: style,
            D9: style,
            E9: style,
        },
        columnSorting:false,
        worksheetName: 'Calculations',
    }]
});
</script>
</html>
```
  

### Cross worksheet formulas

Cross-worksheet formulas have been implemented from version 7 on. The following example has cross-worksheet and cross-spreadsheet formula calculations. 



```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
                ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
            ],
            worksheetName: 'Example1',
            minDimensions: [5,5],
            defaultColWidth: '50px',
            columns: [{
                width: '300px'
            }],
            cells: {
                B5: { mask:'#.##0' },
                D5: { mask:'#.##0' },
            }
        },
        {
            data: [
                ['20%', "=Example1!D1"],
                ['20%', "=Example1!D2"],
                ['20%', "=Example1!D3"],
                ['20%', "=Example1!D4"],
            ],
            worksheetName: 'Example2',
            minDimensions: [5,5],
        },
    ]
});
</script>
</html>
```
  

### Defined names Premium edition

From version 8 on, defined names are available on the premium edition. 

This feature is only available in with the [JSS Formula Premium](/products/formulas) plugin.


{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                [ 1, '=SUM(TEST*10)' ],
                [ 2, '' ],
                [ 3, '' ],
                [ 4, '' ],
            ],
            minDimensions: [5,5],
            worksheetName: 'Named ranges',
        }
    ],
    // On JSS the defined names must be uppercase
    definedNames: {
        'TEST': 'A1:A4',
    },
});
</script>
</html>
```
  

### Custom methods

All custom methods should be declared in capital letters. 



```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Add formula to the necessary scope
formula.setFormula({ COLORIZE });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300px' },
            { type: 'text', width:'200px' },
        ]
    }]
});
</script>
</html>
```
 
