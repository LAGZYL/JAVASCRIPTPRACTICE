for/*
array is a list or collection of items 
array is a data structure that is use to store multiple related values 
into a single variable

instead of creating many variables


let students = ['id', 'ola', 'alaba'] //array literal
console.log(students.length) //3
let ages = [23, 67, 67]

console.log(students[0])
console.log(students[1])
console.log(students[2])

students[1] = 'john'
students[0] = 'joe'
console.log(students) //['joe', 'john', 'alaba']
students[3] = 'gbenga'
console.log(students) //['joe', 'john', 'alaba', 'gbenga']

console.log(students.length) //4
*/

let fruits = ['apple', 'bannana']
// fruits.push('guava', 'pineapple')
// fruits.push('orange') //add to the end

// console.log(fruits);

// fruits.unshift('mango') //ad to the beginning
// fruits.unshift('water melon', 'cucumber')
// console.log(fruits)

// console.log(fruits.pop()) // remove last element
// console.log(fruits);
// console.log(fruits.shift()) // removed first element


// let numbers = [10, 20, 30] // 3
// console.log(numbers[45]) // undefined

/*
the index of the last element is always one less than the number of elements
 in the array; that is , its length
*/

let numbers = [1, 2, 3,'apple', 'bannana', 4, 5, 'orange', true, 89, 32,'idowu', 'lanre', 78, false]

for (let i = 0; i < numbers.length; i++){ 
   console.log(`index= ${i}, element= ${numbers[i]}`);
}
for (let ele of numbers){
   console.log(ele)
}
