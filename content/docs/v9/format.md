title: Spreadsheet Input Format
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cell formatting, format, number formatting
description: This section brings details on how to format numbers and dates on your JSS spreadsheets.



# Spreadsheet Input Format

From version 8 on, three different properties help with column and cell data formatting. Those options bring Jspreadsheet closer to other spreadsheet software such as Excel and Google Sheets and increases the level of compatibility and flexibility you experience in your online spreadsheet applications. This section covers the different properties, such as **mask** , **format** and **locale**. 

## Spreadsheet Tokens

The first section of this chapter will cover the usage of the property mask and format. The `mask` property only allows the user to enter a specific input defined by spreadsheet-like tokens, where the `format` property is applied after the user finishes editing a cell. The tokens are compatible with other spreadsheet software and can be used as shown below: 

{.ignore}
```javascript
/**
A few valid tokens can be used with mask as below:
0
0.00
0%
0.00%
#,##0
#,##0.00
#,##0;(#,##0)
#,##0;[Red](#,##0)
#,##0.00;(#,##0.00)
#,##0.00;[Red](#,##0.00)
d-mmm-yy
d-mmm
dd/mm/yyyy
mmm-yy
h:mm AM/PM
h:mm:ss AM/PM
h:mm
h:mm:ss
m/d/yy h:mm
mm:ss
[h]:mm:ss
*/
```

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            // Excel like token to format the currency input
            mask: 'U$ #.##0,00'
        }]
    }]
});
</script>
```
  

## Intl. Number formatting



### Currency formatting

If the style is 'currency,' a currency property must be provided. Optionally, currencyDisplay and currencySign control the unit formatting. 

{.ignore}
```html
<div id="spreadsheet1"></div>
<div id="spreadsheet2"></div>
<div id="spreadsheet3"></div>

<script>
// India currency
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            // Locale will enable number formating
            locale: 'en-IN',
            // Options for the number format class. You can find more about he options on the link above
            options: { style:'currency', currency: 'INR' }
        }]
    }]
});

// Accounting notation
jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'bn',
            options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
        }]
    }]
});

// Currency with decimals
jspreadsheet(document.getElementById('spreadsheet3'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'bn',
            options: {
                 style: 'currency', 
                 currency: 'EUR', 
                 maximumFractionDigits: 4,
                 minimumFractionDigits: 1
            }
        }]
    }]
});
</script>
```
  

### Unit formatting

If the style is 'unit,' a unit property must be provided. Optionally, unitDisplay controls the unit formatting. 

{.ignore}
```html
<div id="spreadsheet"></div>
<script>
// → '3,500 liters'
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'en-US',
            options: { style: 'unit', unit: 'liter', unitDisplay: 'long' }
        }]
    }]
});
</script>
```
  

### Scientific, engineering or compact notations

Scientific and compact notation are represented by the notation option and can be formatted like this: 

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
// Example: 9.9亿
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'zh-CN',
            options: { notation: "compact" }
        }]
    }]
});
</script>
```
 

### Percentage

Percentage can be used as shown below: 

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            { type: "number", locale: 'en-US', options: { style: 'percent' }},
        }]
    }]
});
</script>
```
  

## Custom formatting

Jspreadsheet allows you to integrate custom masking using the method `render`, as shown below. 

### Example

How to mask a cell using MomentJS. 

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let customRender = function(td, value, x, y, instance, options) {
    if (td && td.innerText && options.customFormat) {
        td.innerText = moment(td.innerText).format(options.customFormat);
    }
}

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        data: [['2022-01-01 12:14:12'],['=TODAY()']],
        columns: [{
            width: 300,
            customFormat: 'MMMM Do YYYY, h:mm:ss a',
            render: customRender,
            align: 'right',
        }],
        minDimensions: [6,8],
    }],
});
</script>
</html>
```
  

## Examples

 

### Data grid with different currencies

The example below implements number formatting using Intl.NumberFormat or mask. 

See more examples of the [spreadsheet format](https://jsfiddle.net/spreadsheet/L9jxszf3/) on jsfiddle

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [
        {
            minDimensions:[6, 10],
            data: [
                [1024,1024,0.24,1024,1024,1024],
                [1000.456,1000.456,0.4155,1000.456,1000.456,1000.456],
                ['547','547,98','7,98','547.98','547,98','547.98'],
            ],
            columns: [
                {
                    title:"Currency INR",
                    type: "number",
                    locale: 'en-IN',
                    options: { style:'currency', currency: 'INR' } },
                {
                    title: "Currency BRL",
                    type: "number",
                    locale: 'pt-BR',
                    options: { style: 'currency', currency: 'BRL' } },
                {
                    title: "Percent US",
                    type: "number",
                    mask: "0.00%" },
                {
                    title: "Units Liter US",
                    type: "number",
                    locale: 'en-US',
                    options: { style: 'unit', unit: 'liter', unitDisplay: 'long' } },
                {
                    type: "number",
                    format: '#.##0,00'
                },
                {
                    type: "number",
                    mask: '#,##0'
                },
            ],
            defaultColWidth: '120px',
        }
    ]
});

</script>
</html>
```
 

### How to apply format

The example below shows how to change the currency of the data grid dynamically. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="set $ #,##0.00 to A1" id="setformatbtn" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

let setFormat = function() {
	table[0].updateProperty(0,0, {mask: '$ #,##0.00' });
}

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
    	data: [['101.00']],
        minDimensions: [8,8],
    }],
});

document.getElementById("setformatbtn").onclick = setFormat
</script>
</html>
```
 
