title: New Features in Jspreadsheet Version 11
keywords: Jspreadsheet, Version 11 updates, new features, JavaScript spreadsheets, Excel-like functionality, data grid enhancements, React integration, version upgrade guide
description: Discover the latest enhancements in Jspreadsheet V11, including advanced Excel-like functionalities, React data grid compatibility, and key migration tips for upgrading from earlier versions.

# What is New With Version 11

## Overview

In this latest update, we've once again achieved significant performance enhancements, enabling the management of hundreds of millions of cells while using real DOM elements. This approach ensures unparalleled performance and flexibility within its category.

This version also introduces incredible new features, including full-stack capabilities, support for non-consecutive selections, advanced handling of multiple copy selections, and improved array operations. These enhancements represent further progress in our journey to offer a comprehensive JavaScript Spreadsheet solution. The new Full-stack capabilities expand the range of implementation possibilities, enabling features like real-time sharing, automation, and more while prioritizing utmost privacy and delivering an exceptional user experience.


### Highlights

#### Jspreadsheet Version 11

The most important features available from version 11:

* Backend Capabilities: New server-side functionalities;
* Advanced Selections: Non-consecutive and multiple copy selections;
* Formula Picker: Simplified formula application;
* Compatibility: Improved copy-paste with other spreadsheets;
* Array Operations: Enhanced support for range handling;
* Workspaces: Group of spreadsheets for calculation purposes;
* Shortcut API: Customizable keyboard shortcuts;
* Zoom: Zoom functionality;
* Media Attributes: Floating images and charts;

#### New extensions

* @jspreadsheet/server: Create private Jspreadsheet for persistence and real-time collaboration;
* @jspreadsheet/client: Connect your frontend with your private servers;
* @jspreadsheet/shapes: Create Excel-like floating shapes;



## Upgrade Requirements

Efforts were made to maintain optimal compatibility with version 11, yet some changes are detailed below. Before proceeding with an upgrade, it's crucial to comprehend these modifications and assess their potential implications on your current codebase. 

## React and Vue Wrappers

From version 11 please include the CSS style on your project.

```typescript
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
```

## Spreadsheet Lifecycle

| Property                  | Description                                                                                                                                                           |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create a new spreadsheet  | Before initializing a new Jspreadsheet instance in the same DOM element, ensure to first destroy any existing spreadsheet.<br>`jspreadsheet(el, spreadsheetOptions)`  |
| Create a new worksheet    | `instance.createWorksheet()`                                                                                                                                          |
| Destroy a spreadsheet     | `jspreadsheet.destroy()` or `worksheetInstance.parent.destroy()`                                                                                                      |
| Destroy all spreadsheets  | `jspradsheet.destroyAll()`                                                                                                                                            | 


### Changes in the Options:

From version 11 you should expect the following changes:

#### Changes in Syntax:

- The notation `jspreadsheet(el, worksheetConfig)` from version 4 is discontinued. Please use: `jspreadsheet(el, spreadsheetConfig)`

#### Configuration Handling:

- Initial default configurations are no longer accessible through `instance.options`. Only explicitly declared or internally generated configurations are retained, optimizing memory usage and facilitating spreadsheet cloning.



## General changes

### Global Methods

| Method                                  | Description                                                                                                                              |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| jspreadsheet.getWorksheetInstanceByName | Get a worksheet instance by name and namespace.<br/>`jspreadsheet.getWorksheetInstanceByName(worksheetName: string, namespace?: string)` |

### Worksheet Config Settings

| Status                          | Property    | Description                         |
|---------------------------------|-------------|-------------------------------------|
| *New*{.info-label .new}         | zoom: float | New zoom definition                 |
| *Removed*{.info-label .removed} | images: []  | Please use media with `type: image` |
| *Removed*{.info-label .removed} | json: []    | Please use: `data: []`              |

### Spreadsheet Config Settings

