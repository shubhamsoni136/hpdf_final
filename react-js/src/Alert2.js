import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMid from './Components/AppBarMid';
import ToolBarTop from './Components/ToolBarTop';


const gridContainer1 = {
  margin:'20px'
}

const Alert2 = () => (
    <MuiThemeProvider>
    <ToolBarTop />
    <div style={gridContainer1}>
      <h1>Oops!</h1>
      <h4>Payment for samsung earphone has failed due to some error</h4>
      <h5>Please try again after some time</h5>
    </div>
  </MuiThemeProvider>
    
);

export default Alert2;
