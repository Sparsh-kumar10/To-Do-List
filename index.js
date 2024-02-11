const express=require('express')
const router=express.Router();
const bodyParser=require('body-parser')
const path=require('path');
const mongoose= require('mongoose');


const app=express()

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',require('./routes/main'))


mongoose.connect('mongodb+srv://Sparsh:spa123rsh@cluster0.lw6t6qn.mongodb.net/?retryWrites=true&w=majority')
.then(result=>{
    app.listen(1000)
})
.catch(err=>{
    console.log(err)
})



