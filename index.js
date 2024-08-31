import express from "express";
import path from 'path'
const app=express();


const port=3000
import dbConn from './connection/dbConn.js'
dbConn().then(()=>{
    console.log("Connected to the database");
}).catch((err)=>{
    console.log("Error connecting to the database",err);
});

//Schema for the database
// import User from './models/user.js'
import bookingSchema from './models/Bookings.js'


app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join('views'))
app.use(express.urlencoded({ extended: true}))


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/thank',(req,res)=>{
    res.render('thank')
})
app.post('/submit',(req,res)=>{
    const data=req.body;
    const booking=new bookingSchema(data);
    booking.save().then(()=>{
        console.log("Data saved");
    }).catch((err)=>{
        console.log("Error saving data",err);
    })
    res.redirect('/thank')
    console.log(data);
})

app.listen(port,()=>{
    console.log("Server running in port",port);
})