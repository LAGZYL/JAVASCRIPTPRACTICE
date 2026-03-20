
const counter1 = require('./counter.js')
const counter2 = require('./counter.js')
const counter3 = require('./counter.js')
console.log(counter1.increment())
console.log(counter2.increment())
console.log(counter1 === counter2);
console.log(counter3.increment());
console.log(counter3===counter2)