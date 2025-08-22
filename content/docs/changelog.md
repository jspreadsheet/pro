title: Jspreadsheet Release Notes
keywords: Release Notes
description: A central resource for detailed information on all updates and extensions in Jspreadsheet.
canonical: https://jspreadsheet.com/docs/changelog


# Jspreadsheet Change Log

## 21/08/2025

### jspreadsheet

#### 11.25.0

- Added support to unselect cells from a `non-consecutive selection` using CTRL + mousedown on a `selected cell`;
- Added support for CTRL + ALT shortcut combinations;

## 16/08/2025

### jspreadsheet

#### 11.24.2

- Added `onbeforechanges` event to intercept and customize cell changes.


## 12/08/2025

### jspreadsheet

#### 11.24.1

- Fixed backend handling of `checkbox label` translations.


### @jspreadsheet/formula-pro

#### 5.9.0

- Fixed `CEILING` function bug.
- Added argument validation for `FORECAST`.
- Added argument validation for `INTERCEPT`.
- Reviewed and added argument validation for `LINEST`.
- Reviewed and added argument validation for `LOGEST`.
- Reviewed and added argument validation for `TREND`.
- Implemented operations to handle omitted arguments and accept `boolean types`.
- Updated ^ and & operations to properly handle numeric values and return correct errors.

## 07/08/2025

#### 11.24.0

- Fixed the cut and paste across different `worksheets`;
- Editing merged `hidden cells`: ensure that the cursor starts editing on the main cell;

## 01/08/2025

### jspreadsheet

#### 11.23.7

- Minor optimization applied to the rendering of visible columns;
- New option for dropdowns: `strictMode: true`, which blocks non-listed values from being accepted in the cell.

## 29/07/2025

### jspreadsheet

#### 11.23.6

- Improved IME support;
- Fixed the `reset clipboard` issue with pasting across different worksheets;
- Improved performance when parsing CSV content;

## 08/07/2025

### @jspreadsheet/charts

#### 7.1.0

- Fixes and improvements to the reactivity interface;
- Reviewed the default `chart` configuration;

## 30/06/2025

### jspreadsheet

#### 11.23.1

- Fix negative mask with color and parentheses

## 17/06/2025

### jspreadsheet

#### 11.23.0

- Changed signatures of `openRowGroup`, `closeRowGroup`, `openColumnGroup`, and `closeColumnGroup` to support multiple groups or `null` for all groups;
- Added support for validations using formulas;
- Added new events: `onfreezecolumns`, `onfreezerows`;
- Dropdown cells now display values not listed in options when in non-edit mode;
- `dynamicSource` for dropdowns now supports formulas;

## 08/06/2025

### jspreadsheet

#### 11.22.2

- Improved keyboard-based range selection in formulas using Shift, now correctly mimicking `Excel` and `Sheets` behavior in all directions.

## 07/06/2025

### jspreadsheet

#### 11.22.1

- Error `#SPILL!` occurs when the resulting array is larger than the available number of rows or columns.


### @jspreadsheet/format

#### 3.0.0

- New extension to manage format and editor for columns and cells: [Data Grid Cell Formatting](/products/format);

## 06/06/2025

### @jspreadsheet/formula-pro

#### 5.8.0

- Aligned comparison operators <, <=, >, and >= with `Excel` when comparing zero and **empty cells**.
- **ATAN2**: Fixed the argument usage to match **Excel’s behavior**.
- **ACOT**: The function now correctly adds π to the result when the first argument is negative.
- **CEILING**: This function now returns an error if the first argument is positive and the second is negative plus other fixes;

### jspreadsheet

#### 11.22.0

- Added support for retrieving processed data that includes formulas with array values.
- Fixed the first argument of the `onbeforemovecolumn` event to correctly reference the worksheet.
- Updated orderBy to accept numeric values for sorting direction.

## 29/05/2025

### jspreadsheet

#### 11.21.0

- Updated pagination text;
- Improved SUBTOTAL and AGGREGATE functions to reflect changes when rows are hidden or shown;

