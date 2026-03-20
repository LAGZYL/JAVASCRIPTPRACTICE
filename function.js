// // a function is a block of code that does something when you call it 
// // input=>processing=>output


// // function name()(
// //     console.assert("My name is ${}")
// // )
// // name ("Gbenga"
// // return name;


// // let a =4;
// // let b =6;
// // function add(){
// //     return a + b;
// // }
// // console.log(add())

// // function add(){
// //     return a+b;
// // }
// // let result = (6 + 8)
// // console.log(result);


// function fullName(firstName, lastName){
//     return firstName+  " "  + lastName
// }
// let name = fullName("Gbenga" , "Lasisi")
// console.log(name);

// function sentenses(text){
// return text.toUpperCase();
// }
// console.log(sentenses("God is good"));

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5,6))

// function getLastLetter(word) {
//   return word[word.length - 1];
// }
// console.log(getLastLetter("The lord is good"))

// function formatName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(formatName("Lagzyl", "Gbenga"))

// if and else let code make decision

// let age = 18
// if (age >= 18 ){
//     console.log("you are adult")
// }else{
//     console.log("you are not an adult")
// }


// function checkAge(age){
//     if (age > 18){
//         return "Adult";
//     }else{
//         return "Minor";
//     }
// }
// console.log(checkAge(15))
// console.log(checkAge(20))

// function checkname(name){
//     if(name.length > 6){
//         return name;
//     }else{
//         return "lagzyl";
//     }
// }
// console.log(checkname("Gbenga"))

// function checkpassword(){

// }

// Varia



// let username = 'john';

// function log () {  
//   console.log (username);
//   username = 'joe'
// }

// console.log(username); 

// log();  

// console.log(username);

// let username = 'john';
// function logger () { 
//   let username = 'id' //shadow or mask
//   console.log (username);
//   username = 'joe';
//   username = 89900;
//   console.log(username); 
// }

// console.log( username) 
// logger();  
// logger();  
// logger();  
// logger();  
// logger();  
// console.log(username)

// function logger(name = "id") { 
//   console.log(name);
//   return  "God is good";
// }
// let val = logger();
// console.log(val)
    
// function sayHi(){
//   console.log('hello');
// }



// let myfunc = sayHi;
// myfunc();
// sayHi();
// let myfunc2 = myfunc
// let myfunc3 = sayHi
// myfunc2();
// myfunc3();
// function multiplyNumber(number1, number2){
//     number1 * number2;
// }

// let product = multiplyNumber(2, 3)
// console.log(product) // undefined



// function myfunc(parameter1, parameter2){
//   parameter2(parameter1)
// }
// function callback(parameter1){
//   console.log(parameter1)
// }
// myfunc("Hello", callback);


// function schoolPortal(parameter1, parameter2){
//   parameter2(parameter1 )
  
// }
// function mycall(Lagzyl){
//     console.log(Lagzyl)
//   }
// schoolPortal("Hello", mycall);
// schoolPortal("Hello world", function(para){console.log(para);})

// function sayNmae(name1, name2){
//   name1(name2)
//   console.log("Hello " + name2 )
// }

// function SayHelloIdowu(Idowu){
// console.log(Idowu)
// }
// sayNmae(SayHelloIdowu, "Idowu")

// function greet(name){
//   console.log("hello " + name)
// }

// function processUser(username, greet){
//   greet(username);
// }

// processUser('idowu')

// //write a function calculate(a, b, callback)
// 1. adds 'a' and 'b'
// 2. pass the result to the callback, and just log it.

// function calculate(a,b, callback){
//   let result = a + b;
//   callback(result);
// }
// function totalResult(result){
//   console.log(result)
// }
// calculate(10,10, totalResult);
// calculate(100,100, function (result){console.log(result);})


// function task (cb) {
//   cb();
//   console.log(1);
 
//   console.log(3);
//   cb();
   
// }
// task(function(){console.log(2)});

// const func = () =>( {name: "Idowu"})
// console.log(func())

// const func = () => (2 + 3)
// console.log(func())

// const func = () => 2 + 3
// console.log(func())


