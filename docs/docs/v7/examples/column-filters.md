title: Data Grid Column Filters
keywords: Jspreadsheet, Jexcel, javascript, multiple spreadsheets, column filters, filters
description: How to enable column filters on your data grid using Jspreadsheet Pro v7.


# Column filters

Enable column filters on your javascript dynamic tables.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Cheese', '2019-02-12'],
    ['CA', 'Apples', '2019-03-01'],
    ['CA', 'Carrots', '2018-11-10'],
    ['BR', 'Oranges', '2019-01-12'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'autocomplete', url:'/jspreadsheet/countries', width:'200px', },
        { type: 'text', width:'200px', },
        { type: 'calendar', width:'200px', }
     ],
     filters: true,
     license: '###license###',
});
</script>

</html>
```

## Related methods

| Method | Description                                                                      |
| -------|----------------------------------------------------------------------------------|
| filter | `filter(integer columnNumber, Object values)`<br/>Apply filters programatically. |
 

## Related events

| Events         | Description                                                                                                                                              |
| ---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforefilter | `onbeforefilter(DOMElement el, Array filters, Array data)`<br/>Action to be executed before filtering rows. It can cancel the action by returning false. |
| onfilter       | `onfilter(DOMElement el, Array filters, Array data)`<br/>After the filter has been applied to the rows.                                                  |

