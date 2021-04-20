'use strict'

module.exports = (req,res,next)=>{
    if (req.query.name){
        next()
    } else{
        next('Where is the name')
    }
}