## 28/05/2025

### jspreadsheet

#### 11.20.4

- Fix flick navigation on Firefox
- Fix image position on adding a new message from the toolbar

## 10/05/2025

### jspreadsheet

#### 11.20.3

- Set right alignment as the default for **masked number columns**;
- Removed delete confirmation dialog when deleting a **worksheet** via the **context menu**;

### @jspreadsheet/parser

#### 5.8.8

- Time validation;
 
### @jspreadsheet/render

#### 5.9.2

- Time validation;

### @jspreadsheet/validations

#### 6.0.4

- Time validation;

## 29/04/2025

### jspreadsheet

#### 11.20.1

-  New events: `onbeforedeleteworksheet`, `onbeforemoverow`, `onbeforemovecolumn`

## 27/04/2025

### jspreadsheet

#### 11.20.0

-  Added a new `autoId` option to the spreadsheet to automatically assign a unique GUID to each row when no row ID is provided.

## 13/04/2025

### jspreadsheet

#### 11.19.0

- Added a new delimiter argument for downloadCSV;
- Added error handling using onerror when downloading a non-existing **spreadsheet**;
- Introduced a new `onrender` event, triggered when rendering cell information; 

## 12/04/2025

### @jspreadsheet/validations

#### 6.0.0

- Support to LemonadeJS Studio

## 09/04/2025

### @jspreadsheet/formula-pro

#### 5.7.0

- Added new PERCENTILE function
- Extended the IF function to support range-based evaluation

### @jspreadsheet/parser

#### 5.8.7

- Added support for validations using formulas

### @jspreadsheet/render

#### 5.9.1

- Added support for validations using formulas

## 03/04/2025

### jspreadsheet

#### 11.18.8

- Fixed getConfig to support arguments at the spreadsheet level;
- Fixed undo behavior with readonly cells
- Improved casting of scientific notation numbers on numeric-type cells (without masking);

#### 11.18.6

- Fixed currency mask issue with a space as the thousands separator;
- Blocked setRowId for non-editable worksheets;
- Fixed column type radio name grouping issue;

### @jspreadsheet/parser

#### 5.8.6

- Font color in **conditional formatting** import;

## 27/03/2025

### jspreadsheet

#### 11.18.5

- Fixed copy-paste between JSON-based and array-based spreadsheets;
- Better flexibility when applying JSON data to array-based spreadsheets;

## 18/03/2025

### jspreadsheet

#### 11.18.4

- Added a conditional check to prevent errors in the formula picker when an element is destroyed during an event;
- Prevented setting cache or value for merged cells that are not the main cell;
- Fixed issue with resetting all validations;

## 16/03/2025

### jspreadsheet

#### 11.18.3

- Added readonly persistence;
- Improved pixel-perfect precision for frozen columns and rows; 
- Added a new argument to getConfig for retrieving spreadsheet-level configuration;
- Prevented media insertion in readonly worksheets;

## 27/02/2025

### jspreadsheet

#### 11.18.2

- `Defined names` now support numbers;
- Added autoCasting for cells, columns, worksheets, and spreadsheets;
- Added mask `@` to prevent autoCasting;


## 24/02/2025

### jspreadsheet

#### 11.18.1

- Restored onchange event trigger when forcing an update.

## 23/02/2025

### jspreadsheet

#### 11.18.0

- `onchange` no longer triggers if the value hasn't changed, even when forcing an update;
- Focusing a cell now activates input without affecting scroll position;
- secureFormulas now adjusts formulas in the footer;
- Text `mask: '@'` now converts numbers to text;
- Added `autoSelect` option to prevent automatic `data grid selection` on focus;

## 11/02/2025

### jspreadsheet

#### 11.17.1

- The calculation state is now available in all spreadsheet data lifecycle;

## 08/02/2025

### jspreadsheet

#### 11.17.0

