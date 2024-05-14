const express = require('express')
const app = express()

// --------------------------Middleware----------------------
app.use(function(req, res, next){
    console.log("welajsd")
    next();

})


// -------------------------- Simple Route----------------------

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
  res.send('Hi there , Nice to meet you')
})



// -------------------------------- error handle --------------------------
app.get("/new", function(req, res, next){
    return next (new Error ("Nothing here"))
    
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(3000)