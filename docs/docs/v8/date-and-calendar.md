title: Javascript Calendar
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, javascript calendar
description: This section is dedicated to the calendar input type, date operations, formatting, and other related date features.



# Date and calendar

This section is dedicated to the calendar input type, the date operations and formatting and other related features, such as: 

  * Exploring the calendar picker editor configurations;
  * Validating a date value based on the value of other columns;
  * Exploring date operations with formulas;
  * Exploring formats with new valid tokens;
  * Translations.


## Calendar Editor

The calendar editor is a very flexible and responsive JavaScript plugin from [jsuites.net](https://jsuites.net). It brings many different configurations to adapt to pretty much any application needs. For more information, see: [JavaScript calendar](https://jsuites.net/docs/javascript-calendar).

| Parameter                             | Description                                                                                       |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| type: `default \| year-month-picker`  | Render type. `Default: default`                                                                   |
| validRange: `[String, String]`        | Disables the dates out of the defined range. `[Initial date, Final date]`                         |
| startingDay: `Number`                 | The day of the week the calendar starts on (0 for Sunday - 6 for Saturday). `Default: 0 (Sunday)` |
| format: `String`                      | Date format. `Default: YYYY-MM-DD`                                                                |
| readonly: `Boolean`                   | Calendar input is readonly. `Default: false`                                                      |
| today: `Boolean`                      | Select today's date automatically when no date value is defined. `Default: true`                  |
| time: `Boolean`                       | Show hour and minute dropdown. `Default: false`                                                   |
| resetButton: `Boolean`                | Enabled reset button. `Default: true`                                                             |
| placeholder: `String`                 | Default place holder for the calendar input.                                                      |
| fullscreen: `Boolean`                 | Open in fullscreen mode.                                                                          |

 

## Examples

### Formulas with date operations

The example below shows date operations with formulas. 

 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Create worksheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        data: [
            [ '=NOW()', '=A1+1', '=A1+2', '=A1+3' ]
        ],
        cells: {
            A1: { format: 'dd/mm/yyyy' },
            B1: { format: 'dd/mm/yyyy' },
            C1: { format: 'dd/mm/yyyy' },
            D1: { format: 'dd/mm/yyyy' },
        }
    }]
});
</script>
</html>
```
  

### Column customization

In the example below, we configure the calendar column type as a year-month picker only. 

 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Create worksheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        data: [
            [ '2021-01-01', '', '', '' ]
        ],
        columns: [  
            { type: 'calendar', options: { type: 'year-month-picker', format: 'Mon/YYYY' } },
        ]
    }]
});
</script>
</html>
```
  

### Date validations

In the example below, `filterOptions` is used to overwrite the column configuration `validRange` just before the edit. The rule is that the last column cannot have a date after the previous column date. Additionally, the onbeforechange event behavior blocks the user from pasting or programmatically breaking this rule. 

 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let filterOptions = function(worksheet, cell, x, y, value, config) {
    // Get the value of the previous column
    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Roger Taylor', '2019-01-01', '2019-03-01' ],
            ['Bob Shiran', '2019-04-03', '2019-05-03'],
            ['Daniel P.', '2018-12-03', '2018-12-03'],
            ['Karen Roberts', '2018-12-03', '2019-01-03'],
        ],
        columns: [
            {
                type:'text',
                title:'Name',
                width:'300px',
            },
            {
                type:'calendar',
                title:'From',
                options: { format:'DD/MM/YYYY' },
                width:'150px',
            },
            {
                type:'calendar',
                title:'To',
                options: { format:'DD/MM/YYYY' },
                filterOptions: filterOptions,
                width:'150px',
            },
        ],
        worksheetName: 'Rules',
    }],
    onbeforechange: function(worksheet, cell, x, y, value) {
        // Valid only for second column
        if (x == 2 && value) {
            // Get the value of the previous column
            let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
            if (previousColumnValue > value) {
                cell.style.border = '1px solid red';
                // Return nothing
                return '';
            } else {
                cell.style.border = '';
            }
        }
        return value;
    },
});
</script>
</html>
```
  

### International configurations

To translate the text in the calendar plugin, you can include the following words in your global `jSuites.dictionary` definitions. 



```html
<div id="spreadsheet"></div>
<script>
//The dictionary can be defined as below
let dictionary = {
    // Other entries (...)
    // Calendar specific entries
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
}

// Send dictionary to the JSS scope
jspreadsheet.setDictionary(dictionary);

// Create worksheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        columns: [  
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
        ]
    }]
});
</script>
```
 
