title: Spreadsheet footers
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, column filters
description: The spreadsheet footers helps to sticky information on the bottom of the table, including formulas and data summaries.



# Spreadsheet footer

The spreadsheet footers help sticky information or calculations at the bottom of a worksheet. Footers can be defined in the initialization or programmatically. 

## Documentation

### Methods

There are some methods for interacting with the footers programmatically.

| Method                                 | Description                                                                                                              |
| ---------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| getFooter()                            | Get the current footer settings.<br/>`getFooter() : Array`                                                               |
| setFooter()                            | Set the footer settings.<br/>`setFooter(newValue: Array) : void`                                                         |
| resetFooter()                          | Reset and remove the footers.<br/>`resetFooter() : void`                                                                 |
| refreshFooter()                        | Recalculate the values in the footer.<br/>`refreshFooter() : void`                                                       |
| getFooterValue(number, number)         | Get the current footer cell value from the coordinates x, y.<br/>`getFooterValue(x: Number, y: Number) : void`           |
| setFooterValue(number, number, string) | Set the value of a footer cell to the coordinates x, y.<br/>`setFooterValue(x: Number, y: Number, value: String) : void` |

 

### Events

Events related to the footer property.

| Event               | Description                                                                                                                                           |
| --------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangefooter      | `onchangefooter(worksheet: Object, newValue: String, oldValue: String) : null`<br/>This method is called when the footers are changed.                |
| onchangefootervalue | `onchangefootervalue(worksheet: Object, x: Number, y: Number, newValue: String) : null`<br/>This method is called when the footer values are changed. |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property          | Description         |
| ------------------|---------------------|
| footers: string[] | Footers definitions |

 

## Examples

 

### Basic footer usage

In the example below the custom SUMCOL formula is implemented to consider only visible rows in the calculations. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Cheese', 10, 6.00, "=B1*C1"],
    ['Apples', 5, 4.00, "=B2*C2"],
    ['Carrots', 5, 1.00, "=B3*C3"],
    ['Oranges', 6, 2.00, "=B4*C4"],
];

/**
 * Custom method to SUM all rows of one column specified
 * @param {object} the worksheet
 * @param {number} the column number
 * @param {boolean} consider only thte visible columns
 */
let SUMCOL = function(instance, columnId, onlyVisible) {
    let total = 0;
    let num = 0;
    for (let j = 0; j < instance.options.data.length; j++) {
        if (! onlyVisible || ! instance.results || instance.results.indexOf(j) >= 0) {
            if (num = Number(instance.records[j][columnId-1].element.innerText)) {
                total += num;
            }
        }
    }
    return total;
}

// Send the method to the correct scope
formula.setFormula({ SUMCOL });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    minDimensions: [4,10],
    footers: [
        [
            'Total',
            '=SUMCOL(TABLE(), COLUMN(), true)',
            '=SUMCOL(TABLE(), COLUMN(), true)',
            '=SUMCOL(TABLE(), COLUMN(), true)'
        ]
    ],
    columns: [
        { width:'400px' }
    ]
});
</script>
</html>
```
  

### Programmatic updates

How to change the formulas in the footers after the initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<input type='button' value='Change to AVERAGE' id="updatebtn">

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

let update = function() {
    worksheets.setFooterValue(0,0,'Average');
    worksheets.setFooterValue(1,0,'=AVERAGE(B:B)');
    worksheets.setFooterValue(2,0,'=AVERAGE(C:C)');
}

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        ['Cheese', 10, 6.00],
        ['Apples', 5, 4.00],
        ['Carrots', 5, 1.00],
        ['Oranges', 6, 2.00],
    ],
    footers: [
        [
            'Total',
            '=SUM(B:B)',
            '=SUM(C:C)',
        ]
    ],
    columns: [
        { width:'400px' }
    ]
});

document.getElementById("updatebtn").onclick = update
</script>
</html>
```
  

### Cross footer calculations

Footers are used to hold static information, but the following example creates a complete cross-footer calculations with realtime updates using onafterchanges. See our cross [spreadsheet](https://jsfiddle.net/spreadsheet/jv8dp06w/) footer calculations on jsfiddle 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet1"></div><br>
<div id="spreadsheet2"></div><br>
<div id="spreadsheet3"></div><br>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let s1 = jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        worksheetName: 'JSS1',
        data: [
            [43, 64],
            [51, 46],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});

// Create the spreadsheet
let s2 = jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        worksheetName: 'JSS2',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});

// Create the spreadsheet
let s3 = jspreadsheet(document.getElementById('spreadsheet3'), {
    worksheets: [{
        worksheetName: 'JSS3',
        data: [
            [34, 53],
            [51, 35],
        ],
        footers: [
            ['=SUM(JSS1!A:A,JSS2!A:A,JSS3!A:A)']
        ],
    }],
    onafterchanges: function () {
        s3[0].setFooter();
    }
});
</script>
</html>
```
 
