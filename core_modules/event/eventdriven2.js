/*
shopping cart event system

simulate an e-commerce cart:
  addItem
  removeItem
  checkout

//starter code
*/
const EventEmitter = require('node:events')
const cart = new EventEmitter()

let items = []; //shared state

//TODO: add listerners
cart.on("addItem", (item)=>{
items.push(item)
console.log(`additem, added ${item.name}: ${item.price}`)
})

cart.on("removeItem", (name)=>{
 items =  items.filter(item => {
   let lowername = item.name;
   lowername = lowername.toLowerCase()
   console.log(lowername);
   return  lowername !== name
   })
 console.log(items);
 console.log(`removed item is ${name}`)
})
cart.on("checkout", ()=>{
  let total = items.reduce((sum, item)=>{
    return sum + item.price
  }, 0)
  console.log(`the total is now ${total}`)
})
cart.emit('addItem', {name:'Book', price:1})
cart.emit('addItem', {name:'Pen', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Book', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('removeItem', 'pen')
cart.emit('checkout');


/*
7. Create a "clearCart" event that empties the array.
*/



cart.on("clearCart", ()=>{
  let items = []
  console.log("all item cleared")
} )

cart.emit("clearCart")

/*
8. Create a "countItems" event that logs how many items are in the cart.*/
 
cart.on("countItems", ()=>{
  let count = 0
 
  for(let ele of items){
     count++  
  }
  console.log(count)
})
cart.emit("countItems")



/*9. Create an event that checks whether an item already 
exists before adding it.*/

cart.on("addItem", (item)=>{
  let exists = items.some((ele)=>{
    return ele.name.toLowerCase() === item.name.toLowerCase()
    
  })

if(exists){
    console.log("item already exist")
    return;
}
items.push(item)
console.log(`added ${item.name}: ${item.price}`)
})

cart.emit('addItem', {name:'Book', price:1})
cart.emit('addItem', {name:'Pen', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Book', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Shoe', price:1})
cart.emit('addItem', {name:'Shoe', price:1})



/*
10. Create a "discount" event that reduces all prices by 10%.

⸻

Advanced

11. Emit an "itemAdded" event every time a new item is added.
12. Create separate listeners for:

* logging
* updating totals
* sending notifications

13. Create an "error" event when trying to remove an item that doesn’t exist.
14. Use once() to create a welcome event that runs only one time.
15. Build a mini shopping cart system using only events.*/