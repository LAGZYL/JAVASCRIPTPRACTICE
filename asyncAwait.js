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

async function f3(){
  console.log('i am before await') 
  const g = await f6(5000, 1)
  console.log(g)
  console.log('i am after await 1')
  const g2 = await f6(5000, 2)
  console.log(g2)
  console.log('i am after await 2')
}
f3()
console.log("i am after f3")

function f6(delay, name){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve(`i am awaited ${name}`)
   }, delay)
   })
}



