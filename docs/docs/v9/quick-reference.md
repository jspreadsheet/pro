title: The JavaScript Spreadsheet Quick Reference
keywords: Jspreadsheet, Jexcel, jquery spreadsheet, react spreadsheet, angular spreadsheet, excel-like, spreadsheet, table, Jspreadsheet documentation
description: A quick reference summary with all spreadsheet methods, variables, events and data grid settings.



# Quick reference

JSS Spreadsheet @types definitions 

```typescript
interface Tabs {
    /** Allow to create new tabs */
    allowCreate?: boolean;
    /** Hide headers */
    hideHeaders?: boolean;
    /** Allow drag and drop to change tabs position */
    allowChangePosition?: boolean;
}

interface Toolbar {
    /** Array of items for the toolbar */
    items: Array<ToolbarItem>;
    /** Responsive toolbar. Default: true. */
    responsive?: boolean;
}

interface ToolbarItem {
    /** Toolbar item type */
    type?: 'icon' | 'divisor' | 'label' | 'select';
    /** Content of the toolbar element */
    content?: string;
    /** Tooltip for the toolbar element */
    tooltip?: string;
    /** Toolbar element width */
    width?: number;
    /** The initial selected option for the type: select */
    value?: string;
    /** Render method parser for the elements in the dropdown when type: select */
    render?: Function;
    /** When a item is clicked */
    onclick?: Function;
    /** For the type select when a new item is selected */
    onchange?: Function;
    /** To update the state of this item **/
    updateState?: Function;
}

interface Dropdown {
    /** Render type: default | picker | searchbar */
    type?: 'default' | 'picker' | 'searchbar';
    /** Dropdown input placeholder */
    placeholder?: string;
    /** The user can add new options to the dropdown. */
    newOptions?: boolean;
    /** Enabled the remote search features. */
    remoteSearch?: boolean;
    /** Remote backend to respond to the search. */
    url?: string;
    /** When the user add a new item to the dropdown. */
    oninsert?: Function;
}

interface DropdownItem {
    /** Value of the selected item. */
    id?: string | number;
    /** Label for the selected item. */
    name?: string;
    /** Description of the item */
    title?: string;
    /** Icon of the item */
    image?: string;
    /** Name of the group where the item belongs to */
    group?: string;
    /** Keywords to help finding one item */
    synonym?: Array<string>;
    /** Item is disabled */
    disabled?: boolean;
    /** Color for the item */
    color?: string;
}

interface ContextmenuItem {
    /** Context menu item type: line | divisor | default */
    type?: 'line' | 'divisor' | 'default';
    /** Context menu item title */
    title: string;
    /** Context menu icon key. (Material icon key icon identification) */
    icon?: string;
    /** HTML id property of the item DOM element */
    id?: string;
    /** Item is disabled */
    disabled?: boolean;
    /** Onclick event for the contextmenu item */
    onclick?: (instance: object, e: MouseEvent) => void;
    /** A short description or instruction for the item. Normally a shortcut. Ex. CTRL + C */
    shortcut?: string;
    /** Show this text when the user mouse over the element */
    tooltip?: string;
    /** Subm menu */
    submenu?: Array<ContextmenuItem>;
}

interface Contextmenu {
    /** The contextmenu menu */
    (worksheet: worksheetInstance, x: number, y: number, e: MouseEvent, items: Array<ContextmenuItem>, section: string, section_argument1?: any, section_argument2?: any) : Array<ContextmenuItem> | boolean;
}

interface Calendar {
    /** Render type. Default: 'default' */
    type?: 'default' | 'year-month-picker';
    /** Disable the dates out of the defined range. */
    validRange?: Array<number>;
    /** The calendar starts in a day of week (0 for Sunday - 6 for Saturday). Default: 0 (Sunday) */
    format?: string;
    /** Calendar input is readonly */
    readonly?: boolean;
    /** Select today automatically when no date value is defined. */
    today?: boolean;
    /** Show hour and minute dropdown. */
    time?: boolean;
    /** Show reset button. Default: true */
    resetButton?: boolean;
    /** Calendar input placeholder. */
    placeholder?: string;
}

interface Column {
    /** Define the column type. Can be a string to define a native editor, or a method to define the custom editor plugin. */
    type?: Editor | 'autocomplete' | 'calendar' | 'checkbox' | 'color' | 'dropdown' | 'hidden' | 'html' | 'image' | 'numeric' | 'radio' | 'text';
    /** Column title */
    title?: string;
    /** Name or a path of a property when the data is a JSON object. */
    name?: string;
    /** Define the onmouseover tooltip for the column header. */
    tooltip?: string;
    /** Width of the column */
    width?: number;
    /** Visibility of a column */
    visible?: boolean,
    /** Column alignment. Default: center */
    align?: 'center' | 'left' | 'right' | 'justify';
    /** It is a method to overwrite the column definitions in real-time just before the column edition. */
    filterOptions?: Function;
    /** Load the items from the dropdown from a remote URL. */
    url?: string;
    /** Define the items in the dropdown and autocomplete column type. */
    source?: Array<DropdownItem> | Array<string> | Array<number>;
    /** Autocomplete: boolean */
    autocomplete?: boolean;
    /** Define the dropdown or autocomplete to accept multiple options. */
    multiple?: boolean;
    /** Define the dropdown separator for multiple dropdown options. Default ; */
    delimiter?: string;
    /** Define the input mask for the data cell. @see https://jsuites.net/docs/javascript-mask */
    mask?: string;
    /** Decimal representation character. */
    decimal?: '.' | ',';
    /** Truncate the string in the cell by any number of characters. */
    truncate?: number,
    /** Disable the mask when editing. */
    disabledMaskOnEdition?: boolean;
    /** It defines a renderer method or rule for the cell content. */
    render?: string | Function;
    /** Define the format of the date or numbers in the cell. Default for the calendar: DD/MM/YYYY */
    format?: string;
    /** Define the column as primaryKey. */
    primaryKey?: boolean;
    /** Extended configuration for one column. */
    options?: Calendar | Dropdown;
    /** The column is read-only */
    readOnly?: boolean;
    /** Process the raw data when copy or download. Default: true */
    process?: boolean;
    /** Try to cast numbers from a cell text. Default: true */
    autoCasting?: boolean;
    /** Shift formula when copy and pasting. This option is only valid for custom column type. Default: false */
    shiftFormula?: boolean;
    /** Wrap the text in the column */
    wrap?: boolean;
    /** Rotate text value between -90 and 90. Default: null */
    rotate?: number;
    /** CSS odd even background color. Default: false */
    zebra?: boolean;
}

interface Row {
    /** Row height in pixels. */
    height?: number;
    /** Row identification. */
    title?: string;
}

interface Editor {
    /** createCell  When a new cell is created. */
    createCell: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
    /** updateCell  When the cell value changes. */
    updateCell: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
    /** openEditor  When the user starts the edition of a cell. */
    openEditor: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
    /** closeEditor When the user finalizes the edition of a cell. */
    closeEditor: (cell: HTMLElement, confirmChanges: boolean, x: number, y: number, instance: object, options: object) => any;
    /** When a cell is destroyed. */
    destroyCell: (cell: HTMLElement, x: number, y: number, instance: object) => void;
    /** Apply updates when the properties of a cell or column is changed. */
    updateProperty: (x: number, y: number, instance: object, options: object) => void;
    /** Transform the raw data into processed data. It will shown a text instead of an id in the type dropdown for example. */
    get: (options: object, value: any) => String
}

interface Plugin {
    /** When a new worksheet is added. */
    beforeinit?: (worksheet: Object) => void;
    /** When a new worksheet is added. */
    init?: (worksheet: Object) => void;
    /** It would receive a call for every spreadsheet event. */
    onevent?: (event: String, a?: any, b?: any, c?: any, d?: any) => void;
    /** When the spreadsheet needs to save something in the server. */
    persistence?: (method: String, args: Object) => void;
    /** When the user opens the context menu. */
    contextMenu?: (instance: Object, x: number, y: number, e: MouseEvent, items:Array<ContextmenuItem> , section: String, a: any, b?: any) => void;
    /** When the toolbar is create and clicked. */
    toolbar?: (instance: Object, toolbar: Toolbar) => void;
}

interface Nested {
    /** Nested header title */
    title?: string;
    /** Nested header tooltip */
    tooltip?: string;
    /** Nested header colspan */
    colspan?: number;
}

interface Spreadsheet {
    /** Your application name */
    application?: string;
    /** Render a remote spreadsheet from Jspreadsheet Cloud, which is a serveless hosting service. That can be generate at https://jspreadsheet.com/cloud */
    cloud?: string;
    /** DOM element for binding the javascript events. This property is normally used when JSS is running as a web component. */
    root?: HTMLElement;
    /** Global defined names. It defines global range variables. **/
    definedNames?: Record<string, string>,
    /** Global sorting handler. **/
    sorting?: (direction: boolean, column: number) => number;
    /** Remote URL for the persistence server **/
    server?: string;
    /** Toolbar */
    toolbar?: boolean | Toolbar | Function;
    /**  Allow table edition */
    editable?: boolean;
    /** Allow data export */
    allowExport?: boolean;
    /** Include the table headers in the first row of the data */
    includeHeadersOnDownload?: boolean;
    /** Force update on paste for read-only cells */
    forceUpdateOnPaste?: boolean;
    /** Enable loading spin when loading data. Default: false. */
    loadingSpin?: boolean;
    /** Render jspreadsheet spreadsheet on full screen mode. Default: false */
    fullscreen?: boolean;
    /** Make sure the formulas are capital letter. Default: true */
    secureFormulas?: boolean;
    /** Enable formula debug. Default: false **/
    debugFormulas?: boolean,
    /** Execute formulas. Default: true */
    parseFormulas?: boolean;
    /** Disable the formula editor. Default: true **/
    editorFormulas?: boolean;
    /** Auto increment cell data when using the corner copy, including formulas, numbers and dates. Default: true */
    autoIncrement?: boolean;
    /** Try to cast numbers from cell values when executing formulas. Default: true */
    autoCasting?: boolean;
    /** Remove any HTML from the data and headers. Default: true */
    stripHTML?: boolean;
    /** Allow tabs. Default: false */
    tabs?: boolean | Tabs;
    /** Allow the user to delete worksheets. Default: true */
    allowDeleteWorksheet?: boolean;
    /** Allow the user to rename worksheets. Default: true */
    allowRenameWorksheet?: boolean;
    /** Allow the user to drag and drop the worksheets. Default: true */
    allowMoveWorksheet?: boolean;
    /** Move the cursor down when pressing enter during edition. Default: true */
    moveDownOnEnter?: boolean;
    /** This method is called when the data in the spreadsheet is ready. */
    onload?: (spreadsheet: spreadsheetInstance) => void;
    /** Spreadsheet is clicked **/
    onclick?: (worksheet: worksheetInstance, section: string, x: number, y: number, event: object) => void;
    /** When undo is applied */
    onundo?: (worksheet: worksheetInstance, historyRecord: object) => void;
    /** When redo is applied */
    onredo?: (worksheet: worksheetInstance, historyRecord: object) => void;
    /** Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false. */
    onbeforesave?: (spreadsheet: spreadsheetInstance, worksheet: worksheetInstance, data: object) => boolean | object;
    /** After something is saved */
    onsave?: (spreadsheet: spreadsheetInstance, worksheet: worksheetInstance, data: Array<any>) => void;
    /** Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. */
    onbeforechange?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, value: any) => boolean | any;
    /** After a column value is changed. */
    onchange?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, newValue: any, oldValue: any) => void;
    /** Event: onafterchanges(jspreadsheetHTMLElement, jspreadsheetInstance) */
    onafterchanges?: (worksheet: worksheetInstance, records: Array<any>) => void;
    /** When a copy is performed in the spreadsheet. Any string returned will overwrite the user data or return null to progress with the default behavior. */
    oncopy?: (worksheet: worksheetInstance, selectedCells: Array<number>, data: string) => boolean | string;
    /** Before the paste action is performed. Can return parsed or filtered data. It is possible to cancel the action when the return is false. */
    onbeforepaste?: (worksheet: worksheetInstance, data: Array<any>, x: number, y: number, style: []) => boolean | [];
    /** After a paste action is performed in the spreadsheet. */
    onpaste?: (worksheet: worksheetInstance, records: Array<any>) => void;
    /** Before a new row is inserted. You can cancel the insert event by returning false. */
    onbeforeinsertrow?: (worksheet: worksheetInstance, rowNumber: number, numOfRows: number, insertBefore: boolean) => boolean | void;
    /** After a new row is inserted. */
    oninsertrow?: (worksheet: worksheetInstance, rowNumber: number, numOfRows: number, rowData: [], insertBefore: boolean) => void;
    /** Before a row is deleted. You can cancel the delete event by returning false. */
    onbeforedeleterow?: (worksheet: worksheetInstance, rowNumber: number, numOfRows: number) => boolean | void;
    /** After a row is excluded. */
    ondeleterow?: (worksheet: worksheetInstance, rowNumber: number, numOfRows: number, rowHTMLElements: [], rowData: [], cellAttributes: []) => void;
    /** Before a new column is inserted. You can cancel the insert event by returning false. */
    onbeforeinsertcolumn?: (worksheet: worksheetInstance, columnNumber: number, numOfColumns: number, insertBefore: boolean) => boolean | void;
    /** After a new column is inserted. */
    oninsertcolumn?: (worksheet: worksheetInstance, columnNumber: number, numOfColumns: number, historyRecords: [], insertBefore: boolean) => void;
    /** Before a column is excluded. You can cancel the insert event by returning false. */
    onbeforedeletecolumn?: (worksheet: worksheetInstance, columnNumber: number, numOfColumns: number) => boolean | void;
    /** After a column is excluded. */
    ondeletecolumn?: (worksheet: worksheetInstance, columnNumber: number, numOfColumns: number, affectedHTMLElements: [], historyProperties: [], cellAttributes: []) => void;
    /** After a row is moved to a new position. */
    onmoverow?: (worksheet: worksheetInstance, origin: number, destination: number) => void;
    /** After a column is moved to a new position. */
    onmovecolumn?: (worksheet: worksheetInstance, origin: number, destination: number) => void;
    /** After a height change for one or more rows. */
    onresizerow?: (worksheet: worksheetInstance, row: number | Array<number>, height: number | Array<number>, oldHeight: number | Array<number>) => void;
    /** After a column width change for one or more columns. */
    onresizecolumn?: (worksheet: worksheetInstance, column: number | Array<number>, width: number | Array<number>, oldWidth: number | Array<number>) => void;
    /** When the selection is changed. */
    onselection?: (worksheet: worksheetInstance, px: number, py: number, ux: number, uy: number, origin?: object) => void;
    /** Before a new comment is added or updated. Return false to cancel the event. */
    onbeforecomments?: (worksheet: worksheetInstance, cells: object) => boolean | void;
    /** After a new comment is added or updated. */
    oncomments?: (worksheet: worksheetInstance, newValues: object, previousValues: object) => void;
    /** It runs before sorting a column. It should return an array with a custom sorting or false to cancel the user action. */
    onbeforesort?: (worksheet: worksheetInstance, column: number, direction: number, newOrderValues: []) => boolean | [] | void;
    /** When a column is sorted. */
    onsort?: (worksheet: worksheetInstance, column: number, direction: number, newOrderValues: []) => void;
    /** When the spreadsheet gets the focus. */
    onfocus?: (worksheet: worksheetInstance) => void;
    /** When the spreadsheet loses the focus. */
    onblur?: (worksheet: worksheetInstance) => void;
    /** When merge cells is executed. */
    onmerge?: (worksheet: worksheetInstance, newValue: object, oldValue: object) => void;
    /** When the header title is changed. */
    onchangeheader?: (worksheet: worksheetInstance, column: number, newValue: string, oldValue: string) => void;
    /** When the footers are created or updated. */
    onchangefooter?: (worksheet: worksheetInstance, newValue: string, oldValue: string) => void;
    /** When the value in a cell footer is changed. */
    onchangefootervalue?: (worksheet: worksheetInstance, x: number, y: number, value: String) => void;
    /** On change nested headers */
    onchangenested?: (worksheet: worksheetInstance, options: object) => void;
    /** On change nested cell properties */
    onchangenestedcell?: (worksheet: worksheetInstance, x: number, y: number, properties: object) => void;
    /** When an editor is created. */
    oncreateeditor?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, element: HTMLElement, options: object) => void;
    /** When the editor is opened. **/
    oneditionstart?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number) => void;
    /** When the editor is closed. **/
    oneditionend?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, newValue: any, save: boolean) => void;
    /** When the style of a cell is changed. */
    onchangestyle?: (worksheet: worksheetInstance, newValue: object, oldValue: object) => void;
    /** When a cell meta information is added or updated. */
    onchangemeta?: (worksheet: worksheetInstance, newValue: object) => void;
    /** Before the page is changed. Can cancel the action when return is false. */
    onbeforechangepage?: (worksheet: worksheetInstance, pageNumber: number, oldPage: number, quantityPerPage: number) => boolean | void;
    /** When pagination is enabled and the user changes the page. */
    onchangepage?: (worksheet: worksheetInstance, pageNumber: number, oldPageNumber: number, quantityPerPage: number) => void;
    /** Add or change the options of a new worksheet. */
    onbeforecreateworksheet?: (worksheetOptions: Worksheet, position: number) => Object;
    /** When the user creates a new worksheet. */
    oncreateworksheet?: (worksheet: worksheetInstance, worksheetOptions: Worksheet, position: number) => void;
    /** When the user renames a worksheet. */
    onrenameworksheet?: (worksheet: worksheetInstance, position: number, newValue: string, oldValue: string) => void;
    /** When the user deletes a worksheet. */
    ondeleteworksheet?: (worksheet: worksheetInstance, position: number) => void;
    /** When the user updates the worksheet tab position. */
    onmoveworksheet?: (worksheet: worksheetInstance, from: number, to: number) => void;
    /** When the user opens a worksheet. */
    onopenworksheet?: (worksheet: worksheetInstance, index: number) => void;
    /** When there is a row id update */
    onchangerowid?: (worksheet: worksheetInstance, rows: []) => void;
    /** Action to be executed before searching. The accepted method return would be: null to continue with the default behavior, false to cancel the user action or an array with the row numbers to overwrite the default result. */
    onbeforesearch?: (worksheet: worksheetInstance, query: string, results: []) => [] | boolean | void;
    /** After the search is applied to the rows. */
    onsearch?: (worksheet: worksheetInstance, query: string, results: []) => void;
    /** Action to be executed before filtering rows. It can cancel the action by returning false. */
    onbeforefilter?: (worksheet: worksheetInstance, filters: [], data: []) => void;
    /** After the filter has been applied to the rows. */
    onfilter?: (worksheet: worksheetInstance, filters: [], data: []) => void;
    /** When a new cell is created */
    oncreatecell?: (worksheet: worksheetInstance, cell: HTMLElement, x: number, y: number, value: any) => void;
    /** When a new row is created */
    oncreaterow?: (worksheet: worksheetInstance, rowNumber: number, tr: HTMLElement) => void;
    /** When a new column is created */
    oncreatecolumn?: (worksheet: worksheetInstance, columnNumber: number, td: HTMLElement, options: Object) => void;
    /**
     * Before execute a formula.
     * @param {string} expression - formula to be executed.
     * @param {number} coordinate x - cell coordinates
     * @param {number} coordinate y
     * @return {any} Return false to cancel parsing. Return new parsed formula. Return void to continue with original formula
     */
    onbeforeformula?: (worksheet: worksheetInstance, expression: string, x: number, y: number) => string | false | void;
    /** Get the information about the expressions executed from the formula chain */
    onformulachain?: (worksheet: worksheetInstance, expressions: Array<object>) => void;
    /** Customize the items available when filter editor is open. */
    onopenfilter?: (worksheet: worksheetInstance, column: number, options: Array<object>) => void | Array<object>;
    /** When the viewport dimension is updated. */
    onresize?: (worksheet: worksheetInstance, w: number, h: number) => void
    /** Run every single table update action. Can bring performance issues if perform too much changes. */
    updateTable?: (worksheet: worksheetInstance, cell: Object, x: number, y: number, value: String) => void;
    /** Return false to cancel the contextMenu event, or return custom elements for the contextmenu. */
    contextMenu?: Contextmenu;
    /** The first row is the header titles when parsing a HTML table */
    parseTableFirstRowAsHeader?: boolean;
    /** Try to identify a column type when parsing a HTML table */
    parseTableAutoCellType?: boolean;
    /** Global cell wrapping. Default: false */
    wordWrap?: boolean;
    /** About information */
    about?: string | Function,
    /** License string */
    license?: string,
    /** Worksheets */
    worksheets?: Array<Worksheet>;
    /** Validations */
    validations?: any;
}

interface Worksheet {
    /** Logo URL **/
    logo?: string
    /** Load the data from an external server URL */
    url?: string;
    /** Persitence URL or true when the URL is the same of the URL of the data source */
    persistence?: string | boolean;
    /** Allow internal sequence for new rows */
    sequence?: boolean;
    /** Load the data into a new spreadsheet from an array of rows or objects */
    data?: Array<Array<any>> | Array<Record<string, any>>;
    /** Deprected. Please use the data property. */
    json?: Array<Record<string, any>>;
    /** Array with the rows properties definitions such as title, height. */
    rows?: Row[];
    /** The column properties define the behavior of a column and the associated editor */
    columns?: Array<Column>;
    /** Define the properties of a cell. This property overwrite the column definitions */
    cells?: Record<string, Column>;
    /** Role of this worksheet **/
    role?: string,
    /** Nested headers definition */
    nestedHeaders?: Array<Array<Nested>> | Array<Nested>;
    /** Default column width. Default: 50px */
    defaultColWidth?: number | string;
    /** Default row height. Default: null */
    defaultRowHeight?: number | string;
    /** Deprecated. The default alignment of a cell is defined by a CSS class from 8.2.0+ */
    defaultColAlign?: 'center' | 'left' | 'right' | 'justify';
    /** Minimum number of spare rows. Default: 0 */
    minSpareRows?: number;
    /** Minimum number of spare cols. Default: 0 */
    minSpareCols?: number;
    /** Minimum table dimensions: [numberOfColumns, numberOfRows] */
    minDimensions?: [number, number];
    /** CSV data source URL */
    csv?: string;
    /** CSV default filename for the jspreadsheet exports. Default: 'jspreadsheet' */
    csvFileName?: string;
    /** Consider first line as header. Default: true */
    csvHeaders?: boolean;
    /** Delimiter to consider when dealing with the CSV data. Default: ',' */
    csvDelimiter?: string;
    /** Allow column sorting */
    columnSorting?: boolean;
    /** Allow column dragging */
    columnDrag?: boolean;
    /** Allow column resizing */
    columnResize?: boolean;
    /** Allow row resizing */
    rowResize?: boolean;
    /** Allow row dragging */
    rowDrag?: boolean;
    /**  Allow table edition */
    editable?: boolean;
    /** Allow new rows */
    allowInsertRow?: boolean;
    /** Allow new rows to be added using tab key. Default: true */
    allowManualInsertRow?: boolean;
    /** Allow new columns to be added using enter key. Default: true */
    allowInsertColumn?: boolean;
    /** Allow new rows to be added via script. Default: true */
    allowManualInsertColumn?: boolean;
    /** Allow rows to be deleted. Default: true */
    allowDeleteRow?: boolean;
    /** Allow all rows to be deleted. Warning: no rows left can lead to undesirabled behavior. Default: false */
    allowDeletingAllRows?: boolean;
    /** Allow columns to be deleted. Default: true */
    allowDeleteColumn?: boolean;
    /** Allow rename column. Default: true */
    allowRenameColumn?: boolean;
    /** Allow users to add comments to the cells. Default: false */
    allowComments?: boolean;
    /** Corner selection and corner data cloning. Default: true */
    selectionCopy?: boolean;
    /** Merged cells. Default: null */
    mergeCells?: Record<string, any[]>;
    /** Allow search on the spreadsheet */
    search?: boolean;
    /** Activate pagination and defines the number of records per page. Default: false */
    pagination?: number;
    /** Dropdown for the user to change the number of records per page. Example: [10,25,50,100]. Default: false */
    paginationOptions?: boolean | Array<number>;
    /** Text Overflow. Default: false */
    textOverflow?: boolean;
    /** Table overflow. Default: false */
    tableOverflow?: boolean;
    /** Define the table overflow height. Example: '300px' */
    tableHeight?: number | string;
    /** Define the table overflow width. Example: '800px' */
    tableWidth?: number | string;
    /** Initial comments. Default: null */
    comments?: Record<string, string>;
    /** Initial meta information. Default: null */
    meta?: Record<string, any>;
    /** Style */
    style?: Record<string, string>;
    /** Freeze columns. Default: 0 */
    freezeColumns?: number;
    /** Initial sorting [colNumber, direction]. Default: null */
    orderBy?: [number, boolean];
    /** Worksheet Unique Id. **/
    worksheetId?: string;
    /** Worksheet Name. **/
    worksheetName?: string;
    /** Worksheet state: hidden | null. Hide a worksheet **/
    worksheetState?: 'hidden' | undefined;
    /** Enable the column filters */
    filters?: boolean;
    /** Footers */
    footers?: Array<any>;
    /** Apply mask on footers */
    applyMaskOnFooters?: boolean;
    /** Define options for the plugins. Each key should be the pluginName. */
    pluginOptions?: Record<string, any>;
    /** This is a internal controller for the spreadsheet locked properties. Please use editable to make it readonly. */
    locked?: boolean;
    /** Allow the selection of unlocked cells. Default: true. */
    selectUnLockedCells?: boolean;
    /** Allow the selection of locked cells. Default: true. */
    selectLockedCells?: boolean;
    /** Enable resizable worksheet in on or both direction (horizontal | vertical | both). Default: none */
    resize?: 'horizontal' | 'vertical' | 'both' | 'none' | undefined;
}

interface spreadsheetInstance {
    /** Spreadsheet configuration */
    config: Spreadsheet;
    /** Contextmenu HTMLElement */
    contextmenu: HTMLElement;
    /** Create a new worksheet from the given settings */
    createWorksheet: (options: Worksheet) => worksheetInstance;
    /** Delete an existing worksheet by its position */
    deleteWorksheet: (position: Number) => void;
    /** DOM Element */
    el: HTMLElement;
    /** DOM Element. Alias for el */
    element: HTMLElement;
    /** DOM Element container for the filters */
    filters: HTMLElement;
    /** Toggle the full screen mode */
    fullscreen: (state: Boolean) => void;
    /** Get the toolbar object definitions */
    getToolbar: Toolbar,
    /** Set the toolbar */
    setToolbar: (toolbar: Toolbar) => void;
    /** Show the toolbar for the worksheet */
    showToolbar: () => void;
    /** Hide the toolbar for the worksheet */
    hideToolbar: () => void;
    /** Get the worksheet by its id */
    getWorksheet: (id: String) => Number;
    /** Get the active worksheet when applicable */
    getWorksheetActive: () => number;
    /** Get the worksheet instance by its position */
    getWorksheetInstance: (position: Number) => worksheetInstance;
    /** HTMLElement Helper */
    helper: HTMLElement,
    /** Array with the history information */
    history: [];
    /** Internal history index position */
    historyIndex: Boolean;
    /** Ignore events */
    ignoreEvents: Boolean;
    /** Ignore history events */
    ignoreHistory: Boolean;
    /** Ignore persistence events */
    ignorePersistence: Boolean;
    /** HTMLElement editor container **/
    input: HTMLElement;
    /** HTMLElement loading element **/
    loading: HTMLElement;
    /** Rename an existing worksheet by its position */
    renameWorksheet: (position: Number, title: String) => void;
    /** Move the position of a worksheet tab */
    moveWorksheet: (from: Number, to: Number, updateDom: Boolean) => void;
    /** Open a worksheet */
    openWorksheet: (position: Number) => void;
    /** Get the worksheet name */
    getWorksheetName: () => String;
    /** Spreadsheet unique name */
    name: string;
    /** List of plugins loaded to the spreadsheet */
    plugins: Record<number, Plugin>;
    /** Processing flag. It would be true when the spreadsheet is loading. */
    processing: boolean;
    /** Show progressbar */
    progress: (state: boolean) => void;
    /** Queue of formulas used during the loading */
    queue: Array<string>;
    /** Undo */
    undo: () => void;
    /** Redo */
    redo: () => void;
    /** DOM Textarea helper */
    textarea: HTMLElement;
    /** DOM toolbar */
    toolbar: HTMLElement;
    /** Tools HTMLElement container */
    tools: HTMLElement;
    /** Worksheets container */
    worksheets: Array<Worksheet>;
}

interface worksheetInstance {
    /** Array with the borders information */
    borders: Array<any>;
    /** Close the editon for one cell */
    closeEditor: (cell: HTMLElement, save: boolean) => void;
    /** Close the filters */
    closeFilters: (update: boolean) => void;
    /** Array with the column width controllers */
    colgroup: [];
    /** Hold the colgroup container */
    colgroupContainer: HTMLElement;
    /** DOM Worksheet container */
    content: HTMLElement;
    /** Copy */
    copy: (cut?: boolean) => void;
    /** DOM Corner square */
    corner: HTMLElement;
    /** Create a new worksheet */
    createWorksheet: (worksheetOptions: Worksheet) => worksheetInstance;
    /** Internal selected cell */
    cursor: object;
    /** Cut */
    cut: () => void;
    /**
     * Get the worksheet data
     *
     * @param {boolean} only the selected cells
     * @param {boolean} get the raw or processed data
     * @param {string} Null the return will be an array. With this argument, the return will be a string separated by the character defined.
     * @return {array} array of data
     */
    data: (highlighted?: boolean, processedData?: boolean, delimiter?: string) => Array<Array<any>> | string
    /** Internal use control type to defined JSON or ARRAY. */
    dataType: boolean,
    /** Delete an existing column */
    deleteColumn: (columnnumber: number, numOfColumns?: number) => void;
    /** Delete an existing row */
    deleteRow: (rownumber: number, numOfRows?: number) => void;
    /** Destroy all merged cells */
    destroyMerged: () => void;
    /** Internal method: event dispatch controllers */
    dispatch: (event?: string) => void;
    /** Navigation down */
    down: (shiftKey?: boolean, ctrlKey?: boolean, jump?: boolean) => void;
    /** Download CSV */
    download: (includeHeaders?: boolean, processed?: boolean) => void;
    /** Edition controllers */
    edition: [];
    /** DOM Worksheet. Alias for worksheet */
    element: HTMLElement;
    /** Internal method: Execute a formula */
    executeFormula: (expression: string, x?: number, y?: number, caching?: boolean) => void;
    /** Navigation first */
    first: (shiftKey?: boolean, ctrlKey?: boolean) => void;
    /** Footers */
    footers: Record<string, string>;
    /** Formula chain. Internal use. */
    formula: [];
    /** Toggle the fullscreen mode */
    fullscreen: (state: boolean) => void;
    /** Get the border */
    getBorder: (alias: string) => object;
    /** Get the cell element from the cellname */
    getCell: (cellName: string) => HTMLElement | null;
    /** Get the cell element from its coordinates */
    getCellFromCoords: (x: number, y: number) => Array<any>;
    /** Get attributes from one cell when applicable */
    getCells: (cellName: string) => Column;
    /** Get the column object by its position */
    getColumn: (position: number) => Object;
    /** Get the column data from its number */
    getColumnData: (col: number, processed?: boolean) => Array<any>;
    /** Get the column position by its name */
    getColumnIdByName: (name: string) => number;
    /** Alias for getProperty */
    getColumnOptions: (x: number, y?: number) => Column;
    /** Get the comments from one cell. Example: getComments('A1') */
    getComments: (cellName?: string) => string;
    /** Get the worksheet settings */
    getConfig: () => Worksheet;
    /**
     * Get the worksheet data
     *
     * @param {boolean} only the selected cells
     * @param {boolean} get the raw or processed data
     * @param {string} delimiter to get the data as a string with columns separate by the char delimiter.
     * @param {boolean} get the data as a JSON object.
     * @return {array|object} array or object with the data
     */
    getData: (highlighted?: boolean, processed?: boolean, delimiter?: string, asJson?: boolean) => Array<any> | String;
    /** Get the defined name or defined names when key is null */
    getDefinedNames: (key?: string) => object;
    /** Internal method: Get the editor for one cell */
    getEditor: (x: number, y: number) => Object;
    /** Internal method: Get the filter */
    getFilter: (column: number) => Array<any>;
    /** Get the footers configuration */
    getFooter: () => Array<any>;
    /** Get the footer value */
    getFooterValue: (x: number, y: number) => any;
    /** Get the header title */
    getHeader: (columnNumber: number) => string;
    /** Get all header elements */
    getHeaders: (asArray: boolean) => Array<any>;
    /** Get the height of one row by its position when height is defined. */
    getHeight: (row?: number) => Array<number> | number;
    /** Get the highlighted coordinates **/
    getHighlighted: () => Array<any>;
    /** Get json */
    getJson: (h?: boolean, processed?: boolean) => any;
    /** Get the processed data cell shown to the user by the cell name */
    getLabel: (cellName: string) => Object;
    /** Get the processed data cell shown to the user by its coordinates */
    getLabelFromCoords: (x: number, y: number) => string[];
    /** Get the merged cells. Cell name: A1, A2, etc */
    getMerge: (cellName: string) => Object | Array<number>;
    /** Get one or all meta information for one cell. */
    getMeta: (cellName: string, property: string) => Object;
    /** Get the nested cells */
    getNestedCell: (x: number, y: number, properties?: any) => Object;
    /** Get the nested header columns */
    getNestedColumns: (x: number, y: number) => any[];
    /** Get the nested headers */
    getNestedHeaders: () => [];
    /** Get the next available number in the sequence */
    getNextSequence: () => number;
    /** Alias to getProperty */
    getOptions: (x: number, y?: number) => Column;
    /** Get the primaryKey column when applicable. */
    getPrimaryKey: () => number;
    /** Get processed data by the coordinates of the cell. Extended process a color, progressbar and rating as raw. */
    getProcessed: (x: number, y: number, extended?: boolean) => any;
    /** Get the properties for one column when only x is present or the cell when x and y is defined. */
    getProperties: (x: number, y?: number) => Column;
    /** Get the selection in a range format */
    getRange: () => string;
    /** Get a row data or meta information by Id. */
    getRowById: (row: number, element: boolean) => Object;
    /** Get the data from one row */
    getRowData: (row: number, processed: boolean) => any[];
    /** Get the row id from its position */
    getRowId: (row: number) => number;
    /** Get all selected cells */
    getSelected: (columnNameOnly: boolean) => any[];
    /** Get the selected columns. DOMElements or Indexes */
    getSelectedColumns: (indexes?: Boolean) => Array<HTMLElement> | Array<number>;
    /** Get the selected rows. DOMElements or Indexes */
    getSelectedRows: (indexes?: Boolean) => Array<HTMLElement> | Array<number>;
    /** Get the style from one cell. Ex. getStyle('A1') */
    getStyle: (cell: string) => Object;
    /** Get value by the cell name or object. The value can be the raw or processed value. */
    getValue: (cell: string, processed: boolean) => String;
    /** Get value by the coordinates. The value can be the raw or processed value. */
    getValueFromCoords: (x: number, y: number, processed: boolean) => any;
    /** Get the width of one column by index or all column width as an array when index is null. */
    getWidth: (x?: number) => Array<number> | number;
    /** Go to the row number, [col number] **/
    goto: (y: number, x?: number) => void;
    /** Hold the header container */
    headerContainer: HTMLElement;
    /** Array with the header DOM elements */
    headers: Array<HTMLElement>;
    /** Hide column */
    hideColumn: (column: number) => void;
    /** Hide the filters */
    hideFilter: () => void;
    /** Hide index column */
    hideIndex: () => void;
    /** Hide row */
    hideRow: (row: number) => void;
    /** Hide the search container */
    hideSearch: () => void;
    /** Add a new column */
    insertColumn: (numOfColumns: number, columnnumber: number, insertBefore: boolean, properties: Column, data: []) => void;
    /** Add a new row */
    insertRow: (numOfRows: number, rownumber: number, insertBefore: boolean, data: any[]) => void;
    /** Check if cell is attached to the DOM */
    isAttached: (x: number, y: number) => boolean;
    /** The worksheet is editable */
    isEditable: () => boolean;
    /** Check if cell is readonly or not */
    isReadOnly: (cell: Object) => boolean;
    /** Cell is selected */
    isSelected: (x: number, y: number) => boolean;
    /** Navigation last */
    last: () => void;
    /** Navigation left */
    left: () => void;
    /** Dynamic load data to the spreadsheet. This method does not trigger events or persistence and reset the spreadsheet. To persist use setData. */
    loadData: (data: any[]) => void;
    /** Change a column position */
    moveColumn: (from: number, to: number) => void;
    /** Change a row position */
    moveRow: (from: number, to: number) => void;
    /** Get the column name */
    name: (col: number) => string;
    /** Start the edition for one cell */
    openEditor: (cell: HTMLElement, empty?: boolean, mouseEvent?: Object) => void;
    /** Open the filters */
    openFilter: (column: number) => void;
    /** Worksheet configuration */
    options: Worksheet;
    /** Sort one column by its position. ASC (0) or DESC (1) */
    orderBy: (column: number, direction: boolean) => void;
    /** Change page when using pagination */
    page: (pagenumber: number) => void;
    /** Current page number */
    pagenumber: number;
    /** Pagination DOM container */
    pagination: Object;
    /** Spreadsheet object */
    parent: spreadsheetInstance;
    /** Paste */
    paste: (x: number, y: number, data: string) => void;
    /** Get the quantity of pages when pagination is active */
    quantityOfPages?: () => number;
    /** Array with the cell DOM elements */
    records: Array<HTMLElement>;
    /** Refresh the whole data or from a single row  */
    refresh: (y: number | undefined) => void;
    /** Refresh the borders by the border name */
    refreshBorders: (border?: string) => void;
    /** Refresh footers */
    refreshFooter: () => void;
    /** Remove the merged cells by the cell name */
    removeMerge: (cellName: String) => void;
    /** Reset the borders by name border name */
    resetBorders: (border: String, resetPosition: boolean) => void;
    /** Close the filters */
    resetFilters: () => void;
    /** Destroy the footers */
    resetFooter: () => void;
    /** Destroy freeze columns */
    resetFreezeColumns: () => void;
    /** Reset meta data */
    resetMeta: () => void;
    /** Reset nested headers */
    resetNestedHeaders: () => void;
    /** Reset the search */
    resetSearch: () => void;
    /** Reset the main selection */
    resetSelection: () => void;
    /** Get the style from one cell. Ex. resetStyle('A1') */
    resetStyle: (cell?: String) => void;
    /** DOM array of results */
    results: Array<number>;
    /** Navigation right */
    right: () => void;
    /** Rotate the spreadsheet cell text. cell = A1, B1... etc */
    rotate: (cell: string|string[], value:number) => void;
    /** DOM array of rows */
    rows: Array<HTMLElement>;
    /** Persistence helper method. The callback is executed with a JSON from the server */
    save: (url: String, data: Object, token?: String, callback?: (result: Object) => void) => void;
    /** ScrollX DOM Element */
    scrollX: HTMLElement;
    /** ScrollY DOM Element */
    scrollY: HTMLElement;
    /** Search for something */
    search: (str: String) => void;
    /** Search HTML container */
    searchContainer: HTMLElement;
    /** Search HTML input */
    searchInput: HTMLElement;
    /** Select All */
    selectAll: () => void;
    /** Selected cells */
    selectedCell: any[];
    /** Internal record id sequence */
    sequence: number;
    /** Set borders with a border name and color. */
    setBorder: (x1: number, y1: number, x2: number, y2: number, border?: string, color?: string) => void;
    /** Set attributes for one cell */
    setCells: (cellName: string, settings: Column) => void;
    /** Set the column data from its number */
    setColumnData: (col: number, data: any[], force?: boolean) => void;
    /** Set the comments for one cell */
    setComments: (cellName: String, comments: String) => void;
    /** Change the worksheet settings */
    setConfig: (config: Worksheet) => void;
    /** Set the worksheet data */
    setData: (data: any[]) => void;
    /** Set the defined name */
    setDefinedNames: (key: string, value: string) => void;
    /** Set filter */
    setFilter: (colnumber: number, keywords: any[]) => void;
    /** Set the footers */
    setFooter: (data: []) => void;
    /** Set the footer value */
    setFooterValue: (col: number, row: number, value: any) => void;
    /** Freeze x number of columns */
    setFreezeColumns: (num: number) => void;
    /** Set the header title */
    setHeader: (x: number, title: String) => void;
    /** Set the height of one row by its position */
    setHeight: (row: number, width: number) => void;
    /** Get the merged cells. Cellname: A1, A2, etc */
    setMerge: (cellName: String, colspan: number, rowspan: number, forceOverwrite?: boolean) => void;
    /** Get one or various meta information for one cell. */
    setMeta: (cell: string | object, property?: string, value?: string) => void;
    /** Set the nested headers */
    setNestedHeaders: (config: any[]) => void;
    /** Set plugins for the spreadsheet */
    setPlugins: (plugins: any[]) => void;
    /** Set the properties for one column */
    setProperties: (column: number, settings: Object) => void;
    /** Set or reset the cell as readonly */
    setReadOnly: (cell: Object, state: boolean) => void;
    /** Set the data from one row */
    setRowData: (row: number, data: any[], force: boolean) => void;
    /** Set the row id from its position */
    setRowId: (row: number, newId: number) => void;
    /** Set the style for one cell. Ex. setStyle('A1', 'background-color', 'red') */
    setStyle: (cell: string | object, property?: string, value?: string, forceOverwrite?: boolean) => void;
    /**
     * Set a cell value
     *
     * @param {mixed} cell destination cell
     * @param {string} value value
     * @param {string} force value over readonly cells
     * @return void
     */
    setValue: (cell: string, value?: String, forceOverwrite?: boolean) => void;
    /**
     * Set a cell value
     *
     * @param {number} x
     * @param {number} y
     * @param {string} value value
     * @param {string} force value over readonly cells
     * @return void
     */
    setValueFromCoords: (x: number, y: number, value: string, force?: boolean) => void;
    /** Set viewport width and height */
    setViewport: (width: number, height: number) => void;
    /** Set the width of one column by its position */
    setWidth: (col: number, width: number) => void;
    /** Show column */
    showColumn: (column: number) => void;
    /** Show filter controls */
    showFilter: () => void;
    /** Show index column */
    showIndex: () => void;
    /** Show row */
    showRow: (row: number) => void;
    /** Hide the search container */
    showSearch: () => void;
    /** DOM Worksheet table */
    table: HTMLElement;
    /** DOM Worksheet table thead */
    thead: HTMLElement;
    /** DOM Worksheet table tbody */
    tbody: HTMLElement;
    /** DOM Worksheet table tfoot */
    tfoot: HTMLElement;
    /** Verify if one col + row is merged and return or not the merge cell */
    isMerged: (x: number, y: number, getParent: boolean) => boolean | any[];
    /** Verify if the col has any merged cells */
    isColMerged: (x: number) => boolean;
    /** Verify if the col has any merged cells */
    isRowMerged: (y: number) => boolean;
    /** Navigation up */
    up: () => void;
    /**
     * Internal method: Internal method: Set a cell value
     *
     * @param {number} x
     * @param {number} y
     * @param {string} value value
     * @param {string} force value over readonly cells
     * @return void
     */
    updateCell: (x: number, y: number, value: string, force?: boolean) => void;
    /** Internal method: update cells in a batch */
    updateCells: (o: Object) => void;
    /** Update the selection based on two DOM cell selements */
    updateSelection: (el1: number, el2: number, origin: boolean) => void;
    /** Update the selection based on coordinates */
    updateSelectionFromCoords: (x1: number, y1: number, x2: number, y2: number, origin: boolean) => void;
    /** Getter/setter the value by coordinates */
    value?: (x: number, y: number, value?: any) => void;
    /** Which page the row number is */
    whichPage?: (row: number) => number;
}
```
 
