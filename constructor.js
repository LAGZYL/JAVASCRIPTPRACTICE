// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user1 = new User('id')
// let user2 = new User('alaba')
// let user3 = new User('gbenga')
// let user4 = new User('yinka')
// console.log(user1.name);
// console.log(user1.isAdmin);

/*
constructor does not have a return inside them
to call a constructor you need to add new for example new user()
prototype allow use of propertities if they present on the linking chain

*/

// const parent = {
//   value: 2,
//   getValue(){
//    return this.value + 1
//   }
// }

// const child = {a: 89, __proto__: parent};

// console.log(child.getValue())

// child.value = 6;
// console.log(child.getValue());

// const boxes ={

// }

// const boxes ={
//     {value: 1, getValues(){return this.value}}
//     {value: 2, getValue(){return this.Value}}}
//     {value: 3, getValue(){return this.values}}
// }

// const boxPrototype ={
//     getvalue(){
//         return this.value
//     }
// }

// const boxes ={
//     {values: 1, __proto__:boxPrototype},
//     {value:2,__proto__:boxPrototype},
//     {value:3,__proto__:boxPrototype}
// }

function Box(value,motorType){
     this.value = value;
     this.motorType = motorType;
}
// console.dir(Box.prototype);
// Box.prototype.getValue = function(){
//     return this.value
// };
// Box.prototype.getmotorType = function(){
//     return this.motorType
// };
// Box.prototype.fruit = "orange";
// Box.prototype.name = "Lagzyl"
// Box.prototype.color = "red"
// Box.prototype.isTall = true;
// const box1 = new Box(23,"Matrix");
// const box2 =  new Box(67,"Matrix");
// const box3 = new Box(78,"Matrix");
// console.log(box1.getValue(),box1.getmotorType());
// console.log(box2.getValue(),box2.getmotorType());
// console.log(box3.getValue(),box3.getmotorType());

// console.log(Reflect.ownKeys(Object.prototype));
// console.log(Reflect.ownKeys(Function.prototype));
// console.dir(Array.prototype,{depth:2,showHidden:true})

// console.log(Reflect.ownKeys(Function.prototype));
console.log(Reflect.ownKeys(Object.getPrototypeOf(Function.prototype)))
console.log(Reflect.ownKeys(Object.prototype))
console.log(Reflect.ownKeys(Object.getPrototypeOf(Array.prototype)));
console.log(Reflect.ownKeys(Object.getPrototypeOf(Number.prototype)))
console.log(Reflect.ownKeys(Object.getPrototypeOf(String.prototype)))
console.log(Reflect.ownKeys(Object.getPrototypeOf(Boolean.prototype)))
console.log(Reflect.ownKeys(Object.getPrototypeOf(Object.prototype)))

// all of them point to object to Object.prototype
// only Object.prototype ===> nulls