title: Worksheets Properties, Methods and Events.
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, table, grid, events, worksheet support.
description: How to set up and handle worksheets programmatically. Learn more about all worksheets properties and settings.



# Worksheets

One of the most important changes in v8 is worksheet management. Now, there is a spreadsheet component that acts as the container for each new worksheet, which brings several methods, properties and events.  

## Documentation

### Initial Settings

Configure the behavior of the spreadsheet and worksheet management using the worksheet-related settings below.

| Property                            | Description                                                                                                       |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Spreadsheet properties**          |
| tabs: boolean\|object               | Show tabs and allow the user to create new worksheets. Default: false. It can be used with extended tabs options. |
| allowDeleteWorksheet: boolean       | Add a delete worksheet option to the contextMenu. Default: true                                                   |
| allowRenameWorksheet: boolean       | Add the rename worksheet option to the contextMenu. Default: true                                                 |
| allowMoveWorksheet: boolean         | Allow worksheet drag and drop options. Default: true                                                              |
| **Worksheet properties**            |
| worksheetId: string                 | Worksheet identification. Default: randomNumber                                                                   |
| worksheetName: string               | Worksheet title. Default: string + integer                                                                        |
| worksheetState: visible \| hidden   | Worksheet visibility state. Default: visible                                                                      |

 

### Methods

Available methods to interact programmatically with the worksheets.

| Property                                | Description                                                                                                                                       |
| ----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| createWorksheet(object) : object        | Add a new worksheet to the online spreadsheet based on a given configuration.<br/>`createWorksheet(Object configuration) : object`                |
| deleteWorksheet(number) : void          | Delete worksheet by position.<br/>`deleteWorksheet(Integer worksheetNumber) : boid`                                                               |
| getWorksheet(mixed) : worksheetPosition | Get the worksheet position by worksheet object or by the worksheetId.<br/>`getWorksheet(Object worksheetInstace \| String worksheetId) : number` |
| openWorksheet(number) : void            | Open the worksheet with position: worksheetNumber (starts on zero)<br/>`openWorksheet(Number worksheetPosition) : void`                           |
| renameWorksheet(number, string)         | Change a worksheet title.<br/>`renameWorksheet(Number worksheetNumber, String worksheetNewTitle) : void`                                          |
| moveWorksheet(number, number)           | Update the worksheet position.<br/>`moveWorksheet(Number fromPosition, Number toPosition) : void`                                                 |
| getWorksheetActive()                    | Get the current active worksheet number.<br/>`getWorksheetActive() : number`                                                                      |
| getWorksheetInstance(number)            | Get the worksheet instance by number<br/>`getWorksheetInstance(number) : object`                                                                  |

 

### Available events

Available events related to the worksheets.

| Event                   | Description                                                                                                                                                                                                                |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onopenworksheet         | `onopenworksheet(Object worksheet, Number worksheetNumber) : void`                                                                                                                                                         |
| onbeforecreateworksheet | Before creating a new worksheet, it is possible to overwrite the configuration for the new worksheet or cancel the operation (return false).<br/>`onbeforecreateworksheet(Object options, Number worksheetNumber) : mixed` |
| oncreateworksheet       | `oncreateworksheet(Object worksheetInstance, Object worksheetOptions, Number worksheetNumber) : void`                                                                                                                      |
| onrenameworksheet       | `onrenameworksheet(Object worksheetInstance, Number worksheetNumber, String newValue, String oldValue) : void;`                                                                                                            |
| ondeleteworksheet       | `ondeleteworksheet(Object oldWorksheetInstance, Number oldWorksheetNumber) : void`                                                                                                                                         |
| onmoveworksheet         | `onmoveworksheet(Object worksheetInstance, Number newPosition, Number oldPosition) : void`                                                                                                                                 |

 

## Examples

 

### Active worksheet

How to get the active worksheet number on a JSS spreadsheet.  

[See this example online](https://jsfiddle.net/spreadsheet/mjk5o9ch/)  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="button" value="Get active worksheet" id="getactivebtn"/>
<input type="button" value="Rename first worksheet" id="renamebtn"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    // Allow create a new tab button
    tabs: true,
    // Initial worksheet
    worksheets: [
        { minDimensions: [6,6] },
        { minDimensions: [6,6] },
    ],
});

document.getElementById("getactivebtn").onclick = () => alert(worksheets[0].parent.getWorksheetActive());
document.getElementById("renamebtn").onclick = () => worksheets[0].parent.renameWorksheet(0, 'Anything');
</script>
</html>
```
  

### Add new worksheet button

Allow users to add new worksheets to an existing spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    // Allow create a new tab button
    tabs: true,
    // Intercept the new worksheet and define the options for the new worksheet
    onbeforecreateworksheet: function() {
        let options = {
            minDimensions: [5,5],
        }
        return options;
    },
    // Run an event as soon the new worksheet is created
    onopenworksheet: function(element, instance, worksheetNumber) {
        console.log(element, instance, worksheetNumber);
    },
    // Initial worksheet
    worksheets: [
        {
            data: [
                ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
                ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
                ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
                ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"]
            ],
            columns: [
                { type: 'autonumber', title: 'Id' },
                { type: 'text', width: '350px', title: 'Title' },
                { type: 'text', width: '250px', title: 'Artist' },
             ]
        }
    ]
});
</script>
</html>
```
  

### Programmatic operations on worksheets

Create a new worksheet programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>

<input type="button" value="Create a new worksheet" id="createworksheet" />


<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    worksheets: [
        {
            minDimensions: [5,5],
            defaultColWidth: '200px',
            worksheetName: 'Example2',
        }
    ]
});

document.getElementById("createworksheet").onclick = () => spreadsheet[0].createWorksheet({ minDimensions: [5,5] });
</script>
</html>
```
  

### Formulas on worksheets Pro feature

With the Pro distribution, it is possible to execute formulas with variables from any other worksheet. The syntax follow the same standard as other spreadsheet software such as Google Sheets or Excel using the exclamation mark, for instance "Products!A2*10". 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    onload: function() {
        console.log('Ready');
    },
    worksheets: [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
            ],
            minDimensions: [5,5],
            defaultColWidth: '100px',
            worksheetName: 'Products',
        },
        {
            data: [
                ['20%', "=Products!D1"],
                ['20%', "=Products!D2"],
                ['20%', "=Products!D3"],
                ['20%', "=Products!D4"],
            ],
            minDimensions: [5,5],
            defaultColWidth: '100px',
            worksheetName: 'Profitability',
        }
    ]
});
</script>
</html>
```
  

### Worksheets customizations

Additional customizations are allowed using the extended tabs object declaration as example below.

| Property                     | Description                                                   |
| -----------------------------|---------------------------------------------------------------|
| allowCreate: boolean         | Show the create new tab button                                |
| allowChangePosition: boolean | Allow drag and drop of the headers to change the tab position |
| animation: boolean           | Allow the header border bottom animation.                     |
| hideHeaders: boolean         | Hide the tab headers if only one tab is present.              |
| padding: number              | Default padding content                                       |
| position: string             | Position of the headers: top \| bottom. Default: top         |

 A list of all properties are available in the Jsuites tabs section at <https://jsuites.net/docs/javascript-tabs> 

```html
<div id="spreadsheet"></div>
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: {
        allowCreate: true,
        allowChangePosition: true,
        animation: true,
        position: "bottom",
    },
    worksheets: [{
        minDimensions: [8,8],
    }],
});
</script>
```
 
