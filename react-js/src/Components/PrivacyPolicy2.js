import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
    boxSizing: 'border-box',
    fontFamily: 'ABeeZee, sans-serif',
    borderRadius: '0px',
    height: '154px',
    marginLeft:'25px',
    marginRight:'20px',
    marginTop: '20px',
};

const styleP = {
    color: '#657786',
    fontSize: '12px',
    lineHeight: '16px',
    fontFamily: 'Segoe UI",Arial,sans-serif',
    padding: '15px'
};

const styleDivider = {
    margin: '15px',
};

const styleA = {
    fontSize: '12px',
    fontFamily: 'Segoe UI",Arial,sans-serif',
    color: '#1b95e0',
};

const styleI = {
    marginLeft: '15px',
    marginRight: '10px',
    color: '#1b95e0',
};

const PrivacyPolicy2 = () => (
    <Paper style={style} zDepth={1} >
        <p style={styleP}>© 2017 Stripe About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers</p>
        <Divider style={styleDivider} />
        <i style={styleI} class="fa fa-external-link" aria-hidden="true"></i>
        <a style={styleA} href="#">Advertise with Stripe</a>  
    </Paper>
);
  
  export default PrivacyPolicy2;