| Status                   | Property      | Description                                                                                                                    |                                                                                                     
|--------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------|
| *New*{.info-label .new}  | namespace     | Use this attribute to group different spreadsheets in the same calculation context. [More about namespaces](/docs/namespaces)  |
| *New*{.info-label .new}  | international | Define the general locale for the spreadsheet with number format. [More information](/docs/international-settings)             |


### Events

| Status                          | Event                 | Description                                                                                                                                                                            |
|---------------------------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *New*{.info-label .new}         | onerror               | When a new error happens.<br/>`onerror(spreadsheet: Object, result: Object) => void`                                                                                                   |
| *New*{.info-label .new}         | onchangemedia         | When a media object is added, removed or updated.<br/>`(worksheet: object, newValue: object[], oldValue: object, affectedRecords: object[]) => void`                                   |
| *New*{.info-label .new}         | onchangereferences    | When there is a reference update.<br/>`onchangereferences?: (worksheet: object, affected: object, deletedTokens: string[], deletedColumns: string[], deletedRows: string[]) => void;`  |
| *New*{.info-label .new}         | onbeforeloadimage     | Intercept an image loading.<br/>`onbeforeloadimage?: (worksheet: object, img: HTMLElement, options: object) => undefined                                                               | string | boolean;`                                                                 |
| *Updated*{.info-label .updated} | onbeforepaste         | Due non-consecutive selections, internal and external copy and paste can differ as array of objects or array of string/number.                                                         |
| *Updated*{.info-label .updated} | onpaste               | Due non-consecutive selections, internal and external copy and paste can differ as array of objects or array of string/number.                                                         |
| *Updated*{.info-label .updated} | onafterchanges        | A new argument origin is added: 'paste', 'fill-handle' or undefined                                                                                                                    |
| *Updated*{.info-label .updated} | onbeforesend          | The fetch options is now a object                                                                                                                                                      |


### Methods

| Status                            | Method     | Description                                                      |
|-----------------------------------|------------|------------------------------------------------------------------|
| *Removed*{.info-label .removed}   | setImage() | Removed: `worksheet.setImage()`. Use: `worksheet.setMedia()`     |
| *New*{.info-label .new}           | setZoom()  | New zoom definition                                              |
| *New*{.info-label .new}           | getZoom()  | Get zoom definition                                              |
| *Updated*{.info-label .updated}   | loadData() | It no longer re-creates the table. You can destroy and recreate. |

### Worksheet Instance Properties

| Status                          | Property            | Description                                                                       |
|---------------------------------|---------------------|-----------------------------------------------------------------------------------|
| *Removed*{.info-label .removed} | headers             | This property has been removed. Please use: `workshetInstance.cols[x].element`    |
| *Removed*{.info-label .removed} | colgroup            | This property has been removed. Please use: `workshetInstance.cols[x].colElement` |
| *Removed*{.info-label .removed} | fullscreen          | This settings is removed. PLease use `worksheetInstance.parent.fullscreen()`      |
| *Removed*{.info-label .removed} | setCheckRadioValue  | This method has been removed.                                                     |
| *Removed*{.info-label .removed} | setCells            | This method has been removed. Please use `setProperties()`                        |
| *Removed*{.info-label .removed} | headers             | This method has been removed. Please use `cols[x].el`                             |




## Global Instance Containers

### Spreadsheet Instances

All spreadsheet namespaces and instances are available inside `jspreasheet.spreadsheet`.

### Worksheet Instances

#### window.worksheetName is deprecated and should be dropped in the next version.

Starting with version 11, the use of window.worksheetName for accessing worksheet instances is deprecated and planned for removal in future releases. Version 11 introduces workspaces that allow managing multiple worksheets, even with identical names, and maintaining relationships with other spreadsheets. These worksheets are managed within the workspace scope, eliminating the need for global worksheet instances on the window object.

To access a worksheet instance, use the following methods:

- `worksheet.getWorksheetByName(wName)` to access within the same namespace or
- `jspreadsheet.getWorksheetByName(wName, namespace)` to specify a workspace namespace.

## Worksheets

### Programmatic Methods