- Fixed **validation** list type issues with static values;
- Fixed `calculations` for **worksheet names** with special characters;
- Added custom nonce for strict style loading;
- Improved validation list to include `cell dropdown` symbol and support ranges and static values;
- Fixed initial media position when anchored to a hidden cell in the viewport;

### @jspreadsheet/charts

#### 6.5.5

- Improved error handling for ranges;


## 29/01/2025

### @jspreadsheet/parser

#### 5.8.5

- Buffer Polyfill; 

## 25/01/2025

### jspreadsheet

#### 11.16.1

- Fixed the **toolbar border** tool to properly work with **merged cells**;

### @jspreadsheet/parser

#### 5.8.4

- Fixed scatter chart marker import;

## 25/01/2025

### jspreadsheet

#### 11.16.0

- Prevent scroll on input focus;
- Improved **WAI-ARIA** compliance;

## 21/01/2025

### jspreadsheet

#### 11.15.0

- Enhanced the applicability and accuracy of the #LOOP! error detection;


### @jspreadsheet/formula-pro

#### 5.6.1

- Fixed issues with the SUBSTITUTE function;
- Reviewed and improved PERCENTRANK.INC, COUNTUNIQUE, PERCENTRANK, and UNIQUE functions;
- Added new #LOOP! error to handle circular references;


## 15/01/2025

### jspreadsheet

#### 11.14.1

##### Bug Fixes
- setData and loadData to handle JSON with a mix of named and unnamed columns.
- Resolved url type updates when using setData or loadData.

## 14/01/2025

### jspreadsheet

#### 11.14.0

##### New Features
- Added a spreadsheet property to disable the formula picker when using the keyboard: `keyboardFormulas` (default: `true`).
- Introduced a new argument for the `getData` method: `includeFilteredRows` (default: `true`).

##### Improvements
- Retain selection during worksheet changes.
- Automatically create an initial selection when focusing on a worksheet.
- Enhanced compliance with WCAG standards for improved accessibility.
- Focus the search input field when using **CTRL+F**.
- Change worksheets seamlessly using **ALT+ArrowLeft** or **ALT+ArrowRight**.
- Create a new worksheet quickly with **Shift+F11**.

##### Bug Fixes
- Resolved an issue with applying filters using keyboard-only navigation.


### @jspreadsheet/formula-pro

#### 5.5.0

- Trim text numbers during casting;
- Add buffer polyfill for backend scripts;

## 04/01/2025

### jspreadsheet

#### 11.13.3

- Fixed validation issues with null entries.

### @jspreadsheet/server

#### 11.13.3

- Addressed issues during the creation of invalid configuration instances.

## 23/12/2024

### jspreadsheet

#### 11.13.2

- Correct content/type for fetching remote json;

## 18/12/2024

### jspreadsheet

#### 11.13.1

- New event `onkeydown`;
- Types updates;

## 18/12/2024

### jspreadsheet

#### 11.13.0

- A new mask has been added to represent string `@`;
- Unnecessary headers have been removed when fetching CSV.

### @jspreadsheet/openai

#### 2.0.0

- New events;

## 17/12/2024

### @jspreadsheet/parser

#### 5.8.1

- Import line charts fix;
- Import more shapes available on the shapes extension;
- Remove non-necessary http request headers;

### @jspreadsheet/render

#### 5.8.2

- Fixed export spill error.
- Expanded shapes capabilities: added new shapes, borders, rotation, background color, and more.

## 15/12/2024

### @jspreadsheet/shapes

#### 2.0.0

- New shapes;

## 09/12/2024

### jspreadsheet

#### 11.12.1

- Added new secureFormulas settings;
- Fixed issue with pasting over hidden rows in **filtered data**;
- Introduced a new **spill** flag to identify spill errors during **export**;
- Used cached values from **formulas** only when they are numbers to avoid using cached errors;
- Disabled mask application for strings to align Jspreadsheet behavior with **Excel** and **Google Sheets**;

## 29/11/2024

### @jspreadsheet/render

### 5.8.1

