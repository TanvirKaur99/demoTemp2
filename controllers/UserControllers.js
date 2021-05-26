module.exports.formspage=(req,res)=>{
res.sendFile(__dirname+"/views/forms.html")

}

module.exports.show=(req,res)=>{
  var userDetails={
      name:req.body.username,
      email:req.body.email,
  }
  res.render('../controllers/views/form2',{data:userDetails});


}