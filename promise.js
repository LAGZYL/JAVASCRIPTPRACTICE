// function getData (){

//   setTimeout(()=>{ return "data";
//   }, 1000)
//     return "idowu";

// }

// const result = getData()
// console.log(result) 


// function getData(callback){

//   setTimeout(()=>{
//    callback('data'); 
//   }, 1000);

// }

// const result = getData((result)=>{console.log(result)})

// Asynchronous code cannot return values or results directly!

// function getData(callback){
//   let x = 8;
//   let y = 2;
  
//   setTimeout(()=>{
//    callback( x**2, y*2); 
//   }, 1000);

//   console.log(x * y) //16

// }
// getData((result) => {
//    console.log(result) 
// })
  
// const prom1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('i will be resolved')
//         resolve('data received')
//      }, 1000)
// })

// prom1.then((result)=>{
//    console.log(result); // data received'
// })


// const prom1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject('something went wrong')
//      }, 1000)
// })

// prom1.then((result)=>{
//    console.log(result); 
// }).catch((error)=>{console.log(error)})

              // or 
//  prom1.then((result)=>{
//  console.log(result); 
// },  (error)=>{console.log(error)} )

         // or

// prom1.then((result)=>{
//  console.log(result); 
// },  (error)=>{console.log(error)} ).finally(()=>{console.log("done")})

// prom1.then((result)=>{
//  console.log(result); 
// } ).finally(()=>{console.log("done")})


// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("resolve completely")},1000)
        
// })
// const promise2 = promise1.then((result)=>{
//     console.log(result);
// })
// console.log("promise return from the ", promise2);

// const promise1 = new Promise((resolve, reject)=>{
//      resolve("first promise resolution")
// })
// promise1.then((result)=>{
//     console.log(result);
//     let res = result + "promise inside the method"
//     throw new Error(res);
//     // return res;
// }).catch((error)=>{
//     console.log(error)
// }).then((result)=>{
//     console.log("i am after catch");
//     let newRes = result + 90;
//     return newRes
// })

/*
create a promise chain such that

1.)start with number 5
2.) Multiply by 3
3.) Substract 2
4.) Log the result

*/
// const promise = new Promise((resolve,reject)=>{
//     resolve(5)
// })
// promise.then((result)=>{
//     console.log("i am first result ", result)
//     let res = result * 3
//     return res;
// }).then((result)=>{
//     console.log("i am second result ", result)
//     let newResult = result - 2
//     return newResult;
// }).then((result)=>{
//     console.log("i am final result ", result);
// })

/*

create a function fetchUser(userId)
resolves with an object {userId, name: 'yinka'} after 1 second
rejects if userId is not provided

*/
// function fetchUser(userId){
//  return new Promise((resolve, reject)=>{
//      setTimeout(()=>{
// if(!userId){
//     reject("rejected")

// }else{
//     resolve({userId, name: 'yinka'})s
// }

//    }, 1000)      
// })
// }

// fetchUser().then((result)=>{
//     console.log(result)}).catch((error)=>{console.log(error)})


    // const prom = new Promise((resolve, reject)=>{
    //     // resolve(0)
    //     // reject(new Error("i am error"))
    //     reject(new Error("i am error2"))
    //     throw new Error ("i am error inside executor")
        
        // resolve(89)
//    console.log('i am inside executor') //
  //wraps async task 

    // }) 
    // prom.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.error(error)
    // })




// function executor (resolve, reject){
//     reject(new Error("i am error"))
//     resoleve(2)
//    console.log('i am inside executor') //
//   //wraps async task 

// }

// const promise1 = new Promise(executor)

// console.log( 'i am after promise constructor') //

// const pendingResolved = new Promise ((resolveOuter, rejectOuter)=>{
//            console.log('i am outer executor');
//            resolveOuter(

//                new Promise ((resolveInner,rejectInner)=>{
//                     console.log('i am inner executor')
//                     setTimeout(()=>{
//                       console.log('i am inside timer')
//                     //    resolveInner('non-thenable value')
//                     rejectInner(new Error("error has occur"))
//                      }, 1000)
//                })
//      )

// })
// pendingResolved.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log("error occur")
// })

// const rejectedResolved = new Promise((resolve) => {
//     setTimeout(()=>{
//        resolve(rejectedResolved)
//     })

// });
// rejectedResolved.then((result)=>{console.log(result)}, 
//  (error)=>{console.log("error here")})


// const prom3 = new Promise((resolve)=>{resolve('i am resolved immediately')})
// console.log(prom3) //Promise 
// prom3.then(()=>{console.log('i am then1')})
// prom3.then(()=>{console.log('i am then1')})
// prom3.then((result)=>{console.log(result)})
// console.log('i am after then')
// console.log('i am after then2')
// console.log('i am after then3')

// const prom3 = new Promise((resolve)=>{setTimeout(()=>{
//     resolve('i am resolved immediately')})},1000)
//     console.log(prom3)


// const currentPromise = Promise.resolve(67)

// const newPromise = currentPromise.then((value)=>{})

// const newPromise2 = currentPromise.then((value)=>{})

// console.log(newPromise === newPromise2) // true or false


/*
foobarbaz
last then call
foobarbaz

*/
// Promise.resolve('foo').then((value)=>{

//    return new Promise ((resolve, reject)=>{
//          setTimeout(()=>{
//          value += 'bar' // foobar
//          resolve(value)
//       }, 1000);
//     }) ;

// }).then((value)=>{

//    return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//      value += 'baz'; 
//      console.log("i am line 254 ", value)
//       resolve(value);
//    });
//    })

// }).then((value)=>{
//    console.log( ' Last then call'); // last then call
//    console.log("i am line 260 ", value) // foo

