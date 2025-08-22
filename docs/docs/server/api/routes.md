title: Routes
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, examples, routes
description: See examples of the Jspreadsheet API

Route examples
==============

The following URL routes are examples when using the Jspreadsheet API. Note that arguments and the type of the request will depent on the action to be performed.

```
// Create a new spreadsheet
https://jspreadsheet.com/api/create

// Get the spreadsheet json definition including all worksheets
https://jspreadsheet.com/api/c3914fd1-c295-46e2-bca6-55d3fc80f508

// Get the spreadsheet json definition of the second worksheet only - starts on zero
https://jspreadsheet.com/api/c3914fd1-c295-46e2-bca6-55d3fc80f508,1

// Download the spreadsheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/download

// Create a new worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/create

// Get the configuration properties of the first worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/config

// Get the configuration properties of the second worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,1/config

// Get the data of the first worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,0/data

// Get the data of the second worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,1/data

// Get the data of one specific row in the first worksheet (default to the first worksheet)
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/data/row/[rowNumber]

// Get the data of one specific column in the second worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,1/data/columns/[colNumber]

// Get data by Range
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/data/range/A1:E1

// Get value from columns or by range from the first worksheet 
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/value/A1,B1,B3
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/value/A1:E10

// Get the value by range from the second worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,1/value/A1:E10

// Get all meta information from the first worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/meta

// Get the width array of the first worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/width

// Get all row height defined in the first worksheet 
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/height

// Get all comments from the second worksheet
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457,1/comments

https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/style
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/style/reset
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/style/reset/A2,B1
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/merge
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/merge/reset
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/type
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/row/insert
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/row/delete
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/row/move
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/column/insert
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/column/delete
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/column/move
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/column/order
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/headers
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/headers/nested
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/footers
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/footers/reset
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/worksheets/create
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/worksheets/rename
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/worksheets/delete
https://jspreadsheet.com/api/946f23e8-ecd5-459c-b377-cc0c93200457/worksheets/move
```