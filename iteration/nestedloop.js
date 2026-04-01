

/*
for each execution of innerloop the outerloop will execute all his condition 
before the innerloop update.
*/
// for (let i= 1; i <=3; i++){
//     console.log(i);
//   for (let j = 1; j <= 4; j++){
//       console.log(`outer loop i = ${i}, inner loop j = ${j}`)
//    }

// }


// for (let i= 1; i <=5; i++){

//     for (let j = 1; j <= 5; j++){
//       console.log(`${i} X ${j} = ${i * j}`)
//    }
// }


// let size = 4
// for (let i= 1; i <= size; i++){
//     let row = '';
//     for (let j = 1; j <= size; j++){
//       row += '* '
//     }
//     console.log(row)

// }


// let size = 2
// for (let i= 1; i <= size; i++){
//     let row = '';
//     console.log('row  outer', row)
//     for (let j = 1; j <= size; j++){
//       row += '* '
//       console.log('inner row', row)
//     }
//     // console.log('final row', row)
//     console.log(row);

// }


// for (let i = 1; i <= 4; i++){ 
//     let row = '';
//     for (let j = 1; j <= i ; j++){ //hard coding
//       row += '* '
//     }
//     console.log(row)

// }
/*
tiangle reverse coding with inner loop counting down
*/
// for (let i = 4; i >= 1; --i){ 
//     let row = '';
//     for (let j = i; j >= 1 ; --j){ //hard coding
//       row += '* '
//     }
//     console.log(row);
// }
// 

/*

tiangle reverse coding with inner loop counting up
*/
// for (let i = 4; i >= 1; --i){ 
//     let row = '';
//    for (let j = 1; j <= i ; j++){ //hard coding
//        row += '* '
//       }
//     console.log(row);
//   }



  // for (let i = 1; i <= 3; i++){ 
  //   for (let j = 1; j <= 3 ; j++ ){ 
  //       if ( i === 2){
  //         break;
  //       }
  //       console.log(`i=${i}, j=${j}`)
        
  //   }

// 


// for (let i = 1; i <= 3; i++){ 
//     for (let j = 1; j <= 3 ; j++ ){ 
//         if ( j === 2){
//           continue;
//         }
//         console.log(`i=${i}, j=${j}`)
        
//     }
//   }


/*
write a nested loop where the outer loop runs from 1-3, and the 
inner, from 1-5. print only even numbers from the inner loop

*/


// for(let i = 1; i <= 3;i++){
//     for(let j = 1; j <= 5; j++){
//       if(j%2 !== 0){
//         continue;
        
//       }
//       console.log(j)
//     }
// }


/*
or
*/
// for(let i = 1; i <= 3;i++){
//     for(let j = 1; j <= 5; j++){
//       if(j%2 === 0){
//         console.log(j);
        
//       }
    
//     }
// }

// let i = 1;

// while (i <= 3){
//    for (let j = 1; j <= 2; j++){
//          console.log(`i=${i}, j=${j}`)
//   }
//  i++;
// }


let i= 1
while ( i <=3 ){
  let j = 1
  while(j <= 4){
     console.log(`outer loop i = ${i}, inner loop j = ${j}`)
      j++
   }
   i++
}
