let express = require("express");
let mysql = require("mysql2");
let app = express();


let conncetion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'newdatabase'
})
conncetion.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
});

app.get("/fetch",(req,res)=>{
   conncetion.query("select * from mytable",function(err,result,fields){
    if(err){
        console.log(err);
    }
    else{
        //res.send(result);
        console.log(result);
    }
   }) 
})

app.listen(3000,(err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("listening on port 3000")
    }
})
