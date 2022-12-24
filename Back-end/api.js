const express = require("express");
const con = require("./connection");
var cors = require('cors')
const { query } = require("express");
const bodyparser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyparser.json());
app.get('/menu', (req,res)=>{
    console.log("running");
    qry = "select * from res";
    con.query(qry,(err,data)=>{
        if (err){
            console.log("err in select menu");

        }
        console.log(data);
        res.json(data)
    })
})
app.post('/addMenu', (req,res)=>{
    console.log("running");
   const name = req.body.name;
   const price = req.body.price;
   const  image= req.body.image;
   const description = req.body.description;

    qry = "insert into res (name ,price, image, description) values ( ?,?,?,?)";
    con.query(qry,[name , price, image, description],(err,data)=>{
        if (err){
            console.log("err in add menu");

        }
        console.log("added in menu");
    })
})
app.delete('/deletemenu/:id', (req,res)=>{
    const id = req.params.id;
    qry = "delete from res where _id = ?";
    con.query(qry,[id],(err,data)=>{
        if (err){
            console.log("err in delete menu");

        }
        console.log("deleted from menu");
    })
})

app.get('/booking', (req,res)=>{
    console.log("running");
    qry = "select * from Booking";
    con.query(qry,(err,data)=>{
        if (err){
            console.log("err in select booking");

        }
        console.log(data);
        res.json(data)
    })
})

app.put('/updatebooking/:id', (req,res)=>{
    id = req.params.id;
    qry = "update Booking set status='Approved' where _id=?";
    con.query(qry,[id],(err,data)=>{
        if (err){
            console.log("err in up booking");

        }
        console.log("updated booking");
    })
})

app.post('/addbooking', (req,res)=>{
    const name = req.body.name;
    const  email = req.body.email;
    const phone = req.body.phone;
    const person = req.body.person;
    const date = req.body.date;
    const status = req.body.status;



   let qry = "insert into Booking (name  ,email ,phone ,person ,date , status)values (  ?, ? , ? , ? , ? ,?)";
   
    con.query(qry,[name , email,phone,person,date, status],(err ,data)=>{
        if (err){
            console.log("err in add booking");

        }
        console.log("add in booking");
    })
})
app.delete('/deletebooking/:id', (req,res)=>{
    const id = req.params.id;
    qry = "delete from Booking where _id = ?";
    con.query(qry,[id],(err,data)=>{
        if (err){
            console.log("err in delete Booking");

        }
        console.log("deleted from Booking");
    })
})





/*<----------------------------------------------------------->*/

app.post('/login', (req,res)=>{
    console.log("running");
    const name = req.body.email;
    const  pass = req.body.password;
    qry = "SELECT * FROM registration WHERE email = ? AND password = ?";
    con.query(qry,[name , pass],(err,data)=>{
        
        if (data == 0){
            console.log("err in login");
            

        }
   else{
    res.send(data);
    console.log(data);
       
        
    }
    
        
    })
})

     



/*<----------------------------------------------------------->*/



app.listen(8000, (err) => {
    if (err){
        console.log("not running");}
    else
        console.log("Server is running at port 8000:");
});