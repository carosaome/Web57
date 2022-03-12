const fs = require('fs')

const data = '1, 8, 5, 7, 2'
fs.writeFile('../num.text', data,{encoding:'utf8'},
    (err)=>{
        if(err) throw err
        console.log('sucess');
    }


)