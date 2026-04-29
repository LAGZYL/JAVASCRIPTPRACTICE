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


// function  riskyOperation() {
//        return new Promise((resolve, reject)=>{
//           const success = Math.random() > 0.5;
//            setTimeout(()=>{
//                if(success){
//                    resolve('success')
//                }else{
//                   reject('failed')
//                }
              
//          }, 1000)

//        });

//   }


//   async function handleRisky() {
//     try{
//       const result = await riskyOperation()
//    console.log(result)
//     }catch(error){
//       console.log(error)
//     }
   
    
//   }
//   handleRisky();

/*
you have the following promise-based functions

getUser() ==> {userId: 1}

getPosts(userID) ==> ['post1', 'post2', 'post3']

write an async function that:

1. gets the user
2. uses the user id to get posts
3. logs the posts


*/
// const users = [{id: 1, title:'post1'}, {id: 2, title:'post22'},
//   {id: 1, title:'post2'},{id: 1, title:'post3'},{id: 3, title:'post33'}]
// function getUser(x){
//   return new Promise((resolve,reject)=>{
//     resolve({id:x})
//   })
// }



//  function getPosts (userId) {
//   return new Promise((resolve,reject)=>{
//     let result = users.filter((element)=>{
//      return element.id === userId
    
//     }).map((element)=>{
//      return element.title})
//     // console.log(result)
//     resolve(result)
//     })
    
//   }

//   async function getUserPost() {
//     const user = await getUser(1);
//     // console.log(user.id);
//     const post = await getPosts(user.id);
//     console.log(post);

    
  // }
  // getUserPost();


  /*
  problem:

you have array of userids

const ids = [1, 2, 3, 4, 5]

and a promised-based function fetchUser(id)

fetch each user one by one using async/await


our expected output :

User 1
User 2
User 3
User 4
User 5
  */

/*sequential loop */
const ids = [1, 2, 3, 4, 5,6,6,6,7,8]

// function fetchUser(id){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`user ${id}`);
//     }, 2000)
//   })
// }

// async function resolveArray() {
//   for(let id of ids){
//     const result = await fetchUser(id);
//     console.log(result);
//   }
// }
// // resolveArray()

/*Parallel loop */

// function fetchUser(id){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`user ${id}`);
//     }, 2000)
//   })
// }

// async function resolveArray() {
    
//     const arrayOfPromises= ids.map((id)=>{
//      return  fetchUser(id)
//     }) 
//    let result =await  Promise.all(arrayOfPromises)
//     console.log(result)
// }

// resolveArray()






/*TIMER LOGIC */
// async function race1() {
//   function slowTask(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("i am slowtask inside resolve")
//       resolve("done")
//     }, 1000)
//   })
// }
// function withTimeout(promise,deadline ){
//   const timerPromise = new Promise((_ , reject)=>{
//     setTimeout(()=>{
//       reject(new Error("tmeOut"))
//       // reject("error")
//     },deadline)
//   })
//   return Promise.race([promise, timerPromise])
// }
//   try{
//   const newResult = await withTimeout(slowTask(), 2000);
//   console.log(newResult);
//   }catch(e){
//     console.log(e)
    
  
//   }
// }
// race1()


/* RETRY LOGIC */

// async function runRetry() {
//   function unstableFetch(){
//   return new Promise ((resolve, reject)=>{
//     const randomSuccess = Math.random() > 0.6
//       setTimeout(()=>{
//            if(randomSuccess){
//                resolve('Success!')
//           }else{
//                reject(new Error('error'))
//           }
//       }, 1000)
//   })
// }

// async function retry(unstableAPI, attempts){
//   for(let i = 1;i < attempts;i++){
// try{
//   return await unstableAPI()
// }catch(e){
//  if(i === attempts){
//     throw e
//  }
// }
// }

// }
// try{
//   const newResult1 = await retry(unstableFetch, 3)
// console.log(newResult1);
// }catch(error){
//   console.log("i catch the error")
// }
// } 
// runRetry()



