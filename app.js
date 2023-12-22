// const name = require('./name')
// const sayHi = require('./module')
// const array = require('./array')
// // console.log(array)

// require("./addValues")

// // sayHi("Susan")
// // sayHi(name.john)
// // sayHi(name.peter)


// const os = require('os')

// const user = os.userInfo()
// console.log(user);


// console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOs);

// const path = require('path')
// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath);


// const base = path.basename(filePath)
// console.log(base)

// const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(abs);


// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}) // flag a to append

// const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/third.txt', `Here is the result: ${first}, ${second}`
//         ,(err, result)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         })
//     })
// })



// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('Welcome to home page')
//     }else if(req.url === '/about'){
//         res.end('Welcome to about page')
//     }else{
//         res.end(`<h1>Oops!</h1> <p> 404</p><a href='/'>Go to home</a>`)
//     }
// })

// server.listen(5000)

// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]
// console.log(items);
// const newItems = _.flattenDeep(items)
// console.log(newItems);