// function ask (question, yesCallback, noCallback){
//    if (question === 'id'){
//       yesCallback()
//    }else{
//     noCallback()
// }

// }


// ask ('idowu', () => {console.log('correct')}, ()=> {console.log('incorrect')})




// let sayName = () => ( { age: 67, name2:"id"})
// console.log(sayName())

// function sum (a, b, c, d, ... restparams){
//   console.log("restparams ", restparams )
//  return a + b + c + d;
// }

// const result = sum(1,2,3,4,5,6,7,8,9,10); 


// console.log("result ", result)


// function f2 (a, b){
//   console.log(a+b);
// }

// function f3 (a, b){
//  return a + b;
// }

// console.log(f2(1,9)) // 2
// console.log(f3(1,1)) // 2


// let user = { age: 32, name: "joe"};
// // user.sayHi = () => console.log("Hello from method sayHi");

// // console.log(user.sayHi())





// function sayHi(){
// console.log('hi from method hello ')
// }
// user.sayHi = sayHi;
// user.sayHi();


// function greet(){
//   console.log(this)
// }
// greet()

// let userObj ={Name: "Ayo"}
// userObj.greet = greet
// userObj.greet()


// let greet = function (){
//   console.log(this)
// }
// greet()

// let userObj ={Name: "Ayo", greet}
// userObj.greet()


// let arrowgreet = () => {
//   console.log(this)
// }
// arrowgreet()

// let userObj ={Name: "Ayo", arrowgreet}
// userObj.arrowgreet()

// const obj2 = {
//   value : 42,
//   getVal : function (){
//      console.log(this.value);
//   },
//   age : 24
// };
// const extract = obj2.getVal;
// extract ()
// obj2.getVal()

// function hi(){
//   console.log(this.setTimeout)
// }
// hi()


// function are first class citizen in javascript because you can use fnction just like other value 
// you can pass function inside another function and you can return a function inside another function


// scope and structure

// function f() {
//  let v = 90
// }

// f()
// console.log(v)


// let j = 900;
// function f1 (){
//   j ="id"
// }
// f1()
// console.log(j)


// let y = 90
// {let y = 89
//  {let y = 60}
// };

// function outer() {
//  let v = 0;
//  console.log(v);
//  function inner () {
//     v++
//     console.log("i am v inside inner", v );
//   } 
//   return inner;
    
// }

// let inner = outer()
// inner()
// inner()
// inner()


// function outer() {
//  let v = 0;
//  return function () {
//     v++
//     console.log("i am v inside inner", v );
//   };
    
// }

// let inner = outer()
// inner()
// inner()
// inner()


// function counter (){
// let count = 0
// count++
// console.log(count)
// }
// counter()
// counter()
// counter()


// function outer (){

//   return function merlin (){
//          return function myname(){
//                return function Brighter(){
//                 console.log("hghghghghgh")
//                }
//          }
       
//   }

// }
// let returnValueOfOuter = outer();
// let lagzyl = returnValueOfOuter();
// let lagzzz = lagzyl();
// lagzzz();

// outer()()()();


// function makeCounter() {

//   let count = 0;
//   return function () {
//      return ++count
//   }
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();
// let counter3 = makeCounter();

// console.log (counter1()) //
// console.log (counter1()) //


// console.log (counter2()) //
// console.log (counter2()) //
// function makeAdder (x){
//      return function (y){
//        return x + y;
//   }
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);
// let add30 = makeAdder(30);
// let myNew = makeAdder(-10)
// console.log(add5(2));
// console.log(add10(2));
// console.log(add30(30));
// console.log(myNew(10))

// let name = 'yinka';
// function makeWorker (){
//     let name = 'id';
//     return function(){
//       let name = "Gbenga"
//       console.log(name)

//    }
//  }
//  let worker = makeWorker();
//  worker();

// function makeCounter () {
//     let privateCounter = 0;
//     function update (val){
//        privateCounter = privateCounter + val;
//     }

//     return {
//          increment(){
//            update(1);
//         },
//         decrement(){
//           update(-1);
//        },
//        getValue(){
//        return privateCounter;
//       }

