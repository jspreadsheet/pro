title: Worksheets properties, methods and events.
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, grid, events
description: How to handle worksheets programatically using methods events and properties.

Documentation



# Worksheets

Learn how to deal programmatically with worksheets. Click here to see a [working example](/docs/v7/examples/worksheets).

## Properties

Available initialization properties.

| Property                 | Description                                                            |
| -------------------------|------------------------------------------------------------------------|
| **tabs**                 |  Show tabs and allow the user to create new worksheets. Default: false |
| **worksheetName**        |  Worksheet title. Default: Sheet {number}                              |
| **allowDeleteWorksheet** |  Add a delete worksheet option to the contextMenu. Default: true       |
| **allowRenameWorksheet** |  Add a rename worksheet option to the contextMenu. Default: true       |
| **allowMoveWorksheet**   |  Allow worksheet drag and drop options. Default: true                  |

 

## Methods

Available methods to interact programmatically with the worksheets.

| Property                            | Description                                                                                              |
| ------------------------------------|----------------------------------------------------------------------------------------------------------|
| **createWorksheet(object)**         |  Create a new table worksheet based on a given configuration.<br/>createWorksheet(configuration: object) |
| **getWorksheet(object)**            |  Get the worksheet position based on a table instance.<br/>getWorksheet(instance: object) => number      |
| **openWorksheet(number)**           |  Set worksheet as active by worksheetNumber starting in zero.<br/>openWorksheet(worksheetNumber: number) |
| **renameWorksheet(number, string)** |  Change a worksheet title.<br/>renameWorksheet(worksheetNumber: number, worksheetName: string)           |
| **deleteWorksheet(number)**         |  Delete worksheet.<br/>deleteWorksheet(worksheetNumber: number)                                          |

 

## Available events

The worksheet available events.

| Event                       | Description                                                                      |
| ----------------------------|----------------------------------------------------------------------------------|
| **onbeforecreateworksheet** |  Before create a new worksheet, should return the configuration of the new table |
| **oncreateworksheet**       |  When a new worksheet is created                                                 |
| **onrenameworksheet**       |  when a worksheet is renamed                                                     |
| **ondeleteworksheet**       |  When a worksheet is deleted                                                     |
| **onmoveworksheet**         |  When a worksheet position is changed                                            |