| Property                        | Description                                                                                                 |
|---------------------------------|-------------------------------------------------------------------------------------------------------------|
| *Removed*{.info-label .removed} | Removed: `instance.getWorksheet()`                                                                          |
| *Removed*{.info-label .removed} | Removed: `instance.getWorksheetInstance: (position: number)`. Use: `instance.parent.worksheets[position]`   |
| *New*{.info-label .new}         | Get the worksheet instance by worksheet name `instance.getWorksheetInstanceByName(worksheetName: string)`   |
| *New*{.info-label .new}         | Change worksheet visibility. `instance.setWorksheetState(index, state)`                                     |


## Headers

In the latest update, the internal `headers` structure within Jspreadsheet has been replaced with `cols`. This new structure consolidates all column-related information, including references to the DOM elements of each column, into a single, accessible format.


## Editors

### Type: autocomplete

This attribute has been dropped. You should use `type: 'dropdown'`, with `autocomplete: true`.



## Layout and Accessibility

### Style

It is possible to define a styleId on the columns or rows, or using the A:A or 1:1 name style.

{.ignore}
```javascript
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
        columns: [ { s: 0 }],
    }],
    style: ['background-color: red'],
});
```

### Data Grid Zoom

The data grid now supports zoom-in and zoom-out capabilities, enhancing data visualization and user interaction. [More information](/docs/zoom)

### Data Grid Filters

The filter functionality has seen notable performance improvements when using the filter modal navigation and row filtering process. Starting with version 11, users can navigate through filter modal options using the ArrowUp and ArrowDown keyboard keys and select items using the Tab key. For more tailored filter options, developers can leverage the `onbeforefilter` event to customize the item list upon opening the filter modal.

### Contextmenu

There are new sections on the contextmenu event.

### Fill Handle

- `selectionCopy: boolean` is dropped, please use `fillHandle: boolean`

## Data Grid Selections

Version 11 of Jspreadsheet brings:
- Non-consecutive and multiple selections using CTRL for varied region selection;
- Non-consecutive clipboard operations;
- Methods such as `getSelected` and `getSelectedRows` ignore rows filtered.

These features required adjustments in specific methods to support the new functionalities, as below:

| Method            | Description                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------|
| `getSelected`     | Signature changed. Returns cell names or an array of coordinates, excluding cells removed by search or filter. |
| `updateSelection` | Deprecated. Use `updateSelectionFromCoords` instead.                                                           |
| `getSelectedRows` | Excludes filtered rows from the results.                                                                       |
| `getHighlighted`  | Outputs an array of data grid selections.                                                                      |
| `getSelection`    | Signature changed. It returns the primary selection, ordered or unordered.                                     | 

## Clipboard

In Version 11, the clipboard handles copying and pasting from non-consecutive selections. So, the `onbeforepaste` and `onpaste` events were updated. These methods now handle arrays of objects when pasting occurs from another spreadsheet and arrays of data when pasting is from an external source. [More Information](/docs/clipboard)


## Formulas

### Formula Picker

The [Formula Selector](/docs/formula-picker) has undergone substantial enhancements to facilitate user interaction.

- Users can now switch between worksheets to define variables or ranges by selecting cells from a different sheet.
- Keyboard navigation has been enabled to assist in range creation.
- Color customizations is now available;
- The advanced formula bar extension now features formula auto-suggestions and supports mouse-based variable selection across different worksheets.

## Features


### Data Grid Search

The `data grid search` feature has been significantly enhanced, offering users much quicker results. Additionally, various events are available for developers that need custom search functionalities.



## Helpers

| Method                 | Description                                                                                                                                                                                                 |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getTokensFromCoords    | It generates token names within specified coordinates, optionally targeting a specific worksheet.<br>`getTokensFromCoords: (x1: number, y1: number, x2: number, y2: number, worksheetName?: string) => []`  |
| getCoordsFromRange     | You can adjust the range based on the size of the worksheet for ranges like A:A or 1:1<br>`getCoordsFromRange(range: string, adjust?: boolean)`                                                             |


