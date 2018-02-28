import React from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import SearchBar from 'material-ui-search-bar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 0,
};

const labelStyle = {
  textTransform: 'capitalize',
  color: '#66757f',
  position: 'relative',
  textAlign: 'inherit',
  fontFamily: 'Segoe UI,Arial,sans-serif',
  fontSize: '13px',
  fontWeight: 'bold',
  height: '46px',
  padding: '0 14px 0 4px',
};

const styleToolBar = {
  backgroundColor : 'white',
  height:'46px',
};

const styleTweetButton = {
  margin: '0px',
  marginLeft: '16px',
  backgroundColor: '#4AB3F4',
  borderColor: 'transparent',
  border: '1px solid #1da1f2',
  borderRadius: '100px',
  boxShadow: 'none',
  cursor: 'pointer',
  lineHeight: '20px',
  position: 'relative',
  marginRight:'56px'
};

const styleTwitterIcon = {
  color: '#1da1f2',
  fontSize: '32px'
};

export default class ToolbarTop extends React.Component {

  render() {
    return (
      <Toolbar style={styleToolBar}>
        <ToolbarGroup>
          <FlatButton 
            label="For Shoppers" 
            primary={true}  
            icon={<i class="fa fa-shopping-cart" aria-hidden="true"></i>} 
            style={style} 
            labelStyle={labelStyle} 
          >
          </FlatButton>
          <FlatButton 
            label="For Business" 
            primary={true} 
            style={style}
            icon={<i class="fa fa-building" aria-hidden="true"></i>} 
            labelStyle={labelStyle}
          />
          <FlatButton 
            label="Partners" 
            primary={true} style={style}
            icon={<i class="fa fa-users" aria-hidden="true"></i>} 
            labelStyle={labelStyle}/>
          <FlatButton 
            label="Useful Info" 
            primary={true}
            icon={<i class="fa fa-info" aria-hidden="true"></i>} 
            style={style} 
            labelStyle={labelStyle}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <i class="fa fa-cc-stripe" aria-hidden="true" style={styleTwitterIcon}></i>     
        </ToolbarGroup>
      </Toolbar>
    );
  }
}