title: Grouping multiple spreadsheets in worksheets tabs
keywords: Jspreadsheet, Jexcel, javascript, multiple spreadsheets, tabs, worksheets
description: How to enable new worksheets to be added on the fly on the online spreadsheets.


# Spreadsheet worksheets

Allow users to add new worksheets to an existing spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />


<div id="spreadsheet"></div>

<script>
let data = [
    ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
    ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
    ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
    ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
];

let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
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
             minDimensions: [5,5],
             license: '###license###',
         }
         return options;
     },
     license: '###license###',
     onopenworksheet: function(element, instance, worksheetNumber) {
         console.log(element, instance, worksheetNumber);
     }
});
let create = function() {
    spreadsheet.createWorksheet({
        minDimensions: [10,10],
        license: '###license###',
    });
}

document.getElementById("createbtn").onclick = () => create()
</script>

<input type='button' value='Create a new tab' id="createbtn">
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


