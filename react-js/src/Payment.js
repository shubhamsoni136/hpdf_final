import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMid from './Components/AppBarMid';
import ToolBarTop from './Components/ToolBarTop';
import About from './Components/About';
import P1 from './Components/P1';
import PrivacyPolicy2 from './Components/PrivacyPolicy2';


const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '26% 48% 26%',
}

const Payment = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <AppBarMid />
    <div style={gridContainer}>
      <div class="class-items">
        <About />
      </div>
      <div class="class-items">
        <P1 />
      </div>
      <div class="class-items">
        <PrivacyPolicy2 />
      </div>
    </div>
  </MuiThemeProvider>
);

export default Payment;
