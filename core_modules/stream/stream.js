/*there are 4 types of streams in nodejs

1. readable e.g fs
2. writable e.g fs
3. duplex   e.g tcp socket
4. transform

Readable streams
 we use it for
 1. reading files
  2. receiving http requests
  3. reading user input
/* WRITABLE STREAM

 used for
 writing files
 sending http responses
 logging
  important readable stream events

  data    stands for when a chunk arrived
  end      no more data
  error    something failed*/
/*
const fs = require('fs');
const readStream = fs.createReadStream('message.txt', {encoding: 'utf8', 
   highWaterMark: 10} );
// const readStream = fs.createReadStream('message.txt', 'utf8')
readStream.on('data', (chunk)=>{
   // console.log('New Chunk arrived!')
   console.log(chunk)
})

readStream.on('end', ()=>{
   console.log('Finished reading')
   
})
readStream.on("error", (error)=>{
   console.log("error")
})
*/




/*const fs = require('fs')
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('hello')
writeStream.write('World')
writeStream.write('Hello')

writeStream.end()*/

/*
const fs = require('fs')
const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('copy.txt');

 readStream.pipe(writeStream)*/
/*
 const {Duplex} = require('node:stream')


class MyDuplex extends Duplex{
  constructor(){
    super()
 }

 _write(chunk, encoding, callback){ //overridden metthod
    console.log('Writing:', chunk.toString())
    
   //   this.push(chunk.toString().toUpperCase())
        
     callback()
}

  _read(size){
  //leave for now
//   this.push("he");
//   this.push(null);
  }

}

const stream = new MyDuplex();

stream.on('data', (chunk)=>{ //Buffer
   console.log('Reading: ',  chunk.toString())
})

stream.write('hello')
stream.write(' world.')
stream.write(' welcome to duplex!.')
*/
/* create a duplex stream that:

 accepts text input
 and outputs the reversed version

for example 
hello ===> olleh
*/

/*
const {Duplex} = require('stream')

class ReverseStream extends Duplex{
   

  _write(chunk, encoding, callback){
    let process = chunk.toString().split("").reverse().join("")
    this.push(process);
     //convert chunk to string
    
     //reverse the string  str.split('').reverse().join('')

     // push the reversed text
   

     callback();

}

  _read(size){

 }


}
const stream = new ReverseStream()

stream.on(("data"), (chunk)=>{
   console.log('Reading: ',  chunk.toString())
})


stream.write("Hello");
stream.write("Gbenga");*/

/* 


convert string to number 

str = '90' //numeric

num = Number(str)  //90

convert number to string
let num2 = 890

 let str2 = String(num)  //'890'




Number Doubler

create a duplex stream that:
 receives numbers as strings
 outputs doubled values


*/

const {Duplex} = require ("stream")
class convertStream extends Duplex{

   _write(chunk, encoding, callback){
    let process = chunk.toString() 
    let num = Number(process); 
    let double = num*2
    let double1 = String(double);
    this.push(double1);

     callback()
   }

   _read(size){
    
   }
}

const stream1 = new convertStream()

stream1.on("data", (chunk)=>{
   console.log("reading:", chunk.toString())
})

let num23 = Buffer(4)
stream1.write(num23)
stream1.write("3")