title: React Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, React, data grid, spreadsheet-like controls, React data grid, Jspreadsheet integration, React integration, JavaScript data grid, spreadsheet controls in React
description: Learn how to use Jspreadsheet and React to create robust javascript data grids with spreadsheet-like controls. Explore the integration of Jspreadsheet in React applications for efficient data management and user-friendly interfaces.

# React Spreadsheet

The React wrapper for Jspreadsheet provides a bridge to incorporate advanced data grid functionalities within React applications. This wrapper simplifies embedding Jspreadsheet's interactive spreadsheet-like controls into React-based projects, focusing on seamless data manipulation and interface consistency. Designed for developers seeking to enhance application data grids with comprehensive features, the React wrapper aligns with modern development practices and user interaction standards. 

{.green}
> **Updates**\
> From version 11, please import the CSS files as below.
> 
> `import "jsuites/dist/jsuites.css";`\
> `import "jspreadsheet/dist/jspreadsheet.css";`\
>
> For the icons please include Material Icons:
> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />



## Documentation

### Utilizing the React Data Grid Wrapper

Begin by installing the JSS data grid React wrapper

```bash
$ npm install @jspreadsheet/react
```

### Crafting Your First JSS React Data Grid
Learn to construct a web-based spreadsheet employing the Jspreadsheet React wrapper.

{.ignore}

```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Define the global jspreadsheet license
jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} tabs={true} toolbar={true}>
            <Worksheet/>
        </Spreadsheet>
    );
}
```
 

### Direct Library Usage

Developers may utilize the library directly within their implementations for enhanced flexibility and customization.

#### React with Hooks

{.ignore}
```jsx
import React, { useRef, useEffect } from "react";
import jspreadsheet from "jspreadsheet";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// Define the global jspreadsheet license
jspreadsheet.setLicense('###license###');

export default function App() {
    const jssRef = useRef(null);

    useEffect(() => {
        // Create the spreadsheet only once
        if (!jssRef.current.jspreadsheet) {
            jspreadsheet(jssRef.current, {
                worksheets: [{
                    minDimensions: [10, 10]
                }],
            });
        }
    }, null);

    return (<div ref={jssRef} />);
}
```
 

#### React classes

{.ignore}
```jsx
import React from "react";
import jspreadsheet from "jspreadsheet";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default class Jspreadsheet extends React.Component {
  constructor(props) {
    super(props);
    this.options = props.options;
    this.wrapper = React.createRef();
  }

  componentDidMount = function () {
    this.worksheets = jspreadsheet(this.wrapper.current, this.options);
  };

  addRow = function () {
    this.worksheets[0].insertRow();
  };

  render() {
    return (
      <div>
        <div ref={this.wrapper}></div>
        <p>
          <input type="button" value="Add new row" onClick={() => this.addRow()} className="jss_object" />
        </p>
      </div>
    );
  }
}

let options = {
  worksheets: [
    {
      minDimensions: [10, 10]
    }
  ],
};

ReactDOM.render(<Jspreadsheet options={options} />, document.getElementById("root"));
```
 

### React States

Unlike typical React components that rely on React's immutable state, Jspreadsheet employs its own internal state management system. This design addresses critical performance challenges when handling massive spreadsheet data structures with thousands of interdependent cells, extensive formulas, and complex dependency chains. These challenges would otherwise lead to:

- Excessive memory usage, especially with large datasets
- Performance bottlenecks during frequent cell updates
- Unnecessary re-renders that degrade user experience

Using optimized maps and objects, Jspreadsheet efficiently tracks changes, reducing memory consumption and processing overhead. This approach ensures exceptional performance, even for large or highly complex spreadsheet representations. 

#### A example with React State:

See this **React Data Grid** with Spreadsheet Controls example here: https://stackblitz.com/edit/vitejs-vite-3vxek3n6

