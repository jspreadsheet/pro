title: Jspreadsheet Pro v5: The JavaScript spreadsheet
keywords: Data grid, Spreadsheet, Tables, Data tables.
description: Getting started with Jspreadsheet Pro 5 plugin. Create powerful online spreadsheets with Jspreadsheet and socket.io

# Jspreadsheet Pro v5: The JavaScript spreadsheet

Jspreadsheet, a lightweight Vanilla JavaScript plugin, can help you create exceptional web-based interactive tables and spreadsheets. Compatible with most widely-used spreadsheet software, such as Excel or Google Spreadsheet, it offers users an unrivalled Excel-like user experience. It also works well with prominent modern frameworks and flexibly utilizes a large collection of events, extensions and configurations to meet different application requirements. Impress your clients with a better user experience and a great dynamic interactive data management tool. 

Impress your clients with a better user experience and a great dynamic interactive data management tool.

  * Make rich and user-friendly web interfaces and applications
  * Handle complicated data inputs with ease and convenience
  * Use shortcuts such as CTRL+C, CTRL+V to move data from/to any other spreadsheet software
  * Improve software user experience
  * Create rich CRUD'S and beautiful UI
  * Highly flexible and customizable
  * Lightweight and simple to use
  * Thousands of successful user cases

  

## Start your free trial now

After you create a free account, you will receive specific instructions on how to download and start using Jspreadsheet. There is no time limit for your evaluation period; you will need a valid license only when you are ready to deploy your applications.

[Click here and start with Jspreadsheet Pro](/me?create)

 

## Create amazing online spreadsheets

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10,10],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
  

### Differences between the Pro and Community Edition Versions

| Feature                 | Description                                                                                                                                                                                                                                                                                                        |
| ------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DOM management          | With a new DOM management engine, the pagination and lazy loading options allow for higher efficiency in table rendering.                                                                                                                                                                                          |
| Formula parsing         | The upgraded formula engine ensures that the efficiency and accuracy of calculations are enhanced, even when dealing with chained formulas.                                                                                                                                                                        |
| Data persistance        | It offers complete support for data persistence. Developers can persist not only data, but also the properties of data tables in a remote server. Data tables can thus be easily recreated.<br/><br/>Stronger integration with remote servers enables better management of record IDs and remote data persistence. |
| Decouple editors        | It allows the overwriting of column properties for one specific cell. For example, the table can be configured to render a drop down in one specific cell within a text type column.                                                                                                                               |
| Filter options          | It has the column property filterOptions, which helps developers overwrite the behavior of a cell based on the values of another cell. For example, I have two date columns in a table; the second should not have a date that is before the one in the first.                                                     |
| Real-time collaboration | Its real-time spreadsheet online sharing capacity gives multiple users the opportunity for effective collaboration.                                                                                                                                                                                                |
| Custom editor template  | It offers a lot of new native columns types and provides a new simplified custom type template. Developers can extend and create new custom column types within mere minutes.                                                                                                                                      |
| Worksheet management    | The advanced integrated tab management system gives users a higher degree of flexibility in their usage, including the option to create new worksheets inside a spreadsheet.                                                                                                                                       |
| Add-ons and extensions  | It supports add-ons and plugins, which allows developers to use third-party extensions or create their own add-ons.                                                                                                                                                                                                |
| Premium support         | It offers timely and comprehensive technical support to help developers maximize the potential of Jspreadsheet Pro and fulfil any application requirements.                                                                                                                                                        |

 

## Jspreadsheet History

### Jspreadsheet 5.6.7

  * setProperty to render changes in the column.



### Jspreadsheet 5.6.6

  * Copy and paste formulas
  * Formulas fixes on delete/insert rows
  * setConfig to change dimensions
  * setHeight to accept arrays of rows



### Jspreadsheet 5.6.1

  * New flag and default: includeHiddenRowsOnCopy: false
  * filterOptions with more obvious behavior



### Jspreadsheet 5.6.0

  * Full screen with toolbars and worksheet tabs
  * Worksheet new methods, and initial configuration
  * Dropodwn with extra properties and filterOptions
  * New toolbar with new default options



### Jspreadsheet 5.5.0

  * New worksheet events
  * New worksheet actions on contextmenu
  * Security increase on formulas and editors
  * Jsuites v3 integration
  * Toolbars
  * New cross worksheet relation editor
  * Formula security



### Jspreadsheet 5.0.0

  * Calendar filter, to create conditions before open
  * New detached borders and copying indication border
  * New formula and loading engine
  * New faster navigation options
  * Various different native column type implementations
  * New decouple custom column template object
  * New cells property capable to set a type for one specific cell
  * HTML content compatibility
  * Complete data and configuration persistence support
  * Remote tables and table multiple users synchronization (Jspreadsheet Cloud)
  * Theme
  * Fixed formulas on footers
  * Formula can return DOM elements
  * Dynamic column type changing

 

### Jspreadsheet 4.0.1

  * Freeze columns
  * Multiple columns resize
  * New smart key navigation
  * New smart merge cell methods
  * Support for large tables, only loads what is necessary when using lazy loading or pagination
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

Jspreadsheet v3 is a complete rebuilt JavaScript Vanilla version. For that reason, it was not possible to keep complete compatibility with the previous version. If you are upgrading you might need to implement a few updates in your code. If you have questions, you can review the article upgrading from Jspreadsheet v2 or Handsontable.

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
  * Importing from XSL (experimental)



Big improvements are included, such as: 

  * A completely new formula engine with no external dependencies with much faster results.
  * Absolutely no selectors, means a much faster application
  * New native columns
  * No jQuery is required
  * React, Vue and Angular examples
  * XLSX support using a custom sheetjs (Experimental).



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
  * [{$v['title']}](/{$v\[ "{$v\["){$v['description']}
"; } } ?> 
 

## Copyright and license

This software is free for any non-commercial usage. For commercial usage, please choose from our [subscription plans](/pricing).

 

### About Jspreadsheet

Inspired by Handsontable and Microsoft Excel, the Jspreadsheet Pro is a fully original JavaScript software created to facilitate data input and manipulation in web-based applications.

This software has two different versions—CE and Pro. It is a lightweight alternative to the Handsontable JavaScript spreadsheet. Therefore, certain keywords in the configuration and initialization directives will be familiar to Handsontable users. This allows for easy migration from Handsontable to Jspreadsheet.

The first time we were involved in a web-based spreadsheet development was in 2005, when we created a datagrid inspired by DHTMLX. However, because of the lack of audience, we decided to discontinue its development. A few years ago, we discovered Handsontable. It is an excellent software, but in certain extensions, we were limited from making integrations of a greater complexity. For example, it is not possible to have a simple key-value dropdown. We saw the opportunity and decided to build something from scratch—it would be completely original and allow for a simple transition between Handsontable and itself.

If you are a developer who likes Microsoft Excel, Handsontable, DataGrid, or would like to give users a new user-friendly experience, you are in the right place. You can manipulate the Jspreadsheet JavaScript spreadsheet data with JSON, CSV, or simple arrays, making it easy for you to integrate Jspreadsheet into any of your applications. We want to make sure that you enjoy using our tool and find it useful, so if you have any questions, just let us know. We are always happy to offer you free help!

All trademarks belong to their respective owners.
