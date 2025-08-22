title: The JavaScript Spreadsheet Version 7
keywords: JavaScript Spreadsheet, data grid, spreadsheets
description: Jspreadsheet is a JavaScript plugin to create powerful data grid with spreadsheet controls. 

# Jspreadsheet Pro v7: The JavaScript Spreadsheet

The **Jexcel** product name has changed to **Jspreadsheet**. Jspreadsheet, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. Compatible with most widely-used spreadsheet software. It offers users an unrivalled spreadsheet-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. Impress your clients with a better user experience and a great dynamic interactive data management tool. 

Impress your clients with a better user experience and a great dynamic interactive data management tool.

  * Make rich and user-friendly web interfaces and applications
  * Handle complicated data inputs with ease and convenience
  * Common shortcuts to move data from/to any other spreadsheet software
  * Improve software user experience
  * Create rich CRUDS and beautiful UI
  * Highly flexible and customizable
  * Lightweight and simple to use
  * Thousands of successful user cases



![spreadsheet art](img/the-spreadsheet.png)

  

## Start your free trial now

After you create a free account, you will receive specific instructions on how to download and start using Jspreadsheet. There is no time limit for your evaluation period; you will need a valid license only when you are ready to deploy your applications.

[Click here and start with Jspreadsheet Pro](/me/register)

 

