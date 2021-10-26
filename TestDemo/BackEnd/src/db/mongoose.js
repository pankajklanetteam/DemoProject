const mongoose = require('mongoose')

try{
mongoose.connect('mongodb://127.0.0.1:27017')
console.log("connection established")
}
catch(e)
{
    console.log("unable to connect with database");
}

