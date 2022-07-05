const jwt = require('jsonwebtoken');
const authCtl = {}

authCtl.verifyToken = async (req, res, next)=>{
    if(!req.headers.authorization){
      res.json({ 'status':'0', 'msg': 'Unauthorized request.'})
    }
   var arrayTexto = req.headers.authorization.split(' ');
   var token = null;
   (arrayTexto.length >=2)?token=arrayTexto[1]:token=null;
   if(token==null){
    res.json({ 'status':'0', 'msg': 'Unauthorized request.'});
   }else{
   try {
     const payload = jwt.verify(token, "secretkey");
     req.userId = payload._id;
     next(); 
   } catch (error) {
   res.json({ 'status':'0', 'msg': 'Unauthorized request.'});
   }
  }
}

module.exports = authCtl;