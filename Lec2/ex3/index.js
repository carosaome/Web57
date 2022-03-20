const fs = require('fs')

function divideData(){
         fs.readFile('../num.text', 'utf8', 
         (err, data)=>{
            let arr =[]
            
            if (err) throw err
            for(let i = 0; i<data.length; i++){
                if(data[i] %2){
                    arr.push(data[i])
                }
            }

            fs.writeFile('../result.text', JSON.stringify(arr) ,(err)=>{
                if(err) throw err
            })
    
    })
        
    
    }
    
    divideData()
    