// // class person{
// //     constructor(name, age, country,state){
// //         this.name = name;
// //         this.age = age;
// //         this.country = country
// //         this.state = state
// //     }
// //     greet(){
// //         console.log(`my name is ${this.name}, i am ${this.age} years old, from ${this.country}, state of ${this.state}`)
// //     }
// // }

// // const PERSON = new person("Gbenga", 19, "Nigeria", "Oyo")
// // PERSON.greet()

// /**
//  /**
// // //  * Create a class called Car that represents a car. The class should:
// // // Have a constructor that takes the following properties:
// // // brand (string)
// // // model (string)
// // // year (number)
// // // mileage (number, default to 0)
// // // Have the following methods:
// // // drive(distance)
// // // Increases the car's mileage by distance and logs
// // // "You drove <distance> km. Total mileage is now <mileage> km."
// // // getDetails()
// // // Logs "Brand: <brand>, Model: <model>, Year: <year>, Mileage: <mileage> km"
//  */

// // class car{
// //     constructor(brand, model,year,mileage){
// //         this.brand = brand;
// //         this.model = model;
// //         this.year = year;
// //         this.mileage = mileage;
// //     }
// //      getDetails(){
// //         console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage} km`)
// //      }

// //     drive(newMileage){
// //         this.mileage= newMileage
// //         console.log(`you drove ${this.mileage}. Total mileage ${this.mileage}`);
// //     }
// // }
// // const CAR = new car("Toyota", "Matrix", 2024, 90);
// // CAR.getDetails();
// // CAR.drive(92);
// // CAR.getDetails();

// // /**
// //  Create a class called Student to represent a student's academic information.
// // // The class should:
// // // Have a constructor that takes:

// // // name (string)

// // // level (string) – e.g., "100 Level", "200 Level"

// // // courses (array of strings, default to an empty array)

// // // Have the following methods:

// // // registerCourse(courseName)

// // // Adds the course name to the courses array

// // // Logs: "Course <courseName> has been registered.

// // // listCourses()

// // // Logs the list of registered courses, e.g.,
// // // "Registered Courses: Mathematics, Physics"

// // // getProfile()

// // // Logs: "Name: <name>, Level: <level>, Total Courses: <number of courses>

// // class Student{
// //     constructor(name, level, courses = [], ){
// //         this.name = name;
// //         this.level = level;
// //         this.courses = courses;
// //     }
// //     getProfile(){
// //         console.log(`name: ${this.name}, level ${this.level}, courses: ${this.courses}`)
// //     }
// //     registeredcourse(coursename){
// //     this.courses.push(coursename)
// //     console.log(`course ${coursename} has been registered`)
// //     }
// //     listcourse(listcourses){
// //         console.log(`Registered Courses: ${this.courses.join(" , ")}`)
// //     }
// // }
// // const STUDENT = new Student ("Abaire Femi", 400,
// //      ["Biology", "Mathematics", "Physics", "Microbiology", "Agriculture"])

// // STUDENT.getProfile()
// // STUDENT.registeredcourse("Biology", "Physics", "Chemistry" )
// // STUDENT.listcourse("Mathematics", "Microbiology", "Agriculture", "BusinessStudies", "Commerce")


// //  *Create a class called BankAccount to represent a simple bank account system.
// // The class should:
// // Have a constructor that takes:
// // accountHolder (string)
// // balance (number, default to 0)
// // Include the following methods:
// // deposit(amount)
// // Adds the amount to the balance
// // Logs: "Deposited ₦<amount>. New balance is ₦<balance>."
// // withdraw(amount)
// // Subtracts the amount from the balance only if sufficient funds exist
// // If successful, log: "Withdrew ₦<amount>. New balance is ₦<balance>."
// // If insufficient funds, log: "Insufficient balance!"
// // checkBalance()
// // Logs: "Account Holder: <accountHolder>, Balance: ₦<balance>"

// class BankAccount{
//     constructor(accountHolder, balance, ){
//         this.accountHolder = accountHolder
//         this.balance = balance
//     }
//     deposit(amount){
//     this.balance += amount
//     console.log(`Deposited ${amount}. New balance is ${this.balance}`)
//     }
//     withdraw(amount){
//         if(amount<= this.balance){
//             this.balance -=amount
//             console.log(`Withdrew ${amount}. New balance is ${this.balance}`)
//         }else{
//             console.log("insufficient funds")
//         }
        
//     }
//     checkBalance(){
//             console.log(`accountHolder: ${this.accountHolder}, Balance: ${this.balance}`)
//         }
// }

// const BANKACCOUNT = new BankAccount("Gbenga Lasisi", 0)
// BANKACCOUNT.deposit(50000);
// BANKACCOUNT.withdraw(20000);
// BANKACCOUNT.checkBalance()

