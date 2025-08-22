title: Getting Started with Intrasheets Client API
keywords: Intrasheets, Jspreadsheet, JavaScript API, spreadsheet API, data grid, Excel-like JavaScript, client API, JavaScript library, npm, getting started
description: Start using the Intrasheets Client API to create and manage spreadsheets with JavaScript. Learn installation steps and basic functions, and access example code for quick integration.

# Getting started

The Intrasheets Client library simplifies building requests to the Intrasheets API.

## Installation

Install the client from npm with the following command:  

```bash
% npm install @intrasheets/client
```

### Summary

To begin using the Client API, start with the Client class. This class allows you to create spreadsheets and access the Jspreadsheet object. The Jspreadsheet object, available in the Client API, is used to manipulate spreadsheets, while the Jworksheet object controls individual worksheets.

### Example

A basic example of creating a spreadsheet. For more details on the Client class and the createSpreadsheet method  
  
```javascript
import { Client } from "@intrasheets/client";

const client = new Client({
  baseUrl: "[Server url]",
  token: "[Your access token]",
});

const config = {
  worksheets: [
    {
      worksheetName: 'firstWorksheet',
      minDimensions: [10, 10]
    }
  ]
}

client.createSpreadsheet(config).then((spreadsheet) => {
  console.log('created');
});
```

### Exemplo usando cdn

```html
<html>
    <body>
        <script src="@intrasheets/client"></script>
        <script>
            const createSpreadsheet = function() {
                const client = new clientApi({
                    baseUrl: "[Server url]",
                    token: "[Your access token]",
                });

                const config = {
                    worksheets: [
                        {
                            worksheetName: 'firstWorksheet',
                            minDimensions: [10, 10]
                        }
                    ]
                }

                client.createSpreadsheet(config).then((spreadsheet) => {
                    console.log('created');
                });
            }

            createSpreadsheet();
        </script>
    </body>
</html>
```

## What is next?

More information about the Client Class.

\
[The Client Class](/docs/api/client){.button}