- Included the XLWS prefix during export;
- Enabled export of **dropdown** lists;

### @jspreadsheet/parser

#### 5.8.0

- Imported styles, rotation, and formatting at the column level;
- Fixed text import for **shapes**;
- Improved **dropdown** list import for validations into a better format;
- Fixed import of the XLWS prefix;


## 28/11/2024

### jspreadsheet

#### 11.12.0

- Enhanced **validation** type list to generate in real time, supporting string[] or a range;
- Added support for recursive **defined names**;
- Aligned **filter** search behavior with **Excel** and **Google Sheets**;
- Improved context menu functionality for macOS;
- Adjusted **numeric format** (mask) to exclude strings, ensuring consistency with **Excel** and **Google Sheets** and preventing blank values;
- Improved CSS for validation icons;
- Added **TypeScript** support for **React** and Vue **wrappers**; 

### @jspreadsheet/render

#### 5.8.0

- Fixed the insertion of the XLFN prefix in **formulas**;
- Enabled export of text **rotation in cells**;
- Added support for exporting **column styles**;
- Introduced **worksheet protection** with password;


### @jspreadsheet/formula

#### 5.4.4

- Disabled array caching to prevent conflicts with `#SPILL!` results;
- Updated internal calculations to use the first value of arrays;

## 12/11/2024

### jspreadsheet

#### 11.11.7

- Custom toolbar items fix;
- Updated resetValidations to prevent errors when no arguments are provided;
- Create a column with cached value from formulas;
- Force autoCasting on string values when executing formulas;

## 08/11/2024

### jspreadsheet

#### 11.11.4

- Adjusted toolbar handler to execute after plugin definitions;
- Fixed setZoom functionality;
- Corrected editor positioning when using zoom;
- Updated Vue wrapper to support kebab-case attributes;
- Enhanced setStyle to accept string[] as the first argument;

### @jspreadsheet/parser

#### 5.7.0

- Added wrapper function to handle parallel imports.

### @jspreadsheet/validations

#### 5.1.0

- Cosmetic changes: Updated jSuites.tags style, labels, and placeholders;

### @jspreadsheet/render

#### 5.6.1

- Included support for individually locked cells, even within unlocked sheets.


## 07/11/2024

### jspreadsheet

#### 11.11.3

- Fixed `onbeforesort` behavior;
- Enhanced `setData` and `loadData` to handle **nested objects** in new data declarations;
- Added ignoreUndefinedColumns attribute to prevent **creating columns** for non-declared attributes during initialization;


## 06/11/2024

### jspreadsheet

#### 11.11.2

- Types review;
- Added support for string[] as the first argument in `setStyle`.

## 03/11/2024

### jspreadsheet

#### 11.11.1

- Types review;

### @jspreadsheet/sheets

#### 3.1.0

- Removed the secret key from the authentication flow;

## 02/11/2024

### @jspreadsheet/client

- Added compression support;

### @jspreadsheet/server

- Added compression support;
- Introduced `before` events for authentication and request transformations;
- The auth property has been dropped; please use `beforeConnect` and `beforeLoad`;

## 31/10/2024

### @jspreadsheet/print

- LemonadeJS studio integration;

## 29/10/2024

### jspreadsheet

#### 11.11.0

- Fixed positioning issues for media in **frozen columns** and rows;
- Enabled passing a calendar format option to the calendar widget;
- Added sorting for range filters;
- Introduced a preCalculation option to enable immediate calculations or defer them to on-demand (scroll) calculations;
- Added caching to the method for retrieving worksheets by name;
- minDimensions now adjusts automatically to match the table's row and column count;

## 23/10/2024

### jspreadsheet

### 11.10.4

- Improved `getTokensFromRange` to account for both column and row ranges;
- Enhanced token renaming to discard #REF! during range transformations;
- Fixed getValidation(0) to correctly return the first validation;
- Fixed validation range updates when adding or removing rows or columns within the validation range;

## 21/10/2024

### jspreadsheet

### 11.10.3

