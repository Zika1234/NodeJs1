var http = require('http');
var fe= require('fs');

http.createServer(function(req,res){
    var x= JSON.parse(fe.readFileSync('prob2.json'));
    console.log(x);
       res.write(JSON.stringify(x));
       res.end();
    }).listen(1010,() =>{
    console.log("Progressing");
});