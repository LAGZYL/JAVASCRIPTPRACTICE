// class c{}
// console.log(typeof c)
// // obj.[[prototype]]===> obj.[[prototype]].[[prototype]]===>obl.[[prototpe]].[[protptype]].
// // [[prototype]]= null
// const objParent = {a:67,  x:89}
// const objp3 ={ n:78, m:45, __proto__:objParent}
// const objChild = {b:78, __proto__: objp3}
// console.log(objChild.b) 
// console.log(objChild.n)
// console.log(objChild.m)
// console.log(objChild.x);


// const Objgrandparent = {y: 45, x: 89}
// const objgrandchild = {a:6, c:6, d:5, __proto__: Objgrandparent}
// console.log(objgrandchild.a);
console.log(Object.prototype);

/**
 {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
 */


// const Obj4= {x:56,}

// console.log(Obj4.toLocaleString);


// const o = {
//  a:1,
//  __proto__: {
//      b:6,
//      __proto__: {
//        c: 7,
//     }
// }
// }
// const o4 ={d:3}
// const o5 = {f:5,__proto__:o4}
// const o1 = {c:7, __proto__:o5}
// const o6 = {h:9,__proto__:o1}
// const o2 = {b:6, __proto__:o6}
// const o3 = {a:1, __proto__:o2}
// console.log(o6.f);
// inheritance
// error handling



// O3 ===> 02 ===>o6 ===> 01 ====> o5===> 04 ===> Object.prototpe===>null

// console.log(o3.a)  //  own prop 1
// console.log(o3.b)  // inherited prop 6
// console.log(o3.c)
// console.log(o2.c)
