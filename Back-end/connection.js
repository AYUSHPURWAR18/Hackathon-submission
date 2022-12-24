var mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'database password',
    database:'database name'
})
con.connect((err)=>{
    if (err){
        console.log('error in connection')
    }else{
        console.log('working')
    }
})

module.exports = con;
