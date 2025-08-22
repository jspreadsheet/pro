title: Jquery Spreadsheet - Simplify Data Management and Visualization
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, Data Grid, jQuery Spreadsheet, Web Application, Web Development
description: A quick and straightforward example showcasing the integration of Jspreadsheet with jQuery.

# Jquery spreadsheet

To develop a web-based spreadsheet using jQuery and Jspreadsheet, it is necessary to incorporate the following polyfill starting from version 10. 

{.ignore-execution}
```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" onclick="$('#spreadsheet').jspreadsheet('insertRow')" />
<input type="button" value="Add new col" onclick="$('#spreadsheet').jspreadsheet('insertColumn')">

<script>
// Polyfill
(function($){
    $.fn.jspreadsheet = $.fn.jexcel = function(mixed) {
        let container = $(this).get(0);
        if (! container.jspreadsheet) {
            return jspreadsheet($(this).get(0), arguments[0]);
        } else {
            if (typeof(arguments[0]) == 'number') {
                let n = arguments[0];
                let i = 2;
            } else {
                let n = 0;
                let i = 1;
            }
            return container.jspreadsheet[n][mixed].apply(
                container.jspreadsheet[n],
                Array.prototype.slice.call(arguments, i)
            );
        }
    };
})(jQuery);


$('#spreadsheet').jspreadsheet({
    worksheets: [{
        minDimensions:[8,10],
    }],
    license: '###license###'
});
</script>
</html>
```
 
