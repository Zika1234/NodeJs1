var MongoClient = require('mongodb').MongoClient

function insert(){

    var x =[{
        "product ID":"1",
        "product name":"Soap",
        "product cost":10
    },
    {
        "product ID":"2",
        "product name":"Solution",
        "product cost":20
    }
    ];


MongoClient.connect('mongodb://localhost:27017/', 
    function(err,dbvar){
        if (err) throw err;

        var coll = dbvar.db('newdb');
        coll.collection('temp').insert(x,true,function(err,res){
            if(err) throw err;
            console.log("1 document in serted");
            dbvar.close();
            console.log(res)           //To get data in console
        })
        dbvar.close;
    })
    
}
      insert();  


