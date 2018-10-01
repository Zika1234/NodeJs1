var exp = require('express');
var fr = require('fs');
var cors = require ('cors');



var app=exp();

app.get('/rest/api/read', function(req,res){
      res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept"),
    console.log("Hello");
    var x= JSON.parse(fr.readFileSync('file.json'));
    console.log(x);
    res.write(JSON.stringify(x));
    res.end();
});

app.use(cors()).listen(1234, ()=>{
   
    console.log('Express Started')
})