var MongoClient = require('mongodb').MongoClient


function find(){

MongoClient.connect('mongodb://localhost:27017/', 
    function(err,dbvar){
        if (err) throw err;
        var productId = {'product ID':'1'};
        var coll = dbvar.db('newdb');
        coll.collection('temp').find(productId).toArray(function(err,data){
            if(err) throw err;
            console.log("1 document found out");
            console.log(data) 
            dbvar.close();
                      //To get data in console
        })
        dbvar.close;
    })
    


}

find();