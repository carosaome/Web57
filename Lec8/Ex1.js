
const checkByPast= (req, res, next)=>{
  const byPastValue = req.query.byPast
  if(byPastValue ==! 1){
    res.send({ success: 0, message: 'Invalid params' })
    return
  }
  next()
}