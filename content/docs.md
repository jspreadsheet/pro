title: Jspreadsheet - The JavaScript Data Grid with Spreadsheet Controls
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Explore the documentation for Jspreadsheet, a lightweight JavaScript plugin for creating interactive data grids with spreadsheet controls. Learn about its features, including spreadsheet-like controls, responsive design, and compatibility with Angular, React, and Vue. Copy and paste the provided JavaScript example to quick-start creating amazing online spreadsheets. Check out the comparison between the Pro and Community editions, along with release notes for the latest versions. Find information on formulas, validations, real-time collaboration, worksheet management, add-ons, and premium support.
canonical: https://jspreadsheet.com/docs

# JavaScript Data Grid with Spreadsheet Controls

Jspreadsheet is a lightweight JavaScript plugin that help developers to create exceptional web-based interactive data grid with spreadsheet controls.

## JavaScript Data Grid

Create applications with spreadsheet-like controls. Manage thousands of database records in an instant.

[Free Trial](/me/login?create){.button .secondary target="_top"}

<br>

## Data Grid with Spreadsheet Controls

### Jspreadsheet is a Powerful Spreadsheet Plugin

Impress your clients with a better user experience.

* Embed a rich data grid on your web applications;
* Handle complicated data inputs with Excel-like controls;
* Copy and paste across different spreadsheet software;
* Highly flexible and customizable JavaScript Plugin;
* Lightweight and easy to learn;
* Mobile friendly;
* Advance data grid features;
* Choose your favourite framework;
* Spreadsheet Formulas and Shortcuts;


<br><br>


## Flexible and customizable

The advanced integrated tab management system gives users a higher degree of flexibility in their usage.
[Learn More](/docs/examples/highcharts)

{.bubble .green}
> _“We vetted 10 JS spreadsheet components and we must say that jspreadsheet comes out as the best”_
> 
> **Lode Cools,**\
> CTO & Co-founder - Bizzcontrol


<br><br>

## Online spreadsheets, easy to use.

