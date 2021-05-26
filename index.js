 var express=require('express');
  var ejs=require('ejs');
 var bodyparser=require('body-parser');
 var apiroutes=require('./routes/userRoutes')
 
 var app=express();
 
 app.set('view engine','ejs');
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:true}));
 app.use(express.static(__dirname+'/forms2'));
 app.use('/',apiroutes)

 
 

 app.listen(3200,(err)=>{
    if(err){
        console.log('error'+err)
    }
    else{
        "server is running on http://localhost:3200"
    }
})