// })


// setTimeout(()=>{console.log('i am async timer')}, 0)
// Promise.resolve('i am async promise').then((value)=>{console.log(value)})
// setTimeout(()=>{console.log('i am async timer 2')}, 0)
// console.log('hello world')
// Promise.resolve('i am async promise2').then((value)=>{console.log(value)})


// const p1 = Promise.resolve(89)
// const p2 = Promise.resolve(9)
// const p3 = Promise.resolve(890)

// Promise.all([p1, p2, p3]).then((values)=>{console.log(values)})

// const p1 = Promise.resolve('id')
// const p2 = Promise.reject('error')
// const p3 = Promise.resolve('yinka')

// Promise.all([p1, p2, p3]).then((values)=>{console.log(values)}).catch(err=>console.log(err));

// const p1 = Promise.resolve('id')
// const p2 = Promise.reject('error')
// const p3 = Promise.resolve('yinka')

// Promise.allSettled([p1, p2, p3]).then((values)=>{console.log(values)}).catch(err=>console.log(err));


// const p1 = new Promise((resolve, reject)=>{
  
//        setTimeout(()=>{

//       resolve('first')
//  }, 2000)

// })

// const p2 = new Promise((resolve, reject)=>{
  
//        setTimeout(()=>{

//       resolve('second')
//  }, 3000)

// })

// Promise.race([ p2]).then((value)=>{console.log(value)}).catch((err)=>{
//   console.error(err)})

// const p1 = new Promise((resolve, reject)=>{
  
//        setTimeout(()=>{

//       reject('error')
//  }, 2000)

// })

// const p2 = new Promise((resolve, reject)=>{
  
//        setTimeout(()=>{

//       resolve('second')
//  }, 100)

// })

// Promise.race([p1, p2]).then((value)=>{console.log(value)}).catch((err)=>{
//   console.error(err)})

// const p1 = Promise.reject('fail 1')
// const p2 = Promise.resolve('success')
// const p3 = Promise.reject('fail 2')
// Promise.any([p1, p2, p3]).then((value)=>{console.log(value)})

// Promise.any([
//   Promise.reject('reject'),
//   Promise.reject('reject2'),
// ]).then((value)=>(console.log(value))).catch((err)=>{console.error(err)})


// const promise1 = Promise.resolve("God is good")
// const promise11 = Promise.reject(new Error("error occur"))
// const promise12 = Promise.resolve("resolve")
// Promise.all(promise1,promise11,promise12).then((value)=>{
//   console.log(value)}).catch((err)=>{console.err(err)})


// const services = [
//    Promise.resolve('payment success'),
//    Promise.reject('Email failed'),
//    Promise.resolve('notification success') 

// // ]
// // Promise.allSettled(services).then((value)=>{
// //   const message =  value.filter((ele)=>ele.status === "fulfilled")
 
// //   console.log(message)})

//   function getUser(){
//  return new Promise((resolve, reject)=>{setTimeout(()=>{
//   resolve('user data is ready')}, 2000)})

// }

// function getPosts(){

//    return new Promise((resolve, reject)=>{setTimeout(()=>{
//     resolve('user posts is ready')}, 3000)})
// }
// console.time('parallel')
// Promise.all([getUser(),getPosts()]).then(([user, post])=>{
//   console.log(user); 
//   console.log(post);
// console.timeEnd('parallel');
// }) 

/*
simulate fetching user data and posts at the same time

*/
// console.time("sequential")
// getUser().then((user)=>{
//      return getPosts().then((posts)=>{
//           console.log(user);
//           console.log(posts);   
//           console.timeEnd("sequential")
//      })

// })


// const urls = ['url1', 'url2', 'url3'] 

// function fetchUrl(url){
//    return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`data resolve from ${url}`)
//     },1000)
//    });
// }
// Promise.all(urls.map(fetchUrl)).then((result)=>{console.log(result)}).catch(
//   (error)=>{console.log(error)});

/*

stimultate fetching all urls concurrently and return array of responses
*/
/*
simulate 3 apis returning the same data at different speeds, 
and then return the first successful result
*/
// function api1(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       reject("data resolve from api1")
//     },1000)

//   })
// }

// function api2(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("data resolve from api2")
//     },4000)
//   })
// }

// function api3(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("data resolve from api3");
//     }, 5000);
//   });
// }

// Promise.race([api1(),api2(),api3()]).then((result)=>{
// console.log(result)
// }).catch((error)=>{console.error(error)});




// function createApi(name, delay, shouldFail= false){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(shouldFail){
//       reject(`data reject from ${name}`)
//     }else {
//       resolve(`data resolve from ${name}`)
//     }
//   },delay)
// })  
 
// }
// Promise.any([createApi("api1", 1000, true),createApi(
//   "api2", 4000, false),createApi("api3", 5000, false)]).then((result)=>{
//  console.log(result)
//  }).catch((error)=>{console.error(error)});

/*
create a function that rejects, if a promise takes longer than a timeout

*/
// function timeOut (promise, timeout){
//    const promiseTimer = new Promise((resolve, reject)=>       {
//         setTimeout(()=>{
//             reject('Time out!')
//         }, timeout)
//     })
  
//   return Promise.race([promise, promiseTimer]) 
// }
// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("promise resolved")
//   },10000)
// })
// timeOut(promise, 5000).then((result)=>{
//   console.log(result)
// }).catch((err)=>{console.log(err)})

/*
 static promise method
* Promise.all → waits for ALL
* Promise.race → returns first finished (success or fail)
* Promise.any → returns first successful (ignores failures) 
  promise.allSettled
*/


