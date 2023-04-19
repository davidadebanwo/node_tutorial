// Global - No window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(require)
let count = 1
setInterval(()=>{
    console.log("Hello"+count)
    count++
},1000)