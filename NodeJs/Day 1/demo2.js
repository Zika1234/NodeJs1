vsr f1=(msg)=>{
    return '"hello" $(msg)';
}
var f2=(f1)=>
{
return '$(f1)'
}
console.log(f2(f1("world")));