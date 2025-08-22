title: OpenAI ChatGPT Extension for Jspreadsheet
keywords: Jspreadsheet, ChatGPT API, OpenAI integration, real-time spreadsheets, JavaScript data grid, AI-powered insights
description: Learn how to enhance your Jspreadsheet application with the OpenAI ChatGPT API, enabling real-time AI-powered content generation and data analysis directly within your spreadsheet data grids.

# OpenAI Extension

Enhance your Jspreadsheet Server application by integrating the ChatGPT API directly into your spreadsheet data grids. This extension allows automated content generation, intelligent responses, and advanced data analysis—making it possible to perform front-end queries that securely communicate with the API through your server, delivering real-time, AI-powered insights.
 
## Documentation

### Methods

| Method                   | Description                                                                                                                            |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `=PROMPT()`              | Combines values and text fragments to create dynamic prompts, allowing customized interactions with AI models for a wide range of use cases. |
 
### Example

#### Generate Marketing Copy

Suppose you have a list of products with their attributes and want to quickly generate marketing copy for each.

```
A1: "Product Name"
B1: "Product Description"
C1: "Marketing Copy"
A2: "Smartwatch"
B2: "Fitness tracking, sleep monitoring, 48-hour battery life"

In C2, you would enter:

=PROMPT("Write an engaging marketing copy for a product named ", A2, " with these features: ", B2)
```

## Installation

This extension requires *Jspreadsheet Premium* and an active *OpenAI API* account.

### Using NPM

```bash
npm install @jspreadsheet/openai
```

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/openai/dist/index.min.js"></script>
```
 

## Configuration

*Jspreadsheet Server* enables secure requests to the ChatGPT API using each user's API credentials. When a user runs a formula in the front end, the server processes it and shares the response with all connected users. With caching enabled, responses are saved directly to the cell to reduce redundant API calls.

### Installation

Load the OpenAI extension and register it with the *Jspreadsheet Server* as shown below:

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const openai = require('@jspreadsheet/openai');

// Connect to the Open AI API
openai({ apiKey: '' });

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

## Examples

### Translating Column to French

Use the `PROMPT` function to translate entire columns automatically.

{.ignore}
```javascript
[
    ['Hello', '=PROMPT("Translate ",A1," to French")'],
    ['Bye', '=PROMPT("Translate ",A2," to French")'],
    ['Thanks', '=PROMPT("Translate ",A3," to French")'],
    ['Sorry', '=PROMPT("Translate ",A4," to French")'],
]
```
 
### Combining Word Semantics

Use `PROMPT` to generate creative semantic combinations.

{.ignore}
```javascript
['Flower', 'Bee', `=PROMPT(A1," and ",B1," combined result in this word:")`]
```

