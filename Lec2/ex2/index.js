// data là một object
const fs = require('fs')

const writeFile = (path, data) => {
    return new Promise((resolve, reject)=>{
        
        fs.writeFile(path, JSON.stringify(data),{encoding:'utf8'},
        (err)=>{
            if(err) {
                throw err
                reject(err)
            }
            resolve(true)  
        })


    })
  }
  
  const writeFileToDisk = async (path, data) => {
    try {
      const isSuccess = await writeFile(path, data);
      console.log(isSuccess);
    } catch (err) {
        console.log(err);
    }
  }

  writeFileToDisk('../ex2.txt', {value: 2})



