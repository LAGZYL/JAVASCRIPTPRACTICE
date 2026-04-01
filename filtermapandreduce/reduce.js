let numbers = [1,2,3,5,4,6];
// let total = 0;

// for(let ele of number){
//     total += ele
// }
// console.log(total);

// function myReduce (array, callback, initialvalue){
//       let accumulator = initialvalue;

//       for (let i = 0; i < array.length; i++){
//          accumulator = callback(accumulator, array[i], i, array)

//       }
//        return accumulator

// }


// const sum = myReduce(numbers, (acc, n ) => acc + n, 0)
// console.log(sum);
// console.log(numbers.reduce((acc, n ) => acc + n, 0)) // javascript in built


// let sum = numbers.filter(n => n%2 !== 0 ).map(n => n*2).reduce((acc, n ) => acc + n, 0)
// console.log(sum);


const words = [ 'hello', 'hey']
let total = 0

for(let i = 0; i < words.length; i++){
    total += words[i].length

}
console.log(total);
console.log(words.reduce((acc, n) => acc + n.length, 0))