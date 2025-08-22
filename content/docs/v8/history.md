title: Spreadsheet Changes History
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, history changes, spreadsheet updates
description: Learn how to interact with the history tracker of your spreadsheet.



# Spreadsheet history

All important changes in the spreadsheet are tracked under the History internal container. From version 8 on, the history is one array shared for all worksheets. In this section, we provide a few more details about the spreadsheet changes tracker. 

## Documentation

### Methods

The undo and redo methods are normally invoked by the CTRL+Z, CTRL+Y keyboard shortcut. The following methods can be called programmatically, as follows:

| Method | Description                                                   |
| -------|---------------------------------------------------------------|
| undo() | Undo the last spreadsheet changes.<br/>`undo() : void`        |
| redo() | Redo the most recent spreadsheet changes.<br/>`redo() : void` |

 

### Events

Events related to the history changes tracker.

| Event  | Description                                                                                                                                                         |
| -------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onredo | `onredo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |
| onundo | `onundo(worksheet: Object, info: Object) : null`<br/>The info array contains all necessary information about the history and depends on which change was performed. |


