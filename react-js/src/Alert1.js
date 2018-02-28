import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMid from './Components/AppBarMid';
import ToolBarTop from './Components/ToolBarTop';


const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '26% 48% 26%',
}
const gridContainer1 = {
  margin:'20px'
}
const Alert1 = () => (
    <MuiThemeProvider>
    <ToolBarTop />
    <div style={gridContainer1}>
      <h1 >Success</h1>
      <h4>Payment is successful for samsung earphone</h4>
      <h5>Soon it will be deliverd to your registered address</h5>
    </div>
  </MuiThemeProvider>
);

export default Alert1;
