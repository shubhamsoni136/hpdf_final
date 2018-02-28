

import React, { Component } from 'react';
import {
  Text,
  View,
  WebView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

export default class MainView extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      server_resp:'Proceed to Pay...',
      itemId:'',
      amount:0,
      email:'',
      btn_disable:false,
      btn_text:'Pay Now'
    }
  }

  makeCharge = () => {


     this.setState({
        isLoading: true,
        btn_disable:true
     });

    let formData = new FormData();
    formData.append('stripeToken', this.state.itemId);
    formData.append('stripeEmail', this.state.email);
    formData.append('stripeAmount', this.state.amount+"00");


     
    return fetch('https://app.beanpole34.hasura-app.io/charge',{
    method: 'POST',
    body: formData
    }) 

      .then((response) => {

        if(JSON.stringify(response).search("success")==-1)
        {
            this.setState({
            isLoading: false,
            server_resp: "Transaction Failed!\n",
            btn_text:'Failed :('
            });
        }
        else
        {
            this.setState({
            isLoading: false,
            server_resp: "Transaction Success!\n",
            btn_text:'Success :)'
            });
        }
        
      });
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   this.setState({
      //     isLoading: false,
      //     server_resp: responseJson._bodyText,
      //   }, function() {
            
      //   });
      // })
      .catch((error) => {
        console.error(error);
      });  
    }  

  render() {

    const { params } = this.props.navigation.state;
    this.state.itemId = params ? params.itemId : null;
    this.state.amount = params ? params.amount : null;
    this.state.email = params ? params.email : null;
     if (!this.state.isLoading) {
      return (
        <View style = {styles.container}>
        <View style = {styles.container}>
            <Text style={{fontSize: 18,color:'#000000'}}>{this.state.server_resp}</Text>
            <Text style={{marginTop:30,color:'#000000',fontSize: 20,fontWeight:'bold'}}>{this.state.amount} USD</Text>
        </View>
        <TouchableOpacity
               style = {styles.submitButton}
               disabled = {this.state.btn_disable}
               onPress = {this.makeCharge}>
               <Text style = {styles.submitButtonText}> {this.state.btn_text} </Text>
        </TouchableOpacity>
         </View>  

      );
    } else {
        return (
          <View style={styles.container}>
          
          <Text style={{fontSize: 18,color:'#7a42f4', marginTop:30}}>Processing ...</Text>
           <View style={styles.container}>
           <ActivityIndicator
               animating = {true}
               color = '#7a42f4'
               size = "large"
               style = {styles.activityIndicator}/>
               </View>
          </View>
        );

      }
  }

}

const styles = StyleSheet.create ({
   container: {
     
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      justifyContent: 'center',
      height: 60,
      width:1000,
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white',
      fontSize:18
   }
})
