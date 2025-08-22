title: OpenAI ChatGPT and Jspreadsheet Integration
keywords: JavaScript Data Grid, OpenAI, ChatGPT Integration
description: This section brings more information about our Jspreadsheet Server integration, and how to create ChatGPT API requests directly from your jspreadsheet data grid.

![OpenAI ChatGPT Integration](img/data-grid/chatgpt.svg){.icon}

# OpenAI

## ChatGPT API Integration

The Jspreadsheet OpenAI extension is a full-stack plugin that integrates the ChatGPT API into your Jspreadsheet Pro data grids. It enables automated content generation, response handling, and advanced data analysis. Full functionality requires the Jspreadsheet Server extension, enabling front-end queries to connect to the backend API for real-time data delivery to users.

> This extension runs on Jspreadsheet Server hosted on your infrastructure, ensuring your API keys and data remain secure.

## Endless possibilities

### Generate Marketing Copy

You have a list of products and their attributes, and you need to quickly generate marketing copy for each one. 

```
A1: "Product Name"
B1: "Product Description"
C1: "Marketing Copy"
A2: "Smartwatch"
B2: "Fitness tracking, sleep monitoring, 48-hour battery life"

In C2, you would enter:

=PROMPT("Write an engaging marketing copy for a product named ", A2, " with these features: ", B2)
```
  

## Documentation

### Methods

| Method                | Description                                                                                                                                                          |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =PROMPT(...ARGUMENTS) | This function is used to create dynamic prompts by combining different values or text fragments. It allows you to interact with AI models using customized prompts.  |
 

## Installation

This extension requires Jspreadsheet Server & an OpenAI API account.

### Using NPM

```bash
$ npm install @jspreadsheet/openai
```

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/openai/dist/index.min.js"></script>
```
 

## Configuration

The OpenAI extension requires the Jspreadsheet Server so one user can perform a secure requests to ChatGPT API via Jspreadsheet Server, which will broadcast the same answer to all connect users. Using the cache saving the result to the cell, this way a request happen only when strictly necessary.

### Server Installation

You load the OpenAI and pass as an extension to Jspreadsheet server as below.

| Option         | Description                                                                                                                                                                        |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `apiKey`       | Your OpenAI private key.                                                                                                                                                           |
| `onbeforesend` | Modify the default request options before sending the API request.<br>`onbeforesend(instance, requestOptions) => void`                                                             |
| `onsuccess`    | Customize return, return false to cancel the cell update.<br>`onsuccess(value: String, result: Object, x: Number, y: Number, worksheet: Object)` => string \| boolean \| undefined |                                                                           

#### requestOptions default

It is possible to customize the option request.

{.ignore}
```javascript
let requestOptions = {
    model: "gpt-4",
    messages: [
        {
            role: "system",
            content: "prompt passed from frontend spreadsheet",
        }
    ]
}
```

#### Example

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const openai = require('@jspreadsheet/openai');

// Connect to the Open AI API
openai({
    apiKey: 'your-open-ai-key',
    onbeforesend: function(instance, options) {
        // Update the default
        options.model = 'gpt-4o';
    },
    onsuccess: function(value, result) {
        // It is possible to overwrite the result
        return value;
    }
});

// You can get this information on your Jspreadsheet Account
const license = {
    clientId: 'your-client-id',
    licenseKey: 'your-license'
}

// Private server that runs on your servers (100% private)
server({
    config: {
        cors: {
            origin: "*"
        },
    },
    port: 3000,
    error: function(e) {
        // Your implementation
    },
    auth: async function(socket) {
        // Your implementation
    },
    load: async function(guid) {
        // Your implementation
    },
    create: async function(guid, config) {
        // Your implementation
    },
    destroy: async function(guid) {
        // Your implementation
    },
    change: async function(guid, changes) {
        // Your implementation
    },
    license: license,
    extensions: { openai },
});
```

### Frontend

OpenAI API requests are routed through your server to ensure the security of your API key.

#### Example

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/client/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/openai/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Load the extensions
jspreadsheet.setExtensions({ formula, client, openai });

// Connect
let remote = client.connect({
    url: 'https://yourdomain.com'
});

// Connect to a spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    guid: '53aa4c90-791d-4a65-84a6-1ac25d6b1118'
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import client from "@jspreadsheet/client";
import formula from "@jspreadsheet/formula-pro";
import openai from "@jspreadsheet/openai";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
jspreadsheet.setLicense('###license###');
// Define the extensions
jspreadsheet.setExtensions({ formula, client, openai });

// Connect to your server
let remote = client.connect({
    url: 'https://yourdomain.com'
});

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (<Spreadsheet ref={spreadsheet} guid={"guid"} />);
}
```

### More information

- [Jspreadsheet Client](/products/client)
- [Jspreadsheet Server](/products/server)


## Usage Examples

### Translating Column to French

This example demonstrates the utilization of PROMPT to translate an entire column. 

{.ignore}
```javascript
jspreadsheet(HTMLElement, {
    worksheets: [
        {
            data: [
                ['Hello', '=PROMPT("Translate ",A1," to French")'],
                ['Bye', '=PROMPT("Translate ",A2," to French")'],
                ['Thanks', '=PROMPT("Translate ",A3," to French")'],
                ['Sorry', '=PROMPT("Translate ",A4," to French")'],
            ]
        }
    ]
})
```
 
### Combining Words Semantics

 This example demonstrates the utilization of `PROMPT` to combine word semantics. 

{.ignore}
```javascript
jspreadsheet(HTMLElement, {
    worksheets: [
        {
            data: [
                ['Flower', 'Bee', `=PROMPT(A1," and ",B1," combined result in this word:")`],
            ]
        }
    ]
})
```