- Improved handling of a few minor GC;
- Fixed the HTML data grid editor type to properly manage undefined data values;

### @jspreadsheet/render

#### 5.6.0

- Export groups of rows and columns.
- Export cells with the checkbox type.
- Fix the export of cells with boolean values to ensure they are correctly imported by the parser.
- Export links defined in columns.
- Fix the export of links containing XML reserved characters.
- Restrict the number of rows, columns, and characters in worksheet names to prevent issues during export. This restriction uses a new event called onerror.
- Fix the export of links.


## 20/10/2024

### @jspreadsheet/parser

#### 5.6.0

- Import groups of **rows and columns**;
- Import cells with the **checkbox type**;
- Adjust **shape rotation** import from radians to degrees to work correctly in Jspreadsheet;
- Handle possible errors when importing certain **spreadsheet properties**;

### jspreadsheet

#### 11.10.2

- Applied merge performance optimization for large spreadsheets;
- Validated if the **cell anchor** for media corresponds to an existing cell;
- Fixed media history undo for **charts**;
- Prevented media from being deleted or edited in **non-editable** data grids;
- Removed the external updateFormula worksheet method;
- Updated chart config when changes in the **data grid** affect the chat data range;

## 18/10/2024

### @jspreadsheet/charts

#### 6.5.1

- Automatically review the chart **data range** when changes are made in the spreadsheet;

## 17/10/2024

### @jspreadsheet/charts

#### 6.5.0

- Set the current **data grid** selection as default range when adding charts via context menu.
- Disabled chart width and height ratio to prevent flickering on reload.
- Jspreadsheet now handles reference updates.
- Prevented errors when undefined is included in the data provided to the chart.

### jspreadsheet

#### 11.10.1

- Fixed issue with renaming worksheets.

## 16/10/2024

### jspreadsheet

#### 11.10.0

- Optimized **calculations** and chain creation;
- Fixed scrolling to prevent recalculations during **cell creation**;
- Added new internal references for filter DOM elements;

#### 11.9.7

- Forced updates during `insertRow` and `insertColumn` on **read-only cells**;
- Made image uploads read-only on **spreadsheets** with `editable: false`;

### @jspreadsheet/parser

#### 5.5.5

- Fix getTheme for correct color handling.

## 09/10/2024

### jspreadsheet

#### 11.9.6

- Fixed defaultColAlign to respect specific **column definitions**;
- Extended caching for all **formulas** during initialization;
- Added a new argument to `getConfig` to apply settings at the **spreadsheet level**;
- Moved persistence calls to the end of operations;
- New event: `onchangeconfig`

## 05/10/2024

### jspreadsheet

#### 11.9.4

- Updated **cell anchors** during media updates;
- Ensured **cell anchors** are properly defined when inserting new media;
- Improved **spreadsheet progress bar** functionality;

### @jspreadsheet/render

#### 5.5.3

- Fixed chart title issue during export;


## 03/10/2024

### @jspreadsheet/render

#### 5.5.1

- Fixed background color handling for **shapes** during **export**;


## 02/10/2024

### jspreadsheet

#### 11.9.3

- Fixed cancel prompt when renaming a column to preserve the original value;
- Fixed translation issue for calendar strings;

## 30/09/2024

### jspreadsheet

#### 11.9.2

- Automatic scrolling when using the fill handler.

## 27/09/2024

### @jspreadsheet/formula-pro

#### 5.4.3

- Cleaned up *formula names* that are not present in *Excel* or *Google Sheets*;
- Updated `REGEXEXTRACT`, `REGEXREPLACE`, and `REGEXMATCH` functions;
- Improved `ISERR` and `ISERROR` to catch errors caused by incorrect *function names*;
- The adjust precision feature has been improved;

### jspreadsheet

#### 11.9.1

- Applied DOM properties using `setProperty` only on existing columns during `virtualization`.
- Re-rendered `readonly` attributes for cells when the `readonly` attribute is changed at the `column level`.
- Updated `formulas` during multi-selection paste.
- Enhanced data object identification during loading to account for `null` values.
- Update getWorksheetName to block the search for blank worksheet names;

