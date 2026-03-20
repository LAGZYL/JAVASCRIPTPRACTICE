
// console.log(lib.add(2, 3))
// import * as lib from "./lib.js" 
// // import {add, square, substract, num} from './lib.js'
// console.log(lib.square(9))
// console.log(lib.substract(3,2))
// console.log(lib.num);

 //namespace object


 //useLib.js

// import {h} from "./lib.js" //using for side effect
// console.log(h);

import def, {f1,b} from './lib.js';
console.log(def);
console.log(f1());
let B = new b()
console.log(B.met());