Copy and paste the code below and quick start creating amazing online spreadsheets. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [6,6],
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} tabs={true} toolbar={true}>
                <Worksheet minDimensions={[6, 6]} />
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :tabs="true" :toolbar="true">
        <Worksheet :minDimensions="[6, 6]"/>
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new JavaScript data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            tabs: true,
            toolbar: true,
            worksheets: [{
                minDimensions: [6,6],
            }],
        });
    }
}
```
 

 

### More spreadsheet examples

#### Spreadsheet Data

*   [Json Data Grid Binding](/docs/examples/data-binding)
*   [Import from XLSX](/docs/examples/xlsx-parser)
*   [Export to XLSX](/docs/examples/xlsx-render)

#### Formulas

*   [Custom Data Grid Formulas](/docs/examples/custom-formulas)
*   [Cross calculations](/docs/examples/cross-calculations)
*   [External values](/docs/examples/external-values)

#### Editors

*   [Custom](/docs/examples/custom-column-type)
*   [Progressbar](/docs/examples/progressbar "Progressbar column type")
*   [Autonumber](/docs/examples/autonumber "Auto increment column type")
*   [Rich text](/docs/examples/rich-text "HTML editor")

#### Spreadsheet features

*   [Fullscreen](/docs/examples/fullscreen)
*   [Grid line](/docs/examples/grid-line)
*   [Readonly](/docs/examples/readonly)
*   [Rotate](/docs/examples/rotate)
*   [Text wrapping](/docs/examples/text-wrapping)

#### Integrations

*   [Web component](/docs/examples/web-component "Spreadsheet as a web-component")
*   [Jquery](/docs/examples/jquery "Using jspreadsheet with Jquery")
*   [Chartjs](/docs/examples/spreadsheet-with-charts "Spreadsheet with charts")

#### Advanced examples

*   [Highcharts](/docs/examples/highcharts "Charts integration with HighCharts")
*   [ChartJS](/docs/examples/chartjs "Charts integration with chartjs")
*   [Real-time spreadsheet](/docs/examples/real-time-spreadsheet "Real-time spreadsheet")
*   [Grocery store](/docs/examples/grocery-store "Grocery store")
*   [Project management](/docs/examples/project-management "Project management")
*   [Payment calculator](/docs/examples/payment-calculator "Payment calculator")
*   [Tests](/docs/examples/tests "Tests")


## License

You must have a license to use this software. Take a moment to explore the various [license plans](/content/pricing.md) available that best suit your specific needs.
 

### About Jspreadsheet

Inspired by other spreadsheet software, Jspreadsheet Pro is an original JavaScript data grid component created to facilitate data input and manipulation in web-based applications. This software has two different distributions, the Community Edition (CE) and the Pro Edition. It is a lightweight alternative to other JavaScript spreadsheet libraries.Thus, you will be familiar with migrating your data to JSS Spreadsheet.  

## Comparison

### Pro vs Community editions

| Feature                       | Description                                                                                                                                                                                                                                                                                                      |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DOM management                | With a new DOM management engine, the pagination and lazy loading options allow for higher efficiency when rendering tables.                                                                                                                                                                                     |
| Formula parsing               | The upgraded formula engine ensures that the efficiency and accuracy of calculations are enhanced, even when dealing with chained formulas.                                                                                                                                                                      |
| Cross-Worksheet calculations  | Work with formulas from different and multiple worksheets.                                                                                                                                                                                                                                                       |
| Data persistence              | Offers complete support for data persistence. Developers can persist not only data, but also the properties of data tables in a remote server. Data tables can thus be easily recreated.<br/><br/>Stronger integration with remote servers enables better management of record IDs and remote data persistence.  |
| Decouple editors              | Allows for overwriting column properties for one specific cell. For example, the table can be configured to render a drop-down in one specific cell within a text type column.                                                                                                                                   |
| Filter options                | The filterOptions property helps developers overwrite the behavior of a cell based on the values of another cell. For example, I have two date columns in a table; the second should not have a date that is before the one in the first.                                                                        |
| Real-time collaboration       | Real-time online sharing capacity gives multiple users the ability to collaborate effectively.                                                                                                                                                                                                                   |
| Custom editor template        | Offers a lot of new native column types and provides a new simplified custom type template. Developers can extend and create new custom column types in mere minutes.                                                                                                                                            |
| Worksheet management          | The advanced integrated tab management system gives users a higher degree of flexibility, including the option to create new worksheets inside a spreadsheet.                                                                                                                                                    |
| Add-ons and extensions        | Support for add-ons and plugins, which allows developers to use third-party extensions or create their own add-ons.                                                                                                                                                                                              |
| Premium support               | Offers timely and comprehensive technical support to help developers maximize the potential of Jspreadsheet Pro and fulfill any application requirements.                                                                                                                                                        |


## Jspreadsheet Release Notes

[Click here to see all history](/docs/changelog)

#### 11.6.0

- Introduced a new (cell range filter)[/docs/filters];
- Updated filter properties and methods for enhanced functionality;

#### 11.5.6

- Improved positioning of media elements during onload and resize;
- Introduced a new cellAnchor property for media elements;
- Added a new getMedia method for worksheets;
- Updated dynamicSource to accept definedNames;

#### 11.5.5

- Improved setValue in batch operations to ensure formulas are re-calculated within the topology chain.
- Enhanced getDataFromRange to accept worksheet names;
- Fixed the `dynamicSource` property use for dropdowns;

#### 11.5.4

- Fixed the toolbar font-family dropdown to correctly select fonts, even when the font name includes white spaces;
- Fixed data grid filter position;
- Enhanced setProperties to accept a new type as a custom editor object;

#### 11.5.3

- New rows now default to an empty array upon insertion;

#### 11.5.2

- Prevent console errors when using the Tab and Enter keys with no active selection;
- Added a select-all option for nested headers;

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

#### 11.4.12

* setFilter forces an array of strings to lowercase;
* Applying a filter on load forces the array of strings to lowercase;
* Consider null as blank during filtering;
* Fix data grid filter position when using nestedHeaders with frozenColumn;

#### 11.4.11

* oneditionstart can return false to block the edition;

#### Jspreadsheet 11.4.10

* When filters: false but filters are enabled on the column level + sorting fix;

#### Jspreadsheet 11.4.9

* Case-sensitive filters
* added ctrl+shift.* shortcuts
* added @types locked:boolean for the Cells interface

#### Jspreadsheet 11.4.7

* Accept numbers as worksheet names;

#### Jspreadsheet 11.4.6

* Update on the toolbar undo & redo button state;
* setWidth & setHeight will work with editable: false to improve the user experience;
* Filter false on checkbox column types fix;

#### Jspreadsheet 11.4.5

* setReadOnly clone column information fix;
* Block update cell calls for non-existing cells;

#### Jspreadsheet 11.4.4

* onmerge event expanded to the removeMerge method;
* onopenfilter to accept a promise as a valid return;

#### Jspreadsheet 11.4.3

* minSpareRows initial loading fix;
* Force updateFormulas on readonly cells during table reference updates;

#### Jspreadsheet 11.4.2

* Fix readonly to keep the column original properties into the cell;
* Fix setValidations for type format;

#### Jspreadsheet 11.4.1

* Update formulas with $ when changing the data grid structure fix;
* Showing array formula result during spreadsheet render fix;
* New method 'getStyleId'
* New data grid shortcut management system. `jspreadsheet.shortcut.set(string, method)`

#### Jspreadsheet 11.3.0

If you are upgrading from any previous version, you might need to upgrade your certificate.

* New argument for the loadValidations method;
* loadData adjustDimensions will destroy the merged cells;
* Fixes in some edge cases on the formula references when change the spreadsheet structure;
* Range name with or without worksheet name when there are changes in the spreadsheet structure;
* Mobile touch events improvement;
* New global persistence handler;

#### Jspreadsheet 11.2.5

* isFront() is improved to identify a backend or frontend;
* Types updates;
* definedNames update references fix
* setMedia initial top,left persistence when create a new media;

#### Jspreadsheet 11.2.3

* adjustDimensions argument on spreadsheet loadData to consider JSON data type;
* Update the data grid toolbar state on undo/redo;
* Re-focus on the input when back to the screen with Jspreadsheet;

#### Jspreadsheet 11.2.2

* Checkbox and radio editors should not transform the original data;
* Create cells when using range style;
* Record Editor type;
* New argument on getWorksheet;

#### Jspreadsheet 11.2.0

* New validations engine;
* Custom data grid cell validations;
* Remove selection updates on insert rows and columns (internally);

#### Jspreadsheet 11.1.4

* worksheetId generated automatically when not defined;

#### Jspreadsheet 11.1.3

* getData optimization;
* copy performance optimization;
* custom validations;

#### Jspreadsheet 11.1.2

* Formula cache optimization;
* Dropdown dynamicSource property;
* definedNames optimization;

#### Jspreadsheet 11.1.1

* New extension: OpenAI Integration;
* Vertical Scrolling rowHeight;
* loadData to reset data fix;
* onerror to intercept loading errors;
* Delete worksheet improvements;
* Rename worksheet improvements;
* Range style with setStyle;
* updateProperty & setProperty improvements;
* Multiple rows and columns resize outside the current data grid selection fix;
* Update data grid selection after insert rows or columns;

#### Jspreadsheet 11.0.28

* Trim() on dropdown items fix;
* Apply mask during setValue;
* Data grid reject validation with format fix;
* loadData new argument adjustDimension;
* getValueFromCoords new argument raw;

#### Jspreadsheet 11.0.23

* SnapToGrid fix
* Background CSS combination (dropdown, notes and style) fix.

#### Jspreadsheet 11.0.22

* Data grid defined names to work correctly with $ and null;
* setProperty to rebuild the cell data grid with all properties and validations;
* Chart extension with a new option to disable animations;
* setFreeze Rows & Columns to ignore DOM on backend operations;

#### Jspreadsheet 11.0.21

* Web-components updates for jSuites (image-dragging)

#### Jspreadsheet 11.0.19

* Implemented selection after pasting.
* Do not create new entries in the dropdowns containing a value not listed among valid items.
* Apply appropriated selection through the context menu.
* Introduced a new property, parseHTML, at the spreadsheet level.
* Corrected CSS for jss_dialog.
* Reviewed and updated TypeScript definitions.
* Added functionality for the which page method to operate without an argument.
* Resolved a virtualization issue in setProperty and updateProperty.

#### Jspreadsheet 11.0.16

* resetDefinedNames to exclude defined names indexes

#### Jspreadsheet 11.0.15

* Formula Picker cross worksheet fix;
* setData to consider IDs and sequence;
* Global mouseover events role fix;
* DefinedNames to accept constants & formula expressions;

#### Jspreadsheet 11.0.12

* Offset fix for resize, open filters, and header mouse actions
* setDefinedNames to work with constants

#### Jspreadsheet 11.0.10

* Performance optimization
* Backspace shortcut
* Review: loadData/setData
* New method on the worksheet scope: getCoordsFromRange

#### Jspreadsheet 11.0.7

* Select all
* Filters font-size style
* Performance optimization

#### Jspreadsheet 11.0.6

* React Wrapper with Picker
* MacOS improvement (contextmenu & paste)
* Export JSON data fixes
* Spreadsheet root attribute event binding fix
* getSelected(true) fix

#### Jspreadsheet 11.0.1

* Default properties are not stored to save memory;
* Media library has been updated;
* Namespaces is now available;
* Zoom is now available;
* Multi-selection is now available;
* New formula selector;
* Notifications API;
* Style for whole cols or rows;
* Backend support;
* International property helps define format for general numbers;
* fetch method inside worksheet.save including beforeSend

#### Jspreadsheet 10.9.4

* Drag and drop tabs fix

#### Jspreadsheet 10.8.2

* Clear borders toolbar fix

#### Jspreadsheet 10.6.0

* Wrap: true forces text wrap on white spaces.
* Cut action clears the clipboard after paste.
* Merge configuration fix.



#### Jspreadsheet 10.5.0

* New lazy loading for the filters modal
* Cross worksheets calculations on Formula Basic
* Formula Pro caching updates



#### Jspreadsheet 10.4.0

* Initial data reference on delete row
* Readonly precedence rules order Row > Col > Cell



#### Jspreadsheet 10.3.2

* setReadOnly to change the cell options
* New table position on virtualization
* Update toolbar method set borders



#### Jspreadsheet 10.2.0

* New feature Media: spreadsheet level images and charts (onchangemedia, media, setMedia, deleteMedia)
* Data grid calculation stop/start control with jspreadsheet.calculations(state: boolean);
* New event: onchangereferences there are changes on the structure of the data grid cells
* New filters



#### Jspreadsheet 10.1.8

* New event: onbeforeselection
* New property: worksheets.media
* Depracted property: worksheets.images (use worksheets.media)



#### Jspreadsheet 10.1.8

* New optimized formula chain
* New defaultIndexColumn width
* New validations engine
* Performance improvements
* New Formulas Pro v4



#### Jspreadsheet 10.0.14

* New border style option for the toolbar;
* Translate for the data grid filter control;
* Filter accessibility. Alt + arrow down;
* Shift + selection



#### Jspreadsheet 10.0.1

* Fill handler for dates
* New filters with operators
* Copy and fill to considers cell format
* Copy formulas, style and format across different JSS spreadsheets
* Integrated history across different spreadsheets
* Jquery support is dropped. Polyfill is available.
* textOverflow now using :has property. *Known limitations on FF.
* New onerror event.
* Global style container
* Performance upgrades



#### Jspreadsheet 9.5.0

* Group rows has changed from array of elements to number of elements.



#### Jspreadsheet 9.4.0

* Execution on hidden formulas
* Column group methods and events
* Row group destroy event has been renamed.
* z-index fix for position relative in cells
* snapToGrid scrolling



#### Jspreadsheet 9.3.4

* Fixes: search for symbols, resetSearch to update scroll, scroll left.



#### Jspreadsheet 9.3.0

* New scroll processing, navigation and visual.
* New dropdown editor arrows (clickable)
* Selection with scroll incremental speed
* Frozen cols/rows condition to merged and > than the viewport
* Checkbox and radio better user experience



#### Jspreadsheet 9.2.10

* Better click handler for checkbox and radio editor type
* textOverflow and hide column fixes



#### Jspreadsheet 9.2.9

* Validation @types
* Fix ordering with hidden type: image columns
* Toolbar updateState for all items
* Toolbar bold item apply the opposite of the main selected cell
* Column and row move border to CSS only.
* definedNames and formula loop protection updates
* onrenderfootercell to apply masks on footer cells
* autoNumber fixes when using tableOverflow
* autoWidth on dblclick in the header border
* spacing property on spreadsheet to adjust the breath space in the end of the table
* Column and rows visibility updates
* SUBTOTAL on formula-pro to auto update when using filters or searching



#### Jspreadsheet 9.2.0

* setWidth will show a column when applied to a hidden column
* setHeight will show a row when applied to a hidden row
* Viewport inherits the container width if that is defined and when tableWidth is not defined.
* Viewport inherits the container height if that is defined and when tableHeight is not defined.
* Hidden rows are no longer in the viewport.
* Update nestedHeaders when adding or deleting columns
* Improvements on the selection and keyboard navigation
* New methods setRowGroup, resetRowGroup, openRowGroup, closeRowgroup, autoWidth
* New events oncreaterowgroup, onopenrowgroup, oncloserowgroup, ondestroyrowgroup
* FreezeRows to be included in all search results



#### Jspreadsheet 9.1.24

* New events for search customization: onsearchstart, onserchrow



#### Jspreadsheet 9.1.22

* New property columnSortingOnDblClick. Default to false (You can keep historical compatibility change that to true)
* Double click on the header right border to autoResize based on the data
* Show/hide columns and rows to the contextMenu
* Persistence to the show/hide columns and rows methods
* New events onchangerowvisibility, onchangecolumnvisibility
* New row and column over merged rows or merged columns



#### Jspreadsheet 9.1.20

* Height viewport monitoring on scroll left.
* Paste with inverted selection fix
* Freeze rows border position fix
* New options to disabled virtualization based on the axis when using tableOverflow: true. virtualizationX and virtualizationY.



#### Jspreadsheet 9.1.17

* Cloning action when mouseup outside viewport
* Filter to remove duplicates for dates
* Destroy to remove all classes and call ondestroy for extensions
* Toolbar select default font-family



#### Jspreadsheet 9.1.13

* Redraw on tab change
* onbeforechange to accept empty string
* marching ants disappear when on start edition
* Internal tracking special formulas.



#### Jspreadsheet 9.1.6

* Spreadsheet level autoIncrement
* Nested headers + frozen columns improvements
* Create from table
* Allow cells with white spaces



#### Jspreadsheet 9.1.0

* New viewport: faster, resizable, responsive
* Mobile selection control
* Horizontal formula corner dragging
* Extended toolbar with merged cells and vertical align
* Formula with arrays. (Requires Formula-Premium)
* New events: onresize, onchangereferences, onbeforesend, onchangedefinednames, oninput
* Fill handler matching Excel and Google Sheets trends algorithm. Available in the Premium edition with formula pro.
* History cascade options
* Download method will call the XSLS render when this the extension is enabled
* Better default alignment management.
* ShiftFormula to consider $
* Variable with nulls instead of zeros
* getHeight with zero
* Defined names with history and programmatic methods.
* Freeze rows
* Spreadsheet cell text rotation
* Regional zebra background color



#### Jspreadsheet 8.7.3

* New event: onbeforesend
* Controls: CTRL- to exclude rows and columns
* Picker.palette([]) to customize the colors from variables in the formulas.



#### Jspreadsheet 8.6.5

* setStyle from the toolbar items will not apply style for filtered rows.



#### Jspreadsheet 8.6.4

* Re-applying alignment on resetStyle



#### Jspreadsheet 8.6.3

* New event: oncreatecolumn
* New spreadsheet property: moveDownOnEnter



#### Jspreadsheet 8.6.2

* Formula calculations: Default value from zero to null when the cell is blank.
* Array calculations improved



#### Jspreadsheet 8.5.2

* New Formula picker with cross-spreadsheet support.
* Toolbar default options have changed.
* New style: jss_light
* New extension: validations
* onbeforechange returns false to cancel the change event
* Matrix calculation refresh
* updateProperty



#### Jspreadsheet 8.4.2

* New event onbeforefilter to overwrite the options of the filter.
* setViewport to keep viewport position
* Keyboard arrows during the cell edition to move to another cell.
* Filter editor position



#### Jspreadsheet 8.3.2

* No scrollY when tableOverflow + pagination is used, since the height is defined by the number of rows.
* New event onformulachain brings all information about the chain formula executions.



#### Jspreadsheet 8.3.1

* onbeforepaste returns an array in all cases (paste from external or internal source).
* Rollback for the conditional jspreadsheet return. (To maintain compatibility with legacy declarations).
* jspreadsheet.destroy removes references to all worksheets
* wordWrap is deprecated.
* wrap is a new property that can be used on columns or cells to wrap the text.



#### Jspreadsheet 8.2.4

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



#### Jspreadsheet 8.1.15

* onbeforeformula
* setWidth for hidden columns
* Spreadsheet scroll improvements



#### Jspreadsheet 8.1.12

* Image type with options (absolute, width, height).
* Spreadsheet selection with shift improvement
* Viewport.refresh updates



#### Jspreadsheet 8.1.9

* shiftFormula property for columns



#### Jspreadsheet 8.1.7

* Better mobile navigation experience. Spreadsheet touch events updates.
* Formula picker



#### Jspreadsheet 8.1.0

* Fixes for filter + add/delete rows combination
* New property _rows[y].results: Boolean_ to identify records in the search/filter results
* beforeinit for Plugins
* Fixes for the programmatic set/reset freezeColumns
* Improvement of the CSS for freezeColumns + hidden index column
* Formulas on footers review



#### Jspreadsheet 8.0.61

* New spreadsheet formula picker component
* getRange method automatic order correction fix
* updateState to get the current selection



#### Jspreadsheet 8.0.58

* loadData to reset or reload the JavaScript grid data.
* Better id synchronization when a column is defined as primaryKey.
* spreadsheet.toolbar as a method.
* Fixes when data cell === null and viewport is active to avoid console error on scroll.



#### Jspreadsheet 8.0.57

* Internal automatic datatype identification for the spreadsheet: Json or Array based on column names
* getRange method to bring the selection as a range format.



#### Jspreadsheet 8.0.56

* New external javascript data grid formula picker
* Spreadsheet toolbars resize when open a new worksheet or viewport resize.



#### Jspreadsheet 8.0.55

* contextmenu types updates
* setData on readonly cells
* Copy and paste when filter/search is applied fixes



#### Jspreadsheet 8.0.51

* setData to adjust to different grid dimensions
* setRowId server callback to update row ids



#### Jspreadsheet 8.0.48

* getRowData returns a JSON or Array based on the initial data type
* Spreadsheet viewport fullscreen to cover all screen space
* Spreadsheet with empty data is now enabled
* It is now possible to delete the last row
* MinSpareRows and MinSpareCols on initialization
* Spreadsheet formula fixes



#### Jspreadsheet 8.0.46

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



#### Jspreadsheet 8.0.41

* Fixes for spreadsheet calendar mask
* Force Excel-like formulas on readonly cells on spreadsheet initialization



#### Jspreadsheet 8.0.31

* Spreadsheet viewport improvements
* Touch events



#### Jspreadsheet 8.0.26

* deleteRow rendering updates when using the spreadsheet viewport
* Border freeze
* Changing complex JSON data objects on insertRow



#### Jspreadsheet 8.0.15

* Autocast improvements;
* Formify integration;



#### Jspreadsheet 8.0.0

* Floating editor element, compatible with EMI
* Viewport loading navigation
* New formula engine
* New parent spreadsheet container
* Shared toolbar
* New contextmenu arguments
* New translation options
* New plugins and editors capabilities



#### Jexcel 7.11.8

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



#### Jexcel 7.8.2

* Filter for individual columns
* Update filters programmatically
* Validation property, native and custom rules
* Disabled internal sequence option for new records



#### Jexcel 7.7.9

* Custom divisor for options in the dropdown



#### Jexcel 7.7.2

* Toolbar with options
* Responsive autocomplete column
* textEditor to force input [input type='text'] for column type='number'



#### Jexcel 7.7.1

* New events to customize the search results: onbeforesearch and onsearch.



#### Jexcel 7.7.0

If you migrate from 7.6.1 to 7.7.0 and are dealing with the DOM elements of the tabs using el.children[0], that has been changed to el.tabs.headers.

* New tabs with navigation.



#### Jexcel 7.6.1

* Apply filters programmatically: filter(integer columnNumber, Object values)



#### Jexcel 7.4.2

* A new spreadsheet event: oncomments(DOMElement el, Object cells)



#### Jexcel 7.4.0

* New column methods: getColumnIdByName, getColumn, setColumn
* executeFormula with optional x, y references.



#### Jexcel 7.3.5

* debugFormulas: true



#### Jexcel 7.3.0

* InternationalKeyboard initialization property
* New jexcel_object class for external elements
* Better searching/filtering integration



#### Jexcel 7.2.0

* Automatic scroll during dragging or selection
* Freeze nested headers
* Freeze index numbers



#### Jexcel 7.1.6

* Wildcard domain certificate licenses
* Formula caching



#### Jexcel 7.1.0

* General formula engine refactoring
* Cross-worksheet formula updates and fixes
* Goto row method
* Merge selected cells



#### Jexcel 7.0.0

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



#### Jexcel 6

Not released to the public.



#### Jexcel 5.6.7

* setProperty to render changes in the column.



#### Jexcel 5.6.6

* Copy and paste formulas
* Formulas fixes on delete/insert rows
* setConfig to change dimensions
* setHeight to accept arrays of rows



#### Jexcel 5.6.1

* New flag and default: includeHiddenRowsOnCopy: false
* filterOptions with more obvious behavior



#### Jexcel 5.6.0

* Full screen with toolbars and worksheet tabs
* Worksheet new methods, and initial configuration
* Dropodwn with extra properties and filterOptions
* New toolbar with new default options



#### Jexcel 5.5.0

* New worksheet events
* New worksheet actions on contextmenu
* Security increased for formulas and editors
* Jsuites v3 integration
* Toolbars
* New cross sheet relation editor
* Formula security



#### Jexcel 5.0.0

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



#### Jexcel 4.0.1

* Freeze columns
* Resize multiple columns
* New smart key navigation
* New smart merge cell methods
* Support for large tables, only loads what is necessary when using lazyloading or pagination
* Faster formula engine
* New native formula methods
* Super event: centralized event handler method
* Easier backend integration



#### Jexcel 3.6.0

* Better formula parsing
* New events
* New initialization options
* General fixes



#### Jexcel 3.2.3

* getMeta, setMeta methods
* NPM package with jSuites
* General fixes



#### Jexcel 3.0.1

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



#### Jexcel 2.1.0

We are glad to bring you the latest jquery plugin version, with the following improvements:

* Mobile touch fixes
* Paste fixes & new CSV parser



#### Jexcel 2.0.0

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



#### Jexcel 1.5.7

* Checkbox column type improvements
* Destroy jquery table updates



#### Jexcel 1.5.1

* Spreadsheet data overflow and fixed headers.
* Navigation improvements



#### Jexcel 1.5.0

* Relative insertRow, deleteRow, insertColumn, deleteColumn.
* Undo/Redo action tracker for insertRow, deleteRow, insertColumn, deleteColumn, moveRow
* New formula column recursive chain
* New Bootstrap-like alternative design option.
* updateSettings updates



 
