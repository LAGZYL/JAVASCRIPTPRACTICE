//  export function filter (array, callback){
//    const result = [];

//    for (let i = 0; i < array.length; i++){
//        if (callback(array[i], i, array)){
//          result.push(array[i])
//      }
//    }

//    return result;
// }

// const animals = ['dog', 'cat', 'elephant', 'bat', 'lion', 'giraffe']
//   let bigAnimal = []
//   for(let i =0;i < animals.length; i++){
//       if(animals[i].length > 3 ) {
//         bigAnimal.push(animals[i])
//       }
//     }
//     console.log(bigAnimal);
//     console.log(animals.filter(n => n.length > 3)) // built in function

// let num = [2,3,4,5,6,7,7,8]
// let double = []
// for(let i = 0;i < num.length; i++){
//   if(num[i]%2 === 0){
//      double.push(num[i]*2)
//   }
// }
// console.log(double);
// console.log(num.filter(n => n%2 ===0).map(n => n*2))

let num = [2,3,4,5,6,7,7,8]
// let sum = 0

// for(let i =0; i< num.length;i++){
//   if(num[i]%2 === 0){
//     sum += num[i]
//   }
// }
// console.log(sum);
// console.log(num.filter(n => n%2 ===0).reduce((acc, n) => acc + n, 0));

