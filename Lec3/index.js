const express = require('express')
const random = require('./random')
const evenNum = require('./evenNum')
const fs = require('fs')
const app = express()
const port = 9000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.get('/course', (req, res)=>{
    res.json({"course": "web57"})
})
app.get('/course/random',(req, res)=>{
    res.json(random())
})
app.get('/login',(req, res)=>{
    res.sendFile(__dirname + '/public/home.html' )
})
app.get('/even', (req, res)=>{
    const {from, to} = req.query
  res.send(evenNum(from, to))
})

app.get('/', (req, res)=>{
    res.send('home')
})
app.get('/auth/login', async(req, res) =>{
    const details = await fs.readFile('./data.txt', 'utf8' ,(err, data) =>{
        res.json(data)
    })
})
app.post('/auth/login', async (req, res)=>{
    let check = true
    if(req.body.username == 'admin' && req.body.password == '123456'){
        check = true
    }
    else{
        check = false
    }
    await fs.writeFile('./data.txt', `{sucess: ${check}}` ,(err)=>{
        if(err) throw err
    })
    const details = await fs.readFile('./data.txt', 'utf8' ,(err, data) =>{
        res.json(data)
    })
    
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port} is running`);
})