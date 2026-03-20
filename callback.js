/*

function myfunc(parameter1, parameter2){
  parameter2(parameter1)
}
function callback(parameter1){
  console.log(parameter1)
}
myfunc("Hello", callback);


function schoolPortal(parameter1, parameter2){
  parameter2(parameter1 )
  
}
function mycall(Lagzyl){
    console.log(Lagzyl)
  }
schoolPortal("Hello", mycall);
schoolPortal("Hello world", function(para){console.log(para);})

function sayNmae(name1, name2){
  name1(name2)
  console.log("Hello " + name2 )
}

function SayHelloIdowu(Idowu){
console.log(Idowu)
}
sayNmae(SayHelloIdowu, "Idowu")

function greet(name){
  console.log("hello " + name)
}

function processUser(username, greet){
  greet(username);
}

processUser('idowu')

/*

write a function calculate(a, b, callback)
1. adds 'a' and 'b'
2. pass the result to the callback, and just log it.



function calculate(a,b, callback){
  let result = a + b;
  callback(result);
}
function totalResult(result){
  console.log(result)
}
calculate(10,10, totalResult);
function myfunc(parameter1, parameter2){
  parameter2(parameter1)
}
function callback(parameter1){
  console.log(parameter1)
}
myfunc("Hello", callback);


function schoolPortal(parameter1, parameter2){
  parameter2(parameter1 )
  
}
function mycall(Lagzyl){
    console.log(Lagzyl)
  }
schoolPortal("Hello", mycall);
schoolPortal("Hello world", function(para){console.log(para);})

function sayNmae(name1, name2){
  name1(name2)
  console.log("Hello " + name2 )
}

function SayHelloIdowu(Idowu){
console.log(Idowu)
}
sayNmae(SayHelloIdowu, "Idowu")

function greet(name){
  console.log("hello " + name)
}

function processUser(username, greet){
  greet(username);
}

processUser('idowu')

/*

write a function calculate(a, b, callback)
1. adds 'a' and 'b'
2. pass the result to the callback, and just log it.



function calculate(a,b, callback){
  let result = a + b;
  callback(result);
}
function totalResult(result){
  console.log(result)
}
calculate(10,10, totalResult);
calculate(100,100, function (result){console.log(result);})



*/

console.log(__filename)
console.log(__dirname)