## 25/09/2024

### jspreadsheet

#### 11.9.0

- Fixed loading of initial `validations` when using `namespaces`;
- Ensured the `dropdown editor` remains open when navigating via keyboard;
- Updated filter icon dimensions and set filters: false when filters are hidden;
- Updated CSS for line-height: normal and frozen rows control;
- Fixed execution and shifting of formulas when the formula name is similar to a cell name;

## 24/09/2024

### @jspreadsheet/charts

#### 6.3.1

- Updated canvas DOM solely to prevent losing resize controls during real-time updates.

### @jspreadsheet/search

#### 5.0.0

- Added `keyboard navigation`;
- Enabled closing search using the keyboard;

### jspreadsheet

#### 11.8.1

- Patched issue with deleting columns when array entries contain empty data;

#### 11.8.0

- Fixed rowDrag settings to properly block row dragging;
- Fixed issue with CTRL- to remove columns and rows;
- Fixed mousedown behavior with CTRL on Mac;
- Standardized persistence calls at the end of methods;
- Added column filter property support for individual columns;
- Introduced autoNames option to automatically detect column names from the data object when not explicitly declared. Default: true;
- Added jss_object class to ignore keyboard and paste events for all child elements;
- Fixed issue with deleting a column not updating the data correctly;
- Standard edition now updates formula references, but does not update validations or defined names;
- Improved ordering of persistence dispatch methods;

## 16/09/2024

### jspreadsheet

#### 11.7.2

- Consider initial column filters even when the filters property is disabled;
- Fixed initial loading and scroll calculation when both filters and frozen rows are enabled;

## 14/09/2024

### jspreadsheet

#### 11.7.1

- Fix the Backspace shortcut issue for Mac;
- Improved behaviour when moving the browser window, ensuring focus returns to the selected spreadsheet;
- Enabled media movement to negative positions when no viewport is defined;

## 11/09/2024

### jspreadsheet

#### 11.7.0

- Added `options.url` for generating links in the text editor type;
- Improved the masking system to better handle large numbers and scientific notation;

## 10/09/2024

### jspreadsheet

#### 11.6.2

- Positioning media elements using cell anchor reference fix;

## 09/09/2024

### jspreadsheet

#### 11.6.1

- Fixed mouseup behavior for the dropdown new item prompt;

### @jspreadsheet/search

#### 4.1.0

- Improved keyboard controls for enhanced navigation and usability;

## 07/09/2024

### @jspreadsheet/parser

#### 5.5.4

- Fixed the import of dropdown content;
- Fixed the import of charts with transparent colors;
- Standardized the import of transparent chart colors as "transparent" (previously could also be "none");
- Fixed the import of shapes generated with the "render" extension;
- Enabled the import of list validations with cross-worksheet references;
- Fixed the import of theme files when the filename differs from the default;
- Corrected the import of minDimensions, ensuring proper handling of merged cell sizes;


### @jspreadsheet/render

#### 5.5.0

- Fixed dropdown content export by removing reserved XML characters;
- Enabled the export of dropdowns;
- Fixed an issue with exporting definedNames that was introduced during the dropdown export implementation;
- Corrected the export of charts with transparent colors;
- Fixed the export of shapes with transparent colors;
- Corrected the export of list validations with cross-worksheet references;
- Fixed the export of dropdown values;
- Fixed the export of list validations without a dropdown menu;
- Exported data grid cell-embedded images as cell-bound images rather than floating images;

### jspreadsheet

#### 11.6.0

- Introduced a new (cell range filter)[/docs/filters];
- Updated filter properties and methods for enhanced functionality;

#### 11.5.6

- Improved positioning of media elements during onload and resize;
- Introduced a new cellAnchor property for media elements;
- Added a new getMedia method for worksheets;
- Updated dynamicSource to accept definedNames;

## 05/09/2024

