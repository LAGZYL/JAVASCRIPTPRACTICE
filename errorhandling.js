'use strict';
// TypeError
// ReferenceError
// SyntaxError

// const user = null;
// console.log(user.name) // typeerror

// console.log("Hello) // SyntaxError

// console.log(idowu)// Referenceerror

// try{
// console.log(idowu)
// console.log("valid code")
// }catch(err){
// console.log(err)
// }
// console.log("Another valid code after try statement")



// try {

// // console.log(idowu)
// console.log("Invalie code")
// }catch(err){
//   console.log("error name", err.name);
//   console.log("error message", err.message);
// //   console.log("error.stack", err.stack);
// // }

// // console.log('another valid code after try statement')


// try{
// throw new ReferenceError("error occur check further")
// }catch(a){
// console.log(a.name)
// console.log(a.message)
// console.log(a.stack)
// }
// console.log("code fix")


// try{ 
//  console.log('I am valid code');
//  throw new Error('im thrown');
// }finally{
//   console.log('I must run; error or no error')
// }

// function thrower(message) {
//    throw new ReferenceError(message);
// } 

// try{
//   console.log('I am valid code');
//   thrower('I am a thrower');
// }catch ({name, message}){
//   console.log('name of error ', name);
//   console.log('error message ', message);
// }finally{
//   console.log('I must run; error or no error')
// }

// console.log(Reflect.ownKeys(JSON))

// let jsonUser = '{"name": "id", "age": 56}'; //data from server

// let user = JSON.parse(jsonUser); // convert the text representation to JS value
// let badjason = '{bad json}'
// try{
// let user = JSON.parse(jsonUser); 
// console.log(user.name)
// console.log(user.age)
// console.log("the code is working")
// }catch(error){
// console.log('name of error',error.name)
// console.log('error message',error.message)
// }
// console.log("i am now working")

// function a (){
// console.log('i am inside a');
// throw new Error("error inside a");
// console.log('i am inside a, the second time');
// }
// function b (){
// console.log('i am inside b');
//   a();
// }
// function c (){
// console.log('i am inside c');
//   b();
// }
// function d (){
//  console.log('i am inside d');
//  c();
// }
// try{
// d()
// }catch(error){
// console.log(error.name);
// console.log(error.message);
// // console.log(error.stack)
// }

// function readData(){
// let jsonData = '{"age" : 30 }'
// let badjason = '{bad json}'
// try {

// let userData = JSON.parse(jsonData)
// // console.log(userData.age);
// if(!userData.name){
//     throw new SyntaxError("name is require")
// }

// }catch (error) {
//     if (error instanceof ReferenceError){

//    console.log('there is Referenceerror now')
// } else {
//    throw error // rethrow error here
//  }
// }
// }
// try{
// readData()
// }catch(error){
// console.log("i catch the re thrown error")
// }

/*
custom error

Error
Databaseerror, HttpTimeouterror, Notfounderror, Httperror


*/


// class ValidationError extends Error{
//   constructor(message){
//     super(message);
//     this.name = "erroroccur";
    
// }
// }

// function test (){
//   throw new ValidationError('oh no!!');
// }

// try {
//  test()
// }catch(error){
//   console.log('error name', error.name);
//    console.log('error message', error.message);
// //   console.log('error stack', error.stack);
// }
// class ValidationError extends Error{
//   constructor(message){
//     super(message);
//     this.name = "ValidationError";
    
// }
// }
// function readUser (json) {

//    let user = JSON.parse(json);

//    if (!user.age) {
//    throw new ValidationError("Error: no age!");
//    }

//    if (!user.name) {
//    throw new ValidationError("Error: no name!");
//    }
  
//   return user;

// }


// try {
//  let user = readUser('{age: 34}')
// }catch (error){
//  if (error instanceof ValidationError){
//   console.log("Incomplete data", error.message)
//  } else if (error instanceof SyntaxError){
//    console.log("JSON Parse error", error.message)
// }else{
//   throw error
// }

// }
//rethrow error
// let badjason = '{bad json}'
// try{
// // nonexistentmethod();
// let user1= JSON.parse(badjason);
// }catch(error){
//    if (error instanceof SyntaxError){
//     console.log("error.message", error.message)
//  } else  if (error instanceof ReferenceError){
//     console.log("handle refence error")
//  }else{
//     throw error
//  }
// }
// console.log('hello')

/*
function test(){
 throw new ValidationError('I am validationError', "ValidationError")
}

try{
 test();
}catch(error){
  console.log('error.name', error.name)
console.log('error.message', error.message)
}
*/


class Error {
  constructor(message){
   this.message = message;
   this.name = "Error"
 }

}
class ValidationError extends Error {
  constructor(m){
    super(m);
    this.name = "ValidationError"
  }  
}
class PropertyRequiredError extends ValidationError{
  constructor(p){
   super("no property:" + p);
   this.property = p;
   this.name = "PropertyRequiredError"
  }
}
function readUser (json) {
 let user = JSON.parse(json);
 if (!user.age) {
 throw new PropertyRequiredError("age");
   }
    if (!user.name) {
    throw new PropertyRequiredError("name");
    }
    return user;
  }

  try {
 let user = readUser ('{"name": 25}');
// let user = readUser ('{"age": 25}');
}catch(error){
  if (error instanceof ValidationError) {
   console.log("Invalid Data: ", error.message)
   console.log("error.name", error.name);
   console.log("error.property", error.property)
}else if (error instanceof SyntaxError){
    console.log("JSON Syntax Error: ", error.message)
} else {
  throw error
}

}




/**
 create a class called FormatError that inherits from built-in SyntaxError class.

it should support message, name properties.

to test:

let err = new FormatError('formatting error')

console.log(err.name)
console.log(err.message)


console.log(err instanceof FormatError) //true
console.log(err instanceof SyntaxError) //true
 */
class FormatError extends SyntaxError{
  constructor(message){
    super(message);
    this.name = "FormatError"
  }
}
let formaterror = new FormatError("formatting error");
console.log(formaterror.name);
console.log(formaterror.message);


console.log(formaterror instanceof FormatError);
console.log(formaterror instanceof SyntaxError);