//     }
   

// }
// let counter1 = makeCounter()
// counter1.increment();
// console.log(counter1.getValue());
// counter1.increment()
// console.log(counter1.getValue())
// counter1.increment()
// console.log(counter1.getValue())
// counter1.decrement()
// console.log(counter1.getValue())
// // let counter2 = makeCounter()



// function makeCounter () { //module pattern
//     let privateCounter = 0;
//     return {
//          increment(x){
//           privateCounter = privateCounter + x
          
//         },
//         decrement(x){
//           privateCounter = privateCounter - x
         
//        },
//        getPrivateCounter(){
//          return privateCounter;
//       }

//     }
// }
// let finalUpdate = makeCounter();
// finalUpdate.increment(10)
// finalUpdate.increment(2)
// finalUpdate.decrement(10)
// console.log(finalUpdate.getPrivateCounter())



// let y = -10;    //variable shadowing
// function f() {
//   y = 30
//  console.log(y);
// }

// f();  // 89
// console.log(y); // 89


// let x = 1;
// function outer(){
//     let x = 2; //outer environment
//     function inner(){
//       x = 3;  //variable shadowing
//     console.log(x);
//     }
//     inner(); 
//     console.log(x); 
// }
// console.log(x)
// outer(); 
// console.log(x)


// const user = {name: 'ada', age: 34, address: "new york"} ;
// // const {name, age} = user;
// // console.log(name);
// // console.log(age);

// default value
// const {name: firstName, age: years, address = "ibadan "} = user
// console.log(firstName);
// console.log(years);
// console.log(address);


// const {d, ...others} = {a:1, b:2, c:3, d:4}
// console.log(others)

// // array destructuring
// let [first, second] = ['one', 'two']
// console.log(first)
// console.log(second)


// skipping Element
// let [a, b, ...rest ] = [1, 2, 3, 4]
// console.log(a);
// console.log(b);
// console.log(rest)

// let [a, b = 5, c = 4 , d = 6, e] = [1]
// console.log(a);
// console.log(b);
// console.log(e);


// let opt = {
//   size: {
//    width: 100,
//    height: 45,
//    volume: { 
//     length: 25,
//     breadth: 35
//    }
// },
// items: ['cake', 'donut',
//    {currency: "pounds", phoneType: "Iphone", recipe: ["ogbono", "ewedu"]}
// ],
// extra: true
// }

// let {
//   size :{
//    width,
//    height,
//    volume: {
//     length,
//     breadth
//    }
// },
// items: [item1, item2, {currency, phoneType, recipe:  [, food] }]

// } = opt

// console.log(width)
// console.log(height)
// console.log(item1)
// console.log(item2)
// console.log(length);
// console.log(breadth);
// console.log(currency)
// console.log(phoneType)
// console.log(food)

// const arrObj = [
//   {id:1, name: "Lagzyl" },
//   {id:2, name: "ezekiel", age: 40},
//   90,
//   {id:3, name:"idowu"},
//   "Hello",
  
// ];

// const [, {id,age}] = arrObj

// console.log(age)
// console.log(id)


// let university = {
//   name: "Harvard",
//   location: {
//     country: "USA",
//     city: "Cambridge",
//     ranking: {
//       world: {continent1: "Asia", C2: "Africa"},
//       national: [1,2]
//     }
//   },
//   departments: [
//     "Medicine",
//     "Law",
//     {
//       tech: {
//         head: "Dr. Smith",
//         courses: ["AI", "Cybersecurity", "Data Science"]
//       }
//     }
//   ],
//   established: 1636
// };
// let {name, location: {ranking: {world: {continent1, C2}, national:[, d]}}}    = university

// console.log(d)

// let {
//   name,
//   location: {
//     country,
//     city,
//     ranking: {
//       world,
//       national,
    
//   }
// }, 
// decrement: [
//   dept1,
//   dept2
//   tech: {
//    head,
//    courses: [,, data] 
//   }
// ],
// established
// } = university


// Using one destructuring statement, extract the following:

// name

// country

// city

// world

// national

