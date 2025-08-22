title: Jspreadsheet Data Grid Keyboard Shortcuts
keywords: Jspreadsheet, Jexcel, JavaScript, Loan Calculator Spreadsheet, Web-based Applications, Keyboard Shortcuts
description: A list of shortcuts available on jspreadsheet data grids.

# Data Grid Keyboard Shortcuts

This section provides more information on the existing keyboard shortcuts and how to customize them in Jspreadsheet. Version 11 introduces a shortcut configuration tool allowing developers to create or adjust shortcuts to suit specific application requirements.

> **Important**
> Shortcuts are only applicable in the non-editing state. In editing mode, you must handle the component's keyboard events directly. 

## Documentation

### Methods

| Method | Description                                                                                                 |
|--------|-------------------------------------------------------------------------------------------------------------|
| set    | Add or reset a shortcut.<br/>jspreadsheet.shortcuts.set(shortcut: String, method: Function \| null) => void |

### Existing shortcuts

Below is a table showcasing the keyboard shortcuts currently available.

| Shortcut                     | Description                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------|
| **ESC**                      | Cancel the cell edition or close the filter modal (when applicable).                                 |
| **ENTER**                    | Finalize edition (when applicable), create a new row (when applicable), and move selection down.     |
| **TAB**                      | Finalize edition (when applicable), create a new column (when applicable), and move selection right. |
| **SPACE**                    | Toggle checkbox or radio values (when applicable).                                                   |
| **DEL**                      | Clear the cell value.                                                                                |
| **F2**                       | Start edition.                                                                                       |
| **PAGE UP**                  | Move to the next page up.                                                                            |
| **PAGE DOWN**                | Move to the next page down.                                                                          |
| **ALT + PAGE UP**            | Move to the next page left.                                                                          |
| **ALT + PAGE DOWN**          | Move to the next page right.                                                                         |
| **SHIFT + ENTER**            | Finalize edition (when applicable) and move selection up.                                            |
| **SHIFT + TAB**              | Finalize edition (when applicable) and move selection left.                                          |
| **ARROW UP**                 | Finalize edition (when applicable) and move selection one cell up.                                   |
| **ARROW DOWN**               | Finalize edition (when applicable) and move selection one cell down.                                 |
| **ARROW LEFT**               | Finalize edition (when applicable) and move selection one cell left.                                 |
| **ARROW RIGHT**              | Finalize edition (when applicable) and move selection one cell right.                                |
| **ALT + ARROW DOWN**         | Show filter modal when filter is active.                                                             |
| **CTRL + ARROW UP**          | Finalize edition (when applicable) and move selection to the top of the column.                      |
| **CTRL + ARROW DOWN**        | Finalize edition (when applicable) and move selection to the bottom of the column.                   |
| **CTRL + ARROW LEFT**        | Finalize edition (when applicable) and move selection to the left of the row.                        |
| **CTRL + ARROW RIGHT**       | Finalize edition (when applicable) and move selection to the right of the row.                       |
| **CTRL+A**                   | Select all cells.                                                                                    |
| **CTRL+P**                   | Open the Print modal (when the Print extension is enabled).                                          |
| **CTRL+F**                   | Open the search input or the Advance Search modal (when the Search extension is enabled).            |
| **CTRL+S**                   | Download a CSV or a XLSX (when the Render extension is enabled).                                     |
| **CTRL+Y**                   | Redo.                                                                                                |
| **CTRL+Z**                   | Undo.                                                                                                |
| **CTRL+C**                   | Copy.                                                                                                |
| **CTRL+V**                   | Paste.                                                                                               |
| **CTRL+X**                   | Cut.                                                                                                 |
| **CTRL + Minus (on row)**    | Delete a row when the row is selected.                                                               |
| **CTRL + Minus (on header)** | Delete a column when the header is selected.                                                         |
| **CTRL + Enter**             | Paste                                                                                                |
| **ALT + ARROW LEFT**         | Open the previous worksheet.                                                                         |
| **ALT + ARROW RIGHT**        | Open the next worksheet.                                                                             |
| **SHIFT + F11**              | Create a new worksheet.                                                                              |

## Custom Shortcuts

