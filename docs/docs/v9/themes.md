title: Jspreadsheet Theme Editor
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, theme editor
description: Customize the spreadsheet styling using the online theme editor.

# Spreadsheet theme editor

The online spreadsheet color theme editor

<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.themes.css" type="text/css" />


<div class="section" load-themes>
<div class="section-content theme-editor">

<div class='line'>
    <div class='row start'>
        <div class='column center p6 small'>
            <div class='theme' data-theme='default' onclick='self.setTheme(this)' style='background-color:#f3f3f3'></div> Default
        </div><div class='column center p6 small'>
            <div class='theme' data-theme='dark' onclick='self.setTheme(this)' style='background-color:#313131'></div> Dark
        </div>
    </div>
</div>

<div class='row start'>

<div class='column'>
<div class='p10'>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='header_color' style='margin-right:5px'></div> Header color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='header_color_highlighted' style='margin-right:5px'></div> Header color highlighted
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='header_background' style='margin-right:5px'></div> Header background color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='header_background_highlighted' style='margin-right:5px'></div> Header background color highlighted
        </div>
    </div>
</div>

<div class='p10'>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='content_color' style='margin-right:5px'></div> Content color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='content_color_highlighted' style='margin-right:5px'></div> Content color highlighted
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='content_background' style='margin-right:5px'></div> Content background color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='content_background_highlighted' style='margin-right:5px'></div> Content background color highlighted
        </div>
    </div>
</div>
</div>
<div class='column'>

<div class='p10'>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='menu_color' style='margin-right:5px'></div> Menu color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='menu_color_highlighted' style='margin-right:5px'></div> Menu color highlighted
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='menu_background' style='margin-right:5px'></div> Menu background color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='menu_background_highlighted' style='margin-right:5px'></div> Menu background color highlighted
        </div>
    </div>
</div>

<div class='p10'>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='border_color' style='margin-right:5px'></div> Border color
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='border_color_highlighted' style='margin-right:5px'></div> Border color highlighted
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='cursor' style='margin-right:5px'></div> Jexcel cursor
        </div>
    </div>
    <div class='p4'>
        <div class='colorpicker row start'> 
            <div id='active_color' style='margin-right:5px'></div> Active color
        </div>
    </div>
</div>

</div>
</div>

<br>

<br><br>


```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.themes.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />


<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10,10], }
    ]
});
</script>
```