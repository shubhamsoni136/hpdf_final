var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var stripe = require('stripe')(secret_key);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/',function(req,res){
   res.send('hello'); 
});

app.post('/charge',function(req,res){
    const amount = 2500;
    stripe.charges.create({
        amount: amount,
        currency: "usd",
        description: "Example charge",
        source: req.body.stripeToken,
      }, function(err, charge) {
        // asynchronously called
        console.log(charge);
        if(err){
            return res.status(400).send('failed');
        }
        res.send('success');
      });
      
});

app.listen(8080,function(){
    console.log('server is running at port 8080');
});
