let express = require("express");
let mysql = require("mysql2");
let app = express();

app.use(express.json());


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

app.post ("/post",(req,res)=>{
    // let name = req.body.name;
    //  let mark = req.body.mark;

    conncetion.query("alter table mytable modify id int primary key auto_increment",(err,result)=>{
       if(err){
        console.log(err);
       } 
       else{
        console.log("incremented");
       }
    })

})

app.listen(3000,(err)=>{
    if(err){
     console.log(err);
    } 
 });
