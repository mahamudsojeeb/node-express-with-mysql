let express = require("express");
let mysql = require("mysql2");
let app = express();


let conncetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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
})

app.get("/fetchbyid/:id",(req,res)=>{
    let fetchID = req.params.id;
    conncetion.query("select * from mytable where id=?",fetchID,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
           res.send(result); 
           result = JSON.parse(JSON.stringify(result));
           console.log(result);
        }

    })

})



app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("listening");
    }
})



