const theTypesCounterInTheObject = require('the-types-counter-in-the-object-node-js');

const result = theTypesCounterInTheObject.createObjectOfTypes({ cat: {name: 'Laska', age: '3'}, book: ['Луна суровая хозяйка', 'Стоик'], field: null });

console.log(result);
