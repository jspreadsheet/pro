title: React Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and react
description: An example of how to integrate Jspreadsheet with React.



# React Spreadsheet

Create a web-based spreadsheet using React and Jspreadsheet. 

## React spreadsheet with hooks

Basic React example [See this example working online](https://codesandbox.io/s/online-spreadsheet-with-react-and-jss-us1cm)  

## NextJS

Create an online XLSX reader with NextJS [See this example working online](https://codesandbox.io/s/jspreadsheet-and-nextjs-6fhsz)  

### Source code

{.ignore}

```jsx
import React, {useRef, useEffect} from "content/docs/v8/react";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function App() {
    const jssRef = useRef(null);
    const license = "###license###";

    useEffect(() => {
        // Create only once
        if (!jssRef.current.jspreadsheet) {
            jspreadsheet(jssRef.current, {
                worksheets: [{minDimensions: [6, 6]}],
                license: license
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
  

## React Spreadsheet using a class

[React with Jspreadsheet sample project](https://codesandbox.io/s/react-spreadsheet-8u1ii)

### Source code

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
 
