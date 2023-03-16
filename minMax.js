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

app.get("/fetchMax",(req,res)=>{
        // //let id = req.params.id;
    
        // let namel = req.body.namel;
        // let mark = req.body.mark;

        // console.log(namel);

     
    conncetion.query("select max(mark) as MaxMark from mytable",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            let data = JSON.parse(JSON.stringify(result))
            
            console.log(result);
            console.log(data);
        }
    })
})

app.listen(3000,(err)=>{
   if(err){
    console.log(err);
   } 
});