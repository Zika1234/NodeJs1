var http = require ('http');
var hello=require('./module');
var fr=require('fs');

function f2(){
    var jsondata='{"name":"Ram","age":123}'
    var js=JSON.stringify(jsondata);
    fr.writeFileSync('hello.json',jsondata)
    console.log(JSON.parse(fr.readFileSync('hello.json')))
}

f2();



var x=(res,req)=>{
    var x= JSON.parse(fr.readFileSync('hello.json'));
    res.write(JSON.stringify(x));
    res.end();
}

http.createServer(x).listen(1234,()=>{
    console.log("Running");
})

// http.createServer(function (req,res,err)

// {
//     res.writeHead(200,{'Content-Type':'text/html'});
// // res.write('{"key":"value"}');
// res.write("<input type='number'>             <input type='reset'>");
// res.write("<ul><li>First</li><li>Second</li></ul>");
// res.write("<a href='#'>JHello</a>");


// res.end();


// }
// ).listen(1234,()=>{console.log('Running');
// })

