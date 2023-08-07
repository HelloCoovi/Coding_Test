const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const result = str.replace(/[a-zA-Z]/g, (char) => {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    })
    
    console.log(result)
});