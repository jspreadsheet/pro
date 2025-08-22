title: Data Grid Settings
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, configuration
description: The configuration holds various properties to controls the behavior of the spreadsheet and its worksheets. Learn more about each of the available options.



# Data Grid Config

The configuration holds various properties to control the behavior of the spreadsheet and the worksheets. There are two objects, one config for the spreadsheet and one config for each of the worksheets. 

## Documentation

### Methods

The following methods perform operations for the config programmatically.

| Method    | Description                                                                      |
| ----------|----------------------------------------------------------------------------------|
| getConfig | Get the configuration of one worksheet.<br/>`getConfig() => Object`              |
| setConfig | Set the configuration for the worksheet<br/>`setConfig(options: Object) => void` |

 
### Initial Settings

One object is available for the spreadsheet level and holds all shared or global properties.

| Property                            | Description                                                                                                           |
| ------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| cloud: String                       | Render a remote spreadsheet from [Jspreadsheet Cloud](/cloud).                                                        |
| application: String                 | Your application name.                                                                                                |
| definedNames: Array                 | Global variables                                                                                                      |
| root: DOMElement                    | DOM element for binding the JavaScript events. This property is normally used when JSS is running as a web component. |
| sorting: Function                   | Custom sorting handler.                                                                                               |
| server: String                      | URL from a remote server to handler data persistence.                                                                 |
| toolbar: Boolean\|Object           | True for the default toolbar, or a object with the custom [toolbar](/docs/v8/toolbars) configuration.                 |
| allowExport: Boolean                | Allow spreadsheet to be downloaded. `Default: true`                                                                   |
| includeHeadersOnDownload: Boolean   | Download the headers within the data. `Default: false`                                                                |
| forceUpdateOnPaste: Boolean         | Force the update on readonly columns on paste. `Default: false`                                                       |
| loadingSpin: Boolean                | Show the loading spin on spreadsheet initialization. `Default: false`                                                 |
| fullscreen: Boolean                 | Start the spreadsheet in fullscreen mode. `Default: false`                                                            |
| secureFormulas: Boolean             | Run the secure formulas, force all methods to upperCase. `Default: true`                                              |
| parseFormulas: Boolean              | Parse formulas. `Default: true`                                                                                       |
| debugFormulas: Boolean              | Debug formulas. `Default: false`                                                                                      |
| editorFormulas: Boolean             | Open the formulas in editing mode. `Default: true`                                                                    |
| autoIncrement: Boolean              | Auto increment cells on dragging or cloning. `Default: true`                                                          |
| autoCasting: Boolean                | Try to convert text into numbers to help with formulas. `Default: true`                                               |
| stripHTML: Boolean                  | Strip all HTML code. `Default: true`                                                                                  |
| tabs: Boolean                       | Allow the user to add new worksheets. `Default: false`                                                                |
| allowDeleteWorksheet: Boolean       | Allow the user to delete worksheets. `Default: true`                                                                  |
| allowRenameWorksheet: Boolean       | Allow the user to rename a worksheet. `Default: true`                                                                 |
| allowMoveWorksheet: Boolean         | Allow the user to update the worksheet position on the tabs. `Default: true`                                          |
| parseTableFirstRowAsHeader: Boolean | When creating a spreadsheet from a table, the first row will be the headers `Default: false`                          |
| parseTableAutoCellType: Boolean     | When creating a spreadsheet from a table, try to define a best column type. `Default: false`                          |
| plugins: Object                     | Load plugins. `Default: null.`                                                                                        |
| wordWrap: Boolean                   | Wordwrap `Default: true.`                                                                                             |
| license: String                     | License hash. Can be generated in your profile.                                                                       |
| validations: Array                  | Array of validation definitions. `Default: null`                                                                      |
| moveDownOnEnter: Boolean            | Move the selected cell down when finalize an edition with Enter key. `Default: true`                                  |

 

### Worksheet options

There is one configuration for each worksheet.

