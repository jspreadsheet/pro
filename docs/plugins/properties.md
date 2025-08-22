Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![properties plugin icon](img/properties-spreadsheet-plugin-icon.png)

Spreadsheet Properties
======================

This plugin includes a properties option on the context menu. Once it is selected by the user, a modal with some basic spreadsheet configuration will be presented for real time table configuration.  
  
The spreadsheet properties that can be changed using this plugin:

* Allow drag and drop rows or columns
* Allow resize rows or columns
* Allow inserting new rows or columns
* Allow delete rows or columns
* Allow rename column headers
* Allow comments on cells
* Allow exporting as a CSV file
* Allow column sorting
* Enable the toolbar
* Enable the column filters
* Define the default column alignment
* Define the default column width

![column properties](img/spreadsheet-column-properties.png)

  

Author
------

This is an official plugin.  
  

Pricing
-------

This plugin is free an distribute as MIT.  
  

Souce
-----

You can download the source code on our [github page](https://github.com/jspreadsheet/plugins/tree/master/properties).  
  

Example
-------

Right click over the following spreasheet content, them click in the option Properties to see this plugin in action.  
  

  
  

### Source code

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.layout.css" type="text/css" />

<script src="https://jspreadsheet.com/v10/plugins/properties.js"></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets:[{
        minDimensions: [5, 5],
        allowComments: false,
    }],
    plugins: [{
        plugin: properties,
        name: 'properties'
    }]
});
</script>
</html>
```

{.ignore}
```javascript
document.addEventListener('DOMContentLoaded', function() { jspreadsheet(document.getElementById('spreadsheet'), { worksheets:[{ minDimensions: [5, 5], allowComments: false,}], plugins: [{ plugin: properties, name: 'properties' }] });});
```
