var fs = require('fs');

/*
console.log('A');
var result = fs.readFileSync('./syntax/test.txt','utf-8');
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('./syntax/test.txt','utf-8',function(err,result){
    console.log(result);
});
console.log('C');