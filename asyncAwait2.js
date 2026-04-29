// async function fetchAll(ids){
//    ids.forEach(async (id) => {
//       await new Promise((resolve, reject)=>{
//                 setTimeout(()=>{resolve()}, 1000)
//               console.log(`Processed ${id}`)
//       })

//   })

//   console.log('Done!')

// }

// fetchAll(['a','b','c'])

// let count = 0;

// async function increment(){
//     await new Promise((resolve)=>{
//                 setTimeout(()=>{resolve()}, 1000)
//       })
//    count = count + 1
   

// }

// const prom = Promise.all([increment(), increment(), increment()])
// prom.then((value)=> console.log("final count ", count))

// await increment()
// await increment()
// await increment()
// console.log(count);


// function fetchUserData(userId){
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//        resolve (`User data ${userId}`)
//    }, 1000)

// })
   
// }

// async function getMultipleUsers(userIds){

//      const users = [];
//       for (let i =0; i < userIds.length; i++){
//        try{
//        const user = await fetchUserData(userIds[i])
//         users.push(user)
//       }catch(err){
//     console.log(`Failed for ${userIds[i]}`)
//       }

//      }

// return users;
// }

// getMultipleUsers([2,2,4,465,6,]).then((result)=>{console.log(result)})


let tasks = [];
function addTask(){
  let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve()
    },500)  
  })
  tasks.push(promise)
  promise.finally(()=>{
    tasks = tasks.filter((task)=>{
            return task !== promise
       });
})
}
  
setInterval(addTask,10)
    
setInterval(()=>{
     const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024
     console.log(`Number of tasks now: ${tasks.length}, MemoryUsed: ${usedMemory.toFixed(2)} MB`)
}, 1000)