{.ignore}
```jsx
import React, { useRef, useEffect, useState } from 'react';
import jspreadsheet from 'jspreadsheet';
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

// Define the global jspreadsheet license
jspreadsheet.setLicense(
  'Yjc2OTQwZTliOWJlNDBjZmRmZGY0MGMxMGEyMDMwMTBkMGUwMjQxMjA4M2FhOWI3Mzk1Nzc4ZjMwN2IyYjM4NmNkMjEyYWFkZDNlNTk1MmM5YzY4MjJiMGJjMmQ2ZDhjZTA0YTFlYmEzY2MzMjkwZTQ0Y2E0ZGFhNjYwMjJlNzgsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pVUdGMWJDQkliMlJsYkNJc0ltUmhkR1VpT2pFM05qZzROamN5TURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpWTNOaUxtRndjQ0lzSW1wemNISmxZV1J6YUdWbGRDNWpiMjBpTENKalpIQnVMbWx2SWl3aWFXNTBjbUZ6YUdWbGRITXVZMjl0SWl3aWMzUmhZMnRpYkdsMGVpNWpiMjBpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKa1pYWmxiRzl3TG14cFoyaDBibWx1Wnk1bWIzSmpaUzVqYjIwaUxDSnpabU52WkdWaWIzUXVZMjl0SWl3aWQyVmlZMjl1ZEdGcGJtVnlMbWx2SWl3aWQyVmlJaXdpYkc5allXeG9iM04wSWwwc0luQnNZVzRpT2lJek5TSXNJbk5qYjNCbElqcGJJblkzSWl3aWRqZ2lMQ0oyT1NJc0luWXhNQ0lzSW5ZeE1TSXNJbVp2Y20xeklpd2labTl5YlhWc1lTSXNJbkpsYm1SbGNpSXNJbkJoY25ObGNpSXNJbWx0Y0c5eWRHVnlJaXdpZG1Gc2FXUmhkR2x2Ym5NaUxDSmpiMjF0Wlc1MGN5SXNJbk5sWVhKamFDSXNJbU5vWVhKMGN5SXNJbkJ5YVc1MElpd2lZbUZ5SWl3aWMyaGxaWFJ6SWl3aWMyaGhjR1Z6SWl3aWMyVnlkbVZ5SWl3aVptOXliV0YwSWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
);

export default function App() {
  const jssRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [columns, setColumns] = useState(() => {
    try {
      const savedColumns = localStorage.getItem('my-columns');
      return savedColumns ? JSON.parse(savedColumns) : [];
    } catch (error) {
      console.error('Error loading columns:', error);
      return [];
    }
  });

  useEffect(() => {
    if (!jssRef.current || isInitialized) return;

    try {
      jspreadsheet(jssRef.current, {
        worksheets: [
          {
            minDimensions: [10, 10],
            columns: columns,
          },
        ],
        onresizecolumn: (worksheet) => {
          try {
            setColumns(structuredClone(worksheet.options.columns));
          } catch (error) {
            console.error('Error updating columns:', error);
          }
        },
      });
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing spreadsheet:', error);
    }
  }, [isInitialized, columns]);

  useEffect(() => {
    try {
      localStorage.setItem('my-columns', JSON.stringify(columns));
    } catch (error) {
      console.error('Error saving columns:', error);
    }
  }, [columns]);

  return (
    <>
      <div>first column width: {columns[0]?.width}</div>
      <div ref={jssRef} />
    </>
  );
}

```


## Library integration examples

### Real-Time React Spreadsheet

Create a Real-time JavaScript Spreadsheet with React and TypeScript using Jspreadsheet.

* [Real-Time Collaboration](https://github.com/jspreadsheet/spreadsheet-react-server)

### Interactive Demos

#### React Spreadsheet Examples

* [React Spreadsheet](https://stackblitz.com/edit/jspreadsheet-react-tfppiaol?file=src%2FApp.jsx)
Basic react spreadsheet with translations. 
* [React Spreadsheet Cell Editors](https://stackblitz.com/edit/jspreadsheet-react-mn8sgs4v?file=src%2FApp.jsx)
How to create a custom data grid cell editor with React. 
* [Custom React Components](https://stackblitz.com/edit/jspreadsheet-react?file=src%2FApp.jsx)
Integrate a custom React component (Recharts) with Jspreadsheet. 
* [React Spreadsheet as React Classes](https://codesandbox.io/p/sandbox/react-spreadsheet-kkz3s8)
Create a basic react spreadsheet using React classes 
* [React Data Grid Validations](https://stackblitz.com/edit/jspreadsheet-react-btqckdx3?file=src%2FApp.jsx)
How to crate a data grid with cell validations
* [MUI React as a Custom Editor](https://codesandbox.io/p/sandbox/custom-editors-with-react-mui-y4v8lj)
React Calendar with Antd
* [Antd React Calendar Cell Editor](https://stackblitz.com/edit/jspreadsheet-react-qpjhf86i?file=src%2FCalendar.jsx)
React Calendar with MUI
* [MUI React Calendar as a Custom Editor](https://stackblitz.com/edit/jspreadsheet-react-a7ck8yro?file=src%2FCalendar.jsx)


#### NextJS integration

* [Online XLSX NextJS reader](https://stackblitz.com/edit/nextjs-jspreadsheet?file=app%2Fpage.tsx)
Creating an online XLSX reader with NextJS and Jspreadsheet 


