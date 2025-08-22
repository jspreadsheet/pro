title: React Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and react
description: An example of how to integrate Jspreadsheet with React. Create an online spreadsheet with React.



# React Spreadsheet

Create web-based spreadsheets using React and Jspreadsheet. 

## React examples

 

  * [Basic React Spreadsheet](https://codesandbox.io/s/react-spreadsheet-trlh0o)
Basic react spreadsheet with translations. 
  * [Custom react spreadsheet cell editors](https://codesandbox.io/s/react-spreadsheet-with-a-custom-editor-ic6h3l)
How to create a custom cell editor with React. 
  * [Custom React Components integration](https://codesandbox.io/s/react-components-on-jspreadsheet-k7wc4c)
Integrate a custom React component (Recharts) to a excel like formula on Jspreadsheet. 
  * [Online spreadsheet with React Classes](https://codesandbox.io/s/react-spreadsheet-8u1ii)
Create a basic react spreadsheet using React classes 
 

## NextJS examples

 

  * [Online XLSX NextJS reader](https://codesandbox.io/s/jspreadsheet-and-nextjs-6fhsz)
Creating an online XLSX reader with NextJS and Jspreadsheet 
  * [Import a Excel file to NextJS](https://codesandbox.io/s/nextjs-spreadsheet-52mr2z)
How to import an excel file in NextJS using Jspreadsheet. 
 

### Basic spreadsheet with Hooks

{.ignore}

```jsx
import React, {useRef, useEffect} from "content/docs/v9/react";
import jspreadsheet from "jspreadsheet";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// Set the license
jspreadsheet.setLicense("###license###");

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

    return (
        <div>
            <div ref={jssRef}/>
        </div>
    );
}
```
  

### React Spreadsheet using a class



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
 
