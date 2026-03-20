// for (let i = 0; i < 4; i--){ 
//    console.log(i, 'hello');
// }
// console.log('i am after the loop')


/**
 0 < 4 true
-1 < 4 true
-2 < 4 true
-3 < 4 true
-4  < 4 true
  
 */

// for (let i = 0; i < 4; i++){ 
//    console.log(i, 'hello');
// }
// console.log('i am after the loop')

/*
0 < 4 true
1 < 4 true
2 < 4 true
3 < 4 true
4 < 4 false
*/


/*
ITERATION === repetition

 different ways of iterating in JS
*/

/*
1. classic for loop: for(<initialization>; <continuationCondition>; <update>){}
2. classic while loop: while(<continuationCondition>){}
2. for...in loop
3. for ...of loop
4. for await ... of loop
*/

// let i = 0;
// for(;i < 4;){
//    console.log("God is good")
//    i++
// }
// console.log("this is the end")

// for(let n = 0; n< 10 ;n++){
//    let z = n
//    z++
//    console.log(z)
// }



// for(let n = 0; n< 10;){
//    n++
//    console.log(n)
// }



// for (let i = 0; i < 10; i++){
//     console.log('i am before BREAK');
//     console.log('i', i);
//     if(i === 5){
//       break;
//     }
     
//     console.log('i am after BREAK');
// }

// console.log('i am after for loop');



// for (let i = 0; i < 10; i++){
//     console.log('i am before BREAK');
//     console.log('i', i);
//     if(i === 5){
//       continue;
//     }
     
//     console.log('i am after BREAK');
// }

// console.log('i am after for loop');


// for(let n = 1;n <=30;n++){
//    if(n%2===0){
//       console.log(n);
//    }
// }
// let sum =0;
// for (let i = 1; i <=10; i++){
//    sum = sum + i
//    sum +=i
// }
// console.log(sum);
// console.log(1+2+3+4+5+6+7+8+9+10)

/*
print 1 to 10 , but skip odd numbers

*/
// for(let i = 1;i <=10;i++){
//    if(i % 2 !== 0){
//       continue;
//    }
//    console.log(i)
// }
/*
print 1 to 10 , but skip 5 numbers
*/
// for(let i = 1;i <=10;i++){
//    if(i === 5){
//       continue;
//    }
//    console.log(i)
// }

/*
print 1 to 10 , but stop at 6
*/
// for(let i = 1;i <=10;i++){
//    if(i === 6){
//       break;
//    }
//    console.log(i)
// }


/*

find the first number between 1 and 50 divisible by 7, then stop the loop
*/
// let count = 0;
// for(let i = 1;i <= 50;i++){
//    if(!(i%5 === 0)){
//       console.log("this is i before continue ", i)
//       continue;  
//    }
//    console.log("this is i after continue " ,i)
//    count++
//    // console.log("count ", count );
//    if(count ===3){
//       break;
//    }
   // console.log("i am after break")
   
// }

// /*print number between 1 to 10 but skip multiple 3 */
// for(let i =1 ;i <= 15;i++){
// if(i%3 === 0){
//    continue;
// }
// console.log(i)
// }

/*loop between 1 to 10 but stop when you get to first even number */
// let count = 0;
// for(let i = 1; i <= 10; i++){
//    let remainder = i % 2
//    if(remainder === 0){
//       console.log("captured even number" ,i)
//       count++
//    }
      
//    if(count === 3){
      
//       break;
//    }
//    console.log("general i",i);
// }

/*
print the sum of number from 1 to 10
*/
// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum = sum + i
// }
// console.log(sum);

/*
console.log inside loop repeat action
console.log outisde loop run once
*/

/*
write a program using for loop to display the multiplication table of 5
*/
// let multiple = 0
// for(let i = 1;i <= 10; i++){
//    multiple = 5*i
//    console.log(multiple)
  
// }
 /*
 write a forloop that print a number from 10 down to 1
 */

//  for(let i = 10; i > 1 ;--i){
//    console.log(i)
//  }

/*
loop through numbers 1 to 10
skip 4 and 7
stop completely at 9

*/

// for(let i = 1; i <= 10;i++){
//   if(i === 4){
//     continue;
//   }
//   if(i === 7){
//     continue
//   }
//   if(i === 9){
//     break;
//   }
  // console.log(i);
// }
 

// for(let i = 1; i <= 10;i++){
//   if(i === 4||i === 7 ){
//     continue;
//   }
//    if(i === 9){
//     break;
//   }
// console.log(i)
// }


/*
keep adding numbers from 1 
until the total is greater than 20, then stop.

*/

let sum = 0;
for(let i = 1; i <= 10; i++){
  sum = sum + i
  // console.log("current sum ", sum);
//  console.log(`added ${i}, sum is now ${sum}`)
  if(sum > 10){
    break;
  }
}
console.log("final sum ", sum);

// let sum = 0;
// for(let i = 1; sum <= 20; i++){
//   sum += i
//  console.log(`added ${i}, sum is now ${sum}`)
  
// }
// console.log(sum);