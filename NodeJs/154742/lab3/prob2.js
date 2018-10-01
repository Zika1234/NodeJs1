var exp = require('express');
var fr = require('fs');
var cors = require ('cors');



var app=exp();

app.get('/rest/api/find', function(req,res){
      res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept"),
    console.log("Hello");
    var x= JSON.parse(fr.readFileSync('file.json'));
    // console.log(x);
    // res.write(JSON.stringify(x));

   

    var p= x.length;
    console.log(p);

    var i;
    for(i=0;i<p;i++)
    {
        if(x[i].empAddress.state=="Maharashtra")
        {
        res.write(JSON.stringify(x[i]));
        console.log(JSON.stringify(x[i]));
        }
    }
     res.end();
});

app.use(cors()).listen(1020, ()=>{
   
    console.log('Express Started')
})