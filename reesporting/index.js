/*
barrel modullexport

/* conceptual expansion of re-exporting
export { add} from './add.js'

import {add} from './add.js'
export {add}
*/


// export { default as add} from './add.js'
// export {default as substract} from './substract.js'
/*
another syntax of re exporting note: the above syntax will not 
export the default export.

*/
export * from './add.js'
export * from './substract.js'