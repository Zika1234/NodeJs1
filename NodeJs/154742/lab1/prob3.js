var http = require('http');
var fs=require('fs');

http.createServer(function(req,res){
    var jsondata= '{"name":"Hello","age":15}'
var js= JSON.stringify(jsondata);
fs.writeFileSync('prob3.json',jsondata);
console.log(JSON.parse(fs.readFileSync('prob3.json')))
 
res.write(jsondata);
res.end();
}).listen(1010,() =>{
    console.log("Progressing");
});







/nodequestions