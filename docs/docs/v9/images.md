title: Data Grid Embed Images
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, images
description: Handle images on the cells of your online spreadsheet.

# Spreadsheet images

This section is dedicated to handling images in the web based spreadsheet. 

## Documentation

The image type brings a few options as shown below:

| Method            | Description                                                    |
| ------------------|----------------------------------------------------------------|
| absolute: Boolean | True for a floating image or false for an image within a cell. |
| width: Number     | Width of the image                                             |
| height: Number    | Height of the image                                            |
| top: Number       | Top reference of the image                                     |
| left: Number      | Left reference of the image                                    |

 

## Examples

### Basic image editor

Define the image upload editor for a column. The images will be stored as base 64 in the raw data. 

Double click in the image cell to upload a new image.

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
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
            ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
        ],
        minDimensions: [2,4],
        columns: [
            { type:'text', width:300, title:'Title' },
            { type:'image', width:120, title:'Image' },
        ],
    }],
});
</script>
</html>
```
  

### Floating images

The following example shows how to embed a floating image. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
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
            ['LemonadeJS', 'https://lemonadejs.net/templates/default/img/components.svg'],
        ],
        minDimensions: [4,4],
        cells: {
            B1: { type:'image', options: { absolute: true, width: '200px' } }
        },
    }]
});
</script>
</html>
```
 
