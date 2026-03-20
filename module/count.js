// let value = 0
// module.exports = {
//   value,
//   increment(){
//     value++
//   }
// }

// const counter = require('./count')
// counter.increment(); 
// counter.increment();
// console.log(counter.value)



let count = 0;
count = 90;
// function getcount(){
//     return count;
// }
function inc(){
 count++
}
module.exports= {count, inc}



