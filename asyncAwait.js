// function f22(){
//   return new Promise((resolve, reject)=>{
//       resolve(10)
//  })
// }
// function f2(){
//   return 5
// }
// let v = f2()
// console.log(v)    //5
// let v2 = f22()
// v2.then((result)=>{
//   console.log(result*2)})

// async function f3 () {
//     // return 5;
//     // throw new Error("error")
//     b()
// }
// let v8 = f3();
// console.log(v8);
// v8.catch((error)=>{console.log("i am error")});

// async function f3(){
//   console.log('i am before await') 
//   const g = await f6(5000, 1)
//   console.log(g)
//   console.log('i am after await 1')
//   const g2 = await f6(5000, 2)
//   console.log(g2)
//   console.log('i am after await 2')
// }
// f3()
// console.log("i am after f3")

// function f6(delay, name){
//    return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//       resolve(`i am awaited ${name}`)
//    }, delay)
//    })
// }


// async function asyncFunc(){
//  console.log('i am before await')
//  let y  = await 90;
//   console.log('i am after await')
// console.log(y)
// }
// function syncFunc(){
//  console.log('i am sync before async call')
// asyncFunc();
// console.log('i am sync after async call')
// }
// syncFunc()

/*
microtask queue is used to handle promises
*/


// async function f2(){
// console.log('i am befor rejection')
// let x = await Promise.reject(new Error('rejected promise!'))
// console.log('i am after rejection')

// }
// f2().catch((err)=>{console.log("error occur")})


// async function f2(){
// try {
//  console.log('i am before rejection')
// let x = await Promise.reject(new Error('rejected promise!'))  //throw new Error('!')  
// }catch(e){
//   console.log('i am after rejection')
// }
// }
// f2()



// async function foo(name){

//   console.log(name, 'start')
//  await console.log(name, 'middle')
// console.log(name, 'end');
// }
// foo('First');
// foo('Second');



//  function getMessage(){
//   return new Promise((resolve)=>{
//    setTimeout(()=>{
//         resolve('Hello Async world!');
//    }, 1000)
// })
// }

 

// async function  waitResult() {
//   let Result = await getMessage()
//   console.log(Result);
// }
// waitResult()


// async function awaitResult() {
//   return await getMessage()
// }
// awaitResult().then((result)=>{console.log(result)})
/*

you are to write an async function that 


1.) waits for the result
2.) logs it to the console

Expected Output
Hello Async world!
*/


// async function getData() {
//   let resultwait = await new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("i am data from getData")
//     },1000)
//   })
//   console.log( resultwait);
 
  
// }
// getData()


/*

you have a function fetchNumber() that returns a number after 1 second.

call it 3 times in sequence and log all the results

approx ==> 3 s

*/
let count = 0
function fetchNumber(number){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    count ++;
    resolve(count)

  },1000)

  })
}
/*

sequence

*/
// async function runNumberSequential() {
//      console.time("sequential")
//   const number1 = await fetchNumber();
//   console.log(number1)
//   const number2 = await fetchNumber();
//   console.log(number2)
//   const number3 = await fetchNumber()
//   console.log(number3)
//      console.timeEnd("sequential")
  
// }
// runNumberSequential();


/*
concurrently execution
*/
// async function runNumberParralel() {

//   const number1 = await fetchNumber();
//   const number2 = await fetchNumber();
//   const number3 = await fetchNumber()
//   let result = await Promise.all([number1,number2,number3])
//   console.log(result)
  
// }
// runNumberParralel();


// async function runNumberParralel() {
//   console.time("parallel")
//   const number1 =  fetchNumber();
//   const number2 =  fetchNumber();
//   const number3 =  fetchNumber()
//   let result = await Promise.all([number1,number2,number3])
//   console.log(result)
//   console.timeEnd("parallel")  
// }
// runNumberParralel();
/*


you have a function riskyOperation() that:
   sometimes resolves 'success'
   sometimes rejects 'failed'


write an async function that 
  handles success case  //log 'success'
  catches error case     // log 'failed'
*/

// function riskyOperation(){


// }

// async function otrisky(){
//   const result = riskyOperation()
//   try{
//      if (resolve === "success"){
//       console.log()
//   }
  

//   }

// }


function  riskyOperation() {
       return new Promise((resolve, reject)=>{
          const success = Math.random() > 0.5;
           setTimeout(()=>{
               if(success){
                   resolve('success')
               }else{
                  reject('failed')
               }
              
         }, 1000)

       });

  }


  async function handleRisky() {
    try{
      const result = await riskyOperation()
   console.log(result)
    }catch(error){
      console.log(error)
    }
   
    
  }
  handleRisky();