// ✅ push()

// Adds an element to the end of an array

// ✅ pop()

// Removes the last element from the end of an array

// ✅ unshift()

// Adds an element to the front of an array

// ✅ shift()

// Removes the first element from the front of an array
// // concatenation of a string
// let firstName = "Gbenga";
// // let lastName = "Ademola";
// // let fullName = firstName +" "+ lastName
// // console.log(fullName)

// // // index of a string
// // let name = "Ademola"
// // console.log(name[0])
// // console.log(name[1])
// // console.log(name[name.length -1])


// // Slice is to remove part of the Text
// // for example
// // let name = "Gbenga";
// // console.log(name.slice(0, 4));

// // // Note: anything function we call it with parenthesis ()
// // // for example
// // let name = "Gbenga";
// // console.log(name.slice(0, 4));
// // console.log(name.toLowerCase());
// // console.log(name.toUpperCase())


// // trim is use to remove extra spaces from String
// // for example
// let name =      "Gbenga";
// console.log(name)
// // to remove the spaces before Gbenga 
// add .trim
// console.log(name.trim());
// // this will remove the extra spaces that was added before Gbenga


// // includes() or .startsWith() / .endsWith():

// // let phrase = "Hello JavaScript";
// // console.log(phrase.includes("Java"));   
// // console.log(phrase.startsWith("Hello")); 
// // console.log(phrase.endsWith("Script"));  


// let word = "Gbenga is my name";
// let newWord = word.replace("Gbenga", "Lasisi");
// console.log(newWord);


// split is use to split string to form array 
// for example

// let fruit =  "Apple, Mango, Cherry";
// let newFruit = fruit.split(",");
// console.log(newFruit);

// // we use join to join array to form String
// // for example
// let fruit = ["apple", "Mango", "Cherry"]
// let newFruit = fruit.join(",")
// console.log(newFruit)
// let v = "10a"
// let w =  10
// console.log(typeof(v+w))
// console.log(v-w)

let w = 1;
// let v = 1;
// // console.log(2*++w);
// console.log(2*w++);

// // console.log(typeof("" + 1 + 0))
// console.log(6/"3")
// console.log("2"*"3a")
// console.log(4+5+"px")
// console.log("px"+4+5)


for(let i=1;i<11;i++){
    if(i%2!=0){
        continue
    }
    console.log(i)
}