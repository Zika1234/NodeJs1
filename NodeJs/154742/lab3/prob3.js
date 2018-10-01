var exp = require('express');
var fr = require('fs');
var cors = require ('cors');



var app=exp();

app.get('/rest/api/change', function(req,res){
    
    console.log("Hello");
    var x= JSON.parse(fr.readFileSync('file.json'));
    var p= x.length;
    console.log(p);
var i;
    for(i=0;i<p;i++)
    {
        if(x[i].empName=="Sebastian")
        {
            x[i].empAddress.city="Singapore"

        res.write(JSON.stringify(x[i]));
        console.log(JSON.stringify(x[i]));
        }
    }
     res.end();

});

app.use(cors()).listen(1010, ()=>{
   
    console.log('Express Started')
})