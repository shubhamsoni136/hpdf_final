import React from 'react';
import ToolBarTop from './ToolBarTop';
import About from './About';
import P3 from './P3';
import PrivacyPolicy2 from './PrivacyPolicy2';
import ProfileC from './ProfileC'


const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '26% 48% 26%',
}


const Home= ()=> (
	<div>
	<ToolBarTop />
    <div style={gridContainer}>
      <div class="class-items">
        <ProfileC />
        <About />
      </div>
      <div class="class-items">
        <P3 />
      </div>
      <div class="class-items">
        <PrivacyPolicy2 />
      </div>
    </div>
 </div>
);

export default Home;