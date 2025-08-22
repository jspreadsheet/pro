title: Jquery spreadsheet

keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and Jquery
description: An example of how to integrate Jspreadsheet with jQuery. Create an online spreadsheet with Jquery

# Jquery integration

The native support for jQuery has been discontinued with the release of version 10. However, you can still incorporate jQuery into your codebase by adding the following polyfill. 

## Jquery polyfill


{.ignore}
```javascript
// Jquery Support
if (typeof(jQuery) !== 'undefined') {
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
}
```
 
