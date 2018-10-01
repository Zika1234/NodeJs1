var exp = require('express');
var fr = require('fs');
var cors = require ('cors');



var app=exp();

app.get('/rest/api/add', function(req,res){
    var x= JSON.parse(fr.readFileSync('file.json'));

    var array= 
    {
      "empId": 1010,
      "empName": "shubham",
      "empSalary": 40000,
      "empAddress": {
        "city": "raipur",
        "state": "Chhatisgarh"
      }
    }
    

    x.push(array);



    console.log(x);
    // res.write(JSON.stringify(x));
    // res.end();
});

app.use(cors()).listen(1234, ()=>{
   
    console.log('Express Started')
})


