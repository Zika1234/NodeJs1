var MongoClient = require('mongodb').MongoClient

exports.UpdateModule = function(x){
    MongoClient.connect('mongodb://localhost:27017/emp3',
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('Newdata');
    coll.collection('new').update(x.ref,{$set:x.val}, true, function(err,res){
        if(err) throw err;
        console.log("1 document Updated");
        dbvar.close();
    })          
    dbvar.close();
})
}





exports.FindAll = function(){
    return new Promise ((resolve,reject)=>{
        MongoClient.connect('mongodb://localhost:27017/',
       function (err,dbvar){
           if(err){
               reject(err);
           }else{
               resolve(dbvar);
           }
       })
    }).then(dbvar=>{
        return new Promise ((resolve,reject)=>{
            const coll= dbvar.db('Newdata')
            coll.collection('new').find().toArray(function(err,data){
                if(err){
                    reject(err);
                }else{
                    console.log("This is mobile")
                    console.log(data);
                    resolve(data);
                }
            })
    })
    })
}

