import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import stripelogo from './Images/stripelogo.png';
import stripe from './Images/stripe.png';
import sear from './Images/sear.jpg';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const styleCard = {
  marginTop: '20px',
  
  height:'380px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e6ecf0',
  borderRight: '1px solid #e6ecf0',
  backgroundClip: 'padding-box',
  fontFamily: 'ABeeZee, sans-serif',
  
};

const styleCardHeader = {
  paddingBottom: '0px'
};

const style = {
  marginLeft:'260px'
};
const earstyle = {
  height:'250px',
  marginLeft:'180px'
};

const Post3 = () => (
    <Card style={styleCard}>
      <CardHeader style={styleCardHeader}
        title="Make Your Payment for Samsung Earphone"
        subtitle="Rs 400"
        avatar={stripe}
      />
      <div ><img src={sear} alt="" style={earstyle}/></div>
      <Link to="/payment"><RaisedButton label="Payment" primary={true} style={style} onclick={<a 	href= './Payment.js'></a>}/></Link>
        </Card>
  );


  export default Post3;
