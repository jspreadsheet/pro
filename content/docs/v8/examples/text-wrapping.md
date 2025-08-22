title: Text Wrapping On The Worksheet Cells
keywords: Jspreadsheet, javascript, plugins, spreadsheet, full screen
description: A real example of text wrapping on the data grid cells.

# Data Grid Text Wrapping

The wordWrap true by default as shown below: 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Spyro Trilogy Reignited (PS4)', '29.99', 'Edition: Standard Edition\nSpyro`s back and he`s all scaled up!\nThe original roast master is back! Same sick burns, same smoldering attitude, now all scaled up in stunning HD. Spyro is bringing the heat like never before in the SpyroTM Reignited Trilogy game collection\nAll 3 original Spyro games fully remastered in HD\nIncludes Spyro the Dragon, Spyro 2: Ripto`s Rage! and Spyro: Year of the Dragon\n\n100+ levels, remastered with breathtaking graphical updates and improved gameplay controls'],
    ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Forget what you know\nTune in to the call of duty: Black ops four community reveal event: May 17, 2018'],
];

// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type:'text', width: '200px' },
        { type:'text' },
        { type:'text', width:'400px', align: 'left' },
    ]
});
</script>
</html>
```
 
