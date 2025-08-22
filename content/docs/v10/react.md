title: React Data Grid with Spreadsheet-Like Controls
keywords: Jspreadsheet, Jexcel, javascript, React, data grid, spreadsheet-like controls, React data grid, Jspreadsheet integration, React integration, JavaScript data grid, spreadsheet controls in React
description: Learn how to use Jspreadsheet and React to create robust data grids with spreadsheet-like controls. Explore the integration of Jspreadsheet in React applications for efficient data management and user-friendly interfaces.

# React Spreadsheet

Introducing the new React wrapper for Jspreadsheet - the advanced data grid solution that offers intuitive spreadsheet-like controls. Jspreadsheet is a go-to choice for applications that require seamless data input and optimal user experience. And now, with the latest versions of Jspreadsheet, React developers can take advantage of a specialized wrapper that enables easy integration of the data grid into their applications. 

## Documentation

### Using the react data grid wrapper

```bash
// First install the JSS data grid react wrapper
$ npm install @jspreadsheet/react
```
 

#### Create your first JSS react data grid

How to create a web-based spreadsheet using the Jspreadsheet react wrapper. 

{.ignore}

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} tabs={true} toolbar={true}>
            <Worksheet/>
        </Spreadsheet>
    );
}
```
 

### Using the library

Alternatively, developers can use the library directly for more flexibility and customization in their implementation. 

#### React with Hooks

{.ignore}
```jsx
import React, { useRef, useEffect } from "react";
import jspreadsheet from "jspreadsheet";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// Replace your license here
const license = '###license###';

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
 

### Limitations

 

#### setState utilization

The present iteration of the wrapper does not allow for the utilization of setState to trigger automatic updates on the component.  

## Library integration examples

### Codesandbox examples

#### React integration

 

  * [Basic React spreadsheet](https://codesandbox.io/p/sandbox/react-components-on-jspreadsheet-zx9zxr)
Basic react spreadsheet with translations. 
  * [Custom react spreadsheet cell editors](https://codesandbox.io/s/react-spreadsheet-with-a-custom-editor-ic6h3l)
How to create a custom cell editor with React. 
  * [Custom React Components integration](https://codesandbox.io/s/react-components-on-jspreadsheet-k7wc4c)
Integrate a custom React component (Recharts) to a excel like formula on Jspreadsheet. 
  * [Online spreadsheet with React Classes](https://codesandbox.io/p/sandbox/react-spreadsheet-kkz3s8)
Create a basic react spreadsheet using React classes 
  * [React data grid with validations](https://codesandbox.io/s/online-spreadsheet-with-validations-with-jspreadsheetxy777)
How to crate a data grid with cell validations 
 

#### NextJS integration

 

  * [Online XLSX NextJS reader](https://codesandbox.io/s/jspreadsheet-and-nextjs-6fhsz)
Creating an online XLSX reader with NextJS and Jspreadsheet 
  * [Import a Excel file to NextJS](https://codesandbox.io/s/nextjs-spreadsheet-52mr2z)
How to import an excel file in NextJS using Jspreadsheet. 

