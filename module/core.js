// const os = require('node:os')
// console.log("platform: ", os.platform())
// console.log('Home dir: ', os.homedir())
// console.log('Total memory: ', os.totalmem())


// const fs = require('node:fs');
// fs.writeFileSync("text.file", "Hello how are you" )
// console.log("File written succesfully")


// const content = fs.readFileSync{'log.txt', utf8}

// const fs = require('node:fs')
// fs.writeFileSync('log.txt', 'Hello');// writefileSyn create the file
// console.log('file written successfully!')


// const content = fs.readFileSync('log.txt', 'utf8')
// console.log(content)


// const path = require('node:path');
// const filePath = path.join('folder', 'data', 'log.txt')
// console.log(filePath);


// use to use filePath.join to create path
// const path = require('node:path');
// const filePath = path.join('folder1', 'folder2', 'folder3', 'data', 'log.txt')
// console.log(filePath);

// to list files in a directory


/*

to use the parent of the directory use ..

*/

// to use current directory use .
/*

const fs = require('node:fs');
const dirContent = fs.readdirSync('.')
console.log(dirContent)


*/
// to use the parent of the directory use ..
// const fs = require('node:fs');
// const dirContent = fs.readdirSync('..')
// console.log(dirContent)



// const http = require('node:http');
// const server = http.createServer((req, res)=>{
//   res.end('hello from nodejs server')
// })
// server.listen(3000, ()=>{
//   console.log('server is running on port 3000')
// })