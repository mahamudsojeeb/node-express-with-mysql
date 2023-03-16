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

app.delete("/delete/:id",(req,res)=>{
        let id = req.params.id;
        //let name = req.body.name;
        //let mark = req.body.mark;



     
    conncetion.query("delete from mytable  where id = null",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("deleted");
        }
    })
})

app.listen(3000,(err)=>{
   if(err){
    console.log(err);
   } 
});