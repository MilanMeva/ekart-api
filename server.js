let express = require('express');
let bodyParser = require('body-parser');
let db = require('./db');
let app = express();

// body-parser setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// api endpoint setup
app.use('/api',require('./api'));


app.use((req,res,next)=>{
    let error = new Error("Not Found");
    error.status = 404;
    next(err)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.json({
        error:{
            message:err.message
        }
    })
})


app.listen(4000,()=>{
    console.log("server is running on port 4000");
})