import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
    boxSizing: 'border-box',
    fontFamily: 'ABeeZee, sans-serif',
    borderRadius: '0px',
    padding:'10px',
    width: '290px',
    marginTop: '15px',
    margin:'20px'
};

const styleH3 = {
    marginTop: '10px',
    padding: '0',
    fontSize: '18px',
    fontFamily: 'ABeeZee, sans-serif',
    fontWeight: '700',
    color: '#14171a',
};

const styleDiv = {
    fontFamily: 'ABeeZee, sans-serif',
    fontSize:'14px',
    textAlign: 'justify',
    color:'#14171a'
    
   
};
  

const About = () => (
    <Paper style={paperStyle}>
      <div><h3 style={styleH3}>About</h3></div>
      <div style={styleDiv}>Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.</div>
    </Paper>
);
  
export default About;