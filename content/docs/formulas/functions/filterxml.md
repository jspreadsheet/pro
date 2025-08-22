title: FILTERXML function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FILTERXML function in Jspreadsheet

# FILTERXML function



The `FILTERXML` function in Jspreadsheet Formulas Pro is a handy tool that allows you to extract specific data from XML content. This is done by using an XPath string, which is a query language for selecting nodes from an XML document. Essentially, this function enables you to sift through and filter XML data, pinpointing and returning only the specific information you need. This can be incredibly useful for managing and organizing large sets of XML data in Jspreadsheet.

## Documentation

Returns specific data from XML content by using an XPath string.

### Category

Web

### Syntax

FILTERXML(xml, xpath)

| Parameter | Description |
| ----------- | ------------- |
| `xml` | A string containing the XML content to filter. |
| `xpath` | A string containing the XPath expression used to extract the data. |


### Behavior

The `FILTERXML` function in spreadsheets takes a string of XML and an XPath, and returns the text from the matching XML nodes. Here's how it handles various types of inputs:

- **Empty Cells**: `FILTERXML` function will return an error if the XML string or XPath string is empty or missing.
- **Text**: The function expects a valid XML string and an XPath as text inputs. If the input is not valid XML or XPath, it returns an error.
- **Booleans**: This function does not directly handle boolean values. However, booleans can be returned as text if they are part of the XML content.
- **Errors**: If the XML or XPath strings are invalid, or if the XPath does not match any nodes in the XML, the function will return an error.
- **Numbers**: Numbers can be returned as text if they are part of the XML content. However, the function will not directly handle numbers as input.
- **Arrays**: `FILTERXML` function can return multiple matching nodes as an array.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when either the XML or the XPath is invalid, or when the XPath does not match any nodes in the XML string. |
| #N/A | This error appears when the function is used in an array formula and there are not enough matching nodes to fill all the cells of the array. |

### Best practices

> - Always ensure that your XML and XPath strings are valid to avoid #VALUE! errors.
> - Use `FILTERXML` to parse XML data, but avoid using it to validate XML data as it does not provide detailed error messages for invalid XML.
> - Be aware that `FILTERXML` returns an array when multiple nodes match the XPath. Make sure your formula is in an array-enabled context if you expect multiple matches.
> - To avoid #N/A errors in array formulas, you can wrap the `FILTERXML` function with the `IFERROR` function to handle cases where there are not enough matching nodes.

### Usage

A few examples using the FILTERXML function.

```
FILTERXML("<xml><employee><name>John Doe</name><title>Manager</title></employee></xml>", "//name") returns "John Doe"  
FILTERXML("<catalog><book genre='novel' ISBN='1-861003-74-9'><title>The Handmaid's Tale</title><price>19.95</price></book><book genre='novel' ISBN='0-553-21311-3'><title>The Hobbit</title><price>10.99</price></book></catalog>", "sum(catalog/book/price)") returns "30.94"  
```

### Interactive Spreadsheet Demo

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
  worksheets: [{
    data: [
    [
        "XML Data",
        "XPath Query",
        "Result"
    ],
    [
        "<employees><employee><name>Alice Smith</name><department>Sales</department><salary>65000</salary></employee><employee><name>Bob Johnson</name><department>IT</department><salary>75000</salary></employee></employees>",
        "//name",
        "=FILTERXML(A2,B2)"
    ],
    [
        "<products><item id='1'><name>Laptop</name><price>899.99</price></item><item id='2'><name>Mouse</name><price>25.50</price></item><item id='3'><name>Keyboard</name><price>75.00</price></item></products>",
        "sum(//price)",
        "=FILTERXML(A3,B3)"
    ],
    [
        "<orders><order><customer>John Doe</customer><total>150.75</total></order><order><customer>Jane Smith</customer><total>89.50</total></order></orders>",
        "//customer[1]",
        "=FILTERXML(A4,B4)"
    ]
]
  }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Worksheet data
    const data = [
    [
        "XML Data",
        "XPath Query",
        "Result"
    ],
    [
        "<employees><employee><name>Alice Smith</name><department>Sales</department><salary>65000</salary></employee><employee><name>Bob Johnson</name><department>IT</department><salary>75000</salary></employee></employees>",
        "//name",
        "=FILTERXML(A2,B2)"
    ],
    [
        "<products><item id='1'><name>Laptop</name><price>899.99</price></item><item id='2'><name>Mouse</name><price>25.50</price></item><item id='3'><name>Keyboard</name><price>75.00</price></item></products>",
        "sum(//price)",
        "=FILTERXML(A3,B3)"
    ],
    [
        "<orders><order><customer>John Doe</customer><total>150.75</total></order><order><customer>Jane Smith</customer><total>89.50</total></order></orders>",
        "//customer[1]",
        "=FILTERXML(A4,B4)"
    ]
];

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Worksheet data
        const data = [
    [
        "XML Data",
        "XPath Query",
        "Result"
    ],
    [
        "<employees><employee><name>Alice Smith</name><department>Sales</department><salary>65000</salary></employee><employee><name>Bob Johnson</name><department>IT</department><salary>75000</salary></employee></employees>",
        "//name",
        "=FILTERXML(A2,B2)"
    ],
    [
        "<products><item id='1'><name>Laptop</name><price>899.99</price></item><item id='2'><name>Mouse</name><price>25.50</price></item><item id='3'><name>Keyboard</name><price>75.00</price></item></products>",
        "sum(//price)",
        "=FILTERXML(A3,B3)"
    ],
    [
        "<orders><order><customer>John Doe</customer><total>150.75</total></order><order><customer>Jane Smith</customer><total>89.50</total></order></orders>",
        "//customer[1]",
        "=FILTERXML(A4,B4)"
    ]
]

        return {
            data
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];

    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
    [
        "XML Data",
        "XPath Query",
        "Result"
    ],
    [
        "<employees><employee><name>Alice Smith</name><department>Sales</department><salary>65000</salary></employee><employee><name>Bob Johnson</name><department>IT</department><salary>75000</salary></employee></employees>",
        "//name",
        "=FILTERXML(A2,B2)"
    ],
    [
        "<products><item id='1'><name>Laptop</name><price>899.99</price></item><item id='2'><name>Mouse</name><price>25.50</price></item><item id='3'><name>Keyboard</name><price>75.00</price></item></products>",
        "sum(//price)",
        "=FILTERXML(A3,B3)"
    ],
    [
        "<orders><order><customer>John Doe</customer><total>150.75</total></order><order><customer>Jane Smith</customer><total>89.50</total></order></orders>",
        "//customer[1]",
        "=FILTERXML(A4,B4)"
    ]
]
            }]
        });
    }
}
```

