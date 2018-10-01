var MongoClient = require('mongodb').MongoClient


function remove(){

MongoClient.connect('mongodb://localhost:27017/', 
    function(err,dbvar){
        if (err) throw err;
        // var productId = {'product ID':'1'}
        var coll = dbvar.db('newdb');
        coll.collection('temp').remove({'product ID':'2'},true,function(err,data){
            if(err) throw err;
            console.log("1 document Removed");
            console.log(data) 
            dbvar.close();
                      //To get data in console
        })
        dbvar.close;
    })
    


}

remove();