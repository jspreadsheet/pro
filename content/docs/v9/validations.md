title: Spreadsheet Validations in Jspreadsheet
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet, grid, validations, spreadsheet validations.
description: A guide to implement data grid validations in Jspreadsheet Version 9



# Spreadsheet Validations

Data validations helps to create rules for the cells helping users to enter valid or expected data types. 

## Documentation

### Methods

| Method   | Description                                                                                                                                                     |
| ---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| number   | Check if the value is a number.                                                                                                                                 |
| date     | Check if the value is a date.                                                                                                                                   |
| text     | Check if the value is a text.                                                                                                                                   |
| itemList | Check if the value is part of the list. This method does not use any constraint and in its reference property, an array with the allowed values must be passed. |

  

## Constraints

| Constraint  | Allowed methods          | Description                                                                                                                                         |
| ------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| =           | date \| number \| text | The validator also checks if the value is equal to the reference value.                                                                             |
| >           | date \| number          | The validator also checks if the value is greater than the reference value.                                                                         |
| >=          | date \| number          | The validator also checks if the value is greater than or equal to the reference value.                                                             |
| <           | date \| number          | The validator also checks if the value is less than the reference value.                                                                            |
| <=          | date \| number          | The validator also checks if the value is less than or equal to the reference value.                                                                |
| between     | date \| number          | The validator also checks whether the value is between the two reference values. In this case the reference property must be a two-position array.  |
| out         | date \| number          | The validator also checks that the value is not between the two reference values. In this case the reference property must be a two-position array. |
| contains    | text                     | The validator also checks if the reference value is present within the value.                                                                       |
| not contain | text                     | The validator also checks if the reference value is not present within the value.                                                                   |
| email       | text                     | The validator also checks if the value is a valid email.                                                                                            |

  

## Examples

### Using the number validator

{.ignore}
```javascript
// Just check if it's a number
jSuites.validations.number('10'); // Returns true

// Check if it is a number greater than 27
jSuites.validations.number(5, { // Returns false
    constraint: '>',
    reference: 27
});

// Check if the number is not between 11 and 40
jSuites.validations.number(9, { // Returns true
    constraint: 'not between',
    reference: [11, 40]
});
```
 

### Using the date validator



{.ignore}
```javascript
// Just check if it's a date
jSuites.validations.date('02-14-2000'); // Returns true

// check if it is a date before 01-01-2000
jSuites.validations.date('01-01-2000', { // Returns false
    constraint: '<',
    reference: '01-01-2000'
});

// Check if the date is between 01-01-2010 and 12-31-2020
jSuites.validations.date('07-18-2017', { // Returns true
    constraint: 'between',
    reference: ['01-01-2010', '12-31-2020']
});
```
 

### Using the text validator



{.ignore}
```javascript
// Just check if it's a text
jSuites.validations.text('it is a text'); // Returns true

// Check if the text contains another text
jSuites.validations.text('It contains?', { // Returns true
    constraint: 'contains',
    reference: 'It contains'
});

// Check if the text is a valid url
jSuites.validations.text('https://jsuites.net', { // Returns true
    constraint: 'url',
});
```
 

### Using the item list validator



{.ignore}
```javascript
// Check if the item is on the list
jSuites.validations.itemList('8', [1, 2, 4, 8]); // Returns true
```
 

### Using the general validator



{.ignore}
```javascript
// Check if the number is not between 11 and 40
jSuites.validations(9, { // Returns true
    constraint: 'not between',
    reference: [11, 40],
    type: 'number'
});
```
 

### Write your own custom validations

It is possible you create and apply custom validation to your cells using JavaScript. The custom method will receive two information, the cell value and the defined configuration, and the method should return if the cell value is valid or not. 

{.ignore}
```javascript
/**
 * @param {string} value - The current cell value
 * @param {object} config - The validation definetions
 */
let validation = function(value, config) {

    // Return true when the value is VALID or false when the value is INVALID
    return true;
}
```

### Working Example

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets:[{
        minDimensions: [6,10],
        validations: {
            'A1': {
                type: 'email',
                message: 'The cell must contain a valid email'
            },
            'B1:B9': {
                type: 'date',
                operator: '>=',
                reference: '2020-01-01',
                message: 'The year must be 2020 or after'
            },
            'C1': {
                type: 'date',
                operator: 'between',
                reference: [ '2020-01-01', '2021-01-01' ],
                message: 'The date must be between 2020-01-01 and 2021-01-01'
            },
        }
    }]
});
</script>
```
 
