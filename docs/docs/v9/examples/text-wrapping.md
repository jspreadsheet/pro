title: Worksheet Cells: Text Wrapping
keywords: Jspreadsheet, javascript, plugins, spreadsheet, full screen
description: A real example of data grid text wrapping.



# Text wrapping

You can use the `wrap: true` to automatic wrapping.

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

let data = [
    [`Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto's Rage!, and Spyro: Year of the Dragon`],
    ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
];

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type:'text', width: '200px' },
        { type:'text' },
        { type:'text', width:'400px', align: 'left', wrap: true },
    ]
});
</script>
</html>
```
 
