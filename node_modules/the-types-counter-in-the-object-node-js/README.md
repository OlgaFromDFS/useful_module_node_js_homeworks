# the-types-counter-in-the-object-node-js

Node.js module to create a new object in which the keys are types, the values are the number of these types.

## Installation

```
npm install the-types-counter-in-the-object-node-js
```

## Usage

Import the module using require. 

```js
const theTypesCounterInTheObject = require('the-types-counter-in-the-object-node-js');
```

Use the module as shown in the example.
Create a variable. Write an instance of the imported module to the variable. Through the dot, specify the function ```createObjectOfType(object)``` with an object argument. This function will return a new object with types and their number to ```result```.

```js
const result = theTypesCounterInTheObject.createObjectOfTypes({ field: undefined, anotherField: [], yetAnother: [undefined] });
```

Output the ```result``` to the console, for example.

```js
console.log(result);
```

## License

MIT
