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

## Synchronous and Asynchronous in node.js
```JavaScript
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

```

## NPM
https://pm2.keymetrics.io/

## form

```javascript
<form action="https://node-syntax-gceab.run.goorm.io" method="post">
    <p><input type="text" name="title"></p>
    <p>
        <textarea name="description"></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>
```
## file write && Redirection
```javascript
fs.writeFile(`data/${title}`,description,'utf8',function(err){
			  response.writeHead(302,{Location: `/?id=${title}`});
			  response.end();
		  })
```

## filename rename

```javascript
fs.writeFile(`data/${title}`,description,'utf8',function(err){
			  response.writeHead(302,{Location: `/?id=${title}`});
			  response.end();
		  })
```

## Remove file

 ```javascript
fs.unlink(`data/${id}`, function(error){
            response.writeHead(302, {Location: `/`});
            response.end();

         
         })
```

## Input Information Security

 ```javascript
var path = require('path'); 
var filteredId = path.parse(queryData.id).base;
```

## Output Information Security


 ```javascript
const sanitizeHtml = require('sanitize-html');

const dirty = 'some really tacky HTML';
const clean = sanitizeHtml(dirty);

const clean = sanitizeHtml(dirty, {
  allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
  allowedAttributes: {
    'a': [ 'href' ]
  },
  allowedIframeHostnames: ['www.youtube.com']
});
```
