var MongoClient = require('mongodb').MongoClient


function update(){

MongoClient.connect('mongodb://localhost:27017/', 
    function(err,dbvar){
        if (err) throw err;
        // var productId = {'product ID':'1'}
        var coll = dbvar.db('newdb');
        coll.collection('temp').update({"name":"Lee1"},{$set:{"name":"max1"}},true,function(err,data){
            if(err) throw err;
            console.log("1 document Updates");
            
            dbvar.close();
            console.log(data)           //To get data in console
        })
        dbvar.close;
    })
    


}

update();