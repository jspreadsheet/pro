title: React Data Grid with Spreadsheet Controls
keywords: Jspreadsheet, Jexcel, javascript, using jspreadsheet and react
description: How to create rich javascript data grids with spreadsheet controls on React using Jspreadsheet Pro.

Examples


# React Spreadsheet

How to create a rich data grid with spreadsheet controls using React and Jspreadsheet Pro.

## React Spreadsheet Controls

[See this example working online](https://codesandbox.io/s/react-spreadsheet-pfrgf) 

{.ignore}

```jsx
import React, {useRef, useEffect} from "content/docs/v7/examples/react";
import jspreadsheet from "jspreadsheet-pro";
import xls from "@jspreadsheet/xls";

import "jspreadsheet-pro/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function App() {
    const spreadsheetRef = useRef(null);
    const license = "###license###";

    useEffect(() => {
        if (!spreadsheetRef.current.jexcel) {
            jspreadsheet(spreadsheetRef.current, [
                {
                    data: [["Sheet1"]],
                    minDimensions: [10, 10],
                    license: license
                },
                {
                    data: [["Sheet2"]],
                    minDimensions: [10, 10],
                    license: license
                }
            ]);
        }
    }, null);

    return (
        <div>
            <div ref={spreadsheetRef}/>
            <br/>
            <input
                type="button"
                value="Download"
                onClick={() => xls(spreadsheetRef.current, {version: true})}
            />
        </div>
    );
}
```
 

## React Data Grid using React Classes

[React Spreadsheet with Jspreadsheet](https://codesandbox.io/s/jexcel-and-react-z9nl5)

{.ignore}
```jsx
class Jspreadsheet extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options;
        this.wrapper = React.createRef();
    }

    componentDidMount = function() {
        this.el = jspreadsheet(this.wrapper.current, this.options);
    }

    addRow = function() {
        this.el.insertRow();
    }

    render() {
        return (
            <div>
                <div></div>
                <input type='button' value='Add new row' onClick={() => this.addRow()}></input>
            </div>
        );
    }
}

let options = {
    data:[[]],
    minDimensions:[10,10],
    license: '###license###',
};

ReactDOM.render(<Jspreadsheet options={options} />, document.getElementById('spreadsheet'))
```
 
