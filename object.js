//  let user = {} literal syntax
//   let user = new object (); Constructor

// let fullName = {
//  first : "Idowu"
// }

// let address ={
//     street : "50 club garden road"
// }

// console.log(fullName.first)
// console.log(fullName["9first"])
   
// fullName["second Name"] = "Dra"
// console.log(fullName)

// address.city = "Akungba"
// console.log(address)
// delete address.street
// console.log(address)

// delete fullName["second Name"]
// console.log(fullName)

// let fruit = "mango"
// let bag = {
//     [fruit + `computer`]: "Silicon valley"
// }
// console.log(bag[fruit + `computer`])


// let obj = {}
// obj. __proto__ =5;
// console.log(obj.__proto__)

// let user1 = {}
// console.log(user.nonexistence)

// let obj = {
//     test: undefined
// }
// console.log(obj.test === undefined)
// console.log("test" in obj)
// let user = {name: "Idowu", age:30, isAdmin:true};
// for (let objkey in user){
//    console.log(objkey);
//    console.log(user[objkey]);
// }


// iteration mean to go over a properties of an Object
// we use for it to iterate


// let user = { Name: "John"};
// let admin = user;
// admin.name = "peter"
// console.log(user.name)
// console.log({}== {})
// let a = {};
// let b ={};
// console.log(a==b);

// let message ="Hello world"
// let phrase ="Hello world"

// console.log(message == phrase)

// primitive value and primitive value are always true 
// non primitive valeu and non primitive value are always false for example is 
// console.log({}=={})// false


// const user = {Name: "joe"};
// const admin ={Name: "joe"};
// user = admin
// user.name = "id"
// console.log(user.name)
// console.log(user == admin)


// How to clone in object

// for in 
// let userObj = { name:'john', age:30, 'city of david': 'okat'};
//  let cloneObj = {};

//  for (let i in userObj) {

//           cloneObj[i] = userObj[i];
//          cloneObj.name = "Lagzyl" 

//  }

// let details ={name:"lagzyl"};
// let clonedetails ={};
// for(let i in details){
//    clonedetails[i] = details[i]
   
// }
// console.log(clonedetails)
// console.log(cloneObj)
// console.log(userObj)
// console.log(cloneObj.name)

// let user = {name: 'john'}
// let permissions1 = {canView: true}
// let permissions2 = {canEdit: true}

// object.assign
// Object.assign(user, permissions1,permissions2)
// console.log(user)

// let user = {name: 'john'}
// let permissions1 = {canView: true}
// let permissions2 = {canView: false}

// Object.assign(user, permissions1,permissions2)
// console.log(user)
// console.log(permissions1);
// console.log(permissions2);

// Object.assign
// let user = {name: 'john'}
// let permissions1 = {canView: true}
// let permissions2 = {canEdit: true}
// Object.assign(user, permissions1,permissions2)
// console.log(user)

/*Spread Syntax*/
// let user = {name: "john", age: 40}
// let clone = {...user};
// console.log(clone);


let user = {
   name: 'john',
   sizes: {height: 87, width: 80 }
}
let clone = {}
Object.assign(clone, user);
console.log(clone);
// user.sizes.width = 60;
// console.log(clone.sizes.width)
// user.sizes.height = 700;
// console.log(clone.sizes.height)
// console.log(user.sizes.height)

// let clone = structuredClone(user)
// user.sizes.height = 900
// clone.sizes.width = 87979;
// console.log(user);
// console.log(clone);