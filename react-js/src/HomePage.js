import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/home';
import Payment from './Payment';
import Alert1 from './Alert1';
import Alert2 from './Alert2';
import { Switch , Route} from 'react-router-dom';

const HomePage = (props) => (
  <MuiThemeProvider>
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route path="/payment" component ={Payment}/>
      <Route path="/success" component ={Alert1}/>
	<Route path="/failed" component={Alert2}/>		
    </Switch>
  </MuiThemeProvider>
);

export default HomePage;
