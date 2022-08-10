 function redirectHTTPS(req, res,next){
    if(!req.secure && req.get('x-forwarded-photo') !== 'https'){
        return 
    }
    res.redirect('https://' + req.get('host') + req.url)
    next()
 }

 const express = require('express')
 const  app = express()
 
 app.use(redirectHTTPS)

 app.use(express.static('./dist/pharmacyapp'))
 app.get('/*',(req,res)=> res.sendFile('index.html',{root: './dist/pharmacyapp'}))

 app.listen(process.env.PORT || 4200)