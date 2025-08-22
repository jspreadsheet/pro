title: Nested Headers
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, nested headers
description: Learn how to work with nested headers

Nested Headers
==============

This section covers the methods to handle with the spreadsheet nested headers.  
  
Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet nested headers programmatically.  

| Method | Description |
| --- | --- |
| setNestedHeader | Remove the current nested header, if any, and set the new nested header.  <br>@param nestedHeader - new nested header.  <br>  <br>`Jworksheet setNestedHeader(nestedHeader: Nested[][]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/nested` |
| setNestedHeaderCell | Modify the properties of one or more nested header cells.  <br>@param nestedHeaderCells.x - horizontal cell position.  <br>@param nestedHeaderCells.y - vertical cell position.  <br>@param nestedHeaderCells.properties - cell properties.  <br>  <br>`Jworksheet setNestedHeaderCell(nestedHeaderCells: { x: number; y: number; properties: Nested; } \| { x: number; y: number; properties: Nested; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/nested/update` |
| resetNestedHeader | Remove nested header.  <br>  <br>`Jworksheet resetNestedHeader(): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/nested` |

