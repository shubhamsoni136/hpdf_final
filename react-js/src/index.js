import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Payment from './Payment';
import HomePage from './HomePage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Alert1 from './Alert1';
import Alert2 from './Alert2';


ReactDOM.render(<BrowserRouter>
   <HomePage />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
