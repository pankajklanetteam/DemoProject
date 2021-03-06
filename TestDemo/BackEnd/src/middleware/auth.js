const jwt = require('jsonwebtoken')
const User = require('../models/User')


const auth = async(req,res,next)=> {
   if(!req.header("Authorization"))
   {
     res.status(401).send({error : "Please_Authenticate"})
   }

    try{
    const token =  req.header('Authorization').replace('Bearer ', '')
        
    const decode  = jwt.verify(token, 'secret key');
    const user = await User.findOne({_id : decode._id , 'tokens.token' : token })
    // const user = await User.find({_id : decode._id , 'tokens.token' : token })
    if(!user)
    {
        res.status(401).send({error : "Please_Authenticate"})  // not authorized
        // throw new Error("Please Authenticate");
    }
        req.user = user;
        next()
}
    catch(e)
    {
        res.send({ error : e.message , 'test' : "auth" })
    }
}


module.exports = auth