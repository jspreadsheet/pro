title: Unit Tests for Jspreadsheet
keywords: Jspreadsheet, Jexcel, JavaScript, Web-based Applications, Web-based Spreadsheet, Unit Tests
description: Enhance your application quality by creating unit tests for Jspreadsheet.

# Tests

Below are some simple tests using different technologies.  

### Folder structure

{.ignore-execution}
```jsx
- src
  - components
    - jspreadsheet.js
    - jspreadsheet.test.js  
```
```vue
- src
  - components
    - JspreadsheetComponent.vue
  - __tests__
    - JspreadsheetComponent.spec.js
```
```angularjs
- src
  - app
    - app.component.html
    - app.component.ts
    - app.component.spec.ts  
```

### Main file

{.ignore-execution}
```jsx
import {useEffect, useRef} from "content/docs/react";
import jspreadsheet from "jspreadsheet";

import "jsuites/dist/jsuites.css";
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
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license">
    <Worksheet :data="data" :columns="columns" />
  </Spreadsheet>
  <input type="button" value="getData" @click="getData()" />
</template>

<script>
import { Spreadsheet, Worksheet } from '@jspreadsheet/vue'
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
 

### Test file

{.ignore-execution}
```jsx
import { render, screen } from "@testing-library/react";
import Jspreadsheet from "./Jspreadsheet";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
```vue
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

{.ignore-execution}
```jsx
"test": "react-scripts test"
```
```vue
"test:unit": "vitest"
```
```angularjs
"test": "ng test"
```