### jspreadsheet

#### 11.5.5

- Improved setValue in batch operations to ensure formulas are re-calculated within the topology chain.
- Enhanced getDataFromRange to accept worksheet names;
- Fixed the `dynamicSource` property use for dropdowns;

## 31/08/2024

### jspreadsheet

#### 11.5.4

- Fixed the toolbar font-family dropdown to correctly select fonts, even when the font name includes white spaces;
- Fixed data grid filter position;
- Enhanced setProperties to accept a new type as a custom editor object;

## 31/08/2024

### jspreadsheet

#### 11.5.3

- New rows now default to an empty array upon insertion;

#### 11.5.2

- Prevent console errors when using the Tab and Enter keys with no active selection;
- Added a select-all option for nested headers;

## 24/08/2024

### jspreadsheet

#### 11.5.1

- Prevent default keydown behavior on read-only cells.

#### 11.5.0

- Fixed data grid filter position when using nestedHeaders with frozenColumn;
- Included the onclick event for data grid dispatch;
- Aligned the Backspace shortcut behavior with Excel and Google Sheets; 
- Introduced a new method, worksheetInstance.getStyleIndexes(cell?: string), to retrieve style indexes;
- oncopy now accepts an overwrite value;
- Added the force property for value setting during batch execution;

> Note: Starting from version 11.5.0, worksheet.options, worksheet.getConfig(), and spreadsheet.getConfig() will return style indexes to enhance performance during persistence.


### @jspreadsheet/search

#### 4.0.3

- Automatically focus on the search input when opening the modal.

## 20/08/2024

### jspreadsheet

#### 11.4.12

- setFilter forces an array of strings to lowercase;
- Applying a filter on load forces the array of strings to lowercase;
- Consider null as blank during filtering;
- Fix data grid filter position when using nestedHeaders with frozenColumn;

### @jspreadsheet/parser

#### 5.5.2

- Fix the import of files generated with the render extension in the parser extension, setting a default theme.
- Fix the import of conditional formatting with "text" and "equal to" criteria in the parser extension.

## 17/08/2024

### @jspreadsheet/render

#### 5.4.4

- Export hidden worksheets;
- Fix exporting of the ">" character in cell contents;
- Fix exporting of transparent borders in pie charts;
- Export line breaks;
- Fix exporting of unlocked merges in the render extension;
- Fix grid line export in the render extension;

### @jspreadsheet/parser

#### 5.5.1

- Import the default column width in the parser extension.
- Data grid media positions fix;

## 14/08/2024

### @jspreadsheet/bar

#### 5.0.7

* Block the data grid edition in case the cell is not in edition mode

### Jspreadsheet

#### 11.4.11

* oneditionstart can return false to block the edition;

### @jspreadsheet/render

#### 5.4.3

* Export merge properties to locked cells;

## 06/08/2024

### @jspreadsheet/charts

#### 6.3.0

* Compatibility with CSP safe inline
* Background and color updates

### @jspreadsheet/render

#### 5.4.2

* Charts background and color updates

## 05/08/2024

### Jspreadsheet

#### 11.4.10

* When filters: false but filters are enabled on the column level + sorting fix;

## 02/08/2024

### Jspreadsheet

#### 11.4.9

* Case-sensitive filters
* added ctrl+shift.* shortcuts
* added @types locked:boolean for the Cells interface

## 29/7/2024

### @jspreadsheet/parser

#### 5.5.0

* Fix the import of the default font size for axis labels and chart legends.
* Fix the import of omitted colors in pie charts.
* Fix the import of notes.
* Fix an error in the import of the "bold" style in shared strings.


## 26/7/2024

### Jspreadsheet

#### 11.4.7

* Accept numbers as worksheet names;

#### 11.4.6

* Update on the toolbar undo & redo button state;
* setWidth & setHeight will work with editable: false to improve the user experience;
* Filter false on checkbox column types fix;

### Bar

#### 5.0.6

* suggestions: false to prevent download the formulas' documentation;