// function unstableFetch(){
//   return new Promise ((resolve, reject)=>{
//     const randomSuccess = Math.random() > 0.6
//       setTimeout(()=>{
//            if(randomSuccess){
//                resolve('Success!')
//           }else{
//                reject(new Error('error'))
//           }
//       }, 1000)
//   })
// }

// function sleep(ms){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve()
//     }, ms)
//   })
// }

// async function retry(unstableAPI, attempts){
//   for(let i = 1; i <= attempts; i++){
//    console.log(`Attempt ${i} of ${attempts}`);
// try{
//   const result = await unstableAPI();
//    console.log(`Success on attempt ${i}`);
//   return result;
// }catch(e){

//  console.log(`Failed on attempt ${i}`);

//   if(i === attempts){
//     console.log(`No more attempts left! Error follow!`);
//     throw e;
//   }
//   console.log("about to sleep before retry");
//    await sleep(2000 * i);
//   console.log(`Retrying...`);
// }

// }

// }


// async function runRetry() {
//   try{
//   const newResult1 = await retry(unstableFetch, 5)
//   console.log('Final reuslt: ', newResult1);
//  }catch(error){
//   console.log("Failed after all attempts!")
//   }
// } 
// runRetry()



// function multiplication(){
//   for(let ele of num){
//     console.log(ele*2)
//   }
// }
// multiplication()

// async function multiplication1() {
//   const result = await Promise.all(num.map((e)=>{
//     return e*2}))
//   console.log(result);
  
// }
// multiplication1()
// const nums = [1,2,3]
// function double(element){

//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(element * 2)
//     }, 2000)
//   })
// }
 
// async function multiplication1() {
// //  const partialResult =   nums.map(double)
// //  console.log(partialResult);
//  let result123 = await Promise.all(nums.map(double))
//  console.log(result123);
 
 
// }
//  multiplication1()

const urls = ['a', 'b', 'c'];

function fetchData(url){
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
       resolve (`Data from ${url}`)
   }, 1000)

})
   
}
// const intermediatePromise = Promise.all(urls.map(fetchData))

// intermediatePromise.then((values)=>{
//    console.log(values) //
// // })


async function getMultipleUrlsSequentially(){
  console.time("sequential")
     const result1 = await fetchData(urls[0]);
      const result2 = await fetchData(urls[1])
      const result3 = await fetchData(urls[2])

      console.log(result1, result2, result3 )
      console.timeEnd("sequential")
}
// getMultipleUrlsSequentially()


// async function getMultipleUrlConcurrently(){
//       console.time("concurrent")
//       const result1 =  fetchData(urls[0]);
//       const result2 =  fetchData(urls[1])
//       const result3 =   fetchData(urls[2])
      
//       const result = await Promise.all([result1, result2, result3])
//       console.log(result);
//       console.timeEnd("concurrent")
// }
// getMultipleUrlConcurrently()


// async function run(){
//   console.log('Start running');
//   try{
//  await Promise.all([
    
//     Promise.resolve(1),
//     Promise.reject(new Error(2)),
//     Promise.resolve(3)
//  ]);

//   }catch(e){
//     console.log("e")
     
//   }
//   console.log('Finished!') 

// }

// run()
// console.log("i am after run")

// function timeout(ms){
//    return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         reject(new Error("error occur"))
//      }, ms)
//   })

// }
// function fulfilPromise(s,delay){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(s)
//   },delay)
// })
// }



// async function fetchWithTimeout(promise){

//    const result = await Promise.race([promise, timeout(2000)])
//    return result;

// }
// fetchWithTimeout(fulfilPromise("promisefulitilled",1000)).then((result)=>{
// console.log(result);
// })

async function secureFetch(){
  try {
   const response =await fetch('https://invalid-url.nowhere');
   const data = await response.json();
  }catch(err){

    console.log("error caught:", err.message);
  }

}

secureFetch()