// dept1 → first department

// dept2 → second department

// head

// secondCourse → should be "Cybersecurity"


// const apiResponse = {
//   status: 200,
//   data: {
//      user: {
//         id: 42, name: 'idowu'
//      }
//   }
  
// }

// const {
//   status,
//   data: {
//     user : {
//       id,
//       name
//     }
//   }
// } = apiResponse

// console.log(status);
// console.log(id);
// console.log(name);

// const config = {timeout:50};
// const {timeout, retry = "in 2 minute", verbose = "failed"} =  config
// console.log(timeout);
// console.log(retry);
// console.log(verbose);


// let salaries  = {
//   "john" : 100,
//   "joe" : 12,
//   "mary" : 250
// }

// function topSalary({"john":100, "joe":12, "mary":250}){
//   console.log(john)
// }
// topSalary(john)

// const user = {
//   id : 1,
//   displayName: "daram",
//   fullname: {
//     firstname:"idowu",
//     lastname: "daramola"
//   }
// }
// const {displayName: dname} = user
// console.log(dname)
// function userId({id }){
// console.log(id);
// }
// userId(user)

// function userdisplayName({displayName :dname}){
  
// console.log(dname);
// }
// userdisplayName(user);

// function whois({displayName,fullname:{firstname}}){
// console.log(displayName);
// console.log(firstname);
// }
// // whois(user);
// const user = {
//   name: "Idowu",
//   role: "Stack engineer",
//   hobbies: "coding",
// }
// function display ({name,role}){
//   console.log(name)
//   console.log(role)

// }
// display(user);

// // const {a} = 89;
// // console.log(a)


// // const {a} = undefined
// // console.log(a)


// const {a} = null;
// console.log(a)


// const {} = 89;
// console.log(a)



// function shape({
//               size='big',
//               radius=10,
//               center={x:0, y:0}    
//               }) {

//         console.log(size);
//        console.log(radius);
//         console.log(center);
// }

// shape({radius:78, center: {x:89, y:40}, size: "small"})
// shape()

// function shape({
//               size='big',
//               radius=10,
//               center={x:0, y:0}    
//               }= {}) {

//         console.log(size);
//        console.log(radius);
//         console.log(center);
// // }

// // // shape({radius:78, center: {x:89, y:40}, size: "small"})
// // // shape()


// // // rewrite the 'display' function above to destructure inside the parameter list

// // function returnarray(){

// // return [78, 89, 565, 56]
// // }

// // const [] = returnarray()
// // console.log(x);
// // console.log(y);

// // function returnObj(){
// //   return {SchoolName: "Hallam", colour: "red"}
// // }
// // function returnstring(){
// //   return "God is good"
// // }
// // const {colour: color} = returnObj()

// // console.log(color);
// // const {SchoolNam = returnstring()} = returnObj()
// // console.log(SchoolNam);

// /*

// //hint: to test default values.

// write a function that receives a list containing up to two numbers.
// that means the list can be empty, can contain only one element, or the max of two elements

// name the first number x
// the second number y 
// then if either value is missing, it should auto be 0

// the function should print both values
//  */


// // function returnNumber([x=0,y=0]=[]){
// // console.log(x,y)
// // }
// // returnNumber([2,4]);


// /*
// write a function that receives a list containing up to two numbers.
// that means the list can be empty, can contain only one element, or the max of two elements


// the function should not crash if nothing is passed to it
//  print the first and second values--even if they are undefined values

// */

// function returnxy([x,y]=[]){
// console.log(x,y)
// }
// returnxy() /*





// function F1(){
// console.log('a')
// console.log('b')
// console.log('c')
// }

// function p(p1){
// let pi =6;
// }
// p(7)


// function f2 (p2) {
 
//   console.log(p2); 
// }

// function f3 (p3) {
//   console.log(p3)
// }

// function util(u){
//    return u ** 2 
//  }
// function f1 (x, y, z){ 
//    f2(util(x+y));
//    f3(util(z+y));
// }
// let x1 =  1;
// let y3 =  1;
// let y4 =  1; 
// f1(x1, y3, y4);