| Property                             | Description                                                                                                                                                                      |
| -------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url: String                          | Load the data from a remote URL                                                                                                                                                  |
| persistence: Boolean\|String        | Invoke a remote server on each spreadsheet update. True to send the information to the same URL above, or define the URL for the persistence of this worksheet. `Default: false` |
| data: Array                          | Load the data into a new spreadsheet from an array of rows or objects.                                                                                                           |
| rows: Array                          | Array with the row property settings such as title, height.                                                                                                                      |
| columns: Array                       | Array with the column property settings. More about the [column options](/docs/v8/columns).                                                                                      |
| cells: Object                        | Cell definitions. More about the [cell options](/docs/v8/cells).                                                                                                                 |
| role: String                         | Meta information about the worksheet.                                                                                                                                            |
| nestedHeaders: Array                 | Nested headers                                                                                                                                                                   |
| defaultColWidth: Number              | Default column width.                                                                                                                                                            |
| defaultRowHeight: Number             | Default row height.                                                                                                                                                              |
| defaultColAlign: String              | Default column alignment. `Default: center`                                                                                                                                      |
| minSpareRows: Number                 | Min number of spare rows. `Default: null`                                                                                                                                        |
| minSpareCols: Number                 | Min number of spare columns. `Default: null`                                                                                                                                     |
| minDimensions: Array(Number, Number) | Min number of columns and rows.                                                                                                                                                  |
| csv: String                          | Load the data from a remote CSV file.                                                                                                                                            |
| csvFileName: String                  | Defines the name of the CSV file. `Default: jspreadsheet`                                                                                                                        |
| csvHeaders: Boolean                  | Consider the first row from the CSV file as the headers. `Default: false`                                                                                                        |
| csvDelimiter: String                 | CSV divisor character. `Default: ','`                                                                                                                                            |
| columnSorting: Boolean               | Allow column sorting. `Default: true`                                                                                                                                            |
| columnDrag: Boolean                  | Allow column dragging. `Default: true`                                                                                                                                           |
| columnResize: Boolean                | Allow column resizing. `Default: true`                                                                                                                                           |
| rowResize: Boolean                   | Allow row resizing. `Default: true`                                                                                                                                              |
| rowDrag: Boolean                     | Allow row dragging. `Default: true`                                                                                                                                              |
| rowDrag: Boolean                     | Allow row dragging. `Default: true`                                                                                                                                              |
| editable: Boolean                    | The worksheet is editable. `Default: true`                                                                                                                                       |
| allowInsertRow: Boolean              | Allow the user to insert new rows. `Default: true`                                                                                                                               |
| allowManualInsertRow: Boolean        | Allow the user to insert new rows after the last row with the enter key. `Default: true`                                                                                         |
| allowInsertColumn: Boolean           | Allow the user to insert new columns. `Default: true`                                                                                                                            |
| allowManualInsertColumn: Boolean     | Allow the user to insert new columns after the last column with the tab key. `Default: true`                                                                                     |
| allowDeleteRow: Boolean              | AAllow rows to be deleted. `Default: true`                                                                                                                                       |
| allowDeleteColumn: Boolean           | Allow columns to be deleted. `Default: true`                                                                                                                                     |
| allowRenameColumn: Boolean           | Allow columns to be renamed. `Default: true`                                                                                                                                     |
| allowComments: Boolean               | Allow comments on cells. `Default: true`                                                                                                                                         |
| selectionCopy: Boolean               | Show the cloning square corner`Default: true`                                                                                                                                    |
| mergeCells: Object                   | Merge cell information. `Default: none`                                                                                                                                          |
| search: Object                       | Show the search input filter box. `Default: false`                                                                                                                               |
| pagination: Boolean\|Number         | Set to false to disable pagination or a number to enable and define how many records per page. `Default: false`                                                                  |
| paginationOptions: Array             | Show a dropdown so the user can change the default number of records per page. `Default: null`                                                                                   |
| textOverflow: Boolean                | Cell text overflow. `Default: false`                                                                                                                                             |
| tableOverflow: Boolean               | The size of the viewport will be limited. `Default: false`                                                                                                                       |
| tableHeight: Number                  | The height of the viewport, only used when tableOverflow is true. `Default: 300`                                                                                                 |
| tableWidth: Number                   | The width of the viewport, only used when tableOverflow is true. `Default: null`                                                                                                 |
| comments: Object                     | All the comments from the worksheet. `Default: null`                                                                                                                             |
| meta: Object                         | All the meta information from the worksheet. `Default: null`                                                                                                                     |
| style: Object                        | All the style information from the worksheet. `Default: null`                                                                                                                    |
| freezeColumns: Number                | The number of freeze columns on the worksheet. `Default: 0`                                                                                                                      |
| worksheetId: String                  | Define a unique workshet identification. `Default: 0`                                                                                                                            |
| worksheetName: String                | Define the worksheet name. `Default: Sheet1`                                                                                                                                     |
| filters: Boolean                     | Enable the column filters. `Default: false`                                                                                                                                      |
| footers: Array                       | Worksheet footer definitions. `Default: null`                                                                                                                                    |


