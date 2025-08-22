title: Implementing Excel-Like Formulas in HTML Forms
keywords: Excel-like formulas, HTML forms, Jspreadsheet, LemonadeJS, React, JavaScript spreadsheet formulas, HTML spreadsheet integration, Real-time updates, Data binding, Web development, Coding tutorial, Formulas in HTML, Spreadsheet integration, Web application development, JavaScript plugins
description: Learn how to integrate Excel-like formulas into HTML forms using the Jspreadsheet Formula plugin. Achieve automatic updates and real-time rendering with LemonadeJS or React. Follow our step-by-step tutorial for easy implementation.

{.breadcrumb}
* [Go back to the Blog section](/blog)

# Excel-Like formulas on HTML forms

_Reactive updates using React or LemonadeJS._ 

<br>

![Jspreadsheet Data Grid](img/icon.png){.icon}

**Jspreadsheet Team** \
Published at 08/06/2023

 ![Excel-Like Formulas](img/blog/excel-like-formulas.jpg){.cover}  

## Introduction

Effective data management is essential for individuals and organizations in the digital era. Microsoft Excel has long been renowned for its data manipulation capabilities. But what if we could bring Excel-like formulas to HTML forms? This concept revolutionizes web development by empowering users to perform calculations, automate processes, and generate dynamic outputs directly within web forms. This tutorial presents a step-by-step guide on implementing Excel-like formulas in HTML forms using the Jspreadsheet Formula plugin. The formula results will be rendered and updated automatically through integration with LemonadeJS or React, ensuring real-time updates. Excel formulas are tools for performing calculations and data manipulation. This tutorial explores integrating Excel-like formulas into HTML forms using the Jspreadsheet Formula plugin. With integration with LemonadeJS or React, developers can achieve automatic rendering and real-time updates of the formula results.  

### How to install

 

#### From NPM



```bash
$ npm install @jspreadsheet/formula
```
 

#### From CDN


{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula@2.0.2/dist/index.min.js"></script>
```
  

## Tutorial

As mentioned in the introduction, achieving a smooth user experience involves updating the formula result whenever the user modifies an input value. While this can be accomplished using events, in this tutorial, we will leverage the two-way data binding feature to automatically update the formula result based on changes made to the HTML input elements. By implementing two-way data binding and incorporating features like the home tab and absolute cell references, developers can ensure that the formula result remains up to date, providing a seamless and responsive user experience. 

### Working example

 The following example demonstrates how to create a dynamic HTML form that calculates the sum and average of selected cells. Start by clicking the cell where you want the result to appear, then type an equal sign in the formula bar. Next, choose the range of cells you want to include in the calculation and use the SUM function to add the values. To calculate the average, use the AVERAGE function. Finally, press Enter to execute the formula and see the result in the selected cell.  


```html
<html>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs@3.2.1/dist/lemonade.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula@2.0.2/dist/index.min.js"></script>

<div id="excel-like-formulas"></div>

<script>
function App() {
    let self = this;
    self.price1 = 0;
    self.price2 = 0;

    return `<div class="row">
        <div class="form-group p2">
            <label>Enter the price 1:</label>
            <input type="text" data-mask="#.##0,00" :bind="self.price1" />
        </div>
        <div class="form-group p2">
            <label>Enter the price 2:</label>
            <input type="text" data-mask="#.##0,00" :bind="self.price2" />
        </div>
        <span>SUM: {{SUM(parseFloat(self.price1),parseFloat(self.price2))}}</span>
        <span>- AVERAGE: {{ROUND(AVERAGE(parseFloat(self.price1),parseFloat(self.price2)),2)}}</span>
    </div>`;
}

lemonade.render(App, document.getElementById('excel-like-formulas'));
</script>
```
```javascript
import lemonade from 'lemonadejs';
import formula from '@jspreadsheet/formula';

function App() {
    let self = this;
    self.price1 = 0;
    self.price2 = 0;

    return `<div class="row">
        <div class="form-group p2">
            <label>Enter the price 1:</label>
            <input type="text" data-mask="#.##0,00" :bind="self.price1" />
        </div>
        <div class="form-group p2">
            <label>Enter the price 2:</label>
            <input type="text" data-mask="#.##0,00" :bind="self.price2" />
        </div>
        <span>SUM: {{SUM(parseFloat(self.price1),parseFloat(self.price2))}}</span>
        <span>- AVERAGE: {{ROUND(AVERAGE(parseFloat(self.price1),parseFloat(self.price2)),2)}}</span>
    </div>`;
}
```
```jsx
import React, { useState } from "react";
import formula from "@jspreadsheet/formula";

export default function App() {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);

  return (
    <div>
      <div className="form-group p2">
        <label>Enter the price 1:</label>
        <input
          type="text"
          data-mask="#.##0,00"
          value={price1}
          onChange={(e) => setPrice1(e.target.value)}
        />
      </div>
      <div className="form-group p2">
        <label>Enter the price 2:</label>
        <input
          type="text"
          data-mask="#.##0,00"
          value={price2}
          onChange={(e) => setPrice2(e.target.value)}
        />
      </div>
      <span>
        SUM: {SUM(parseFloat(price1), parseFloat(price2)).toString()}{" "}
      </span>
      <span>
        - AVERAGE:
        {ROUND(AVERAGE(parseFloat(price1), parseFloat(price2)), 2).toString()}
      </span>
    </div>
  );
}
```
  

## Professional solution

If using Excel-like formulas in an enterprise setting appeals to you, JSS Formula Pro may be the perfect fit. This professional tool empowers you to deploy these formulas on both the front and back ends. It has over 400 formulas and supports cross-calculations, multiple virtual worksheets, and various other functionalities. Check out JSS Formula Pro for an enhanced experience.  

### Data grid with excel like controls

Another complementary solution is Jspreadsheet, a platform that allows you to construct feature-rich JavaScript data grids furnished with Excel-like controls. You can apply Excel-like formulas to create sophisticated applications, enhancing the user experience. For additional information about our data grid solution, kindly visit <https://jspreadsheet.com>.  

### Why Do I Need an Excel Formula?

Excel formulas are essential for data analysis, reporting, and decision-making. Incorporating Excel-like formulas into your HTML forms enables users to perform calculations, analyze data, and generate dynamic reports. Whether calculating the average of a range of cells, using the SUM function to add values, or working with date and time functions, Excel-like formulas enhance the functionality and interactivity of your forms. 
