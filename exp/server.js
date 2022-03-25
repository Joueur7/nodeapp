const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/done',(req,res)=>{
 
    const fname = req.body.fname;
    const phone = req.body.phone;
  
    res.send('Welcome' + ' ' + fname +' Your contact number is '+phone+' and your date of birth is ');

})



app.listen(3000);