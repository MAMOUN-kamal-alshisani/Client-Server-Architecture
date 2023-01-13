
const express = require('express');
// const mysql = require('mysql')
const server = express()
require('dotenv').config()
const PORT = process.env.PORT || 4001
const dbRouter = require('./src/routes/dbRoute')
const cors = require('cors')

server.use(cors())
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use('/api',dbRouter)




server.get('/',(req,res)=>{
  
  res.status(200).send("<h2>Home Route!</h2>")
})




server.listen(PORT,()=> console.log(`Running on port ${PORT}`))
// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"cbmisdb",
// })

// connection.connect((err)=> {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });