/*event-driven programming

one of the core modules which is 'node:events'

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter

const emitter = new MyEmitter();

.1) .on()

emitter.on(<event>, <listener>)

emitter.on('greet', ()=>{
   console.log('Welcome!')
})

2.)  .emit()

 emitter.emit(<event>, ...args)
 emitter.emit('greet');

3.) .once(<event>, <listener>)
     emitter.once('login', ()=>{
      console.log('Welcome!')
     })
after first execution, it is removed

.4)  .off(<event>, <listener>)
     function sayHi(){
     console.log('hello')
   }
     emitter.on('greet', sayHi)
     emitter.off('greet', sayHi)

.5) .listeners(<event>)
   console.log(emitter.listeners('greet'))

.6) special event: 'error'
    emitter.on('error', (err)=>{
   console.log(err)
} )

const {once} = require('node:events')

await once(emitter, 'data')

const {on} = require('node:events')

for await (const data of on(emitter, 'data') ){ //asynchronous iteration
    console.log(data)
}
*/


/*
Create an emitter that logs "hello world" when event: 'start' is emitted
*/


// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();
// emitter.on("start", ()=>{
//    console.log('hello world');
// })

// emitter.emit("start");
// emitter.on("eve", ()=>{console.log("forth listener")})



// emitter.emit('eve')
// emitter.emit("eve")


// emitter.once("run", ()=>{console.log("running")})
// emitter.emit("run")
// emitter.emit("run")

// emitter.on("error", (error)=>{
//     console.log("caught ", error.message)
// })
// emitter.emit("error", new Error("somwthing broke"));


// const EventEmitter = require("node:events")
// const emitter = new EventEmitter
// emitter.on("warning", (message)=>{
//     console.log("WARNING ", message)
    
// })
// emitter.on("info", (message)=>{
//     console.log("INFO ", message)
// })

// emitter.on("error", (error)=>{
//     console.log("ERROR ", error)
// })

// emitter.emit("warning", "danger dont touch")
// emitter.emit("info", "read carefully")
// emitter.emit("error", "error occur")
// console.log("God is good")
// emitter.on('test', ()=>{
//     console.log('Listener 1')
// })
// emitter.on('test', ()=>{
//    console.log('Listener 2')
// })
// console.log('before emit')
// emitter.emit('test')
// console.log('after emit')


// emitter.on('test', ()=>{
//   setTimeout(()=>{
//     console.log('Listener 1')
//   })
// })
// emitter.on('test', ()=>{
//   setImmediate(()=>{
//     console.log('Listener 2')
//   })
// })
// emitter.on('test', ()=>{
//   process.nextTick(()=>{
//     console.log('Listener 3')
//   })
// })
// console.log('before emit')
// emitter.emit('test')
// console.log('after emit')


/*
create an event called 'calculate' that:

  receives two numbers
  log their sum doubled 

  output format
  Result: 20*/


  // const EventEmitter = require("node:events")
  // const emitter = new EventEmitter

  // emitter.on("calculate", (num1, num2)=>{
  //   const result = (num1 + num2)*2
    
  //   console.log("result ", result);
  // })

  // emitter.emit("calculate", 10 , 11);

  /*
  create an event 'checkNumber' that:
  logs "Even" if number is even
  logs "Odd" if number is odd*/

  // const EventEmitter = require("node:events");
  // const emitter = new EventEmitter;

  // emitter.on("checkNumber", (number)=>{
  //   if(number % 2 === 0){
  //     console.log("Even")
  //   }else{
  //     console.log("Odd")
  //   }

  // })
  // emitter.emit("checkNumber", 17);
  // emitter.emit("checkNumber", 16);
  // emitter.emit("checkNumber", 12);


  /*create an event 'limited'
its corresponding listener runs only TWICE; then stops responding*/


// const EventEmitter = require("node:events");
// const emmitter = new EventEmitter;
// let count = 0;
// const limitednumber = (number)=>{
//   if(number %2 === 0 ){
//     console.log("Even")
//   }else{
//     console.log("Odd")
//   }
//   count ++
//   if(count === 2){
//     emmitter.off("limited", limitednumber )
//   }
    
// };
// emmitter.on("limited",limitednumber )

// emmitter.emit("limited", 2)
// emmitter.emit("limited", 2)
// emmitter.emit("limited", 2)
// emmitter.emit("limited", 2)


/*create two events 
  'start'
  'process'

when 'start' is emitted, it should trigger 'process'*/

// const EventEmitter = require("node:events")
// const emitter = new EventEmitter

// emitter.on("start", ()=>{
//  console.log("start")
//  emitter.emit("process")
// })


// emitter.on("process", ()=>{
//   console.log("process")
// })
// emitter.emit("start")


/*create an event called 'user' that receives

 name 'alice'
 age   4

expected output format:

User alice is 4 years old*/


// const EventEmitter = require("node:events");
// const emitter = new EventEmitter;

// emitter.on("user", (name, age)=>{
//   console.log(`user ${name} is ${age} years old`)
// })

// emitter.emit("user", "alice", 4)


/*create an event 'fetchdata' 

 simulates async operation using setTimeout
 logs "data received" after 1 second

hint: use async/await for the listener*/

const EventEmitter = require("node:events");
const emitter = new EventEmitter

emitter.on("fetchData", async()=>{
  const result =  await new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve("data received")
    },1000)
  })
  console.log(result);
})
emitter.emit("fetchData")