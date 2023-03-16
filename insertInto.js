let express = require("express");
let mysql = require("mysql2");
let app = express();

app.use(express.json())

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'newdatabase'
})
con.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("conncted")
    }
})


app.post('/post',(req,res)=>{
let id = req.body.id;
let namel = req.body.namel;
let mark = req.body.mark;

  con.query('insert into mytable values(?,?,?)',[id,namel,mark],(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send("Posted");
    }

  })
})
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("on");
    }
})