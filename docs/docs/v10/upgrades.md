title: Migrating to Jspreadsheet Version 10 Data Grid: Key Considerations
keywords: Jspreadsheet, Jexcel, JavaScript, Excel-like features, spreadsheet, data grid, React data grid, migrating, upgrade to version 10
description: Learn more about the new features, explore what's new, and understand the required changes for upgrading from previous versions of Jspreadsheet.

# Upgrade to version 10

 

## Overview

We tried to keep the best possible compatibility until legacy affected the performance. In those cases, we implemented fundamental changes described in the document below. With that in mind you will get one of the best tools in the market. We have optimized all areas of Jspreadsheet, increasing our test coverage and performance.  

### What is new?

The highlights for version 10 are: 

  * Formula engine based on mapping;
  * Formula Pro integrated with formulajs;
  * Formula Pro supports @ operator and can use column names calculations;
  * Copy formulas cross worksheets;
  * Copy and paste, handler fill includes cell format and style;
  * [Spreadsheet History](/docs/v10/history) to the global level with cascade options;
  * New spreadsheet-level style;
  * We drop support to Jquery syntax; Polyfill is available.
  * [Column grouping](/docs/v10/group-columns);
  * Worksheet [floating images](/docs/v10/images).

 

## Upgrades

Before you considering upgrade, please be aware that fundamental changes listed below and the impacts that might need on your code. 

### General changes

#### Settings

| Method       | Description                                                                                                                                                                                                                          |
| -------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| textOverflow | The textOverflow enables text to overflow into the following cell when there is no data. In version 10, the textOverflow flag now uses the CSS `:has`. There are known limitations on Firefox, or long text over consecutive blanks. |
| license      | `worksheet.license` and `spreadsheet.license` are deprecated. Please use `jspreadsheet.setLicense(String)`                                                                                                                           |
| align        | The cell text align is based on CSS classes.                                                                                                                                                                                         |

 

#### Events

| Event                           | Description                                                                                                                                                                          |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *New*{.info-label .new}         | When a new error happens.<br/>`onerror(spreadsheet: Object, result: Object) => void`                                                                                                 |
| *Removed*{.info-label .removed} | Before the references are changed.<br/>`onbeforechangereferences(worksheet: worksheetInstance, affectedTokens: [], deletedTokens: []) => void`                                       |
| *Removed*{.info-label .removed} | When the references are changed.<br/>`onchangereferences(worksheet: worksheetInstance, affectedTokens: [], deletedTokens: []) => void`                                               |
| *Removed*{.info-label .removed} | Every time data changes.<br/>`updateTable(worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, value: any)`<br/><br/> **Alternative** : oncreatecell() or render() |
| *Updated*{.info-label .updated} | Before insert a new row.<br/>`onbeforeinsertrow(worksheet: worksheetInstance, affected: Object[]) => boolean \| affected[] \| void`                                                  |
| *Updated*{.info-label .updated} | After insert a new row.<br/>`oninsertrow(worksheet: worksheetInstance, affected: Object[]) => void`                                                                                  |
| *Updated*{.info-label .updated} | Before insert a new column.<br/>`onbeforeinsertcolumn(worksheet: worksheetInstance, affected: Object[]) => boolean \| affected[] \| void`                                            |
| *Updated*{.info-label .updated} | After insert a new column.<br/>`oninsertcolumn(worksheet: worksheetInstance, affected: Object[]) => void`                                                                            |
| *Updated*{.info-label .updated} | Before a row is deleted.<br/>`onbeforedeleterow(worksheet: Object, rows: Number[]) => Number[] \| Boolean \| void`                                                                   |
| *Updated*{.info-label .updated} | After a row is deleted.<br/>`ondeleterow(worksheet: Object, rows: Number[]) => void`                                                                                                 |
| *Updated*{.info-label .updated} | Before a column is excluded. Return false to cancel the user action.<br/>`onbeforedeletecolumn(worksheet: Object, cols: Number[]) => boolean \| Number[] \| void`                    |
| *Updated*{.info-label .updated} | After a column is excluded.<br/>`ondeletecolumn(worksheet: Object, cols: Number[]) => void`                                                                                          |
| *Updated*{.info-label .updated} | Before paste into the spreadsheet.<br/>`onbeforepaste(worksheet: worksheetInstance, data: any[], x: number, y: number, properties: object[]) => boolean \| []`                       |

 

#### Methods

