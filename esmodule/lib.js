
// export const num = 8;
// export function square(x){
//    return x * x
// }
// export function add(x, y){
//    return x + y
// }
// export function substract(x, y){
//    return x - y
// }


// export let h = 90
// console.log('no exports here!');
// class b {
//  met(){
//    console.log('no exports here!');
//   }
// }
// function f1 (){
//   console.log('no exports here!');
// }


  let h = 9;
  class b {
 met(){
   console.log('i am default class');
  }
}
   function f1 (){
  console.log('i am default function!');
}

export {h as default, f1,b}
