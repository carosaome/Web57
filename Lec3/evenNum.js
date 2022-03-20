function evenNum(num1, num2){
    let arr=[]

    for (let i = num1; i <= num2; i++) {
        if(i % 2 == 0){
            arr.push(i)
        }
        
    }
    return arr
}

module.exports = evenNum