| Method                          | Description                                                                                                                                                                                                 |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *New*{.info-label .new}         | Show the headers of the data grid.<br/>`worksheet.showHeaders()`                                                                                                                                            |
| *New*{.info-label .new}         | Show the headers of the data grid.<br/>`worksheet.hideHeaders()`                                                                                                                                            |
| *New*{.info-label .new}         | Get all validation rules applicable to a cell by its coordinates (x,y).<br/>`worksheet.loadValidations(x: Number, y: Number)`                                                                               |
| *New*{.info-label .new}         | This method returns true when a cell has not passed all the validations defined for that cell.<br/>`worksheet.hasErrors(x: Number, y: Number)`                                                              |
| *Removed*{.info-label .removed} | Reload the data.<br/>`worksheet.refresh()`                                                                                                                                                                  |
| *Removed*{.info-label .removed} | Move a worksheet tab index position.<br/>`worksheet.updateWorksheet(from: Number, to: Number)`<br/><br/> **Alternative** : `moveWorksheet(origin: Number, destination: Number, ignoreDomUpdates?: Boolean)` |
| *Removed*{.info-label .removed} | Reset an internal array.<br/>`worksheet.resetArray()`                                                                                                                                                       |
| *Updated*{.info-label .updated} | Get the selected row numbers.<br/>`worksheet.getSelectedRows(visibleOnly?: Boolean)`                                                                                                                        |
| *Updated*{.info-label .updated} | Get the selected column numbers.<br/>`worksheet.getSelectedColumns(visibleOnly?: Boolean)`                                                                                                                  |
| *Updated*{.info-label .updated} | Get the selected column numbers.<br/>`worksheet.setStyle(cell: string \| object, prop?: string, value?: string, forceOverwrite?: boolean)`                                                                  |
| *Updated*{.info-label .updated} | Get the meta information<br/>`worksheet.getMeta(cellName: String \| null)`                                                                                                                                  |

 

### Style

In order to improve the performance, version 10 brings significant changes to the style management in cells as described in the table below..

| Method          | Description                                                                                                                                                                                                                           |
| ----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Style scope     | While you can still manage cell styles programmatically using the getStyle and setStyle methods, Jspreadsheet now includes a style controller at the spreadsheet level. That allows style strings to be reused across all worksheets. |
| Toggle behavior | Up to version 9, the setStyle method in Jspreadsheet had a toggle behaviour. That behavior is now deprecated.                                                                                                                         |
| Overwrite flag  | When you apply setStyle to a cell, the style passed will be added to any existing style. It is also possible to overwrite all current Styles with a new one using the overwrite flag.                                                 |

 

### Rows

Updates on the signature of events and methods to make possible manage non-consecutive cells.  

### Columns

There where several changes and improvements in the columns managements, for example. 

  * Insert and delete non-consecutive columns
  * Group a collection of columns
  * `render()` to transform the value before show to the user.

 

### Formulas

| Deprecated                | Description                                                                                                                               |
| --------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| worksheet.formula         | The internal formula control is now deprecated. The formula chain property is part of the cell object worksheet.records[y][x].chain?: Map |
| onbeforechangereferences  | This event is deprecated                                                                                                                  |
| onchangereferences        | This event is deprecated                                                                                                                  |
| worksheet.updateFormula() | This method is deprecated                                                                                                                 |

 

### History

The history feature, which includes undo and redo actions, has been moved from the spreadsheet level to the screen level in the latest version of Jspreadsheet. The main reason for this change is to allow JSS to manage the history of different spreadsheets on the screen that may have relationships with each other, such as cross-formula calculations.

| Deprecated               | Description                                |
| -------------------------|--------------------------------------------|
| worksheet.resetHistory() |  Please use `jspreadsheet.history.reset()` |
| worksheet.setHistory()   |  Please use `jspreadsheet.history()`       |

 

## Jquery Polyfill

If you wish to continue using jQuery with Jspreadsheet version 10, please follow the guide below. We have provided a sample code block for your convenience. 

{.ignore}
```javascript
// Jquery Support
if (typeof(jQuery) !== 'undefined') {
    (function($){
        $.fn.jspreadsheet = $.fn.jexcel = function(mixed) {
            let container = $(this).get(0);
            if (! container.jspreadsheet) {
                return J($(this).get(0), arguments[0]);
            } else {
                if (typeof(arguments[0]) == 'number') {
                    let n = arguments[0];
                    let i = 2;
                } else {
                    let n = 0;
                    let i = 1;
                }
                return container.jspreadsheet[n][mixed].apply(
                    container.jspreadsheet[n],
                    Array.prototype.slice.call(arguments, i)
                );
            }
        };
    })(jQuery);
}
```
 
