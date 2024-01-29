const theTypesCounterInTheObject = require('the-types-counter-in-the-object-node-js');

// через переменные окружения
require('dotenv').config();
const data = process.env.OBJECT;
const dataString = String(data);
const dataObject = JSON.parse(dataString);
const result = theTypesCounterInTheObject.createObjectOfTypes(dataObject);

console.log(result);

// через стандартный ввод
process.stdin.resume();
process.stdin.on('data', (data) => { // вводить в формате JSON
    const dataString = String(data); 
    const dataObject = JSON.parse(dataString);
    const result = theTypesCounterInTheObject.createObjectOfTypes(dataObject);

    console.log(result);
});
