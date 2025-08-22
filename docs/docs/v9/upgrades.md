title: Upgrade to version 9
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, performance, what is new, upgrade to version 9
description: Discover what is new with version 8. Find more about how to migrate from previous versions to Jspreadshee version 8.



# Upgrade to version 9

 

## Overview

Version 9 is fully compatible with version 8, but there are a few behavior changes, you must be aware: 

  * The fill handler bring the result closer to Excel and google sheets.

 

### What is new?

The highlights for version 9 are: 

  * Better viewport navigation with real scrolling rendering controllers;
  * Better responsiveness with new selection controls for mobile and tablet navigation;
  * Smarty rendering system;
  * Resizable viewport;
  * New spreadsheet events;
  * New spreadsheet extensions: validations, multiple comments, CSV importer;
  * New helper methods;
  * Cascade history;
  * Fill based on trends, compatible with Excel and Google Sheets;

 

#### New options

| Description                                |
|--------------------------------------------|
| resize?: both \| horizontal \| vertical    |
| onresize?: Function                        |
| onchangereferences?: Function              |
| onchangedefinednames?: Function            |
| oninput?: Function                         |

 

## Upgrade from v8

You can jump from version 8 to 9 since they are fully compatible. No code changes is required.  

## Upgrade from v7 or below

There are a structure changes when compared to version 7 or previous. This document will describe a few important points when upgrading to v9.  

### Example

Up to version 7 

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10, 10],
    toolbar: true,
    onchange: function() {
        // Do something
    },
    // Declare for each worksheet
    license: '###license###'
});
</script>
```

From version 8 

{.ignore}
```html
<script>
// Set the spreadsheet license just once.
jspreadsheet.setLicense('###license###');

// Create the spreadsheet with three worksheets
jspreadsheet(document.getElementById('spreadsheet'), {
    // Create 3 blank worksheets
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] }
        { minDimensions: [6, 6] }
    ],
    // One toolbar to serve all worksheets
    toolbar: true,
    // Events need to be declared just on the spreadsheet level only once
    onchange: function() {
        // Do something
    },
});
</script>
```
  

## Global license declaration

From version 8, it is possible to declare the license just once. That will be valid for all spreadsheets, worksheets and extensions. 

{.ignore}
```html
<script>
// Declare the license just once
jspreadsheet.setLicense('###license###');

// Use the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10, 10],
        columns: [
            { type: 'text', width:300 },
            { type: 'text', width:80 },
        ],
    }],
});
</script>
```

## CSS Class names

We renamed all CSS class prefix names from .jexcel to .jss. That better represents the product name.  

## Spreadsheet configuration updates

### options `updated`

From version 8, there are two attributes for the configuration. Common attributes, such as the events, toolbar and others have been moved to `spreadsheet.config`. All other worksheet-specific attributes are available as they were in the `worksheet.options`. 

### updateTable `updated`

If you use updateTable for automation, you must update the arguments to:  

### Text `deprecated`

The property `text` for translations is deprecated. Please use Jsuites.dictionary for translations, click here for [more information](/docs/v9/international-settings).  

### JSON `deprecated`

Up to version 7, there were different properties when loading the data from JSON or array. From version 8, please use the `data` property. 

### internationalKeyboard `deprecated`

This property is deprecated since the new editors are compliant with foreign languages and IME.  

### tableOverflowResizable `deprecated`

This property is not implemented. For resizing: setViewport(w,h) is available.  

### copyCompatibility `deprecated`

This property was introduced to maintain compatibility with older versions. The developer could choose between the raw data or the processed data when the user was copying or exporting the data from the spreadsheet. The behavior should be similar to other spreadsheet software such as Excel or Google Sheets. 

### columns.editor `deprecated`

The property `editor` from the `column settings` is deprecated. To create custom editors please use the `type` property. The template for the editors has also changed. More information can be found in the [custom editors](/docs/v9/editors) documentation page. 

### lazyLoading `deprecated`

The smart DOM management will be enabled when pagination, fullscreen or tableOverflow is used. 

### colHeaders `deprecated`

Please use: columns.title 

### colWidths `deprecated`

Please use: columns.width 

### colAlignments `deprecated`

Please use: columns.align 

### Cache `deprecated`

Cache is now default for all operations. Cached values are available at `worksheets.records[y][x].v`  

## Spreadsheet features

 

### Toolbars

In previous versions, there was one toolbar per worksheet. From version 8 on, the toolbar element is accessible from the spreadsheet object and will be the same for all worksheets.  

### Editors

In previous versions, a new DOM element was created for every cell edition. From version 8 on, the same DOM element will be used during the cell edition. This element is floating in the viewport and not linked to the cell as before. The object is available using the path `spreadsheet.input or worksheet.parent.input`  

### Instance shortcut

The following property brings an array with the worksheets. document.getElementById('spreadsheet').jexcel - (Deprecated). Please use document.getElementById('spreadsheet').jspreadsheet or document.getElementById('spreadsheet').spreadsheet.worksheets  

### Keyboard

Delete key is deprecated to delete columns or rows. It would be replaced for CTRL -.  

## Events

In previous versions, the first argument for each event was the **DOMElement element**. From version 8 on, the first argument in each event will gives the worksheet object which originated the event.  

### onchangestyle

The arguments have changed to `onchangestyle(worksheet Object, newValue Array, oldValue Array);` 

### onchange

The properties col and row are no longer available. Please use x and y. { x: x, y: y, value: value, ~~col: col, row, row~~ }  

## Methods

 

### getWorksheetActive

From version 8 on, it will return the worksheet index number. 

### Nested headers methods

There were changes in the methods names to interact with the nested headers. Please take a look on the nestedHeaders section for more information  

## Helpers

We have grouped the helpers in a single object. For example to convert a number in a spreadsheet like cellName.
`jspreadsheet.helpers.getColumnNameFromCoords(x, y);`
`jspreadsheet.helpers.getCoordsFromColumName(cellName); // Such as A1, A2...`
`jspreadsheeet.helpers.guid() **deprecated**  Replaced by jSuites.guid(`

### parseType and parseNumber are deprecated

Please use `jSuites.mask.extract()` .  
