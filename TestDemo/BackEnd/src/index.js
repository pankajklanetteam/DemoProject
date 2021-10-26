const express = require('express')
const app  = express()
const loginRoute = require('../src/routes/loginRoute')
const employeePersonalRoute = require('../src/routes/employeePersonal')
const employeedataRoute = require('../src/routes/employeeData')
require('../src/db/mongoose')
const Port  = process.env.Port || 8568


app.use(express.json())
app.use(loginRoute)
app.use(employeePersonalRoute);
app.use(employeedataRoute);



app.get('/' , (req,res) => {
    res.send("This is employee Details endpoint");

})



app.listen(Port , ()=> {
   console.log("SERVER IS HOSTED OVER PORT : ", Port);
})

