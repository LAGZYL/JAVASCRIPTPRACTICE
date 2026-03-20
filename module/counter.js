console.log('counter module loaded')
let count =0;
function increment(){
 count++;
  return count;
}
function decrement(){
 count--;
 return count;
}
module.exports = {increment}


/*

//module resolution step
1.require() loads the module
2.node executes the module ONCE
3. the module's EXPORTS object is CACHED (SAVED)
4. subsequent require returns the same cached object

*/