Jspreadsheet version 11 features a new shortcut management. This feature allows developers to tailor or add keyboard shortcuts to customize jspreadsheet to their application needs.

### Shortcut Execution Context

Upon activating a keyboard shortcut, Jspreadsheet verifies the presence of a corresponding custom declaration. If a match is found, the shortcut is executed with this context linked to the specific worksheet where the action is performed.

#### Existing Declarations

{.ignore}
```javascript
let paste = function(e) {
    if (! e.target.classList.contains('jss_object')) {
        let s = Selection.get.call(this);
        if (s) {
            let worksheet = this;
            navigator.clipboard.readText().then(function(text) {
                if (text) {
                    worksheet.paste(s[0], s[1], text, true);
                }
            });
        }
    }
}

let shortcuts = {
    ctrlKey: {
        A: function() { this.selectAll(); },
        C: function() { this.copy(); },
        X: function() { this.cut(); },
        P: function() { this.print(); },
        S: function() { this.download(); },
        Z: function() { this.undo(); },
        Y: function() { this.redo(); },
        F: function() { this.showSearch(); },
        '-': function(e, event) {
            if (event.role === 'row') {
                this.deleteRow();
            } else if (event.role === 'header') {
                this.deleteColumn();
            }
        },
        ENTER: paste
    },
    shiftKey: {}, // If you have shiftKey shortcuts, add them here
    PAGEUP: function() { this.pageUp(); },
    PAGEDOWN: function() { this.pageDown(); },
    ARROWUP: function(e) { this.up(e.shiftKey, (e.ctrlKey || e.metaKey)); },
    ARROWDOWN: function(e) {
        let col = this.selectedCell[e.shiftKey ? 2 : 0];
        if (e.altKey && (this.options.filters || (this.cols[col] && this.cols[col].filter))) {
            this.openFilter(col);
        } else {
            this.down(e.shiftKey, (e.ctrlKey || e.metaKey));
        }
    },
    ARROWLEFT: function(e) { this.left(e.shiftKey, (e.ctrlKey || e.metaKey)); },
    ARROWRIGHT: function(e) { this.right(e.shiftKey, (e.ctrlKey || e.metaKey)); },
    HOME: function(e) { this.first(e.shiftKey, (e.ctrlKey || e.metaKey)); },
    END: function(e) { this.last(e.shiftKey, (e.ctrlKey || e.metaKey)); },
    ENTER: function(e) {
        if (e.shiftKey) {
            this.up();
        } else {
            if (this.selectedCell[1] === this.rows.length-1 &&
                this.options.allowManualInsertRow !== false) {
                // Create a new row
                this.insertRow();
            }
            this.down();
        }
    },
    TAB: function(e) {
        if (e.shiftKey) {
            this.left();
        } else {
            if (this.selectedCell[0] === this.cols.length-1 &&
                this.options.allowManualInsertColumn !== false) {
                // Create a new row
                this.insertColumn();
            }
            this.right();
        }
    },
    DELETE: function() {
        this.setValue(this.getSelected(), '');
    },
    F2: function(e) {
        if (this.selectedCell && this.selectedCell.length) {
            let cell = this.getCell(...this.selectedCell);
            if (cell) {
                this.openEditor(cell, false, e);
            }
        }
    }
}
```

### Declare a New Shortcut

To add a new custom shortcut in Jspreadsheet to trigger a custom plugin to print the spreadsheet content, you'll need to define the shortcut as the example below:

{.ignore}
```javascript
jspreadsheet.shortcuts.set('ctrlKey.P', function(e) {
    // This will be the worksheet
    let worksheet = this;
    // Get the worksheet data
    let data = worksheet.getData();
    // Call custom plugin
    myCustomPrintPlugin(data);
});

// Apply bold to the data grid selected cells
jspreadsheet.shortcuts.set('ctrlKey.B', function(e) {
    // This will be the worksheet
    let worksheet = this;
    // Apply bold
    worksheet.setStyle(worksheet.getSelected(), 'font-weight', 'bold');
});
```

### Remove an Existing Shortcut

You can disable a shortcut declaring the shortcut as null.

{.ignore}
```javascript
// Remove the shortcut
jspreadsheet.shortcuts.set('ctrlKey.A', null);
```