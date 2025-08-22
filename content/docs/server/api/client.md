title: Client Class
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, client class, client api
description: Learn how to use the client API

## Documentation

### Client class

The client class is essential for using the client API, being the only class exported by the API.  

## Constructor

O construtor da classe Client possui apenas um argumento, o objeto `options`, que possui duas propriedades:

| Property | Description |
| --- | --- |
| options.baseUrl | Url of the server to which the `Client` object and any `Jspreadsheet` and `Jworksheet` objects generated from it will send requests.  <br>If omitted, the value of the environment variable `JSPREADSHEET_API_BASE_URL` is used and, if this is also not set, the default value "https://jspreadsheet.com/api" is used. |
| options.token | Access token for the server informed in the `options.baseUrl` property. This value can be omitted, but in this case, some services may not work due to lack of authentication. |

Methods
-------

### getSpreadsheet

Generates a Jspreadsheet object based on the spreadsheet guid.

#### Types

```
getSpreadsheet(guid: string): IJspreadsheet;
```

#### Description of properties

| Property | Description |
| --- | --- |
| guid | Spreadsheet Guid. |

#### Example


```javascript
import { Client } from "@intrasheets/client";

const client = new Client({
    baseUrl: "[Server url]",
    token: "[Your access token]",
});

const spreadsheet = client.getSpreadsheet(
    "6b1842a1-f737-4492-b6c4-e54a25643fb7",
);

spreadsheet.getConfig().then((config) => console.log(config));
```

### createSpreadsheet

Creates a new spreadsheet and then returns a Jspreadsheet object referring to it.

#### Types

```
createSpreadsheet(
    config: Omit<Spreadsheet, "worksheets"> & {
        worksheets: (Omit<Worksheet, "worksheetName"> &
            Required<Pick<Worksheet, "worksheetName">>)[];
    }
): Promise<IJspreadsheet>;
```

#### Description of properties

| Property | Description |
| --- | --- |
| config | Spreadsheet Settings. |

> Obs: Ao criar uma spreadsheet, ela deve ter pelo menos uma worksheet, e todas as worksheets devem ter um worksheetName.

#### Example


```javascript
import { Client } from "@intrasheets/client";

const client = new Client({
    baseUrl: "[Server url]",
    token: "[Your access token]",
});

client
    .createSpreadsheet({
            worksheets: [
                {
                  minDimensions: [10, 10],
                  worksheetName: 'test'
                },
            ],
        })
    .then((spreadsheet) => {
        console.log(spreadsheet.getSpreadsheetGuid());
    });
```