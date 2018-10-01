

var http = require('http');

var arr = ["max","max1","max2","max3","max4","max5"];

http.createServer(

  

    function(req,res){
    res.writeHead(200,{"Content-type":"application/json"});
    console.log(arr);
    //res.write('{"key":"value"}');
   // res.end();
    }
).listen(1323,() =>{
    console.log("Progressing");
})