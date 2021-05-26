


var express=require('express');
var route=express.Router();
var myctrl=require('../controllers/UserControllers');
route.get('/',myctrl.formspage);
route.post('/form2',myctrl.show);
module.exports=route;
