// function wait (delay){
//    const start = Date.now();
//    while (Date.now() - start < delay){

//     //    console.log('this is now', Date.now())
//     }
// console.log("i am after Sychronous delay")
// }


// console.log('start synchronous operation')
// wait(1000)
// console.log('stop synchronous operation')

// console.log('start')
// setTimeout(()=>{
//   console.log('Timer')
// // wait(1000)
// }, 0)
// console.log('end')

// console.log('1')
// setTimeout(() => console.log('2'), 1000)
// setTimeout(() => console.log('3'), 0)
// console.log('4')

// setTimeout(() => console.log('first'), 3000)
// console.log("hello")
// setTimeout(() => console.log('second'), 1000)
// setTimeout(() => console.log('third'), 3000)
// console.log("Helllo")
// setTimeout(() => console.log('fourth'), 2000)

// console.log("start")
// setTimeout(()=> console.log("middle"), 1000)
// setTimeout(()=>console.log("end"), 2000)

// const id = setInterval(()=>console.log('i am set interval'), 2000)
// clearInterval(id)
// console.log(id)


// let count = 5
// function timerCallback(){
//   console.log(count)
//   count--
//    if ( count < 0){
//      clearInterval(intervalID)
//   }

// }
// const intervalID = setInterval(timerCallback, 1000)

// let count = 0
// const intervalID = setInterval(() => {
//   count++
//   console.log(count)
 
//    if ( count === 5){
//      clearInterval(intervalID)
//   }

// }, 1000)

// let data = "hi";
// setTimeout(()=>{
//    data = 'hello'
//   console.log(data)
// }, 1000)


// function x(){

//   setTimeout(()=>{
//     console.log('recursive')
//      x()
// });
// }

// x()

// function x(){

//   setTimeout(()=>{console.log("i am before nested timer" ); setTimeout(()=>console.log("nested timer"),5000)}, 5000)
// }

// x()

// function delaylog(message delay){
//   setTimeout(()=>console.log(param), delay);
// } 
// message("God is good", 1000);



// function trafficlight(){
//    console.log("red")
//    setTimeout(()=>{
//     console.log("Green")
//       setTimeout(()=>{
//         console.log("yello");
//          setTimeout(()=>{
//           trafficlight()
//          },1000)
//       },3000)
//   },2000);
// }
// trafficlight


// let count = n
// let numberofCount1;
// let numberofCount2;
// let numberofCount3;
// function trafficlight(){
//   numberofCount1 = setTimeout(()=>{
//     console.log("red")
//      numberofCount2= setTimeout(()=>{
//     console.log("yellow")
//        numberofCount3= setTimeout(()=>{
//       console.log("green")
//       count++
//       if(count === 5){
//         clearTimeout(numberofCount1)
//           clearTimeout()
//         )
//       }
//       trafficlight()
//     },3000)
//   },3000)},3000)
// }
// trafficlight()

// let count = 0;
// function trafficlight(){
//    console.log("red")
//    setTimeout(()=>{
//     console.log("Green")
//       setTimeout(()=>{
//         console.log("yello");
//          setTimeout(()=>{
//             count++
//             if(count ===2 ){
//                 console.log("cycle stopped")
//                 return;
//             }
//           trafficlight()
//          },1000)
//       },3000)
//   },2000);
// }
// trafficlight()

// let count = 0;
// function trafficlight(){
//     console.log(count); // 0
//  if(count === 3){
// console.log("cycle stopped")
//  return;
//  }
//  count++ // 6
//    console.log("red") // red
//    setTimeout(()=>{
//     console.log("Green") 
//       setTimeout(()=>{
//         console.log("yello");
//          setTimeout(()=>{
           
//           trafficlight() // trigger the repeatition of traffic light
//          },1000)
//       },3000)
//   },2000);
// }
// function f2() {
//   count++ // 2
//   count++ // 3

// }
// trafficlight()
// f2()
// console.log("i am after traffic light");
// count++ // 4
// console.log("i am after the first increment")
// count++ // 5
// console.log("i am after the second increment")

function trafficlight(cycles){ //recursion
 if(cycles === 0){
   console.log("cycle stopped")
   return;
 }
   console.log("red")
   setTimeout(()=>{
    console.log("Green")
      setTimeout(()=>{
        console.log("yello");
         setTimeout(()=>{
           
          trafficlight(cycles - 1) // trafficlight(1) trafficlight(0)
         },1000) 
      },3000)
  },2000);
}
trafficlight(2)