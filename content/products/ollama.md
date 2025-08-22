title: Ollama and Jspreadsheet Integration
keywords: JavaScript Data Grid, AI, Ollama, Model, Llama, Llama3, Llama2, Automated, Generation 
description: This section brings more information about our Jspreadsheet Server integration, and how to create Ollama API requests directly from your jspreadsheet data grid.

![Ollama Integration](img/data-grid/ollama.svg){.icon}

# Ollama

## Ollama API Integration

The Jspreadsheet Ollama extension is a front-end plugin that integrates the local and free Ollama API into Jspreadsheet Pro data grids. It allows for automated content generation, response handling, and advanced data analysis. The Ollama service must be running locally to enable front-end queries to connect to the API and provide real-time data to users.

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

=OLLAMA("Write an engaging marketing copy for a product named ", A2, " with these features: ", B2)
```

## Documentation

### Methods

| Method                | Description                                                                                                                                                          |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| =OLLAMA(...ARGUMENTS) | This function is used to create dynamic prompts by combining different values or text fragments. It allows you to interact with AI models using customized prompts. |
 

## Installation

This extension requires Jspreadsheet Server and an Ollama Instance running.

### Using NPM

```bash
$ npm install @jspreadsheet/ollama
```

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/ollama/dist/index.min.js"></script>
```
 

## Configuration

The Ollama extension requires a reference to an Ollama Instance running.

### Running an Ollama Model locally with Docker

Add the following service to your docker-compose.yml:

{.ignore}
```yml
  ollama:
    image: ollama/ollama
    ports:
      - "11436:11434"
    volumes:
      - ollama_volume:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
```

After the container is running, open a bash shell in the ollama service and start the desired model. In the example below, we run llama3, which is the default model for the extension:

```bash
$ docker compose exec ollama bash

$ ollama run llama3
```

The llama3 model will now be available on port 11436, as specified in your docker-compose.yml file.

### Client Configuration

| Option         | Description                                                                                                                                                                          |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onbeforesend` | Modify the default request options before sending the API request.<br>`onbeforesend(instance, requestOptions) => void`                                                                     |
| `onsuccess` | Perform an action after the API request has successfully occurred.<br>`onsuccess(instance, cell, x, y) => void` |


#### requestOptions default

It is possible to customize the option request.

{.ignore}
```javascript
let requestOptions = {
    prompt: "{prompt passed from frontend spreadsheet}",
    model: 'llama3',
    stream: false,
}
```

You can connect to your server and open your spreadsheet.

```javascript
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import ollama from '@jspreadsheet/ollama';

// Connect to the Ollama API
ollama({
    url: 'http://localhost:11437'
    onbeforesend: function(instance, options) {
        // Update the default
        options.model = 'mistral';
        options.options = {
            temperature: 0
        }
    },
});

// Load the extensions
jspreadsheet.setExtensions({ formula, ollama });

// Connect to a spreadsheet
jspreadsheet(HTMLElement, {
    worksheets: [{
        minDimensions: [5, 5]
    }]
});
```

## More Examples

### Translating Column to French

This example demonstrates the utilization of OLLAMA to translate an entire column. 

{.ignore}
```javascript
jspreadsheet(HTMLElement, {
    worksheets: [
        {
            data: [
                ['Hello', '=OLLAMA("Translate ",A1," to French")'],
                ['Bye', '=OLLAMA("Translate ",A2," to French")'],
                ['Thanks', '=OLLAMA("Translate ",A3," to French")'],
                ['Sorry', '=OLLAMA("Translate ",A4," to French")'],
            ]
        }
    ]
})
```
 
### Combining Words Semantics

 This example demonstrates the utilization of `OLLAMA` to combine word semantics. 

{.ignore}
```javascript
jspreadsheet(HTMLElement, {
    worksheets: [
        {
            data: [
                ['Flower', 'Bee', `=OLLAMA(A1," and ",B1," combined result in this word:")`],
            ]
        }
    ]
})
```

