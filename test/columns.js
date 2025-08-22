const { expect } = require('chai');

describe('Columns', () => {
    it('Add new columns', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
                columns: [
                    {
                        type: 'calendar'
                    },
                    {
                        type: 'calendar'
                    },
                    {
                        type: 'calendar'
                    },
                ]
            }]
        });

        test[0].insertColumn(2, 1, true);

        expect(test[0].options.columns.length).to.equal(12);
        expect(test[0].options.columns[0].type).to.equal('calendar');
        expect(test[0].options.columns[1].type).to.equal('text');
        expect(test[0].options.columns[2].type).to.equal('text');
        expect(test[0].options.columns[3].type).to.equal('calendar');
    })

    it('Add new columns with properties', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
            }]
        });

        test[0].insertColumn([
            {
                column: 0,
                options: {
                    type: 'calendar',
                    title: 'My new column'
                }
            },
            {
                column: 5,
                options: {
                    type: 'checkbox',
                    title: 'My other new column'
                }
            }
        ]);

        expect(test[0].options.columns.length).to.equal(12);

        const column0 = test[0].options.columns[0];
        expect(column0.type).to.equal('calendar');
        expect(column0.title).to.equal('My new column');
        expect(test[0].options.columns[1].type).to.equal('text');

        const column5 = test[0].options.columns[5];
        expect(column5.type).to.equal('checkbox');
        expect(column5.title).to.equal('My other new column');
        expect(test[0].options.columns[4].type).to.equal('text');
        expect(test[0].options.columns[6].type).to.equal('text');
    })

    it('Move columns', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
                columns: [
                    {
                        type: 'text',
                    },
                    {
                        type: 'calendar',
                    },
                    {
                        type: 'calendar',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'text',
                    },
                ]
            }]
        });

        test[0].moveColumn(1, 3, 2);

        expect(test[0].options.columns.length).to.equal(10);

        expect(test[0].options.columns[0].type).to.equal('text');
        expect(test[0].options.columns[1].type).to.equal('text');
        expect(test[0].options.columns[2].type).to.equal('text');
        expect(test[0].options.columns[3].type).to.equal('calendar');
        expect(test[0].options.columns[4].type).to.equal('calendar');
        expect(test[0].options.columns[5].type).to.equal('text');
    })

    it('Delete multiple columns', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
                columns: [
                    {
                        type: 'text',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'checkbox',
                    },
                ]
            }]
        });

        test[0].deleteColumn(0, 2);

        expect(test[0].options.columns.length).to.equal(8);
        expect(test[0].options.columns[0].type).to.equal('checkbox');
        expect(test[0].options.columns[1].type).to.equal('checkbox');
    })

    it('Delete multiple columns', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
                columns: [
                    {
                        type: 'text',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'text',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'checkbox',
                    },
                    {
                        type: 'checkbox',
                    },
                ]
            }]
        });

        test[0].deleteColumn([0, 3]);

        expect(test[0].options.columns.length).to.equal(8);
        expect(test[0].options.columns[0].type).to.equal('checkbox');
        expect(test[0].options.columns[1].type).to.equal('checkbox');
        expect(test[0].options.columns[2].type).to.equal('checkbox');
        expect(test[0].options.columns[3].type).to.equal('checkbox');
        expect(test[0].options.columns[4].type).to.equal('checkbox');
    })

    it('Set column properties', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
            }]
        });

        test[0].setProperty(1, { type: 'checkbox' });

        expect(test[0].options.columns[1].type).to.equal('checkbox');
    })

    it('Set multiple column properties', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
                data: [['1']],
            }]
        });

        test[0].setProperty([
            {
                x: 0,
                value: { type: 'checkbox' }
            },
            {
                x: 2,
                value: { type: 'checkbox' }
            },
        ]);

        expect(test[0].options.columns[0].type).to.equal('checkbox');
        expect(test[0].options.columns[2].type).to.equal('checkbox');
    })

    describe('Column visibility', () => {
        it('Hide column', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                }]
            });

            test[0].hideColumn(5);

            expect(test[0].options.columns[5].visible).to.equal(false);
        })

        it('Hide multiple columns', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                }]
            });

            test[0].hideColumn([2, 4]);

            expect(test[0].options.columns[2].visible).to.equal(false);
            expect(test[0].options.columns[4].visible).to.equal(false);
        })

        it('Show column', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                    columns: [
                        {},
                        {},
                        {
                            visible: false
                        },
                        {
                            visible: false
                        },
                        {},
                        {},
                    ]
                }]
            });

            test[0].showColumn(2);

            expect(test[0].options.columns[2].visible).to.not.equal(false);
        })

        it('Show multiple columns', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                    columns: [
                        {},
                        {},
                        {
                            visible: false
                        },
                        {},
                        {
                            visible: false
                        },
                        {},
                    ]
                }]
            });

            test[0].showColumn([2, 4]);

            expect(test[0].options.columns[2].visible).to.not.equal(false);
            expect(test[0].options.columns[4].visible).to.not.equal(false);
        })
    })

    describe('Column width', () => {
        it('Set column width', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                }]
            });

            test[0].setWidth(5, 200);

            expect(test[0].options.columns[5].width).to.equal(200);
        })

        it('Set multiple columns width', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                }]
            });

            test[0].setWidth([5, 1], 200);

            expect(test[0].options.columns[1].width).to.equal(200);
            expect(test[0].options.columns[5].width).to.equal(200);
        })

        it('Set multiple columns width', () => {
            let test = jspreadsheet(root, {
                worksheets: [{
                    minDimensions: [10,10],
                    data: [['1']],
                }]
            });

            test[0].setWidth([5, 1], [150, 250]);

            expect(test[0].options.columns[1].width).to.equal(250);
            expect(test[0].options.columns[5].width).to.equal(150);
        })
    })

    it('Hide and show the index column', () => {
        let test = jspreadsheet(root, {
            worksheets: [{
                minDimensions: [10,10],
            }]
        });

        test[0].hideIndex();

        expect(test[0].table.classList.contains('jss_hidden_index')).to.equal(true);

        test[0].showIndex();

        expect(test[0].table.classList.contains('jss_hidden_index')).to.equal(false);
    })
});