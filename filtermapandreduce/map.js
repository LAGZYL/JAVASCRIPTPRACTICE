const num = [1,2,3,4,5,6]
// const double = []

// for(let ele of num){
//     double.push(ele*2)
// }
// console.log(double);
// console.log(num);

// function Map(arry, callback){
//     const result = []
//     for(let i = 0;i < num.length; i++){
//         result.push(callback(arry[i], i, arry))
        
//     }
//     return result;

// }
// // console.log(Map(num, n => n-2))
// console.log(num.map(n => n%3 === 0));


const animals = ['dog', 'cat', 'elephant', 'bat', 'lion', 'giraffe']
let capitalLetter = []

for(let i = 0;i< animals.length; i++){
    capitalLetter.push(animals[i].toUpperCase())
}
console.log(capitalLetter);
animals.map(n =>n.toUpperCase()) // built in function