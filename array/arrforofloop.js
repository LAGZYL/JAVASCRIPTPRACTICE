let numbers = [1, 2, 3,'apple', 'bannana', 4, 5, 'orange',
     true, 89, 32,'idowu', 'lanre', 78, false]
for (let i = 0; i < numbers.length; i++){ 
   console.log(`index= ${i}, element= ${numbers[i]}`);
 }
// // let students= [ "Gbenga", "Dami", "Lagzyl"]
// // students.age = 12;
// // students.address ="70 plumbley hall"

// // let ObjName = {firstNmae: "Gbenga", secondNmae:  "Lasisi"}
// // let Strname = "Lagzyl"
// // for (let ele of Strname){
// //    console.log(ele);
// // }


// /*
// an object is an ITERABLE if it has  [Symbol.iterator]() method
// [Symbol.iterator]() method returns an ITERATOR object
// an object is an ITEARATOR if it has  a method called next()
// the next() method itself returns an object of this shape
//  {value:<placeholdervalue>, done: <true | false>}
// */
// // let arr =[2, 4, 5]
// // let arr2 =[2, 4, 5, "me"]
// // // let iteratorObject = arr2[Symbol.iterator]();
// // // console.log(iteratorObject.next()) // {value: 2, done: false}
// // // console.log(iteratorObject.next())
// // // console.log(iteratorObject.next())
// // // console.log(iteratorObject.next())
// // // console.log(iteratorObject.next())
// // let iterableObject = {

// //     a: 6,
// //     b: 'hello',
// //     [Symbol.iterator](){
// //       let start = 4;
// //       let end  = 10;
// //        return {
           
// //            next(){
// //                if (start <= end){
// //                 return {value: start++ , done:false}
// //              }
// //               return {value: undefined, done:true}
// //             }
// //        }

// //     }
   
// // }
// // for(let element of iterableObject){
// //    console.log(element)
// // }


// /*
// some buit in iterable Javascript include Array, String, set and map 
// all of them can be use with for of loop

// const iterator = iterable[Symbol.iterator]()
// const result = iterator.next() // {value: <any>, done: <boolean>}

// while (!result.done){
//   console.log(result.value);
//   result = iterator.next();  // {value: <any>, done: <boolean>}
// }
// */


// /*
// to create a set you use new
// i.e let set = new Set then call it and put array syntax to it
// let set = new Set([1,2,3,4])
// Note: the term they use for array is element 
// Note: the term they use for string is Charaters 
// Note: the term they use for Map is Enteries
// Note: the term they use set is Values
// */
// let str = "idowu" // Characters
// // let arr = [1,2,3,4] // Element
// // let set = new Set([1,2,3,4,1,1,2,6,7,3,3,2,1]) // value
// // let map = new Map([["k1","V1"],["k2","V2"],["k3","V3"]]) // Entries
// // console.log([...arr])
// // console.log([...str])

// // for(let value of set ){
// //      console.log(value)
// // }

// // 

// // for(let [key, value] of map ){
    
// //      console.log(key, value)
// // }

// /*
// convert set to array to remove duplicate value

// */

// // let arrDuplicate = [1,1,1,1,4,4,4,6,7,8,9,5,6,7,7]
// // let set = new Set(arrDuplicate)
// // let arrUnique = [...set]
// // console.log(arrUnique)

// /*
// convert map into an array

// */

// // let map = new Map([["k1","V1"],["k2","V2"],["k3","V3"]])
// // let arrmap = [...map]
// // console.log(arrmap)

// /* a  list of expenses 1200, 500, 900
// use a for ... of loop to find total amount spent*/
// // let listofFood = [1200, 500, 900, 9808, 565]
// // let total = 0

// // for(let element of listofFood){
// //  total =  element + total
// //  total += element
// // }
// // console.log(total);

// /*

// scores: 34, 89, 67, 76, 99, 10
// use the classic loop to find the largest number
// for (;;){

// }
// */
// //  let scores = [34,89,99,6,716,99,1000,9800]
// //  let largest = scores[0]
// //  for(let i =1;i < scores.length; i++){
// // console.log(i, scores[i])
//   //   console.log("largest found so far is ", largest)
//   //  if( scores[i] > largest  ){
//   //   largest = scores[i]
     
// //    } 
// //  }
//  console.log("this is  final Largest ",largest )

//  /*
 
//  numbers:  1, 2, 3, 4, 5, 6, 8
// count the number of even numbers
//  */

// let numbers = [1,3,4,5,6,8]
// let count = 0
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i]%2 === 0){
//     count++
//   }
// }
// console.log(count);

// for(let element of numbers){
//   if(element % 2 === 0){
//     count++
//   }
// }
// console.log(count);
 
// let numbers = [34,89,9,6,716, 90, 990];
// let largest = -Infinity
// let secondLargest = -Infinity

// for (let element of numbers){ 
//         if ( element > largest ){
//              secondLargest = largest
//              largest = element
//              console.log("secomd largest in if block ", secondLargest)
//              console.log("the largest is now ", largest)
                 
//          } else if(element > secondLargest && element !== largest  ){
//               secondLargest = element
//               console.log("the secondlargest is ", secondLargest)
//          }

      

//   }

// console.log("final second largest is ", secondLargest)
// console.log("the final largest is ", largest)

// let fruits = [ 'banana', 'apple', 'orange', 'bannana', 'apple']
// let count = 0;

// for(let element of fruits){
//    if(element === "guava"){
//     count++
//    }
// }
// console.log(count);

// let numbers =[2,6,3,7,9,8,2,10,21,24,27]
// let count = 0;

// for(let element of numbers){
//   if(element % 2 !== 0){
//     count++;
//     console.log(element);
//   }
// }
// console.log(count);

// let mixed = [3, 5, 9, -7, 89, 0]
// let firstNegative = 0


// for(let element of mixed){
//   if(element < 0){
//     firstNegative = element
//     break;
//   }
// }
// console.log(firstNegative)

// for(let element of mixed){
//   if(element < 0){
//    console.log(element)
//     break;
//   }
// }

// const numbers = [1,2,3,4,5,6]
// const evens = []
// const odd = []
// for (let element of numbers){
//     if (element % 2 === 0){
//       evens.push(element)
//    }
// }
// console.log(evens) //[2, 4, 6]
// console.log(numbers) //

// import {filter} from '../filtermapandreduce/filter.js'
// const numbers = [1,2,3,4,5,6]
// const evens = filter(numbers, n => n % 2 !== 0)
// console.log(evens)
// console.log(numbers);

// const numbers = [1,2,3,4,5,6]
// console.log(numbers.filter(n => n % 2 === 0))
