title: The JavaScript Spreadsheet Version 8
keywords: JavaScript Spreadsheet, data grid, spreadsheets
description: Jspreadsheet Pro is a JavaScript plugin to create powerful data grid with spreadsheet controls.

# Jspreadsheet v8: The JavaScript spreadsheet

Jspreadsheet, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. It is compatible with the most widely-used spreadsheet software. It offers users an unrivaled spreadsheet-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. 

## Smart data grid. Great user experience.

Create applications with spreadsheet-like controls. Manage thousands of database records in an instant. Get Started

### Jspreadsheet is a powerful spreadsheet-like application

Impress your clients with a better user experience.

  * Make rich and user-friendly web interfaces and applications
  * Handle complicated data inputs with ease and convenience
  * Common shortcuts to move data to/from any other spreadsheet software
  * Highly flexible and customizable
  * Lightweight and easy to use

## Flexible and customizable

The advanced integrated tab management system gives users a higher degree of flexibility in their usage.
[Learn More](/docs/v10/examples/highcharts)


_“We vetted 10 JS spreadsheet components and we must say that jspreadsheet comes out as the best”_
**Lode Cools,**  _CTO & Co-founder - Bizzcontrol_

## Start your free trial now

Create a free account and create amazing data grid that feel like a spreadsheet with Jspreadsheet Pro. 

## Amazing online spreadsheets

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet.setLicense('ZmQ4NWYyYjVmYTBjMDQwMDA3NjUwZjUwNTA4MDkwYWYzNWQ4OWE3MjQyZjJiZDU1YzM1MjA4OTI5OTEwZDlkMTNiMThkNzQ3YzNjZWI2ZGNjM2MyZGIwNDBmMzZmYzQwYWU1Y2EwOTEyMGE4MzU2M2Q2MjMzMTQ2MTUwNWEzOTIsZXlKdVlXMWxJam9pY0dGMWJDNW9iMlJsYkNJc0ltUmhkR1VpT2pFMk5qQTFNVGd3TURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpYW5Od2NtVmhaSE5vWldWMExtTnZiU0lzSW1OellpNWhjSEFpTENKMVpTNWpiMjB1WW5JaUxDSjFibWwwWldRdVpXUjFZMkYwYVc5dUlpd2liRzlqWVd4b2IzTjBJbDBzSW5Cc1lXNGlPaUl6SWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luQmhjbk5sY2lJc0luTm9aV1YwY3lJc0ltWnZjbTF6SWl3aWNtVnVaR1Z5SWl3aVptOXliWFZzWVNKZGZRPT0=');

jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [8,8],
    }],
});
</script>
</html>
```
 

### Main differences between the Pro and Community distributions

If you are interested in more details about the features, visit the [version comparison](/docs/v8/comparison) section.

| Feature                      | Description                                                                                                                                                                                                                                                                                                     |
| -----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DOM management               | With a new DOM management engine, the pagination and lazy loading options allow for higher efficiency when rendering tables.                                                                                                                                                                                    |
| Formula parsing              | The upgraded formula engine ensures that the efficiency and accuracy of calculations are enhanced, even when dealing with chained formulas.                                                                                                                                                                     |
| Cross-Worksheet calculations | Work with formulas from different and multiple worksheets.                                                                                                                                                                                                                                                      |
| Data persistence             | Offers complete support for data persistence. Developers can persist not only data, but also the properties of data tables in a remote server. Data tables can thus be easily recreated.<br/><br/>Stronger integration with remote servers enables better management of record IDs and remote data persistence. |
| Decouple editors             | Allows for overwriting column properties for one specific cell. For example, the table can be configured to render a drop-down in one specific cell within a text type column.                                                                                                                                  |
| Filter options               | The filterOptions property helps developers overwrite the behavior of a cell based on the values of another cell. For example, I have two date columns in a table; the second should not have a date that is before the one in the first.                                                                       |
| Custom editor template       | Offers a lot of new native column types and provides a new simplified custom type template. Developers can extend and create new custom column types in mere minutes.                                                                                                                                           |
| Worksheet management         | The advanced integrated tab management system gives users a higher degree of flexibility, including the option to create new worksheets inside a spreadsheet.                                                                                                                                                   |
| Add-ons and extensions       | Support for add-ons and plugins, which allows developers to use third-party extensions or create their own add-ons.                                                                                                                                                                                             |
| Premium support              | Offers timely and comprehensive technical support to help developers maximize the potential of Jspreadsheet Pro and fulfill any application requirements.                                                                                                                                                       |



## Javascript spreadsheet examples

### Spreadsheet data

*   [Json data binding](/docs/v8/examples/data-binding)
*   [Import from XLSX](/docs/v8/examples/xlsx-parser)
*   [Export to XLSX](/docs/v8/examples/xlsx-render)

### Formulas

*   [Custom formulas](/docs/v8/examples/custom-formulas)
*   [Cross calculations](/docs/v8/examples/cross-calculations)

### Editors

*   [Custom](/docs/v8/examples/custom-column-type)
*   [Progressbar](/docs/v8/examples/progressbar "Progressbar column type")
*   [Autonumber](/docs/v8/examples/autonumber "Auto increment column type")
*   [Richtext](/docs/v8/examples/richtext "HTML editor")

### Spreadsheet features

*   [Readonly](/docs/v8/examples/readonly)
*   [Fullscreen](/docs/v8/examples/fullscreen)
*   [Text wrapping](/docs/v8/examples/text-wrapping)
*   [Events](/docs/v8/examples/events "Control the interaction via callbacks")

### Integrations

*   [Webcomponent](/docs/v8/examples/webcomponent "Spreadsheet as a webcomponent")
*   [Jquery](/docs/v8/examples/jquery "Using jspreadsheet with Jquery")
*   [Chartjs](/docs/v8/examples/spreadsheet-with-charts "Spreadsheet with charts")

### Advanced examples

*   [Highcharts](/docs/v8/examples/highcharts "Charts integration with HighCharts")
*   [ChartJS](/docs/v8/examples/chartjs "Charts integration with chartjs")
*   [Real-time spreadsheet](/docs/v8/examples/real-time-spreadsheet "Real-time spreadsheet")
*   [Food store](/docs/v8/examples/food-store "Food store")
*   [Project management](/docs/v8/examples/project-management "Project management")
*   [Payment calculator](/docs/v8/examples/payment-calculator "Payment calculator")


## License

A license is required to use this software. Please choose one of our [subscription plans](/pricing).

 

### About Jspreadsheet

Inspired by other spreadsheet software, Jspreadsheet Pro is an original JavaScript app created to facilitate data input and manipulation in web-based applications. This software has two different distributions, the Community Edition (CE) and the Pro Edition. It is a lightweight alternative to other JavaScript spreadsheet libraries.Thus, you will be familiar with migrating your data to JSS Spreadsheet.  

## Jspreadsheet release notes

 

### **J** spreadsheet 8.7.3

  * New event: onbeforesend
  * Controls: CTRL- to exclude rows and columns
  * Picker.palette([]) to customize the colors from variables in the formulas.



### **J** spreadsheet 8.6.5

  * setStyle from the toolbar items will not apply style for filtered rows.



### **J** spreadsheet 8.6.4

  * Re-applying alignment on resetStyle



### **J** spreadsheet 8.6.3

  * New event: oncreatecolumn
  * New spreadsheet property: moveDownOnEnter



### **J** spreadsheet 8.6.2

  * Formula calculations: Default value from zero to null when the cell is blank.
  * Array calculations improved



### **J** spreadsheet 8.5.2

  * New Formula picker with cross-spreadsheet support.
  * Toolbar default options have changed.
  * New style: jss_light
  * New extension: validations
  * onbeforechange returns false to cancel the change event
  * Matrix calculation refresh
  * updateProperty



### **J** spreadsheet 8.4.2

  * New event onbeforefilter to overwrite the options of the filter.
  * setViewport to keep viewport position
  * Keyboard arrows during the cell edition to move to another cell.
  * Filter editor position



### **J** spreadsheet 8.3.2

  * No scrollY when tableOverflow + pagination is used, since the height is defined by the number of rows.
  * New event onformulachain brings all information about the chain formula executions.



### **J** spreadsheet 8.3.1

  * onbeforepaste returns an array in all cases (paste from external or internal source).
  * Rollback for the conditional jspreadsheet return. (To maintain compatibility with legacy declarations).
  * jspreadsheet.destroy removes references to all worksheets
  * wordWrap is deprecated.
  * wrap is a new property that can be used on columns or cells to wrap the text.



### **J** spreadsheet 8.2.4

  * setData with a new argument to force Array or JSON to be returned
  * Plugins.onevent to work with interception.
  * Plugins.onselection is deprecated.
  * defaultColAlign: default as null. The default is now defined by the CSS.
  * defaultRowHeight: default as 23px.
  * Type number default alignment to right. Can be overwritten via CSS (jss_number).
  * updateTable load after formulas execution.
  * setProperty, getProperty can update specific cell properties. Now includes history, persistence and changes to multiple records.
  * Toolbar color picker to default the current selected cell property value (cursor).
  * createWorksheet to return the new worksheet instance.
  * Jspreadsheet returns the reference to the worksheets array.
  * Image type accepts floating images.
  * Keep the options.data reference when inserting new rows.
  * Type fixes



### **J** spreadsheet 8.1.15

  * onbeforeformula
  * setWidth for hidden columns
  * Spreadsheet scroll improvements



### **J** spreadsheet 8.1.12

  * Image type with options (absolute, width, height).
  * Spreadsheet selection with shift improvement
  * Viewport.refresh updates



### **J** spreadsheet 8.1.9

  * shiftFormula property for columns



### **J** spreadsheet 8.1.7

  * Better mobile navigation experience. Spreadsheet touch events updates.
  * Formula picker



### **J** spreadsheet 8.1.0

  * Fixes for filter + add/delete rows combination
  * New property _rows[y].results: Boolean_ to identify records in the search/filter results
  * beforeinit for Plugins
  * Fixes for the programmatic set/reset freezeColumns
  * Improvement of the CSS for freezeColumns + hidden index column
  * Formulas on footers review



### **J** spreadsheet 8.0.61

  * New spreadsheet formula picker component
  * getRange method automatic order correction fix
  * updateState to get the current selection



### **J** spreadsheet 8.0.58

  * loadData to reset or reload the JavaScript grid data.
  * Better id synchronization when a column is defined as primaryKey.
  * spreadsheet.toolbar as a method.
  * Fixes when data cell === null and viewport is active to avoid console error on scroll.



### **J** spreadsheet 8.0.57

  * Internal automatic datatype identification for the spreadsheet: Json or Array based on column names
  * getRange method to bring the selection as a range format.



### **J** spreadsheet 8.0.56

  * New external javascript data grid formula picker
  * Spreadsheet toolbars resize when open a new worksheet or viewport resize.



### **J** spreadsheet 8.0.55

  * contextmenu types updates
  * setData on readonly cells
  * Copy and paste when filter/search is applied fixes



### **J** spreadsheet 8.0.51

  * setData to adjust to different grid dimensions
  * setRowId server callback to update row ids



### **J** spreadsheet 8.0.48

  * getRowData returns a JSON or Array based on the initial data type
  * Spreadsheet viewport fullscreen to cover all screen space
  * Spreadsheet with empty data is now enabled
  * It is now possible to delete the last row
  * MinSpareRows and MinSpareCols on initialization
  * Spreadsheet formula fixes



### **J** spreadsheet 8.0.46

  * Editor input CSS z-index update
  * Automatically get the next available name when the spreadsheet worksheet name is not defined
  * Webcomponent support has been included
  * oncopy to support cancelation
  * Get processed values with mask for cells that are not loaded
  * Grid Onwheel behavior
  * getChain fixes
  * Dataype to define the type of data
  * Automatic scroll adjustment for the last row/column
  * New locked property on cells
  * Basic spreadsheet formula plugin fixes
  * NextJS compatibility changes



### **J** spreadsheet 8.0.41

  * Fixes for spreadsheet calendar mask
  * Force Excel-like formulas on readonly cells on spreadsheet initialization



### **J** spreadsheet 8.0.31

  * Spreadsheet viewport improvements
  * Touch events



### **J** spreadsheet 8.0.26

  * deleteRow rendering updates when using the spreadsheet viewport
  * Border freeze
  * Changing complex JSON data objects on insertRow



### **J** spreadsheet 8.0.15

  * Autocast improvements;
  * Formify integration;



### **J** spreadsheet 8.0.0

  * Floating editor element, compatible with EMI
  * Viewport loading navigation
  * New formula engine
  * New parent spreadsheet container
  * Shared toolbar
  * New contextmenu arguments
  * New translation options
  * New plugins and editors capabilities

 

### Jexcel 7.11.8

Jexcel has been renamed to Jspreadsheet. 

  * Filter for individual columns
  * Global license handler
  * setExtensions, setDictionary
  * Improvement to the scroll experience for lazyloading
  * New tooltip properties for columns
  * New arguments for the lazyloading events
  * Formula caching adjustments
  * New argument for onbeforepaste (style)
  * New masking integration



### Jexcel 7.8.2

  * Filter for individual columns
  * Update filters programmatically
  * Validation property, native and custom rules
  * Disabled internal sequence option for new records



### Jexcel 7.7.9

  * Custom divisor for options in the dropdown



### Jexcel 7.7.2

  * Toolbar with options
  * Responsive autocomplete column
  * textEditor to force input [input type='text'] for column type='number'



### Jexcel 7.7.1

  * New events to customize the search results: onbeforesearch and onsearch.



### Jexcel 7.7.0

If you migrate from 7.6.1 to 7.7.0 and are dealing with the DOM elements of the tabs using el.children[0], that has been changed to el.tabs.headers. 

  * New tabs with navigation.



### Jexcel 7.6.1

  * Apply filters programmatically: filter(integer columnNumber, Object values)



### Jexcel 7.4.2

  * A new spreadsheet event: oncomments(DOMElement el, Object cells)



### Jexcel 7.4.0

  * New column methods: getColumnIdByName, getColumn, setColumn
  * executeFormula with optional x, y references.



### Jexcel 7.3.5

  * debugFormulas: true



### Jexcel 7.3.0

  * InternationalKeyboard initialization property
  * New jexcel_object class for external elements
  * Better searching/filtering integration



### Jexcel 7.2.0

  * Automatic scroll during dragging or selection
  * Freeze nested headers
  * Freeze index numbers



### Jexcel 7.1.6

  * Wildcard domain certificate licenses
  * Formula caching



### Jexcel 7.1.0

  * General formula engine refactoring
  * Cross-worksheet formula updates and fixes
  * Goto row method
  * Merge selected cells



### Jexcel 7.0.0

We are proud to release the new version of Jexcel. More performance and a better spreadsheet experience for the user.

  * Cross-worksheet spreadsheet formula support
  * Formula cache
  * Multiple filter and search combination
  * Spreadsheet with lazycolumns
  * New mergeCells controllers
  * Merge cell updates with insert/delete rows and columns
  * Copy and paste with formulas shift updates
  * Optimizations
  * New dragging/resizing controllers for columns and rows
  * New copy/paste behavior, closer to other software behaviors
  * Better record id management
  * New arrow navigation
  * Calendar and dropdown options

 

### Jexcel 6

Not released to the public.

 

### Jexcel 5.6.7

  * setProperty to render changes in the column.



### Jexcel 5.6.6

  * Copy and paste formulas
  * Formulas fixes on delete/insert rows
  * setConfig to change dimensions
  * setHeight to accept arrays of rows



### Jexcel 5.6.1

  * New flag and default: includeHiddenRowsOnCopy: false
  * filterOptions with more obvious behavior



### Jexcel 5.6.0

  * Full screen with toolbars and worksheet tabs
  * Worksheet new methods, and initial configuration
  * Dropodwn with extra properties and filterOptions
  * New toolbar with new default options



### Jexcel 5.5.0

  * New worksheet events
  * New worksheet actions on contextmenu
  * Security increased for formulas and editors
  * Jsuites v3 integration
  * Toolbars
  * New cross sheet relation editor
  * Formula security



### Jexcel 5.0.0

  * Calendar filter, to create conditions before open
  * New detached borders and copying indication border
  * New formula and loading engine
  * New faster navigation options
  * Various native column type implementations
  * New decouple custom column template object
  * New cell property capable of setting a type for one specific cell
  * HTML content compatibility
  * Complete data and configuration persistence support
  * Remote tables and multiple user table synchronization (jExcel Cloud)
  * Theme
  * Fixed formulas on footers
  * Formula can return DOM elements
  * Dynamic column type changing

 

### Jexcel 4.0.1

  * Freeze columns
  * Resize multiple columns
  * New smart key navigation
  * New smart merge cell methods
  * Support for large tables, only loads what is necessary when using lazyloading or pagination
  * Faster formula engine
  * New native formula methods
  * Super event: centralized event handler method
  * Easier backend integration

 

### Jexcel 3.6.0

  * Better formula parsing
  * New events
  * New initialization options
  * General fixes

 

### Jexcel 3.2.3

  * getMeta, setMeta methods
  * NPM package with jSuites
  * General fixes

 

### Jexcel 3.0.1

jExcel v3 is a completely rebuilt Vanilla JavaScript version. For that reason, it was not possible to maintain complete compatibility with the previous version. If you are upgrading, you might need to implement a few updates in your code. If you have questions, you can review the article on upgrading from jExcel v2 or Handsontable.

jExcel v3 brings a lot of great new features:

  * Drag and drop columns
  * Resizable rows
  * Merge columns
  * Search
  * Pagination
  * Lazy loading
  * Full-screen flag
  * Image upload
  * Native color picker
  * Better mobile compatibility
  * Better nested headers compatibility
  * Amazing keyboard navigation support
  * Better hidden column management
  * Great data picker: dropdown, autocomplete, multiple, group options and icons
  * Importing from XSLX (experimental)



Big improvements include: 

  * A completely new formula engine with no external dependencies with much faster results.
  * Absolutely no selectors, meaning a much faster application
  * New native columns
  * No jQuery is required
  * React, Vue and Angular examples
  * XLXS support using a custom sheetjs (experimental).



### Jexcel 2.1.0

We are glad to bring you the latest jquery plugin version, with the following improvements:

  * Mobile touch fixes
  * Paste fixes & new CSV parser



### Jexcel 2.0.0

  * New radio column
  * New dropdown with autocomplete and multiple selection options
  * Header/body separation for a better scroll/column resize behavior and compatibility
  * Better text-wrapping, including alt+enter Excel compatibility
  * New set/get meta information
  * New set/get config parameters
  * New set/get programmatic cell style
  * New set/get cell comments
  * New table custom toolbar
  * New responsive calendar picker



### Jexcel 1.5.7

  * Checkbox column type improvements
  * Destroy jquery table updates



### Jexcel 1.5.1

  * Spreadsheet data overflow and fixed headers. 
  * Navigation improvements



### Jexcel 1.5.0

  * Relative insertRow, deleteRow, insertColumn, deleteColumn.
  * Undo/Redo action tracker for insertRow, deleteRow, insertColumn, deleteColumn, moveRow
  * New formula column recursive chain
  * New Bootstrap-like alternative design option.
  * updateSettings updates


