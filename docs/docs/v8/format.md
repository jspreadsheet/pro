title: Spreadsheet Data Formats
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cell formatting, format, number formatting
description: This section brings details on how to format numbers and dates on your JSS spreadsheets.



# Spreadsheet format

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

#### India currency

{.ignore}
```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
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
</script>
```

#### Accounting notation

{.ignore}
```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'bn',
            options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
        }]
    }]
});
</script>
```

#### Currency with decimals

{.ignore}
```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
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
```
  

## Examples

The example below implements number formatting using Intl.NumberFormat or mask. 

See more examples of the [spreadsheet format](https://jsfiddle.net/spreadsheet/L9jxszf3/) on jsfiddle

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
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
 
