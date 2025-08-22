title: JavaScript Calendar Column Type
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, date, datetime, calendar
description: A advanced calendar usage, date and datetime picker, valid date ranges, and conditional rendering.


# JavaScript Calendar

With the new features of [javascript calendar](https://jsuites.net/docs/javascript-calendar) it is possible to explore this column editor to create advance calendar rules, and bring a better user experience, for instance:

  * Create a range of valid dates from one column based on the values of another
  * Create a year and month picker only
  * Explore events to change other column values
  * Integrate the calendar with other applications through jspreadsheet events
  * Define several different date formats with new valid tokens

 

The example below shows how to use the calendar column type, with a rule where the second calendar column cannot be greater than the first.

**NOTE** The filter argument creates a validRange option based on the previous column value. The onbeforechange behavior blocks the user to paste or programmaticaly overwrite the rule.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Roger Taylor', '2019-01-01', '2019-03-01' ],
    ['Bob Shiran', '2019-04-03', '2019-05-03'],
    ['Daniel P.', '2018-12-03', '2018-12-03'],
    ['Karen Roberts', '2018-12-03', '2019-01-03'],
    ['Willan A.', '',''],
    ['LUX London', '',''],
];

let filterOptions = function(o, cell, x, y, value, config) {
    // Clone options
    config.options = Object.create(config.options);
    // Get the value of the previous column
    let previousColumnValue = o.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
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
    onbeforechange: function(el, cell, x, y, value) {
        // Valid only for second column
        if (x == 2 && value) {
            // Get the value of the previous column
            let previousColumnValue = el.jexcel.getValueFromCoords(x - 1, y);
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
    nestedHeaders:[
        [
            {
            title: 'Information',
            colspan: 1,
        },
        {
            title: 'Holidays period',
            colspan: '2'
        }]
    ],
    license: '###license###',
});
</script>
</html>
```
  

## Date column customization

Customize the format and the behavior of your column through the initialization options, as below. For more information about the jSuites [Javascript calendar](https://jsuites.net/docs/javascript-calendar), date & datetime picker responsive plugin.

| Parameter      | Description                                                                                                                |
| ---------------|----------------------------------------------------------------------------------------------------------------------------|
| validRange     | Disable dates out of the range.<br/>@array [Initial date, Final date]                                                      | startingDay | Starting in a specific day, default: Sunday<br/>@int 0 for sunday, 6 for saturday |
| format         | Date format<br/>@string YYYY-MM-DD                                                                                         |
| readonly       | Calendar input is readonly.<br/>@bool                                                                                      |
| today          | Calendar default is today when input is blank.<br/>@bool                                                                   |
| time           | Enable timepicker.<br/>@bool                                                                                               |
| resetButton    | Enabled reset button<br/>@bool                                                                                             |
| placeholder    | Default place holder for the calendar input<br/>@string                                                                    |
| months         | Array with the month names<br/>@array ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] |
| weekdays       | Array with the weekdays names<br/>@array ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']          |
| weekdays       | Array with the weekdays names<br/>@array ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']          |
| weekdays_short | Array with the weekdays names<br/>@array ['S', 'M', 'T', 'W', 'T', 'F', 'S']                                               |
| value          | Initial value<br/>@string                                                                                                  |
| opened         | Calendar starts opened<br/>@bool                                                                                           |
| onclose        | On close event<br/>@function                                                                                               |
| onchange       | On change event<br/>@function                                                                                              |


