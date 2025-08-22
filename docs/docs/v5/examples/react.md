title: React Spreadsheet with Jspreadsheet Version 5.
keywords: Jspreadsheet, javascript, using Jspreadsheet and react
description: An example of how to integrate Jspreadsheet Version 5 with React.



# The Javascript spreadsheet with React

How to create a react data grid with spreadsheet controls using Jspreadsheet.

[React data grid with Jspreadsheet sample project](https://codesandbox.io/s/Jspreadsheet-and-react-z9nl5)

{.ignore}
```jsx
class Jspreadsheet extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options;
        this.wrapper = React.createRef();
    }

    componentDidMount = function() {
        this.el = Jspreadsheet(this.wrapper.current, this.options);
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
    license: '39130-64ebc-bd98e-26bc4',
};

ReactDOM.render(<Jspreadsheet options={options} />, document.getElementById('spreadsheet'))
```
 
