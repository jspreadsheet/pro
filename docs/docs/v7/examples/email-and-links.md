title: Embed email and links to your spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet,  embed email, links
description: Learn how to embed links and email to your spreadsheet.


# Email and links

Adding email or links in your javascript spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />


<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', 'richard@gmail.com', 'https://bossanova.uk/jspreadsheet' ],
    [ '2', 'sergiomartins@gmail.com', 'https://google.com' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        {
            type: 'dropdown',
            width: '140px',
            title: 'Name',
            source: [
                {
                    id:'1',
                    name: 'Jorge'
                },
                {
                    id:'2',
                    name: 'Sergio Martins'
                }
            ]
         },
        {
            type: 'email',
            width: '250px',
            title: 'Email'
        },
        {
            type: 'url',
            width: '250px',
            title: 'Url'
        },
    ],
    license: '###license###',
});
</script>
</html>
```
 
