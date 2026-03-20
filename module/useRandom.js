const r1 = require('./random')
delete require.cache[require.resolve('./random')]
const r2 = require('./random')

console.log(r1)
console.log(r2)



== and ===