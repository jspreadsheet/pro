const { expect } = require('chai');

describe('Validations', () => {
    it('Testing data validation DOM attributes', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['Name', 'Age', 'Email'],
                    ['John Doe', '35', 'johndoe'],
                    ['Jane Doe', '25', 'janedoe@example.com'],
                    ['Bob Smith', '40', 'bobsmith@example.com'],
                ],
                worksheetName: 'Sheet1',
            }],
            validations: [
                {
                    range: 'Sheet1!B:B',
                    type: 'number',
                    criteria: 'between',
                    value: [18, 99],
                    allowEmpty: false,
                    text: 'Age must be between 18 and 99',
                },
                {
                    range: 'Sheet1!C:C',
                    type: 'email',
                    allowEmpty: true,
                    text: 'Invalid email address',
                }
            ]
        })

        // Set an invalid age value
        test[0].setValue('B2', '17');

        // Check that the validation error message is displayed
        const cell2 = test[0].getCell(1, 1);
        expect(cell2.getAttribute('data-info')).to.equal('Age must be between 18 and 99');

        // Set a valid email address
        test[0].setValue('C2', 'johndoe@example.com');

        // Check that the validation error message is not displayed
        const cell3 = test[0].getCell(1, 2);
        expect(cell3.classList.contains('jss_warning')).to.be.false;
        expect(cell3.getAttribute('data-info')).to.be.null;
    });

    it('Testing data validation rule', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    ['Name', 'Age', 'Email'],
                    ['John Doe', '30', 'johndoe@example.com'],
                    ['Jane Doe', '25', 'janedoe@example.com'],
                    ['Bob Smith', '40', 'bobsmith@example.com'],
                ],
                worksheetName: 'Sheet1',
            }],
            validations: [
                {
                    range: 'Sheet1!B:B',
                    type: 'number',
                    criteria: 'between',
                    value: [18, 99],
                    allowEmpty: false,
                    text: 'Age must be between 18 and 99',
                },
                {
                    range: 'Sheet1!C:C',
                    type: 'email',
                    allowEmpty: true,
                    text: 'Invalid email address',
                }
            ]
        })

        // Set a invalid email address
        test[0].setValue('C2', 'johndoe');

        expect(test[0].hasErrors('C2')).to.be.true;
    });

    it('Programmatic Methods', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                data: [
                    [10],
                    [20],
                    [30],
                    [40],
                ],
                worksheetName: 'Sheet1',
            }]
        })

        // Set a invalid email address
        test[0].setValidations([{
            index: 0,
            value: {
                range: "Sheet1!A1:A4",
                action: "warning",
                criteria: "<",
                type: "number",
                value: [21]
            }
        }]);

        expect(test[0].hasErrors('A1')).to.be.undefined;
        expect(test[0].hasErrors('A3')).to.be.true;
        expect(test[0].getValidations().length).equal(1);
        test[0].resetValidations([0])
        expect(test[0].hasErrors('A3')).to.be.undefined;
    });

    it('hasErrors', () => {
        let test = jspreadsheet(root, {
            tabs: true,
            worksheets: [
                { minDimensions: [10,10] },
                { minDimensions: [10,10] },
                { minDimensions: [10,10], data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[1011]] },
            ],
            validations: [
                {
                    range: 'Sheet3!A1:A10',
                    action: "warning",
                    criteria: "<",
                    type: "number",
                    value: [500],
                }
            ]
        })

        expect(test[2].hasErrors()).to.be.true;
        test[2].setValue('A10',10)
        expect(test[2].hasErrors()).to.be.false;
    });

    describe('Column operations', () => {
        describe('Insert column', () => {
            it('Insert columns to the left of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertColumn([{
                    column: 1,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:D3');
            })

            it('Insert columns inside validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertColumn([{
                    column: 2,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');
            })

            it('Insert columns to the right of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertColumn([{
                    column: 3,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');
            })
        })

        describe('Delete column', () => {
            it('Delete column to the left of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(0);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!A2:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!A2:C4');
            })

            it('Delete column from left corner of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(1);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');
            })

            it('Delete column from the middle of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');
            })

            it('Delete column from right corner of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(3);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');
            })

            it('Delete column to the right of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(5);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');
            })

            it('Delete the first two columns from validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(1, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');
            })

            it('Delete the last two columns from validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn(2, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');
            })

            it('Delete the two columns at the ends of the validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteColumn([1, 3]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:B4');
            })
        })

        describe('Move column', () => {
            it('Move column to the left of validation into it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveColumn(1, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:E5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:E5');
            })

            it('Move column from left corner of validation to outside of it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveColumn(2, 1);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:E5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:E5');
            })

            it('Move column from right corner of validation to outside of it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveColumn(4, 5);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:F5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:F5');
            })

            it('Move column to the right of validation into it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveColumn(5, 4);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:F5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:F5');
            })
        })
    })

    describe('Row operations', () => {
        describe('Insert column', () => {
            it('insert rows to the left of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertRow([{
                    row: 1,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B3:C4');
            })

            it('insert rows inside validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertRow([{
                    row: 2,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C4');
            })

            it('insert rows to the right of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:C3',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].insertRow([{
                    row: 3,
                }]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:C3');
            })
        })

        describe('Delete row', () => {
            it('Delete a row above validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(0);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B1:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B1:D3');
            })

            it('Delete row from top corner of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(1);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');
            })

            it('Delete row from the middle of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');
            })

            it('Delete row from bottom corner of validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(3);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D3');
            })

            it('Delete row below validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(5);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');
            })

            it('Delete the first two rows from validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(1, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');
            })

            it('Delete the last two rows from validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow(2, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');
            })

            it('Delete the two rows at the ends of the validation', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!B2:D4',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].deleteRow([1, 3]);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D4');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!B2:D2');
            })
        })

        describe('Move row', () => {
            it('Move row above validation into it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveRow(1, 2);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:E5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:E5');
            })

            it('Move row from the top corner of the validation to outside of it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveRow(2, 1);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:E5');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C2:E5');
            })

            it('Move row from bottom corner of validation to outside of it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveRow(4, 5);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E6');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E6');
            })

            it('Move row below validation into it', () => {
                let test = jspreadsheet(root, {
                    tabs: true,
                    worksheets: [
                        {
                            minDimensions: [10,10],
                            data: [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]],
                        },
                    ],
                    validations: [
                        {
                            range: 'Sheet1!C3:E5',
                            action: "warning",
                            criteria: "<",
                            type: "number",
                            value: [500],
                        }
                    ]
                })

                test[0].moveRow(5, 4);

                let validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E6');

                jspreadsheet.history.undo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E5');

                jspreadsheet.history.redo();

                validation = test[0].getValidations(0);

                expect(validation.range).to.equal('SHEET1!C3:E6');
            })
        })
    })
});