## Create amazing online spreadsheets

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10,10],
    license: '###license###'
});
</script>
</html>
```
  

### Differences between the Pro and Community Edition Versions

| Feature                      | Description                                                                                                                                                                                                                                                                                                        |
| -----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DOM management               | With a new DOM management engine, the pagination and lazy loading options allow for higher efficiency in table rendering.                                                                                                                                                                                          |
| Formula parsing              | The upgraded formula engine ensures that the efficiency and accuracy of calculations are enhanced, even when dealing with chained formulas.                                                                                                                                                                        |
| Cross-Worksheet calculations | Work with formulas from different and multiple worksheets.                                                                                                                                                                                                                                                         |
| Data persistance             | It offers complete support for data persistence. Developers can persist not only data, but also the properties of data tables in a remote server. Data tables can thus be easily recreated.<br/><br/>Stronger integration with remote servers enables better management of record IDs and remote data persistence. |
| Decouple editors             | It allows the overwriting of column properties for one specific cell. For example, the table can be configured to render a drop down in one specific cell within a text type column.                                                                                                                               |
| Filter options               | It has the column property filterOptions, which helps developers overwrite the behavior of a cell based on the values of another cell. For example, I have two date columns in a table; the second should not have a date that is before the one in the first.                                                     |
| Real-time collaboration      | Its real-time spreadsheet online sharing capacity gives multiple users the opportunity for effective collaboration.                                                                                                                                                                                                |
| Custom editor template       | It offers a lot of new native columns types and provides a new simplified custom type template. Developers can extend and create new custom column types within mere minutes.                                                                                                                                      |
| Worksheet management         | The advanced integrated tab management system gives users a higher degree of flexibility in their usage, including the option to create new worksheets inside a spreadsheet.                                                                                                                                       |
| Add-ons and extensions       | It supports add-ons and plugins, which allows developers to use third-party extensions or create their own add-ons.                                                                                                                                                                                                |
| Premium support              | It offers timely and comprehensive technical support to help developers maximize the potential of Jspreadsheet Pro and fulfil any application requirements.                                                                                                                                                        |

 

## Jspreadsheet History

The **Jexcel** product name has changed to **Jspreadsheet** from 7.9.4 

### v7.12.5

  * tracking HTML editor type for closing automatically
  * update isFormula to remove # as a token
  * fixes with no-mask numeric/text
  * fixes on the calendar masking
  * oncopy to allow cancel the copying



### Jspreadsheet v7.11.4

  * Lazy loading to 100 as default
  * New lazyNumber property to customize the lazyloading default number



### Jspreadsheet 7.10.1

  * Tooltip property to the columns
  * New arguments to the onlazyloading event
  * New arguments to onbeforepaste
  * Improve formula caching
  * Filter translation for (blanks)
  * onwheel behavior improviment
  * New masking system
  * setExtensions
  * setDictionary
  * @Types



### Jspreadsheet 7.9.11

  * The numeric type automatic converts the raw data to number when autoCasting is true.
  * Improviments on the formula precedence when cache is true
  * onbeforepaste from this version will receive an array.



### Jspreadsheet 7.9.4

  * The product has been renamed

 

### Jspreadsheet 7.8.2 (Jexcel)

  * Filter for individual columns
  * Update filters programatically
  * Validation property, native and custom rules
  * Disabled internal sequence option for new records



### Jspreadsheet 7.7.9 (Jexcel)

  * Custom divisor for options in the dropdown



### Jspreadsheet 7.7.2 (Jexcel)

  * Toolbar with options
  * Responsive autocomplete column
  * textEditor to force input [input type='text'] for column type='number'



### Jspreadsheet 7.7.1 (Jexcel)

  * New events to customize the search results: onbeforesearch and onsearch.



### Jspreadsheet 7.7.0 (Jexcel)

If you migrate from 7.6.1 to 7.7.0 and are dealing with the DOM elements of the tabs using el.children[0], that is changed to el.tabs.headers. 

  * New tabs with navigation.



### Jspreadsheet 7.6.1 (Jexcel)

  * Apply filters programatically: filter(integer columnNumber, Object values)



### Jspreadsheet 7.4.2 (Jexcel)

  * A new spreadsheet event: oncomments(DOMElement el, Object cells)



### Jspreadsheet 7.4.0 (Jexcel)

  * New column methods: getColumnIdByName, getColumn, setColumn
  * executeFormula with optional x, y references.



### Jspreadsheet 7.3.5 (Jexcel)

  * debugFormulas: true



### Jspreadsheet 7.3.0 (Jexcel)

  * InternationalKeyboard initialization property
  * New jexcel_object class for external elements
  * Better searching/filtering integration



### Jspreadsheet 7.2.0 (Jexcel)

  * Automatic scroll during dragging or selection
  * Freeze nested headers
  * Freeze index numbers



### Jspreadsheet 7.1.6 (Jexcel)

  * Wildcard domain certificate licenses
  * Formula caching



### Jspreadsheet 7.1.0 (Jexcel)

  * General formula engine refactoring
  * Cross-worksheet formula updates and fixes
  * Go-to to row method
  * Merge selected cells



### Jspreadsheet 7.0.0 (Jexcel)

We are proud to release the new version of Jspreadsheet. More performance and better spreadsheet felling experience for the user.

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
  * Better record ids management
  * New arrow navigation
  * Calendar and dropdown options

 

### Jspreadsheet 6 (Jexcel)

It was not released to the public.

 

### Jspreadsheet 5.6.7 (Jexcel)

  * setProperty to render changes in the column.



### Jspreadsheet 5.6.6 (Jexcel)

  * Copy and paste formulas
  * Formulas fixes on delete/insert rows
  * setConfig to change dimensions
  * setHeight to accept arrays of rows



### Jspreadsheet 5.6.1 (Jexcel)

  * New flag and default: includeHiddenRowsOnCopy: false
  * filterOptions with more obvious behavior



### Jspreadsheet 5.6.0 (Jexcel)

  * Full screen with toolbars and worksheet tabs
  * Worksheet new methods, and initial configuration
  * Dropodwn with extra properties and filterOptions
  * New toolbar with new default options



### Jspreadsheet 5.5.0 (Jexcel)

  * New worksheet events
  * New worksheet actions on contextmenu
  * Security increase on formulas and editors
  * Jsuites v3 integration
  * Toolbars
  * New intersheet relation editor
  * Formula security



### Jspreadsheet 5.0.0 (Jexcel)

  * Calendar filter, to create conditions before open
  * New detached borders and copying indication border
  * New formula and loading engine
  * New faster navegation options
  * Various different native column type implementations
  * New decouple custom column template object
  * New cells property capable to set a type for one specific cell
  * HTML content compabilibiliy
  * Complete data and configuration persistence support
  * Remote tables and table multiple users syncronization (Jspreadsheet Cloud)
  * Theme
  * Fixed formulas on footers
  * Formula can return DOM elements
  * Dynamic column type changing

 

### Jspreadsheet 4.0.1

  * Freeze columns
  * Multiple columns resize
  * New smart key navigation
  * New smart merge cell methods
  * Support for large tables, only loads what is necessary when using lazyloading or pagination
  * Faster formula engine
  * New native formula methods
  * Super event: centralized event handler method
  * Easier backend integration

 

### Jspreadsheet 3.6.0

  * Better formula parsing
  * New events
  * New initialization options
  * General fixes

 

### Jspreadsheet 3.2.3

  * getMeta, setMeta methods
  * Npm package with jSuites
  * General fixes

 

### Jspreadsheet 3.0.1

Jspreadsheet v3 is a complete rebuilt JavaScript Vanilla version. For that reason, it was not possible to keep complete compatibility with the previous version. If you are upgrading you might need to implement a few updates in your code.

The Jspreadsheet v3 brings a lot of great new features:

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



Big improvements are included, such as: 

  * A completely new formula engine with no external dependencies with much faster results.
  * Absolutely no selectors, means a much faster application
  * New native columns
  * No jQuery is required
  * React, Vue and Angular examples
  * XLXS support using a custom sheetjs (Experimental).



### Jspreadsheet 2.1.0

We are glad to bring you the latest jquery plugin version, with the following improvements:

  * Mobile touch fixes
  * Paste fixes & New CSV parser



### Jspreadsheet 2.0.0

  * New radio column
  * New dropdown with autocomplete and multiple selection options
  * Header/body separation for a better scroll/column resize behavior and compatibility
  * Better text-wrap including alt+enter excel compatibility
  * New set/get meta information
  * New set/get config parameters
  * New set/get programmatically cell style
  * New set/get cell comments
  * New table custom toolbar
  * New responsive calendar picker



### Jspreadsheet 1.5.7

  * Checkbox column type improvements
  * Destroy jquery table updates



### Jspreadsheet 1.5.1

  * Spreadsheet data overflow and fixed headers.
  * Navigation improvements



### Jspreadsheet 1.5.0

  * Relative insertRow, deleteRow, insertColumn, deleteColumn.
  * Redo, Undo action tracker for insertRow, deleteRow, insertColumn, deleteColumn, moveRow
  * New formula column recursive chain
  * New alternative design option bootstrap-like.
  * updateSettings updates

 

## Javascript spreadsheet examples

view['pages'] AS $k => $v) { $url = $v['url']; $url = explode('/', $url); if (isset($url[1]) && $url[1] == 'examples' && isset($url[2])) { echo "
  * [{$v['link']}](/{$v\[ "{$v\["){$v['description']}
"; } } ?> 
 

## License

You require a license to use this software. Please choose from our [subscription plans](/pricing).

 

### About Jspreadsheet

Inspired by other spreadsheet software, the Jspreadsheet Pro is a fully original JavaScript software created to facilitate data input and manipulation in web-based applications.

This software has two different distributions, the Community Edition (CE) and the Pro Edition. It is a lightweight alternative to other JavaScript spreadsheet libraries. Therefore, you whould be familiar migrating your data to Jspreadsheet Spreadsheet.
