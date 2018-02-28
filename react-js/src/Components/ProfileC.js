import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import stripe from './Images/stripe.png';
import stripelogo from './Images/stripelogo.png';
import Paper from 'material-ui/Paper';

const paperStyle = {
  boxSizing: 'border-box',
  fontFamily: 'ABeeZee, sans-serif',
  borderRadius: '0px',
  width: '290px',
  marginTop: '20px',
  marginLeft: '20px'
};

const styleCardHeaderText = {
  backgroundColor: 'white',
  marginTop: '20px',
  paddingRight: '0px',
};

const styleCardHeaderTitle ={
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '25px',
};

const styleAvatar = {
  border : '3px solid white',
  marginTop:'5px'
};

const styleLabel = {
  color: '#657786',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '.02em',
    lineHeight: '16px',
    textTransform: 'capitalize',
    
};
const logostyle = {
  width:'100px'
};
const styleCardActions = {
  padding: '0px'
};

const ProfileC = () => (
  //<Paper style={paperStyle}>
  <Card style ={paperStyle}>
    <CardHeader textStyle={styleCardHeaderText} titleStyle={styleCardHeaderTitle}
      title="Stripe"
      subtitle="Online Payment Systems"
      avatar = {<Avatar src={stripe} size={70} style={styleAvatar}/>}
    />
  </Card>
  //</Paper>
);

export default ProfileC;
