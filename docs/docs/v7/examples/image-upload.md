title: Embed Base64 Images to your Data Grid
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, image upload, base64, embed images
description: An example of how to embed and upload images to your spreadsheet.


# Embed images into your spreadsheet

The following examples shows how to embed images into your spreadsheet.

## Load a local image to your table

Load images from your local machine into your javascript spreadsheet

Double-click in the image cell to upload a new image.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Yellow', 'data:image/jpeg;base64,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'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    minDimensions: [2,4],
    columns: [
        { type:'text', width:300, title:'Title' },
        { type:'image', width:120, title:'Cover' },

     ],
    license: '###license###',
});
</script>
</html>
```

## Embed remote images to your table

Automatic image rendering from a remote URL using updateTable method

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data2 = [
    ['https://marketplace.canva.com/MACcZp2p4po/2/0/thumbnail_large/canva-black-white-acoustic-album-cover-MACcZp2p4po.jpg', 'Paul Parker'],
    ['https://marketplace.canva.com/MACcY55adP4/1/0/thumbnail_large/canva-black-and-white-masculine-acoustic-modern-album-cover-MACcY55adP4.jpg', 'Mark Ellen']
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data2,
    columns: [
        { type:'text', width:300, title:'Cover' },
        { type:'text', width:300, title:'Title' },
    ],
    updateTable: function (instance, cell, col, row, val, label) {
        if (col == 0) {
            cell.innerHTML = '<img src="' + val + '" style="width:100px;height:100px">';
        }
    },
    license: '###license###',
});
</script>
</html>
```
 