// /**
// Create a class called Student that represents a student record.
// The class should:
// Have a constructor that takes:
// name (string)
// age (number)
// grades (an array of numbers)
// Include the following methods:
// addGrade(grade)
// Adds a new grade to the student's grades array
// Logs: "Added grade <grade>. Grades are now: <grades>"
// getAverage()
// Calculates and logs the average of all grades
// Logs: "Average grade for <name> is <average>"
// getDetails()
// Logs: "Name: <name>, Age: <age>, Grades: <grades>"
// Your Tasks:
// Create two Student objects.
// Add at least 2 grades to each student using addGrade().
// Call getAverage() and getDetails() for both students.
// */

// class Student{
//     constructor(name, age,grades =[] ){
//         this.name = name;
//         this.age = age;
//         this.grades = grades;
//     }
//     addGrade(Grade){
//         this.grades.push(85, 56, 76, 54)
//         console.log(`Added Grade ${Grade}. grades are now ${this.grades}`)
//     }
//  getAverage() {
//         let sum = 0;

//         for (let grade of this.grades) {
//             sum += grade;
//         }

//         let average = sum / this.grades.length;
//         console.log(`Average grade is ${average}`);
// }
// getDetails(){
//     console.log(`Name: ${this.name}, Age: ${this.age}, Grades: ${this.grades}`)
// }

// }
// const STUDENT = new Student("Ayomikun Daniel", 22, [34, 77, 78])
// STUDENT.addGrade(78.54, 67,);
// STUDENT.getAverage();
// STUDENT.getDetails();


// class C {}
// console.log(typeof C)

// class Animal {
//   constructor(name){
//    this.name = name;
//    this.speed = 100;
// }

//  run(speed){
//   this.speed = speed;
//   console.log(`${this.name} is running at ${this.speed}`)
  
// }
//  stop(){
//   this.speed = 0;
//   console.log(`${this.name} is at stand still`)
// }

// }

// let animal = new Animal("My animal");

// class Rabbit extends Animal {
//     constructor (name, speed, earLength){
//     super();
//     this.name = name;
//     this.speed = speed;
//     this.earLength = earLength;
    
    
//    }
//     hide(){
//      console.log(`${this.name} hides for its life!`)
//   }
//   stop(){
//     super.stop()
//     this.hide()
//   }

// }

// let rabbit = new Rabbit('Red rabbit', 20,67)
// // rabbit.run(56)
// // rabbit.hide()
// // rabbit.stop()
// // rabbit.hide()
// console.log(rabbit.s);
// console.log(rabbit.e);
// console.log(rabbit.n);


// // class Product{
// //   constructor(name,price){
// //     this.name=name;
// //     this.price=price
// //   }
// //   getPrice(){
// //    return this.price
// // }
// // getName(){
// //   return this.name;
// // }
// // getValue(){}
// // getStorePlace(){
// // }
// // static util(){
// //   console.log('I am static');
// //  }
// //  static me(){}
// // }
// // let product = new Product("Rice", 94)
// // Product.util()
// // // let price = product.getPrice()
// // // console.log(price);
// // // let name = product.getName()
// // // console.log(name)

// // console.log(Reflect.ownKeys(Product))
// // console.log(Reflect.ownKeys(Product.prototype))



// class PrimaryAccount{
//   constructor(x,y){
//     this.name = y;
//     this.balance = x;
//     console.log("this.name ",this.name)
//     console.log("this.balance ",this.balance)
    
//   }
//   withdraw(amount){
//     if(this.balance > amount){
//       console.log ("Withdraw succesful")
//     }else {
//       console.log("withdraw not successful")
//     }
  
//   }
// }

  //  class Savingaccount extends PrimaryAccount{
  //    constructor(name, balance, newname){
  //     super(balance, name);
  //     this.newname= newname;
  //     console.log("i inherited this.name ", this.name)
  //     console.log("i inherited this.balance ", this.balance)
  //     console.log("i own this.newname ", this.newname)
      
      
//       }
//       withdraw(amount, naira){
//         super.withdraw(amount)
//         console.log("i am withdrawing", naira)

//       }
//        withdraw(){
//        console.log("meee")
//       }
//        withdraw(amount, naira){
//         super.withdraw(amount)
//         console.log("i am withdrawing", naira)

//       }
      
      
//     }    
  
// let savingaccount = new Savingaccount("Lagzy", 10, "Gbeenga")
// savingaccount.withdraw(2, "Notes")




   
// // class D {
// //   constructor (name){
// //    this.name = name;
// // }
// // toString(){
// //   return `i am returning ${this.name}`// overriding toString
// // }
// // }

// // const obj = new D('id')

// // console.log(obj.toString()); "[object Object]"
// // // console.log(obj);
// // console.log(Reflect.ownKeys(Object.prototype));


class A{
  constructor(home){
    this.home = home;
    console.log("A", this.home) // roadClud
  }
}

class B extends A{
  constructor(house){
    // let x = "house"
    super(house)
   this.house= house; // roadClud
   console.log("b", this.house)
  }
}

// let b = new B(100)

class C extends B{
  constructor(club){
    super(club + "clud")// roadclud
   this.club = club; 
   console.log("C", this.club) // road
  }
}
new C("road");
