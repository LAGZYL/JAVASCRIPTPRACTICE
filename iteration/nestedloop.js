

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


let size = 2
for (let i= 1; i <= size; i++){
    let row = '';
    console.log('row  outer', row)
    for (let j = 1; j <= size; j++){
      row += '* '
      console.log('inner row', row)
    }
    // console.log('final row', row)
    console.log(row);

}