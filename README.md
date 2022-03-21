# Node.js_Syntax

## How do you get a list of the names of all files present in a directory in Node.js?

```JavaScript
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
```


```JavaScript
var fs = require('fs');
fs.readFile('sample.txt','utf-8',(err, data)=>{
    console.log(data);  
});
```
