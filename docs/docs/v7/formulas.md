title: Using formulas on your spreadsheets
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, formulas
description: How to use formulas on your online spreadsheets.



# Spreadsheet Formulas

Jspreadsheet implements several spreadsheet-like formulas. This way provides a very nice compatibility mode with the major spreadsheet software, such as Excel or Google spreadsheet.

From the Jspreadsheet Pro v7+, we brought many new features in relation to the formulas, such as:

  * Automatic formula update on copy and paste
  * Automatic formula update on corner copy
  * Cross worksheet calculations

 

## Future updates

To bring the spreadsheets inline with modern software and extend the capabilities, the major futures updates are to bring range operations and custom global variables

 

## Available formulas

We currently maintain a [repository](https://github.com/jspreadsheet/ce/blob/master/src/js/jexcel.formulas.js) with an open source implementation of various excel like formulas adapted to run in a web-based environment.

 

## Special formulas

To support the usage of formulas jspreadsheet brings a few special formulas that are available to help relative calculations.

| Method               | Example                                                      |
| ---------------------|--------------------------------------------------------------|
| **=TABLE()**         | Return the jspreadsheet table instance                       |
| **=COLUMN()**        | Return the column number where the formula has been executed |
| **=ROW()**           | Return the row number where the formula has been executed    |
| **=CELL()**          | Return the cell string identification                        |
| **=VALUE(int, int)** | Return the cell value based on the colNumber and rowNumber   |



[Click here to see an example](/docs/v7/examples/footers)
