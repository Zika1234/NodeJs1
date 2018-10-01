var exp = require('express');
var parser = require('body-parser');
var cors = require ('cors');
var ump = require ('./model1');


var MongoClient = require('mongodb').MongoClient

var app = exp();
var result;
app.get('/rest/api/read', async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept"),
    // res.json({"name":"alpha"})
  
    result= await ump.FindAll();
    res.send(result);


    
});


app.use(cors()).listen(1234, ()=>{
    console.log('Express Started')
})

app.use(parser.json());



app.post("/rest/api/write", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);
res.send(req.body);

MongoClient.connect('mongodb://localhost:27017/emp1',
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('Newdata');
    coll.collection('new').insert(req.body, true, function(err,res){
        if(err) throw err;
        console.log("1 document inserted");
        dbvar.close();
    })          
    dbvar.close();
})



});

app.post("/rest/api/remove", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);
res.send(req.body);

MongoClient.connect('mongodb://localhost:27017/emp1',
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('Newdata');
    coll.collection('new').remove(req.body, true, function(err,res){
        if(err) throw err;
        console.log("1 document Removed");
        dbvar.close();
    })          
    dbvar.close();
})
});


app.post("/rest/api/update", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
console.log(req.body);
res.send(req.body);
ump.UpdateModule(req.body)

});

app.post("/rest/api/find", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"),
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept")
// console.log(req.body);

ump.FindData(req.body)
res.send(req.body);
});

app.get('/rest/api/find/:ename', cors(), (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*"),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    // res.json({"name":"alpha"})
  
    var query= {'name':req.params['ename']};

     MongoClient.connect('mongodb://localhost:27017/emp3',{useNewUrlParser:true},
function(err, dbvar){
    if(err) throw err;

    var coll = dbvar.db('Newdata');
    coll.collection('new').find(query).toArray(function(err,data){
        if(err) throw err;
        console.log(data);
        res.send(data);
        dbvar.close();
    })          
    dbvar.close();
})


    
});