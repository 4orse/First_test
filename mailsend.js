
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/',()=>{
    resizeBy.send('welcome to my forma')
});

app.post('/api/forma', (req,res)=>{
    
    let data =req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail.com',
        port:587,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
    }
    });


let mailOptions={
    from:data.email,
    to: 'testing@gmail.com',
    cc:`${data.email}`,
    subject: `Message from ${data.name}`,
    html:`
    <p>Hello,</p>
    <p>We would like to have a Testing.com account created for our store. Please see the information you require to do so below.
    Please Reply All to this email, or contact us at ${data.email} should there be anything else needed from us for a new account, thank you. </p>
    <h3>Information</h3>
    <ul>
        <li>Store Name:${data.name}</li>
        <li>Store URL:${data.email}</li>
        <li>Store Category:${data.message}</li>
        <li>Affiliate Network:${data.name}</li>
    </ul>

    
    <p>${data.message}</p>
    <p>Respectfully,</p>
    <p>${data.email}</p>
    <h9>Sent using Doyalty</h9>
    `
}; 

smtpTransport.sendMail(mailOptions, (error,response)=>{
    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }
});

smtpTransport.close();

});

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
})