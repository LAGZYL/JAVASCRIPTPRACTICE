// let fruit = ["Banana", "Apple", "Mango"]
// // fruit[1] = "Orange"
// // console.log(fruit)
// // console.log(fruit.length)

// // Push() = to add to the end
// let fruit = ["Banana", "Apple", "Mango"]
// fruit.push("Cherry")
// console.log(fruit)


// unshift() – add to the beginning
// let fruit = ["Banana", "Apple", "Mango"]
// fruit.unshift("Grapes")
// console.log(fruit)

// pop() – remove from the end
// shift() – remove from the beginning


// Push = add to the end
// pop = remove from the from the end
// unshift = add to the front 
// shift = remove from the front

// Create an array called colors with at least 5 color names.

// Print the first and last elements of the colors array.

// Add "Purple" to the end of the array.

// Remove the first element from the array.

// Find the length of the array.


// let color = ["red", "green", "blue", "white", "purple"]
// for(let i = 0; i < color.length; i++){
// console.log(color[1])
// }

// for(let i =0; i < color.length; i++){
//     if(i==0){
//         console.log(color[0])
//     }
// }

// for(let i =0; i < color.length; i++){
//     if(i == 0 || i == color.length -i){
//         console.log(color[4])
//     }
// }

// color = ["red", "green", "blue", "white", "purple"]
// color.push("brown")
//     console.log(color)

// color.shift("red")
// console.log(color)

// for(i = 0; i < color.length; i++){
//     if(i ==0){
//         console.log(color.length)
//     }
    
// }


// // // Write a for loop that prints numbers from 1 to 10.
// let number = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i< number.length;i++){
//     console.log(number[i])
// }
// Write a for loop that prints even numbers between 0 and 20.
// for(i = 0; i <= 20; i+=2){
//     console.log(i)
// }

// for(let i = 0; i <=20; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// Given:

// let colors = ["red", "blue", "green", "yellow"]

// // Write a for loop that prints each color.
// for(let i = 0; i < colors.length; i++){
//         console.log(colors[i])
// }

// // Write a for loop that prints the length of an array only once.
// for(i = 0; i < colors.length; i++){
//     if( i ==0 || i < colors.length == 0){
//         console.log(colors.length)
//     }
// }




// Write a for loop that prints "Hello" 5 times.

//  Intermediate Level

// // Write a for loop that calculates the sum of numbers from 1 to 100.
// let sum = 0
// for (let i = 0; i < 100; i++){
//     sum +=i
// }
// console.log(sum)
// Given:

// let numbers = [3, 7, 2, 9, 5];
// for(let i = 3; i< numbers.length; i++){
//     if(i==3){
//     console.log(numbers[i])
// }
// }

// // Write a for loop that finds the largest number in the array.

// // Write a for loop that prints numbers from 10 to 1 (reverse order).
// for(let i = 10; i >=1; i--){
//     console.log(i)
// }
// // Given:


// Write a for loop that prints:

// Index 0: apple
// Index 1: banana
// Index 2: orange

// let fruits = ["apple", "banana", "orange"];

// for(let i =0; i < fruits.length; i++){
//     console.log("Index " + i + " : " + fruits[i]);
// }
// // Write a for loop that counts how many numbers between 1 and 50 are divisible by 5.
// for(let i = 0; i <= 50; i++){
//     i
// }
// 🔴 Advanced Level

// Given:

let nums = [1, 2, 3, 4, 5];
let mum = []
// for(let element of nums){
//     mum.push(element*2)
// }
// console.log(mum);

console.log(nums.map(n => n*2))



// Write a for loop that creates a new array with each value multiplied 
// by 2.



// Write a for loop that prints a right-angled triangle using *:

// *
// **
// ***
// ****
// *****


// Given:

// let word = "javascript";


// Write a for loop that counts how many vowels are in the word.

// Write a for loop that checks whether a number is prime.

// Write a for loop that reverses a string.