title: Grouping Multiple Spreadsheets in Tabs
keywords: Jspreadsheet, javascript, multiple spreadsheets, tabs
description: How to enable tabs on the online spreadsheet, so that users can add new worksheets.



# Spreadsheet Worksheets

Allow users to add new worksheets to an existing spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />


<div id="spreadsheet"></div>

<script>
let create = function() {
    jspreadsheet(document.getElementById('spreadsheet'), {
        minDimensions: [10,10],
        license: '39130-64ebc-bd98e-26bc4',
    });
}

let data = [
    ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
    ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
    ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
    ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'autonumber', title: 'Id' },
        { type: 'text', width: '350px', title: 'Title' },
        { type: 'text', width: '250px', title: 'Artist' },
     ],
     // Allow create tabs
     tabs: true,
     // Handler to specify the configuration for the new worksheets
     onbeforecreateworksheet: function() {
         let options = {
             minDimensions: [5,5]
         }
         return options;
     },
     onopenworksheet: function(element, instance, worksheetNumber) {
         console.log(worksheetNumber);
     },
     license: '39130-64ebc-bd98e-26bc4',
});

<input type='button' value='Create a new tab' onclick="create()">
</script>
</html>
```
  

## Properties

| Property                 | Description                                                            |
| -------------------------|------------------------------------------------------------------------|
| **tabs**                 |  Show tabs and allow the user to create new worksheets. Default: false |
| **worksheetName**        |  Worksheet title. Default: Sheet {number}                              |
| **allowDeleteWorksheet** |  Add a delete worksheet option to the contextMenu. Default: true       |
| **allowRenameWorksheet** |  Add a rename worksheet option to the contextMenu. Default: true       |
| **allowMoveWorksheet**   |  Allow worksheet drag and drop options. Default: true                  |

 

## Methods

| Property                            | Description                                                                                              |
| ------------------------------------|----------------------------------------------------------------------------------------------------------|
| **createWorksheet(object)**         |  Create a new table worksheet based on a given configuration.<br/>createWorksheet(configuration: object) |
| **getWorksheet(object)**            |  Get the worksheet position based on a table instance.<br/>getWorksheet(instance: object) => number      |
| **openWorksheet(number)**           |  Set worksheet as active by worksheetNumber starting in zero.<br/>openWorksheet(worksheetNumber: number) |
| **renameWorksheet(number, string)** |  Change a worksheet title.<br/>renameWorksheet(worksheetNumber: number, worksheetName: string)           |
| **deleteWorksheet(number)**         |  Delete worksheet.<br/>deleteWorksheet(worksheetNumber: number)                                          |

 

## Events

| Event                       | Description                                                                      |
| ----------------------------|----------------------------------------------------------------------------------|
| **onbeforecreateworksheet** |  Before create a new worksheet, should return the configuration of the new table |
| **oncreateworksheet**       |  When a new worksheet is created                                                 |
| **onrenameworksheet**       |  when a worksheet is renamed                                                     |
| **ondeleteworksheet**       |  When a worksheet is deleted                                                     |
| **onmoveworksheet**         |  When a worksheet position is changed                                            |
| **onopenworksheet**         |  When a worksheet is opened                                                      |


