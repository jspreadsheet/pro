title: Unit Tests for Jspreadsheet
keywords: Jspreadsheet, Jexcel, JavaScript, Web-based Applications, Web-based Spreadsheet, Unit Tests
description: Enhance your application quality by creating unit tests for Jspreadsheet.

# Tests

Below are some simple tests using different technologies.  

## React

### Folder structure

- src
- components
- jspreadsheet.js
- jspreadsheet.test.js  

### Jspreadsheet.js file


{.ignore}
```jsx
import { useEffect, useRef } from "react";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense(
  "###license###"
);

function Jspreadsheet() {
  const jssDiv = useRef(null);
  const jssInstance = useRef(null);

  useEffect(() => {
    jssInstance.current = jspreadsheet(jssDiv.current, {
      worksheets: [
        {
          data: [["teste 1", "teste 2", "teste 3"]],
        },
      ],
    });
  }, []);

  return <div ref={jssDiv}></div>;
}

export default Jspreadsheet;
```
 

### Jspreadsheet.test.js


{.ignore}
```jsx
import { render, screen } from "@testing-library/react";
import Jspreadsheet from "./Jspreadsheet";

test("renders simple table", () => {
  render(<Jspreadsheet />);

  const firstValue = screen.getByText("teste 1");
  expect(firstValue).toBeInTheDocument();

  const secondValue = screen.getByText("teste 2");
  expect(secondValue).toBeInTheDocument();

  const thirdValue = screen.getByText("teste 3");
  expect(thirdValue).toBeInTheDocument();
});
```
 

### Test script


{.ignore}
```javascript
"test": "react-scripts test"
```
  

## Angular

### Folder structure

- src
- app
- app.component.html
- app.component.ts
- app.component.spec.ts  

### app.component.html


{.ignore}
```html
<div #spreadsheet></div>
```
 

### app.component.ts


{.ignore}
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;

  ngAfterViewInit() {
    // License for Formula Plugin
    jspreadsheet.setLicense(
      '###license###'
    );

    // Create spreadsheet
    jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [[]],
          minDimensions: [6, 4],
          columns: [
            {
              type: 'dropdown',
              width: 100,
              source: ['Y', 'N'],
            },
            {
              type: 'color',
              width: 100,
              render: 'square',
            },
          ],
        },
      ],
    });
  }
}
```
 

### app.component.spec.ts


{.ignore}
```angularjs
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    const component = new AppComponent();

    expect(component).toBeTruthy();
  });
});
```
 

### Test script


{.ignore}
```javascript
"test": "ng test"
```
  

## Vue

### Folder structure

\- src \- components \- JspreadsheetComponent.vue \- __tests__ \- JspreadsheetComponent.spec.js  

### JspreadsheetComponent.vue


{.ignore}
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license">
    <Worksheet :data="data" :columns="columns" />
  </Spreadsheet>
  <input type="button" value="getData" @click="getData()" />
</template>

<script>
import { Spreadsheet, Worksheet } from '@jspreadsheet/vue'

const license =
  '###license###'

export default {
  components: {
    Spreadsheet,
    Worksheet
  },
  data() {
    // Worksheet data
    const data = [
      ['US', 'Cheese', '2019-02-12'],
      ['CA', 'Apples', '2019-03-01'],
      ['CA', 'Carrots', '2018-11-10'],
      ['BR', 'Oranges', '2019-01-12']
    ]

    // Columns
    const columns = [{ width: '300px' }, { width: '200px' }, { width: '200px' }]

    return {
      data,
      columns,
      license
    }
  }
}
</script>
```
 

### JspreadsheetComponent.spec.js


{.ignore}
```javascript
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JspreadsheetComponent from '../JspreadsheetComponent.vue'

describe('JspreadsheetComponent', () => {
  it('renders properly', () => {
    const component = mount(JspreadsheetComponent)

    expect(component.find('td[data-x="1"][data-y="3"]').text()).toContain('Oranges')
  })
})
```
 

### Test script


{.ignore}
```javascript
"test:unit": "vitest"
```
 
