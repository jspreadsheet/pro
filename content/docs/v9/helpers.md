title: Spreadsheet Helpers
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, spreadsheet helpers, useful methods
description: From version 8 some useful methods are grouped and available using the Jspreadsheet.helpers object. In this section will bring more information about the usage of each method.



# Spreadsheet helpers

This section provides more details about some useful methods for creating methods in your online spreadsheets. 

## Documentation

### Methods

| Method                                  | Description                                                                                                                                                                   |
| ----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getColumnName(number)                   | Get the column letter based on a number.<br/>`jspreadsheet.helpers.getColumnName(columnNumber: Number) => String`                                                             |
| getColumnNameFromCoords(number, number) | Get the spreadsheet-like cell name from the coordinates.<br/>`jspreadsheet.helpers.getColumnName(x: Number, y: Number) => String`                                             |
| getCoordsFromColumnName(string)         | Get the coordinates from the spreadsheet-like cell name.<br/>`jspreadsheet.helpers.getCoordsFromColumnName(cellName: String) => [Number, Number]`                             |
| shiftFormula(string, number, number)    | Update all variables from a formula based a shift of x, y positions.<br/>`jspreadsheet.helpers.shiftFormula(formula: String, x: Number, y: Number) => String`                 |
| createFromTable(DOMElement, options)    | Extract the configuration to create a new spreadsheet from a static HTML element.<br/>`jspreadsheet.helpers.createFromTable(element: HTMLElement, options: Object) => Object` |
| parseCSV(string, string)                | Transform a CSV string into an array.<br/>`jspreadsheet.helpers.parseCSV(data: String, delimiter: String) => Array`                                                           |
| getTokensFromRange(string)              | Extract the tokens from a range. Example: getTokensFromRange('A1:A10'); // returns [A1,A2,A3,A4...]<br/>`jspreadsheet.helpers.getTokensFromRange(range: String) => Array`     |
| getRangeFromTokens(array)               | Get the range from an array of tokens. <br/>`jspreadsheet.helpers.getRangeFromTokens(tokens: Array) => String`                                                                |
| getCoordsFromRange(string)              | Get the coordinates from a range string. Example: getTokensFromRange('A1:A10'); // returns [0,0,0,9]<br/>`jspreadsheet.helpers.getCoordsFromRange(range: string) => Array`    |

 

## Worksheets shortcut to the helpers

On the most recent versions the instance of the worksheets provides a shortcut to the helpers. 
