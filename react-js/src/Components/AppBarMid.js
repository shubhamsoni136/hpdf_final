import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const titleStyle = {
    color: '#fff',
    fontSize: '27px',
    Wight: 'bold',
    overflow: 'hidden',
    paddingLeft: '10px',
    fontWeight: 'bold', 
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

const style = {
  backgroundColor: '#00aced',
  position: 'inherit'
};

const AppBarMid = () => (
  <AppBar
    title="Credit Card Details"
    style={style}
    titleStyle={titleStyle}
    showMenuIconButton = {false}
  />
);

export default AppBarMid;