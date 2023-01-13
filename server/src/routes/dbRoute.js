
const express = require('express')
const dbRouter = express.Router()
const {createData,getAllData,getOne} = require('../controllers/database')

dbRouter.post('/create',createData)
dbRouter.get('/getAll',getAllData)
dbRouter.get('/getOne/:Id',getOne)
// dbRouter.delete('/deleteOne/:id',deleteOneData)
// dbRouter.put('/updateOne/:id',updateOneData)



module.exports = dbRouter