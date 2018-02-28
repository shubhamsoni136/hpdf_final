import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import stripe from './Images/stripe.png';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const styleCard = {
  marginTop: '20px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const style = {
  marginTop:'20px',
  marginLeft:'250px',
  marginBottom:'30px'
};

const Field = {
    marginLeft:'170px'
}


const Post1 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Credit Card"
        subtitle="Enter the details:"
        avatar={stripe}
      />
    <TextField
      floatingLabelText="Card No. " id="cno" maxlength="16" style={Field}/>
   <TextField floatingLabelText="Expiry Year" maxlength="2" id="date" style={Field} />
     <TextField
      floatingLabelText="CVV Code " id="cvv" maxlength="3" style={Field}/><br/>

     <RaisedButton onClick={()=>{
      var cardn=document.getElementById('cno').value;
      var daten=document.getElementById('date').value;
      var cvvn=document.getElementById('cvv').value;
      var data = "card%5Bname%5D=shubham&card%5Bnumber%5D="+cardn+"&card%5Bexp_month%5D=10&card%5Bexp_year%5D="+daten+"&card%5Bcvc%5D="+cvvn;
console.log(document.getElementById('date').value);
var xhr1 = new XMLHttpRequest();
xhr1.withCredentials = true;

xhr1.addEventListener("readystatechange", function () {
 if (xhr1.readyState === 4) {
   if(xhr1.status==200){
    console.log(JSON.parse(this.responseText).id);
    var data = JSON.stringify({
   "stripeToken": JSON.parse(xhr1.responseText).id
 });
 
 var xhr2 = new XMLHttpRequest();
 xhr2.withCredentials = true;
 
 xhr2.addEventListener("readystatechange", function () {
   if (xhr2.readyState === 4) {
     if(xhr2.status==200){
       window.location="/success";
     }else{
       window.location="/failed";
     }
   }
 });
 
 xhr2.open("POST", "https://api.beanpole34.hasura-app.io/charge");
 xhr2.setRequestHeader("content-type", "application/json");
 xhr2.setRequestHeader("cache-control", "no-cache");
 
 xhr2.send(data);
   }else{
     window.location="/failed";
   }
 }
});

xhr1.open("POST", "https://api.stripe.com/v1/tokens");
xhr1.setRequestHeader("Authorization", "Bearer "+public_key_stripe);
xhr1.setRequestHeader("Cache-Control", "no-cache");
xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr1.send(data);}} label="Pay" primary={true} style={style} />
     
  </Card>
  );
  
  export default Post1;
