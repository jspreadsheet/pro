title: Jspreadsheet Namespaces
keywords: Jspreadsheet, zoom in and zoom out, data grid zoom
description: Learn more about the jspreadsheet namespaces. Group spreadsheet to help on cross worksheet calculations, name conflicts and more.

# Namespaces

Version 11 of Jspreadsheet introduces the concept of namespaces, aimed at organizing multiple spreadsheet instances within the same context.  With namespaces, calculations across spreadsheets are confined to those within the same namespace, allowing for identical worksheet names across different instances without affecting conflicting during cross-spreadsheet computations.


## Documentation

This concept is very important when dealing with the `jspreadsheet/server` extension, since your server can manage hundreds of worksheets with the same name. The workspace should be unique, and if not defined JSS will generate a random GUID value for each new spreadsheet.

### Settings

| Shortcut          | Description                                                       |
|-------------------|-------------------------------------------------------------------|
| namespace: string | Define the workspace scope of a spreadsheet. Default: random guid |

## Example

### Multiple spreadsheet calculations

In the following example, the second spreadsheet is configured to seamlessly reference data from an external worksheet, avoiding naming conflicts. Despite the last spreadsheet sharing the same worksheet name, it resides in a different namespace, preventing any interference with cross-spreadsheet calculations.

{.ignore}
```javascript
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
        ],
        worksheetName: 'Sheet1',
    }],
    namespace: 'c4b0065e-d777-4b9b-b89f-1c03c01ccf96',
});

// Create a second spreadsheet in the same workspace
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        data: [
            ['Total Tax', '=SUM(sheet1!c1, sheet1!c2)*0.2'],
        ],
        worksheetName: 'Sheet2',
    }],
    namespace: 'c4b0065e-d777-4b9b-b89f-1c03c01ccf96',
});

// Create a new spreadsheet in a different worspace
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [
        {
            data: [
                ['Test', '=SUM(sheet2!a1)*0.2'],
            ],
            worksheetName: 'Sheet1',
        },
        {
            data: [
                [1,2,3],
            ],
            worksheetName: 'Sheet2',
        }
    ],
    namespace: 'c5551309-279c-4951-a948-9498dcc1d10b',
});
```


