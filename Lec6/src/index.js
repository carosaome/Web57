require('dotenv').config()
const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const route = require('./routes/index')
const app = express()
const port = 9000
mongoose.connect(process.env.MONGODB_URI,err=>{
 if(err){
     return console.log(err)
 }
 console.log('connect')
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

route(app)
app.get('/', (req, res) => {
    res.send('home')
})
app.listen(process.env.PORT || port, () => {
    console.log(`http://localhost:${port} is running`);
})