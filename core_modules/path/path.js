const path = require('path')
/*
const fileResolve = path.resolve('data.txt')
const fileJoin = path.join('path','data.txt')
console.log("fileResolve", fileResolve)
console.log("fileJoing", fileJoin)

const base = path.basename(fileResolve, ".txt")
console.log("base ", base )

const directoryName = path.dirname(fileJoin);
console.log(directoryName);

const parse = path.parse(fileResolve)
console.log(parse)*/
/*
Important methods of PATH modules

1. path.join(...segments) : it combines path segments safely

2. path.resolve(...segments) : it creates absolute path

3. path.basename() : it gets the filename from a path

4. path.dirname() : it gets the directory name

5. path.extname() : it gets file extension

6. path.parse() : it breaks a path into parts, or segments

7. path.format() : opposite of .parse()

8. path.isAbsolute() : it gets whether a path is absolute

9  path.normalize() : it fixes inconsistent slashes

10. __dirname  //current directory

11 . __filename //current filename

12 . path.win32.join('file1', 'file2')

13.  path.posix.join('file1', 'file2')
*/
/*
const absolute = path.isAbsolute(fileResolve)
const absolute1 = path.isAbsolute(fileJoin)
console.log("absolute ", absolute)
console.log("absolute1 ", absolute1)

const pathObject = {
  dir: '/users/gbenga',
  name:  'user',
  ext: '.txt'

}

console.log(path.format(pathObject))


console.log(__dirname)
console.log(__filename)


console.log(path.normalize('users//idowu///file.pdf'))


console.log(path.win32.join('file1', 'file2'))

console.log(path.posix.join('file1', 'file2'))*/
/*
const createPath = path.join('users','gbenga','profile.json')

console.log(createPath)

/*
extrract exension from

photo.png*/
/*
const extract = path.extname('photo.png')
console.log(extract)
*/
/* get filename from
/home/admin/config.js*/

console.log(path.basename("/home/admin/config.js"))
